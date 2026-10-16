# SDAIA AI Engineer Badge

Independent English, concept-focused preparation to help learners prepare to pass the **SDAIA AI Engineer Badge exam**.

## Open it

Live site: **https://itzfaisal.github.io/SDAIA-AI/**

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

Open `index.html` directly in a browser. The kit has no package dependencies, accounts, API keys, remote fonts, or backend. Files are already generated in `notes/`.

For a more predictable local origin and saved progress, with Node.js 20+:

```sh
npm start
```

Then visit **http://127.0.0.1:4173**. The development server binds only to the local machine. If the port is busy, set `PORT=4174 npm start`.

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
