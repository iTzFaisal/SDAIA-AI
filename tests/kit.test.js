import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import "../content/kit.js";
import "../content/questions.js";
import "../assets/core.js";

const kit = globalThis.STUDY_KIT;
const core = globalThis.StudyCore;
const attempt = (domain = "d1") => ({ kind: "exam", mode: "timed", title: `Paper ${domain}`, started: 1000, deadline: 2000, questions: core.prepare(core.paperQuestions(kit.questions, domain)).map(q => ({ id: q.id, order: q.order })), answers: {}, checked: [], flags: [], index: 0 });

test("seven exact blueprint weights total 100; release availability is honest", () => {
  assert.equal(kit.domains.length, 7);
  assert.deepEqual(kit.domains.map(d => d.weight), [17.3, 16.7, 14, 18, 12.6, 14.7, 6.7]);
  assert.equal(Math.round(kit.domains.reduce((sum, d) => sum + d.weight, 0) * 10), 1000);
  assert.deepEqual(kit.domains.filter(d => d.status === "available").map(d => d.id), ["d1", "d2", "d3", "d4", "d5", "d6"]);
  assert.ok(kit.domains.slice(6).every(d => d.status === "planned"));
  assert.equal(kit.examDate, "2026-12-05");
});
test("all thirty-six lessons have objectives, substantial content, references, and separate question coverage", () => {
  assert.equal(kit.lessons.length, 36);
  assert.equal(new Set(kit.lessons.map(l => l.id)).size, 36);
  for (const d of kit.domains.filter(d => d.status === "available")) {
    assert.equal(kit.lessons.filter(l => l.domain === d.id).length, 6);
    assert.ok(kit.revisions[d.id].length >= 12);
    assert.equal(d.paperMinutes, 45);
  }
  for (const l of kit.lessons) {
    assert.ok(l.objectives.length >= 3);
    assert.ok(l.sections.length >= 5);
    assert.ok(l.sections.flatMap(s => s.paragraphs).join(" ").split(/\s+/).length >= 400, l.id);
    assert.ok(l.sources.every(id => kit.sources.some(s => s.id === id)));
    assert.ok(l.traps.length >= 3 && l.recall.length >= 2 && l.takeaway);
    assert.ok(l.sections.some(s => s.title.startsWith("Worked example")), l.id);
    assert.equal(kit.questions.filter(q => q.lesson === l.id && q.pool === "quiz").length, 3);
    assert.equal(kit.questions.filter(q => q.lesson === l.id && q.pool === "exam").length, 4);
  }
});
test("252 unique original question entries have valid answers and explanations for every option", () => {
  assert.equal(kit.questions.length, 252);
  assert.equal(new Set(kit.questions.map(q => q.id)).size, 252);
  assert.equal(new Set(kit.questions.map(q => q.stem)).size, 252);
  for (const domain of ["d1", "d2", "d3", "d4", "d5", "d6"]) {
    assert.equal(kit.questions.filter(q => q.domain === domain && q.pool === "quiz").length, 18);
    assert.equal(core.paperQuestions(kit.questions, domain).length, 24);
  }
  for (const q of kit.questions) {
    assert.equal(q.options.length, 4);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    assert.ok(q.options.every(o => o.text && o.explanation.length > 20));
    assert.ok(kit.lessons.some(l => l.id === q.lesson && l.domain === q.domain));
    assert.ok(["Foundation", "Applied", "Stretch"].includes(q.difficulty));
  }
});
test("shuffling preserves every question and option without mutating original content", () => {
  const original = JSON.stringify(kit.questions);
  const prepared = core.prepare(kit.questions, () => .25);
  assert.equal(JSON.stringify(kit.questions), original);
  assert.deepEqual(prepared.map(q => q.id).sort(), kit.questions.map(q => q.id).sort());
  for (const q of prepared) assert.deepEqual([...q.order].sort(), [0, 1, 2, 3]);
});
test("grading uses original option indexes, not shuffled display letters", () => {
  const questions = core.prepare(kit.questions, () => 0);
  const answers = Object.fromEntries(questions.map(q => [q.id, q.answer]));
  const result = core.score(questions, answers);
  assert.equal(result.correct, 252);
  assert.equal(result.percent, 100);
  assert.equal(result.answered, 252);
  assert.equal(Object.keys(result.byLesson).length, 36);
  assert.equal(Object.values(result.byDifficulty).reduce((sum, b) => sum + b.total, 0), 252);
});
test("unanswered and invalid responses count as incorrect", () => {
  const q = kit.questions.slice(0, 3);
  const result = core.score(q, { [q[0].id]: q[0].answer, [q[1].id]: 90 });
  assert.equal(result.correct, 1);
  assert.equal(result.answered, 1);
  assert.equal(result.percent, 33);
  assert.equal(core.score([], {}).percent, 0);
});
test("absolute deadlines do not restart on reload and clamp at expiry", () => {
  assert.equal(core.remaining(11000, 1000), 10);
  assert.equal(core.remaining(11000, 5500), 6);
  assert.equal(core.remaining(11000, 11000), 0);
  assert.equal(core.remaining(11000, 12000), 0);
  assert.equal(core.remaining(null), null);
});
test("saved attempts validate known IDs, pool, option permutation, mode, and indexes", () => {
  const good = attempt();
  assert.ok(core.validAttempt(good, kit.questions));
  for (const mutate of [
    a => { a.questions[0].id = "unknown"; },
    a => { a.questions[0].order = [0, 0, 1, 2]; },
    a => { a.questions.push(a.questions[0]); },
    a => { a.index = 999; },
    a => { a.answers[a.questions[0].id] = 9; },
    a => { a.answers.unknown = 0; },
    a => { a.mode = "timed"; a.deadline = null; },
    a => { a.checked = "invalid"; },
    a => { a.questions[0].id = "l1-q1"; }
  ]) {
    const corrupt = structuredClone(good); mutate(corrupt);
    assert.equal(core.validAttempt(corrupt, kit.questions), false);
  }
});
test("papers remain domain-isolated and legacy Domain 1 attempts still resume", () => {
  const legacy = attempt();
  assert.equal(legacy.domain, undefined);
  assert.ok(core.validAttempt(legacy, kit.questions));
  const d2 = { ...attempt("d2"), domain: "d2" };
  assert.ok(core.validAttempt(d2, kit.questions));
  assert.ok(core.paperQuestions(kit.questions, "d2").every(q => q.domain === "d2" && q.pool === "exam"));
  const d3 = { ...attempt("d3"), domain: "d3" };
  assert.ok(core.validAttempt(d3, kit.questions));
  assert.ok(core.paperQuestions(kit.questions, "d3").every(q => q.domain === "d3" && q.pool === "exam"));
  const mixedD3 = structuredClone(d3);
  mixedD3.questions[0] = d2.questions[0];
  assert.equal(core.validAttempt(mixedD3, kit.questions), false);
  delete mixedD3.domain;
  assert.equal(core.validAttempt(mixedD3, kit.questions), false);
  assert.equal(core.validAttempt({ ...d3, domain: "d2" }, kit.questions), false);
  const d4 = { ...attempt("d4"), domain: "d4" };
  assert.ok(core.validAttempt(d4, kit.questions));
  assert.ok(core.paperQuestions(kit.questions, "d4").every(q => q.domain === "d4" && q.pool === "exam"));
  for (const previous of [legacy, d2, d3]) {
    const mixedD4 = structuredClone(d4);
    mixedD4.questions[0] = previous.questions[0];
    assert.equal(core.validAttempt(mixedD4, kit.questions), false);
    delete mixedD4.domain;
    assert.equal(core.validAttempt(mixedD4, kit.questions), false);
  }
  assert.equal(core.validAttempt({ ...d4, domain: "d3" }, kit.questions), false);
  const d5 = { ...attempt("d5"), domain: "d5" };
  assert.ok(core.validAttempt(d5, kit.questions));
  assert.ok(core.paperQuestions(kit.questions, "d5").every(q => q.domain === "d5" && q.pool === "exam"));
  for (const previous of [legacy, d2, d3, d4]) {
    const mixedD5 = structuredClone(d5);
    mixedD5.questions[0] = previous.questions[0];
    assert.equal(core.validAttempt(mixedD5, kit.questions), false);
    delete mixedD5.domain;
    assert.equal(core.validAttempt(mixedD5, kit.questions), false);
  }
  assert.equal(core.validAttempt({ ...d5, domain: "d4" }, kit.questions), false);
  const d6 = { ...attempt("d6"), domain: "d6" };
  assert.ok(core.validAttempt(d6, kit.questions));
  assert.ok(core.paperQuestions(kit.questions, "d6").every(q => q.domain === "d6" && q.pool === "exam"));
  for (const previous of [legacy, d2, d3, d4, d5]) {
    const mixedD6 = structuredClone(d6);
    mixedD6.questions[0] = previous.questions[0];
    assert.equal(core.validAttempt(mixedD6, kit.questions), false);
    delete mixedD6.domain;
    assert.equal(core.validAttempt(mixedD6, kit.questions), false);
  }
  assert.equal(core.validAttempt({ ...d6, domain: "d5" }, kit.questions), false);
  assert.deepEqual(core.paperQuestions(kit.questions, "d7"), []);
  assert.deepEqual(core.paperQuestions(kit.questions, undefined), []);
  assert.equal(core.validAttempt({ ...d2, domain: "d1" }, kit.questions), false);
  const mixed = structuredClone(d2);
  mixed.questions[0] = legacy.questions[0];
  assert.equal(core.validAttempt(mixed, kit.questions), false);
  delete mixed.domain;
  assert.equal(core.validAttempt(mixed, kit.questions), false);
  const quiz = { ...d2, kind: "quiz", mode: "learning", deadline: null };
  assert.equal(core.validAttempt(quiz, kit.questions), false);
});
test("question calculations and denominators match worked cases", () => {
  const recall = kit.questions.find(q => q.id === "e17");
  assert.equal(recall.options[recall.answer].text, `${24 / (24 + 16) * 100}%`);
  const precisionRecall = kit.questions.find(q => q.id === "l5-q1");
  assert.equal(precisionRecall.options[precisionRecall.answer].text, `Precision ${12 / 15 * 100}%; recall ${12 / 20 * 100}%`);
  const regression = kit.questions.find(q => q.id === "e21");
  assert.equal(regression.options[regression.answer].text, `MAE ${(2 + 8) / 2} kW; MSE ${(4 + 64) / 2} kW²`);
  const update = kit.questions.find(q => q.id === "d2-e06");
  assert.equal(update.options[update.answer].text, (0.8 - 0.2 * -0.3).toFixed(2));
  const budget = kit.questions.find(q => q.id === "d2-e14");
  assert.equal(budget.options[budget.answer].text, `${6000 - (800 + 1200 + 2500 + 700)} tokens`);
  const retrieval = kit.questions.find(q => q.id === "d2-e21");
  assert.equal(retrieval.options[retrieval.answer].text, `${2 / 4 * 100}%`);
  const coverage = kit.questions.find(q => q.id === "d2-l6-q2");
  assert.equal(coverage.options[coverage.answer].text, `${20 / 50 * 100}% answer rate; ${15 / 20 * 100}% of answers pass`);
  const amplification = kit.questions.find(q => q.id === "d3-l3-q2");
  assert.equal(amplification.options[amplification.answer].text, String(3 * 3));
  const deadline = kit.questions.find(q => q.id === "d3-e10");
  assert.equal(deadline.options[deadline.answer].text, `${8 - 3 - 2} seconds total`);
  const answerText = id => { const q = kit.questions.find(q => q.id === id); return q.options[q.answer].text; };
  assert.equal(answerText("d4-l3-q2"), `Candidate ${20 / 200 * 100}% errors versus control 0%, plus overall ${20 / 2000 * 100}%`);
  assert.equal(answerText("d4-l4-q2"), `${150 / 600 * 100}%, with quality reported for the eligible cohort and its limitations`);
  assert.equal(answerText("d4-l5-q2"), String(10000 * .01));
  assert.equal(answerText("d4-e11"), `Candidate ${80 / 1000 * 100}%; overall ${80 / 20000 * 100}%`);
  assert.equal(answerText("d4-e18"), `${40000 * .005 - 150} bad requests`);
  assert.equal(answerText("d4-e19"), `${120 / 200 * 100}% answer coverage; ${90 / 120 * 100}% of answers pass`);
  assert.equal(answerText("d5-l2-q2"), `${3 * 16 / 8} GB for weights alone`);
  assert.equal(answerText("d5-l3-q2"), `${800 + 200 / 2} ms`);
  assert.equal(answerText("d5-l4-q2"), `${600 / 800 * 100}%`);
  assert.equal(answerText("d5-l5-q2"), `${(60 - 45) * 20} jobs`);
  assert.equal(answerText("d5-e06"), `${4 * 16 / 8} GB becomes ${4 * 8 / 8} GB; total serving memory still needs measurement`);
  assert.equal(answerText("d5-e10"), `${Math.max(300, 500) + 200} ms`);
  assert.equal(answerText("d5-e11"), `${300 / 60} acceptable results/s and ${18 / 300} units/acceptable result`);
  assert.equal(answerText("d5-e14"), `Ideal stage throughput is ${6 / .12} requests/s; this request waits at least ${30 + 120} ms for its result`);
  assert.equal(answerText("d5-e18"), `${480 / (50 - 30)} seconds`);
  assert.equal(answerText("d5-e19"), `${Math.min(4 * 20, 70)} requests/s`);
  assert.equal(answerText("d5-e22"), `RTO missed by ${35 - 30} minutes; RPO met with an ${60 - 52}-minute data gap`);
  assert.equal(answerText("d6-l1-q2"), `A ${24 / 30 * 100}%; B ${15 / 30 * 100}%; gap ${24 / 30 * 100 - 15 / 30 * 100} percentage points`);
  assert.equal(answerText("d6-l2-q2"), `Capacity ${4 * (60 / 4)} cases/hour; backlog grows ${90 - 4 * (60 / 4)} cases/hour`);
  assert.equal(answerText("d6-l5-q2"), `${9 / 60 * 100}% on this test set`);
  assert.equal(answerText("d6-e03"), `A ${12 / 60 * 100}%; B ${12 / 30 * 100}%`);
  assert.equal(answerText("d6-e07"), `Capacity ${4 * (60 / 2)}/hour; backlog grows ${160 - 4 * (60 / 2)}/hour before other overhead`);
  assert.equal(answerText("d6-l6-q2"), `${72 - 54} hours; containment and escalation must not wait`);
  assert.equal(answerText("d6-e23"), `${72 - 60} hours; other communication and response duties remain separate`);
});
test("generated documents exist and the reserved practice paper contains no answer key", async () => {
  for (const name of ["curriculum.md", "domain-1-study-notes.md", "domain-1-practice-paper.md", "domain-1-answer-key.md", "sources-and-exam-facts.md", "printable-workbook.html", "printable-practice-paper.html", "printable-answer-key.html"]) {
    await access(new URL(`../notes/${name}`, import.meta.url));
  }
  for (const d of kit.domains.filter(d => d.status === "available")) {
    const read = name => readFile(new URL(`../notes/${name}`, import.meta.url), "utf8");
    const paper = await read(`domain-${d.number}-practice-paper.md`);
    const key = await read(`domain-${d.number}-answer-key.md`);
    const notes = await read(`domain-${d.number}-study-notes.md`);
    const prefix = d.number === 1 ? "printable" : `domain-${d.number}-printable`;
    const htmlPaper = await read(`${prefix}-practice-paper.html`);
    const htmlKey = await read(`${prefix}-answer-key.html`);
    const workbook = await read(`${prefix}-workbook.html`);
    assert.equal((paper.match(/^### \d+\./gm) || []).length, 24);
    assert.equal((key.match(/\*\*Correct answer:/g) || []).length, 24);
    assert.equal((htmlPaper.match(/class="question"/g) || []).length, 24);
    assert.equal((htmlKey.match(/<strong>Correct:/g) || []).length, 24);
    assert.equal((workbook.match(/<article>/g) || []).length, 6);
    assert.ok(!paper.includes("**Correct answer:"));
    assert.ok(!htmlPaper.includes("<strong>Correct:"));
    for (const q of kit.questions) {
      if (q.pool === "exam" && q.domain === d.id) {
        assert.ok(paper.includes(q.stem) && key.includes(q.stem));
        for (const o of q.options) {
          assert.ok(!paper.includes(o.explanation) && !htmlPaper.includes(o.explanation));
          assert.ok(key.includes(o.explanation));
        }
      } else {
        assert.ok(!paper.includes(q.stem), `Paper ${d.id} includes another pool/domain: ${q.id}`);
      }
    }
    for (const l of kit.lessons) {
      assert.equal(notes.includes(l.takeaway), l.domain === d.id);
    }
    for (const [term, text] of kit.revisions[d.id]) assert.ok(notes.includes(text) && workbook.includes(term));
    if (d.prerequisite) assert.ok(notes.includes(d.prerequisite) && workbook.includes(d.prerequisite));
    for (const prior of kit.domains.filter(prior => prior.status === "available" && prior.number < d.number)) {
      const priorPrefix = prior.number === 1 ? "printable" : `domain-${prior.number}-printable`;
      assert.ok(workbook.includes(`href="${priorPrefix}-workbook.html"`));
    }
  }
});
test("Domain 6 retains explicit ethics, privacy, and conditional notification boundaries", () => {
  const lessonText = id => kit.lessons.find(l => l.id === id).sections.flatMap(s => s.paragraphs).join(" ");
  const privacy = lessonText("d6-l3");
  const governance = lessonText("d6-l6");
  assert.ok(privacy.includes("not an authoritative translation or legal advice"));
  assert.ok(privacy.includes("processing-activity records, not every underlying payload"));
  assert.ok(privacy.includes("not automatically anonymous"));
  assert.ok(governance.includes("72 hours from awareness") && governance.includes("when the breach could harm"));
  assert.ok(governance.includes("notification to affected subjects without undue delay"));
  assert.ok(governance.includes("cannot waive legal obligations"));
  assert.ok(governance.includes("not automatically identical to a legally required data protection officer"));
  assert.ok(governance.includes("voluntary adaptable guidance, not Saudi law"));
  for (const id of ["sa-pdpl", "sa-regulations", "sa-transfer"]) {
    const source = kit.sources.find(s => s.id === id);
    assert.equal(new URL(source.url).hostname, "dgp.sdaia.gov.sa");
    assert.ok(source.note.includes("12 October 2026"));
  }
});
test("Domain 6 reflects the May 2025 ethics edition, controls, roles, and visual annex mapping", async () => {
  const lesson = id => kit.lessons.find(l => l.id === id);
  const text = id => lesson(id).sections.flatMap(s => s.paragraphs).join(" ");
  const source = kit.sources.find(s => s.id === "sa-ethics");
  assert.equal(new URL(source.url).hostname, "sdaia.gov.sa");
  assert.equal(new URL(source.url).pathname, "/en/SDAIA/about/Documents/ai-principles.pdf");
  for (const phrase of ["May 2025", "SDAIA-P114E", "version 1"]) assert.ok(source.title.includes(phrase));
  assert.ok(source.note.includes("Learner-supplied") && source.note.includes("12 October 2026"));
  const ethics = text("d6-l1");
  for (const phrase of ["little or no risk", "limited risk", "high risk", "unacceptable risk", "pre- and post-conformity assessments", "metrics, and allowed thresholds during Plan and Design", "does not supply one universal numerical fairness threshold"]) assert.ok(ethics.includes(phrase), phrase);
  const oversight = text("d6-l2");
  for (const phrase of ["human oversight and final determination", "social scoring or mass surveillance", "DM.1", "BV.10", "Third-party procurement"]) assert.ok(oversight.includes(phrase), phrase);
  assert.ok(text("d6-l3").includes("does not override its unacceptable-risk restrictions"));
  const governance = text("d6-l6");
  for (const phrase of ["sense–plan–act", "signed-off datasets", "user acceptance testing", "'Binding for Third-party'", "not permission for the adopting entity", "PD.12", "BV.7", "DM.17–18", "Optional Registration", "not the AI Engineer exam's", "still require production monitoring"]) assert.ok(governance.includes(phrase), phrase);
  const tables = lesson("d6-l6").sections.map(s => s.table).filter(Boolean);
  const roles = tables.find(t => t.caption.startsWith("Adopting-entity roles"));
  assert.deepEqual(roles.rows.map(r => r[0]), ["Head of Entity / Chief Data Officer (CDO)", "Chief Compliance Officer / Compliance Officer (CCO/CO)", "Responsible AI Officer (RAIO)", "AI System Assessor"]);
  const mapping = tables.find(t => t.caption === "Annexure B lifecycle mapping (page 40)");
  assert.deepEqual(mapping.rows, [
    ["Fairness Position Statement", "Plan and Design"],
    ["Ethical Impact Assessment", "Plan and Design; Deploy and Monitor"],
    ["Privacy and Security Standards", "All four stages"],
    ["Architecture for Trustworthy AI", "Plan and Design"],
    ["Algorithm Assessment", "Build and Validate; Deploy and Monitor"],
    ["Fairness Assessment", "Build and Validate"],
    ["AI Methods Explanation Report", "Build and Validate; Deploy and Monitor"],
    ["Algorithm Auditing", "Build and Validate; Deploy and Monitor"],
    ["Safety Self-Assessment", "All four stages"],
    ["Data Protection Methods", "All four stages"]
  ]);
  const read = name => readFile(new URL(`../${name}`, import.meta.url), "utf8");
  for (const file of ["notes/domain-6-study-notes.md", "notes/domain-6-printable-workbook.html"]) {
    const output = await read(file);
    assert.ok(output.includes(source.title), file);
    assert.ok(output.includes("Annexure B lifecycle mapping (page 40)"), file);
    assert.ok(output.includes("Responsible AI Officer (RAIO)"), file);
    assert.ok(output.includes("unacceptable risk"), file);
    assert.ok(!output.includes("AI Ethics Principles (September 2023)"), file);
  }
  const facts = await read("notes/sources-and-exam-facts.md");
  assert.ok(facts.includes("SDAIA May 2025 ethics framework (SDAIA-P114E, version 1)"));
  assert.ok(!facts.includes("September 2023 ethics framework"));
});
test("release copy and classic offline script wiring include Domain 6 without presenting future domains as available", async () => {
  const read = name => readFile(new URL(`../${name}`, import.meta.url), "utf8");
  const index = await read("index.html");
  assert.deepEqual([...index.matchAll(/<script defer src="([^"]+)"><\/script>/g)].map(m => m[1]), ["content/kit.js", "content/questions.js", "assets/core.js", "assets/app.js"]);
  assert.ok(index.includes('href="#domain/d6"') && index.includes("Available: Domains 1–6"));
  for (const file of ["content/kit.js", "content/questions.js", "assets/core.js", "assets/app.js"]) {
    assert.ok(!/^\s*import\b|\bimport\s*\(|\bfetch\s*\(/m.test(await read(file)), file);
  }
  const curriculum = await read("notes/curriculum.md");
  assert.ok(curriculum.includes("36 lessons") && curriculum.includes("108 lesson questions"));
  assert.ok(curriculum.includes("Domain 7 and all full weighted mocks are planned"));
  const sources = await read("notes/sources-and-exam-facts.md");
  for (const id of ["http", "schema", "retries", "testing", "agency", "review", "ml-rules", "ml-monitoring", "release", "canary", "slo", "observability", "incidents", "storage", "compute", "quantization", "distillation", "overload", "balancing", "integrity", "placement", "recovery", "sa-ethics", "sa-pdpl", "sa-regulations", "sa-transfer", "ai-rmf", "injection", "supply-chain", "poisoning", "output-security"]) {
    assert.ok(sources.includes(kit.sources.find(s => s.id === id).url));
  }
});
