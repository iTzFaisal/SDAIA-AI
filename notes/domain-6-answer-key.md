# Domain 6 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12.

Use only after completing the separate practice paper. Letters refer to the fixed order in the downloadable paper; the website shuffles options.

## 1. Which statement best connects SDAIA's published ethics principles to AI development?

Topic: Recognize harm & evaluate fairness. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. They matter only after a public complaint:** The framework connects ethical controls to the entire system lifecycle.
- **B. Fairness alone replaces privacy and safety:** The principles address multiple distinct interacting concerns.
- **C. Listing them certifies official exam readiness:** They are an ethics framework, not exam badge thresholds or a readiness guarantee. Its optional-registration motivational badges concern entity/product ethics adoption, not AI Engineer awards.
- **D. They guide concrete controls from planning through deployment and monitoring — correct:** The May 2025 framework names Plan and Design, Prepare Input Data, Build and Validate, and Deploy and Monitor. Lifecycle decisions, owners, and evidence operationalize its principles.

## 2. A model is trained to predict past loan approval, and historical approvals excluded qualified applicants from one region. What should be investigated first?

Topic: Recognize harm & evaluate fairness. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Whether deeper layers can copy approval history more accurately:** Better reproduction of a biased decision label may preserve the original harm.
- **B. Whether the label represents a defensible desired outcome and whether coverage is adequate — correct:** Label meaning and historical exclusion can create unfairness before algorithm choice.
- **C. Whether more duplicate approval records will guarantee fairness:** More copies do not repair a biased target or missing populations.
- **D. Whether deleting the region name alone eliminates all related influence:** Other inputs can remain proxies and the label can still encode exclusion.

## 3. In a fictional screen, Group A has 12 false positives among 60 actual negatives; Group B has 12 among 30. What are their false-positive rates?

Topic: Recognize harm & evaluate fairness. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. A 20%; B 40% — correct:** False-positive rates use actual negatives: 12/60 = 20% and 12/30 = 40%.
- **B. Both 12% because counts match:** Equal counts can correspond to different rates when denominators differ.
- **C. A 40%; B 20%:** This reverses the correct group denominators.
- **D. A 80%; B 60%:** Those are the complementary true-negative fractions, not false-positive rates.

## 4. Two groups have equal selection rates but different recall, prevalence, and error consequences. What is the most defensible fairness conclusion?

Topic: Recognize harm & evaluate fairness. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Equal selection proves every aspect of fairness:** One parity measure does not settle error behavior, consequences, or justified treatment.
- **B. One threshold must make every fairness metric equal:** Fairness goals can conflict under imperfect prediction and differing prevalence.
- **C. Inspect valid labels, counts, uncertainty, consequences, and contextual tradeoffs — correct:** A defensible assessment relates multiple measures and evidence to affected people.
- **D. Tune repeatedly on the reserved test until every rate matches:** Test-driven tuning contaminates evaluation and may not resolve the underlying problem.

## 5. What is the best distinction between a model card and a system-level record?

Topic: Explain decisions & make oversight meaningful. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Both guarantee legal compliance regardless of application:** Documentation supplies evidence and limits, not a universal compliance guarantee.
- **B. A model card must reveal all production secrets:** Useful transparency does not require unauthorized disclosure of secrets or private data.
- **C. The system record also covers the model's retrieval, tools, users, oversight, and downstream use — correct:** A complete application introduces responsibilities and risks beyond the model artifact.
- **D. Neither needs to match the deployed version:** Stale documentation can misrepresent the process actually producing decisions.

## 6. A feature-contribution report says commuting distance influenced a hiring prediction. What must not be inferred from that alone?

Topic: Explain decisions & make oversight meaningful. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Moving closer will causally guarantee hiring — correct:** A post-hoc contribution is not proof of a causal, feasible, or guaranteed intervention.
- **B. The explanation concerns a model result:** That is its intended subject, though fidelity still needs evaluation.
- **C. The actual input and model version should be checked:** Versioned evidence helps validate the explanation and decision.
- **D. The audience needs an understandable account:** Audience-appropriate communication is part of meaningful transparency.

## 7. A team must review 160 decisions/hour. Each takes 2 minutes and four reviewers work at the ideal rate. What is the capacity gap?

Topic: Explain decisions & make oversight meaningful. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. No gap; four reviewers complete 240/hour:** Each reviewer completes 30/hour, not 60 under a two-minute review time.
- **B. Only 4 decisions/hour can be reviewed:** Reviewer count is not the completion rate.
- **C. 80 decisions/hour of spare capacity:** The required rate exceeds the ideal 120/hour capacity rather than falling below it.
- **D. Capacity 120/hour; backlog grows 40/hour before other overhead — correct:** 4 × (60/2) = 120, leaving 160 − 120 = 40 per hour under the stated assumptions.

## 8. An appeal button asks the same unchecked model to repeat its original recommendation. What is the strongest improvement?

Topic: Explain decisions & make oversight meaningful. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. Generate a longer rationale without changing the process:** More persuasive wording does not create independent reconsideration.
- **B. Route to qualified review with source evidence and authority to correct or reverse the decision — correct:** A meaningful challenge route must be able to investigate and change the outcome.
- **C. Hide disagreement so users cannot be confused:** Concealing uncertainty and challenge outcomes undermines transparency and redress.
- **D. Publish other applicants' records to explain the ranking:** Redress must still protect other people's privacy and authorization boundaries.

## 9. A document has no names but a unique location, role, and event date identify its subject. How should it be treated?

Topic: Protect privacy & navigate Saudi PDPL context. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. Anonymous solely because names were removed:** Indirect identifiers can still make an individual identifiable.
- **B. As potentially personal data because indirect identification remains possible — correct:** PDPL's personal-data definition is broader than explicit names.
- **C. As automatically exempt because it is converted to an embedding:** A derived representation can preserve or reveal identifying information.
- **D. As a secret-free artifact requiring no controls:** Identifiability and confidentiality need actual assessment, not format assumptions.

## 10. A retailer determines why and how customer messages are classified, using a contracted supplier solely on its behalf. Which role description fits those stated facts?

Topic: Protect privacy & navigate Saudi PDPL context. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. The retailer becomes only a processor by outsourcing:** Outsourcing does not change who determines processing purposes and methods.
- **B. No party has privacy responsibility if an API is used:** An API changes the workflow, not the existence of responsibilities.
- **C. The supplier's marketing label overrides its actual conduct:** Roles depend on actual processing purposes and arrangements.
- **D. The retailer is the controller; the supplier acts as its processor for this use — correct:** The stated purpose-setting and on-behalf-of processing align with those roles, while controller duties remain.

## 11. A verified destruction request applies, but an older recovery copy still contains the personal data. What is the best plan?

Topic: Protect privacy & navigate Saudi PDPL context. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Delete only the search result and declare all copies destroyed:** A derived index is not the complete source, supplier, cache, and backup copy map.
- **B. Ignore backups because restoration is an operational matter:** Destruction requirements address copies including backups subject to applicable requirements.
- **C. Coordinate applicable destruction and exceptions across copies and prevent unsafe reintroduction on restore — correct:** Privacy and recovery owners must handle the complete data lifecycle rather than just the visible entry.
- **D. Keep every copy forever because processing records have a retention rule:** Processing-activity metadata retention does not justify indefinite retention of every payload.

## 12. A hosted-model provider offers encryption and a chosen region, but support access, logging locations, and onward providers are unknown. Which conclusion is justified?

Topic: Protect privacy & navigate Saudi PDPL context. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. The full processing/transfer map and applicable current protection route still need qualified review — correct:** Encryption and one location setting do not establish all destinations, access, or legal conditions.
- **B. All cross-border personal-data transfers are always prohibited:** Saudi law provides conditional transfer rules rather than that universal summary.
- **C. Encryption alone permits any destination:** Encryption is a safeguard, not a complete legal authorization.
- **D. A region label guarantees every obligation is satisfied:** Local placement does not establish purposes, basis, rights handling, or supplier practices.

## 13. Which entry is most useful in an AI assistant's threat model?

Topic: Threat-model the system & secure its supply chain. Practice difficulty: Foundation (not an official question level).

**Correct answer: A.**

- **A. Public upload → internal retrieval boundary → possible private-data disclosure → enforced controls and owner — correct:** This connects an entry path and trust boundary to a concrete consequence and mitigation responsibility.
- **B. A list of GPU brands without data paths:** Hardware names alone do not identify adversaries, authority, or disclosure paths.
- **C. The statement that high accuracy prevents all attacks:** Prediction quality is not an enforced security boundary.
- **D. Only the final user-visible answer:** Ingestion, model context, tools, network destinations, and logs also matter.

## 14. An attacker can submit ratings that are automatically promoted into training labels. Which safeguard best addresses this poisoning path?

Topic: Threat-model the system & secure its supply chain. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Increase automatic ingestion speed:** Faster ingestion can promote hostile feedback more quickly.
- **B. Treat every submitted rating as verified truth:** User-controlled feedback is not automatically defensible outcome evidence.
- **C. Validate feedback origin and meaning, control promotion, and evaluate against independent evidence — correct:** These controls protect the learning inputs and detect harmful candidate behavior.
- **D. Keep only a public-average accuracy chart:** An aggregate can hide targeted corruption and does not protect data promotion.

## 15. An application authenticates a user, then lets the model request any tenant's file ID. What is missing?

Topic: Threat-model the system & secure its supply chain. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. A stronger statement that the model should be polite:** Prompt wording does not enforce resource-specific permissions.
- **B. Authorization binding each requested resource to the current user's allowed scope — correct:** Identity alone does not permit access to every tenant's records.
- **C. A requirement to hide the file ID after retrieval:** Hiding output does not undo unauthorized input access or later disclosure paths.
- **D. A faster accelerator to reduce decision latency:** Compute speed does not establish data-access permission.

## 16. A popular third-party model has high average quality but unknown provenance and loading code. What is the sound selection process?

Topic: Threat-model the system & secure its supply chain. Practice difficulty: Stretch (not an official question level).

**Correct answer: D.**

- **A. Load it on the production secret-bearing host immediately:** Unknown artifacts and associated loading code can create a compromise path.
- **B. Assume popularity resolves licensing and security:** Popularity is not evidence of authorized use or harmless behavior.
- **C. Evaluate only whether its file is smaller:** Size does not establish origin, safety, rights, or task suitability.
- **D. Verify trusted origin, terms/licenses, integrity, isolated loading risks, and task/security evidence — correct:** Supply-chain diligence must cover more than an aggregate benchmark and repository reputation.

## 17. A legitimate user asks for a summary; a retrieved attachment says it has administrative authority to change recipients. Which treatment is correct?

Topic: Contain prompt injection, disclosure & tool abuse. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. Accept its role claim because the file was retrieved:** Retrieval does not grant application authority to content.
- **B. Treat the role claim as real approval for any tool:** External text cannot bind authorized approval of a consequential action.
- **C. Assume RAG eliminated injection before the model saw it:** RAG can itself supply hostile content and does not guarantee prevention.
- **D. Treat the claim as untrusted content and enforce real permissions outside the model — correct:** A source can provide task evidence without controlling the application's authority.

## 18. A security test reports 0 successful violations in 100 known attacks but rejects 70 of 100 legitimate tasks. What is the best interpretation?

Topic: Contain prompt injection, disclosure & tool abuse. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Universal immunity with perfect usefulness:** The limited set cannot prove immunity, and most legitimate tasks failed.
- **B. Limited security evidence and a substantial utility problem requiring further evaluation — correct:** Both actual violations and beneficial-task completion matter; known tests do not cover all threats.
- **C. Exactly 70% attack success:** Legitimate-task rejection is a different measure from attack success.
- **D. Permission controls can now be removed:** Passing a finite test set cannot justify removing the enforced boundaries.

## 19. An assistant displays a generated remote image whose address contains private context. Why can a text-only output filter be insufficient?

Topic: Contain prompt injection, disclosure & tool abuse. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Rendering can initiate an unauthorized outbound request that leaks information — correct:** Disclosure paths include generated links/media and network requests, not only visible prose.
- **B. Images automatically anonymize every address:** A URL can carry identifying or confidential information regardless of displayed media.
- **C. A read-only viewer cannot disclose any data:** Reading and rendering can still expose information to outside destinations.
- **D. Valid Markdown establishes destination authorization:** Format validity does not establish that a network destination is permitted.

## 20. A user approves sending a specific invoice to Supplier A. Before execution, the model changes the recipient to Supplier B. What is required?

Topic: Contain prompt injection, disclosure & tool abuse. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Reuse approval because the tool name is unchanged:** Approval must bind the material action arguments, not just a generic tool.
- **B. Accept a retrieved note claiming the user agreed:** External content cannot replace authorized user approval.
- **C. Reject the changed operation until permission checks and fresh exact-action approval pass — correct:** A changed recipient is a materially different operation and must not inherit the earlier approval.
- **D. Send first and hide the change in the final answer:** Concealment neither authorizes the action nor prevents its consequences.

## 21. Which record most directly tracks a risk scenario, controls, residual risk, owner, and review action?

Topic: Govern risks, document evidence & escalate incidents. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Only a model-weight file:** Weights do not document the owned risk decision and mitigation plan.
- **B. An unrestricted archive of every conversation:** Raw payload accumulation is not a structured risk record and creates privacy exposure.
- **C. A risk register — correct:** This record links identified scenarios to mitigation evidence, owners, and follow-up.
- **D. A processor's compute invoice:** Billing data does not establish the risk scenario or its controls.

## 22. A proposed AI service processes sensitive personal data, and an assessment finds harmful privacy effects. Which response aligns with the reviewed Saudi implementing rules?

Topic: Govern risks, document evidence & escalate incidents. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Address the causes, change the processing as needed, and repeat the documented assessment — correct:** Article 25 specifies assessment cases and requires addressing privacy-harming findings and reassessing.
- **B. File the assessment but launch unchanged because it exists:** Documentation alone does not mitigate the harm identified by the assessment.
- **C. Replace the assessment with a model's training loss:** A predictive loss does not assess purposes, personal-data effects, and protective measures.
- **D. Assume the Responsible AI Officer title always replaces PDPL roles:** Ethics-framework and legal privacy roles have distinct conditions and duties.

## 23. Assume Article 24's authority-notification condition applies. Controller awareness is Friday 08:00; it is Sunday 20:00. What remains of the 72-hour outer limit?

Topic: Govern risks, document evidence & escalate incidents. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. 72 hours beginning when the final report is complete:** The limit runs from controller awareness, not perfect forensic completion.
- **B. 60 hours:** 60 hours have elapsed; the remaining interval is smaller.
- **C. No duty because weekends reset the clock:** The stated 72-hour rule is not presented as a business-day clock or a weekend reset.
- **D. 12 hours; other communication and response duties remain separate — correct:** Friday 08:00 to Sunday 20:00 is 60 hours, leaving 12 under the stated assumptions; this does not justify waiting.

## 24. An engineer says every outage has the same 72-hour notification deadline for authorities and affected people. What is the best correction?

Topic: Govern risks, document evidence & escalate incidents. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. No incidents ever require external notification:** Some personal-data breaches trigger legal notification and other duties can apply.
- **B. Article 24's authority rule is conditional, subject notification is separately without undue delay, and other duties may apply — correct:** Operational outages, conditional breach notifications, and subject communication must not be collapsed into one clock.
- **C. A two-hour RTO cancels every legal notification requirement:** Service recovery objectives cannot waive applicable legal reporting duties.
- **D. Wait exactly 72 hours before involving privacy owners:** The outer authority limit is not a waiting period; containment and internal escalation should be prompt.

## Scoring

Score = correct answers / 24 × 100%. This does not classify an official badge level. Group missed questions by the lesson named above and revisit the worked example.
