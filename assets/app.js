(() => {
  "use strict";
  const kit = globalThis.STUDY_KIT;
  const core = globalThis.StudyCore;
  const main = document.querySelector("#main");
  const key = "ai-engineer-study-kit-v1";
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const questionById = new Map(kit.questions.map(q => [q.id, q]));
  const lessonById = new Map(kit.lessons.map(l => [l.id, l]));
  let state = { completed: [], bookmarks: [], mistakes: [], history: [], active: null, lastResult: null };
  let storageAvailable = true;
  try {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(key) || "null"); } catch { /* Recover unreadable kit data without treating storage itself as unavailable. */ }
    if (raw && typeof raw === "object") {
      for (const field of ["completed", "bookmarks"]) {
        state[field] = Array.isArray(raw[field]) ? [...new Set(raw[field].filter(id => lessonById.has(id)))] : [];
      }
      state.mistakes = Array.isArray(raw.mistakes) ? [...new Set(raw.mistakes.filter(id => questionById.has(id)))] : [];
      state.history = Array.isArray(raw.history) ? raw.history.filter(h => h && typeof h.title === "string" && Number.isFinite(h.finished) && Number.isFinite(h.percent) && h.percent >= 0 && h.percent <= 100).slice(-30) : [];
      if (core.validAttempt(raw.active, kit.questions)) state.active = raw.active;
      if (core.validAttempt(raw.lastResult, kit.questions) && Number.isFinite(raw.lastResult.finished)) state.lastResult = raw.lastResult;
    }
    localStorage.setItem(key, JSON.stringify(state));
  } catch { storageAvailable = false; }
  const save = () => {
    try { localStorage.setItem(key, JSON.stringify(state)); }
    catch { storageAvailable = false; }
    document.querySelector("#storage-warning").hidden = storageAvailable;
    updateRail();
  };
  const reconstruct = attempt => attempt.questions.map(item => ({ ...questionById.get(item.id), order: item.order }));
  const link = (hash, text, classes = "button") => `<a class="${classes}" href="#${hash}">${esc(text)}</a>`;
  const pill = (text, style = "") => `<span class="pill ${style}">${esc(text)}</span>`;
  const heading = (title, intro = "") => `<h1>${esc(title)}</h1>${intro ? `<p class="intro">${esc(intro)}</p>` : ""}`;
  const notice = text => `<div class="notice">${esc(text)}</div>`;
  const list = items => `<ul>${items.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
  const table = data => data ? `<div class="table-wrap"><table><caption>${esc(data.caption)}</caption><thead><tr>${data.headers.map(h => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${data.rows.map(row => `<tr>${row.map((cell, i) => i ? `<td>${esc(cell)}</td>` : `<th scope="row">${esc(cell)}</th>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
  const sections = items => items.map(s => `<section class="${s.title.toLowerCase().startsWith("worked example") ? "worked" : ""}"><h2>${esc(s.title)}</h2>${s.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}${table(s.table)}${s.bullets.length ? list(s.bullets) : ""}</section>`).join("");
  const questionsFor = (pool, lesson) => kit.questions.filter(q => q.pool === pool && (!lesson || q.lesson === lesson));
  const showDate = time => new Date(time).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  const action = (name, text, data = "", classes = "") => `<button class="${classes}" data-action="${name}" ${data}>${esc(text)}</button>`;
  function updateRail() {
    document.querySelector("#rail-progress").innerHTML = `<div class="rail-progress">Domain 1 reading progress<progress value="${state.completed.length}" max="${kit.lessons.length}" aria-label="Completed Domain 1 lessons"></progress>${state.completed.length} of ${kit.lessons.length} lessons marked complete<br>Other six domains are planned.</div>`;
  }
  function home() {
    const next = kit.lessons.find(l => !state.completed.includes(l.id));
    const latest = state.history.at(-1);
    return heading("Understand first. Then test yourself.", "Your study workbook for the confirmed 5 December exam. Start with the essentials, learn one domain at a time, and use fresh questions to find what needs another look.") +
      notice("Available now: the beginner primer, six Domain 1 lessons, 18 lesson questions, and a separate 24-question domain paper. The other six domains and three full weighted mocks are planned—not available yet.") +
      `<div class="actions">${link("foundation", "Start from zero", "button primary")}${link(next ? `lesson/${next.id}` : "practice", next ? "Continue Domain 1" : "Practice Domain 1")}${state.active ? link("attempt", "Resume saved practice") : ""}</div>` +
      `<div class="flow" aria-label="Learning sequence"><span>Understand the idea</span><b aria-hidden="true">›</b><span>Work an example</span><b aria-hidden="true">›</b><span>Check your understanding</span><b aria-hidden="true">›</b><span>Take the separate paper</span></div>` +
      `<div class="two-col"><section class="panel"><h2 style="margin-top:0">Your next study session</h2><p>${next ? `Read “${esc(next.title)}”, work the example, and take its three-question quiz.` : "All available lessons are marked complete. Use the domain paper and mistake review to check understanding."}</p><p class="muted">Plan for 10–14 hours per week: about 60–90 minutes on most weekdays, with longer practice and revision sessions at the weekend. Reading estimates exclude retrieval practice and revision.</p>${link("curriculum", "See the eight-week plan")}</section><section class="panel"><h2 style="margin-top:0">Your notebook</h2><p class="progress-summary">${state.completed.length}/${kit.lessons.length}<small>Available lessons marked complete, not mastery certified</small></p><p>${state.mistakes.length} questions currently need review.</p><p>${latest ? `Latest practice: ${esc(latest.title)} — ${latest.percent}% (${showDate(latest.finished)}).` : "No practice attempt completed yet."}</p>${link("review", "Review your mistakes")}</section></div>` +
      `<h2>Keep the goal honest</h2><p class="intro">This kit teaches from zero; it cannot certify production experience or promise an Expert badge in eight weeks. Practice difficulty labels are ours, not SDAIA's official question levels. Your official result depends on the real assessment.</p>`;
  }
  function domainRows() {
    return kit.domains.map(d => `<section class="domain-row ${d.status}"><span class="domain-number">${d.number}</span><div><h3>${esc(d.title)}</h3>${pill(d.status === "available" ? "Lessons & domain paper available" : "Outline only · planned", d.status)}<p>${esc(d.summary)}</p><div class="weight-track" aria-hidden="true"><span style="width:${d.weight / 18 * 100}%"></span></div><details><summary>Proposed topics & learning objectives</summary><h3>Topics</h3>${list(d.topics)}<h3>You should be able to</h3>${list(d.objectives)}${d.status === "available" ? link(`domain/${d.id}`, "Open lessons") : ""}</details></div><div class="weight">${d.weight.toFixed(1)}%<small class="visually-hidden"> exam weight</small></div></section>`).join("");
  }
  function curriculum() {
    return heading("Curriculum & schedule", "A prerequisite-aware path for a complete beginner, with an intensive 10–14-hour weekly target.") +
      notice("Domain names and weights come from your supplied image. The detailed topic breakdown below is our proposed interpretation, not a verified official objective-by-objective syllabus. Only Domain 1 teaching and its paper are available in this release.") +
      domainRows() + `<h2>Your route to 5 December</h2><div class="schedule">${kit.schedule.map(w => `<section class="week"><time>${esc(w.dates)} · ${esc(w.hours)} hours</time><h3>${esc(w.focus)}</h3><p>${esc(w.tasks)}</p></section>`).join("")}</div>` +
      `<h2>Assessment plan</h2>${list(["Each domain: short lesson checks and a separate domain paper with an explanation for every option.", "Three reserved, original full mocks after all seven domains are written and reviewed. Mock duration and question count will be labeled practice assumptions unless official instructions establish them.", "A possible 150-question practice blueprint: 26 / 25 / 21 / 27 / 19 / 22 / 10 questions across Domains 1–7, respectively. This approximates the published weights; 150 is not a verified official exam length.", "For readiness, use first-attempt unfamiliar questions and explain your reasoning. Retake improvement can reflect memory; no practice score is mapped to an official badge level."])}${link("downloads", "Download the curriculum")}`;
  }
  function foundation() {
    return `<article class="reading">${heading(kit.foundation.title, "No programming background required. Learn these words and simple calculations before your first domain.")}<div class="prose">${sections(kit.foundation.sections)}</div><div class="actions">${link("lesson/d1-l1", "Start the first lesson", "button primary")}${action("print", "Print / save as PDF")}</div></article>`;
  }
  function domain(id) {
    const d = kit.domains.find(item => item.id === id);
    if (!d) return notFound();
    if (d.status !== "available") return heading(d.title) + notice("This domain has an outline only. Its lessons and exam are planned.") + list(d.topics) + link("curriculum", "Back to curriculum");
    return heading(d.title, "Six lessons, from defining a prediction to defending a model-selection decision. Work the examples on paper; there are no coding exercises.") +
      `<div class="lesson-meta">${pill(`${d.weight}% of the published exam blueprint`)}${pill("Original sample curriculum")}</div><h2>Learning outcomes</h2>${list(d.objectives)}<ol class="lesson-list">${kit.lessons.filter(l => l.domain === id).map((l, i) => `<li><div><a href="#lesson/${l.id}">${i + 1}. ${esc(l.title)}</a><small>${l.minutes} min reading estimate · 3 quiz questions</small></div>${state.completed.includes(l.id) ? pill("Read", "completed") : pill("Not marked read")}</li>`).join("")}</ol><div class="actions">${link("practice", "Take the separate domain paper", "button primary")}${link("downloads", "Get the notes")}</div>` + notice("Completing this sample covers our proposed Domain 1 learning objectives. It does not establish that every possible official Expert-level topic or question has been covered.");
  }
  function lesson(id) {
    const l = lessonById.get(id);
    if (!l) return notFound();
    const index = kit.lessons.indexOf(l);
    const completed = state.completed.includes(id);
    return `<article class="reading"><div class="breadcrumb"><a href="#domain/d1">Domain 1</a> / Lesson ${index + 1} of ${kit.lessons.length}</div>${heading(l.title)}<div class="lesson-meta">${pill(`${l.minutes} min reading estimate`)}${completed ? pill("Marked read", "completed") : ""}</div><div class="actions">${action("bookmark", state.bookmarks.includes(id) ? "Remove bookmark" : "Bookmark lesson", `data-id="${id}"`)}${action("print", "Print lesson")}</div><h2>What you will learn</h2>${list(l.objectives)}<div class="prose">${sections(l.sections)}<div class="takeaway"><strong>The idea to remember</strong>${esc(l.takeaway)}</div></div><h2>Common exam traps</h2>${list(l.traps)}<h2>Close the notes and explain</h2>${list(l.recall)}<h2>Check your understanding</h2><p>Three original learning questions. Answers explain every option; these are separate from the domain paper.</p><div class="actions">${action("quiz", "Start lesson quiz", `data-id="${id}"`, "primary")}${action("complete", completed ? "Mark as not read" : "Mark lesson read", `data-id="${id}"`)}</div><div class="actions">${index ? link(`lesson/${kit.lessons[index - 1].id}`, "Previous lesson") : link("foundation", "Foundation primer")}${index < kit.lessons.length - 1 ? link(`lesson/${kit.lessons[index + 1].id}`, "Next lesson") : link("practice", "Domain paper")}</div><details><summary>Learning references</summary>${list(l.sources.map(id => kit.sources.find(s => s.id === id).title))}<a href="#sources">Open source links and verification notes</a></details></article>`;
  }
  function practice() {
    const difficulties = ["Foundation", "Applied", "Stretch"].map(label => `${questionsFor("exam").filter(q => q.difficulty === label).length} ${label}`).join(", ");
    return heading("Practice & exams", "Use lesson quizzes while learning. Take the separate domain paper when you can explain the main ideas without looking.") +
      (state.active ? `<section class="panel"><h2 style="margin-top:0">A practice session is saved</h2><p>${esc(state.active.title)}. ${Object.keys(state.active.answers).length} answers saved. A timed session's deadline keeps running even if you leave.</p><div class="actions">${link("attempt", "Resume practice", "button primary")}${action("discard", "Discard saved attempt")}</div></section>` : "") +
      `<section class="panel"><h2 style="margin-top:0">Domain 1 paper</h2><p>24 original questions: ${difficulties}. These teaching labels do not correspond to verified official badge thresholds. The paper is separate from the 18 lesson questions.</p><p>Choose learning mode for feedback after each answer, or timed mode to hide every answer until submission. Question and option order are shuffled each attempt.</p><label for="duration">Practice time limit</label> <select id="duration"><option value="45">45 minutes</option><option value="30">30 minutes</option><option value="60">60 minutes</option></select><p class="muted">This timing is a practice choice, not the official examination duration.</p><div class="actions">${action("exam-learning", "Start learning mode")}${action("exam-timed", "Start timed paper", "", "primary")}${state.lastResult ? link("results", "View latest results") : ""}</div><p class="muted">Retakes use the same paper, not a fresh mock. Scores may improve through question familiarity.</p></section>` +
      `<h2>Lesson quizzes</h2><ol class="lesson-list">${kit.lessons.map((l, i) => `<li><div>${i + 1}. ${esc(l.title)}<small>3 questions · untimed feedback</small></div>${action("quiz", "Start quiz", `data-id="${l.id}"`)}</li>`).join("")}</ol><h2>Full weighted mocks</h2><div class="empty"><strong>Planned, not available yet</strong><p>Three full mocks will follow the remaining six domains. A Domain 1-only paper is not a full SDAIA mock.</p>${link("curriculum", "See the full curriculum")}</div>`;
  }
  function startAttempt(kind, mode, lessonId, minutes) {
    if (state.active && !confirm("Replace your saved practice session? Its unfinished answers will be discarded.")) return;
    let pool;
    if (kind === "quiz") pool = questionsFor("quiz", lessonId);
    else if (kind === "exam") pool = questionsFor("exam");
    else pool = state.mistakes.map(id => questionById.get(id));
    if (!pool.length) return;
    const prepared = core.prepare(pool);
    state.active = {
      kind, mode, title: kind === "quiz" ? `Lesson quiz: ${lessonById.get(lessonId).title}` : kind === "exam" ? "Domain 1 paper" : "Mistake review",
      started: Date.now(), deadline: mode === "timed" ? Date.now() + minutes * 60000 : null,
      questions: prepared.map(q => ({ id: q.id, order: q.order })), answers: {}, checked: [], flags: [], index: 0
    };
    save();
    if (location.hash === "#attempt") render(); else location.hash = "attempt";
  }
  function feedback(q, chosen) {
    const order = q.order || q.options.map((_, i) => i);
    const verdict = chosen === undefined ? "Unanswered" : chosen === q.answer ? "Correct" : "Not correct";
    return `<div class="feedback"><p class="verdict ${chosen === q.answer ? "good" : "bad"}">${verdict}. Correct answer: ${String.fromCharCode(65 + order.indexOf(q.answer))}.</p><ul>${order.map((originalIndex, displayIndex) => `<li><strong>${String.fromCharCode(65 + displayIndex)}. ${esc(q.options[originalIndex].text)}${originalIndex === q.answer ? " — correct" : ""}${originalIndex === chosen ? " (your choice)" : ""}</strong><br>${esc(q.options[originalIndex].explanation)}</li>`).join("")}</ul><a href="#lesson/${q.lesson}">Revisit the related lesson</a></div>`;
  }
  function attemptPage() {
    const a = state.active;
    if (!a) return heading("No active practice session") + link("practice", "Choose a practice session");
    const questions = reconstruct(a);
    const q = questions[a.index];
    const checked = a.mode === "learning" && (a.checked || []).includes(q.id);
    const selected = a.answers[q.id];
    return `<div class="question-shell">${heading(a.title)}<div class="question-top"><span>Question ${a.index + 1} of ${questions.length} · ${Object.keys(a.answers).length} answered</span>${a.deadline !== null ? '<span id="timer" class="timer" role="timer" aria-label="Time remaining"></span>' : pill("Untimed learning")}</div><section class="question-panel">${pill(q.difficulty)}<h2>${esc(q.stem)}</h2><fieldset class="options"><legend>Select one answer</legend>${q.order.map((originalIndex, displayIndex) => `<label class="option ${selected === originalIndex ? "selected" : ""} ${checked && originalIndex === q.answer ? "correct" : ""} ${checked && selected === originalIndex && originalIndex !== q.answer ? "incorrect" : ""}"><input type="radio" name="answer" value="${originalIndex}" ${selected === originalIndex ? "checked" : ""} ${checked ? "disabled" : ""}><span><strong>${String.fromCharCode(65 + displayIndex)}.</strong> ${esc(q.options[originalIndex].text)}</span></label>`).join("")}</fieldset>${checked ? feedback(q, selected) : ""}<div class="actions">${a.mode === "learning" && !checked ? action("check", "Check answer", selected === undefined ? "disabled" : "", "primary") : ""}${action("flag", (a.flags || []).includes(q.id) ? "Remove review flag" : "Flag for review")}</div></section><div class="actions">${action("previous", "Previous", a.index === 0 ? "disabled" : "")}${action("next", "Next", a.index === questions.length - 1 ? "disabled" : "")}${action("submit", "Finish & see results", "", "primary")}${link("practice", "Save & leave")}</div><nav class="question-map" aria-label="Jump to question">${questions.map((item, i) => `<button data-action="jump" data-index="${i}" class="${a.answers[item.id] !== undefined ? "answered" : ""} ${i === a.index ? "current" : ""} ${(a.flags || []).includes(item.id) ? "flagged" : ""}" ${i === a.index ? 'aria-current="step"' : ""} aria-label="Question ${i + 1}${a.answers[item.id] !== undefined ? ", answered" : ", unanswered"}${(a.flags || []).includes(item.id) ? ", flagged" : ""}">${i + 1}</button>`).join("")}</nav><p class="muted">Asterisk means flagged. ${a.mode === "timed" ? "Answers stay hidden until submission. The deadline keeps running when you leave or reload; returning after expiry submits saved answers." : "Checking an answer locks that question for this learning attempt."}</p></div>`;
  }
  function finish(reason = "submitted") {
    if (!state.active) return;
    const a = state.active;
    const questions = reconstruct(a);
    const result = core.score(questions, a.answers);
    for (const q of questions) {
      if (a.answers[q.id] === q.answer) state.mistakes = state.mistakes.filter(id => id !== q.id);
      else if (!state.mistakes.includes(q.id)) state.mistakes.push(q.id);
    }
    state.lastResult = { ...a, finished: Date.now(), reason };
    state.history.push({ title: a.title, percent: result.percent, finished: Date.now(), mode: a.mode, kind: a.kind });
    state.history = state.history.slice(-30);
    state.active = null;
    save();
    if (location.hash === "#results") render(); else location.hash = "results";
  }
  function results() {
    const a = state.lastResult;
    if (!a) return heading("No result yet") + link("practice", "Start practicing");
    const questions = reconstruct(a);
    const result = core.score(questions, a.answers);
    const weak = Object.entries(result.byLesson).filter(([, value]) => value.correct < value.total).sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total);
    return heading(`${a.title}: results`, `${a.mode === "timed" ? "Timed practice" : "Learning practice"} completed ${showDate(a.finished)}.${a.reason === "expired" ? " The practice time limit expired; saved answers were submitted." : ""}`) +
      `<section class="panel"><div class="result-score">${result.percent}%<span>${result.correct} / ${result.total} correct</span></div><p>${result.answered} answered; ${result.total - result.answered} unanswered. Unanswered questions count as incorrect.</p><p class="muted">This is a practice score—not an official passing score or Assistant/Associate/Expert classification. Learning-mode scores may reflect answers you checked during the attempt.</p><div class="result-grid"><div><h3>By lesson</h3><ul class="plain-list">${Object.entries(result.byLesson).map(([id, value]) => `<li><a href="#lesson/${id}">${esc(lessonById.get(id).title)}</a><span>${value.correct}/${value.total}</span></li>`).join("")}</ul></div><div><h3>By practice difficulty</h3><ul class="plain-list">${Object.entries(result.byDifficulty).map(([label, value]) => `<li><span>${esc(label)}</span><span>${value.correct}/${value.total}</span></li>`).join("")}</ul><p class="muted">Our difficulty tags are not SDAIA's verified question levels.</p></div></div></section>` +
      `<h2>What to study next</h2>${weak.length ? `<ol>${weak.slice(0, 3).map(([id]) => `<li>Revisit <a href="#lesson/${id}">${esc(lessonById.get(id).title)}</a>, work its example without notes, and explain each missed choice.</li>`).join("")}</ol>` : "<p>All answers were correct. Explain the reasoning without viewing the key; this familiar question set alone cannot prove readiness for unfamiliar exam scenarios.</p>"}<div class="actions">${link("review", "Review remaining mistakes", "button primary")}${link("practice", "Back to practice")}</div><h2>Answer review</h2>${questions.map((q, i) => `<details><summary>${i + 1}. ${a.answers[q.id] === q.answer ? "Correct" : a.answers[q.id] === undefined ? "Unanswered" : "Not correct"} — ${esc(q.stem)}</summary>${feedback(q, a.answers[q.id])}</details>`).join("")}`;
  }
  function review() {
    return heading("Review mistakes", "This notebook keeps questions missed or left unanswered in completed attempts. A later correct answer removes a question from the queue.") +
      (state.mistakes.length ? `<p>${state.mistakes.length} ${state.mistakes.length === 1 ? "question needs" : "questions need"} another look.</p><div class="actions">${action("review", "Practice these questions", "", "primary")}</div>${state.mistakes.map(id => { const q = questionById.get(id); return `<details><summary>${esc(q.stem)}</summary>${feedback(q, undefined)}</details>`; }).join("")}` : `<div class="empty"><strong>No mistakes waiting</strong><p>${state.history.length ? "Continue explaining concepts and use unfamiliar questions when later domains are available." : "Complete a quiz or domain paper to build your revision queue."}</p>${link("practice", "Choose practice")}</div>`) +
      `<h2>Bookmarked lessons</h2>${state.bookmarks.length ? list(state.bookmarks.map(id => lessonById.get(id).title)) + `<div class="actions">${state.bookmarks.map(id => link(`lesson/${id}`, lessonById.get(id).title)).join("")}</div>` : '<p class="muted">Open a lesson and select “Bookmark lesson” to save it here.</p>'}` +
      `<h2>Recent attempts</h2>${state.history.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Practice</th><th scope="col">Date</th><th scope="col">Mode</th><th scope="col">Score</th></tr></thead><tbody>${[...state.history].reverse().map(h => `<tr><td>${esc(h.title)}</td><td>${showDate(h.finished)}</td><td>${esc(h.mode)}</td><td>${h.percent}%</td></tr>`).join("")}</tbody></table></div><p class="muted">Detailed answers are retained for the latest completed attempt only. The latest 30 attempt summaries are kept.</p>` : '<p class="muted">No completed attempts yet.</p>'}`;
  }
  function glossary() {
    return heading("Glossary", "The vocabulary used in the first domain, with a few signposts for later topics.") + '<label for="glossary-search">Find a term or definition</label><input id="glossary-search" class="search" type="search" placeholder="Try: recall, leakage, or inference"><div id="glossary-rows"></div><p id="glossary-count" class="muted" role="status"></p>';
  }
  function filterGlossary(query = "") {
    const matches = kit.glossary.filter(pair => pair.join(" ").toLowerCase().includes(query.toLowerCase()));
    document.querySelector("#glossary-rows").innerHTML = matches.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Term</th><th scope="col">Plain-language meaning</th></tr></thead><tbody>${matches.map(([term, definition]) => `<tr><th scope="row" class="term">${esc(term)}</th><td>${esc(definition)}</td></tr>`).join("")}</tbody></table></div>` : '<div class="empty">No matching terms. Try a shorter word.</div>';
    document.querySelector("#glossary-count").textContent = `${matches.length} terms shown.`;
  }
  function downloads() {
    const files = [
      ["curriculum.md", "Curriculum & study schedule", "All seven domain outlines, availability, and your eight-week plan."],
      ["domain-1-study-notes.md", "Foundation & Domain 1 notes", "The full primer, all six lessons, revision sheet, glossary, and lesson-quiz explanations."],
      ["domain-1-practice-paper.md", "Domain 1 practice paper", "24 questions without answers. Use this before opening the separate key."],
      ["domain-1-answer-key.md", "Domain 1 answer key", "Correct answers and explanations for every option; contains spoilers."],
      ["sources-and-exam-facts.md", "Sources & verified exam facts", "Official methodology, supplied image, learning references, and unknowns."]
    ];
    return heading("Notes & downloads", "The website and notes use the same source content. Download the notes for sharing or open the printable workbook to save a PDF.") + `<div class="actions"><a class="button primary" href="notes/printable-workbook.html" target="_blank" rel="noopener">Open printable workbook</a><a class="button" href="notes/printable-practice-paper.html" target="_blank" rel="noopener">Printable practice paper</a><a class="button" href="notes/printable-answer-key.html" target="_blank" rel="noopener">Printable answer key (spoilers)</a></div><p class="muted">In the printable workbook, use Print / Save as PDF and choose your browser's PDF destination. It includes study notes and lesson checks, not the reserved domain-paper answers.</p><div class="download-list">${files.map(([file, title, description]) => `<a href="notes/${file}" download>${esc(title)} <small>Markdown (.md) — ${esc(description)}</small></a>`).join("")}</div><h2>Share with friends</h2><p class="intro">Share the whole project folder or a hosted copy of this static site. Friends can open index.html directly without an account or installing packages. Each browser keeps its own progress; it does not sync between devices. A browser may treat different file paths as separate storage locations.</p><h2>Your local progress</h2><div class="actions">${action("export", "Download progress backup")}${action("reset", "Reset this kit's local progress")}</div><p class="muted">The backup is a JSON record for safekeeping; this release does not import backups. Reset deletes only this study kit's progress, after confirmation.</p><p class="status-text" id="download-status" role="status"></p>`;
  }
  function sources() {
    return heading("Sources & exam facts", "Last reviewed 11 October 2026. Keep confirmed exam information separate from curriculum design choices.") +
      `<h2>What is verified or supplied</h2>${list(kit.facts)}${notice(kit.disclaimer)}<h2>References</h2>${kit.sources.map(s => `<section class="source"><h3><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></h3>${pill(s.type)}<p>${esc(s.note)}</p></section>`).join("")}<h2>Before the exam</h2>${list(["Your appointment instructions take precedence over assumptions in this kit.", "Confirm the venue, accepted identification, arrival time, language, and permitted items.", "If official question count, duration, objectives, or thresholds are provided later, update the kit rather than presenting guessed values as facts."])}`;
  }
  function notFound() { return heading("This page is not in the kit") + link("home", "Return to your study desk"); }
  function render() {
    if (state.active?.deadline !== null && state.active && core.remaining(state.active.deadline) === 0) { finish("expired"); return; }
    const route = location.hash.slice(1) || "home";
    const [page, id] = route.split("/");
    const views = { home, curriculum, foundation, practice, review, glossary, downloads, sources, results, attempt: attemptPage };
    main.innerHTML = page === "domain" ? domain(id) : page === "lesson" ? lesson(id) : views[page] ? views[page]() : notFound();
    document.title = `${main.querySelector("h1")?.textContent || "Study"} | AI Engineer Study Kit`;
    document.querySelectorAll(".rail nav a").forEach(a => {
      const target = a.getAttribute("href").slice(1);
      const active = target === route || (page === "lesson" && target === "domain/d1") || (["attempt", "results"].includes(page) && target === "practice");
      if (active) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    updateRail();
    document.querySelector("#storage-warning").hidden = storageAvailable;
    if (page === "glossary") filterGlossary();
    tick();
    main.focus({ preventScroll: true });
  }
  function tick() {
    const a = state.active;
    if (!a || a.deadline === null) return;
    const seconds = core.remaining(a.deadline);
    if (seconds === 0) { finish("expired"); return; }
    const timer = document.querySelector("#timer");
    if (timer) {
      timer.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")} remaining`;
      timer.classList.toggle("urgent", seconds < 300);
    }
  }
  main.addEventListener("input", event => {
    if (event.target.id === "glossary-search") filterGlossary(event.target.value);
  });
  main.addEventListener("change", event => {
    if (event.target.name !== "answer" || !state.active) return;
    tick();
    if (!state.active) return;
    const a = state.active;
    const q = a.questions[a.index];
    if ((a.checked || []).includes(q.id)) return;
    a.answers[q.id] = Number(event.target.value);
    save();
    main.querySelectorAll(".option").forEach(label => label.classList.toggle("selected", label.querySelector("input").checked));
    const check = main.querySelector('[data-action="check"]');
    if (check) check.disabled = false;
    const map = main.querySelectorAll(".question-map button");
    map[a.index]?.classList.add("answered");
    const top = main.querySelector(".question-top > span");
    if (top) top.textContent = `Question ${a.index + 1} of ${a.questions.length} · ${Object.keys(a.answers).length} answered`;
  });
  main.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button || button.disabled) return;
    const name = button.dataset.action;
    const id = button.dataset.id;
    if (name === "print") { window.print(); return; }
    if (name === "complete" || name === "bookmark") {
      const field = name === "complete" ? "completed" : "bookmarks";
      state[field] = state[field].includes(id) ? state[field].filter(item => item !== id) : [...state[field], id];
      save(); render(); return;
    }
    if (name === "quiz") { startAttempt("quiz", "learning", id); return; }
    if (name === "review") { startAttempt("review", "learning"); return; }
    if (name.startsWith("exam-")) {
      const duration = Number(document.querySelector("#duration").value);
      startAttempt("exam", name === "exam-timed" ? "timed" : "learning", null, duration); return;
    }
    if (name === "discard") {
      if (confirm("Discard this unfinished practice session?")) { state.active = null; save(); render(); } return;
    }
    if (name === "export") {
      const url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
      const a = document.createElement("a"); a.href = url; a.download = "ai-study-progress.json"; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      document.querySelector("#download-status").textContent = "Progress backup download requested."; return;
    }
    if (name === "reset") {
      if (confirm("Reset this kit's lessons, bookmarks, mistake queue, and practice history? This cannot be undone here.")) {
        state = { completed: [], bookmarks: [], mistakes: [], history: [], active: null, lastResult: null }; save(); render();
      } return;
    }
    tick();
    const a = state.active;
    if (!a) return;
    const q = a.questions[a.index];
    if (name === "check" && a.mode === "learning" && a.answers[q.id] !== undefined) {
      a.checked = [...new Set([...(a.checked || []), q.id])];
    } else if (name === "previous") a.index = Math.max(0, a.index - 1);
    else if (name === "next") a.index = Math.min(a.questions.length - 1, a.index + 1);
    else if (name === "jump") a.index = Math.max(0, Math.min(a.questions.length - 1, Number(button.dataset.index)));
    else if (name === "flag") a.flags = (a.flags || []).includes(q.id) ? a.flags.filter(id => id !== q.id) : [...(a.flags || []), q.id];
    else if (name === "submit") {
      const unanswered = a.questions.length - Object.keys(a.answers).length;
      if (confirm(unanswered ? `Finish with ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}? Unanswered questions count as incorrect.` : "Finish and see your results?")) finish();
      return;
    }
    save(); render();
  });
  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
  document.querySelector(".skip-link").addEventListener("click", event => {
    event.preventDefault(); main.focus(); main.scrollIntoView({ block: "start" });
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) tick(); });
  setInterval(tick, 1000);
  render();
})();
