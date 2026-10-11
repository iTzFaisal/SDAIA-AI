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
    const initialHash = await page.evaluate(() => location.hash);
    await page.getByRole("link", { name: "Skip to content", exact: true }).focus();
    await page.keyboard.press("Enter");
    ensure(await page.evaluate(() => location.hash) === initialHash, "Skip link preserves the current route");
    ensure(await page.evaluate(() => document.activeElement.id) === "main", "Skip link focuses the main content");
    for (const route of ["home", "curriculum", "foundation", "domain/d1", "lesson/d1-l1", ...["d2", "d3", "d4"].flatMap(domain => [`domain/${domain}`, ...Array.from({ length: 6 }, (_, i) => `lesson/${domain}-l${i + 1}`)]), "domain/d5", "practice", "practice/d1", "practice/d2", "practice/d3", "practice/d4", "review", "glossary", "downloads", "sources"]) {
      await page.goto(base + "#" + route);
      await page.locator("main h1").waitFor();
      ensure(await page.locator("main h1").count() === 1, `Route renders: ${route}`);
      ensure(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `No desktop overflow: ${route}`);
    }
    for (const domain of ["d2", "d3", "d4"]) {
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
    ensure((await page.locator("main").textContent()).includes("outline only"), "Domain 5 remains clearly planned");
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

    for (const domain of ["d2", "d3", "d4"]) {
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

    for (const domain of ["d1", "d2", "d3", "d4"]) {
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

    await page.goto(base + "#practice/d4");
    await page.getByRole("button", { name: "Start timed paper", exact: true }).click();
    await page.waitForURL("**/#attempt");
    await page.evaluate(key => { const state = JSON.parse(localStorage.getItem(key)); state.active.deadline = Date.now() - 10; localStorage.setItem(key, JSON.stringify(state)); }, key);
    await page.reload();
    await page.waitForURL("**/#results");
    ensure((await page.locator("main").textContent()).includes("time limit expired"), "Expired saved attempt auto-submits on reload");
    ensure((await page.locator(".result-score").textContent()).includes("0%"), "Expired unanswered paper scores zero");

    await page.goto(base + "#downloads");
    const links = await page.locator("main a[href^='notes/']").evaluateAll(nodes => nodes.map(n => n.href));
    for (const url of links) ensure((await page.request.get(url)).ok(), `Download exists: ${url.split("/").pop()}`);
    const downloadable = page.getByRole("link", { name: "Curriculum & study schedule Markdown", exact: false });
    ensure(await downloadable.getAttribute("download") !== null, "Markdown link requests a download rather than navigation");

    for (const route of ["home", "curriculum", "lesson/d1-l5", "domain/d2", "lesson/d2-l4", "lesson/d2-l6", ...["d3", "d4"].flatMap(domain => [`domain/${domain}`, ...Array.from({ length: 6 }, (_, i) => `lesson/${domain}-l${i + 1}`)]), "practice", "practice/d2", "practice/d3", "practice/d4", "glossary", "downloads"]) {
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
    for (const number of [2, 3, 4]) {
      await page.goto(base + `notes/domain-${number}-printable-workbook.html`);
      ensure(await page.locator("article").count() === 6, `Domain ${number} printable workbook contains all six lessons`);
      await page.emulateMedia({ media: "print" });
      ensure(await page.locator(".print-tools").isHidden(), `Domain ${number} print stylesheet removes controls`);
      await page.emulateMedia({ media: "screen" });
    }
    await page.goto(base + "#domain/d4");
    await page.screenshot({ path: "/private/var/folders/4s/2grtwc3j2rvf0gkv9l7s3xp80000gn/T/opencode/domain-4-desktop.png", fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: "/private/var/folders/4s/2grtwc3j2rvf0gkv9l7s3xp80000gn/T/opencode/domain-4-mobile.png", fullPage: true });

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
