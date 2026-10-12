# Domain 6 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes cover our proposed domain curriculum, not every possible official expert-level objective.

## Before you begin

Read the foundation primer and Domains 1–5, especially evaluation slices, RAG, enforced permissions, versioning, incident response, caches, and recovery. No programming background is required. Saudi legal summaries are educational, not legal advice; verify current official texts and applicable sector rules for real projects.

## Lesson 1: Recognize harm & evaluate fairness

**Learning objectives**

- Relate SDAIA's seven ethics principles to lifecycle decisions.
- Calculate group error rates using the correct denominators.
- Investigate unfair outcomes without claiming one metric proves fairness.

### Responsible AI begins with affected people

Responsible AI means designing and operating a system with justified benefits, evidence, and controls for its effects on people. A useful model can still cause harm through exclusion, surveillance, misleading advice, or an inappropriate decision process. Ask who receives the benefit, who bears mistakes, whether people can challenge outcomes, and whether a simpler non-AI process would reduce the risk. High accuracy alone does not answer these questions.

The reviewed May 2025 SDAIA AI Ethics Principles (SDAIA-P114E, version 1) name seven principles: Fairness; Privacy & Security; Humanity; Social & Environmental Benefits; Reliability & Safety; Transparency & Explainability; Accountability & Responsibility. They connect Plan and Design, Prepare Input Data, Build and Validate, and Deploy and Monitor. Treat them as a framework for concrete responsibilities, not seven words that certify a system. Page 9 describes scope covering stakeholders designing, developing, deploying, implementing, using, or being affected by AI within KSA, not only public-sector developers. This lesson summarizes that edition; it does not establish a complete current legal regime or official exam objectives.

### Read the four risk tiers before selecting controls

Page 9 distinguishes little or no risk, limited risk, high risk, and unacceptable risk. For little or no risk, such as the document's spam-filter example, it states no restrictions in this risk classification while recommending ethical compliance; this is not an exemption from otherwise applicable law. Limited-risk systems are subject to the document's ethics principles. High-risk systems affecting basic rights must undergo pre- and post-conformity assessments, with relevant statutory requirements also considered. A conformity assessment checks alignment with the applicable requirements; it is not simply a high accuracy score.

The framework says unacceptable-risk systems threatening safety, livelihood, or rights are not allowed, giving examples involving social profiling, exploitation of children, and distortion of behavior. Do not reclassify such a use as acceptable merely because a manager signs a risk register. Tier selection depends on the actual use and effects, not model size or a vendor's 'safe AI' label. These are the reviewed SDAIA framework's categories, not an imported EU-law classification or a complete statement of Saudi enforcement procedures.

### Turn principle names into distinct checks

Humanity asks whether the system respects fundamental human rights and KSA's cultural values, augments human capabilities, and preserves human choice rather than deceiving or manipulating people. Social & Environmental Benefits asks about effects beyond an individual prediction, including society, ecosystems, sustainability, resource use, and energy consumption. A model that saves staff time but increases exclusion or total energy demand needs an assessment of those effects, not an unsupported claim of social benefit.

Reliability means intended consistency of behavior and results; safety concerns avoiding harm or danger. A consistently wrong or harmful system is not safe merely because it is predictable. The controls call for stress-test data, testing under extreme or unexpected conditions, stakeholder sign-off at critical decisions, and continuous monitoring of both technical robustness and outward harm. Plan these checks before release and repeat them as the use case changes.

### Bias can enter before and after training

A recruiting model may learn past hiring preferences rather than future job performance. Missing regions, inconsistent labels, inaccessible application forms, or historical exclusion can shape the dataset. A feature such as school or location may act as a proxy for a group even after an explicit demographic field is removed. Deployment can introduce new harm if a useful ranking is turned into automatic rejection without review.

Statistical bias in estimation is not identical to social unfairness. Fairness concerns justified treatment and consequences in context. Check collection, label meaning, population coverage, metrics, threshold decisions, and the human workflow. A biased label is not repaired simply by collecting more copies of it. Evaluate relevant intersections and accessibility needs where lawful and appropriate; protect sensitive audit information rather than putting it into unrestricted dashboards.

### Set fairness thresholds early and justify sensitive inputs

The fairness controls on pages 13–15 begin with technical and non-technical stakeholders identifying affected and vulnerable groups, harms, benefits, metrics, and allowed thresholds during Plan and Design. Choose measures according to the algorithm, the decision's effects, and the costs of correct and incorrect predictions. During Build and Validate, assess the selected champion model against those thresholds and document fairness/performance tradeoffs and any failed assessment. During Deploy and Monitor, investigate deviations and whether the model needs renewal. The PDF does not supply one universal numerical fairness threshold.

For model inputs, page 14 says to exclude identified sensitive attributes and analyze/exclude their proxies; where exclusion is not possible because of the system's accuracy or objective, justify their use. This is not a claim that dropping one column guarantees fairness, nor permission to collect sensitive data without a valid basis. Keep prediction-feature choices distinct from lawful, protected audit information used to measure group outcomes. Document necessity and tradeoffs with the appropriate owners; the ethics justification does not replace privacy-law review.

### Different rates answer different fairness questions

Selection rate is selected people divided by all assessed people in a group. True-positive rate, or recall, is correctly selected actual positives divided by all actual positives in that group. False-positive rate is incorrectly selected actual negatives divided by all actual negatives. Equal selection rates and equal error rates are different goals; neither alone establishes fair treatment. Base rates, label validity, consequences, and uncertainty matter.

Some fairness goals conflict, especially when outcome prevalence differs and predictions are imperfect. Do not promise that one threshold makes every metric equal. Choose measures with affected stakeholders and appropriate legal/domain review, explain tradeoffs, and assess the resulting decisions. Group comparisons need counts and representative evidence. A large percentage gap from four examples is a warning to investigate, not a precise population estimate or proof of its cause.

### Mitigate the cause and monitor the whole process

If one group has many missing fields, inspect the collection process and whether the imputer harms that group. If historical labels encode unfair decisions, revisit the target and obtain defensible outcome evidence. Options may include better coverage, improved labels, a constrained model, redesigned inputs, or a different workflow. Evaluate mitigations on protected data and relevant slices, not by repeatedly tuning on the final reserved test.

Human review can also be biased or inconsistent. Measure the complete assisted workflow, appeals, overrides, delays, and effects after deployment rather than only the model's isolated score. Define unacceptable outcomes and when to stop the use case. Social and environmental benefits include actual resource use and external effects; an efficiency claim needs evidence about the overall process, not just a smaller model artifact. Record who owns these checks and when they are repeated.

### Worked example: equal selection is not equal recall

In an illustrative eligibility-screening audit, Group A has 100 people, of whom 40 meet a verified criterion. The system selects 30 eligible and 20 ineligible people. Group B also has 100 people, with 20 eligible; it selects 10 eligible and 40 ineligible. Both selection rates are 50/100 = 50%. Yet recall is 30/40 = 75% for A and 10/20 = 50% for B: a 25-percentage-point gap. False-positive rates also differ: 20/60 ≈ 33.3% versus 40/80 = 50%.

Equal selection did not establish equal error behavior or fairness. Before changing the system, investigate criterion validity, sample coverage, error consequences, and uncertainty. These are fictional audit numbers, not a Saudi legal parity test or badge cutoff. On paper, name each denominator and propose one targeted investigation. Do not conclude that group membership caused the gap merely because the rates differ.

**Remember:** Evaluate harm in context: equal averages or selection rates do not prove fairness, and removing one field does not remove every proxy.

### Common exam traps

- Equal selection rates do not imply equal recall or false-positive rates.
- Removing an explicit group field does not eliminate proxy effects.
- An ethical principle or one fairness metric is not a compliance certificate.

### Explain without notes

- How can label choice create unfairness before model training?
- Why must an audit report group counts as well as rates?
- What distinguishes high risk from unacceptable risk in the reviewed framework?
- When should fairness metrics and thresholds be chosen, and what happens if production crosses them?
- How do humanity, social/environmental benefits, reliability, and safety ask different questions?

### Learning references

- SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
- NIST — AI Risk Management Framework and Playbook: https://airc.nist.gov/airmf-resources/playbook/
- Google ML Crash Course — Accuracy, recall, precision, and related metrics: https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall

## Lesson 2: Explain decisions & make oversight meaningful

**Learning objectives**

- Distinguish transparency, interpretability, and explanation fidelity.
- Design human oversight with evidence, authority, and enough capacity.
- Communicate uncertainty and provide a usable challenge route.

### Transparency tells people what the system does

Transparency includes the system's purpose, where AI is used, what information contributes, important limits, and who is responsible. Different audiences need different details: a user needs a clear explanation and help route; an assessor needs versioned evidence; an operator needs failure and recovery instructions. Publishing every private record or secret is not transparency. Provide meaningful information under appropriate access and privacy boundaries.

A model card describes intended use, evaluation, limitations, and unsuitable uses for a model. A system-level record also covers retrieval, prompts, tools, users, oversight, and downstream decisions. A model's documentation cannot establish that every application built around it is safe. Keep records linked to the deployed version; an impressive description of last year's model may mislead today's reviewer. SDAIA's transparency and accountability principles connect understandable communication with traceability and responsible ownership.

### An explanation must match evidence, not sound persuasive

Interpretability concerns how readily a model's behavior can be understood, for example a small decision tree. Post-hoc explanations describe a result after prediction, such as estimated feature contributions. Local explanations concern one decision; global explanations concern broader behavior. An explanation can be approximate, unstable, or omit interactions, so validate its fidelity and usefulness for the intended audience rather than assuming a readable chart is exact.

A language model can generate a plausible rationale without faithfully describing why the system produced its output. Hidden or generated reasoning is not an independent audit trail. Use actual input records, source evidence, applied rules, versions, and decision logs. Feature importance is not proof that intervening on the feature causes an outcome. A counterfactual describes a hypothetical changed input and result under assumptions; it is not automatically a feasible or guaranteed route to approval.

### Oversight requires the power to intervene

Human-in-the-loop review means a person participates before a defined action, while human-on-the-loop oversight monitors operation and can intervene. The labels are less important than the actual safeguards. Reviewers need relevant expertise, independent evidence, a clear decision scope, sufficient time, and authority to refuse, change, or stop the process. A mandatory click on a model recommendation without those conditions is a rubber stamp.

Automation bias is overreliance on a system's suggestion because it looks authoritative. Design interfaces that distinguish facts, predictions, uncertainty, and missing evidence. Evaluate the human-plus-AI process against an appropriate baseline, including disagreement and errors. A confidence score alone is not a reliable escalation trigger if it is uncalibrated or blind to unfamiliar cases. Require review for consequential actions and defined out-of-scope cases, not only when the model admits uncertainty.

### Apply the framework's explicit oversight and disclosure controls

Page 23 calls for human oversight and final determination for automated decisions whose impact is irreversible, difficult to reverse, or involves life-and-death decisions. It also says AI systems should not be used for social scoring or mass surveillance. A routine approval click is not enough for such a consequential decision. Establish who can halt the process, what evidence they see, and a tested fallback for unexpected behavior.

The transparency controls on pages 24–25 require explanations matched to context, consequences, stakeholder authorization, privacy, and sensitivity. Third-party procurement needs AI Ethics due diligence and accessible, traceable documentation before sign-off. Document output/performance measures and failures, and test the interface for confusion, confirmation bias, and cognitive fatigue. Annexure C DM.1 asks that chatbot users know they are interacting with a non-human correspondent; BV.10 asks about simulated social interaction and attachment, not a system actually possessing feelings. Disclosure, usable explanations, feedback, and redress are complementary safeguards.

### Make correction and challenge practical

A person affected by an incorrect record needs a reachable process that can investigate and correct the appropriate source. Explain what the AI did and what the human or business process decided without inventing certainty. Record the challenge, the version and evidence involved, the responsible reviewer, and the outcome under justified privacy and retention rules. An appeal button that routes to the same unchecked model does not create independent reconsideration.

Plan workload and response expectations. If the review queue grows beyond capacity, pause or narrow the consequential automation rather than letting unreviewed cases proceed by default. Track missed deadlines, override quality, inconsistent reviewer decisions, and whether the challenge route works for different users. Protect reviewers and affected people from unnecessary disclosure: meaningful redress does not require revealing another person's records or a confidential access credential.

### Worked example: the reviewer cannot keep up

An illustrative assistant flags 120 cases per hour for mandatory review. Each review needs 3 minutes, so one reviewer can complete 60/3 = 20 cases per hour under ideal uninterrupted conditions. Five reviewers supply 100 reviews per hour; backlog grows by 120 − 100 = 20 per hour. Six provide only the ideal matching rate with no allowance for breaks, difficult cases, bursts, or failures. A human-approval checkbox does not solve this capacity gap.

Reduce scope or intake, add justified review capacity and margin, and define a safe waiting or manual path. Evaluate actual review time and accuracy. If the assistant offers fluent explanations but reviewers cannot see the source record, supply verifiable evidence rather than asking for longer model rationales. On paper, list what the reviewer can inspect, reject, and escalate. These numbers are training choices, not official staffing or assessment requirements.

**Remember:** Meaningful oversight combines faithful evidence, qualified judgment, intervention authority, capacity, and a usable challenge route.

### Common exam traps

- A fluent generated rationale is not proof of explanation fidelity.
- Feature importance does not establish causation or a guaranteed remedy.
- Human approval without evidence, authority, or time is not effective oversight.

### Explain without notes

- What should an affected user learn from a decision explanation?
- How would you test whether human review actually reduces harm?

### Learning references

- SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
- NIST — AI Risk Management Framework and Playbook: https://airc.nist.gov/airmf-resources/playbook/
- NIST AI RMF — Generative AI Profile (600-1): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Lesson 3: Protect privacy & navigate Saudi PDPL context

**Learning objectives**

- Recognize personal/sensitive data and controller/processor roles.
- Apply purpose, minimization, rights, and retention concepts across AI copies.
- Separate verified PDPL summaries from project-specific legal and transfer conclusions.

### Personal data is broader than a name

Under PDPL Article 1, personal data can identify an individual directly or indirectly. Removing names does not necessarily remove identifiability: a rare job, location, date, or linked record can reveal a person. Health information and identifying biometric data are examples of sensitive data in the law. Model inputs, embeddings, generated inferences, histories, and traces may still contain or reveal personal information. Do not classify every numerical vector as anonymous merely because a human cannot read it easily.

A controller determines the purposes and methods of processing; a processor processes on the controller's behalf. A hosted AI service's role depends on its actual purposes and agreement, not its marketing label. If a supplier uses prompts for its own unrelated training, do not assume that use remains covered by a processor relationship. PDPL Article 8 requires controller diligence over processors and does not erase controller responsibilities through outsourcing. These are English educational summaries of official texts reviewed on 12 October 2026, not an authoritative translation or legal advice.

### Define the purpose and lawful basis before collection

PDPL Articles 5–6 address consent and specified situations where processing is not subject to that consent requirement. Consent is neither always the only basis nor a universal permission for any future use. Where consent is relied upon, Implementing Regulation Article 11 requires clear purposes, free choice, documentation, and separate consent for each purpose; Article 12 addresses withdrawal. Legitimate interests have restrictions and an assessment under Article 16, including that processing not involve sensitive data. Ask qualified privacy/legal owners to validate the basis instead of importing a GDPR slogan.

PDPL Articles 10–14 connect purpose, minimum necessary collection, privacy information, and data quality. Reusing customer support transcripts for model training is a separate processing decision, not automatically authorized because the company already stores them. Document necessary fields, recipients, uses, and protection measures. Minimize before sending data to a model or logging it; redacting only the final answer cannot undo earlier disclosure. Public availability also does not remove every applicable PDPL duty.

### Pseudonymization reduces exposure, not all obligations

Pseudonymization replaces identifiers with codes while additional information can reconnect them. Keep the mapping separately protected, but treat the data as personal where identification remains possible. Anonymization requires removing direct and indirect identification so people cannot be reidentified; Implementing Regulation Article 9 requires evaluating effectiveness and reidentification risk. A hash of an easy-to-guess identifier is not automatically anonymous. Encryption protects readable content from unauthorized access but authorized decryption still reveals the personal data.

PDPL Article 4 sets rights to be informed, access data, obtain a readable copy, seek correction/completion/update, and seek destruction subject to the law's conditions. Implementing Regulation Article 3 generally requires executing rights requests within 30 days without delay; a justified additional period of at most 30 days is conditional and requires advance notice and reasons. Verify request identity proportionately and protect other people's information. Do not promise unconditional instant erasure or expose someone else's records while answering an access request.

### Classify data, then choose and test protection methods

The May 2025 ethics controls on pages 16–18 require privacy/security by design, data classification, appropriate read/write/update authorization, confidentiality, integrity, availability, and testing whether combined data reveals sensitive information or breaks anonymity. Revisit privacy impact and risk assessments after deployment. Internal approval of profiling under the framework is not by itself a PDPL lawful basis and does not override its unacceptable-risk restrictions.

Annexure A pages 38–39 gives examples: de-identification removes identifying information; masking hides or replaces values; tokenization substitutes tokens and may retain a link; pseudonymization can remain reconnectable; encryption protects content using keys. None of those labels alone proves effective anonymization. Test indirect identification and combined-data disclosure. Data loss prevention (DLP) detects or blocks unauthorized leakage; data governance assigns handling policies and owners; data minimization limits collection to what the stated purpose needs. These controls complement, rather than replace, purpose, lawful basis, rights, and retention review.

### Retention and transfers need their own review

PDPL Article 18 generally requires destruction when the collection purpose ends, with specified legal-retention and judicial exceptions. There is no universal rule that all prompts must be kept for five years. Implementing Regulation Article 33's five years after processing ends concerns processing-activity records, not every underlying payload. Its Article 8 addresses destruction of copies including backups while observing applicable requirements. Map source records, indexes, caches, evaluation sets, supplier copies, and recovery copies; avoid restoring legitimately removed data to service.

PDPL Article 29 and the transfer regulation address conditional transfers or disclosure outside the Kingdom. Neither an automatic ban on all transfers nor blanket permission for encrypted uploads is a sound summary. Map inference, logging, support access, backups, subprocessors, and onward transfers, not only the selected region. Have qualified owners verify current permitted purposes, protection routes, assessments where applicable, and sector restrictions. No adequacy-country list or project-specific route is established by this kit; local hosting alone also does not prove compliance.

### Worked example: improve a support assistant's data map

A company proposes sending complete support transcripts, national ID numbers, and health notes to a remote model to classify billing topics. The classification may need a short issue description, not identity documents or unrelated health details. Pause the upload; establish the specific purpose and basis, review the provider's uses and locations, and minimize inputs. Do not declare consent or encryption alone sufficient for this processing or transfer.

Replacing each customer name with a stable code while retaining a mapping is pseudonymization, not anonymization. If a verified correction request changes a bill, update authoritative data and relevant derived copies and notify recipients as required. If destruction applies, coordinate all copies and applicable exceptions through privacy owners. On paper, draw collection → model → logs/cache → supplier → backup, then name the purpose, owner, access, and retention rule at each step.

**Remember:** Privacy follows purpose, lawful basis, identifiable data, rights, and all copies; pseudonymization, encryption, or location alone do not establish compliance.

### Common exam traps

- Pseudonymized data is not automatically anonymous or outside PDPL.
- Consent to one service does not automatically cover unrelated model training.
- Processing-activity record retention is not a universal raw-prompt retention rule.

### Explain without notes

- Which AI-system copies belong in a personal-data map?
- Why must a remote provider's own training use and support access be reviewed?

### Learning references

- SDAIA Data Governance Platform — Personal Data Protection Law: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL
- SDAIA — PDPL Implementing Regulation: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2
- SDAIA — Regulation on Personal Data Transfer Outside the Kingdom: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/RegulationonPersonalDataTransferOutsidetheKingdom
- SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf

## Lesson 4: Threat-model the system & secure its supply chain

**Learning objectives**

- Map assets, adversaries, entry points, and trust boundaries.
- Choose access, secret, network, and resource controls for actual threats.
- Assess model/data/dependency provenance without mistaking integrity for safety.

### A threat model asks what can go wrong

Threat modeling is a structured examination of assets, attackers, paths, and consequences. Assets include private documents, credentials, model artifacts, approved data, action permissions, service availability, and trustworthy outcomes. Draw how data and authority move between users, ingestion, retrieval, models, tools, providers, and logs. A trust boundary marks where different levels of control or authorization meet, such as a public upload entering an internal retrieval corpus.

For each boundary, ask who can supply or modify input, what that input can influence, and what would happen if it were hostile. Confidentiality concerns unauthorized disclosure; integrity concerns unauthorized alteration; availability concerns usable access when required. Not every bad prediction is an attack, and security is not identical to model quality. Yet the same incorrect output may be more harmful when connected to a privileged tool. Review threats when a formerly read-only assistant receives action capability.

### Identity must become narrow enforced permission

Authentication establishes identity; authorization decides allowed actions on particular resources. Apply least privilege to users, services, and tools: a summarizer should not inherit an administrator's ability to export every tenant's records. Separate reading, writing, approving, and deploying where the risk warrants it. Recheck current user scope at retrieval, source opening, caches, history, and tool execution. A model-produced customer ID is a requested argument, not evidence that the caller owns that customer.

Protect credentials through an appropriate secret-management process rather than placing them in prompts, public files, logs, or downloadable artifacts. Rotate and revoke compromised credentials and investigate use; deleting the visible secret does not invalidate it. Encryption in transit and at rest reduces exposure but does not prevent a compromised authorized service from reading data. Restrict destinations and unnecessary network access, protect audit records, and apply quotas and bounded work to reduce exfiltration and resource-abuse impact.

### Supply chains include models and data

AI supply chains include software dependencies, pretrained models, adaptation artifacts, training and retrieval data, evaluators, and hosted services. Record suppliers, artifact versions, provenance, licenses, known vulnerabilities, authorized uses, and relevant terms. A model from a popular repository may still be malicious, unsuitable, or licensed incompatibly. Inventory and review must cover updates too: automatically pulling an unreviewed new artifact can bypass yesterday's release approval.

A cryptographic hash identifies bytes and can reveal a change relative to a trusted expected value. A signature connects an artifact to a signing identity under a trusted verification process. Neither proves that the original artifact is harmless, fair, legally usable, or correct. Compare hashes against trusted release records rather than a checksum delivered through the same compromised channel. Isolate inspection of untrusted artifacts; some model-loading formats or accompanying code can execute software. Do not load an unknown model on a machine containing production secrets.

### Protect data integrity and feedback paths

Poisoning manipulates data or models to change learned or retrieved behavior. A backdoor can preserve ordinary performance while misbehaving on a trigger, so a good aggregate score is not proof of its absence. Unauthorized edits to a retrieval corpus can supply false policy evidence even without weight changes. Maintain controlled ingestion, source approval, versioned lineage, access restrictions, and independent evaluation cases. An anomaly alert is evidence to investigate, not an automatic diagnosis of poisoning.

User corrections and ratings are untrusted until appropriately reviewed. Automatically retraining from every submission can turn a useful feedback route into an attack path. Validate origin, sample suspicious changes, limit who can promote data/model versions, and keep clean reference evidence. Test both quality and relevant adversarial behaviors in a permitted environment. Record scope and limitations: a finite test campaign cannot prove all attacks are prevented, and defensive controls must continue after deployment.

### Worked example: a trusted name is not a trusted artifact

A team receives a 'performance-improved' model adapter from an unsolicited message. The file hash matches the checksum in that same message, and ordinary evaluation accuracy improves. This establishes neither a trusted origin nor safe behavior. Quarantine the candidate; verify the supplier and approved release identity through a trusted channel, inspect licensing and loading risks in isolation, and perform quality/security review before promotion.

Separately, a shared summarizer credential permits bulk export across all departments. Even if the model usually follows instructions, that permission creates an unnecessary disclosure path. Narrow credentials and enforce per-user access outside the model, then test cross-department denial with synthetic records. On paper, write asset → hostile entry → possible effect → preventive control → detection → owner. Name residual risks rather than writing 'secure' beside the diagram.

**Remember:** Protect the complete system and its inputs: trusted provenance, narrow enforced permissions, isolated review, and tested controls matter more than popularity or a checksum alone.

### Common exam traps

- Authentication is not permission to access every record.
- A matching hash proves byte identity, not harmless behavior or licensing.
- A model's average quality score does not rule out targeted backdoors.

### Explain without notes

- Which new boundaries appear when a read-only assistant gets an email tool?
- How can a feedback pipeline introduce poisoning?

### Learning references

- OWASP — LLM03:2025 Supply Chain: https://genai.owasp.org/llmrisk/llm032025-supply-chain/
- OWASP — LLM04:2025 Data and Model Poisoning: https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- SDAIA — PDPL Implementing Regulation: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2

## Lesson 5: Contain prompt injection, disclosure & tool abuse

**Learning objectives**

- Distinguish direct/indirect injection, hallucination, and poisoning.
- Choose layered controls for retrieval, output destinations, and tool actions.
- Design scoped adversarial tests and interpret their success rate honestly.

### Content is not authority

Prompt injection attempts to make a model treat supplied content as instructions that alter its intended behavior. Direct injection arrives through a user request; indirect injection can arrive in retrieved documents, websites, emails, tool results, or multimodal inputs. A relevant document can contain hostile instructions even when a legitimate user asked an innocent question. A label such as 'system notice' inside that document does not make it an authorized instruction.

Hallucination is unsupported generated content and need not involve an attacker. Poisoning concerns manipulation of data or models; a poisoned retrieval document can also carry an indirect injection. These categories can overlap, but distinguishing the path helps choose controls. RAG improves access to evidence; it does not make every retrieved source trustworthy or eliminate injection. Fine-tuning, stronger system prompts, and keyword filters also do not establish guaranteed prevention.

### Reduce exposure and separate trust levels

Retrieve only sources currently authorized for the caller and needed for the task. Preserve source identity and version, distinguish untrusted quoted content from application instructions, and apply appropriate input/output screening. These practices reduce confusion and exposure but are not a perfect boundary inside a probabilistic model. Never send secrets to a model on the assumption that a prompt can prevent it revealing them. Do not expose unrelated private context that the task does not need.

Exfiltration means moving protected information to an unauthorized recipient or destination. It can occur through tool arguments, generated links or images, messages, logs, and previews, not only through visible answer text. An allowed browsing or messaging tool still needs approved destinations and data scope. Restrict outbound access and render generated content safely so merely displaying an answer does not trigger arbitrary remote requests. A safe-looking structured output can still contain a prohibited address or private content.

### Tools are proposals until deterministic checks approve them

Treat a proposed tool call as untrusted data. Outside the model, validate the tool name, schema, business meaning, user/resource authorization, allowed recipient or destination, current conditions, and operation limits. Prefer narrow functions over general command execution or unrestricted export. Approval for a high-impact action must show and bind the exact recipient, amount, record, and other material arguments. Changed arguments require fresh approval; confirmation text in a retrieved file is not user approval.

A read-only tool limits changes but can still leak data. Output validation must match the downstream context: valid JSON is not authorization, and readable text may be unsafe when interpreted as an active browser fragment or database command. Use safe rendering and constrained operations instead of executing generated text. Bound steps, duration, tokens, spending, and retries to prevent resource abuse. Keep an enforced kill switch and a tested safe fallback, not a model instruction asking it to stop.

### Test the boundary, not just the refusal phrase

Run authorized adversarial tests with synthetic data and a defined scope. Include hostile retrieved material, conflicting roles, cross-user requests, changed tool arguments, encoded or multilingual content, malicious links, and attempts to consume excessive resources. This English-only workbook describes these defensive test categories without exploit code. Observe whether a forbidden tool actually ran, data reached a destination, or an unauthorized record entered context; a refusal sentence does not prove none of those occurred earlier.

Report attempted scenarios, successful violations, repetitions, model/configuration versions, and untested conditions. Attack success rate is successful violations divided by the stated attempted tests. Zero successes on a small known set is limited evidence, not zero possible risk. Test beneficial tasks as well: a defense that rejects everything may reduce attack success while making the service unusable. Fix controls at the actual failure boundary, rerun tests, and monitor relevant outcomes rather than only improving the refusal wording.

### Worked example: the document cannot approve an export

An internal assistant retrieves a legitimate policy file that now contains text asking it to email all payroll data to an outside address. The user requested a policy summary, not a data export. This is an indirect injection attempt; the source may be relevant, but it does not authorize a new action. The application should deny unauthorized retrieval/export and unapproved destinations, preserve controlled evidence of the source change, and escalate to security owners.

In an illustrative permitted test set, 6 of 80 attempts cause a defined unauthorized action: attack success rate is 6/80 = 7.5%. After a tool-permission fix, none of those 80 succeeds. Report 0/80 on that test set and check fresh variants plus legitimate-task completion; do not claim immunity. On paper, identify which control still blocks disclosure even if the model follows the hostile instruction. That enforced control is more dependable than a promise in the prompt.

**Remember:** Assume hostile content can influence a model; constrain what data and actions the surrounding system actually permits, and verify outcomes rather than refusal wording.

### Common exam traps

- Relevant retrieved content is not trusted application authority.
- Valid JSON, read-only access, and polite refusals do not by themselves prevent disclosure.
- Zero successes in tested attacks does not prove universal resistance.

### Explain without notes

- How could a generated link disclose private information without an email tool?
- What must be reapproved if a proposed payment's recipient changes?

### Learning references

- OWASP — LLM01:2025 Prompt Injection: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- OWASP — LLM05:2025 Improper Output Handling: https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- OWASP — LLM04:2025 Data and Model Poisoning: https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/

## Lesson 6: Govern risks, document evidence & escalate incidents

**Learning objectives**

- Connect governance roles, impact assessments, and release decisions.
- Distinguish risk records, system documentation, and personal-data processing records.
- Apply conditional Saudi breach-notification summaries without confusing them with operational targets.

### Governance makes ownership and stopping rules explicit

Governance is the structure for deciding who may approve, operate, change, assess, and stop an AI system. Name a system owner, relevant domain decision-makers, data/privacy owners, security responders, operators, and assessors. SDAIA's May 2025 framework describes adopting-entity roles including Head of Entity/CDO, compliance leadership, Responsible AI Officer, and AI System Assessor. These ethics roles are not automatically identical to a legally required data protection officer; PDPL rules define their own conditions and duties.

NIST AI RMF 1.0 organizes work into Govern, Map, Measure, and Manage. Govern establishes policies and accountability; Map understands context and harms; Measure evaluates evidence and controls; Manage prioritizes and responds to risks. Its Playbook is voluntary adaptable guidance, not Saudi law or a checklist that must be completed verbatim. Use these functions to organize thinking while separately identifying applicable Saudi legal, regulatory, contractual, and sector requirements.

### Know who approves, coordinates, implements, and assesses

Pages 28–31 distinguish national and adopting-entity responsibilities. SDAIA develops and updates principles and supporting guidance, advises entities, and measures/monitors compliance with sector-regulator support. An AI System Developer builds the system; an AI System Owner applies or uses it; an AI System Assessor audits it. These are functional responsibilities, not automatic substitutes for controller/processor classifications under the PDPL.

Adopting-entity roles in the reviewed framework (pages 29–31)

| Role | Main responsibility |
| --- | --- |
| Head of Entity / Chief Data Officer (CDO) | Approve and oversee the AI Ethics Plan, designate roles, approve the annual report, resolve/delegate issues, and escalate to SDAIA when needed. |
| Chief Compliance Officer / Compliance Officer (CCO/CO) | Strategic lead reporting to the CDO: oversee/review the plan and KPIs, ensure national-regulation alignment, and obtain third-party contractual guarantees. |
| Responsible AI Officer (RAIO) | Operational lead: develop the plan, priorities, targets and KPIs with leadership; coordinate data governance/protection; maintain procedures and employee awareness. |
| AI System Assessor | Review stakeholder communication/feedback, processes, documentation and KPIs; publish audit reports covering development, deployment, and third-party procurement. |

### Use all four lifecycle stages as evidence gates

Page 11 gives four equally important stages, repeated as the system evolves. Plan and Design defines the problem, data-driven framing, feasibility, and KPIs. Prepare Input Data gathers, assesses, cleanses, validates, and transforms data into features. Build and Validate trains, tests, tunes, validates performance, and evaluates risk. Deploy and Monitor deploys, versions, periodically monitors performance, and revisits design when reviews indicate a need.

The accountability controls add signed-off datasets before model development, documented data-quality checks, named responsibility for features/hyperparameters/metrics, and model approval after successful validation and user acceptance testing before production. Deployment needs periodic performance reports and predefined data/performance alerts, each assigned to a stakeholder. A new provider, dataset, tool, or purpose can require earlier stages to be revisited; approval does not freeze the risk forever.

### Choose the annex tool for the evidence you need

Annexure A describes ten tools, and Annexure B page 40 marks their lifecycle use. The table below follows those marks, not a rule that a blank cell forbids using a tool elsewhere. For example, the main fairness controls still require production monitoring even though the annex marks Fairness Assessment only in Build and Validate. These tools complement model/system cards and privacy assessments; they are not certificates of safe or lawful deployment.

A Fairness Position Statement publicly explains the chosen fairness criteria and rationale in non-technical language. Fairness Assessment compares group behavior, systematic over/underestimation, and data representation. Ethical Impact Assessment considers direct and indirect effects on people and communities and informs whether to deploy. Safety Self-Assessment logs and reviews accuracy, reliability, security, and robustness throughout the lifecycle. Privacy and Security Standards supply relevant controls; Data Protection Methods reduce data exposure. Listing an annex's example standard or software tool does not make it mandatory or prove compliance.

Architecture for Trustworthy AI uses sense–plan–act: sense the relevant environment, consider only plans consistent with requirements, and restrict actions to compliant behaviors. Algorithm Assessment examines how algorithms influence decisions and the needed human oversight; Algorithm Auditing systematically and continuously checks behavior and ethical compliance. An AI Methods Explanation Report explains behavior and outcomes and justifies explanation/performance tradeoffs through cost-benefit analysis, rather than supplying a fluent model-written story.

Annexure B lifecycle mapping (page 40)

| Tool | Marked stages |
| --- | --- |
| Fairness Position Statement | Plan and Design |
| Ethical Impact Assessment | Plan and Design; Deploy and Monitor |
| Privacy and Security Standards | All four stages |
| Architecture for Trustworthy AI | Plan and Design |
| Algorithm Assessment | Build and Validate; Deploy and Monitor |
| Fairness Assessment | Build and Validate |
| AI Methods Explanation Report | Build and Validate; Deploy and Monitor |
| Algorithm Auditing | Build and Validate; Deploy and Monitor |
| Safety Self-Assessment | All four stages |
| Data Protection Methods | All four stages |

### Use checklist evidence without confusing badges or obligations

Annexure C pages 41–48 organizes checks as PD (Plan and Design), PID (Prepare Input Data), BV (Build and Validate), and DM (Deploy and Monitor). A useful review records the check, evidence/version, owner, gap, corrective action, and reassessment date. Examples include human oversight (PD.1), sensitive-feature proxy analysis (PID.10), tested fallback under unexpected/adversarial conditions (BV.1), stakeholder approval after user acceptance testing (BV.11), non-human chatbot disclosure (DM.1), deployed fairness monitoring (DM.9), and redress plus information about it (DM.17–18). Refer to the source for the complete checklist; these examples do not replace it.

The checklist's 'Binding for Third-party' column distinguishes items: PD.1 and BV.11 say Yes, while fairness-KPI definition PD.12 and interpretability examination BV.7 say No. No is not permission for the adopting entity to ignore the corresponding principle or applicable law. For procurement, link applicable checks to evidence, responsibilities, and contractual guarantees rather than assuming a vendor handles everything.

Pages 31–32 describe Optional Registration, possible compliance follow-up for registered entities, optional reports, and motivational badges for ethics adoption/progress. Registration being optional does not make PDPL or applicable statutory duties optional. These entity/product ethics badges are not the AI Engineer exam's Assistant, Associate, or Expert awards, and this PDF supplies no numerical exam cutoffs. A checklist or claimed ethics badge is not a complete legal compliance guarantee.

### An assessment must change a decision when necessary

An AI impact assessment examines intended benefits, affected people, plausible misuse, failure consequences, alternatives, controls, and remaining risk. A privacy impact assessment focuses on personal-data processing. Under Implementing Regulation Article 25, a written documented assessment is required in specified cases, including sensitive-data processing, joining personal datasets from different sources, and other described high-impact processing. This is not a claim that every low-risk AI task has exactly the same legal procedure.

Document purpose and basis, necessary data and recipients, geographical scope, likely severity and likelihood of harms, and protective measures. If an assessment finds unacceptable harm, redesign, narrow, or stop the proposed process and reassess; paperwork alone does not mitigate it. Residual risk is risk remaining after controls. Only authorized decision-makers can accept permitted residual risks, and managerial acceptance cannot waive legal obligations. A numerical likelihood × impact grid is an illustrative prioritization aid, not a universal legal classification or precise probability.

### Keep different records for different questions

A risk register records scenario, affected assets/people, controls, evidence, residual risk, owner, review date, and action. Model/system cards explain intended use, evaluation, limits, oversight, and versions. Decision and release records show what was approved and why. Auditability requires the ability to trace a real outcome to inputs and compatible system versions under protected access; collecting full private conversations forever is neither necessary nor automatically lawful.

A personal-data processing-activity record is a distinct legal record described by PDPL Article 31 and Implementing Regulation Article 33. It includes purposes, data/subject categories, recipients, retention, transfers, and protective measures. Article 33 specifies keeping those records during processing and for five years after the processing activity ends. Do not turn this into a five-year minimum for every raw prompt, source document, or security trace. Apply justified category-specific retention and other applicable obligations through privacy owners.

### Contain promptly and assess notification duties in parallel

For a suspected disclosure, coordinate security and privacy owners promptly: restrict the affected capability, revoke compromised access where appropriate, preserve proportionate protected evidence, establish what happened, and assess impact. Record when the controller became aware, affected categories/counts, recipients, containment, and uncertainties. Do not wait for perfect forensic certainty before escalating. A rollback restores software behavior but cannot retrieve every already disclosed copy or undo a completed outside action.

Implementing Regulation Article 24 requires controller notification to the competent authority within no more than 72 hours from awareness when the breach could harm personal data or the subject, or conflict with the subject's rights or interests. It separately requires notification to affected subjects without undue delay when its stated harm/rights/interests condition applies, in clear language. It permits later missing information as soon as possible with reasons and preserves other applicable reporting duties. The processor's agreement must require informing the controller without undue delay under Article 17. These are conditional educational summaries, not a universal 72-hour wait, a deadline for every outage, or authority to postpone containment.

### Worked example: separate recovery and legal clocks

At Monday 09:00 a controller becomes aware of a personal-data disclosure. Assume qualified assessment establishes the Article 24 authority-notification condition applies and no additional earlier requirement changes this exercise. The 72-hour outer limit is Thursday 09:00. Wednesday 15:00 is 54 hours after awareness, leaving 18 hours. A two-hour service-recovery target does not replace that legal notification duty, and the 72-hour limit is not permission to delay internal escalation or containment.

The team disables the export path, preserves minimized restricted evidence, coordinates notification through authorized owners, and validates corrected permissions before restoring service. It tracks affected people and recipients, records uncertainty, and assigns prevention work after recovery. On paper, write separate lines for awareness, containment, authority notification, affected-subject notification, and verified restoration. Keep the different conditions and owners explicit rather than calling everything an 'incident SLA'.

**Remember:** Governance connects owners and evidence to real decisions; assess and mitigate harm, preserve useful protected records, and separate recovery targets from conditional legal notification duties.

### Common exam traps

- Management cannot accept away a legal obligation.
- A privacy assessment, ethics framework, and release checklist serve different purposes.
- The conditional 72-hour authority limit is not a waiting period or the same rule as subject notification.

### Explain without notes

- What evidence would make an impact assessment change a launch decision?
- Why must controller awareness, affected-subject communication, and service recovery be tracked separately?
- Which role approves the ethics plan, which develops it operationally, and which audits it?
- How do Annexure B's tool marks differ from the ongoing controls in the main principles?
- Why does optional ethics registration not make privacy-law duties optional?

### Learning references

- SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
- NIST — AI Risk Management Framework and Playbook: https://airc.nist.gov/airmf-resources/playbook/
- SDAIA Data Governance Platform — Personal Data Protection Law: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL
- SDAIA — PDPL Implementing Regulation: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2
- Google SRE — Managing Incidents: https://sre.google/sre-book/managing-incidents/

## Domain 6 revision sheet

- **Ethics:** SDAIA May 2025, SDAIA-P114E version 1: fairness, privacy/security, humanity, social/environmental benefits, reliability/safety, transparency/explainability, and accountability/responsibility.
- **Risk tiers:** Little or no risk: ethical compliance recommended; limited: ethics principles apply; high: pre- and post-conformity assessments plus statutory review; unacceptable: not allowed in the framework.
- **Lifecycle:** Plan and Design → Prepare Input Data → Build and Validate → Deploy and Monitor; all four matter and repeat as the system changes.
- **Fairness:** Inspect population, labels, proxies, error costs, counts, uncertainty, and the complete decision workflow; one parity metric is not proof.
- **Denominators:** Selection = selected/all assessed; recall = TP/all actual positives; false-positive rate = FP/all actual negatives, by stated group.
- **Explanations:** Audience-appropriate transparency and faithful evidence matter; generated rationales and feature importance do not prove causes.
- **Oversight:** Reviewers need expertise, source evidence, authority, time, capacity, and a practical challenge route.
- **Consequential decisions:** The framework calls for human oversight and final determination for irreversible, hard-to-reverse, or life-and-death decisions; it rejects social scoring and mass surveillance.
- **Privacy roles:** Controller chooses purpose/method; processor acts on its behalf. Outsourcing does not erase controller responsibility.
- **Purpose and basis:** Identify necessary processing and a valid basis before collection or secondary use; consent is not blanket permission.
- **Identifiability:** Pseudonymization and encryption do not make data anonymous; consider indirect identification, linkage, and derived representations.
- **Rights and copies:** Support conditional rights to information, access, copies, correction, and destruction; map indexes, caches, histories, suppliers, and backups.
- **Retention:** Purpose and applicable requirements govern categories. Five years after processing ends for processing-activity records is not universal raw-prompt retention.
- **Transfers:** Map all destinations and onward access; verify current legal protection routes and sector rules. Neither local hosting nor encryption alone proves compliance.
- **Threat model:** Asset → hostile entry → consequence → layered control → detection → owner; distinguish confidentiality, integrity, and availability.
- **Supply chain:** Verify origin, versions, terms/licenses, integrity, loading risks, and task/adversarial evidence. Popularity or a matching hash is insufficient.
- **Poisoning:** Control ingestion, labels, feedback, and promotion; keep lineage and independent evaluation. Average scores do not rule out backdoors.
- **Injection:** Treat external content as data, not authority; RAG, fine-tuning, prompts, and filters do not guarantee prevention.
- **Tools and output:** Enforce narrow user/resource/destination permissions outside the model; bind approval to exact arguments and render outputs safely.
- **Security tests:** Measure actual forbidden outcomes and legitimate-task utility in authorized synthetic tests. Zero tested successes is not immunity.
- **Governance:** Assign owners and stopping rules; assess impacts and residual risk, document evidence, and reassess changes. Management cannot waive law.
- **Ethics roles:** Head/CDO approves; CCO/CO leads strategically; RAIO develops and implements operationally; Assessor reviews and audits. These are not automatically PDPL privacy roles.
- **Annex tools:** Match the statement, impact assessment, architecture, assessments, explanation report, audits, safety checks, standards, and data protection to evidence needs; production fairness monitoring remains necessary.
- **Registration and badges:** Ethics registration/reports are optional in the described mechanism; statutory duties are separate. Ethics adoption badges are not AI Engineer exam awards.
- **Notification:** Saudi Implementing Regulation Article 24 has conditional authority notification within 72 hours from controller awareness and separate subject notification without undue delay; preserve other duties.
- **Incident response:** Contain and escalate promptly, preserve proportionate protected evidence, assess notification in parallel, verify recovery, and assign corrective work.

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

### Recognize harm & evaluate fairness

### 1. A hiring model removes a demographic field but retains a strongly related location field. Which concern remains?

A. Every location must cause a hiring decision

B. Removing one field proves all outcomes are fair

C. Proxy features can preserve group-related influence

D. Fairness can only be checked on training accuracy

### 2. Group A has 24 correctly selected of 30 eligible people; Group B has 15 of 30. What are their recalls and gap?

A. A 80%; B 50%; gap 30 percentage points

B. A 50%; B 80%; gap 30 percentage points

C. Both 65% because their average is 65%

D. A 80%; B 50%; this proves the cause of unfairness

### 3. Which action best operationalizes SDAIA's accountability principle?

A. Use the seven principle names as a safety badge

B. Assign all responsibility to the model

C. Stop monitoring after a high overall score

D. Name owners, document evidence, and define intervention and review duties

### Explain decisions & make oversight meaningful

### 1. An assistant gives a fluent explanation of its eligibility recommendation. What should establish confidence in that explanation?

A. Its length and polished tone

B. Verified inputs, applied rules, versions, and tested explanation fidelity

C. The claim that feature importance proves causation

D. Publishing all users' private records

### 2. A mandatory review queue receives 90 cases/hour. Each review needs 4 minutes; four reviewers work at that ideal rate. What happens?

A. All 90 are reviewed with spare capacity

B. Capacity is 360 cases/hour

C. Capacity 60 cases/hour; backlog grows 30 cases/hour

D. Unreviewed decisions can be labeled human-approved

### 3. Which oversight design is strongest for a consequential recommendation?

A. A qualified reviewer with source evidence, time, authority to refuse, and an escalation route

B. A required approval click with no evidence view

C. A reviewer allowed only to repeat the model's wording

D. Review only when an unvalidated confidence score is low

### Protect privacy & navigate Saudi PDPL context

### 1. Customer names become codes, but a separately protected mapping can reconnect them. What is this?

A. Guaranteed anonymization

B. Proof that no privacy rules apply

C. A data transfer approval

D. Pseudonymization

### 2. A controller cites the PDPL Implementing Regulation's five-year processing-record rule to keep every raw prompt. What is the error?

A. The PDPL requires deleting all records instantly

B. Processing-activity metadata records and raw prompt payloads are different categories

C. Every encrypted prompt is automatically anonymous

D. Only GPU memory can contain personal data

### 3. A supplier proposes using billing-support transcripts for its own unrelated model training. What should happen first?

A. Assume the original support purpose covers all future training

B. Approve because the supplier calls itself a processor

C. Review the new purpose, lawful basis, roles, necessary data, and applicable disclosures/transfers

D. Keep all health and identity details to maximize data volume

### Threat-model the system & secure its supply chain

### 1. Which threat most directly concerns integrity?

A. An unauthorized edit changes approved policy evidence

B. A power outage prevents useful access

C. A private file is disclosed to a stranger

D. A model's median latency improves

### 2. A downloaded model matches a hash from a trusted release record. What has that most directly established?

A. The model has no targeted backdoor

B. Every use is legally licensed

C. It is fair for every future population

D. The artifact's bytes match that recorded identity

### 3. A production credential accidentally appears in an AI trace. Which response is best?

A. Delete the visible trace and assume the credential is safe

B. Restrict the exposure, revoke/rotate the credential, investigate use, and fix logging

C. Put the secret in the system prompt instead

D. Wait for model retraining to invalidate the secret

### Contain prompt injection, disclosure & tool abuse

### 1. A retrieved webpage instructs a summarizer to send private context elsewhere. What is the entry path?

A. Ordinary weight quantization

B. Only harmless content because retrieval found it

C. Indirect prompt injection

D. A guaranteed user approval

### 2. In 60 authorized attack tests, 9 cause the defined unauthorized action. What is attack success rate?

A. 15% on this test set

B. 85% on this test set

C. 9% for all possible attacks

D. 100% because one test failed

### 3. A model emits valid JSON asking to email a private report to a new external address. Which check is still essential?

A. Only JSON syntax, since valid structure proves permission

B. Whether the model included a polite disclaimer

C. Whether the tool is read-only

D. Enforced user/resource/destination authorization and required exact-action approval

### Govern risks, document evidence & escalate incidents

### 1. How should NIST AI RMF's Govern, Map, Measure, and Manage functions be used in a Saudi project?

A. As a replacement for PDPL and sector requirements

B. As adaptable risk-management guidance alongside separately verified obligations

C. As proof that every launch is compliant

D. As official SDAIA badge score levels

### 2. Assume Article 24's authority-notification condition applies. Awareness is Tuesday 10:00; it is now Thursday 16:00. How much of the 72-hour outer limit remains?

A. 72 hours from recovery

B. 54 hours

C. 18 hours; containment and escalation must not wait

D. No notification is needed if software was rolled back

### 3. An impact assessment identifies harm that violates applicable obligations, but a manager accepts the risk. What is the sound conclusion?

A. Management acceptance cannot waive legal obligations; redesign or stop and reassess

B. The manager's signature automatically makes the processing lawful

C. Keep the assessment unchanged and hide it from owners

D. A higher average accuracy cancels the obligation

## Lesson checks — explanations (spoilers)

### Recognize harm & evaluate fairness

#### Check 1: A hiring model removes a demographic field but retains a strongly related location field. Which concern remains?

**Correct answer: C.**

- **A. Every location must cause a hiring decision:** Association with a group does not establish a causal relationship.
- **B. Removing one field proves all outcomes are fair:** Other features and historical labels can still carry unfair influence.
- **C. Proxy features can preserve group-related influence — correct:** Location can reflect a group characteristic even without its explicit field. The May 2025 fairness controls call for proxy analysis and exclusion, or justified use where exclusion is not possible; removing one field does not prove fairness.
- **D. Fairness can only be checked on training accuracy:** Fairness needs representative outcomes, slices, and workflow evidence.

#### Check 2: Group A has 24 correctly selected of 30 eligible people; Group B has 15 of 30. What are their recalls and gap?

**Correct answer: A.**

- **A. A 80%; B 50%; gap 30 percentage points — correct:** Recall uses actual eligible counts: 24/30 = 80% and 15/30 = 50%, a 30-point gap.
- **B. A 50%; B 80%; gap 30 percentage points:** This swaps the groups' true-positive rates.
- **C. Both 65% because their average is 65%:** An average does not make the two group rates equal.
- **D. A 80%; B 50%; this proves the cause of unfairness:** The rates flag different performance but do not identify its cause or settle fairness.

#### Check 3: Which action best operationalizes SDAIA's accountability principle?

**Correct answer: D.**

- **A. Use the seven principle names as a safety badge:** Naming principles supplies no implementation evidence or official certification.
- **B. Assign all responsibility to the model:** People and organizations need identifiable responsibility and intervention mechanisms.
- **C. Stop monitoring after a high overall score:** Lifecycle accountability continues through deployment and changes.
- **D. Name owners, document evidence, and define intervention and review duties — correct:** Concrete responsibilities and traceable decisions put accountability into practice. The framework distinguishes Head/CDO approval, CCO/CO strategic leadership, RAIO operational work, and Assessor review/audit.

### Explain decisions & make oversight meaningful

#### Check 1: An assistant gives a fluent explanation of its eligibility recommendation. What should establish confidence in that explanation?

**Correct answer: B.**

- **A. Its length and polished tone:** Persuasive language does not establish fidelity to the actual decision evidence.
- **B. Verified inputs, applied rules, versions, and tested explanation fidelity — correct:** Evidence linked to the actual process is more defensible than a generated rationale alone.
- **C. The claim that feature importance proves causation:** Feature contributions do not by themselves establish causal effects.
- **D. Publishing all users' private records:** Transparency should protect privacy and respect audience authorization.

#### Check 2: A mandatory review queue receives 90 cases/hour. Each review needs 4 minutes; four reviewers work at that ideal rate. What happens?

**Correct answer: C.**

- **A. All 90 are reviewed with spare capacity:** Four reviewers complete only 4 × 15 = 60 cases per hour under these assumptions.
- **B. Capacity is 360 cases/hour:** This multiplies minutes incorrectly instead of converting review time to a rate.
- **C. Capacity 60 cases/hour; backlog grows 30 cases/hour — correct:** Each reviewer completes 60/4 = 15 per hour; total 60 leaves 90 − 60 = 30 waiting.
- **D. Unreviewed decisions can be labeled human-approved:** A queue does not establish that the required review occurred.

#### Check 3: Which oversight design is strongest for a consequential recommendation?

**Correct answer: A.**

- **A. A qualified reviewer with source evidence, time, authority to refuse, and an escalation route — correct:** These conditions make oversight capable of changing an unsafe outcome. Page 23 specifically calls for human oversight and final determination for irreversible, difficult-to-reverse, or life-and-death automated decisions.
- **B. A required approval click with no evidence view:** A click can become a rubber stamp without meaningful investigation.
- **C. A reviewer allowed only to repeat the model's wording:** Oversight requires independent judgment and ability to intervene.
- **D. Review only when an unvalidated confidence score is low:** An unvalidated score can miss confident errors and out-of-scope cases.

### Protect privacy & navigate Saudi PDPL context

#### Check 1: Customer names become codes, but a separately protected mapping can reconnect them. What is this?

**Correct answer: D.**

- **A. Guaranteed anonymization:** Reconnection remains possible, so identifiability has not been removed permanently.
- **B. Proof that no privacy rules apply:** Coded personal data can remain within applicable personal-data obligations.
- **C. A data transfer approval:** Identifier replacement does not establish a permitted transfer route.
- **D. Pseudonymization — correct:** Replacing identifiers with linkable codes reduces exposure but does not make the data anonymous.

#### Check 2: A controller cites the PDPL Implementing Regulation's five-year processing-record rule to keep every raw prompt. What is the error?

**Correct answer: B.**

- **A. The PDPL requires deleting all records instantly:** Retention and destruction depend on purpose and applicable requirements and exceptions.
- **B. Processing-activity metadata records and raw prompt payloads are different categories — correct:** Article 33's rule concerns processing-activity records, not a universal minimum for all personal-data payloads.
- **C. Every encrypted prompt is automatically anonymous:** Authorized decryption or indirect linkage can still identify individuals.
- **D. Only GPU memory can contain personal data:** Prompts, storage, logs, histories, and derived copies can contain personal information.

#### Check 3: A supplier proposes using billing-support transcripts for its own unrelated model training. What should happen first?

**Correct answer: C.**

- **A. Assume the original support purpose covers all future training:** Secondary use requires its own justified purpose and legal review.
- **B. Approve because the supplier calls itself a processor:** Actual purposes and uses determine responsibilities; the label alone is insufficient.
- **C. Review the new purpose, lawful basis, roles, necessary data, and applicable disclosures/transfers — correct:** Existing access does not establish permission for a different processing purpose.
- **D. Keep all health and identity details to maximize data volume:** Minimum necessary processing avoids irrelevant sensitive exposure.

### Threat-model the system & secure its supply chain

#### Check 1: Which threat most directly concerns integrity?

**Correct answer: A.**

- **A. An unauthorized edit changes approved policy evidence — correct:** Integrity protects data and artifacts against unauthorized alteration.
- **B. A power outage prevents useful access:** This most directly concerns availability.
- **C. A private file is disclosed to a stranger:** This most directly concerns confidentiality.
- **D. A model's median latency improves:** A latency improvement is not by itself an integrity attack.

#### Check 2: A downloaded model matches a hash from a trusted release record. What has that most directly established?

**Correct answer: D.**

- **A. The model has no targeted backdoor:** Identical bytes can still contain malicious or unsafe behavior.
- **B. Every use is legally licensed:** Licensing must be reviewed separately from file identity.
- **C. It is fair for every future population:** Population suitability and fairness require actual task evidence.
- **D. The artifact's bytes match that recorded identity — correct:** A hash comparison verifies identity relative to the expected value, not behavioral safety.

#### Check 3: A production credential accidentally appears in an AI trace. Which response is best?

**Correct answer: B.**

- **A. Delete the visible trace and assume the credential is safe:** Previously exposed copies and possible use remain; deletion alone does not revoke access.
- **B. Restrict the exposure, revoke/rotate the credential, investigate use, and fix logging — correct:** Containment must address the credential's authority and the disclosure path.
- **C. Put the secret in the system prompt instead:** A prompt is not an appropriate secret store or an enforced confidentiality boundary.
- **D. Wait for model retraining to invalidate the secret:** Credential validity is enforced by the issuing service, not the model's learned weights.

### Contain prompt injection, disclosure & tool abuse

#### Check 1: A retrieved webpage instructs a summarizer to send private context elsewhere. What is the entry path?

**Correct answer: C.**

- **A. Ordinary weight quantization:** Numerical compression does not describe hostile external instructions.
- **B. Only harmless content because retrieval found it:** Relevance does not make external instructions trusted authority.
- **C. Indirect prompt injection — correct:** Instructions arrive through external content rather than an authorized application instruction.
- **D. A guaranteed user approval:** The webpage cannot approve a new disclosure on the user's behalf.

#### Check 2: In 60 authorized attack tests, 9 cause the defined unauthorized action. What is attack success rate?

**Correct answer: A.**

- **A. 15% on this test set — correct:** The denominator is attempts: 9/60 × 100 = 15%, not a universal future risk estimate.
- **B. 85% on this test set:** That is the fraction without the defined success, not the attack success rate.
- **C. 9% for all possible attacks:** Nine is a count, and the finite test set does not establish all possible attacks.
- **D. 100% because one test failed:** One or more violations matter, but the stated rate still uses all attempted tests.

#### Check 3: A model emits valid JSON asking to email a private report to a new external address. Which check is still essential?

**Correct answer: D.**

- **A. Only JSON syntax, since valid structure proves permission:** Syntax does not establish recipient approval or data access rights.
- **B. Whether the model included a polite disclaimer:** A disclaimer does not prevent actual unauthorized disclosure.
- **C. Whether the tool is read-only:** Reading can still disclose information, and sending requires its own authorization.
- **D. Enforced user/resource/destination authorization and required exact-action approval — correct:** The application must validate the permitted action independently of the generated structure.

### Govern risks, document evidence & escalate incidents

#### Check 1: How should NIST AI RMF's Govern, Map, Measure, and Manage functions be used in a Saudi project?

**Correct answer: B.**

- **A. As a replacement for PDPL and sector requirements:** Voluntary risk guidance does not replace applicable law.
- **B. As adaptable risk-management guidance alongside separately verified obligations — correct:** The published Playbook is voluntary and contextual, not a Saudi legal checklist.
- **C. As proof that every launch is compliant:** Using function names establishes no project-specific compliance evidence.
- **D. As official SDAIA badge score levels:** These are framework functions, not assessment awards or thresholds.

#### Check 2: Assume Article 24's authority-notification condition applies. Awareness is Tuesday 10:00; it is now Thursday 16:00. How much of the 72-hour outer limit remains?

**Correct answer: C.**

- **A. 72 hours from recovery:** The stated authority limit runs from controller awareness, not service restoration.
- **B. 54 hours:** 54 hours have elapsed; that is not the remaining time.
- **C. 18 hours; containment and escalation must not wait — correct:** Tuesday 10:00 to Thursday 16:00 is 54 hours; 72 − 54 = 18 remain under the stated assumptions.
- **D. No notification is needed if software was rolled back:** Rollback does not erase a disclosure or an applicable notification duty.

#### Check 3: An impact assessment identifies harm that violates applicable obligations, but a manager accepts the risk. What is the sound conclusion?

**Correct answer: A.**

- **A. Management acceptance cannot waive legal obligations; redesign or stop and reassess — correct:** Risk acceptance is limited to permitted residual risk and cannot authorize a legal violation. The SDAIA framework also says unacceptable-risk uses are not allowed; a manager's signature is not a way to relabel them.
- **B. The manager's signature automatically makes the processing lawful:** A signature cannot replace compliance with applicable requirements.
- **C. Keep the assessment unchanged and hide it from owners:** Assessment findings need transparent owned actions and evidence of mitigation.
- **D. A higher average accuracy cancels the obligation:** Performance does not override legal requirements or the identified harm.

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
