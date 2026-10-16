(() => {
  "use strict";
  const key = "ai-engineer-study-kit-theme";
  const choices = ["light", "dark", "system"];
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const toggle = document.querySelector("#theme-toggle");
  const icons = toggle.querySelectorAll("[data-theme-icon]");
  let preference = "system";
  try {
    const saved = localStorage.getItem(key);
    if (choices.includes(saved)) preference = saved;
  } catch { /* Theme selection still works when browser storage is unavailable. */ }

  function apply() {
    const theme = preference === "system" ? (system.matches ? "dark" : "light") : preference;
    document.documentElement.dataset.theme = theme;
    const next = theme === "dark" ? "light" : "dark";
    const label = `Switch to ${next} theme`;
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
    for (const icon of icons) icon.toggleAttribute("hidden", icon.dataset.themeIcon !== next);
  }

  toggle.addEventListener("click", () => {
    preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply();
    try { localStorage.setItem(key, preference); }
    catch { /* Keep the chosen theme for this page without changing study progress. */ }
  });
  system.addEventListener("change", apply);
  window.addEventListener("storage", event => {
    if (event.key !== key && event.key !== null) return;
    preference = choices.includes(event.newValue) ? event.newValue : "system";
    apply();
  });
  apply();
})();
