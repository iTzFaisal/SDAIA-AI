import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import "../content/kit.js";
import "../content/questions.js";
import "../content/mocks.js";
import "../assets/core.js";

const kit = globalThis.STUDY_KIT;
const core = globalThis.StudyCore;
const paper = core.mockQuestions(kit.questions, "m1");
const allocation = { d1: 26, d2: 25, d3: 21, d4: 27, d5: 19, d6: 22, d7: 10 };
const answerText = id => { const q = paper.find(q => q.id === id); return q.options[q.answer].text; };
const read = name => readFile(new URL(`../notes/${name}`, import.meta.url), "utf8");

test("Mock 1's released content, persisted IDs, original indexes, and paper order are unchanged", () => {
  // Fingerprint of the complete canonical pool at b5e5ba9, before Mock 2.
  assert.equal(createHash("sha256").update(JSON.stringify(paper)).digest("hex"), "9ce44c51a7a72f00e1a102bef87036c15493034e8d57f2f6819719224bb8979d");
});

test("Mock 2's released content, persisted IDs, original indexes, and paper order are unchanged", () => {
  // Fingerprint at 9645afb, before Mock 3.
  assert.equal(createHash("sha256").update(JSON.stringify(core.mockQuestions(kit.questions, "m2"))).digest("hex"), "cea9583be81fb4e26c7c53d5972b562ad1a08a3fe1692505a70ad4f609bd98f2");
});

const mockIds = ["m1", "m2", "m3"];
for (const mockId of mockIds) {
const paper = core.mockQuestions(kit.questions, mockId);
const makeAttempt = () => ({ kind: "mock", mock: mockId, mode: "timed", title: `Mock ${mockId.slice(1)}`, started: 1000, deadline: 2000, questions: core.prepare(paper, () => .37).map(q => ({ id: q.id, order: q.order })), answers: {}, checked: [], flags: [], index: 0 });

test(`${mockId} is a fresh reserved 150-question set with the exact practice allocation`, () => {
  assert.deepEqual(kit.mocks.map(m => [m.id, m.status]), [["m1", "available"], ["m2", "available"], ["m3", "available"]]);
  const metadata = kit.mocks.find(m => m.id === mockId);
  assert.deepEqual(metadata.allocation, allocation);
  assert.equal(metadata.minutes, 180);
  assert.equal(paper.length, 150);
  assert.equal(new Set(paper.map(q => q.id)).size, 150);
  assert.deepEqual(paper.map(q => q.id).sort(), Array.from({ length: 150 }, (_, i) => `${mockId}-${String(i + 1).padStart(3, "0")}`));
  const prior = kit.questions.filter(q => q.mock !== mockId);
  assert.equal(prior.length, 594);
  for (const q of paper) {
    assert.equal(q.mock, mockId);
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
  assert.deepEqual(core.mockQuestions(kit.questions, "m4"), []);
  assert.deepEqual(core.mockQuestions(kit.questions, undefined), []);
  assert.deepEqual(core.mockQuestions(kit.questions, "d1"), []);
  // Fixed downloadable order begins across domains, not seven concatenated papers.
  assert.equal(new Set(paper.slice(0, 7).map(q => q.domain)).size, 7);
});

test(`${mockId} grading uses original option indexes and question-count weighting exactly once`, () => {
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

test(`${mockId} saved attempts require a complete isolated reserved set and preserve their absolute deadline`, () => {
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
    a => { a.mock = mockId === "m1" ? "m2" : "m1"; },
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
  // Available mocks must be isolated even when their domains and sizes match.
  for (const otherId of mockIds.filter(id => id !== mockId)) {
    const mixed = structuredClone(good);
    mixed.questions[0].id = core.mockQuestions(kit.questions, otherId)[0].id;
    assert.equal(core.validAttempt(mixed, kit.questions), false, `${mockId}/${otherId}`);
    const wrongIdentity = structuredClone(good);
    wrongIdentity.mock = otherId;
    assert.equal(core.validAttempt(wrongIdentity, kit.questions), false);
  }
  const unknown = paper.map(q => ({ ...q, id: q.id.replace(`${mockId}-`, "m4-"), mock: "m4" }));
  const mixed = structuredClone(good);
  mixed.questions[0].id = unknown[0].id;
  assert.equal(core.validAttempt(mixed, [...kit.questions, ...unknown]), false);
  const exam = { kind: "exam", mode: "timed", title: "Legacy paper", started: 1000, deadline: 2000, index: 0, questions: core.prepare(core.paperQuestions(kit.questions, "d1")).map(q => ({ id: q.id, order: q.order })), answers: {} };
  assert.ok(core.validAttempt(exam, kit.questions));
  exam.questions[0].id = paper[0].id;
  assert.equal(core.validAttempt(exam, kit.questions), false);
});

test(`${mockId} mistake review can combine old and all three mock pools without becoming a weighted mock`, () => {
  const old = kit.questions.find(q => q.pool === "quiz");
  const review = { ...makeAttempt(), kind: "review", mode: "learning", deadline: null, questions: core.prepare([old, ...mockIds.map(id => core.mockQuestions(kit.questions, id)[0])]).map(q => ({ id: q.id, order: q.order })) };
  delete review.mock;
  assert.ok(core.validAttempt(review, kit.questions));
  review.mock = mockId;
  assert.equal(core.validAttempt(review, kit.questions), false);
});
}

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

for (const number of [1, 2, 3]) {
test(`all 56 downloads exist; Mock ${number} paper and fixed key agree without leaking spoilers`, async () => {
  const paper = core.mockQuestions(kit.questions, `m${number}`);
  const files = await readdir(new URL("../notes/", import.meta.url));
  assert.equal(files.filter(name => /\.(md|html)$/.test(name)).length, 56);
  assert.ok(!files.some(name => /^mock-4-/.test(name)));
  const mdPaper = await read(`mock-${number}-practice-paper.md`);
  const mdKey = await read(`mock-${number}-answer-key.md`);
  const htmlPaper = await read(`mock-${number}-printable-practice-paper.html`);
  const htmlKey = await read(`mock-${number}-printable-answer-key.html`);
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
  for (const q of kit.questions.filter(q => q.mock !== `m${number}`)) assert.ok(!mdPaper.includes(q.stem), q.id);
  for (const output of [mdPaper, htmlPaper]) {
    assert.ok(output.includes("180 minutes"));
    assert.ok(output.includes("not verified exam specifications"));
    assert.ok(output.includes("not another score multiplier"));
    assert.ok(output.includes("The other available mocks have their own reserved questions"));
    assert.ok(!output.includes("Mock 3 remains planned"));
  }
});
}

test("Mock 2 calculations match their explicit units, populations, and training assumptions", () => {
  const text = id => { const q = kit.questions.find(q => q.id === `m2-${id}`); return q.options[q.answer].text; };
  assert.equal(text("017"), `Precision ${18 / 30 * 100}%; recall ${18 / 24 * 100}%`);
  assert.equal(text("018"), `${72 / 80 * 100}%`);
  assert.equal(text("021"), `B: ${2 * 100 + 50 * 2} units versus A: ${4 * 100 + 20 * 2} units`);
  assert.equal(text("022"), `Mean error ${(-4 + 4) / 2} kWh; MAE ${(4 + 4) / 2} kWh`);
  assert.equal(text("023"), `Precision at five ${3 / 5 * 100}%; recall ${3 / 6 * 100}%`);
  assert.equal(text("031"), String(2 * 3 - 4 + 1));
  assert.equal(text("047"), `${96 / 200 * 100}%`);
  assert.equal(text("060"), `${3 ** 3} calls`);
  assert.equal(text("083"), `Candidate ${32 / 800 * 100}%; control ${72 / 7200 * 100}%; combined ${104 / 8000 * 100}%`);
  assert.equal(text("090"), `${(120000 + 1000) * .005 - (540 + 65)} failed requests`);
  assert.equal(text("103"), `${6 * 16 / 8} GB to ${6 * 8 / 8} GB for weights alone`);
  assert.equal(text("106"), `${100 + 250 + 600} ms`);
  assert.equal(text("107"), `${450 / 120} acceptable responses/s; SAR ${(45 / 450).toFixed(2)} each`);
  assert.equal(text("111"), `${16 / .32} requests/s; ${80 + 320} ms`);
  assert.equal(text("112"), `${(42 - 18) * 5 + (42 - 2 * 18) * 10} jobs`);
  assert.equal(text("114"), `${900 / 20 + 30} jobs/minute`);
  assert.equal(text("115"), `RTO met; RPO missed by ${14 - 10} minutes`);
  assert.equal(text("119"), `A ${6 / (24 + 6) * 100}%; B ${12 / (28 + 12) * 100}%; gap ${12 / (28 + 12) * 100 - 6 / (24 + 6) * 100} percentage points`);
  assert.equal(text("124"), `Capacity ${4 * 60 / 5} reviews/hour; demand exceeds it by ${40 + 2 * 12 - 4 * 60 / 5} reviews/hour`);
  assert.equal(text("137"), `${72 - 12} hours remain on the stated authority clock; separate subject-notification and containment duties also matter`);
  assert.equal(text("143"), `${(150000 - 40000 - 12 * 5000) / (40000 + 12 * 5000) * 100}%`);
  assert.equal(text("144"), `SAR ${(120 * 75).toLocaleString("en-US")}/month capacity value and SAR 4,000/month cost, not proven cash savings`);
  assert.equal(text("145"), `A ${50 - 40}-percentage-point rise, or ${(50 - 40) / 40 * 100}% relative increase; AI causation is not isolated`);
  assert.equal(text("149"), `${(100 - 20) / 400 * 100}% of eligible users`);
});

test("Mock 2 preserves reviewed legal, ethics, professional, and financial distinctions", () => {
  const text = id => { const q = kit.questions.find(q => q.id === `m2-${id}`); return q.stem + " " + q.options.map(o => o.text + " " + o.explanation).join(" "); };
  for (const phrase of ["Article 24", "Under the stated condition", "controller awareness", "Subject notification without undue delay", "contain", "escalate"]) assert.ok(text("137").includes(phrase), phrase);
  assert.ok(text("128").includes("not universal raw-payload retention"));
  assert.ok(text("129").includes("not a complete current inventory"));
  assert.ok(text("138").includes("legally required privacy roles are distinct"));
  assert.ok(text("139").includes("pre- and post-conformity assessments"));
  assert.ok(text("139").includes("not individual AI Engineer assessment results"));
  assert.ok(text("142").includes("not production approval"));
  assert.ok(text("143").includes("one-year simple undiscounted training example"));
  assert.ok(text("144").includes("not proven cash savings"));
  assert.ok(text("147").includes("not itself Saudi law"));
});

test("Mock 3 calculations preserve metric units, exposure, net alternatives, and outcome denominators", () => {
  const q = suffix => kit.questions.find(q => q.id === `m3-${suffix}`);
  const answer = suffix => q(suffix).options[q(suffix).answer].text;
  const correctExplanation = suffix => q(suffix).options[q(suffix).answer].explanation;
  assert.equal(answer("002"), `A ${20 / 100 * 100}%; B ${20 / 400 * 100}%, using each branch's delivery count`);
  assert.equal(answer("017"), `F1 about ${(2 * 40 / (2 * 40 + 10 + 40) * 100).toFixed(1)}%; accuracy ${(40 + 910) / 1000 * 100}%, with many true negatives lifting accuracy`);
  assert.equal(answer("021"), "A has higher precision; B has higher recall");
  assert.ok(12 / 15 > 18 / 30 && 12 / 24 < 18 / 24);
  assert.ok(correctExplanation("021").includes("A precision = 12/15 = 80%, recall = 12/24 = 50%; B precision = 60%, recall = 75%"));
  assert.equal(answer("022"), `MAE ties at ${(0 + 6) / 2} litres; RMSE favors B`);
  assert.ok(Math.sqrt((0 ** 2 + 6 ** 2) / 2) > Math.sqrt((3 ** 2 + 3 ** 2) / 2));
  assert.equal(answer("025"), `${Math.sqrt(25)} minutes`);
  assert.equal(answer("091"), `${9800 / 10000 * 100}%; the combined success-and-latency objective is missed`);
  assert.equal(answer("106"), `${(300 + 150 + 500 + 50).toLocaleString("en-US")} ms, including queueing and validation`);
  assert.equal(answer("108"), `B: SAR ${(36 / 150).toFixed(2)} versus A: SAR ${(30 / 100).toFixed(2)}`);
  assert.equal(answer("113"), `${100 - (70 - 50) * 4} jobs`);
  assert.equal(answer("143"), `Negative SAR ${Math.abs((130000 - 80000) - (90000 - 20000)).toLocaleString("en-US")}`);
  assert.equal(answer("144"), "No positive monthly net capacity-value benefit and no demonstrated cash payback");
  assert.ok(correctExplanation("144").includes("The recurring valued capacity equals operating cost before setup"));
  assert.equal(answer("149"), `${36 / 80 * 100}% adoption; ${36 / 60 * 100}% success among users`);
});

test("Mock 3 preserves reviewed-source, legal notification, oversight, and appraisal boundaries", () => {
  const text = suffix => { const q = kit.questions.find(q => q.id === `m3-${suffix}`); return q.stem + " " + q.options.map(o => o.text + " " + o.explanation).join(" "); };
  assert.ok(text("122").includes("do not waive otherwise applicable law"));
  assert.ok(text("124").includes("DM.1"));
  assert.ok(text("128").includes("Article 16"));
  for (const phrase of ["not universal raw-payload retention", "not a complete current inventory"]) assert.ok(text("129").includes(phrase), phrase);
  for (const phrase of ["Article 24", "controller awareness", "Thursday 08:00", "under the stated condition", "Containment and escalation", "separate subject notification without undue delay"]) assert.ok(text("138").includes(phrase), phrase);
  assert.ok(text("139").includes("ethics roles and legally required privacy roles are also distinct"));
  assert.ok(text("139").includes("not a statutory exemption or an individual AI Engineer assessment result"));
  assert.ok(text("140").includes("high-risk pre- and post-conformity assessments"));
  assert.ok(text("142").includes("not production approval"));
  assert.ok(text("143").includes("one-year simple undiscounted training example"));
  assert.ok(text("144").includes("capacity value is not proven cash savings"));
  assert.ok(text("147").includes("not automatic statutory privacy roles"));
  assert.ok(text("150").includes("not itself Saudi law"));
});
