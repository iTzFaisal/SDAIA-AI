# AI Engineer study kit

Independent English, concept-focused preparation for the learner's **confirmed 5 December 2026 exam**, designed to be shared with friends who have no AI background.

## Available now

- Seven-domain curriculum outline and an eight-week, 10–14-hour/week plan.
- Beginner foundation primer and forty-two lessons: six each in Domains 1–7.
- Domain 2 covers AI approaches, neural networks, model families and transfer learning, tokens and embeddings, prompting/RAG/fine-tuning, generative evaluation, and bounded agents. No coding exercises.
- Domain 3 covers APIs and data contracts, asynchronous jobs/events, timeouts and duplicate-safe retries, testing and reproducibility, safe retrieval/tools, adapters, compatibility, and maintainable handoffs. No coding exercises.
- Domain 4 covers experiment tracking, whole-system versioning, pipeline gates, batch/online serving, shadow/canary/blue-green rollouts, drift and delayed outcomes, reliability targets, LLM observability, fallbacks, rollback, and incidents. No coding exercises.
- Domain 5 covers architecture and storage, CPU/GPU and memory, quantization/distillation, performance benchmarks, batching/caching, queues and scaling, placement, total cost, and tested recovery objectives. No coding exercises.
- Domain 6 covers the May 2025 SDAIA ethics principles, risk tiers, lifecycle controls, roles and annex tools/checklists, fairness, explanations and oversight, privacy and Saudi PDPL context, threat modeling and supply chains, prompt injection and tool abuse, impact assessments, auditability, and conditional breach notification. English explanations and paper examples only; no coding exercises or legal advice.
- Domain 7 covers problem discovery and non-AI alternatives, success measures, total cost and simple ROI/payback, evidence and uncertainty, ownership and accepted handoffs, prioritization, adoption and scope changes, professional integrity, escalation, and continuous learning. Worked paper examples only; no coding exercises or project compliance guarantees.
- 126 lesson questions and **seven separate 24-question domain papers**, all with explanations for every option. Domain papers never combine question pools or reuse lesson checks.
- **Mocks 1–3: 150 fresh reserved questions each across all seven domains**, with every-option explanations and results by domain, lesson, and practice difficulty. Their sets are separate from each other, quizzes, and domain papers: 744 questions in total.
- Untimed learning and timed paper modes, shuffled question/option order, saved attempts, lesson bookmarks, reading progress, mistake review, and glossary search.
- Downloadable Markdown notes, separate practice paper and answer key, and printable HTML documents that can be saved as PDF.

**All seven proposed domain curricula and Mocks 1–3 are available.** No single-domain paper is a full seven-domain mock. Topic coverage is our interpretation of the broad supplied domains, not a verified exhaustive expert-level syllabus. No passing score or official badge cutoff is invented.

## Open it

Live site: **https://itzfaisal.github.io/SDAIA-AI/**

Open `index.html` directly in a browser. The kit has no package dependencies, accounts, API keys, remote fonts, or backend. Files are already generated in `notes/`.

For a more predictable local origin and saved progress, with Node.js 20+:

```sh
npm start
```

Then visit **http://127.0.0.1:4173**. The development server binds only to the local machine. If the port is busy, set `PORT=4174 npm start`.

## Share or print

Share the live site or the entire folder, including `assets/`, `content/`, and `notes/`. GitHub Pages automatically rebuilds, tests, and deploys the static site whenever changes are pushed to `main`, using `.github/workflows/pages.yml`. Friends' progress is independent and stays in their own browser; it does not sync across devices, browsers, or origins. File-based local storage behavior can differ by browser.

Open `notes/printable-workbook.html` and choose **Print / save as PDF**. Separate printable paper and key are `notes/printable-practice-paper.html` and `notes/printable-answer-key.html`. These HTML files need no network to read; source links naturally need internet access.

Domain 2 starts at `index.html#domain/d2`; its paper is at `index.html#practice/d2`. Downloads are `notes/domain-2-study-notes.md`, `notes/domain-2-practice-paper.md`, and `notes/domain-2-answer-key.md`. Printable versions are `notes/domain-2-printable-workbook.html`, `notes/domain-2-printable-practice-paper.html`, and `notes/domain-2-printable-answer-key.html`. Keep the answer key separate until you finish the paper.

Domain 3 starts at `index.html#domain/d3`; its paper is at `index.html#practice/d3`. Downloads are `notes/domain-3-study-notes.md`, `notes/domain-3-practice-paper.md`, and `notes/domain-3-answer-key.md`. Printable versions are `notes/domain-3-printable-workbook.html`, `notes/domain-3-printable-practice-paper.html`, and `notes/domain-3-printable-answer-key.html`. Read Domains 1–2 first and keep the key separate until you finish the paper.

Domain 4 starts at `index.html#domain/d4`; its paper is at `index.html#practice/d4`. Downloads are `notes/domain-4-study-notes.md`, `notes/domain-4-practice-paper.md`, and `notes/domain-4-answer-key.md`. Printable versions are `notes/domain-4-printable-workbook.html`, `notes/domain-4-printable-practice-paper.html`, and `notes/domain-4-printable-answer-key.html`. Read Domains 1–3 first and keep the key separate until you finish the paper.

Domain 5 starts at `index.html#domain/d5`; its paper is at `index.html#practice/d5`. Downloads are `notes/domain-5-study-notes.md`, `notes/domain-5-practice-paper.md`, and `notes/domain-5-answer-key.md`. Printable versions are `notes/domain-5-printable-workbook.html`, `notes/domain-5-printable-practice-paper.html`, and `notes/domain-5-printable-answer-key.html`. Read Domains 1–4 first and keep the key separate until you finish the paper.

Domain 6 starts at `index.html#domain/d6`; its paper is at `index.html#practice/d6`. Downloads are `notes/domain-6-study-notes.md`, `notes/domain-6-practice-paper.md`, and `notes/domain-6-answer-key.md`. Printable versions are `notes/domain-6-printable-workbook.html`, `notes/domain-6-printable-practice-paper.html`, and `notes/domain-6-printable-answer-key.html`. Read Domains 1–5 first and keep the key separate until you finish the paper.

Domain 7 starts at `index.html#domain/d7`; its paper is at `index.html#practice/d7`. Downloads are `notes/domain-7-study-notes.md`, `notes/domain-7-practice-paper.md`, and `notes/domain-7-answer-key.md`. Printable versions are `notes/domain-7-printable-workbook.html`, `notes/domain-7-printable-practice-paper.html`, and `notes/domain-7-printable-answer-key.html`. Read Domains 1–6 first and keep the key separate until you finish the paper.

## Mock 1

Mock 1 opens at `index.html#mock/m1` (live: https://itzfaisal.github.io/SDAIA-AI/#mock/m1). Read all seven domains first. It uses the proposed allocation **26 / 25 / 21 / 27 / 19 / 22 / 10** and a suggested **180-minute practice limit**; neither 150 questions nor this timing is a verified official exam specification. Each question has one point: weighting comes from counts, not a second domain multiplier. Timed mode hides feedback until submission; learning mode offers checked-answer explanations and is supported study. Retakes shuffle the same questions, not fresh assessment.

Separate downloads: `notes/mock-1-practice-paper.md` and `notes/mock-1-answer-key.md`; printable equivalents: `notes/mock-1-printable-practice-paper.html` and `notes/mock-1-printable-answer-key.html`. The paper is mixed-domain and fixed-order; its key's letters match that order, not the website's shuffled letters. Keep the key closed until finished. Results link missed concepts back to existing lessons and reviewed sources. Legal and financial interpretation boundaries below apply equally to the mock.

## Mock 2

Mock 2 opens at `index.html#mock/m2` (live: https://itzfaisal.github.io/SDAIA-AI/#mock/m2). Use it after studying all seven domains and repairing weak concepts from Mock 1. It has its own 150 reserved scenarios and stable IDs, covering all 42 lessons; it does not reuse Mock 1, quiz, or domain-paper questions. The same proposed allocation, suggested 180-minute practice limit, one-point scoring, modes, and source boundaries described above apply. These are practice assumptions, not verified official count, timing, or readiness criteria. Each mock's retakes reuse that mock's familiar questions.

Separate downloads: `notes/mock-2-practice-paper.md` and `notes/mock-2-answer-key.md`; printable equivalents: `notes/mock-2-printable-practice-paper.html` and `notes/mock-2-printable-answer-key.html`. Keep the key closed until the first attempt is complete. Download letters refer to the fixed mixed-domain paper, not shuffled website letters. Only one active attempt and one latest detailed result are stored across all practice; starting a replacement asks for confirmation.

## Mock 3

Mock 3 opens at `index.html#mock/m3` (live: https://itzfaisal.github.io/SDAIA-AI/#mock/m3). Use its 150 independently authored reserved cases after repairing concepts from earlier practice. It covers all 42 lessons without reusing the other mocks, quizzes, or domain papers. The proposed allocation, suggested 180-minute limit, one-point scoring, modes, and interpretation boundaries above also apply. First attempts use unfamiliar cases; retakes do not. Fit it around revision and rest rather than treating completion of all three mocks as a readiness guarantee.

Separate downloads: `notes/mock-3-practice-paper.md` and `notes/mock-3-answer-key.md`; printable equivalents: `notes/mock-3-printable-practice-paper.html` and `notes/mock-3-printable-answer-key.html`. Keep the key closed until finished. Its letters match the fixed mixed-domain download order, not shuffled website letters. The same one-active-attempt and latest-detailed-result limits apply across all practice.

## Content maintenance

- `content/kit.js`: curriculum, schedule, lessons, glossary, and provenance.
- `content/questions.js`: original questions in separate quiz and exam pools.
- `content/mocks.js`: fresh reserved mock questions, with stable IDs and original answer indexes.
- `assets/app.js`: website and browser-only progress.
- `assets/core.js`: tested shuffling, grading, deadline, and saved-attempt validation.
- `docs/DESIGN.md`: visual design direction.

After editing content:

```sh
npm run build
npm test
```

The notes build uses the website's shared content, preventing manual divergence. The 56 generated documents are deliberately included so recipients do not need Node.js. Study progress is saved only under `ai-engineer-study-kit-v1`; reset does not clear other sites' storage. Existing Domain 1–7 and Mocks 1–2 IDs, saved attempts, and download URLs remain valid. A timed attempt uses an absolute deadline; reloads do not restart the timer. If the page is closed, expiry is processed when it is reopened. Only the latest attempt has detailed results, with the latest 30 score summaries retained.

## Source and assessment boundaries

The local `AI Engineer Badge.png` supplied by the learner gives domain names and weights. The public [Athka X page](https://athkax.sdaia.gov.sa/badges/61af22d9-2e3e-4412-9675-e8b4504a7d20), read on 11 October 2026, describes in-person assessment and performance-based Assistant/Associate/Expert awards, considering overall score and thresholds at question levels. Numerical cutoffs, question count, duration, and detailed official objectives were not verified. Our practice difficulty labels are not those official levels.

General learning references are documented in `notes/sources-and-exam-facts.md`. Lessons and questions are original instructional material, not actual exam questions. The badge image is kept as supplied evidence, not used as the site's branding. This kit is not affiliated with or endorsed by SDAIA. Follow your appointment's official instructions.

Domain 7 uses reviewed GOV.UK service-design and ACM professional guidance as general learning references, not Saudi law or a required organization chart. Its simple financial calculations use stated undiscounted training conventions and separate capacity value from cash savings. Targets, forecasts, pilot rules, and role examples do not replace qualified financial, legal, or governance review.

Domain 6 separates the reviewed SDAIA May 2025 ethics framework (SDAIA-P114E, version 1), English instructional summaries of official Arabic PDPL texts reviewed on 12 October 2026, and general NIST/OWASP guidance. The ethics comparison and page references are in `docs/domain-6-ethics-review.md`. Optional ethics registration and entity/product motivational badges are distinct from statutory duties and AI Engineer exam awards. The summaries are not authoritative translations, exhaustive legal advice, or project-specific compliance decisions. No adequacy-country list or complete transfer amendment history was verified; recheck current official instruments, applicable sector rules, and qualified advice before real processing or transfers. Conditional authority breach notification, separate subject notification, and operational recovery targets must not be conflated.
