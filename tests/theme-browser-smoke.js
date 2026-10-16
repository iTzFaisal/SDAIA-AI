// Run with the local server and playwright-cli run-code --filename=tests/theme-browser-smoke.js.
// Changes only the theme preference, restoring it and the original route afterward.
async page => {
  const key = "ai-engineer-study-kit-theme";
  const base = "http://127.0.0.1:4173/";
  const checks = [];
  const ensure = (condition, message) => { if (!condition) throw new Error(message); checks.push(message); };
  await page.goto(base);
  const original = await page.evaluate(key => ({ theme: localStorage.getItem(key), hash: location.hash }), key);
  const viewport = page.viewportSize();
  const theme = () => page.locator("html").getAttribute("data-theme");
  const toggle = page.locator("#theme-toggle");
  try {
    await page.evaluate(key => localStorage.removeItem(key), key);
    await page.emulateMedia({ colorScheme: "dark" });
    await page.reload();
    ensure(await theme() === "dark", "Default matches a dark system");
    ensure(await toggle.getAttribute("aria-label") === "Switch to light theme" && await toggle.locator('[data-theme-icon="light"]').isVisible(), "Dark system shows the sun action");
    await page.emulateMedia({ colorScheme: "light" });
    await page.waitForFunction(() => document.documentElement.dataset.theme === "light");
    ensure(await theme() === "light", "System changes update the theme live");
    ensure(await toggle.getAttribute("aria-label") === "Switch to dark theme" && await toggle.locator('[data-theme-icon="dark"]').isVisible(), "Light system flips the button to the moon action");
    ensure(await page.locator(".theme-toggle").count() === 1 && await toggle.locator("svg:visible").count() === 1, "Theme control has exactly one button and one visible icon");

    const progress = await page.evaluate(() => localStorage.getItem("ai-engineer-study-kit-v1"));
    await toggle.click();
    await page.reload();
    ensure(await toggle.getAttribute("aria-label") === "Switch to light theme" && await theme() === "dark", "Explicit dark choice survives reload on a light system");
    await page.setViewportSize({ width: 1440, height: 1000 });
    for (const route of ["home", "curriculum", "lesson/d6-l6", "practice", "mock/m1", "glossary", "downloads"]) {
      await page.goto(base + "#" + route);
      await page.locator("main h1").waitFor();
      ensure(await theme() === "dark", `Dark theme persists on ${route}`);
      ensure(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No desktop overflow on ${route}`);
      const surfaces = await page.locator(".panel,.lesson-list li,details,table,.search,.question-panel,.download-list a,.empty").evaluateAll(elements => elements.every(element => getComputedStyle(element).backgroundColor === "rgb(25, 43, 58)"));
      ensure(surfaces, `Workbook surfaces use dark paper on ${route}`);
    }
    await page.goto(base + "#lesson/d1-l1");
    await page.emulateMedia({ media: "print" });
    ensure(await page.locator("body").evaluate(element => getComputedStyle(element).backgroundColor) === "rgb(255, 255, 255)", "Printing stays on white paper");
    ensure(await page.locator("html").evaluate(element => getComputedStyle(element).color) === "rgb(25, 51, 72)", "Printing keeps dark ink");
    await page.emulateMedia({ media: "screen", colorScheme: "dark" });
    await toggle.focus();
    await page.keyboard.press("Enter");
    ensure(await theme() === "light", "Explicit light choice overrides a dark system");
    await page.reload();
    ensure(await theme() === "light" && await toggle.getAttribute("aria-label") === "Switch to dark theme", "Keyboard-selected light choice survives reload");
    await toggle.focus();
    await page.keyboard.press("Space");
    ensure(await theme() === "dark", "Same button supports Space to flip back to dark");
    for (const expected of ["light", "dark", "light", "dark"]) {
      await toggle.click();
      ensure(await theme() === expected && await toggle.locator(`svg[data-theme-icon="${expected === "dark" ? "light" : "dark"}"]`).isVisible(), `Repeated click flips theme and icon to ${expected}`);
    }
    for (const width of [320, 390, 740]) {
      await page.setViewportSize({ width, height: 844 });
      await toggle.focus();
      ensure(await toggle.evaluate(element => element === document.activeElement), `Theme toggle is keyboard focusable at ${width}px`);
      ensure(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No mobile overflow at ${width}px`);
    }
    ensure(await page.evaluate(() => localStorage.getItem("ai-engineer-study-kit-v1")) === progress, "Theme changes leave study progress untouched");
    return { checks: checks.length, passed: checks };
  } finally {
    await page.evaluate(({ key, original }) => {
      if (original.theme === null) localStorage.removeItem(key);
      else localStorage.setItem(key, original.theme);
    }, { key, original });
    await page.emulateMedia({ media: null, colorScheme: null });
    if (viewport) await page.setViewportSize(viewport);
    await page.goto(base + original.hash);
  }
}
