// Run with an attached browser via playwright-cli run-code --filename=tests/browser-smoke.js.
// Restores this kit's existing local progress; does not clear other browser storage.
async page => {
  const base = "http://127.0.0.1:4173/";
  const key = "ai-engineer-study-kit-v1";
  const checks = [];
  const errors = [];
  const onError = error => errors.push(error.message);
  const onDialog = dialog => dialog.accept();
  const ensure = (condition, message) => { if (!condition) throw new Error(message); checks.push(message); };
  page.on("pageerror", onError);
  page.on("dialog", onDialog);
  await page.goto(base);
  const original = await page.evaluate(key => localStorage.getItem(key), key);
  try {
    await page.evaluate(key => localStorage.removeItem(key), key);
    await page.reload();
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.bringToFront();
    await page.locator("main h1").waitFor();
    const initialHash = await page.evaluate(() => location.hash);
    await page.getByRole("link", { name: "Skip to content", exact: true }).focus();
    await page.keyboard.press("Enter");
    await page.waitForFunction(() => document.activeElement.id === "main", null, { timeout: 5000 });
    ensure(await page.evaluate(() => location.hash) === initialHash, "Skip link preserves the current route");
    ensure(await page.evaluate(() => document.activeElement.id) === "main", "Skip link focuses the main content");
    for (const route of ["home", "curriculum", "foundation", "domain/d1", "lesson/d1-l1", ...["d2", "d3", "d4", "d5", "d6", "d7"].flatMap(domain => [`domain/${domain}`, ...Array.from({ length: 6 }, (_, i) => `lesson/${domain}-l${i + 1}`)]), "practice", "practice/d1", "practice/d2", "practice/d3", "practice/d4", "practice/d5", "practice/d6", "practice/d7", "mock/m1", "mock/m2", "mock/m3", "review", "glossary", "downloads", "sources"]) {
      await page.goto(base + "#" + route);
      await page.locator("main h1").waitFor();
      ensure(await page.locator("main h1").count() === 1, `Route renders: ${route}`);
      ensure(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `No desktop overflow: ${route}`);
    }
    for (const domain of ["d2", "d3", "d4", "d5", "d6", "d7"]) {
      const number = domain.slice(1);
      await page.goto(base + `#lesson/${domain}-l1`);
      ensure((await page.locator(".breadcrumb").textContent()).includes(`Domain ${number} / Lesson 1 of 6`), `${domain} uses domain-local lesson numbering`);
      ensure(await page.locator(`.rail a[href="#domain/${domain}"]`).getAttribute("aria-current") === "page", `${domain} rail selection follows lesson route`);
      ensure(await page.getByRole("link", { name: "Next lesson", exact: true }).getAttribute("href") === `#lesson/${domain}-l2`, `${domain} next lesson stays in domain`);
      await page.goto(base + `#lesson/${domain}-l6`);
      ensure(await page.getByRole("link", { name: "Domain paper", exact: true }).getAttribute("href") === `#practice/${domain}`, `Last ${domain} lesson links its own paper`);
    }
    await page.goto(base + "#domain/d3");
    ensure((await page.locator("main .notice").first().textContent()).includes("Domains 1–2"), "Domain 3 states its prerequisites");
    ensure(await page.locator('main .lesson-list a[href^="#lesson/d3-"]').count() === 6, "Domain 3 overview lists six lessons");
    await page.goto(base + "#domain/d4");
    ensure((await page.locator("main .notice").first().textContent()).includes("Domains 1–3"), "Domain 4 states its prerequisites");
    ensure(await page.locator('main .lesson-list a[href^="#lesson/d4-"]').count() === 6, "Domain 4 overview lists six lessons");
    await page.goto(base + "#domain/d5");
    ensure((await page.locator("main .notice").first().textContent()).includes("Domains 1–4"), "Domain 5 states its prerequisites");
    ensure(await page.locator('main .lesson-list a[href^="#lesson/d5-"]').count() === 6, "Domain 5 overview lists six lessons");
    await page.goto(base + "#domain/d6");
    ensure((await page.locator("main .notice").first().textContent()).includes("Domains 1–5"), "Domain 6 states its prerequisites");
    ensure((await page.locator("main .notice").first().textContent()).includes("not legal advice"), "Domain 6 states legal interpretation boundaries");
    ensure(await page.locator('main .lesson-list a[href^="#lesson/d6-"]').count() === 6, "Domain 6 overview lists six lessons");
    ensure((await page.locator(".release-label").textContent()).includes("Domains 1–7"), "Release label includes seven available domains");
    await page.goto(base + "#domain/d7");
    ensure((await page.locator("main .notice").first().textContent()).includes("Domains 1–6"), "Domain 7 states its prerequisites");
    ensure(await page.locator('main .lesson-list a[href^="#lesson/d7-"]').count() === 6, "Domain 7 overview lists six lessons");
    await page.goto(base + "#lesson/d7-l2");
    ensure((await page.locator("main").textContent()).includes("capacity-value ROI, not proof of cash savings"), "Domain 7 renders capacity-value versus cash boundaries");
    await page.goto(base + "#lesson/d7-l4");
    ensure((await page.locator("main").textContent()).includes("RACI convention is a collaboration aid, not Saudi law"), "Domain 7 keeps collaboration separate from statutory roles");
    await page.goto(base + "#lesson/d6-l1");
    ensure((await page.locator("main").textContent()).includes("pre- and post-conformity assessments"), "Domain 6 renders May 2025 risk-tier controls");
    await page.goto(base + "#lesson/d6-l6");
    ensure(await page.getByRole("rowheader", { name: "Responsible AI Officer (RAIO)", exact: true }).count() === 1, "Domain 6 renders the adopting-entity role table");
    ensure(await page.getByRole("rowheader", { name: "Fairness Assessment", exact: true }).count() === 1, "Domain 6 renders the visual annex tool mapping");
    ensure((await page.locator("main").textContent()).includes("not the AI Engineer exam's"), "Ethics adoption badges remain separate from exam awards");
    await page.goto(base + "#sources");
    ensure(await page.locator('main a[href="https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf"]').count() === 1, "Sources link the May 2025 ethics publication");
    await page.goto(base + "#home");
    ensure((await page.locator("main .notice").textContent()).includes("42 lessons"), "Home shows 42 available lessons");
    ensure((await page.locator("main .notice").textContent()).includes("126 lesson questions"), "Home shows 126 lesson questions");
    ensure(!(await page.locator("main").textContent()).includes("other 0 domains"), "Home avoids obsolete remaining-domain copy");
    ensure((await page.locator("#rail-progress").textContent()).includes("All seven domains are available"), "Rail reports all seven available without implying mastery");
    ensure((await page.locator("main .notice").textContent()).includes("Mocks 1–2 are available"), "Home advertises both released mocks");
    await page.goto(base + "#curriculum");
    ensure(await page.locator(".domain-row.available").count() === 7, "Curriculum marks seven domains available");
    ensure(await page.locator(".domain-row.planned").count() === 0, "No curriculum domain remains planned");
    await page.goto(base + "#practice");
    ensure(await page.getByRole("button", { name: "Start timed paper", exact: true }).count() === 7, "Practice lists seven separate papers");
    ensure((await page.locator("main").textContent()).includes("Mock 3 remains planned, not available yet"), "Mock 3 remains clearly planned");
    ensure(await page.getByRole("link", { name: "Open Mock 1", exact: true }).count() === 1, "Practice links the separate full mock");
    ensure(await page.getByRole("link", { name: "Open Mock 2", exact: true }).count() === 1, "Practice also links the second full mock");
    ensure(!(await page.locator("main").textContent()).includes("remaining 0 domains"), "Practice avoids obsolete remaining-domain copy");
    for (const id of ["m3"]) {
      await page.goto(base + `#mock/${id}`);
      ensure((await page.locator("main .notice").textContent()).includes("Planned, not available yet"), `${id} is unavailable`);
      ensure(await page.getByRole("button", { name: "Start timed mock", exact: true }).count() === 0, `${id} cannot launch a mock`);
    }
    await page.goto(base + "#glossary");
    await page.getByRole("searchbox").fill("recall");
    ensure((await page.locator("#glossary-count").textContent()).includes("terms shown"), "Glossary search updates count");
    ensure((await page.locator("#glossary-rows").textContent()).includes("Recall"), "Glossary search includes matching term");
    await page.getByRole("searchbox").fill("unfindable123");
    ensure((await page.locator("#glossary-rows").textContent()).includes("No matching terms"), "Glossary empty state gives direction");

    await page.goto(base + "#lesson/d1-l1");
    await page.getByRole("button", { name: "Bookmark lesson", exact: true }).click();
    await page.getByRole("button", { name: "Mark lesson read", exact: true }).click();
    await page.reload();
    ensure(await page.getByRole("button", { name: "Remove bookmark", exact: true }).count() === 1, "Bookmark survives reload");
    ensure(await page.getByRole("button", { name: "Mark as not read", exact: true }).count() === 1, "Reading progress survives reload");
    await page.getByRole("button", { name: "Start lesson quiz", exact: true }).click();
    await page.waitForURL("**/#attempt");
    for (let i = 0; i < 3; i++) {
      const correct = await page.evaluate(key => {
        const a = JSON.parse(localStorage.getItem(key)).active;
        return STUDY_KIT.questions.find(q => q.id === a.questions[a.index].id).answer;
      }, key);
      await page.locator(`input[name=answer][value="${i === 0 ? (correct + 1) % 4 : correct}"]`).check();
      await page.getByRole("button", { name: "Check answer", exact: true }).click();
      ensure(await page.locator(".feedback li").count() === 4, `All option explanations in lesson check ${i + 1}`);
      ensure(await page.locator("input[name=answer]:disabled").count() === 4, `Checked learning response locked ${i + 1}`);
      if (i < 2) await page.getByRole("button", { name: "Next", exact: true }).click();
    }
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Finish & see results", exact: true }).click();
    await page.waitForURL("**/#results");
    ensure((await page.locator(".result-score").textContent()).includes("67%"), "Quiz grade counts one wrong and two correct");
    await page.goto(base + "#review");
    ensure((await page.locator("main").textContent()).includes("1 question needs another look"), "Mistake queue records incorrect question");

    for (const domain of ["d2", "d3", "d4", "d5", "d6", "d7"]) {
    await page.goto(base + `#lesson/${domain}-l5`);
    await page.getByRole("button", { name: "Bookmark lesson", exact: true }).click();
    await page.getByRole("button", { name: "Mark lesson read", exact: true }).click();
    await page.reload();
    ensure(await page.getByRole("button", { name: "Remove bookmark", exact: true }).count() === 1, `${domain} bookmark persists`);
    ensure(await page.evaluate(({ key, domain }) => {
      const completed = JSON.parse(localStorage.getItem(key)).completed;
      return completed.includes("d1-l1") && Array.from({ length: Number(domain.slice(1)) - 1 }, (_, i) => `d${i + 2}-l5`).every(id => completed.includes(id));
    }, { key, domain }), `Adding ${domain} progress preserves earlier domains' progress`);
    await page.getByRole("button", { name: "Start lesson quiz", exact: true }).click();
    await page.waitForURL("**/#attempt");
    ensure(await page.evaluate(({ key, domain }) => {
      const questions = JSON.parse(localStorage.getItem(key)).active.questions;
      return questions.length === 3 && questions.every(q => q.id.startsWith(`${domain}-l5-`));
    }, { key, domain }), `${domain} quiz contains only its three lesson questions`);
    for (let i = 0; i < 3; i++) {
      const correct = await page.evaluate(key => {
        const a = JSON.parse(localStorage.getItem(key)).active;
        return STUDY_KIT.questions.find(q => q.id === a.questions[a.index].id).answer;
      }, key);
      await page.locator(`input[name=answer][value="${correct}"]`).check();
      await page.getByRole("button", { name: "Check answer", exact: true }).click();
      ensure(await page.locator(".feedback li").count() === 4, `${domain} quiz explains all options ${i + 1}`);
      if (i < 2) await page.getByRole("button", { name: "Next", exact: true }).click();
    }
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Finish & see results", exact: true }).click();
    await page.waitForURL("**/#results");
    ensure((await page.locator(".result-score").textContent()).includes("100%"), `${domain} quiz grades original indexes`);
    }

    // Simulate a saved pre-expansion attempt: no domain metadata, old IDs and deadline.
    const legacyDeadline = await page.evaluate(key => {
      const state = JSON.parse(localStorage.getItem(key));
      const deadline = Date.now() + 60000;
      state.active = { kind: "exam", mode: "timed", title: "Domain 1 paper", started: Date.now(), deadline,
        questions: StudyCore.prepare(STUDY_KIT.questions.filter(q => q.pool === "exam" && q.domain === "d1")).map(q => ({ id: q.id, order: q.order })),
        answers: { e01: 1 }, checked: [], flags: ["e01"], index: 0 };
      localStorage.setItem(key, JSON.stringify(state));
      return deadline;
    }, key);
    await page.goto(base + "#attempt");
    await page.reload();
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.deadline, key) === legacyDeadline, "Legacy Domain 1 attempt resumes without restarting deadline");
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.answers.e01, key) === 1, "Legacy answer original index survives expansion");
    await page.goto(base + "#practice");
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Discard saved attempt", exact: true }).click();

    for (const domain of ["d1", "d2", "d3", "d4", "d5", "d6", "d7"]) {
    await page.goto(base + `#practice/${domain}`);
    ensure(await page.getByRole("button", { name: "Start timed paper", exact: true }).count() === 1, `Focused practice shows only ${domain} paper`);
    await page.getByRole("button", { name: "Start timed paper", exact: true }).click();
    await page.waitForURL("**/#attempt");
    ensure(await page.evaluate(({ key, domain }) => {
      const a = JSON.parse(localStorage.getItem(key)).active;
      return a.domain === domain && a.questions.length === 24 && a.questions.every(q => STUDY_KIT.questions.find(item => item.id === q.id).domain === domain);
    }, { key, domain }), `Timed ${domain} paper has 24 isolated domain questions`);
    const deadline = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.deadline, key);
    await page.getByRole("radio").first().check();
    await page.getByRole("button", { name: "Flag for review", exact: true }).click();
    ensure(await page.locator(".feedback").count() === 0, "Timed mode hides all explanations");
    ensure(await page.getByRole("button", { name: "Check answer", exact: true }).count() === 0, "Timed mode has no check-answer shortcut");
    await page.reload();
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.deadline, key) === deadline, "Reload preserves absolute deadline");
    ensure(await page.locator("input[name=answer]:checked").count() === 1, "Timed answer survives reload");
    ensure(await page.getByRole("button", { name: "Remove review flag", exact: true }).count() === 1, "Review flag survives reload");
    for (let i = 0; i < 24; i++) {
      const correct = await page.evaluate(key => {
        const a = JSON.parse(localStorage.getItem(key)).active;
        return STUDY_KIT.questions.find(q => q.id === a.questions[a.index].id).answer;
      }, key);
      await page.locator(`input[name=answer][value="${correct}"]`).check();
      if (i < 23) await page.getByRole("button", { name: "Next", exact: true }).click();
    }
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Finish & see results", exact: true }).click();
    await page.waitForURL("**/#results");
    ensure((await page.locator(".result-score").textContent()).includes("100%"), `Timed shuffled ${domain} paper grades all 24 original indexes correctly`);
    ensure(await page.locator("main details").count() === 24, `Result contains all 24 ${domain} answer reviews`);
    }

    await page.goto(base + "#practice/d7");
    await page.getByRole("button", { name: "Start timed paper", exact: true }).click();
    await page.waitForURL("**/#attempt");
    await page.evaluate(key => { const state = JSON.parse(localStorage.getItem(key)); state.active.deadline = Date.now() - 10; localStorage.setItem(key, JSON.stringify(state)); }, key);
    await page.reload();
    await page.waitForURL("**/#results");
    ensure((await page.locator("main").textContent()).includes("time limit expired"), "Expired saved attempt auto-submits on reload");
    ensure((await page.locator(".result-score").textContent()).includes("0%"), "Expired unanswered paper scores zero");

    const checkMock = ensure;
    for (const mockId of ["m1", "m2"]) {
    const ensure = (condition, message) => checkMock(condition, `${mockId}: ${message}`);
    await page.goto(base + `#mock/${mockId}`);
    ensure((await page.locator("main .notice").textContent()).includes("practice design choices"), "Mock page qualifies question count and suggested duration");
    ensure(await page.locator("main table tbody tr").count() === 7, "Mock allocation displays all seven domains");
    await page.locator(`#duration-${mockId}`).selectOption("150");
    await page.getByRole("button", { name: "Start timed mock", exact: true }).click();
    await page.waitForURL("**/#attempt");
    const mockStart = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active, key);
    ensure(mockStart.kind === "mock" && mockStart.mock === mockId && mockStart.domain === undefined, "Mock uses separate attempt identity");
    ensure(mockStart.deadline - mockStart.started >= 150 * 60000 && mockStart.deadline - mockStart.started < 150 * 60000 + 1000, "Mock honors selected practice duration");
    ensure(await page.evaluate(key => {
      const a = JSON.parse(localStorage.getItem(key)).active;
      const pool = a.questions.map(item => STUDY_KIT.questions.find(q => q.id === item.id));
      return pool.length === 150 && new Set(pool.map(q => q.id)).size === 150 && pool.every(q => q.pool === "mock" && q.mock === a.mock) && Object.entries(STUDY_KIT.mocks.find(m => m.id === a.mock).allocation).every(([id, count]) => pool.filter(q => q.domain === id).length === count);
    }, key), "Mock contains the exact 150-question reserved weighted set");
    ensure(await page.locator(".question-map button").count() === 150, "Mock map has 150 accessible question jumps");
    ensure(await page.locator(`.rail a[href="#mock/${mockId}"]`).getAttribute("aria-current") === "page", "Mock attempt selects its rail entry");
    await page.getByRole("radio").first().check();
    await page.getByRole("button", { name: "Flag for review", exact: true }).click();
    ensure(await page.locator(".feedback").count() === 0 && await page.getByRole("button", { name: "Check answer", exact: true }).count() === 0, "Timed mock has no answer-feedback shortcut");
    await page.setViewportSize({ width: 390, height: 844 });
    ensure(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), "150-question map fits mobile without overflow");
    await page.screenshot({ path: `/private/var/folders/4s/2grtwc3j2rvf0gkv9l7s3xp80000gn/T/opencode/mock-${mockId.slice(1)}-attempt-mobile.png`, fullPage: false });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator('[data-action="jump"][data-index="149"]').click();
    ensure(await page.getByRole("button", { name: "Next", exact: true }).isDisabled(), "Mock last question disables Next");
    await page.reload();
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.index, key) === 149, "Mock jump position survives reload");
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.deadline, key) === mockStart.deadline, "Mock reload preserves absolute deadline");
    await page.getByRole("link", { name: "Save & leave", exact: true }).click();
    await page.waitForURL("**/#practice");
    await page.goto(base + `#mock/${mockId === "m1" ? "m2" : "m1"}`);
    await page.evaluate(() => { window.confirm = () => false; });
    await page.getByRole("button", { name: "Start learning mock", exact: true }).click();
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.deadline, key) === mockStart.deadline, "Declining replacement preserves saved timed mock");
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.mock, key) === mockId, "Declining another mock preserves the saved mock's identity");
    await page.getByRole("link", { name: "Resume practice", exact: true }).click();
    await page.waitForURL("**/#attempt");
    await page.locator('[data-action="jump"][data-index="0"]').click();
    ensure(await page.getByRole("button", { name: "Remove review flag", exact: true }).count() === 1, "Mock flag survives save and resume");
    ensure(await page.locator("input[name=answer]:checked").count() === 1, "Mock original-index answer survives save and resume");
    const mockMisses = [mockStart.questions[0].id, mockStart.questions[149].id];
    for (let i = 0; i < 150; i++) {
      const correct = await page.evaluate(key => {
        const a = JSON.parse(localStorage.getItem(key)).active;
        return STUDY_KIT.questions.find(q => q.id === a.questions[a.index].id).answer;
      }, key);
      if (i < 149) await page.locator(`input[name=answer][value="${i === 0 ? (correct + 1) % 4 : correct}"]`).check();
      if (i < 149) await page.getByRole("button", { name: "Next", exact: true }).click();
    }
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Finish & see results", exact: true }).click();
    await page.waitForURL("**/#results");
    ensure((await page.locator(".result-score").textContent()).includes("148 / 150 correct"), "Timed shuffled mock grades 148 correct, one wrong, and one unanswered");
    ensure((await page.locator("main").textContent()).includes("149 answered; 1 unanswered"), "Mock result reports unanswered denominator");
    ensure(await page.locator("#domain-results li").count() === 7, "Mock result includes seven domain breakdowns");
    ensure(await page.evaluate(key => {
      const a = JSON.parse(localStorage.getItem(key)).lastResult;
      const result = StudyCore.score(a.questions.map(item => STUDY_KIT.questions.find(q => q.id === item.id)), a.answers);
      return Object.entries(STUDY_KIT.mocks.find(m => m.id === a.mock).allocation).every(([id, count]) => result.byDomain[id].total === count) && result.correct === 148;
    }, key), "Domain scores sum correctly without double weighting");
    ensure(await page.locator("main details").count() === 150, "Mock result retains all 150 answer reviews");
    await page.locator("main details").first().locator("summary").click();
    ensure(await page.locator("main details").first().locator(".feedback li").count() === 4, "Mock answer review explains every option");
    await page.setViewportSize({ width: 390, height: 844 });
    ensure(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), "Mock results fit mobile");
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.reload();
    ensure((await page.locator(".result-score").textContent()).includes("148 / 150 correct"), "Mock detailed result survives reload");
    ensure(await page.evaluate(({ key, ids }) => ids.every(id => JSON.parse(localStorage.getItem(key)).mistakes.includes(id)), { key, ids: mockMisses }), "Wrong and unanswered mock items enter the existing mistake queue");

    await page.goto(base + "#review");
    await page.getByRole("button", { name: "Practice these questions", exact: true }).click();
    await page.waitForURL("**/#attempt");
    const reviewIndex = await page.evaluate(({ key, id }) => JSON.parse(localStorage.getItem(key)).active.questions.findIndex(q => q.id === id), { key, id: mockMisses[0] });
    await page.locator(`[data-action="jump"][data-index="${reviewIndex}"]`).click();
    const reviewAnswer = await page.evaluate(id => STUDY_KIT.questions.find(q => q.id === id).answer, mockMisses[0]);
    await page.locator(`input[name=answer][value="${reviewAnswer}"]`).check();
    await page.getByRole("button", { name: "Check answer", exact: true }).click();
    ensure(await page.locator(".feedback li").count() === 4, "Mixed-pool mistake review explains mock questions");
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Finish & see results", exact: true }).click();
    await page.waitForURL("**/#results");
    ensure(await page.evaluate(({ key, id }) => !JSON.parse(localStorage.getItem(key)).mistakes.includes(id), { key, id: mockMisses[0] }), "A later correct review removes a mock mistake");

    await page.goto(base + `#mock/${mockId}`);
    await page.getByRole("button", { name: "Start learning mock", exact: true }).click();
    await page.waitForURL("**/#attempt");
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active.deadline === null, key), "Learning mock is untimed");
    const learningAnswer = await page.evaluate(key => {
      const a = JSON.parse(localStorage.getItem(key)).active;
      return STUDY_KIT.questions.find(q => q.id === a.questions[0].id).answer;
    }, key);
    await page.locator(`input[name=answer][value="${learningAnswer}"]`).check();
    await page.getByRole("button", { name: "Check answer", exact: true }).click();
    ensure(await page.locator(".feedback li").count() === 4, "Learning mock exposes every-option feedback only after checking");
    await page.reload();
    ensure(await page.locator("input[name=answer]:disabled").count() === 4, "Learning mock checked answer remains locked after reload");
    await page.goto(base + `#mock/${mockId}`);
    await page.evaluate(() => { window.confirm = () => true; });
    await page.getByRole("button", { name: "Discard saved attempt", exact: true }).click();
    await page.getByRole("button", { name: "Start timed mock", exact: true }).click();
    await page.waitForURL("**/#attempt");
    await page.evaluate(key => { const state = JSON.parse(localStorage.getItem(key)); state.active.deadline = Date.now() - 10; localStorage.setItem(key, JSON.stringify(state)); }, key);
    await page.reload();
    await page.waitForURL("**/#results");
    ensure((await page.locator("main").textContent()).includes("time limit expired"), "Expired saved mock auto-submits on reload");
    ensure((await page.locator(".result-score").textContent()).includes("0 / 150 correct"), "Expired unanswered mock counts all 150 as incorrect");
    ensure(await page.evaluate(key => {
      const state = JSON.parse(localStorage.getItem(key));
      return state.completed.includes("d1-l1") && state.completed.includes("d7-l5") && state.bookmarks.includes("d1-l1") && state.history.some(h => h.title === "Domain 1 paper");
    }, key), "Mock use preserves earlier reading, bookmarks, and paper history");
    }

    await page.evaluate(key => {
      const state = JSON.parse(localStorage.getItem(key));
      state.active = structuredClone(state.lastResult);
      delete state.active.finished;
      state.active.questions[0].id = STUDY_KIT.questions.find(q => q.mock === "m1").id;
      state.active.answers = {};
      state.active.flags = [];
      state.active.checked = [];
      state.active.deadline = Date.now() + 60000;
      localStorage.setItem(key, JSON.stringify(state));
    }, key);
    await page.reload();
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).active === null, key), "Mixed Mock 1/2 saved set is rejected in the browser");
    ensure(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).lastResult.mock === "m2", key), "Rejecting a mixed attempt preserves the valid Mock 2 detailed result");

    await page.goto(base + "#downloads");
    const links = await page.locator("main a[href^='notes/']").evaluateAll(nodes => nodes.map(n => n.href));
    ensure(links.length === 52, "Downloads list all 52 released files");
    for (const url of links) ensure((await page.request.get(url)).ok(), `Download exists: ${url.split("/").pop()}`);
    const downloadable = page.getByRole("link", { name: "Curriculum & study schedule Markdown", exact: false });
    ensure(await downloadable.getAttribute("download") !== null, "Markdown link requests a download rather than navigation");

    for (const route of ["home", "curriculum", "lesson/d1-l5", "domain/d2", "lesson/d2-l4", "lesson/d2-l6", ...["d3", "d4", "d5", "d6", "d7"].flatMap(domain => [`domain/${domain}`, ...Array.from({ length: 6 }, (_, i) => `lesson/${domain}-l${i + 1}`)]), "practice", "practice/d2", "practice/d3", "practice/d4", "practice/d5", "practice/d6", "practice/d7", "mock/m1", "mock/m2", "mock/m3", "glossary", "downloads"]) {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(base + "#" + route);
      await page.locator("main h1").waitFor();
      ensure(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `No mobile overflow: ${route}`);
    }
    await page.screenshot({ path: "/private/var/folders/4s/2grtwc3j2rvf0gkv9l7s3xp80000gn/T/opencode/study-mobile.png", fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(base + "notes/printable-workbook.html");
    ensure(await page.locator("article").count() === 6, "Printable workbook contains all six lessons");
    await page.emulateMedia({ media: "print" });
    ensure(await page.locator(".print-tools").isHidden(), "Print stylesheet removes controls");
    await page.emulateMedia({ media: "screen" });
    for (const number of [2, 3, 4, 5, 6, 7]) {
      await page.goto(base + `notes/domain-${number}-printable-workbook.html`);
      ensure(await page.locator("article").count() === 6, `Domain ${number} printable workbook contains all six lessons`);
      await page.emulateMedia({ media: "print" });
      ensure(await page.locator(".print-tools").isHidden(), `Domain ${number} print stylesheet removes controls`);
      await page.emulateMedia({ media: "screen" });
    }
    for (const number of [1, 2]) {
    await page.goto(base + `notes/mock-${number}-printable-practice-paper.html`);
    ensure(await page.locator(".question").count() === 150, "Printable mock paper contains 150 mixed-domain questions");
    ensure(!(await page.locator("body").textContent()).includes("Correct:"), "Printable mock paper has no answer key");
    await page.emulateMedia({ media: "print" });
    ensure(await page.locator(".print-tools").isHidden(), "Printable mock paper hides controls in print");
    await page.emulateMedia({ media: "screen" });
    await page.goto(base + `notes/mock-${number}-printable-answer-key.html`);
    ensure(await page.locator(".question").count() === 150, "Printable mock key contains 150 every-option answer reviews");
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(base + `#mock/m${number}`);
    await page.screenshot({ path: `/private/var/folders/4s/2grtwc3j2rvf0gkv9l7s3xp80000gn/T/opencode/mock-${number}-desktop.png`, fullPage: false });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator("main h1").scrollIntoViewIfNeeded();
    await page.screenshot({ path: `/private/var/folders/4s/2grtwc3j2rvf0gkv9l7s3xp80000gn/T/opencode/mock-${number}-mobile.png`, fullPage: false });
    }

    await page.goto(base);
    await page.evaluate(key => localStorage.setItem(key, JSON.stringify({ active: { questions: [{ id: "bad" }] }, completed: ["bad"], bookmarks: ["bad"] })), key);
    await page.reload();
    ensure(await page.locator("main h1").count() === 1, "Malformed saved state does not crash the app");
    await page.evaluate(key => localStorage.setItem(key, "{invalid-json"), key);
    await page.reload();
    ensure(await page.locator("#storage-warning").isHidden(), "Malformed JSON recovers without falsely reporting blocked storage");
    await page.evaluate(() => { Storage.prototype.setItem = () => { throw new DOMException("Blocked", "SecurityError"); }; });
    await page.goto(base + "#lesson/d1-l2");
    await page.getByRole("button", { name: "Bookmark lesson", exact: true }).click();
    ensure(await page.locator("#storage-warning").isVisible(), "Blocked storage gives an explicit progress warning");
    ensure(await page.locator("main h1").count() === 1, "Study still works when progress cannot be persisted");
    ensure(errors.length === 0, `No JavaScript page errors (${errors.join(", ")})`);
    return { passed: checks.length, checks };
  } finally {
    await page.goto(base);
    await page.reload();
    await page.evaluate(({ key, original }) => { if (original === null) localStorage.removeItem(key); else localStorage.setItem(key, original); }, { key, original });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.reload();
    page.off("pageerror", onError);
    page.off("dialog", onDialog);
  }
}
