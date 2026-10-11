# Domain 6 practice paper

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

24 original questions; one best answer each. Suggested practice time: 45 minutes, an unofficial training choice. Write your answers separately. Unanswered questions count as incorrect. The answer key is in a separate file. This is not a full seven-domain mock.

### 1. Which statement best connects SDAIA's published ethics principles to AI development?

A. They matter only after a public complaint

B. Fairness alone replaces privacy and safety

C. Listing them certifies official exam readiness

D. They guide concrete controls from planning through deployment and monitoring

### 2. A model is trained to predict past loan approval, and historical approvals excluded qualified applicants from one region. What should be investigated first?

A. Whether deeper layers can copy approval history more accurately

B. Whether the label represents a defensible desired outcome and whether coverage is adequate

C. Whether more duplicate approval records will guarantee fairness

D. Whether deleting the region name alone eliminates all related influence

### 3. In a fictional screen, Group A has 12 false positives among 60 actual negatives; Group B has 12 among 30. What are their false-positive rates?

A. A 20%; B 40%

B. Both 12% because counts match

C. A 40%; B 20%

D. A 80%; B 60%

### 4. Two groups have equal selection rates but different recall, prevalence, and error consequences. What is the most defensible fairness conclusion?

A. Equal selection proves every aspect of fairness

B. One threshold must make every fairness metric equal

C. Inspect valid labels, counts, uncertainty, consequences, and contextual tradeoffs

D. Tune repeatedly on the reserved test until every rate matches

### 5. What is the best distinction between a model card and a system-level record?

A. Both guarantee legal compliance regardless of application

B. A model card must reveal all production secrets

C. The system record also covers the model's retrieval, tools, users, oversight, and downstream use

D. Neither needs to match the deployed version

### 6. A feature-contribution report says commuting distance influenced a hiring prediction. What must not be inferred from that alone?

A. Moving closer will causally guarantee hiring

B. The explanation concerns a model result

C. The actual input and model version should be checked

D. The audience needs an understandable account

### 7. A team must review 160 decisions/hour. Each takes 2 minutes and four reviewers work at the ideal rate. What is the capacity gap?

A. No gap; four reviewers complete 240/hour

B. Only 4 decisions/hour can be reviewed

C. 80 decisions/hour of spare capacity

D. Capacity 120/hour; backlog grows 40/hour before other overhead

### 8. An appeal button asks the same unchecked model to repeat its original recommendation. What is the strongest improvement?

A. Generate a longer rationale without changing the process

B. Route to qualified review with source evidence and authority to correct or reverse the decision

C. Hide disagreement so users cannot be confused

D. Publish other applicants' records to explain the ranking

### 9. A document has no names but a unique location, role, and event date identify its subject. How should it be treated?

A. Anonymous solely because names were removed

B. As potentially personal data because indirect identification remains possible

C. As automatically exempt because it is converted to an embedding

D. As a secret-free artifact requiring no controls

### 10. A retailer determines why and how customer messages are classified, using a contracted supplier solely on its behalf. Which role description fits those stated facts?

A. The retailer becomes only a processor by outsourcing

B. No party has privacy responsibility if an API is used

C. The supplier's marketing label overrides its actual conduct

D. The retailer is the controller; the supplier acts as its processor for this use

### 11. A verified destruction request applies, but an older recovery copy still contains the personal data. What is the best plan?

A. Delete only the search result and declare all copies destroyed

B. Ignore backups because restoration is an operational matter

C. Coordinate applicable destruction and exceptions across copies and prevent unsafe reintroduction on restore

D. Keep every copy forever because processing records have a retention rule

### 12. A hosted-model provider offers encryption and a chosen region, but support access, logging locations, and onward providers are unknown. Which conclusion is justified?

A. The full processing/transfer map and applicable current protection route still need qualified review

B. All cross-border personal-data transfers are always prohibited

C. Encryption alone permits any destination

D. A region label guarantees every obligation is satisfied

### 13. Which entry is most useful in an AI assistant's threat model?

A. Public upload → internal retrieval boundary → possible private-data disclosure → enforced controls and owner

B. A list of GPU brands without data paths

C. The statement that high accuracy prevents all attacks

D. Only the final user-visible answer

### 14. An attacker can submit ratings that are automatically promoted into training labels. Which safeguard best addresses this poisoning path?

A. Increase automatic ingestion speed

B. Treat every submitted rating as verified truth

C. Validate feedback origin and meaning, control promotion, and evaluate against independent evidence

D. Keep only a public-average accuracy chart

### 15. An application authenticates a user, then lets the model request any tenant's file ID. What is missing?

A. A stronger statement that the model should be polite

B. Authorization binding each requested resource to the current user's allowed scope

C. A requirement to hide the file ID after retrieval

D. A faster accelerator to reduce decision latency

### 16. A popular third-party model has high average quality but unknown provenance and loading code. What is the sound selection process?

A. Load it on the production secret-bearing host immediately

B. Assume popularity resolves licensing and security

C. Evaluate only whether its file is smaller

D. Verify trusted origin, terms/licenses, integrity, isolated loading risks, and task/security evidence

### 17. A legitimate user asks for a summary; a retrieved attachment says it has administrative authority to change recipients. Which treatment is correct?

A. Accept its role claim because the file was retrieved

B. Treat the role claim as real approval for any tool

C. Assume RAG eliminated injection before the model saw it

D. Treat the claim as untrusted content and enforce real permissions outside the model

### 18. A security test reports 0 successful violations in 100 known attacks but rejects 70 of 100 legitimate tasks. What is the best interpretation?

A. Universal immunity with perfect usefulness

B. Limited security evidence and a substantial utility problem requiring further evaluation

C. Exactly 70% attack success

D. Permission controls can now be removed

### 19. An assistant displays a generated remote image whose address contains private context. Why can a text-only output filter be insufficient?

A. Rendering can initiate an unauthorized outbound request that leaks information

B. Images automatically anonymize every address

C. A read-only viewer cannot disclose any data

D. Valid Markdown establishes destination authorization

### 20. A user approves sending a specific invoice to Supplier A. Before execution, the model changes the recipient to Supplier B. What is required?

A. Reuse approval because the tool name is unchanged

B. Accept a retrieved note claiming the user agreed

C. Reject the changed operation until permission checks and fresh exact-action approval pass

D. Send first and hide the change in the final answer

### 21. Which record most directly tracks a risk scenario, controls, residual risk, owner, and review action?

A. Only a model-weight file

B. An unrestricted archive of every conversation

C. A risk register

D. A processor's compute invoice

### 22. A proposed AI service processes sensitive personal data, and an assessment finds harmful privacy effects. Which response aligns with the reviewed Saudi implementing rules?

A. Address the causes, change the processing as needed, and repeat the documented assessment

B. File the assessment but launch unchanged because it exists

C. Replace the assessment with a model's training loss

D. Assume the Responsible AI Officer title always replaces PDPL roles

### 23. Assume Article 24's authority-notification condition applies. Controller awareness is Friday 08:00; it is Sunday 20:00. What remains of the 72-hour outer limit?

A. 72 hours beginning when the final report is complete

B. 60 hours

C. No duty because weekends reset the clock

D. 12 hours; other communication and response duties remain separate

### 24. An engineer says every outage has the same 72-hour notification deadline for authorities and affected people. What is the best correction?

A. No incidents ever require external notification

B. Article 24's authority rule is conditional, subject notification is separately without undue delay, and other duties may apply

C. A two-hour RTO cancels every legal notification requirement

D. Wait exactly 72 hours before involving privacy owners

## Answer grid

1. ____

2. ____

3. ____

4. ____

5. ____

6. ____

7. ____

8. ____

9. ____

10. ____

11. ____

12. ____

13. ____

14. ____

15. ____

16. ____

17. ____

18. ____

19. ____

20. ____

21. ____

22. ____

23. ____

24. ____
