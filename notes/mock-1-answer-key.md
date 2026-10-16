# Mock 1 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12.

Use after the separate paper. Letters refer to its fixed order, not shuffled website letters. The lesson links below identify the existing teaching and reviewed references behind each question.

## 1. Two experiments report different scores, but both are named 'latest'. What record is most important for a meaningful comparison?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. Only the bigger score in a presentation:** An isolated selected score hides how the experiments differ.
- **B. Only the person who last opened the file:** File access does not identify the experiment's data or configuration.
- **C. A new name without any version record:** Renaming does not recover missing provenance.
- **D. Versions of data, preparation, model settings, evaluation, and relevant environment — correct:** A score needs a traceable experimental context to explain differences and reproduce the comparison.

## 2. A maintenance team has vibration measurements but no examples labeled by failure type. It wants to discover recurring machine-behavior groups. Which task fits this first investigation?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. Supervised classification:** Classification needs known target categories for training; these failure labels are absent.
- **B. Regression of failure type:** Regression predicts numerical quantities, not unknown categories of machine behavior.
- **C. Reinforcement learning:** No agent choosing actions and receiving sequential rewards is described.
- **D. Clustering — correct:** Clustering explores similarity groups without needing failure-type labels; the groups still require interpretation.

## 3. A rule requires a form's date to precede its submission date. The condition is explicit and stable. What is the most reasonable first approach?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Reinforcement learning from every rejected form:** No sequential policy-learning problem is necessary for this fixed rule.
- **B. A deterministic validation rule — correct:** A clear stable condition can be enforced directly without learning a model.
- **C. An LLM that guesses whether the dates look plausible:** Generation adds unnecessary uncertainty to an explicit computable condition.
- **D. Clustering dates and accepting the largest group:** Grouping does not enforce the required ordering for an individual form.

## 4. A classifier has 8 misses among 40 actual positives in Group A and 8 among 20 in Group B. What do the false-negative rates show?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A 40%; B 20%:** This reverses the two group denominators.
- **B. Both 20%, proving fairness in every respect:** Group B's stated rate is 40%, and one metric cannot establish comprehensive fairness.
- **C. A 20%; B 40%; equal miss counts do not mean equal rates — correct:** Each rate uses its group's actual positives: 8/40 and 8/20.
- **D. Both 8% because each group has eight misses:** A count of eight is not a percentage without the relevant denominator.

## 5. A prediction request receives HTTP 200, but its returned category is wrong. Which statement is correct?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Task correctness can be tested only by changing the status code:** Task evaluation compares outputs with evidence and criteria, not just response statuses.
- **B. Transport success and task correctness are separate checks — correct:** HTTP success indicates protocol-level handling, not that the AI answer is correct for the task.
- **C. HTTP 200 proves the prediction matches reality:** The status code does not verify model output against ground truth.
- **D. The category must be correct if the body is valid JSON:** Parseable structured output can still be factually or semantically wrong.

## 6. An AI document service stores large immutable source files and a separate searchable index. Which storage role best fits the source files?

Domain 5. Topic: [Map the architecture & choose storage](../index.html#lesson/d5-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Object storage for the file objects — correct:** Object storage is a conventional fit for large files; indexes and metadata still serve separate lookup roles.
- **B. A vector index as the only authoritative file archive:** Similarity vectors alone do not preserve the full original source files.
- **C. CPU registers as long-term shared storage:** Registers are transient computation state, not a durable file repository.
- **D. A model's output buffer as the source of truth:** A generated-output buffer is not a durable authoritative document archive.

## 7. A sponsor asks for a chatbot, but users mainly struggle to find one form hidden in navigation. What is the best first project step?

Domain 7. Topic: [Discover the problem & earn the use of AI](../index.html#lesson/d7-l1). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Validate the user problem and compare a simpler navigation fix with AI alternatives — correct:** Problem discovery should test the need rather than assume the requested technology is the right solution.
- **B. Purchase a large model before observing users:** Early procurement locks in a solution without validating the problem.
- **C. Treat the word 'chatbot' as a measurable outcome:** A named technology is not an end-user success measure.
- **D. Exclude non-AI options from feasibility review:** A simpler solution may meet the need with less cost and risk.

## 8. The model weights are unchanged, but a prompt and retrieval filter are modified. Should the AI system's release record change?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Only if the user interface changes color:** Behavioral changes matter regardless of visible styling.
- **B. No; configuration changes cannot be rolled back:** Versioned configuration can support controlled rollback.
- **C. Yes; prompts and retrieval configuration can change system behavior — correct:** Whole-system versioning includes behavior-changing components beyond model weights.
- **D. No; only weights can affect answers:** Context assembly and instructions directly influence generated output.

## 9. A retailer will predict returns when an order is placed. Which proposed feature should be rejected as target leakage?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. The delivery region entered at checkout:** The region is supplied when the order is placed; it still needs appropriate quality and privacy review.
- **B. A refund issued after the product was returned — correct:** The later refund is unavailable at order time and directly reveals the outcome being predicted.
- **C. The item's price at checkout:** The checkout price exists at the stated prediction time and is not inherently future information.
- **D. Returns from that customer's earlier completed orders:** Earlier history can be usable if its timestamps and permitted use are verified.

## 10. A delivery robot learns a sequence of movements using rewards for successful delivery and penalties for collisions. Which learning setting best describes this?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Unsupervised clustering:** Clustering finds groups; it does not directly learn a sequential action policy from rewards.
- **B. Ordinary regression of a fixed label only:** The scenario centers on action selection and future rewards, not just predicting a fixed number.
- **C. A relational database query:** A query retrieves data but does not learn an action policy from interaction.
- **D. Reinforcement learning — correct:** An agent learns actions from outcomes and rewards over sequential interactions.

## 11. A team follows the reviewed May 2025 SDAIA ethics principles. How should it choose fairness metrics and thresholds for its application?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Measure only overall accuracy and omit affected groups:** An overall average can hide group-specific errors and impacts.
- **B. Wait until after every deployment to define acceptable harm:** Planning should establish criteria before affected people are exposed.
- **C. Define and justify context-appropriate metrics and allowed thresholds during planning — correct:** The framework supports deliberate fairness controls; the kit does not identify one universal numerical fairness cutoff for all systems.
- **D. Use an invented universal 95% fairness cutoff:** No such universal numerical threshold is established by the reviewed material.

## 12. An integration expects confidence to be a number between 0 and 1, but receives the string 'very high'. What should happen at the contract boundary?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Silently convert 'very high' to 1:** That invents a probability and hides a provider contract failure.
- **B. Accept it because it sounds positive:** Natural-language plausibility does not satisfy a numeric contract.
- **C. Delete the required confidence field from every consumer:** A producer error does not justify an unreviewed change to all downstream requirements.
- **D. Reject or handle the response as invalid according to the documented failure policy — correct:** A required numeric range cannot safely be replaced by arbitrary text; validation and controlled handling protect downstream behavior.

## 13. A quality issue appears only after retrieved documents are assembled into model context. What architecture practice helps isolate the bottleneck?

Domain 5. Topic: [Map the architecture & choose storage](../index.html#lesson/d5-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Measure only the model's parameter count:** Parameter count does not reveal context construction failures.
- **B. Assume every quality issue is caused by GPU speed:** Hardware speed does not explain every semantic failure.
- **C. Measure and validate each stage's inputs, outputs, and versions — correct:** End-to-end symptoms become diagnosable when ingestion, retrieval, context assembly, and generation are observable separately.
- **D. Replace all infrastructure before identifying the failing stage:** A broad replacement may not address the context-assembly problem.

## 14. An offline feature uses one unit conversion while serving uses another. The model artifact itself is identical. Which failure should be investigated?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. A guaranteed improvement from more diverse units:** Inconsistent measurement meaning is not useful diversity.
- **B. A change in official exam domain weights:** The production feature mismatch is unrelated to the study blueprint.
- **C. A purely cosmetic issue because weights match:** Identical weights can receive materially different inputs.
- **D. Training-serving skew in the preparation pipeline — correct:** A difference in feature construction can break the assumptions under which the model was trained and evaluated.

## 15. Five inspection times are 2, 3, 3, 4, and 18 minutes. Which summary correctly illustrates the influence of the long inspection?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Mean 6 minutes; median 3 minutes — correct:** The sum is 30, so the mean is 6; the middle sorted value is 3. The long case pulls up the mean.
- **B. Mean 3 minutes; median 6 minutes:** This exchanges the arithmetic average and the middle observation.
- **C. Mean 4 minutes; median 4 minutes:** Four is neither the average of these five values nor the middle sorted observation.
- **D. Mean 18 minutes; median 2 minutes:** The largest and smallest observations are not the mean and median.

## 16. A route map has unequal travel costs. A search method returns the route with the fewest road segments. What remains unproven?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. That a route with more segments must be more expensive:** Several cheap segments can cost less than a single expensive segment.
- **B. That the route has the lowest total travel cost — correct:** Fewest edges and lowest summed cost coincide only under suitable cost assumptions; unequal costs break that equivalence.
- **C. That the returned route has any road segments:** The described result is already a route made from road segments.
- **D. That search can ever use numerical costs:** Cost-aware search exists; the issue is this method's optimization objective.

## 17. A high-risk proposal is supported only by a favorable average benchmark. Which addition best matches the kit's reviewed May 2025 ethics-framework summary?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Risk-appropriate pre- and post-conformity assessments and lifecycle controls — correct:** High-risk controls extend beyond one aggregate score and include assessment before and after deployment; this is not a project compliance determination.
- **B. Skip post-deployment assessment after a good training score:** The framework's lifecycle approach does not stop at training success.
- **C. Assume the benchmark changes the system into little-or-no risk:** Risk classification depends on the use and impact, not simply a favorable metric.
- **D. Replace applicable law with the benchmark report:** An evaluation report cannot override legal requirements.

## 18. A service distinguishes 'no assessment performed' from 'assessment performed with no issue found'. Why should missing and explicit null values have documented meanings?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. They may represent different states that consumers must not conflate — correct:** A clear contract prevents absence, unknown status, and a verified negative result from being treated as the same thing.
- **B. They always mean a score of zero:** The scenario describes workflow states, not a universal numeric zero.
- **C. JSON guarantees every consumer interprets them identically:** Syntax alone does not define application semantics.
- **D. A model's fluent explanation removes the need for the contract:** Generated prose is not a substitute for documented machine-consumed meanings.

## 19. A registry stores a model file with a high accuracy label. What else is needed to make a release decision defensible?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Evaluation provenance, constraints, approvals, and compatible system versions — correct:** A registry location and a score label do not by themselves establish suitability or an approved release.
- **B. Nothing once the file has a registry ID:** Registration identifies an artifact but does not prove it has passed the relevant gates.
- **C. Only a more impressive model filename:** Naming does not add decision evidence.
- **D. A copy of the training score repeated as a production guarantee:** Repeated training performance is not deployment assurance.

## 20. Two replicas of a retrieval service use different document-index versions. What consistency risk matters for user answers?

Domain 5. Topic: [Map the architecture & choose storage](../index.html#lesson/d5-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Both versions must yield identical evidence because they share a model:** Retrieval evidence depends on the index, not only the generating model.
- **B. The older index automatically inherits new documents:** New source ingestion must actually reach the index.
- **C. Version metadata is unnecessary when load balancing works:** Load balancing does not establish semantic consistency across replicas.
- **D. Users may receive different evidence depending on which replica handles the request — correct:** Replica health alone does not guarantee consistent knowledge versions; serving and release compatibility should be controlled.

## 21. A report contains 10,000 service calls but only 700 customers, with many repeat callers. Which statement best describes the unit-of-analysis concern?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. A larger call count guarantees representative customer coverage:** Sample size does not repair selection bias or overrepresentation of frequent callers.
- **B. Calls and customers are different units; repeat callers may dominate a call-level summary — correct:** The correct denominator depends on the question. Ten thousand calls do not establish ten thousand independent customers.
- **C. The number of customers equals the number of calls:** Repeated calls explicitly make these two counts different.
- **D. Every repeated call is necessarily a data-entry error:** Repeat calls can be genuine events; investigate their meaning instead of deleting them automatically.

## 22. An organization has explicit eligibility rules and historical examples of exceptions. What is a sensible design discussion before replacing all rules with AI?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Assume rules and learned models cannot coexist:** Hybrid systems can combine direct constraints with learned predictions.
- **B. Select the AI model before defining the decision boundary:** The problem, constraints, and acceptable responsibilities should guide model selection.
- **C. Separate mandatory rule enforcement from uncertain predictions and evaluate a bounded hybrid — correct:** Stable requirements can remain deterministic while a learned component supports cases requiring evidence-based judgment.
- **D. Let historical frequency override mandatory requirements:** Observed examples do not authorize waiving a binding constraint.

## 23. A pilot improves task completion, but its production access, oversight, and operations gates remain unresolved. What should the sponsor conclude?

Domain 7. Topic: [Discover the problem & earn the use of AI](../index.html#lesson/d7-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. The pilot supplies evidence, not production approval — correct:** Technical or user benefits do not automatically satisfy legal, ethical, security, or operational release conditions.
- **B. A successful pilot waives every release gate:** Benefits cannot authorize bypassing mandatory safeguards.
- **C. The project must never be considered again:** Unresolved gates call for investigation and decisions, not necessarily permanent abandonment.
- **D. An attractive ROI makes missing permissions irrelevant:** Economic value does not grant access or legal authority.

## 24. A model explanation describes which features influenced a decision. What does this explanation not establish on its own?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. That the decision is correct, fair, and lawful — correct:** An explanation can support understanding while the underlying decision still fails accuracy, fairness, or legal requirements.
- **B. That any features were considered:** A faithful feature-influence explanation can provide that limited information.
- **C. That a user can receive any information about the decision:** Explanations may provide useful information when designed appropriately.
- **D. That further review is possible:** Explanations can help reviewers investigate; they do not prevent review.

## 25. A valid signed-in user is denied access to a restricted project resource. Which distinction best explains the situation?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Authentication succeeded, but authorization may not permit this resource — correct:** Knowing the user's identity is separate from granting permission for a particular operation.
- **B. Authentication and authorization are identical:** Identity verification and resource permission are different controls.
- **C. Every signed-in user must have every project permission:** A login does not imply unrestricted access.
- **D. A model can grant access by mentioning the project name:** Access must be enforced by the system, not by generated text.

## 26. A service needs to score millions of records overnight rather than respond during an interactive request. Which serving pattern is the natural starting point?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. A full model training run for each individual record:** Scoring applies a model; retraining per record is not required.
- **B. A human approval dialog for every background computation:** Oversight should reflect actual risk, not automatically replace efficient batch execution.
- **C. Batch scoring — correct:** Batch processing fits a scheduled large-volume workload with no stated per-user interactive deadline.
- **D. One synchronous browser request held open for the entire night:** This adds fragile waiting rather than a controlled bulk workflow.

## 27. A model receives temperature in Celsius from one sensor and Fahrenheit from another, without a unit field. What should be fixed before interpreting the learned patterns?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Replace both sensors' readings with their row numbers:** Row numbers discard the measured physical quantity rather than correcting it.
- **B. Apply a scaler to all values and assume the problem is solved:** A scaler treats the mixed values as one distribution; it does not discover or correct source units.
- **C. Drop every large reading as an outlier:** A Fahrenheit reading may be valid, and blanket deletion can bias the data.
- **D. Verify and standardize units using the source definitions — correct:** A common physical unit makes values comparable; scaling alone cannot repair an unknown unit mismatch.

## 28. Why do hidden layers commonly use nonlinear activation functions?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. They guarantee zero error on unseen examples:** Representational capacity does not guarantee generalization.
- **B. They remove all learned weights:** Neural networks still learn weights and biases alongside activation computations.
- **C. They turn every numerical input into a verified fact:** Activations transform values, not the truth or quality of input data.
- **D. They allow compositions to represent nonlinear relationships — correct:** A stack of purely linear transformations is still a linear transformation; nonlinearity expands what it can express.

## 29. A model has 2 billion parameters stored at 16 bits each. Ignoring every other allocation, how much decimal memory do its weights require?

Domain 5. Topic: [Match compute, memory & model efficiency](../index.html#lesson/d5-l2). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. 4 GB for weights alone — correct:** 2 billion × 16/8 bytes = 4 billion bytes, or 4 decimal GB; serving needs additional memory.
- **B. 2 GB for the complete service:** Two GB would fit eight-bit weights alone, and the full service needs more than weights.
- **C. 16 GB for weights alone:** Sixteen is the bit width, not the resulting GB count.
- **D. 32 GB because bits equal bytes:** Eight bits make a byte; treating every bit as a byte overstates this calculation.

## 30. A release pipeline passes code tests but fails an important safety evaluation. What should the release gate do?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Block release until the required safety condition is resolved and reviewed — correct:** Code correctness is not a substitute for a required system-level safety gate.
- **B. Average the safety result with fast execution to claim a pass:** A required gate cannot be traded away through an unrelated metric average.
- **C. Deploy first and delete the failing test:** Removing evidence does not repair the unsafe behavior.
- **D. Rename the failure a stretch question:** A label change does not alter a release requirement.

## 31. Three reviewers each take 3 minutes per case. The system sends 90 cases/hour. Ignoring breaks and other work, what happens?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Capacity is 90 cases/hour; no backlog:** This overstates the capacity of three reviewers at the stated handling time.
- **B. Capacity is 20 cases/hour; backlog grows 70:** Twenty is one reviewer's capacity, not the total for three.
- **C. Capacity is 180 cases/hour; backlog shrinks:** The calculation must divide an hour by the 3-minute handling time.
- **D. Capacity is 60 cases/hour; backlog grows 30 cases/hour — correct:** Each reviewer can handle 60/3 = 20 cases/hour; three handle 60 against 90 arrivals.

## 32. A missing delivery date can mean either 'not dispatched yet' or 'source system failed'. Which preparation is most defensible?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Investigate the causes and represent the distinction where justified — correct:** Different missingness causes can carry different information; preparation should preserve meaning without leaking future outcomes.
- **B. Treat every missing date as today's date:** This invents an observed date and confuses workflow state with collection failure.
- **C. Delete all affected orders before checking their distribution:** Blind deletion can remove a systematic group and distort the deployment population.
- **D. Use the eventual delivery date even for an order-time prediction:** The eventual date is future information at order time and can introduce leakage.

## 33. A document analysis endpoint returns 'accepted' and a job ID. What should the client do next?

Domain 3. Topic: [Synchronous, asynchronous & event workflows](../index.html#lesson/d3-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Treat acceptance as the completed analysis:** An accepted asynchronous job may still be pending or fail later.
- **B. Submit new identical jobs continuously until one looks complete:** Uncontrolled resubmission can duplicate work and overload the service.
- **C. Discard the job ID and assume the output will appear locally:** The correlation identifier is needed to track the work through its lifecycle.
- **D. Track the documented job state until completion or controlled failure — correct:** Acceptance acknowledges work queued or started; it does not provide the final result.

## 34. Using the stated update w_new = w_old − learning_rate × gradient, w_old = 1.2, learning_rate = 0.1, and gradient = 0.4. What is the new weight?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. 1.24:** Adding the gradient step reverses the stated descent update.
- **B. 0.8:** This subtracts the full gradient and ignores the learning rate.
- **C. 0.12:** Multiplying weight by learning rate does not implement the given update.
- **D. 1.16 — correct:** The update is 1.2 − 0.1 × 0.4 = 1.16.

## 35. A GPU inference benchmark excludes tokenization, retrieval, and network time. What does its speedup establish?

Domain 5. Topic: [Match compute, memory & model efficiency](../index.html#lesson/d5-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. The GPU eliminates every bottleneck:** Bottlenecks can remain in CPU work, storage, networking, or queueing.
- **B. Task quality necessarily improves by the speedup factor:** Execution speed and answer quality are separate properties.
- **C. A speedup for the measured inference stage, not necessarily the full request — correct:** End-to-end benefit depends on all stages and their contribution to latency.
- **D. The whole application has exactly the same speedup:** Unaccelerated stages can limit total improvement.

## 36. A model's preprocessing library changes but its serialized parameters do not. What is the release risk?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. The same model may receive or produce different values under the new environment — correct:** Dependency and preprocessing compatibility can change behavior despite unchanged parameters.
- **B. There is no risk if the model filename is stable:** A stable filename does not pin the full execution context.
- **C. The change automatically improves all evaluations:** An upgrade needs evidence and compatibility checks, not assumed improvement.
- **D. The original dataset becomes anonymous:** A dependency change does not establish anonymization.

## 37. A category-to-target average is proposed as an input feature. Why must its computation respect training and validation boundaries?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Putting the calculation in a separate file removes leakage:** Leakage depends on information flow, not where the calculation is stored.
- **B. Using held-out labels to construct the feature can reveal the answers being evaluated — correct:** Any label-dependent preparation must exclude held-out outcomes, including within cross-validation.
- **C. Category averages never contain target information:** The proposed averages are explicitly computed from target labels.
- **D. Only numerical scaling can cause preprocessing leakage:** Imputation, selection, and label-derived encodings can also contaminate evaluation.

## 38. A reviewer sees an AI recommendation but lacks evidence, time, or authority to change it. What is the oversight problem?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Any human click guarantees a safe decision:** A click without meaningful review does not establish effective oversight.
- **B. The reviewer should be required to accept every recommendation:** Compulsory agreement removes the ability to correct model error.
- **C. Oversight is needed only when the model says it is uncertain:** Model confidence can be misleading and cannot define all oversight needs.
- **D. The human step may be nominal rather than effective control — correct:** Meaningful oversight requires competence, information, capacity, and authority to intervene.

## 39. For a stated one-year simple undiscounted training example, benefits are SAR 120,000, setup is SAR 20,000, and operating cost is SAR 40,000. What is ROI using (benefits − costs)/costs?

Domain 7. Topic: [Define success, total cost & business value](../index.html#lesson/d7-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. 50%:** This divides net benefit by benefits rather than by the stated cost denominator.
- **B. 500%:** Using setup alone omits the stated operating cost.
- **C. 100% — correct:** Total costs are SAR 60,000; net benefit is SAR 60,000, so simple ROI is 60,000/60,000 = 100%.
- **D. 200%:** Benefits divided by costs is 200%, but ROI subtracts costs from benefits first.

## 40. A neural network's loss jumps repeatedly after large parameter updates. Which first experiment directly addresses a plausible training cause?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Increase the learning rate indefinitely:** Larger steps can worsen the stated instability.
- **B. Delete the validation set to stabilize training loss:** Removing evaluation does not correct the optimization step and hides generalization evidence.
- **C. Declare that oscillation proves perfect convergence:** Repeated large jumps do not establish a stable minimum or useful fit.
- **D. Try a smaller learning rate while checking data and loss behavior — correct:** Overlarge steps can destabilize training; a controlled rate change tests that hypothesis without claiming certainty.

## 41. A completed-analysis event is delivered twice after a consumer restarts. What design best prevents double billing?

Domain 3. Topic: [Synchronous, asynchronous & event workflows](../index.html#lesson/d3-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Stop persisting all event identifiers:** Removing correlation evidence makes duplicate handling harder.
- **B. Deduplicate the event and make the billing effect idempotent — correct:** Reliable event workflows should tolerate repeated delivery without repeating the same business effect.
- **C. Assume repeated events can never occur:** Retries and recovery commonly allow duplicates; the scenario already demonstrates one.
- **D. Bill each delivered message because delivery count equals job count:** Message deliveries and distinct completed jobs are different quantities.

## 42. A retraining pipeline produces a candidate whenever fresh labels arrive. What should be separate from candidate production?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. The need to record which labels were used:** Label provenance remains necessary and should not be removed.
- **B. The ability to compare against the currently serving model:** Comparison remains central to deciding whether a replacement helps.
- **C. All monitoring after release:** Monitoring is still needed after a candidate passes promotion gates.
- **D. Evaluation and approval to promote the candidate into serving — correct:** Automation can create artifacts without granting them permission to replace a live model.

## 43. A small dataset describes unordered packaging types: carton, pouch, and crate. Which representation avoids asserting an arbitrary numeric distance between these types?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Separate category indicators — correct:** Indicator columns represent category membership without making crate three times carton by arbitrary coding.
- **B. Carton = 1, pouch = 2, crate = 3, interpreted as a measurement:** These arbitrary codes can suggest a false order or distance to some models.
- **C. Average the words into a physical packaging size:** Category names alone do not define a measurable physical size.
- **D. Replace each category with the final test-set outcome:** This would reveal evaluation targets rather than honestly represent packaging.

## 44. A quantized model fits in memory and is faster, but loses accuracy on a critical user group. What is the most defensible assessment?

Domain 5. Topic: [Match compute, memory & model efficiency](../index.html#lesson/d5-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Hide the critical group from the benchmark:** Excluding the harmed group makes the evidence less representative.
- **B. Evaluate the efficiency gain against group-specific quality requirements before release — correct:** Compression trades must be assessed on intended workloads and important slices, not just average speed.
- **C. Deploy because fitting memory automatically proves suitability:** Memory fit does not satisfy a critical quality gate.
- **D. Assume quantization preserves every prediction:** Lower precision can change outputs and must be evaluated.

## 45. A team argues that user consent alone makes an unacceptable-risk social-scoring use acceptable under the reviewed ethics framework. What is the best response?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A high model score makes risk categories irrelevant:** Predictive performance does not erase unacceptable use or harm.
- **B. Calling it a pilot removes every restriction:** A pilot label does not automatically change the nature of the use.
- **C. Consent does not automatically override the framework's unacceptable-risk restrictions — correct:** The kit separates a consent claim from the ethics framework's restrictions and any applicable legal requirements.
- **D. Any consent form waives all ethical and statutory limits:** Consent is not a universal exemption from other requirements.

## 46. A team uses a trained network to estimate a result for a new input without updating parameters. What is this phase?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Label annotation:** The system is producing an estimate, not having a person create ground-truth labels.
- **B. Inference — correct:** Inference applies learned parameters to inputs; it is distinct from fitting those parameters.
- **C. Backpropagation training:** Backpropagation supports gradient computation for parameter learning, not merely applying a frozen model.
- **D. Hyperparameter search:** No search among training configurations is described.

## 47. A client cancels its wait for a long-running analysis. What must the workflow distinguish?

Domain 3. Topic: [Synchronous, asynchronous & event workflows](../index.html#lesson/d3-l2). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. The job identifier is no longer relevant:** The job may still need tracking, cancellation confirmation, or cleanup.
- **B. Client waiting stopped versus server work actually canceled — correct:** Ending the local wait does not necessarily stop remote computation or its side effects.
- **C. All remote work must have stopped instantly:** Cancellation semantics require explicit server-side support and confirmation.
- **D. The job has necessarily succeeded:** Stopping a wait says nothing about the eventual job outcome.

## 48. A candidate receives copies of live requests, but its outputs are not shown to users. Which rollout pattern is this?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Shadow evaluation — correct:** Shadowing measures candidate behavior beside live serving without using its outputs for user decisions; its side effects still need containment.
- **B. A canary serving all candidate answers to those users:** A canary affects a selected portion of live user responses.
- **C. A full replacement of the existing service:** The current user-facing service remains in place.
- **D. A proof that users accept the candidate's answers:** Users have not consumed the shadow outputs, so acceptance is not demonstrated.

## 49. Images from each manufactured item include several nearly identical camera views. The model must generalize to new items. What is the best split boundary?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Copy difficult training views into the test set:** Copies contaminate the independence of the reserved evaluation.
- **B. Keep all views of an item within a single partition — correct:** An item-level split avoids near-duplicate views leaking item-specific patterns into evaluation.
- **C. Randomize individual views so each item appears everywhere:** Related views crossing partitions can make the held-out results overly optimistic.
- **D. Reserve only the sharpest views for testing:** This changes test difficulty and may not represent the deployment image distribution.

## 50. A defect system needs to learn local visual patterns such as edges and textures in photographs. Which model family is a conventional starting point?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. A shortest-path search alone:** Route search does not directly learn visual features from labeled photographs.
- **B. A database uniqueness constraint:** A uniqueness constraint checks duplicates rather than classifying visual texture.
- **C. A text tokenizer alone:** Tokenization by itself is not a trained visual defect classifier.
- **D. A convolutional neural network — correct:** Convolutions are well suited to local spatial patterns, though suitability still needs empirical evaluation.

## 51. People can challenge an AI-supported decision. What capability makes that challenge meaningful?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. A documented route to qualified review and correction where justified — correct:** Contestability needs a usable process and authority, not merely a displayed complaint link.
- **B. A page that repeats the same model answer indefinitely:** Repetition without review does not address a challenged error.
- **C. A statement that the algorithm can never be questioned:** This removes the challenge pathway entirely.
- **D. A requirement to reveal all other users' private records:** A challenge should not depend on unauthorized disclosure of unrelated people's data.

## 52. Retrieval takes 200 ms and a separate permission check takes 350 ms. They run concurrently, then generation takes 450 ms. Ignoring all other overhead, what is the critical-path latency?

Domain 5. Topic: [Measure latency, throughput & useful cost](../index.html#lesson/d5-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. 350 ms:** This omits the subsequent 450-ms generation stage.
- **B. 800 ms — correct:** The concurrent stage takes max(200, 350) = 350 ms; adding generation gives 800 ms.
- **C. 1,000 ms:** Summing both concurrent tasks as serial work overstates this critical path.
- **D. 450 ms:** Generation cannot start until the required concurrent checks complete.

## 53. A training example has SAR 24,000 setup cost and constant monthly benefits of SAR 7,000 with SAR 3,000 monthly operating cost. Ignoring discounting, what is simple payback after launch?

Domain 7. Topic: [Define success, total cost & business value](../index.html#lesson/d7-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. 8 months:** This divides setup by operating cost rather than by net benefit.
- **B. No finite payback:** The stated net monthly benefit is positive, so simple payback is finite.
- **C. 6 months — correct:** Monthly net benefit is 7,000 − 3,000 = SAR 4,000; 24,000/4,000 = 6 months under the stated assumptions.
- **D. About 3.43 months:** This uses gross monthly benefits and omits operating cost.

## 54. A canary serves 500 requests and has 25 failures. The control serves 9,500 requests and has none. What rates best reveal the candidate's problem?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Candidate 5%; overall 0.25% — correct:** The candidate rate is 25/500 = 5%; the pooled rate is 25/10,000 = 0.25%, which dilutes the candidate failures.
- **B. Candidate 0.25%; overall 5%:** This reverses the candidate and full-traffic denominators.
- **C. Candidate 5%; overall 5%:** Only 500 of the 10,000 requests used the candidate.
- **D. Candidate 0%; overall 0.25%:** The candidate has 25 observed failures, not zero.

## 55. A payment-creation request times out after reaching the provider. The provider may already have created the payment. What is safest?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Send the same request with a fresh key until a reply arrives:** Fresh keys may create distinct payments rather than retry the same operation.
- **B. Assume every timeout means nothing happened:** The response may be lost after successful processing.
- **C. Report success without checking the provider:** Ambiguity does not justify inventing a successful result.
- **D. Use the documented idempotency key and reconcile the operation's status before repeating its effect — correct:** A timeout leaves the outcome ambiguous; duplicate-safe semantics and status reconciliation prevent repeated payments.

## 56. A forecasting experiment uses data through June to predict July. A rolling average for a June training row accidentally includes July sales. What is the main problem?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Rolling averages are inherently prohibited:** Rolling averages can be legitimate when computed only from information available at prediction time.
- **B. Only the number of July rows matters:** The information timing, not the count of future rows, creates the leakage.
- **C. The feature construction crosses the prediction-time boundary — correct:** Future July observations would not exist when the June-row prediction is made; chronological splitting alone cannot fix that feature.
- **D. A chronological test split makes every feature automatically safe:** Time-respecting partitions do not repair features computed using later observations.

## 57. A small labeled image dataset is available, along with a model pretrained on relevant images. What does transfer learning offer?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. A guarantee that no task-specific evaluation is needed:** Pretrained performance does not establish performance on the new target population.
- **B. Permission to use all test labels for adaptation:** Adapting with reserved labels contaminates final evaluation.
- **C. A way to change the source images without model training:** Transfer learning concerns reusing learned model representations, not automatically rewriting images.
- **D. Reuse learned representations, then adapt and evaluate for the new task — correct:** Pretraining can reduce data and training needs, but domain fit and protected evaluation remain necessary.

## 58. Names are replaced with stable codes, but a protected lookup can reconnect each code to a person. Which statement is safest?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Stable codes automatically authorize public publication:** Changing identifiers does not create a lawful disclosure basis.
- **B. Only visible names can ever be personal data:** Identifiability can arise from codes and other linked attributes.
- **C. The data is pseudonymized, not automatically anonymous — correct:** A reidentification route remains, so personal-data protections cannot be dismissed merely because names were replaced.
- **D. The data is definitely anonymous for every purpose:** The stated lookup permits linkage back to identified people.

## 59. A canary is tested only on short English requests, while deployment includes long multilingual requests. What is missing?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. A guarantee that five minutes is always enough:** No universal rollout duration supplies missing population coverage.
- **B. A larger logo on the candidate page:** Branding does not repair unrepresentative traffic.
- **C. An assumption that language never affects model behavior:** Language and input length can affect quality, resource use, and latency.
- **D. Representative exposure and evaluation of important workload slices — correct:** Good performance on a convenient subset does not establish performance on excluded request types.

## 60. A benchmark costs SAR 24 for 400 responses, of which 300 meet the task's acceptance criteria. What is cost per acceptable response?

Domain 5. Topic: [Measure latency, throughput & useful cost](../index.html#lesson/d5-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. SAR 24:** Twenty-four is the total benchmark cost, not a per-outcome cost.
- **B. SAR 0.08 — correct:** The outcome-aligned denominator is 300, so 24/300 = SAR 0.08 per acceptable response.
- **C. SAR 0.06:** This is cost per generated response, using all 400 rather than the acceptable 300.
- **D. SAR 12.50:** This reverses the numerator and denominator for cost per acceptable response.

## 61. A team repeatedly adjusts features after seeing poor performance on its reserved test set. How should its next performance claim be qualified?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Rename the set 'audit' to restore independence:** A label change cannot undo the information already used for decisions.
- **B. That set has influenced selection; use a genuinely untouched evaluation for a fresh claim — correct:** Repeated test-driven changes turn the reserved set into tuning evidence, weakening an unbiased final estimate.
- **C. The set is still untouched because no training row was added:** Selection can leak evaluation information even without appending test rows to training.
- **D. Keep the best test score and omit the earlier trials:** Selective reporting hides the tuning process and exaggerates confidence.

## 62. A user request has a 12-second end-to-end budget. Validation consumed 2 seconds and retrieval 4 seconds. What remains for generation and all remaining handling?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. 10 seconds total:** This subtracts validation but omits retrieval time.
- **B. 8 seconds total:** This subtracts retrieval but omits validation time.
- **C. 6 seconds total — correct:** The remaining shared deadline is 12 − 2 − 4 = 6 seconds, not a new full budget for each stage.
- **D. 12 seconds for generation plus 12 for handling:** Per-stage resets violate the stated end-to-end budget.

## 63. In a transformer, what does attention primarily help compute?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Context-dependent combinations of relevant representations — correct:** Attention weights relationships among representations to build contextual information; it is not a truth detector.
- **B. A legally binding explanation of each decision:** Attention calculations do not create a legally sufficient explanation.
- **C. A guarantee that every referenced document is correct:** Relevance weighting does not verify external evidence.
- **D. A fixed lookup independent of the input context:** The central benefit is that weighting can depend on the context.

## 64. A blue-green switch moves traffic to a new model, but the new system also wrote an incompatible database format. What must rollback planning address?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only switching the load balancer back:** Routing alone cannot repair incompatible persistent state.
- **B. Deleting all production state as the default rollback:** Broad destructive deletion is not a safe general recovery plan.
- **C. The model's training score only:** Training quality does not establish state compatibility.
- **D. State and schema compatibility, not only the traffic switch — correct:** Returning traffic to the old version may fail if it cannot interpret state written by the new version.

## 65. An AI service needs a yes/no eligibility attribute but proposes collecting full identity documents for every request. What privacy principle is most directly at issue?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Higher storage capacity creates a lawful purpose:** Capacity does not justify collection or determine a legal basis.
- **B. A model's confidence replaces privacy review:** Prediction confidence cannot establish necessary or lawful processing.
- **C. Data minimization in relation to the necessary purpose — correct:** Collecting substantially more personal detail than the task requires needs justification rather than convenience alone.
- **D. Keeping all raw documents is automatically mandatory:** The kit does not establish universal raw-document retention for every AI task.

## 66. Cross-validation chooses preprocessing and model settings. Where should the final production candidate learn its preprocessing statistics before evaluation on an untouched test?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. From the untouched test only:** Learning preprocessing from the test lets evaluation information influence the pipeline.
- **B. From all rows including the test to maximize sample size:** More rows do not justify contaminating the reserved final assessment.
- **C. From whichever test slice makes the score largest:** Choosing preprocessing to improve test slices is test-driven tuning.
- **D. From the designated training data, excluding the untouched test — correct:** The final candidate can refit on the designated development training data while preserving test independence.

## 67. The median latency is good, but 5% of users wait more than 15 seconds. What should the performance report emphasize?

Domain 5. Topic: [Measure latency, throughput & useful cost](../index.html#lesson/d5-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Remove slow requests from measurement without disclosure:** Exclusion hides the service behavior experienced by those users.
- **B. Report training throughput as interactive latency:** Training throughput is a different workload and unit.
- **C. Tail latency and the conditions affecting those slow requests — correct:** A median alone hides the slow tail that may violate user-facing requirements.
- **D. Only the median because it summarizes every user equally:** The median does not describe how large the slowest delays are.

## 68. An assistant releases 80 staff hours each month, valued at SAR 60/hour, but no payroll or purchased-service cost changes. How should the benefit be reported?

Domain 7. Topic: [Define success, total cost & business value](../index.html#lesson/d7-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. SAR 4,800/month of estimated capacity value, not established cash savings — correct:** 80 × 60 = SAR 4,800 values released time. Realized use and a cash-saving mechanism need separate evidence.
- **B. SAR 4,800/month of guaranteed payroll reduction:** No payroll change has been established.
- **C. No potential benefit of any kind:** Released capacity can have value, but it should not be mislabeled as cash saved.
- **D. SAR 60/month because only the hourly rate matters:** Capacity value uses both the released hours and the stated value per hour.

## 69. Thousands of clients receive a temporary rate-limit response at the same time. Which retry policy is most helpful?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Every client retries immediately in an unlimited loop:** Synchronized unlimited retries can amplify the overload.
- **B. Retry malformed unauthorized requests indefinitely:** Permanent validation or permission failures are not repaired by repeated identical requests.
- **C. Remove all user deadlines so retries can continue forever:** An unbounded wait violates predictable user-facing failure handling.
- **D. Bounded retries with backoff, jitter, and respect for retry guidance — correct:** Spreading and limiting retries reduces synchronized load while retaining a controlled chance of recovery.

## 70. A text classifier uses an encoder model; a writing assistant uses a decoder-style model. Which distinction is most useful conceptually?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Both families must have identical inference workflows:** Architectural choices affect how inputs and outputs are processed.
- **B. Representing input context versus autoregressively generating output tokens — correct:** Encoder and decoder-style families often emphasize these different behaviors; a family label alone does not establish task quality.
- **C. Encoders always produce legally verified facts:** Encoding is a representation operation, not verification.
- **D. Decoders cannot use previous text:** Autoregressive generation explicitly conditions on earlier tokens.

## 71. What should a useful staged rollout define before live exposure?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Removal of control-version measurements:** Comparative evidence is valuable for identifying candidate-specific problems.
- **B. Observable success and stop criteria, ownership, and a tested fallback or rollback — correct:** Predefined conditions make the rollout a controlled decision process rather than an improvised launch.
- **C. Only a launch celebration date:** A date does not define how failures will be detected or controlled.
- **D. A promise never to revert the candidate:** A rollback pathway is important when measured behavior becomes unacceptable.

## 72. A team quotes a five-year processing-activity record requirement as permission to keep all raw prompts and attachments for five years. What distinction is missing?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Removing a filename makes attachments nonpersonal:** The content may still identify people or contain sensitive information.
- **B. Processing-activity records and underlying raw payloads are different records — correct:** The reviewed summaries do not turn an activity-record duty into universal retention of every prompt or document.
- **C. Every record and payload always has identical retention duties:** Retention requirements depend on record type, purpose, and applicable obligations.
- **D. Logging convenience overrides minimization:** Convenience does not itself justify broad personal-data retention.

## 73. An AI shipment-delay predictor is compared with a simple rule using carrier and route. Why is this rule useful as a baseline?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. It defines an official SDAIA passing score:** An application baseline has no role in establishing official exam thresholds.
- **B. It tests whether the more complex approach adds useful value — correct:** A practical simpler alternative provides context for quality, cost, and operational complexity.
- **C. It guarantees the AI model is unnecessary:** A baseline creates a comparison; it does not predetermine which approach is better.
- **D. It removes the need for held-out evaluation:** Both the baseline and candidate need honest evaluation on relevant examples.

## 74. Why can a 500-word paragraph consume more than 500 tokens?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. The token count is determined only by page width:** Text layout is not the tokenizer's unit of representation.
- **B. Tokenization may split words into multiple pieces and encode punctuation separately — correct:** Tokens are units defined by the tokenizer, not necessarily whole words.
- **C. Every word always equals exactly one token:** Word-to-token correspondence varies by text and tokenizer.
- **D. Tokens count only complete sentences:** A sentence can contain many tokens.

## 75. A test double returns a perfect canned model response. What does passing a consumer test with this double establish?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. The consumer handles that controlled response, not that the real model is correct — correct:** A test double helps isolate behavior but cannot prove the real provider's semantics or quality.
- **B. The deployed model never hallucinates:** A canned response does not test open-ended real-model behavior.
- **C. All real network failures are handled:** A successful fake response does not exercise network failure paths.
- **D. The provider's current contract is independently verified:** The fake could encode assumptions that differ from the actual provider.

## 76. The age distribution of users shifts, but outcome labels will arrive next month. What can currently be concluded?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Input distribution drift is observed; quality impact remains to be measured — correct:** A changed input distribution is evidence of data drift, not by itself proof of degraded target performance.
- **B. The model's accuracy has certainly fallen by the same percentage:** Input change does not directly quantify output correctness.
- **C. Concept drift is proved without any outcome evidence:** A changed relationship to outcomes needs evidence beyond the input distribution alone.
- **D. No monitoring is possible until all labels arrive:** Input and operational indicators can still reveal changes and risks.

## 77. A worker handles 25 jobs/minute and arrivals are 35 jobs/minute for 12 minutes. Starting from an empty queue and assuming constant rates, how large is the backlog?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. 420 jobs:** This counts all arrivals without subtracting completed work.
- **B. 300 jobs:** This is the number processed, not the backlog.
- **C. 10 jobs:** Ten is the growth per minute, not the total accumulated over 12 minutes.
- **D. 120 jobs — correct:** The queue grows by 35 − 25 = 10 jobs/minute; after 12 minutes it contains 120 jobs.

## 78. A very shallow tree makes similarly large errors on both training and validation data. After checking data quality, which hypothesis is most consistent with this pattern?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. The model should be selected because the errors match:** A small gap is not useful if both errors are unacceptable.
- **B. The model may be underfitting — correct:** Poor fit on both partitions can indicate insufficient capacity or unsuitable features; the pattern is a hypothesis, not proof.
- **C. The model is certainly memorizing training rows:** Memorization typically produces much better training than validation performance.
- **D. The validation set must have leaked into training:** Similar large errors do not establish leakage; the data flow requires separate investigation.

## 79. A proposed service transfers personal data outside Saudi Arabia. What does this kit authorize the team to conclude?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. A cheaper foreign region waives transfer duties:** Cost advantage does not override applicable requirements.
- **B. The kit's educational example is binding legal advice:** The summaries are explicitly educational, not authoritative translations or project-specific compliance decisions.
- **C. A current project-specific transfer review is needed; this kit is not approval — correct:** The reviewed summary is not a complete current inventory of instruments, adequacy decisions, or sector requirements.
- **D. Any provider with a security certificate is automatically permitted:** A certificate alone does not establish the applicable transfer route and safeguards.

## 80. Outcomes exist only for applications the model approved. Why is a reported approval-outcome accuracy not an all-applicant quality estimate?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Unobserved rejected cases must all be negatives:** Missing outcomes do not establish their true class.
- **B. A large approved sample removes selection bias:** More selected observations do not make excluded cases observable.
- **C. The labeled cohort is selected by the model's decisions — correct:** Rejected cases lack outcomes, so the observed subset may not represent every applicant.
- **D. Approval makes all outcomes independent of selection:** The approval decision defines who enters the labeled sample.

## 81. A model has an 8,000-token total context budget. Instructions use 900 tokens, history 1,600, retrieved text 3,000, and the planned output reserve 1,500. How much room remains?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. 3,400 tokens:** This does not subtract all four stated components.
- **B. 8,000 tokens:** The context budget is not entirely free after instructions, history, evidence, and output are allocated.
- **C. 1,000 tokens — correct:** The planned usage is 7,000 tokens, leaving 8,000 − 7,000 = 1,000 under the stated total-budget assumption.
- **D. 2,500 tokens:** This omits the 1,500-token output reserve from the shared budget.

## 82. An integration's happy-path test passes. Which additional test most directly addresses unsafe failure handling?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Repeat the same successful response with a different test name:** Renaming a happy-path test adds little failure coverage.
- **B. Measure only the source file's line count:** File length is not evidence of correct failure handling.
- **C. Check that the demo screenshot looks polished:** Visual polish does not exercise an integration's error paths.
- **D. Return malformed output or a dependency timeout and check the controlled fallback — correct:** Negative-path tests check how the system behaves when assumptions fail.

## 83. A completion rate rises from 60% to 72% after several simultaneous service changes. What is the honest description?

Domain 7. Topic: [Communicate evidence, uncertainty & tradeoffs](../index.html#lesson/d7-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. A 12-percentage-point rise, or 20% relative increase; AI causation is not isolated — correct:** 72 − 60 = 12 points and 12/60 = 20%. Concurrent changes prevent assigning causation to AI from before/after data alone.
- **B. A 12% relative increase proved to be caused by AI:** This confuses points with relative change and overstates causation.
- **C. A 20-percentage-point rise:** The arithmetic difference between the two percentages is 12 points.
- **D. No measurable change:** There is an observed increase, even though its cause remains uncertain.

## 84. A queue has 360 jobs. New work arrives at 20 jobs/minute and service capacity is 50 jobs/minute. Under these constant rates, how long does it take to drain?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. 18 minutes:** This divides by the arrival rate rather than net drain capacity.
- **B. The queue never drains:** Service capacity exceeds arrivals, so the existing backlog decreases.
- **C. 12 minutes — correct:** Net drain is 50 − 20 = 30 jobs/minute; 360/30 = 12 minutes.
- **D. 7.2 minutes:** Dividing by full service capacity ignores work arriving during the drain.

## 85. A candidate's training score falls slightly after regularization, while its protected validation score improves. What is the best interpretation?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Regularization has turned the task into clustering:** Regularization changes the fitting constraint, not the task's label structure.
- **B. The tradeoff may improve generalization; judge it against the relevant baseline and constraints — correct:** Regularization can reduce overfitting even when training fit becomes less perfect.
- **C. Any reduction in training score proves the model is worse:** Training performance alone is not the objective for unseen deployment examples.
- **D. Validation improvement guarantees identical production performance:** Validation is evidence under its conditions, not a guarantee under future distribution changes.

## 86. A public dependency package has a familiar name but a slightly different publisher. What should procurement or engineering verify?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Package identity, provenance, integrity, permissions, and applicable license — correct:** Supply-chain controls should verify what is actually being adopted, not rely on a similar name or download count.
- **B. Only whether the name sounds reputable:** Lookalike naming can conceal an unrelated or malicious package.
- **C. Only how many social-media mentions it has:** Popularity is not a substitute for provenance and suitability checks.
- **D. Nothing if the model generated the package recommendation:** A generated recommendation does not verify source identity or safety.

## 87. A feature silently becomes zero for most requests after a source update, while the endpoint remains available. What monitoring best detects this?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Only reviewing training accuracy from last year:** Historical training fit cannot detect this current source change.
- **B. Feature validity and distribution checks by source and version — correct:** Availability alone misses semantic pipeline failures; input checks can reveal a collapsed or corrupted feature.
- **C. Only checking that the port accepts connections:** A reachable service can still use invalid model inputs.
- **D. Only counting deployments per month:** Deployment activity does not measure feature integrity.

## 88. Two policy passages have similar embeddings. What can safely be inferred from this alone?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. The passages have identical meaning in every context:** Vector similarity is approximate and task-dependent, not a guarantee of equivalence.
- **B. They are similar under that representation, not necessarily equally true or authorized — correct:** Embedding proximity supports a retrieval relationship but does not establish correctness, recency, or permissions.
- **C. Both passages are current official policy:** Representation similarity does not verify publication status.
- **D. Every user is authorized to read both passages:** Authorization must be enforced separately from semantic similarity.

## 89. An LLM regression test expects exact wording, but valid answers vary in harmless phrasing. What is a better testing approach?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Remove every assertion because text is nondeterministic:** Variation does not eliminate the need to test meaningful requirements.
- **B. Accept any string if it is long enough:** Length does not verify the task's meaning or evidence use.
- **C. Freeze one sampled answer as proof of all future behavior:** A single string cannot cover the range of valid and unsafe outputs.
- **D. Test task invariants and grounded criteria while separately checking schema and critical text — correct:** Semantic criteria can allow acceptable variation without ignoring required fields or safety-critical content.

## 90. A predictor must model interactions such as a risk that increases only when both heat and humidity are high. Which concern is most relevant when using a plain linear model without interaction features?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Its additive form may not capture the joint pattern — correct:** Without suitable features, an additive linear model may miss a relationship that depends on combined inputs.
- **B. It cannot accept numerical weather inputs:** Linear models commonly accept numerical features; the issue is the relationship's form.
- **C. It necessarily memorizes every training observation:** Memorization is not an inherent property of a plain linear model.
- **D. It needs no evaluation because its coefficients are interpretable:** Interpretability does not establish predictive suitability or data quality.

## 91. Four inference replicas each handle 30 requests/second, but all rely on a retrieval service limited to 90 requests/second, one retrieval per request. What is the ideal shared limit before other overhead?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. 120 requests/second:** This ignores the stated shared dependency limit.
- **B. 360 requests/second:** Multiplying replica count by retrieval capacity invents independent retrieval services.
- **C. 30 requests/second:** Thirty is one inference replica's capacity, not the aggregate dependency-limited capacity.
- **D. 90 requests/second — correct:** The shared retrieval bottleneck bounds the nominal 120 requests/second inference capacity.

## 92. A drift alarm triggers after a legitimate seasonal change. What is a sensible next action?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Declare every changed input malicious:** Seasonality and legitimate population shifts can cause drift.
- **B. Investigate relevance and quality evidence before deciding on retraining or mitigation — correct:** Drift is a signal to diagnose; retraining should reflect evidence, causes, and release controls.
- **C. Automatically deploy any freshly retrained model:** A new artifact still needs evaluation and promotion gates.
- **D. Disable every drift check permanently:** One expected shift does not make future monitoring unnecessary.

## 93. A model-serving process only needs to read one approved dataset. Which access design follows least privilege?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Share every employee's credentials with the process:** Shared broad credentials undermine access boundaries and accountability.
- **B. Let the model choose its own account permissions:** Permission granting should be controlled outside model output.
- **C. Grant the narrow necessary read permission without unrelated write or administrative access — correct:** Least privilege restricts the service to permissions needed for its assigned function.
- **D. Grant administrator access because configuration is easier:** Convenience does not justify broad unnecessary authority.

## 94. A support assistant generates fluent but unsupported details about a product warranty. What is the key limitation?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Plausible language generation is not evidence of factual grounding — correct:** A fluent output may be a hallucination; warranty claims need reliable evidence and suitable refusal behavior.
- **B. Fluency guarantees a valid citation:** Smooth wording does not supply or verify a source.
- **C. A longer answer necessarily has better grounding:** Length can add more unsupported content rather than improve accuracy.
- **D. An embedding index automatically eliminates fabrication:** Retrieval can help grounding but does not guarantee correct use of evidence.

## 95. A fraud review model flags 40 transactions: 30 are fraud. Another 20 fraud transactions are missed. What are precision and recall?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Precision 60%; recall 75%:** This reverses the predicted-positive and actual-positive denominators.
- **B. Precision 75%; recall 40%:** There are 50 actual fraud cases; recall is 30/50, not 20/50.
- **C. Precision 100%; recall 60%:** Ten of the 40 flagged transactions are false alerts, so precision is below 100%.
- **D. Precision 75%; recall 60% — correct:** Precision = 30/40 = 75%; recall = 30/(30 + 20) = 60%.

## 96. An intermittent integration failure cannot be reproduced from the report. Which record would most improve diagnosis without requiring unrestricted raw-payload retention?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Correlated version, configuration, timing, and safely minimized input/output evidence — correct:** Reproducibility needs relevant context under access and retention controls, not indiscriminate capture of sensitive payloads.
- **B. Only the phrase 'AI failed':** This lacks the versions, conditions, and observations needed to isolate a failure.
- **C. Every user's full private record retained forever:** Broad indefinite retention is not justified by the need for diagnosis.
- **D. Only the application's logo and release date:** Branding and a date do not identify the failed request's technical conditions.

## 97. A model's recommendations shape what users choose, and only chosen items get outcome labels. What long-term issue should be examined?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. A guarantee that recommendations are now unbiased:** System-influenced exposure can create rather than remove bias.
- **B. An impossibility of collecting any outcome evidence:** Evidence can be collected, but its selection mechanism must be understood.
- **C. A purely static dataset with no system influence:** The scenario explicitly describes model-induced changes in exposure.
- **D. A feedback loop that changes exposure and the future training sample — correct:** The system influences both observed behavior and which outcomes are available, potentially reinforcing its own preferences.

## 98. A supplier's demo uses only ten easy cases. A manager requests a statement that the system is ready for all users. What should the team communicate?

Domain 7. Topic: [Communicate evidence, uncertainty & tradeoffs](../index.html#lesson/d7-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. That ten successes guarantee every production case:** A small convenient sample cannot establish universal performance.
- **B. Only the model's confidence wording:** Self-reported confidence does not describe evidence coverage or uncertainty.
- **C. That no decision can ever be made with incomplete information:** Decisions can be staged using explicit uncertainty, safeguards, and further evidence.
- **D. The limited evidence and a plan to test representative and high-risk cases before approval — correct:** A useful briefing states what is known, unknown, and needed for a decision instead of overstating a small demonstration.

## 99. A batch takes 200 ms of computation for 10 requests, and a request may wait 40 ms for the batch to form. Which statement is correct under these simplified assumptions?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Every request completes in 20 ms:** Dividing batch compute by batch size estimates throughput contribution, not each request's wall-clock wait.
- **B. Throughput is 5 requests/second; wait is 40 ms:** This miscalculates throughput and omits computation time.
- **C. Batch formation never affects latency:** The stated 40-ms formation wait is part of user-visible delay.
- **D. Nominal compute throughput is 50 requests/second; that request can wait 240 ms — correct:** Ten requests per 0.2 seconds gives 50/s; batching delay adds 40 ms to the 200-ms computation for the described request.

## 100. A training source can be edited by unknown external contributors. Which risk deserves explicit controls?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A purely cosmetic formatting concern:** Changes can affect targets and model behavior, not just appearance.
- **B. An exemption from validating the dataset:** External editing increases the need for source and content controls.
- **C. Poisoning through manipulated training examples or labels — correct:** An attacker-controlled contribution path can influence learned behavior; provenance, review, and evaluation help reduce that risk.
- **D. A guarantee that more contributors eliminate bias:** Contributor count does not establish trustworthy content.

## 101. A company changes its policies weekly. The assistant needs current policy facts without retraining for every update. Which approach best targets that need?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Raise sampling temperature to discover the latest policy:** Sampling variability cannot fetch current authoritative facts.
- **B. Remove all evidence to reduce context length:** Removing sources worsens the current-fact requirement.
- **C. Maintain authorized current retrieval sources and ground responses in them — correct:** RAG targets changing external knowledge, with freshness, permissions, and grounded-answer evaluation still required.
- **D. Fine-tune once and assume policies remain current forever:** A one-time weight update does not automatically incorporate weekly changes.

## 102. A classifier correctly identifies 18 positives, produces 6 false alerts, and misses 6 positives. What is its F1 score?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. 100%:** False alerts and missed positives prevent a perfect F1 score.
- **B. 75% — correct:** F1 = 2TP/(2TP + FP + FN) = 36/48 = 75%.
- **C. 50%:** The relevant denominator is 48, not twice the number of correctly identified positives.
- **D. 60%:** This value does not follow from the stated precision, recall, or F1 denominators.

## 103. An illustrative availability SLO allows 1% bad requests in a 50,000-request window. With 420 bad requests observed, what budget remains?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. 500 bad requests:** Five hundred is the total allowance, not the remaining budget after observed failures.
- **B. 420 bad requests:** Four hundred twenty is consumed budget, not what remains.
- **C. 4,580 bad requests:** This incorrectly uses a 10% allowance rather than the stated 1%.
- **D. 80 bad requests — correct:** The allowance is 50,000 × 0.01 = 500; 500 − 420 = 80 remain in that stated window.

## 104. A retrieval service returns another department's restricted document because it is highly relevant. Where should the access problem be prevented?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. By sorting restricted documents lower but still returning them:** Ranking does not remove unauthorized access.
- **B. By treating all semantically similar documents as public:** Similarity does not change a document's access classification.
- **C. At enforced authorization boundaries before unauthorized evidence reaches the model or user — correct:** Relevance is not permission; retrieval and downstream access must respect the user's rights.
- **D. Only by asking the model not to quote secrets:** A prompt is not a reliable boundary once unauthorized evidence is exposed.

## 105. A prompt includes three demonstrations of the desired response style, but no training process runs. What has changed?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. The base model has been compressed:** Prompt examples do not quantize or distill the underlying model.
- **B. The examples have become verified test labels:** Demonstrations are instructions or context, not automatically protected evaluation evidence.
- **C. The input context, not the model's learned weights — correct:** Examples supplied in a prompt can influence this inference without constituting parameter training.
- **D. The model's parameters have been permanently fine-tuned:** Fine-tuning requires a training update, not merely sending prompt examples.

## 106. A browsing assistant follows a malicious instruction embedded in a retrieved web page. What type of attack is this?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. A normal authorized system update:** A web page is not entitled to replace the application's trusted instructions.
- **B. A guaranteed calibration improvement:** The attack concerns instruction hijacking, not probability calibration.
- **C. A harmless formatting change:** The described behavior redirects the assistant's actions.
- **D. Indirect prompt injection — correct:** The malicious instruction arrives through external content rather than a direct trusted instruction channel.

## 107. A team proposes caching personalized AI answers using only the question text as a key. What is the critical concern?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. The cache may reuse an answer across users with different permissions or context — correct:** Keys, scope, invalidation, and access checks must prevent unauthorized or stale reuse.
- **B. Caching always lowers quality to zero:** Caching can be useful when its validity and security boundaries are designed correctly.
- **C. Identical text proves identical authorization:** Users asking the same words can have different access rights.
- **D. A faster cache lookup establishes legal compliance:** Latency does not demonstrate lawful or authorized disclosure.

## 108. A rare but dangerous defect detector offers two validation thresholds. Lowering the threshold finds more defects but doubles alerts beyond reviewer capacity. What is the best decision process?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Select on final test results until the workload matches:** Threshold selection belongs in validation; using the final test repeatedly contaminates assessment.
- **B. Evaluate error costs and achievable review capacity together before choosing the threshold — correct:** A useful threshold must balance harm from misses with false-alert burden and a workable response pathway.
- **C. Always use the lowest threshold regardless of capacity:** Unprocessed alerts can undermine the intended safety benefit.
- **D. Choose the threshold with the fewest alerts without checking misses:** Reducing workload alone ignores the stated cost of missed dangerous defects.

## 109. An alert says 'CPU rose', but users remain within all service targets. A second alert says 'urgent requests are timing out'. Which is more directly actionable for user impact?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Neither, because infrastructure metrics replace service targets:** User-facing failures remain important even when a resource metric is available.
- **B. Whichever alert uses a brighter color:** Display styling does not determine operational severity.
- **C. The urgent-request timeout alert — correct:** A user-visible symptom linked to a response plan is more directly actionable; CPU remains useful diagnostic context.
- **D. CPU alone, regardless of any user symptoms:** Resource change can be harmless or expected and needs context.

## 110. An assistant emits a valid JSON action with an account ID that the user does not own. What check is still required?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Ask the model to rate its own confidence instead of checking ownership:** Self-confidence does not establish access rights.
- **B. Allow the operation if the account ID has the expected number of characters:** Identifier format is not proof of ownership.
- **C. Validate business meaning and the user's authorization for the referenced account — correct:** Schema validity checks structure, not whether the operation is permitted or appropriate.
- **D. No further check because JSON is structured:** Well-formed data can request an unauthorized action.

## 111. An assistant retrieves the correct passage but consistently reverses an exception when answering. Which layer should be examined first?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Delete the exception from the source policy:** Changing authoritative content to hide a model weakness is not a legitimate repair.
- **B. Treat any retrieved citation as proof of answer correctness:** A citation can accompany an answer that contradicts its source.
- **C. How the model interprets and uses the retrieved evidence — correct:** Relevant evidence already reaches the model, so grounded reasoning and response construction are the immediate failure location.
- **D. Assume a larger retrieval index will automatically solve it:** More passages do not directly correct misinterpretation of a passage already retrieved.

## 112. Two screening models have equal accuracy. Model A misses many urgent cases; Model B detects more urgent cases but raises more false alerts. What additional information is essential for a useful comparison?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Their error counts, error costs, and review capacity — correct:** Equal accuracy can hide very different recall and false-alert burdens; suitability depends on the operating context.
- **B. Only which model has a shorter name:** Naming gives no evidence about error harms or operational fit.
- **C. Whether either training accuracy is exactly 100%:** Training accuracy does not resolve the deployment tradeoff between these two error types.
- **D. The overall accuracy rounded to fewer digits:** Less precise reporting conceals rather than explains the relevant error pattern.

## 113. An assistant's response is inserted into an administrative page as executable content. What safeguard addresses the downstream risk most directly?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Ask the model to include the word 'safe' in its response:** A label is not an execution boundary or content-handling safeguard.
- **B. Remove all audit trails for generated actions:** Reduced traceability does not prevent unsafe output handling.
- **C. Treat output as untrusted and apply context-appropriate safe handling and validation — correct:** Generated text must not gain execution authority simply by entering a downstream component.
- **D. Assume output from a trusted model is safe to execute:** A model can produce unsafe content even when its provider is trusted.

## 114. The build team sends a runbook, but the operations team has not accepted support ownership or practiced recovery. What is still missing?

Domain 7. Topic: [Collaborate through ownership, review & handoffs](../index.html#lesson/d7-l4). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A rule that the model owns every incident:** A model cannot replace accountable operational roles.
- **B. A claim that RACI automatically satisfies privacy law:** A collaboration matrix is not a substitute for legally required roles or duties.
- **C. An accepted operational handoff with demonstrated capability and responsibilities — correct:** Sending files is not the same as the receiving team accepting and being able to perform its duties.
- **D. Only a declaration that the handoff was complete:** A declaration does not supply acceptance, training, or tested recovery.

## 115. A model outage triggers a rule-based fallback. What must have been assessed before relying on that fallback?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Nothing, because deterministic rules cannot fail:** Rules can be wrong, incomplete, overloaded, or mismatched to the task.
- **B. Its safety, quality limits, capacity, and activation conditions for the intended users — correct:** A fallback is a separate operating behavior with its own constraints, not automatically a safe substitute.
- **C. Only that the fallback's source file exists:** Existence does not establish effectiveness under outage load.
- **D. Only that it returns faster than the model:** Speed does not prove safe or useful decisions.

## 116. A cloud service has low hardware rental cost but high data movement and specialist support costs. What comparison should guide placement?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Workload-specific total cost, requirements, and operational responsibilities — correct:** Hardware price alone omits important incremental costs and constraints; cloud, on-premises, and hybrid options need an aligned comparison.
- **B. Only the advertised accelerator hourly price:** The scenario explicitly identifies material costs beyond rental.
- **C. Assume on-premises has no staffing or maintenance cost:** Local infrastructure also has ongoing responsibilities and costs.
- **D. Assume cloud scaling overrides all data requirements:** Placement must respect applicable access, processing, and transfer requirements.

## 117. Fine-tuning improves a model's tone on examples similar to training. What evaluation is still needed before deployment?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only the examples used for fine-tuning:** Training examples are familiar and cannot provide an independent generalization check.
- **B. Only a check that parameter files exist:** Artifact existence is not evidence of useful or safe behavior.
- **C. No evaluation if the training loss decreased:** Lower training loss does not establish deployment performance.
- **D. Held-out task cases, including factuality, safety, and important failure slices — correct:** Style adaptation does not establish correctness or safety on unseen inputs.

## 118. A document tells a retrieval assistant to ignore its instructions and export private files. How should the application treat this text?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. As authorization from every affected data owner:** Text within a document cannot grant unrelated users' permissions.
- **B. As safe whenever the document also contains useful facts:** Useful factual content can coexist with malicious instructions.
- **C. As untrusted source content, not as authority to change tool permissions — correct:** Retrieved text may contain indirect prompt injection; enforced permissions must remain independent of it.
- **D. As a new system instruction because it came from search:** Retrieval does not promote external content into trusted control instructions.

## 119. A support-routing classifier has 90% accuracy on 900 routine tickets and 30% on 100 urgent tickets. Why is its overall score alone insufficient?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. The large routine group can hide poor urgent-ticket performance — correct:** The weighted overall accuracy is 84%, while the urgent slice performs much worse and may carry greater harm.
- **B. Both groups must have exactly 84% accuracy:** A weighted aggregate does not imply each constituent group has the same performance.
- **C. Urgent tickets should be excluded because they reduce the score:** Removing the difficult important slice would misrepresent deployment usefulness.
- **D. The smaller group cannot have a meaningful error rate:** A smaller sample needs uncertainty reporting but its errors still matter.

## 120. A defensive prompt blocked all known injection examples in a small test set. What is the honest claim?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Tool authorization can now be removed:** External enforcement remains necessary even when prompt defenses help.
- **B. Every retrieved source is now trusted control text:** Successful tests do not change the trust status of external content.
- **C. It worked on that test set; layered controls and further evaluation remain necessary — correct:** A finite successful test does not guarantee prevention against all future attacks.
- **D. Prompt injection has been permanently eliminated:** No universal immunity follows from a small set of tests.

## 121. A live candidate is harming user decisions. The cause is still uncertain. What is the best immediate incident priority?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Contain harm with a safe mitigation and coordinate evidence-preserving investigation — correct:** Incident response prioritizes user protection while assigning ownership, communication, and diagnosis.
- **B. Keep harmful serving unchanged until the final root-cause report:** Waiting for complete diagnosis can prolong avoidable harm.
- **C. Delete all records to make rollback look successful:** Destroying evidence undermines diagnosis and accountability.
- **D. Retrain blindly on the incident traffic and deploy immediately:** Unreviewed retraining may not fix the cause and can introduce new failures.

## 122. A student model learns to approximate a larger teacher. Which technique is being described?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. A guaranteed lossless copy:** Approximation can change behavior; it is not automatically identical to the teacher.
- **B. Distillation — correct:** Distillation trains a smaller or different student from teacher behavior; its actual quality still needs independent evaluation.
- **C. Caching:** Caching stores reusable results rather than training a student model.
- **D. Load balancing:** Load balancing distributes requests among serving instances.

## 123. An assistant answers 90 of 150 eligible requests, and 72 answers pass review. What are answer coverage and passing-answer rate among answered requests?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. 60% coverage; 48% of answers pass:** Forty-eight percent uses all eligible requests rather than the 90 answered requests.
- **B. 60% coverage; 80% of answers pass — correct:** Coverage = 90/150 = 60%; passing-answer rate = 72/90 = 80%. These are distinct denominators.
- **C. 80% coverage; 60% of answers pass:** This swaps the eligible-request and answered-request denominators.
- **D. 48% coverage; 80% of answers pass:** Forty-eight percent is 72/150, the eligible requests receiving a passing answer, not answer coverage.

## 124. Two delivery-time predictions have absolute errors of 1 and 5 hours. What are MAE and RMSE?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. MAE 2 hours; RMSE 3 hours:** These values do not follow from the stated absolute errors.
- **B. MAE 3 hours; RMSE √13 hours — correct:** MAE = (1 + 5)/2 = 3; RMSE = √((1² + 5²)/2) = √13, about 3.61 hours.
- **C. MAE 3 hours; RMSE 13 hours:** Thirteen is the mean squared error; RMSE takes its square root.
- **D. MAE 6 hours; RMSE √26 hours:** Both metrics average the two errors rather than summing them.

## 125. A provider changes its response field from 'score' to 'probability'. Why can a model adapter be useful?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. It guarantees the two fields mean exactly the same thing:** Names alone do not establish semantic equivalence; that must be verified.
- **B. It removes the need to test consumers:** Consumers and adapter behavior still need compatibility validation.
- **C. It lets each consumer silently interpret the provider differently:** Centralization is meant to reduce inconsistent assumptions, not encourage them.
- **D. It centralizes translation to the application's stable internal contract — correct:** An adapter isolates provider-specific changes, with semantic checks and tests still required.

## 126. A latency objective is '95% of completed requests under two seconds'. What additional service indicator prevents an apparently good result from hiding dropped requests?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Successful completion or failure rate over all eligible requests — correct:** Measuring only completed requests can exclude timeouts and drops; the denominator must expose those failures separately.
- **B. Only the median of those same completed requests:** Another statistic on the same selected subset still excludes dropped requests.
- **C. Only the number of model parameters:** Parameter count does not reveal missing or failed requests.
- **D. Only the average answer length:** Text length is not a completion or availability indicator.

## 127. Assume the reviewed Implementing Regulation Article 24 authority-notification condition applies to a breach. The controller became aware 57 hours ago. How much of that 72-hour window remains?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. 15 hours, and affected subjects must always wait until the authority reply:** Subject notification without undue delay is separate and is not universally contingent on an authority reply.
- **B. No clock applies because operational mitigation has started:** Starting containment does not automatically remove an applicable notification duty.
- **C. 15 hours; separate subject notification and response duties still need attention — correct:** 72 − 57 = 15 hours from controller awareness under the stated condition. This does not give a universal delay for subject notification or containment.
- **D. 72 more hours from the next management meeting:** The stated clock begins at controller awareness, not a later meeting.

## 128. An AI tool has 200 eligible staff users. Training attendance is 180, but only 50 users complete the intended task appropriately each week. What weekly adoption rate best reflects the stated outcome?

Domain 7. Topic: [Prioritize work & manage adoption and change](../index.html#lesson/d7-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. 100% because the tool was launched:** Launch availability does not establish adoption.
- **B. 25% of eligible users — correct:** The outcome-based adoption rate is 50/200 = 25%; attendance is a different activity measure.
- **C. 90% because 180 attended training:** Training attendance does not establish sustained appropriate use.
- **D. About 28% because 50/180 attended:** This changes the denominator from all eligible users to trainees.

## 129. A summarizer has excellent average ratings, but its few omitted exceptions could change medical decisions. What is the best evaluation response?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Accept the average as proof that all individual summaries are safe:** An aggregate score does not bound every case's harm.
- **B. Use only longer summaries as a safety metric:** Length does not establish preservation of essential exceptions.
- **C. Exclude medical cases from the report but keep serving them:** Hiding a deployed high-risk slice does not mitigate its risk.
- **D. Add targeted exception-preservation and high-harm cases with qualified review — correct:** An average can conceal dangerous failures; the evaluation must reflect consequences and specialist judgment.

## 130. A demand forecast has occasional very large errors. Which metric more strongly emphasizes those errors, and why?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. MAE, because every error is squared:** MAE uses absolute errors, not squared errors.
- **B. Accuracy, because numerical deviations are always class labels:** Accuracy needs a classification definition and is not a direct numerical-error measure here.
- **C. Recall, because it measures the size of every forecasting miss:** Recall concerns detected positives, not numerical forecast-error magnitude.
- **D. MSE, because squaring increases the relative influence of large errors — correct:** Squared loss gives large deviations greater weight than a linear absolute-error penalty.

## 131. An illustrative recovery plan targets RTO 20 minutes and RPO 5 minutes. Service returns after 26 minutes, with a 3-minute data gap. What is the result?

Domain 5. Topic: [Choose placement & rehearse resilient recovery](../index.html#lesson/d5-l6). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. RTO met; RPO missed by 2 minutes:** This reverses recovery duration and data-loss objectives.
- **B. Both missed by 6 minutes:** The data gap is smaller than the RPO and does not miss it.
- **C. RTO missed by 6 minutes; RPO met — correct:** Recovery took 26 rather than at most 20 minutes; the 3-minute data gap is within the 5-minute allowance.
- **D. Both targets met:** The recovery duration exceeds the stated RTO.

## 132. A RAG service's facts become stale even though its model weights are unchanged. Which operational check most directly addresses this?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only verifying the model file checksum:** An unchanged model checksum says nothing about updated source documents.
- **B. Raising output length for every response:** Longer output cannot refresh stale evidence.
- **C. Disabling citations to avoid visible old dates:** Concealing source dates does not repair knowledge freshness.
- **D. Source publication, ingestion, index freshness, and retrieval-version checks — correct:** The knowledge path can become outdated independently of the model artifact.

## 133. An embedding-model upgrade changes vector dimensions. Which associated component most clearly needs compatibility review?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. No component because every vector model shares a space:** Different models can have different dimensions and incompatible spaces.
- **B. The vector index and query embedding pipeline — correct:** Stored and query vectors must have compatible dimensions and representation semantics; reindexing may be required.
- **C. Only the color of the search button:** Visual styling does not determine vector compatibility.
- **D. Only the billing address of the project sponsor:** A sponsor's address is unrelated to embedding representation compatibility.

## 134. An organization appoints a Responsible AI Officer under the reviewed ethics framework. What should it not assume?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. That accountability should be documented:** Documented responsibilities support governance rather than conflict with it.
- **B. That specialist review can be required:** An ethics appointment does not remove the need for specialist expertise.
- **C. That this appointment automatically satisfies every legally required privacy role — correct:** Ethics-framework roles and statutory privacy duties are distinct; project-specific requirements still need review.
- **D. That the officer can help coordinate ethical controls:** Coordination is a reasonable ethics-governance function; the issue is automatic equivalence with legal roles.

## 135. An agent can draft purchase requests. A proposed change lets it also approve unlimited payments. What is the most important boundary?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Keep narrow permissions and enforce approval for high-impact payment actions outside the model — correct:** A draft assistant should not acquire unrestricted financial authority merely because it can generate a request.
- **B. Give the agent a stronger instruction to be careful and remove approval:** Prompt wording is not an enforceable financial authorization boundary.
- **C. Allow all payments when the model reports high confidence:** Self-reported confidence does not establish authorization or transaction safety.
- **D. Hide payment logs so the model has less context:** Reduced auditability does not provide permission control.

## 136. A score ranks risky cases well, but among cases assigned 0.8 risk only about 0.5 experience the event. Which problem is illustrated?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. The event must occur in every case with nonzero risk:** A probability is not a deterministic promise of an individual outcome.
- **B. Poor probability calibration despite useful ranking — correct:** Ranking and calibration are distinct; an 0.8 probability should correspond roughly to an 80% event frequency under the assessed conditions.
- **C. Perfect calibration because high-risk cases rank first:** Ordering cases correctly does not make the probability magnitudes reliable.
- **D. No useful ranking is possible:** The scenario explicitly states that ranking is good; calibration can fail independently.

## 137. Generated answers appear grounded, but failures concentrate when a particular retrieval filter is enabled. Which observation record is most useful?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Assume grounded wording proves retrieval cannot be involved:** Plausible grounded phrasing is not evidence that every retrieval step was correct.
- **B. Correlate request outcomes with prompt, filter, index, and model versions under privacy controls — correct:** Version-aware traces help isolate a pipeline component while minimizing and protecting sensitive evidence.
- **C. Store only the final average score without component versions:** An average hides the version-specific relationship needed for diagnosis.
- **D. Retain all raw private prompts indefinitely by default:** Unrestricted retention is not justified by observability needs.

## 138. A deletion error is replicated instantly to every live copy of a document index. Why is replication alone insufficient for recovery?

Domain 5. Topic: [Choose placement & rehearse resilient recovery](../index.html#lesson/d5-l6). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Replication can propagate the same error; recovery needs tested restorable state — correct:** Copies of current damaged state do not provide an earlier valid recovery point.
- **B. Every replica is automatically an independent historical backup:** Live replication need not preserve earlier versions.
- **C. The index can always be restored without its source documents:** Recoverability depends on retained authorized sources and compatible rebuild procedures.
- **D. More replicas prove the deletion was authorized:** Availability design does not establish permission for a data operation.

## 139. A new team receives model files but no contract, failure policy, or owner contact. What is the main engineering gap?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Too few social-media announcements:** Announcements do not supply operational documentation or acceptance.
- **B. A need to remove version information:** Version evidence improves maintainability and should be preserved.
- **C. An incomplete operational and maintenance handoff — correct:** Files alone do not explain intended inputs, limitations, dependencies, failures, and who accepts ongoing responsibility.
- **D. A missing claim of perfect accuracy:** A guarantee would be misleading and would not repair the handoff.

## 140. An entity completes optional ethics registration and receives a motivational adoption badge. Which interpretation is correct?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. No post-deployment monitoring is now needed:** Lifecycle controls continue after registration and release.
- **B. This is distinct from legal compliance and from an individual's AI Engineer exam award — correct:** The kit separates framework adoption recognition, statutory duties, and assessment badge levels.
- **C. The entity is exempt from personal-data law:** Optional registration does not waive statutory duties.
- **D. Every employee has passed the Expert exam:** Entity adoption recognition is not an individual assessment result.

## 141. An automatic evaluator scores generated answers. Why should a team check agreement with qualified human review?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. The evaluator itself can be biased or miss task-specific failures — correct:** An automated judge is another imperfect measurement system and needs validation against the task's criteria.
- **B. An evaluator model is always an objective ground truth:** Its model status does not eliminate error, bias, or rubric sensitivity.
- **C. Human review is useful only when every score is zero:** Calibration and spot checks are useful across the score range.
- **D. High evaluator speed proves correct judgments:** Throughput and judgment validity are separate properties.

## 142. Model A improves validation MAE slightly but violates the application's response-time limit. Model B meets the limit and has acceptable MAE. What is the most defensible choice?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Choose A solely because its MAE is smaller:** This ignores a stated operational requirement.
- **B. Average the two MAEs and call the pair compliant:** Averaging scores does not repair A's latency or define a feasible combined system.
- **C. Evaluate neither because the metrics differ:** The candidates can be compared against the same application requirements.
- **D. Choose using quality and operational constraints together; B may be the viable candidate — correct:** The best unconstrained metric is not automatically the best deployable system.

## 143. Cost per request falls after an assistant starts refusing most requests. What must be measured before calling this an efficiency improvement?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Coverage and useful completed outcomes alongside cost — correct:** Cheap refusal can reduce cost while reducing service value; cost should be aligned with useful outcomes.
- **B. Only total token spend:** Lower spend alone does not show that users received useful assistance.
- **C. Only the provider's unit price:** A price ignores changed behavior and task completion.
- **D. Nothing else if the bill is lower:** A smaller bill can accompany a failed service.

## 144. An engineer evaluating vendors has a financial interest in one supplier. What is the most responsible response?

Domain 7. Topic: [Practice integrity, escalation & continuous learning](../index.html#lesson/d7-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Disclose the interest and follow an independent conflict-management process — correct:** Disclosure is necessary but may need recusal or independent review; evidence-based evaluation and confidentiality still matter.
- **B. Disclose privately and continue controlling every decision without review:** Disclosure alone does not necessarily manage the influence on procurement.
- **C. Hide the interest if the supplier has a strong demo:** A favorable demo does not remove the conflict or the duty of honesty.
- **D. Share confidential competitor information to balance the process:** Unauthorized disclosure creates another professional and confidentiality problem.

## 145. A recovery exercise restores an old dataset containing records that should now be deleted or access-restricted. What must the recovery process include?

Domain 5. Topic: [Choose placement & rehearse resilient recovery](../index.html#lesson/d5-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Declare RTO met as proof that all data duties are satisfied:** Recovery speed is not evidence of lawful processing or current permissions.
- **B. Reapply current deletion and access obligations before safe service restoration — correct:** Recovery must preserve current data governance requirements, not merely return to a technically working historical state.
- **C. Ignore current obligations because backup data is exempt:** A backup does not automatically waive applicable duties.
- **D. Publish every restored record to prove completeness:** Broad disclosure creates an additional access and privacy problem.

## 146. A design review sees that every screen independently parses provider-specific AI output. Which change most improves maintainability?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Put undocumented conversion rules in user-facing captions:** Captions are not a reliable integration contract or maintenance boundary.
- **B. Define a shared validated internal contract and a focused provider adapter — correct:** A common boundary reduces scattered interpretation and makes provider changes easier to test.
- **C. Copy one parser into still more screens:** Duplication expands the number of places that can diverge.
- **D. Ignore parsing failures because outputs usually look right:** Rare malformed outputs still require controlled handling.

## 147. A project adopts NIST's Govern, Map, Measure, Manage structure. How should it describe the structure in a Saudi project report?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A verified exhaustive official exam syllabus:** The source is not a SDAIA objective-by-objective syllabus.
- **B. A guarantee that every risk has been eliminated:** Organizing risk work does not prove zero residual risk.
- **C. Voluntary risk-management guidance alongside applicable local obligations — correct:** NIST's framework supports risk practice but is not itself Saudi law or a legal exemption.
- **D. A complete replacement for Saudi statutory duties:** A general guidance framework cannot override applicable law.

## 148. A prompt is revised repeatedly using the same 40 evaluation cases. Its score rises. What is the best way to assess whether the improvement generalizes?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Use the prompt's length as the final quality measure:** Prompt length is not evidence of successful task behavior.
- **B. Test on a fresh reserved set covering the intended use and failure modes — correct:** The repeatedly used cases have become development evidence; unfamiliar evaluation is needed for a fresh claim.
- **C. Report only the best score on the 40 familiar cases:** That conceals selection on the evaluation set and may reflect overfitting.
- **D. Reorder the same 40 cases and call them unseen:** Changing order does not remove case familiarity.

## 149. A team compares precision-recall results from two datasets with very different positive-class prevalence. What caution is needed?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. A high score on the easier dataset proves improvement everywhere:** Different populations make that generalization unsupported.
- **B. Replace precision with training accuracy and ignore population differences:** Training accuracy neither preserves evaluation independence nor resolves the population mismatch.
- **C. Precision depends on prevalence, so compare on a representative common evaluation basis — correct:** A change in class mix can change precision without proving a better model; task and population must be aligned.
- **D. Precision is invariant to the population's class mix:** False-positive counts relative to true positives can change with prevalence.

## 150. A prompt change improves helpfulness but worsens refusal on prohibited actions. How should LLMOps treat it?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. As a behavior-changing release requiring quality and safety regression gates — correct:** Prompt releases can alter multiple criteria and need whole-system review.
- **B. As harmless text editing outside release control:** Instructions directly affect model behavior and safety boundaries.
- **C. As approved whenever average helpfulness rises:** A required safety condition cannot be offset by an unrelated average gain.
- **D. As proof that refusal tests should be removed:** The regression reveals a reason to retain and improve those tests.

## Scoring and repair

Score = correct answers / 150 × 100%. Each question has one point; no extra domain multiplier. Unanswered questions are incorrect. No official passing score or badge classification is inferred. Group misses by domain and lesson, work the related example without notes, and explain the distractors. A retake is familiar practice.

Source provenance and legal/financial limits: [Sources & exam facts](sources-and-exam-facts.md).
