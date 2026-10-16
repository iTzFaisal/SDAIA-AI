# Domain 4 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12.

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes cover our proposed domain curriculum, not every possible official expert-level objective.

## Before you begin

Read the foundation primer and Domains 1–3, especially protected evaluation, RAG, contracts, deadlines, safe tools, and compatibility. No programming background is required.

## Lesson 1: Track experiments & version the whole system

**Learning objectives**

- Distinguish experiment runs, artifacts, registries, and release identities.
- Identify the versions required to reproduce an ML or LLM decision.
- Explain lineage and the limits of reproducibility without coding.

### Operations begin before deployment

MLOps brings development and operations together across data preparation, training, evaluation, deployment, and monitoring. LLMOps applies related practices to language-model applications, where prompts, retrieval, tools, and remote providers can change behavior even without new training. Neither term means buying one platform or automatically retraining every day. The aim is a system whose changes are identifiable, justified, observable, and recoverable.

Domain 1 protected the evaluation boundary; Domain 3 recorded integration versions. Now connect that evidence to each production release. If a parcel estimate becomes worse, the team must know which model, feature preparation, and configuration served it. A notebook saying 'the good model' is not enough. Owners must be able to follow a prediction back to its release and follow that release back to its evaluation.

### An experiment is a recorded comparison

An experiment run is one execution with identified inputs and settings. Record the data snapshot or reconstructible reference, split rules, preparation version, training settings, environment, seed where relevant, metrics with counts and slices, and produced artifacts. An artifact is a saved output, such as trained weights, a fitted scaler, or an evaluation report. Keep failed runs too when they explain why a choice was rejected.

Compare runs on the same appropriate evaluation basis. A higher score on an easier dataset is not evidence of a better model. Track latency, cost, and critical errors alongside aggregate quality. A seed helps control some randomness, but does not promise identical results across hardware, software changes, or remote services. Reproducibility means preserving the process and evidence, while stating where exact repetition is not guaranteed.

### Version more than model weights

A conventional ML release includes application code, fitted preprocessing, feature definitions, model artifact, decision threshold, schema, and environment. A scaler trained for one model should not quietly be paired with another. Data lineage records where examples came from, which transformations occurred, and which artifacts depended on them. Store immutable identifiers or content digests where appropriate rather than overwriting a file named latest.

An LLM release also identifies the provider/model revision when available, prompt template, generation settings, retrieval corpus snapshot, chunking and embedding versions, index, reranker, tool definitions, permission policy, and output checks. An index name alone does not establish which document versions it contains. Record evaluation-case and evaluator versions as well: a new judging rubric can change a score without improving any answer. Do not store credentials in release manifests or indiscriminately retain private prompts.

### A registry is a catalog, not a quality certificate

A model registry links uniquely identified artifacts to metadata such as owners, lineage, evaluation reports, approval, and lifecycle status. A candidate may be registered without being approved for production. A mutable alias such as production points to a version; record the resolved immutable version for a release or request so that changing the alias does not erase history.

A release manifest lists the compatible components selected together and the evidence supporting them. Retain the previously approved bundle under appropriate access and retention rules for recovery. An external provider may update an alias or retire an old model, so a local version record cannot guarantee remote availability. Document that dependency risk and an evaluated alternative instead of claiming that a registry freezes the world.

### Worked example: the same model gives different answers

A policy assistant still uses model M7, but prompt P4 replaces P3 and index I9 contains a newly effective policy. Its behavior has changed although the model weights have not. Release R12 should name M7, P4, I9, the compatible query embedding, tool policy, application revision, and evaluation report. R11 names the prior compatible bundle. A complaint can then be tied to the release actually used rather than guessed from the model name.

On paper, draw source policy → corpus snapshot → chunks/index → retrieved evidence → answer, with version labels at each stage. If I9 contains the wrong policy, do not assume that restoring only M7 fixes the answer: M7 was never changed. Inspect lineage, validate the correct effective source, and evaluate the repaired bundle. Preserve enough sanitized evidence to compare the old and new decisions without copying confidential documents into an unrestricted experiment log.

**Remember:** Track the complete evaluated release and its lineage, not just the model name or winning score.

### Common exam traps

- Registering an artifact does not approve it for production.
- A mutable latest alias is not a stable historical identity.
- A fixed seed and local manifest cannot freeze a remote provider.

### Explain without notes

- What can change an LLM answer when its weights stay the same?
- How does lineage help diagnose an incorrect retrieval source?

### Learning references

- Google SRE — Release Engineering: https://sre.google/sre-book/release-engineering/
- Google — Rules of Machine Learning: https://developers.google.com/machine-learning/guides/rules-of-ml
- Google ML Crash Course — Monitoring pipelines: https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring
- NIST AI RMF — Generative AI Profile (600-1): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

## Lesson 2: Build pipelines & enforce release gates

**Learning objectives**

- Describe training and release pipelines and distinguish CI, delivery, deployment, and retraining.
- Select data, quality, compatibility, and operational gates.
- Explain artifact promotion and safe handling of a failed pipeline stage.

### A pipeline makes dependencies explicit

A pipeline is an ordered set of stages with declared inputs, outputs, and failure behavior. A training pipeline may validate data, create a protected split, fit preparation, train, evaluate, and register a candidate. A release pipeline may package a compatible bundle, test it, obtain approval, deploy gradually, and verify it. Some stages can run independently, but evaluation cannot assess a model artifact that has not yet been produced.

Automation reduces repeated manual mistakes and provides records. It does not make bad data trustworthy or missing checks appear by magic. Identify who owns each stage and what stops progression. If validation fails, preserve the failure evidence and block the dependent stages rather than substituting unverified output and marking the run successful. A failed candidate need not interrupt the currently healthy production release.

### CI and CD answer different questions

Continuous integration (CI) means frequently combining changes with automated build and test feedback. Continuous delivery keeps tested releases ready for deployment, which may still require explicit human approval. Continuous deployment automatically releases changes that meet its gates. Organizations may use CD for either phrase, so state which is intended instead of relying on the abbreviation alone.

Continuous training or scheduled retraining creates new model candidates from updated data. It is not the same as deployment. New data can trigger a pipeline, but the candidate must still pass evaluation, compatibility, authorization, and operational gates. A prompt-only or index-only update also needs a release path even when no training occurs. The risk of the application, not fashion, determines which approvals are automated and which require review.

### Release gates should test the actual risk

Check data schema, missingness, ranges, freshness, label quality, and permission to use the data. Test preprocessing and serving consistency; use historical point-in-time information where needed rather than future values in training joins. Check artifact integrity, contract compatibility, output validation, safe tool behavior, and failure paths. Then compare task quality with the baseline using protected cases, critical slices, counts, and uncertainty.

Operational gates include loading the actual serving artifact, realistic response time and resource use, dependency failures, monitoring coverage, and a tested recovery plan. A container is a package containing an application and its runtime dependencies; it does not alone prove correctness or protect access. A model that exceeds a critical error limit must not pass merely because its average score rises. Predefine acceptance criteria; changing them after seeing a failing candidate makes the approval less defensible.

### Promote what was evaluated

Promote an identified tested artifact and its compatible configuration through staging to production. Rebuilding or retraining without verification can create a different candidate from the one approved. Staging is a controlled environment approximating production; it cannot cover all live behavior, which is why rollout observation is still needed. Use environment-specific secrets through protected configuration rather than embedding them in packages.

Record the gate outcomes, approver when required, release identity, deployment status, and recovery target. Changes to datasets, prompts, indexes, thresholds, and tool policies can all bypass safety if only application code goes through review. Test the release process itself: a missing metric, a failed gate, or an unavailable approval service should have deliberate behavior, not accidentally allow an unchecked release. A deadline for shipping is not evidence that an exception is safe.

### Worked example: a candidate passes the average but fails a slice

A message-routing candidate improves overall validation accuracy from 90% to 93%, but recall for urgent safety messages falls below the team's predeclared minimum. The gate blocks promotion and keeps the existing approved release serving. Inspect the urgent-message cases and representative counts, repair the candidate using development evidence, and rerun the gates. These numbers are illustrative product criteria, not SDAIA badge thresholds.

Suppose run T18 produced approved artifact A18, but someone retrains overnight and deploys A19 under the same friendly name. The approval no longer establishes A19's quality. Require A19's own evidence or deploy the exact compatible A18 bundle that passed. Sketch the stages and mark where data failure, slice failure, approval, and deployment verification stop progress. No pipeline configuration or programming exercise is required to understand this chain of responsibility.

**Remember:** Automate the process, enforce risk-based gates, and deploy the exact compatible candidate whose evidence was approved.

### Common exam traps

- Continuous delivery need not mean automatic production deployment.
- Retraining produces a candidate, not automatic release permission.
- A better overall score does not override a failed critical gate.

### Explain without notes

- Why should an index-only update still pass release checks?
- What should happen to production when a training data gate fails?

### Learning references

- Google SRE — Release Engineering: https://sre.google/sre-book/release-engineering/
- Google SRE Workbook — Canarying Releases: https://sre.google/workbook/canarying-releases/
- Google — Rules of Machine Learning: https://developers.google.com/machine-learning/guides/rules-of-ml
- Software Engineering at Google — Testing Overview: https://abseil.io/resources/swe-book/html/ch11.html

## Lesson 3: Choose serving & gradual rollout strategies

**Learning objectives**

- Choose batch or online inference based on decision time and freshness.
- Distinguish shadow, canary, blue-green, and A/B evaluation.
- Plan representative observation and compatible rollback before exposing users.

### Serve at the time the decision needs

Batch inference computes outputs for many examples on a schedule or as a job, often storing results for later use. A warehouse's next-day demand estimates may fit a nightly run. Check when inputs were observed, when results were generated, and whether the batch completes before the planning deadline. A fast lookup of an old prediction does not make that prediction fresh.

Online inference computes an output when a request arrives using the required currently available information. It fits an immediate parcel estimate, but depends on live services and a response budget. Online inference is not online learning: serving a request normally does not update the weights. A background job can run inference without an interactive caller, and a service may combine stored batch results with live checks. Choose from task constraints, not a belief that one pattern is always superior.

### Shadow observes without choosing the live action

In a shadow deployment, a candidate receives copied or replayed inputs while the established system supplies the user-visible decision. Compare outputs, errors, latency, and resource use without using candidate decisions for live actions. Shadow traffic still processes data: permissions, retention, provider access, cost, and shared-capacity effects must be considered.

Suppress consequential side effects in the shadow path. Copying a refund request must not create a second refund, and candidate tool calls should be simulated or blocked outside the model. Shadowing does not reveal how users would respond to the candidate's answer, because they did not see it. It also does not prove capacity under full independent load if infrastructure or caches differ. It is useful evidence with explicit limits, not a universal safety certificate.

### Canary exposes a limited live population

A canary routes a limited part of real traffic to a candidate and evaluates it before further rollout. It differs from shadowing because some users actually receive candidate outputs. Predefine stop conditions, owners, observation duration, and how traffic returns to an approved release. Check absolute safety requirements as well as differences from the control: a shared dependency failure can make both versions equally bad.

Measure by release and relevant slice; aggregate service metrics can hide a broken small canary. Choose enough representative exposure for load patterns, rare important inputs, and outcome delays. There is no universal 5% traffic rule or five-minute duration. A/B testing often aims to estimate a product effect with suitable assignment and statistical analysis; a canary primarily limits release risk. Similar traffic-splitting machinery does not make a short safety check proof of a long-term business gain.

### Blue-green supports a controlled switch

Blue-green deployment keeps two environments, one serving and one prepared with the candidate, then switches traffic. Keeping the previous environment available can make a return switch quick, but costs additional capacity. It can be combined with gradual traffic splitting. A full switch alone does not provide the limited exposure of a canary.

Rollback means restoring an approved earlier serving configuration. Test model, preprocessing, schema, prompt, embedding/index, and application compatibility together. Database migrations, changed document permissions, remote-model retirement, and actions already executed can make rollback incomplete or unsafe. Do not restore a revoked access policy or superseded authoritative rule simply because it is old. Plan how in-flight requests, jobs, cached results, and operation identities behave across the switch.

### Worked example: a small canary hides a large failure rate

Out of 10,000 requests, a candidate receives 500 and fails 50; the control receives 9,500 and has no failures. The candidate error rate is 50/500 = 10%, while the overall error rate is 50/10,000 = 0.5%. Looking only at the service average hides the candidate's problem. Pause expansion and use the tested recovery path under the predefined policy; verify user recovery afterward.

For a refund assistant, first shadow sanitized authorized inputs with payment execution blocked, then consider a carefully controlled live canary only after quality and permission gates pass. If the candidate has already submitted refunds, switching back prevents new candidate actions but does not undo those payments. Reconcile affected operations using authoritative records. On paper, label which outputs reach users and which side effects are possible in each deployment strategy.

**Remember:** Match serving to freshness and waiting constraints; limit rollout risk with per-version evidence and a tested compatible recovery path.

### Common exam traps

- Online inference does not automatically retrain a model.
- Shadow traffic is not harmless if it retains private data or executes tools.
- Switching back cannot erase side effects or guarantee state compatibility.

### Explain without notes

- Why can an overall healthy error rate conceal a failing canary?
- What does shadowing fail to measure about user behavior?

### Learning references

- Google SRE Workbook — Canarying Releases: https://sre.google/workbook/canarying-releases/
- Google SRE — Release Engineering: https://sre.google/sre-book/release-engineering/
- Google — Rules of Machine Learning: https://developers.google.com/machine-learning/guides/rules-of-ml
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Lesson 4: Monitor drift, delayed labels & retraining decisions

**Learning objectives**

- Distinguish input drift, concept drift, training-serving skew, and operational failures.
- Evaluate delayed outcomes without treating missing labels as negatives.
- Choose investigation, repair, or retraining from evidence rather than a single alarm.

### Healthy servers can serve poor predictions

Monitor several layers: request failures and latency, raw data quality and freshness, transformed features, prediction distributions, and task outcomes. A parcel-duration service may return 200 quickly while consistently underestimating a newly congested route. Conversely, an excellent model cannot compensate for a missing distance feed. Include important regions and message types rather than assuming one overall metric represents everyone.

Use an appropriate reference period and sample size for each signal. Compare weekday traffic with a suitable weekday reference when seasonality matters. Track missing values, new categories, units, stale tables, and preparation discrepancies before blaming model learning. Monitor the monitoring too: a flat graph may mean no requests, no measurements, or a broken collection path. Record missing evidence explicitly rather than showing an invented healthy value.

### Name the kind of change

Data or input drift is a change in the input distribution: a delivery service receives more long-distance trips than before. This can matter, but does not by itself prove prediction quality declined. Concept drift is a change in the relationship between inputs and the outcome: the same route and departure conditions now imply a longer journey because road access has changed. Stable input counts do not rule out concept drift.

Training-serving skew includes discrepancies between training and production input handling, such as training on kilometers while serving meters or using a different missing-value rule. Broader usage also includes changing input populations; identify the concrete discrepancy rather than arguing over labels. An unavailable feature service or an expired credential is an operational fault, not proof of a changed input-outcome relationship. A statistical drift alarm is a clue to investigate, not an automatic causal diagnosis.

### Delayed labels require mature cohorts

A fraud outcome may be confirmed weeks after a transaction. Today's absence of a confirmed fraud label is not evidence that the transaction is legitimate. Group predictions by event time, join later outcomes using stable permitted identities, and evaluate cohorts with an adequate observation window. Record the served release and threshold, not the current release, when calculating their performance.

Track label coverage, delay, and selection. If labels arrive only for alerted cases, measured precision cannot establish recall among all actual frauds; unreviewed cases may contain missed fraud. A corrected historical label changes the evidence, so retain the label definition and version used. Human review and outcome proxies can provide earlier clues, but clicks, complaints, or acceptance rates are not automatically ground truth for correctness. Report counts and limitations alongside rates.

### Investigate before retraining

When an alarm fires, first check data validity, units, feature preparation, missingness, source freshness, deployment changes, and label collection. Repair a broken feed rather than teach a new model to accept accidental zeros. If a genuine persistent relationship or population change harms the task, collect representative authorized data, design a suitable time-aware evaluation, and train a candidate. Scheduled retraining can be reasonable when justified by freshness needs, but every candidate still passes gates.

Watch feedback loops: a recommendation system influences what users see, and future click labels reflect that exposure. Training blindly on its own selected outcomes can reinforce earlier omissions. Plan representative review or controlled evidence collection where appropriate to the risk; do not randomly expose users to dangerous actions just to obtain labels. Retraining can worsen quality if labels are biased, delayed, or generated from unverified model outputs.

### Worked example: a shift and a broken unit conversion

The share of long trips rises from 20% to 40%. This is input drift, so inspect performance on current representative journeys and important slices. If errors remain acceptable, document and monitor rather than automatically replacing the model. If the same known route now takes longer for similar inputs, mature outcome evidence can support concept drift and a candidate retraining plan.

Separately, production starts sending 15,000 meters to a field trained on kilometers. Fix the contract and conversion; retraining on the corrupted feed would hide the integration defect. For 1,000 predictions made this week with only 200 mature outcomes, do not count the other 800 as correct or negative. Report coverage of 200/1,000 = 20%, label delay, and the observed quality of the eligible cohort. Keep model changes gated until adequate evidence supports them.

**Remember:** Drift is a signal, not a verdict: separate data faults and delayed evidence from a genuine need to retrain.

### Common exam traps

- Input drift does not necessarily mean performance declined.
- Unlabeled outcomes are not automatically negative or correct.
- Retraining cannot reliably repair a broken unit contract or biased feedback loop.

### Explain without notes

- How can concept drift occur while the input distribution looks stable?
- Why do labels only on alerted cases fail to establish recall?

### Learning references

- Google ML Crash Course — Monitoring pipelines: https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring
- Google — Rules of Machine Learning: https://developers.google.com/machine-learning/guides/rules-of-ml
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary
- Google ML Crash Course — Accuracy, recall, precision, and related metrics: https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall

## Lesson 5: Set reliability targets & observe LLM behavior

**Learning objectives**

- Distinguish SLIs, SLOs, SLAs, and request-based error budgets.
- Choose operational, quality, freshness, and cost signals for an LLM application.
- Use minimized traces and actionable alerts without assuming protocol success is correctness.

### Define what users need and what counts

A service level indicator (SLI) is a defined measurement, such as the fraction of eligible requests producing an acceptable response within a time limit. A service level objective (SLO) sets a target and window for that indicator. A service level agreement (SLA) is an agreement with consequences for missing its commitments. A team's internal target is not automatically a customer contract.

Specify the numerator, denominator, measurement point, exclusions, and time window. An availability objective based on HTTP responses alone can miss incorrect AI answers. Maintain separate operational and task-quality indicators when quality requires sampled or delayed review, and state the uncertainty. An authorized abstention may be correct behavior, but excluding every unanswered request could hide that the system has become useless. Measure coverage and unavailable outcomes too. Targets here are illustrative product decisions, not official exam timings or pass scores.

### Budgets connect reliability to change decisions

A request-based error budget is the allowed fraction of bad eligible requests under an SLO. A 99% success objective allows 1% bad requests in its stated window. Define how the team responds when the budget is being consumed too quickly or is exhausted, such as pausing risky rollouts and prioritizing recovery. The budget is not permission to violate safety, privacy, or authorization requirements.

Latency percentiles describe the distribution rather than just the average. A p95 of two seconds means roughly 95% of measured requests finish within that value under the chosen calculation; it says nothing by itself about the slowest 5% or answer quality. Monitor latency, traffic, errors, and saturation, including failed requests and dependency time. For batch work, completion before the business deadline and result freshness may be more relevant than interactive latency.

### LLMOps needs component and answer evidence

Track invalid outputs, refusals, unsupported claims, answer coverage, citation support, important slices, tool rejection or failure, and human escalations under a defined evaluation rubric. Repeat representative checks after prompt, model, corpus, index, reranker, or tool-policy changes. If using a model judge, record its version and rubric, compare it with suitable human ratings, and investigate disagreement. A judge can share biases or be fooled; its score is evidence, not an infallible oracle.

Check the freshness and effective dates of retrieved policies, deletion and access-rule propagation, compatible query/document embeddings, retrieval relevance, and whether the answer uses the evidence correctly. A retrieval service can return quickly while supplying obsolete content. For streamed answers distinguish time to first token from time to a complete validated response. Prompt expansion, repeated tool loops, and retries can raise cost per request even when the request count is unchanged.

### Trace stages without recording everything

Metrics summarize behavior, logs record selected events, and a trace links stages of one request through retrieval, model calls, validation, and tools. Record release IDs, sanitized source references, durations, outcomes, and token or cost accounting where available. A trace can reveal whether delay comes from retrieval, generation, or repeated attempts. It does not automatically establish that a claim is true or an action authorized.

Minimize retained content, redact secrets and sensitive fields, restrict access, and apply retention rules. Full prompts and tool replies may contain private records and malicious instructions, so routine raw logging is not harmless. An alert should name the symptom, relevant release, responsible owner, and useful next action. Urgent current or imminent user impact may justify paging; a nonurgent drift trend may justify a review ticket. Repeated noisy pages without action train people to ignore real failures.

### Worked example: calculate a budget and inspect hidden quality

Over a defined window there are 20,000 eligible requests. An illustrative operational SLO is 99% good responses, allowing 20,000 × 0.01 = 200 bad requests. If 120 are bad so far, 80 remain in this simplified fixed-count calculation. Real request totals can grow during a window; state the counting basis. This budget does not allow 200 disclosures of another user's data. Safety rules remain independent constraints.

A policy assistant meets the operational SLO, but reviewed answers increasingly cite a superseded policy. Inspect traces for corpus/index version and source effective date, stop unsafe guidance, and assess current-source quality before resuming. Record answer-rate and rubric-pass denominators separately. For 100 requests, 80 answered and 60 rubric-passing answers means 80% answer coverage and 75% pass rate among answers, not 75% success across all requests. The combined evidence is more informative than a single green availability graph.

**Remember:** Define indicators and targets precisely; monitor LLM evidence, coverage, freshness, and cost alongside service health.

### Common exam traps

- An SLO is not automatically an SLA, and an error budget is not a safety allowance.
- A quick first token is not a completed validated answer.
- Raw prompt logs and model-judge scores are not automatically safe or trustworthy.

### Explain without notes

- Which denominator would you use for answer coverage versus correctness among answers?
- What trace metadata helps separate stale retrieval from slow generation?

### Learning references

- Google SRE — Service Level Objectives: https://sre.google/sre-book/service-level-objectives/
- Google SRE — Monitoring Distributed Systems: https://sre.google/sre-book/monitoring-distributed-systems/
- Google ML Crash Course — Monitoring pipelines: https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring
- NIST AI RMF — Generative AI Profile (600-1): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Lesson 6: Recover safely: fallbacks, rollback & incidents

**Learning objectives**

- Choose honest fallbacks and explain circuit breakers and kill switches.
- Coordinate mitigation, recovery verification, and unknown-action reconciliation.
- Create an incident record and learning-focused follow-up with owners.

### Degraded service should remain honest

A fallback is a deliberate alternative when the normal path cannot meet requirements: an approved simpler model, a suitably fresh authorized cached result, a manual route, or an unavailable response. Evaluate its quality, scope, freshness, capacity, and permissions before an incident. A backup provider may use different contracts or produce weaker task answers; switching providers without prior evidence is not guaranteed recovery.

Fail closed when a required authorization or consequential-action check cannot be established. A system may still offer a read-only manual path, but should not silently relax access or invent facts to keep its availability graph green. Manual review has finite capacity; a sudden transfer of every request can overload reviewers. Label degraded behavior and unavailable outcomes so users understand what the system can actually do.

### Stop repeatedly exercising a failing path

A circuit breaker temporarily stops eligible calls to a dependency after a defined failure pattern, allowing an approved fallback or failure response instead. Limited probes can check whether the dependency has recovered before wider traffic resumes. It differs from a timeout, which limits one wait, and from bounded retries, which repeat an operation within safe limits. The breaker state and recovery criteria need monitoring and testing.

A kill switch disables a risky capability, such as payment execution or generated policy advice, without requiring the entire system to remain active. Enforce it in the application or service, not just as a sentence in the prompt. Neither a circuit breaker nor a kill switch cancels completed effects. Avoid uncontrolled retry storms and use Domain 3's deadlines, idempotency, and reconciliation rules where outcomes are unknown.

### Mitigate before completing the causal explanation

An incident is an event requiring coordinated response because of actual or imminent harm or serious disruption. Define escalation conditions before launch. Assign a response lead, controlled operational work, and communication responsibilities appropriate to team size. Keep a live record of symptoms, affected scope, release and data versions, timestamps, hypotheses, actions taken, and observed results. Avoid several people making uncoordinated changes that obscure cause and effect.

Prioritize stopping harm and restoring a safe level of service while preserving necessary evidence. Use a tested rollback if the prior compatible release remains safe; otherwise disable the affected function or use an approved repair. Do not wait for certainty about the root cause before containing ongoing harm. Report confirmed impact and uncertainty, a next update time, and current user guidance rather than inventing a restoration estimate. Involve security, privacy, or legal owners when warranted; these lessons do not establish Saudi reporting requirements.

### Verify recovery and learn from the system

After mitigation, check user-visible behavior, task quality, critical slices, permission enforcement, error rates, and remaining queued or in-flight work. A successful deployment command is not evidence that users recovered. Reconcile uncertain external operations and assess data repair or customer follow-up through authorized paths. Rollback restores serving behavior; it is not a refund reversal, deletion undo, or proof that no disclosure occurred.

A post-incident review explains the timeline, impact, contributing conditions, detection gaps, what helped, and corrective actions without reducing the explanation to blaming one person. Give actions owners, priorities, and verification criteria. Update tests, gates, alerts, source-freshness checks, and runbooks, then practice recovery in a safe environment. An explicit handoff names the next owner and outstanding risks. A document filed away without follow-through does not reduce recurrence.

### Worked example: retrieval is healthy but advice is unsafe

At 10:05, reviewers discover that a new index serves an expired refund policy. The API has no errors. Declare the incident under the team's quality-risk criteria, stop generated refund advice and consequential actions through an enforced switch, and offer the approved manual route. Record affected release/index versions and sanitized source references. Do not restore an old bundle blindly if it includes obsolete permissions or another invalid policy.

After validating a compatible current-policy index, deploy through the emergency process and verify retrieval and answer quality on critical cases. For refunds already submitted, obtain authoritative operation status and reconcile; do not repeat or reverse transactions merely because the assistant's advice was wrong. Communicate known impact and unresolved cases. In the review, add an effective-date gate, a freshness alert, and a rehearsed recovery path with named owners. On paper, distinguish containment, service recovery, operation reconciliation, and prevention.

**Remember:** Contain harm, use evaluated recovery paths, verify user outcomes, and reconcile past actions before declaring an incident resolved.

### Common exam traps

- An untested backup provider is not automatically a safe fallback.
- Rollback and kill switches do not undo completed actions.
- A green deploy command or a blamed individual is not proof of recovery or prevention.

### Explain without notes

- When might unavailable be safer than a stale cached answer?
- What must be verified after rollback beyond the server's health check?

### Learning references

- Google SRE — Managing Incidents: https://sre.google/sre-book/managing-incidents/
- Google SRE Workbook — Canarying Releases: https://sre.google/workbook/canarying-releases/
- Google SRE — Monitoring Distributed Systems: https://sre.google/sre-book/monitoring-distributed-systems/
- Amazon Builders' Library — Timeouts, retries, and backoff with jitter: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Domain 4 revision sheet

- **Lifecycle:** MLOps/LLMOps connect versioned development, evaluation, release, monitoring, ownership, and recovery.
- **Evidence:** Record run inputs, splits, preparation, settings, environment, counts, slices, and artifacts. Seeds have limits.
- **Release identity:** Name compatible application, model, preprocessing, threshold, prompt, corpus/index, tools, policy, and evaluator versions.
- **Registry:** Registration catalogs artifacts; approval requires evidence. Resolve mutable aliases to stable identities.
- **Pipelines:** Validate → prepare/train → evaluate → register candidate → test/approve → deploy → verify. Failed gates block promotion.
- **Automation:** CI integrates and checks. Delivery keeps ready. Deployment releases automatically after gates. Training creates candidates.
- **Serving:** Batch suits scheduled results with freshness/deadline checks; online suits arriving requests. Inference is not weight updating.
- **Rollout:** Shadow observes without live decisions; canary limits live exposure; blue-green switches prepared environments.
- **Canary evidence:** Compare by release and slice with representative exposure and absolute limits; shared faults can affect both versions.
- **Drift:** Input distribution change is not proven harm. Concept drift changes the input-outcome relationship; skew may be a preparation fault.
- **Labels:** Use mature event-time cohorts, served versions, label coverage/delay, and selection limits. Missing labels are not negatives.
- **Retraining:** Repair broken feeds first. Collect representative authorized outcomes; evaluate and gate a new candidate.
- **Reliability:** SLI = measurement; SLO = target/window; SLA = agreement with consequences. Request budget = eligible count × allowed bad fraction.
- **LLM monitoring:** Observe retrieval freshness, evidence support, output validity, coverage, quality slices, tool outcomes, token cost, and complete-response time.
- **Observability:** Minimize traces and logs, protect access and retention, and send actionable alerts to owners.
- **Recovery:** Use tested fallbacks, breakers, switches, and compatible rollback. Preserve permissions and reconcile unknown or completed actions.
- **Incidents:** Coordinate containment, evidence, communication, verified recovery, and owned corrective actions; rollback is not undo.

## Glossary

- **AI:** Artificial intelligence: the broad field of systems performing tasks associated with intelligence.
- **ML:** Machine learning: fitting patterns or decision functions from examples.
- **Feature:** An input used by a model; it must be appropriate and available at prediction time.
- **Label:** The known outcome used as the target in supervised learning.
- **Inference:** Using a trained model to produce an output for an input.
- **Classification:** Predicting a category or class.
- **Regression:** Predicting a numerical quantity.
- **Clustering:** Grouping examples by similarity without predefined target labels.
- **Imputation:** Filling missing values using a defined rule.
- **One-hot encoding:** Representing categories with separate indicator features.
- **Standardization:** Commonly subtracting a training mean and dividing by a training standard deviation.
- **Leakage:** Information crossing a boundary that makes evaluation unrealistically favorable.
- **Cross-validation:** Repeated development-data splits to assess candidate choices; not a substitute for a protected final assessment.
- **Baseline:** A simple or current approach used as a performance reference.
- **Parameter:** A value learned during model fitting.
- **Hyperparameter:** A configuration choice such as tree depth or learning rate.
- **Loss:** A measure of undesirable predictions used during fitting.
- **Regularization:** Penalizing or restricting complexity to help generalization.
- **Overfitting:** Learning training-specific patterns that do not generalize well.
- **Underfitting:** Failing to capture useful structure even in training data.
- **TP / FP / FN / TN:** True positive / false positive / false negative / true negative, relative to the designated positive class.
- **Precision:** TP divided by TP + FP; the proportion of alerts that are genuine positives.
- **Recall:** TP divided by TP + FN; the proportion of actual positives detected.
- **F1:** The harmonic mean of precision and recall.
- **MAE / MSE / RMSE:** Mean absolute error / mean squared error / root mean squared error.
- **ROC-AUC:** Area under the receiver operating characteristic curve: a ranking-discrimination measure across thresholds.
- **Calibration:** Agreement between predicted probabilities and observed outcome frequencies.
- **Slice:** A meaningful subset of evaluation examples, such as a region or device category.
- **MLOps / LLMOps:** Lifecycle practices for operating ML systems / language-model applications, including versioning, evaluation, release, monitoring, and recovery.
- **RAG:** Retrieval-augmented generation: supplying retrieved evidence to support an answer; does not guarantee correctness.
- **Heuristic:** An estimate used to guide search; a useful estimate does not automatically satisfy optimality conditions.
- **Policy (reinforcement learning):** A rule for selecting actions from observations or states; distinct from an organizational policy document.
- **Neural network:** A learned network of numerical transformations, often organized into layers with nonlinear activations.
- **Activation:** A function applied to a neuron's weighted sum; nonlinear activations enable nonlinear representations.
- **ReLU:** Rectified linear unit: max(0, z).
- **Softmax:** A transformation of scores into nonnegative values summing to one; calibration is not guaranteed.
- **Backpropagation:** Computing loss gradients backward through a network; the optimizer uses them to update parameters.
- **Batch / epoch:** A group of training examples for a step / one pass through the training dataset.
- **Dropout:** Training-time random suppression of activations used as regularization.
- **CNN / RNN:** Convolutional neural network using shared local filters / recurrent neural network updating a state across a sequence.
- **Transfer learning:** Reusing representations or parameters learned on another dataset or task.
- **Transformer:** A neural architecture using attention and other transformations, with position information for sequences.
- **Self-attention:** Combining information from allowed positions within a sequence using learned relevance weights.
- **Causal mask:** A restriction preventing next-token prediction from using future tokens.
- **Token:** A processing unit such as a word, subword, character, or punctuation; not necessarily a full word.
- **Embedding:** A numerical vector representing an item in a learned space; proximity is a similarity signal, not truth.
- **Context window:** The tokenized information a model can consider within its limits; not unlimited persistent memory.
- **Temperature / top-p:** Sampling controls affecting distribution concentration / the candidate set's cumulative probability mass.
- **Diffusion / GAN:** Generation by learned iterative denoising / a generator trained against a discriminator.
- **Few-shot prompting:** Supplying a few demonstrations in the prompt without updating model weights.
- **Fine-tuning:** Additional training that adapts learned parameters to selected task examples.
- **Grounding / faithfulness:** Connecting claims to evidence / agreement with the supplied evidence; evidence itself can be outdated or wrong.
- **Hallucination:** Generated content that is invented or unsupported, despite possibly sounding confident.
- **Agent:** A system selecting actions toward a goal using observations and possibly tools; requires enforced permissions and limits.
- **Abstention:** Declining to answer or act when evidence or permission is insufficient.
- **PDPL:** Saudi Personal Data Protection Law; Domain 6 summarizes reviewed official texts for learning, not legal advice or a project compliance certificate.
- **API / endpoint:** An interface for software interactions / an address for a particular operation or resource.
- **HTTP / HTTPS:** A request-response protocol / HTTP protected in transit with TLS; neither certifies model correctness.
- **Schema / data contract:** Rules for data shape / the broader agreement including meaning, units, errors, and version expectations.
- **Authentication / authorization:** Establishing identity / deciding whether a specific action on a specific resource is permitted.
- **Asynchronous job:** Accepted work completed later, with a job identity and explicitly tracked status.
- **Webhook / polling:** A service-sent HTTP notification / repeated caller queries for current status.
- **At-least-once delivery:** A message-delivery guarantee that permits duplicates; it does not imply exactly one action.
- **Timeout / deadline:** A limit on one wait / an overall time boundary across steps, attempts, and delays.
- **Backoff / jitter:** Increasing retry delays / controlled randomness to spread retries and reduce synchronized bursts.
- **Idempotency:** Repeating an operation without additional unintended effects; service enforcement is necessary.
- **Correlation ID:** An identifier linking records of an interaction; not automatically a duplicate-action safeguard.
- **Test double:** A controlled dependency stand-in, such as a stub, mock, or fake; not proof of live-service behavior.
- **Contract / integration test:** A check of agreed interface assumptions / a check of interactions between components.
- **Adapter:** A boundary translating an application's interface to provider-specific requests, results, and errors.
- **Backward compatibility:** Preserving promised behavior for existing consumers; syntax alone is insufficient.
- **Lockfile:** A record of resolved package versions that helps reproduce dependencies, not remote-service behavior.
- **Refactoring:** Changing internal structure while aiming to preserve externally required behavior.
- **Decision record / runbook:** Context, choice, alternatives, and consequences / practical diagnosis and recovery instructions.
- **Artifact / lineage:** A saved output such as weights or an evaluation report / its origin and transformation history.
- **Model registry / release manifest:** An artifact catalog with metadata / the identified compatible components and evidence selected for a release.
- **CI / continuous delivery:** Frequent integration with automated feedback / keeping tested releases ready for deployment, possibly with human approval.
- **Continuous deployment / training:** Automatic release of gated changes / creation of new model candidates from updated data; not the same process.
- **Batch / online inference:** Compute predictions as grouped work for later use / compute them for arriving requests; neither necessarily updates weights.
- **Shadow / canary:** Observe candidate results without choosing the live action / expose a limited live population before further rollout.
- **Blue-green / rollback:** Switch between prepared serving environments / restore an approved compatible earlier release, not undo external actions.
- **Data drift / concept drift:** A changed input distribution / a changed relationship between inputs and outcomes; input drift alone does not prove harm.
- **Training-serving skew:** A discrepancy between training and serving inputs or preparation; investigate the concrete mismatch.
- **Mature cohort:** Predictions grouped by event time with enough follow-up for delayed outcomes; missing labels are not negative labels.
- **SLI / SLO / SLA:** A defined service measurement / its target and window / an agreement with consequences for missing commitments.
- **Error budget:** The allowed bad fraction under a defined reliability objective; not permission to violate safety or access rules.
- **p95 latency:** A latency percentile within which roughly 95% of measured requests finish; not a mean or quality score.
- **Trace:** Linked stages of one interaction with minimized metadata such as versions, durations, and outcomes.
- **Circuit breaker / kill switch:** Temporarily stop calls to a failing dependency with controlled recovery / disable a risky capability through enforced controls.
- **Incident / post-incident review:** An event needing coordinated response / an impact and contributing-factor review with owned corrective actions.
- **Object / file / block storage:** Individually addressed data objects / named files in directories / addressable blocks beneath storage systems; choose by workload, not a universal ranking.
- **Source of truth / derived index:** Authoritative records / a searchable transformed representation requiring lineage, freshness, and current access enforcement.
- **Stateless replica:** A replaceable application instance that does not depend on unique local memory for required durable progress; the system still has state.
- **CPU / GPU:** A general-purpose processor / a highly parallel processor suited to supported matrix workloads; actual end-to-end benefit requires measurement.
- **Memory capacity / bandwidth:** How much can be held / how quickly memory data can be moved; distinct constraints.
- **KV cache:** Stored attention keys and values reused during language generation; request computation state, not verified answer storage.
- **Quantization / distillation:** Reduced numerical representation precision / training a student using teacher information; both require independent quality and performance checks.
- **Data / model parallelism:** Distribute examples across model copies / divide one model across devices; communication limits speedup.
- **Latency / throughput / concurrency:** Elapsed time for a stated operation / completed work per unit time / work in flight, including waits.
- **Critical path / Amdahl's law:** Required dependency path determining completion / the unchanged portion of work limits gains from speeding one part.
- **Dynamic serving batch:** Group arriving compatible inference requests within limits; can improve throughput while adding waiting.
- **TTL / cache invalidation:** An entry's maximum reuse time / removing or rejecting reuse after a relevant change; neither replaces authorization.
- **Semantic cache / stampede:** Reuse based on similarity requiring equivalence checks / many callers simultaneously recomputing missing or expired work.
- **Vertical / horizontal scaling:** Increase one instance's resources / add instances; shared dependencies can remain bottlenecks.
- **Replication / sharding:** Keep copies / partition data or work; shards are not backups and replicas can copy corruption.
- **Backpressure / admission control:** Signal upstream to slow down / limit accepted work to protect bounded capacity and deadlines.
- **Readiness / draining:** An instance can handle its promised work / stop new work while eligible in-flight work completes within limits.
- **Failure domain:** Components sharing a cause of failure such as power, site, or a required dependency.
- **RTO / RPO:** Target maximum service interruption / target maximum recovered-data gap expressed in time; objectives need tested evidence.
- **Hybrid / edge placement:** Connect different hosting environments / process near users or sensors; permission, updates, and recovery remain necessary.
- **Selection / false-positive rate:** Selected/all assessed / false positives/all actual negatives, within a stated group; different from recall.
- **Proxy feature:** An input correlated with a group characteristic that can carry its influence without an explicit group field.
- **Local / global explanation:** Account of one prediction / broader model behavior; readability does not guarantee fidelity or causality.
- **Automation bias:** Overreliance on an automated suggestion; oversight needs evidence, time, expertise, and intervention authority.
- **Model / system card:** Intended use, evidence, and limits for a model / for its complete application, including retrieval, tools, and oversight.
- **Controller / processor:** Determines processing purposes and methods / processes on the controller's behalf; actual roles and uses matter.
- **Pseudonymization / anonymization:** Replace identifiers while linkage remains possible / remove direct and indirect identifiability with effectiveness checks.
- **Data minimization:** Collect, use, disclose, and retain only the personal data necessary for a specified justified purpose.
- **Threat model:** Map assets, adversaries, entry paths, trust boundaries, consequences, controls, and remaining risks.
- **Confidentiality / integrity / availability:** Prevent unauthorized disclosure / unauthorized alteration / loss of usable service.
- **Supply-chain provenance:** Evidence of model, data, dependency, and supplier origin; a hash identifies bytes but does not certify safety.
- **Poisoning / backdoor:** Manipulation of data or models to alter behavior / hidden behavior triggered under particular conditions.
- **Direct / indirect prompt injection:** Untrusted instructions through a user request / through retrieved or external content; neither grants authority.
- **Exfiltration:** Movement of protected information to an unauthorized destination, including through tools, links, or logs.
- **Impact assessment / residual risk:** Documented analysis of processing or system effects and mitigations / risk remaining after controls.
- **Risk register:** Owned scenarios, controls, evidence, residual risks, review dates, and actions; not a substitute for mitigation.
- **Processing-activity record:** Purpose, categories, recipients, retention, transfers, and protection metadata; distinct from raw data payloads.
- **Govern / Map / Measure / Manage:** NIST AI RMF 1.0 functions for accountability, context, evidence, and response; voluntary guidance, not Saudi law.
- **User need / problem statement:** Evidence-based goal and obstacle for affected people / a scoped account of who, what, current difficulty, and desired outcome; not a prescribed AI solution.
- **Proof of concept / pilot:** Test an idea under chosen conditions / test bounded realistic use with owners, safeguards, and decision rules; neither is automatic production approval.
- **KPI / guardrail:** Important outcome measure / a constraint on harms or unacceptable behavior; definitions need population, denominator, window, and owner.
- **Total cost of ownership:** Lifecycle costs including preparation, integration, operation, human review, assurance, support, and retirement; not just model pricing.
- **Simple ROI / payback:** Net incremental benefit divided by incremental cost for a stated horizon / setup cost divided by positive constant recurring net benefit per period; instructional undiscounted conventions.
- **Sensitivity analysis:** Vary uncertain assumptions such as adoption, volume, review time, and cost to see whether a decision changes.
- **Capacity benefit:** Time or resources released for other useful work; not automatically cash saved or a staffing reduction.
- **RACI:** Responsible, Accountable, Consulted, Informed: a decision-rights aid, not a legal role chart or substitute for required approvals.
- **Adoption / opportunity cost:** Sustained appropriate use under a stated eligible-population definition / value of the best alternative forgone by committing scarce resources.
- **Conflict of interest:** An incentive or relationship that may impair independent judgment; disclose and manage it through appropriate review or recusal.

## Lesson checks — questions

These 18 questions are separate from the 24-question domain paper. Answer before opening the explanations below.

### Track experiments & version the whole system

### 1. What does registering a trained artifact most directly establish?

A. It is approved for every production task

B. It is cataloged with an identity and associated metadata

C. Its remote dependencies can never change

D. Its validation score applies to every future population

### 2. An assistant's weights stay fixed while its prompt and document index change. What should the release record capture?

A. Only the model's friendly name

B. Only the newest average score, without evaluation versions

C. Every private prompt in an unrestricted shared log

D. The compatible model, prompt, index, application, settings, and evaluation identities

### 3. A production alias now points to M9 instead of M8. What best preserves the identity of yesterday's prediction?

A. Record the immutable model and release identities resolved when it was served

B. Look up today's alias and assume it also served yesterday

C. Overwrite all older experiment records with M9

D. Record a random seed instead of the model version

### Build pipelines & enforce release gates

### 1. Tested releases are kept ready, but a reviewer approves the production step. Which term most precisely describes this?

A. Continuous training

B. Automatic continuous deployment

C. Continuous delivery with an approval gate

D. Online inference

### 2. A retraining run finds invalid units in its input data while the current production release is healthy. What is the best immediate response?

A. Block the candidate pipeline, preserve evidence, and investigate the input

B. Deploy the candidate because its training completed

C. Disable every healthy production function without assessing impact

D. Delete the gate and relabel the units without checking values

### 3. Artifact A31 passes all release gates. The team retrains and gets A32 with no new evaluation. Which artifact has the recorded release evidence?

A. A32, because it is newer

B. A31 and its tested compatible configuration

C. Either, if both share a display name

D. Neither, because no trained model can be versioned

### Choose serving & gradual rollout strategies

### 1. A candidate receives copied requests, but the established model alone supplies users' decisions. Which rollout pattern is this?

A. A live canary

B. A full blue-green switch

C. Continuous training

D. Shadow deployment

### 2. A candidate fails 20 of its 200 requests; the control fails none of 1,800. Which report exposes the canary risk?

A. Only the overall 1% error rate

B. A candidate rate of 1%, using all service requests

C. Candidate 10% errors versus control 0%, plus overall 1%

D. Control 10%, because it handled most requests

### 3. A warehouse needs all next-day forecasts before 06:00, and overnight inputs are acceptable. Which is a defensible serving choice?

A. Online inference solely because any stored result is invalid

B. Scheduled batch inference with freshness and completion-deadline checks

C. Use last month's predictions without an age check

D. Update weights on every forecast lookup

### Monitor drift, delayed labels & retraining decisions

### 1. More customers now submit long-distance trips, but current quality has not yet been measured. What has been observed?

A. Input drift, which warrants investigation but does not prove quality loss

B. Proven concept drift for every route

C. A guaranteed need to replace the model immediately

D. A failed HTTP service

### 2. Of 600 recent predictions, only 150 have outcomes mature enough to evaluate. What is the outcome coverage?

A. 100%, by counting unobserved outcomes as correct

B. 75%, because 450 outcomes are still missing

C. 150%, because the outcome count is the numerator

D. 25%, with quality reported for the eligible cohort and its limitations

### 3. Production uses a zero-fill rule while training used a fitted median for missing distance. Which first action is strongest?

A. Declare concept drift without checking the preparation

B. Train immediately on the accidental zeros

C. Investigate and align the serving preparation with the approved contract

D. Ignore it while the endpoint returns 200

### Set reliability targets & observe LLM behavior

### 1. A team targets 99% acceptable operational responses over a defined month. What is this target?

A. The SLI alone

B. An SLO, not automatically an SLA

C. An official SDAIA passing score

D. A guarantee that 99% of AI claims are true

### 2. For a fixed total of 10,000 eligible requests, a 99% good-response SLO allows how many bad requests?

A. 100

B. 99

C. 9,900

D. Unlimited if all bad requests return valid JSON

### 3. A policy assistant is fast but cites obsolete documents. Which additional monitoring is most relevant?

A. Only average CPU use

B. Only HTTP success rate with more decimal places

C. Only time to first token

D. Corpus/index freshness, source effective dates, and reviewed answer support

### Recover safely: fallbacks, rollback & incidents

### 1. What is the main purpose of a circuit breaker in a failing dependency path?

A. Guarantee all earlier requests had no side effects

B. Train a replacement model on every failed request

C. Temporarily stop eligible calls and use controlled probes or an approved fallback

D. Retry every request forever

### 2. A rollback stops a new assistant from submitting further refunds. What must still be addressed?

A. Nothing; rollback reverses all external payments

B. Previously submitted or uncertain refunds, reconciled through authoritative records

C. Repeat all timed-out refunds with new operation identities

D. Remove all incident records immediately

### 3. Users receive unsafe advice during an incident, but the precise cause is still uncertain. What should come first?

A. Coordinate containment through an enforced switch or evaluated safe path

B. Wait for a perfect root-cause report before changing anything

C. Ask several engineers to make independent unrecorded changes

D. Promise a restoration time without evidence

## Lesson checks — explanations (spoilers)

### Track experiments & version the whole system

#### Check 1: What does registering a trained artifact most directly establish?

**Correct answer: B.**

- **A. It is approved for every production task:** Registration records an artifact; task-specific approval requires evidence and gates.
- **B. It is cataloged with an identity and associated metadata — correct:** A registry connects an artifact to lineage, owners, reports, and lifecycle information.
- **C. Its remote dependencies can never change:** A local catalog cannot freeze or preserve access to a remote service.
- **D. Its validation score applies to every future population:** Recorded evaluation does not guarantee future quality after data or task changes.

#### Check 2: An assistant's weights stay fixed while its prompt and document index change. What should the release record capture?

**Correct answer: D.**

- **A. Only the model's friendly name:** The same weights can produce different behavior under changed prompts and retrieved evidence.
- **B. Only the newest average score, without evaluation versions:** A score without case and evaluator versions is insufficient comparison evidence.
- **C. Every private prompt in an unrestricted shared log:** Indiscriminate sensitive-content retention is unnecessary and creates exposure risk.
- **D. The compatible model, prompt, index, application, settings, and evaluation identities — correct:** A whole-system identity links changed behavior to the actual evaluated configuration.

#### Check 3: A production alias now points to M9 instead of M8. What best preserves the identity of yesterday's prediction?

**Correct answer: A.**

- **A. Record the immutable model and release identities resolved when it was served — correct:** Resolved historical identities remain meaningful when a mutable alias moves.
- **B. Look up today's alias and assume it also served yesterday:** The alias has changed and no longer establishes the historical target.
- **C. Overwrite all older experiment records with M9:** Overwriting destroys the evidence needed to explain prior behavior.
- **D. Record a random seed instead of the model version:** A seed does not identify the artifact or freeze remote-provider behavior.

### Build pipelines & enforce release gates

#### Check 1: Tested releases are kept ready, but a reviewer approves the production step. Which term most precisely describes this?

**Correct answer: C.**

- **A. Continuous training:** Training creates model candidates from data; it does not describe deployment approval.
- **B. Automatic continuous deployment:** A required human approval means production release is not fully automatic.
- **C. Continuous delivery with an approval gate — correct:** Delivery keeps releases deployable without requiring automatic production promotion.
- **D. Online inference:** Inference handles prediction requests, not the release process.

#### Check 2: A retraining run finds invalid units in its input data while the current production release is healthy. What is the best immediate response?

**Correct answer: A.**

- **A. Block the candidate pipeline, preserve evidence, and investigate the input — correct:** Failed data checks should stop dependent promotion without automatically replacing healthy production.
- **B. Deploy the candidate because its training completed:** Completion of training cannot compensate for failed input validity.
- **C. Disable every healthy production function without assessing impact:** A failed development candidate alone does not establish that current production is unsafe.
- **D. Delete the gate and relabel the units without checking values:** Removing or cosmetically changing checks conceals the defect rather than repairing it.

#### Check 3: Artifact A31 passes all release gates. The team retrains and gets A32 with no new evaluation. Which artifact has the recorded release evidence?

**Correct answer: B.**

- **A. A32, because it is newer:** Recency does not transfer A31's evidence to a different artifact.
- **B. A31 and its tested compatible configuration — correct:** Promotion should use the exact candidate and bundle that the gates evaluated.
- **C. Either, if both share a display name:** A friendly name cannot establish identical artifacts or behavior.
- **D. Neither, because no trained model can be versioned:** Model artifacts and their supporting configurations can have stable identities.

### Choose serving & gradual rollout strategies

#### Check 1: A candidate receives copied requests, but the established model alone supplies users' decisions. Which rollout pattern is this?

**Correct answer: D.**

- **A. A live canary:** A canary exposes some users to the candidate's actual outputs.
- **B. A full blue-green switch:** A full switch changes which environment supplies live decisions.
- **C. Continuous training:** The scenario concerns serving comparison, not updating learned weights.
- **D. Shadow deployment — correct:** Shadowing observes candidate behavior without choosing its live user-visible decision.

#### Check 2: A candidate fails 20 of its 200 requests; the control fails none of 1,800. Which report exposes the canary risk?

**Correct answer: C.**

- **A. Only the overall 1% error rate:** Twenty divided by 2,000 hides the candidate's much higher failure rate.
- **B. A candidate rate of 1%, using all service requests:** A candidate rate must use candidate requests as its denominator.
- **C. Candidate 10% errors versus control 0%, plus overall 1% — correct:** Per-version denominators reveal the concentrated candidate failure while retaining overall impact.
- **D. Control 10%, because it handled most requests:** The control had zero failures; volume alone does not create an error rate.

#### Check 3: A warehouse needs all next-day forecasts before 06:00, and overnight inputs are acceptable. Which is a defensible serving choice?

**Correct answer: B.**

- **A. Online inference solely because any stored result is invalid:** Stored predictions can be useful when they satisfy the actual freshness requirement.
- **B. Scheduled batch inference with freshness and completion-deadline checks — correct:** The required decision time and acceptable input age fit a monitored scheduled workflow.
- **C. Use last month's predictions without an age check:** Batch serving does not excuse stale outputs that violate the planning requirement.
- **D. Update weights on every forecast lookup:** The task requires predictions, not automatic online learning.

### Monitor drift, delayed labels & retraining decisions

#### Check 1: More customers now submit long-distance trips, but current quality has not yet been measured. What has been observed?

**Correct answer: A.**

- **A. Input drift, which warrants investigation but does not prove quality loss — correct:** A changed input distribution is evidence of a shift, not by itself a performance verdict.
- **B. Proven concept drift for every route:** The input-outcome relationship has not been assessed in this scenario.
- **C. A guaranteed need to replace the model immediately:** First check validity, representative outcomes, and actual task consequences.
- **D. A failed HTTP service:** Changing input proportions does not establish protocol or dependency failure.

#### Check 2: Of 600 recent predictions, only 150 have outcomes mature enough to evaluate. What is the outcome coverage?

**Correct answer: D.**

- **A. 100%, by counting unobserved outcomes as correct:** Missing outcomes cannot be counted as confirmed correct predictions.
- **B. 75%, because 450 outcomes are still missing:** Seventy-five percent is the missing fraction, not the observed mature fraction.
- **C. 150%, because the outcome count is the numerator:** Coverage divides mature outcomes by total predictions before expressing a percentage.
- **D. 25%, with quality reported for the eligible cohort and its limitations — correct:** 150/600 = 25%; delayed and potentially selected outcomes limit wider quality claims.

#### Check 3: Production uses a zero-fill rule while training used a fitted median for missing distance. Which first action is strongest?

**Correct answer: C.**

- **A. Declare concept drift without checking the preparation:** The observed concrete fault is different handling of the same missing input.
- **B. Train immediately on the accidental zeros:** Retraining may normalize a broken integration rather than repair it.
- **C. Investigate and align the serving preparation with the approved contract — correct:** The training-serving mismatch should be corrected and tested before considering learning changes.
- **D. Ignore it while the endpoint returns 200:** Protocol success does not establish that features or predictions are meaningful.

### Set reliability targets & observe LLM behavior

#### Check 1: A team targets 99% acceptable operational responses over a defined month. What is this target?

**Correct answer: B.**

- **A. The SLI alone:** The SLI is the defined measurement; the desired value and window make an objective.
- **B. An SLO, not automatically an SLA — correct:** An objective specifies a target; an agreement adds commitments and consequences.
- **C. An official SDAIA passing score:** The scenario describes a product reliability choice, not verified exam thresholds.
- **D. A guarantee that 99% of AI claims are true:** An operational-response target does not automatically measure factual answer quality.

#### Check 2: For a fixed total of 10,000 eligible requests, a 99% good-response SLO allows how many bad requests?

**Correct answer: A.**

- **A. 100 — correct:** The allowed fraction is 1%; 10,000 × 0.01 = 100 bad requests under this counting basis.
- **B. 99:** Ninety-nine is the target percentage, not 1% of the request count.
- **C. 9,900:** This is the minimum good count, not the allowed bad count.
- **D. Unlimited if all bad requests return valid JSON:** Syntax alone does not satisfy the defined reliability objective.

#### Check 3: A policy assistant is fast but cites obsolete documents. Which additional monitoring is most relevant?

**Correct answer: D.**

- **A. Only average CPU use:** Resource use does not establish the effective dates or support of cited policies.
- **B. Only HTTP success rate with more decimal places:** A more precise protocol rate still misses stale but successfully delivered evidence.
- **C. Only time to first token:** Fast streaming says little about whether the completed advice uses current policy.
- **D. Corpus/index freshness, source effective dates, and reviewed answer support — correct:** These signals address outdated retrieval and the correctness of advice derived from it.

### Recover safely: fallbacks, rollback & incidents

#### Check 1: What is the main purpose of a circuit breaker in a failing dependency path?

**Correct answer: C.**

- **A. Guarantee all earlier requests had no side effects:** Stopping new calls cannot establish the outcomes of earlier operations.
- **B. Train a replacement model on every failed request:** A breaker controls dependency calls rather than model training.
- **C. Temporarily stop eligible calls and use controlled probes or an approved fallback — correct:** This limits repeated pressure on a failing path while testing recovery deliberately.
- **D. Retry every request forever:** Unbounded retries can amplify an outage and are contrary to limiting failed-path pressure.

#### Check 2: A rollback stops a new assistant from submitting further refunds. What must still be addressed?

**Correct answer: B.**

- **A. Nothing; rollback reverses all external payments:** Restoring serving configuration does not undo previously executed refunds.
- **B. Previously submitted or uncertain refunds, reconciled through authoritative records — correct:** Past effects and unknown outcomes remain separate from stopping new candidate actions.
- **C. Repeat all timed-out refunds with new operation identities:** A timeout can hide a completed refund; new identities risk duplicate effects.
- **D. Remove all incident records immediately:** Necessary minimized evidence supports impact assessment, recovery, and follow-up.

#### Check 3: Users receive unsafe advice during an incident, but the precise cause is still uncertain. What should come first?

**Correct answer: A.**

- **A. Coordinate containment through an enforced switch or evaluated safe path — correct:** Stopping ongoing harm need not wait for the complete causal explanation.
- **B. Wait for a perfect root-cause report before changing anything:** Delaying mitigation prolongs active harm when a safe containment option exists.
- **C. Ask several engineers to make independent unrecorded changes:** Uncoordinated changes can worsen the event and destroy useful cause-and-effect evidence.
- **D. Promise a restoration time without evidence:** Communication should state confirmed facts, uncertainty, and a next update rather than invent certainty.

## Sources

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
- **SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1)** (Official ethics framework): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
  Learner-supplied English PDF ai-principles.pdf reviewed 12 October 2026; page 50 identifies May 2025, SDAIA-P114E, version 1, Regulatory Documents, General. Replaces this kit's September 2023 citation. Pages 9–11 cover scope/risk/lifecycle, 12–28 principles and controls, 28–32 roles/optional registration, and 33–48 tools/checklists. The linked official publication is a further-reading location, not an assertion of a byte-identical download. The framework is not the PDPL, an exam syllabus, or proof of project compliance; verify applicable current requirements.
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
- **GOV.UK Service Manual — Learning about users and their needs** (Learning reference): https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
  Reviewed 12 October 2026: observed needs versus assumptions, inclusive research, problem-first framing, and continuing validation. UK service-design guidance used conceptually, not Saudi law or official SDAIA objectives.
- **GOV.UK Service Manual — Measuring the success of your service** (Learning reference): https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service
  Reviewed 12 October 2026: end-to-end completion, task time, user research, and multiple evidence sources rather than digital analytics alone. Our KPI targets and examples are illustrative choices.
- **GOV.UK Service Manual — Measuring the benefits of your service** (Learning reference): https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits
  Reviewed 12 October 2026: baselines, alternatives, cost/benefit assumptions, optimism bias, sensitivity analysis, and ongoing benefits evaluation. The kit's simple undiscounted ROI/payback convention is an instructional calculation, not a mandated financial method, investment advice, or a full business case.
- **GOV.UK Service Manual — What each role does in a service team** (Learning reference): https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team
  Reviewed 12 October 2026: multidisciplinary collaboration, product priorities, service ownership, research, analysis, testing, and operations. These support functional examples, not a compulsory Saudi organization chart or statutory-role definition.
- **ACM — Code of Ethics and Professional Conduct (2018)** (Professional learning reference): https://www.acm.org/code-of-ethics
  Reviewed 12 October 2026: sections 1.2–1.7, 2.1–2.7, and 3.3–3.6 support harm reduction, honesty, conflicts, attribution, confidentiality, review, competence, learning, and careful change. Lessons are original applications, not a reproduced or modified Code. Professional guidance is not Saudi law, a legal exemption, or the SDAIA exam syllabus.
