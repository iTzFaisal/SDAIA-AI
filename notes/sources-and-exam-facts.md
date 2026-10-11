# Sources & exam facts

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

## Confirmed or supplied information

- Your supplied SDAIA image lists seven domains with weights totaling 100%.
- The official Athka X page describes an in-person examination at an approved testing center.
- Assistant, Associate, or Expert is awarded according to examination performance, considering the overall score and thresholds at each question level.
- Question count, examination duration, numerical score thresholds, and a detailed objective-by-objective syllabus were not verified in the public sources reviewed.
- Your 5 December 2026 booking is user-confirmed. The public listing displayed Ended on 11 October; it does not override your booking.

## References

- **User-supplied SDAIA AI Engineer Badge image** (Domain names and weights): ../AI%20Engineer%20Badge.png
  Supplied locally by the learner; not independently retrieved from SDAIA.
- **Athka X — AI Engineer Badge** (Official assessment methodology): https://athkax.sdaia.gov.sa/badges/61af22d9-2e3e-4412-9675-e8b4504a7d20
  Read in the rendered public page on 11 October 2026.
- **Google ML Crash Course — Dividing the original dataset** (Learning reference): https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets
  Training, validation, testing, representative samples, and duplicate leakage.
- **Google ML Crash Course — Accuracy, recall, precision, and related metrics** (Learning reference): https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
  Metric definitions, class imbalance, and error-cost tradeoffs.
- **Google ML Crash Course — ROC and AUC** (Learning reference): https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc
  Ranking across thresholds and precision-recall curves.
- **Google ML Crash Course — Regression loss** (Learning reference): https://developers.google.com/machine-learning/crash-course/linear-regression/loss
  MAE, MSE, RMSE, and sensitivity to large errors.
- **Google Machine Learning glossary** (Further reading): https://developers.google.com/machine-learning/glossary
  A supplementary glossary, not an official SDAIA syllabus.
- **UC Berkeley CS 188 — Uninformed search** (Learning reference): https://inst.eecs.berkeley.edu/~cs188/textbook/search/uninformed.html
  Reviewed 12 October 2026: search strategies and the distinction between fewest steps and lowest cost.
- **Google ML Crash Course — Nodes and hidden layers** (Learning reference): https://developers.google.com/machine-learning/crash-course/neural-networks/nodes-hidden-layers
  Reviewed 12 October 2026: weights, biases, hidden layers, and why linear layers alone remain linear.
- **Google ML Crash Course — Training using backpropagation** (Learning reference): https://developers.google.com/machine-learning/crash-course/neural-networks/backpropagation
  Reviewed 12 October 2026: gradients, training failures, and dropout.
- **Google ML Crash Course — Obtaining embeddings** (Learning reference): https://developers.google.com/machine-learning/crash-course/embeddings/obtaining-embeddings
  Reviewed 12 October 2026: learned vector representations and static versus contextual embeddings.
- **Google ML Crash Course — What's a large language model?** (Learning reference): https://developers.google.com/machine-learning/crash-course/llm/transformers
  Reviewed 12 October 2026: tokens, self-attention, encoder/decoder families, and generation limitations.
- **Google ML Crash Course — Fine-tuning, distillation, and prompt engineering** (Learning reference): https://developers.google.com/machine-learning/crash-course/llm/tuning
  Reviewed 12 October 2026: prompt examples do not update weights; fine-tuning and parameter-efficient adaptation do.
- **Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks** (Research reference): https://arxiv.org/abs/2005.11401
  Abstract reviewed 12 October 2026. Foundational 2020 RAG research; our lessons describe a general retrieval-and-generation workflow, not a replication of this paper.
- **NIST AI RMF — Generative AI Profile (600-1)** (Further reading): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
  Publication page reviewed 12 October 2026. Voluntary cross-sector risk-management guidance, not Saudi law or an official SDAIA syllabus.
- **MDN — HTTP response status codes** (Learning reference): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
  Reviewed 12 October 2026: success, accepted-but-incomplete work, authentication, authorization, rate limits, and server errors. Protocol success does not establish AI answer correctness.
- **JSON Schema — Object reference** (Learning reference): https://json-schema.org/understanding-json-schema/reference/object
  Reviewed 12 October 2026: property types, required fields, additional properties, and null versus missing. Lessons teach contracts conceptually, not schema implementation.
- **Amazon Builders' Library — Timeouts, retries, and backoff with jitter** (Learning reference): https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
  Reviewed 12 October 2026: ambiguous timeout outcomes, idempotency, bounded retries, backoff, jitter, and retry amplification. General engineering guidance, not a requirement to use AWS.
- **Software Engineering at Google — Testing Overview** (Learning reference): https://abseil.io/resources/swe-book/html/ch11.html
  Reviewed 12 October 2026: test scope versus size, controlled environments, failure tests, test doubles, and coverage limitations. Our lessons do not prescribe a universal test-count ratio.
- **OWASP LLM Top 10 — LLM06:2025 Excessive Agency** (Learning reference): https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  Reviewed 12 October 2026: narrow tools, least privilege, user-context authorization, and approval for high-impact actions. Security guidance, not Saudi law or official exam objectives.
- **Google Engineering Practices — What to look for in a code review** (Learning reference): https://google.github.io/eng-practices/review/reviewer/looking-for.html
  Reviewed 12 October 2026: design, functionality, complexity, useful tests, naming, comments, and documentation. Applied here as no-coding design-review concepts.
- **Google — Rules of Machine Learning** (Learning reference): https://developers.google.com/machine-learning/guides/rules-of-ml
  Reviewed 12 October 2026: pipeline integrity, freshness, release checks, silent failures, training-serving skew, and feedback loops. General engineering guidance, not official SDAIA objectives.
- **Google ML Crash Course — Monitoring pipelines** (Learning reference): https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring
  Reviewed 12 October 2026: raw and transformed data checks, slices, skew, model age, real-world outcomes, and quality checks when labels are unavailable. Example checks must be adapted to the actual task.
- **Google SRE — Release Engineering** (Learning reference): https://sre.google/sre-book/release-engineering/
  Reviewed 12 October 2026: repeatable artifacts, versioned configuration, approval, staged rollout, and release records. Our model-registry examples apply these concepts without prescribing Google's tools.
- **Google SRE Workbook — Canarying Releases** (Learning reference): https://sre.google/workbook/canarying-releases/
  Reviewed 12 October 2026: partial rollouts, comparison by version, representative exposure, shared dependencies, blue-green deployment, and traffic teeing. No universal traffic percentage or duration is prescribed here.
- **Google SRE — Service Level Objectives** (Learning reference): https://sre.google/sre-book/service-level-objectives/
  Reviewed 12 October 2026: indicators, objectives, agreements, measurement windows, latency distributions, and error budgets. All numerical targets in our lessons are illustrative product choices.
- **Google SRE — Monitoring Distributed Systems** (Learning reference): https://sre.google/sre-book/monitoring-distributed-systems/
  Reviewed 12 October 2026: latency, traffic, errors, saturation, user-visible symptoms, and actionable alerts. AI quality requires additional task-specific evidence.
- **Google SRE — Managing Incidents** (Learning reference): https://sre.google/sre-book/managing-incidents/
  Reviewed 12 October 2026: coordinated roles, mitigation, live incident records, communication, evidence preservation, and explicit handoffs. Operational guidance, not Saudi incident-reporting law.
- **IBM Think — What is object storage?** (Learning reference): https://www.ibm.com/think/topics/object-storage
  Reviewed 12 October 2026: object, file, and block storage concepts. Vendor educational material; no product recommendation, unlimited-capacity promise, or implementation tutorial is adopted.
- **Google ML glossary — Accelerator chip and parallelism** (Learning reference): https://developers.google.com/machine-learning/glossary#accelerator-chip
  Reviewed 12 October 2026: accelerators, data/model parallelism, and quantization. Hardware fit and speedups require measurement on the actual workload.
- **Jacob et al. — Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference** (Research reference): https://arxiv.org/abs/1712.05877
  Abstract reviewed 12 October 2026. Foundational 2017 integer-inference research, not a guarantee of identical quality or universal speedup for modern models.
- **Hinton, Vinyals & Dean — Distilling the Knowledge in a Neural Network** (Research reference): https://arxiv.org/abs/1503.02531
  Abstract reviewed 12 October 2026. Foundational 2015 teacher/student compression research; students need independent task evaluation.
- **Google SRE — Handling Overload** (Learning reference): https://sre.google/sre-book/handling-overload/
  Reviewed 12 October 2026: varying request cost, quotas, resource saturation, graceful rejection, and bounded retry load. Google's example limits are not universal defaults.
- **Google SRE — Load Balancing in the Datacenter** (Learning reference): https://sre.google/sre-book/load-balancing-datacenter/
  Reviewed 12 October 2026: readiness, draining, uneven request cost, routing, and the danger of fast-failing replicas. Concept-only application, not Google's implementation.
- **Google SRE — Data Integrity** (Learning reference): https://sre.google/sre-book/data-integrity/
  Reviewed 12 October 2026: replication is not recoverability, coordinated state, tested restores, and current deletion/access requirements. Reference examples do not establish Saudi retention law.
- **IBM Think — What is cloud computing?** (Learning reference): https://www.ibm.com/think/topics/cloud-computing
  Reviewed 12 October 2026: public/private/hybrid cloud, service models, and shared responsibilities. Vendor educational material, not provider-specific setup or a claim that cloud capacity is unlimited.
- **IBM Think — What is disaster recovery?** (Learning reference): https://www.ibm.com/think/topics/disaster-recovery
  Reviewed 12 October 2026: dependency mapping, recovery time/point objectives, failover, readiness, and exercises. Objectives are business choices; this reference is not Saudi law or an official exam specification.
- **SDAIA — AI Ethics Principles (September 2023)** (Official ethics framework): https://dgp.sdaia.gov.sa/wps/wcm/connect/4c56ed1c-1b82-447d-ac29-638f5f99c12e/ai-principles-EN.pdf?MOD=AJPERES
  English PDF reviewed 12 October 2026: seven principles, lifecycle controls, risk categories, and adopting-entity roles. This published framework is not the PDPL, an exam syllabus, or proof of a project's legal compliance; check applicable current sector requirements.
- **SDAIA Data Governance Platform — Personal Data Protection Law** (Official Saudi legal text): https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL
  Arabic official text reviewed 12 October 2026. Lessons provide English instructional summaries of Articles 1–14, 17–22, 29–31, not an authoritative translation or legal advice. Scope, exceptions, and additional applicable rules need qualified review.
- **SDAIA — PDPL Implementing Regulation** (Official Saudi legal text): https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2
  Arabic official text reviewed 12 October 2026: Articles 1, 3, 8–12, 16–19, 23–25, 32–33. Includes conditional 72-hour authority notification, separate subject notification without undue delay, impact assessments, and processing-activity records. Do not generalize one timeframe to all incidents or all retained data.
- **SDAIA — Regulation on Personal Data Transfer Outside the Kingdom** (Official Saudi transfer reference): https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/RegulationonPersonalDataTransferOutsidetheKingdom
  Official portal text reviewed 12 October 2026 for conditional transfer protections and onward-transfer context. No country adequacy list, comprehensive amendment history, or project-specific transfer route was verified. Recheck current instruments and sector rules before a real transfer.
- **NIST — AI Risk Management Framework and Playbook** (Learning reference): https://airc.nist.gov/airmf-resources/playbook/
  Reviewed 12 October 2026: Govern, Map, Measure, Manage; voluntary adaptable guidance, not a mandatory checklist or Saudi law. The site states RMF 1.0 is being updated; lessons describe its published four-function structure.
- **OWASP — LLM01:2025 Prompt Injection** (Security learning reference): https://genai.owasp.org/llmrisk/llm01-prompt-injection/
  Reviewed 12 October 2026: direct/indirect injection and layered impact reduction. Prompts, filters, RAG, and fine-tuning do not guarantee prevention; enforce permissions outside model text.
- **OWASP — LLM03:2025 Supply Chain** (Security learning reference): https://genai.owasp.org/llmrisk/llm032025-supply-chain/
  Reviewed 12 October 2026: supplier provenance, model/dependency inventories, licensing, integrity checks, and task-specific evaluation. Hashes and popularity are not safety certificates.
- **OWASP — LLM04:2025 Data and Model Poisoning** (Security learning reference): https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/
  Reviewed 12 October 2026: data manipulation, backdoors, lineage, controlled ingestion, and adversarial testing. No universal robustness or guaranteed detection claim is adopted.
- **OWASP — LLM05:2025 Improper Output Handling** (Security learning reference): https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/
  Reviewed 12 October 2026: untrusted generated output, context-appropriate handling, and downstream validation. These are defensive concepts, not programming exercises or Saudi legal requirements.

## Interpretation boundaries

The domain weights come from a learner-supplied image. Assessment methodology was read from the rendered official Athka X public page on 11 October 2026; the Domain 2–6 references were reviewed on 12 October. Google ML and SRE, Berkeley, MDN, JSON Schema, Amazon, IBM educational material, research, OWASP, and NIST references support general learning and are not SDAIA exam objectives. NIST and OWASP guidance are not Saudi law; operational incident and recovery guidance do not establish Saudi reporting, retention, or data-transfer requirements. Domain 6 separately summarizes the published SDAIA September 2023 ethics framework and official Arabic PDPL texts in English for learning, not as authoritative translations, exhaustive legal advice, or compliance guarantees. Conditional authority notification within 72 hours from controller awareness is distinct from affected-subject notification without undue delay and other applicable duties. Processing-activity record retention is not universal raw-prompt retention. No adequacy-country list, comprehensive transfer amendment history, or project-specific transfer route was verified; consult current official instruments, applicable sector rules, and qualified owners before real processing or transfer decisions. The published ethics framework does not replace law. No cloud vendor or software library is required for these concept-only lessons. Vendor references do not establish unlimited capacity, universal savings, or a placement choice's legal compliance. Research references support concepts, not guaranteed compression quality or speedups. The lessons and practice questions are original explanations and scenarios, not copied exam questions. The detailed topics, difficulty labels, reliability and recovery targets, fairness/security test examples, performance/cost examples, suggested practice timing, and mock blueprint are our design choices. No numerical passing threshold or badge-level cutoff is invented.
