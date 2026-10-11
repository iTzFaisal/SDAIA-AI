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
  assert.deepEqual(kit.domains.filter(d => d.status === "available").map(d => d.id), ["d1", "d2"]);
  assert.ok(kit.domains.slice(2).every(d => d.status === "planned"));
  assert.equal(kit.examDate, "2026-12-05");
});
test("all twelve lessons have objectives, substantial content, references, and separate question coverage", () => {
  assert.equal(kit.lessons.length, 12);
  assert.equal(new Set(kit.lessons.map(l => l.id)).size, 12);
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
test("84 unique original question entries have valid answers and explanations for every option", () => {
  assert.equal(kit.questions.length, 84);
  assert.equal(new Set(kit.questions.map(q => q.id)).size, 84);
  assert.equal(new Set(kit.questions.map(q => q.stem)).size, 84);
  for (const domain of ["d1", "d2"]) {
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
  assert.equal(result.correct, 84);
  assert.equal(result.percent, 100);
  assert.equal(result.answered, 84);
  assert.equal(Object.keys(result.byLesson).length, 12);
  assert.equal(Object.values(result.byDifficulty).reduce((sum, b) => sum + b.total, 0), 84);
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
  assert.deepEqual(core.paperQuestions(kit.questions, "d3"), []);
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
  }
});
