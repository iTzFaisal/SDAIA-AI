import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../assets/theme.js", import.meta.url), "utf8");
const key = "ai-engineer-study-kit-theme";

function setup({ saved = null, dark = false, blocked = false } = {}) {
  const listeners = {};
  const storage = new Map([["ai-engineer-study-kit-v1", "existing progress"]]);
  if (saved !== null) storage.set(key, saved);
  const root = { dataset: {} };
  const icons = ["light", "dark"].map(theme => ({
    dataset: { themeIcon: theme }, hidden: false,
    toggleAttribute(name, value) { assert.equal(name, "hidden"); this.hidden = value; }
  }));
  const toggle = {
    attributes: {},
    setAttribute(name, value) { this.attributes[name] = value; },
    querySelectorAll: () => icons,
    addEventListener(name, fn) { listeners[name] = fn; }
  };
  const media = { matches: dark, addEventListener: (name, fn) => { listeners.media = fn; } };
  vm.runInNewContext(source, {
    document: { documentElement: root, querySelector: () => toggle },
    window: {
      matchMedia: query => { assert.equal(query, "(prefers-color-scheme: dark)"); return media; },
      addEventListener: (name, fn) => { listeners[name] = fn; }
    },
    localStorage: {
      getItem: name => { if (blocked) throw new Error("Storage blocked"); return storage.get(name) ?? null; },
      setItem: (name, value) => { if (blocked) throw new Error("Storage blocked"); storage.set(name, value); }
    }
  });
  return {
    root, storage,
    assertToggle(target) {
      assert.equal(toggle.attributes["aria-label"], `Switch to ${target} theme`);
      assert.equal(toggle.attributes.title, `Switch to ${target} theme`);
      assert.deepEqual(icons.filter(icon => !icon.hidden).map(icon => icon.dataset.themeIcon), [target]);
    },
    click() { listeners.click(); },
    system(value) { media.matches = value; listeners.media(); },
    otherTab(event) { listeners.storage(event); }
  };
}

test("theme defaults to the system and updates the active icon on live system changes", () => {
  for (const dark of [false, true]) {
    const app = setup({ dark });
    app.assertToggle(dark ? "light" : "dark");
    assert.equal(app.storage.has(key), false);
    assert.equal(app.root.dataset.theme, dark ? "dark" : "light");
    app.system(!dark);
    assert.equal(app.root.dataset.theme, dark ? "light" : "dark");
    app.assertToggle(dark ? "dark" : "light");
  }
});

test("explicit themes override the system, persist, and preserve study progress", () => {
  for (const choice of ["light", "dark"]) {
    const app = setup({ dark: choice === "light" });
    app.click();
    assert.equal(app.storage.get(key), choice);
    assert.equal(app.storage.get("ai-engineer-study-kit-v1"), "existing progress");
    const reloaded = setup({ saved: app.storage.get(key), dark: true });
    reloaded.assertToggle(choice === "light" ? "dark" : "light");
    assert.equal(reloaded.root.dataset.theme, choice === "light" ? "light" : "dark");
    app.system(false);
    assert.equal(app.root.dataset.theme, choice === "dark" ? "dark" : "light");
  }
});

test("invalid saved themes fall back to the system", () => {
  const app = setup({ saved: "invalid", dark: true });
  app.assertToggle("light");
  assert.equal(app.root.dataset.theme, "dark");
});

test("theme selection and system tracking work when storage is blocked", () => {
  const app = setup({ blocked: true, dark: true });
  assert.equal(app.root.dataset.theme, "dark");
  app.click();
  assert.equal(app.root.dataset.theme, "light");
  app.system(true);
  assert.equal(app.root.dataset.theme, "light");
  app.otherTab({ key, newValue: null });
  assert.equal(app.root.dataset.theme, "dark");
});

test("theme changes in other tabs sync without reacting to progress writes", () => {
  const app = setup();
  app.otherTab({ key, newValue: "dark" });
  app.assertToggle("light");
  assert.equal(app.root.dataset.theme, "dark");
  app.otherTab({ key: "ai-engineer-study-kit-v1", newValue: null });
  assert.equal(app.root.dataset.theme, "dark");
  app.otherTab({ key, newValue: null });
  app.assertToggle("dark");
  assert.equal(app.root.dataset.theme, "light");
  app.otherTab({ key: null, newValue: null });
  app.assertToggle("dark");
});

test("legacy system preferences continue following the system", () => {
  const app = setup({ saved: "system", dark: true });
  app.assertToggle("light");
  app.system(false);
  app.assertToggle("dark");
});

test("clicking the same theme button repeatedly flips its icon and theme", () => {
  const app = setup();
  for (const expected of ["dark", "light", "dark", "light"]) {
    app.click();
    assert.equal(app.root.dataset.theme, expected);
    assert.equal(app.storage.get(key), expected);
    app.assertToggle(expected === "dark" ? "light" : "dark");
  }
});

test("theme toggle is one accessible button with two decorative icons", async () => {
  const index = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const toggle = index.match(/<button class="theme-toggle" id="theme-toggle"[^>]+>[\s\S]*?<\/button>/)[0];
  assert.match(toggle, /aria-label="Switch to dark theme" title="Switch to dark theme"/);
  assert.equal([...index.matchAll(/id="theme-toggle"/g)].length, 1);
  assert.equal([...toggle.matchAll(/<svg[^>]+aria-hidden="true"/g)].length, 2);
  assert.match(toggle, /data-theme-icon="light" hidden/);
  assert.doesNotMatch(index, /data-theme-choice|<select id="theme-preference"/);
});
