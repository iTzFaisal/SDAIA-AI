import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import "../content/kit.js";
import "../content/questions.js";
import "../content/mocks.js";
import "../assets/core.js";

const kit = globalThis.STUDY_KIT;
const core = globalThis.StudyCore;
const paper = core.mockQuestions(kit.questions, "m1");
const allocation = { d1: 26, d2: 25, d3: 21, d4: 27, d5: 19, d6: 22, d7: 10 };
const makeAttempt = () => ({ kind: "mock", mock: "m1", mode: "timed", title: "Mock 1", started: 1000, deadline: 2000, questions: core.prepare(paper, () => .37).map(q => ({ id: q.id, order: q.order })), answers: {}, checked: [], flags: [], index: 0 });
const answerText = id => { const q = paper.find(q => q.id === id); return q.options[q.answer].text; };
const read = name => readFile(new URL(`../notes/${name}`, import.meta.url), "utf8");

test("Mock 1 is a fresh reserved 150-question set with the exact practice allocation", () => {
  assert.deepEqual(kit.mocks.map(m => [m.id, m.status]), [["m1", "available"], ["m2", "planned"], ["m3", "planned"]]);
  assert.deepEqual(kit.mocks[0].allocation, allocation);
  assert.equal(kit.mocks[0].minutes, 180);
  assert.equal(paper.length, 150);
  assert.equal(new Set(paper.map(q => q.id)).size, 150);
  assert.deepEqual(paper.map(q => q.id).sort(), Array.from({ length: 150 }, (_, i) => `m1-${String(i + 1).padStart(3, "0")}`));
  const prior = kit.questions.filter(q => q.pool !== "mock");
  assert.equal(prior.length, 294);
  for (const q of paper) {
    assert.equal(q.mock, "m1");
    assert.ok(!prior.some(old => old.id === q.id || old.stem === q.stem));
    assert.ok(!prior.some(old => JSON.stringify(old.options.map(o => o.text)) === JSON.stringify(q.options.map(o => o.text))), q.id);
  }
  for (const d of kit.domains) {
    const count = paper.filter(q => q.domain === d.id).length;
    assert.equal(count, allocation[d.id]);
    assert.ok(Math.abs(count / paper.length * 100 - d.weight) < .1);
    assert.ok(core.paperQuestions(kit.questions, d.id).every(q => q.pool === "exam" && !q.mock));
  }
  for (const l of kit.lessons) assert.ok(paper.some(q => q.lesson === l.id), l.id);
  for (const difficulty of ["Foundation", "Applied", "Stretch"]) assert.ok(paper.some(q => q.difficulty === difficulty));
  assert.deepEqual([0, 1, 2, 3].map(a => paper.filter(q => q.answer === a).length), [38, 38, 37, 37]);
  assert.deepEqual(core.mockQuestions(kit.questions, "m2"), []);
  assert.deepEqual(core.mockQuestions(kit.questions, "m3"), []);
  assert.deepEqual(core.mockQuestions(kit.questions, undefined), []);
  assert.deepEqual(core.mockQuestions(kit.questions, "d1"), []);
  // Fixed downloadable order begins across domains, not seven concatenated papers.
  assert.equal(new Set(paper.slice(0, 7).map(q => q.domain)).size, 7);
});

test("mock grading uses original option indexes and question-count weighting exactly once", () => {
  const shuffled = core.prepare(paper, () => .19);
  const answers = Object.fromEntries(shuffled.filter(q => q.domain === "d4").map(q => [q.id, q.answer]));
  const result = core.score(shuffled, answers);
  assert.equal(result.correct, 27);
  assert.equal(result.answered, 27);
  assert.equal(result.percent, 18);
  for (const [domain, total] of Object.entries(allocation)) assert.deepEqual(result.byDomain[domain], { correct: domain === "d4" ? total : 0, total });
  const allCorrect = core.score(shuffled, Object.fromEntries(shuffled.map(q => [q.id, q.answer])));
  assert.equal(allCorrect.percent, 100);
  assert.equal(allCorrect.correct, 150);
  assert.equal(Object.keys(allCorrect.byLesson).length, 42);
});

test("saved mocks require a complete isolated reserved set and preserve their absolute deadline", () => {
  const good = makeAttempt();
  good.answers[good.questions[0].id] = 2;
  good.flags = [good.questions[0].id];
  assert.ok(core.validAttempt(good, kit.questions));
  assert.ok(core.validAttempt(JSON.parse(JSON.stringify(good)), kit.questions));
  assert.equal(core.remaining(good.deadline, 1500), 1);
  const learning = { ...good, mode: "learning", deadline: null, checked: [good.questions[0].id] };
  assert.ok(core.validAttempt(learning, kit.questions));
  for (const mutate of [
    a => { delete a.mock; },
    a => { a.mock = "m2"; },
    a => { a.mock = "unknown"; },
    a => { a.domain = "d1"; },
    a => { a.questions.pop(); },
    a => { a.questions.push(a.questions[0]); },
    a => { a.questions[1] = a.questions[0]; },
    a => { a.questions[0] = null; },
    a => { a.questions[0].id = "e01"; },
    a => { a.questions[0].id = "d7-l1-q1"; },
    a => { a.questions[0].order = [3, 2, 1, 1]; },
    a => { a.answers[a.questions[0].id] = "2"; },
    a => { a.answers.e01 = 0; },
    a => { a.flags = ["e01"]; },
    a => { a.checked = [a.questions[0].id]; },
    a => { a.deadline = null; },
    a => { a.index = 150; },
    a => { a.kind = "exam"; }
  ]) {
    const corrupt = structuredClone(good);
    mutate(corrupt);
    assert.equal(core.validAttempt(corrupt, kit.questions), false);
  }
  // Future mocks must be isolated even if they share the same domains and size.
  const second = paper.map(q => ({ ...q, id: q.id.replace("m1-", "m2-"), mock: "m2" }));
  const mixed = structuredClone(good);
  mixed.questions[0].id = second[0].id;
  assert.equal(core.validAttempt(mixed, [...kit.questions, ...second]), false);
  const exam = { kind: "exam", mode: "timed", title: "Legacy paper", started: 1000, deadline: 2000, index: 0, questions: core.prepare(core.paperQuestions(kit.questions, "d1")).map(q => ({ id: q.id, order: q.order })), answers: {} };
  assert.ok(core.validAttempt(exam, kit.questions));
  exam.questions[0].id = paper[0].id;
  assert.equal(core.validAttempt(exam, kit.questions), false);
});

test("mistake review can combine old and mock questions without becoming a weighted mock", () => {
  const old = kit.questions.find(q => q.pool === "quiz");
  const review = { ...makeAttempt(), kind: "review", mode: "learning", deadline: null, questions: core.prepare([old, paper[0]]).map(q => ({ id: q.id, order: q.order })) };
  delete review.mock;
  assert.ok(core.validAttempt(review, kit.questions));
  review.mock = "m1";
  assert.equal(core.validAttempt(review, kit.questions), false);
});

test("Mock 1 numerical answers have explicit matched units and denominators", () => {
  assert.equal(answerText("m1-003"), `Mean ${(2 + 3 + 3 + 4 + 18) / 5} minutes; median 3 minutes`);
  assert.equal(answerText("m1-017"), `Precision ${30 / 40 * 100}%; recall ${30 / (30 + 20) * 100}%`);
  assert.equal(answerText("m1-018"), `${2 * 18 / (2 * 18 + 6 + 6) * 100}%`);
  assert.equal(answerText("m1-022"), `MAE ${(1 + 5) / 2} hours; RMSE √${(1 + 25) / 2} hours`);
  assert.equal(answerText("m1-032"), (1.2 - .1 * .4).toFixed(2));
  assert.equal(answerText("m1-040"), `${(8000 - 900 - 1600 - 3000 - 1500).toLocaleString("en-US")} tokens`);
  assert.equal(answerText("m1-047"), `${90 / 150 * 100}% coverage; ${72 / 90 * 100}% of answers pass`);
  assert.equal(answerText("m1-060"), `${12 - 2 - 4} seconds total`);
  assert.equal(answerText("m1-082"), `Candidate ${25 / 500 * 100}%; overall ${25 / 10000 * 100}%`);
  assert.equal(answerText("m1-091"), `${50000 * .01 - 420} bad requests`);
  assert.equal(answerText("m1-103"), `${2 * 16 / 8} GB for weights alone`);
  assert.equal(answerText("m1-106"), `${Math.max(200, 350) + 450} ms`);
  assert.equal(answerText("m1-107"), `SAR ${(24 / 300).toFixed(2)}`);
  assert.equal(answerText("m1-109"), `${(35 - 25) * 12} jobs`);
  assert.equal(answerText("m1-110"), `${360 / (50 - 20)} minutes`);
  assert.equal(answerText("m1-111"), `${Math.min(4 * 30, 90)} requests/second`);
  assert.equal(answerText("m1-112"), `Nominal compute throughput is ${10 / .2} requests/second; that request can wait ${40 + 200} ms`);
  assert.equal(answerText("m1-116"), `RTO missed by ${26 - 20} minutes; RPO met`);
  assert.equal(answerText("m1-119"), `A ${8 / 40 * 100}%; B ${8 / 20 * 100}%; equal miss counts do not mean equal rates`);
  assert.equal(answerText("m1-123"), `Capacity is ${3 * 60 / 3} cases/hour; backlog grows ${90 - 3 * 60 / 3} cases/hour`);
  assert.equal(answerText("m1-137"), `${72 - 57} hours; separate subject notification and response duties still need attention`);
  assert.equal(answerText("m1-143"), `${(120000 - 20000 - 40000) / (20000 + 40000) * 100}%`);
  assert.equal(answerText("m1-144"), `${24000 / (7000 - 3000)} months`);
  assert.equal(answerText("m1-145"), `SAR ${(80 * 60).toLocaleString("en-US")}/month of estimated capacity value, not established cash savings`);
  assert.equal(answerText("m1-146"), `A ${72 - 60}-percentage-point rise, or ${(72 - 60) / 60 * 100}% relative increase; AI causation is not isolated`);
  assert.equal(answerText("m1-149"), `${50 / 200 * 100}% of eligible users`);
});

test("mock explanations preserve reviewed Saudi ethics/legal and financial boundaries", () => {
  const text = id => { const q = paper.find(q => q.id === id); return q.stem + " " + q.options.map(o => o.text + " " + o.explanation).join(" "); };
  for (const phrase of ["Article 24", "controller awareness", "under the stated condition", "Subject notification without undue delay", "containment"]) assert.ok(text("m1-137").includes(phrase), phrase);
  assert.ok(text("m1-129").includes("not turn an activity-record duty into universal retention"));
  assert.ok(text("m1-130").includes("not a complete current inventory"));
  assert.ok(text("m1-138").includes("Ethics-framework roles and statutory privacy duties are distinct"));
  assert.ok(text("m1-139").includes("not an individual assessment result"));
  assert.ok(text("m1-120").includes("one universal numerical fairness cutoff"));
  assert.ok(text("m1-143").includes("one-year simple undiscounted training example"));
  assert.ok(text("m1-145").includes("not established cash savings"));
  assert.ok(text("m1-142").includes("not production approval"));
});

test("all 48 downloads exist; mock paper and fixed key agree without leaking spoilers", async () => {
  const files = await readdir(new URL("../notes/", import.meta.url));
  assert.equal(files.filter(name => /\.(md|html)$/.test(name)).length, 48);
  assert.ok(!files.some(name => /^mock-[23]-/.test(name)));
  const mdPaper = await read("mock-1-practice-paper.md");
  const mdKey = await read("mock-1-answer-key.md");
  const htmlPaper = await read("mock-1-printable-practice-paper.html");
  const htmlKey = await read("mock-1-printable-answer-key.html");
  assert.equal((mdPaper.match(/^### \d+\./gm) || []).length, 150);
  assert.equal((mdKey.match(/\*\*Correct answer:/g) || []).length, 150);
  assert.equal((htmlPaper.match(/class="question"/g) || []).length, 150);
  assert.equal((htmlKey.match(/<strong>Correct:/g) || []).length, 150);
  assert.ok(!mdPaper.includes("**Correct answer:") && !htmlPaper.includes("<strong>Correct:"));
  assert.deepEqual([...mdPaper.matchAll(/^### \d+\. (.+)$/gm)].map(m => m[1]), paper.map(q => q.stem));
  assert.deepEqual([...mdKey.matchAll(/\*\*Correct answer: ([A-D])\./g)].map(m => m[1]), paper.map(q => String.fromCharCode(65 + q.answer)));
  assert.deepEqual([...htmlKey.matchAll(/<strong>Correct: ([A-D])\./g)].map(m => m[1]), paper.map(q => String.fromCharCode(65 + q.answer)));
  for (const q of paper) {
    assert.ok(mdPaper.includes(q.stem) && mdKey.includes(q.stem), q.id);
    assert.ok(mdKey.includes(`../index.html#lesson/${q.lesson}`));
    for (const o of q.options) {
      assert.ok(!mdPaper.includes(o.explanation), q.id);
      assert.ok(mdKey.includes(o.explanation), q.id);
    }
  }
  const escape = s => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  for (const q of paper) for (const o of q.options) {
    assert.ok(!htmlPaper.includes(escape(o.explanation)), q.id);
    assert.ok(htmlKey.includes(escape(o.explanation)), q.id);
  }
  for (const q of kit.questions.filter(q => q.pool !== "mock")) assert.ok(!mdPaper.includes(q.stem), q.id);
  for (const output of [mdPaper, htmlPaper]) {
    assert.ok(output.includes("180 minutes"));
    assert.ok(output.includes("not verified exam specifications"));
    assert.ok(output.includes("not another score multiplier"));
    assert.ok(output.includes("Mocks 2–3 remain planned"));
  }
});
