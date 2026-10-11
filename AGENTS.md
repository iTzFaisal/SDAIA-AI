# Repository instructions

## Runtime and shared content
- This is a dependency-free static site, not a bundled app. Preserve direct `file://` opening and offline reading: browser scripts are classic deferred scripts, with no runtime imports/fetches or remote assets. Use relative URLs so GitHub Pages works under `/SDAIA-AI/`.
- `index.html` loads `content/kit.js` → `content/questions.js` → `assets/core.js` → `assets/app.js`. The first two populate `globalThis.STUDY_KIT`; core exposes `globalThis.StudyCore`. Node build/tests import these same files for their side effects despite `package.json` declaring ESM. Preserve this dual-runtime wiring.
- `assets/app.js` owns hash routing and browser state; keep shuffle, grading, deadline, and attempt-validation logic in `assets/core.js` so Node tests can exercise it.
- `notes/` contains 32 generated Markdown/HTML downloads. Edit shared content or `scripts/build-notes.js`, not the generated files; regenerate and include resulting changes.

## Commands and verification
- Node.js ≥20; CI uses 22. No dependency installation is needed, and no lint/typecheck scripts are configured.
- Local server: `npm start` → `http://127.0.0.1:4173`; alternate port: `PORT=4174 npm start`. HTTP is the verified launch path; automated `file://` testing was blocked by the attached browser (see `docs/VALIDATION.md`).
- After content/generator edits, run `npm run build` **before** `npm test`: tests read generated notes, so testing without rebuilding can check stale output.
- Focused unit test: `node --test --test-name-pattern="grading" tests/kit.test.js` (replace the pattern with a test-name substring).
- Browser smoke is **not** part of `npm test` or CI. With the server running and an attached Playwright CLI session, use `playwright-cli run-code --filename=tests/browser-smoke.js`. It restores the kit's prior progress; its base URL is fixed to port 4173 and its screenshot path is machine-specific.
- `.github/workflows/pages.yml` builds → tests → deploys on pushes to `main`; only `index.html`, the badge image, `assets/`, `content/`, and `notes/` enter `_site/`.

## Content and persistence gotchas
- Current scope is 30 lessons across Domains 1–5, 90 quiz questions, and five separate 24-question papers; Domains 6–7 and three full mocks remain planned. Routing and downloads derive from shared content; expansion still requires updating release copy and explicit availability/count checks in `tests/kit.test.js` and `tests/browser-smoke.js`, not only adding content.
- Question `answer` and saved responses are zero-based **original option indexes**, never shuffled display letters. Preserve separate `quiz`/`exam` pools and explanations for every option; downloadable paper order is fixed and its answer key must remain separate.
- Lesson/question IDs are persisted under `ai-engineer-study-kit-v1`. Renaming IDs affects bookmarks, mistakes, and saved attempts. Timed attempts use an absolute deadline that survives reloads; do not restart it on resume. Never clear unrelated browser storage.

## Source and design boundaries
- Keep confirmed/supplied exam facts separate from curriculum choices. `content/kit.js` records provenance: the learner's badge image supplies domain weights; detailed objectives, official duration/question count, and numerical badge cutoffs are unverified. Do not map practice scores/difficulty to official badge levels or present the Domain 1 paper as a full mock.
- Follow `docs/DESIGN.md` for UI changes: an independent study workbook, not an official SDAIA portal or SaaS dashboard. The supplied badge image is evidence, not branding; avoid SDAIA logos and readiness/pass guarantees.
