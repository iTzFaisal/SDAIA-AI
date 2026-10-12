# Mock 3 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

Use after the separate paper. Letters refer to its fixed order, not shuffled website letters. The lesson links below identify the existing teaching and reviewed references behind each question.

## 1. Two experiments use identical data snapshots but different label-exclusion rules. Their scores differ. What must their tracking records expose?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only the winning score:** That hides the population difference that affects interpretation.
- **B. An assertion that identical snapshots imply identical cohorts:** Different exclusion rules can select different examples from the same snapshot.
- **C. Only the model's file size:** It does not document sample construction.
- **D. Cohort construction and inclusion rules alongside dataset identity — correct:** A snapshot name alone does not define which examples were actually evaluated.

## 2. A warehouse wants to predict whether an item needs manual inspection before packing. Historical 'inspection' labels record the old routing rule, not independent defect checks. What must be clarified first?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Whether the label represents routing decisions or the actual quality outcome — correct:** Learning the old decision can reproduce that policy without learning true defects; define the intended target and evidence.
- **B. Which classifier has the most parameters:** Model size cannot resolve a target that measures the wrong outcome.
- **C. Whether routing labels can be renamed 'defects':** Renaming does not turn past decisions into verified defect observations.
- **D. Whether all historical inspections should be treated as defective:** An inspection request does not establish that a defect was found.

## 3. A puzzle solver needs to find a sequence of legal moves to reach a specified configuration. There are no historical labels to fit. Which framing fits?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. State-space search with defined states, actions, and goal — correct:** The task explores legal transitions to reach a goal; it need not be framed as supervised prediction.
- **B. Regression of a supplied continuous target:** No numerical training target is described.
- **C. Classification of labeled puzzle photographs:** The task is to construct a move sequence, not assign image labels.
- **D. Text generation without checking move legality:** A fluent sequence is not sufficient evidence of a valid solution.

## 4. A system consistently applies a harmful exclusion rule. A sponsor calls it safe because results are repeatable. Which distinction matters?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. A repeatable output is necessarily harmless:** A harmful decision can be repeated consistently.
- **B. Only random systems can cause harm:** Deterministic or stable systems can systematically harm people.
- **C. No assessment is needed once repeatability is measured:** Consequences and affected groups still require review.
- **D. Reliability of behavior does not by itself establish safety or fairness — correct:** The reviewed ethics framework distinguishes consistency from avoiding harm and justified treatment.

## 5. An analysis endpoint returns HTTP 202 with a status URL. A dashboard counts this as a completed successful analysis. What is wrong?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. 202 necessarily means the user's password is wrong:** Authentication failure is not the meaning of accepted-for-processing status.
- **B. A status URL proves the generated answer is correct:** Workflow tracking does not verify model content.
- **C. All asynchronous work must be rejected as unsupported:** An asynchronous contract is valid when its states and result retrieval are defined.
- **D. Acceptance for processing is being confused with completed work — correct:** The client must observe the job's eventual state; 202 does not establish a finished usable result.

## 6. A source document is corrected, but a generated answer still uses a cached excerpt and an older search index. What architecture responsibility is required?

Domain 5. Topic: [Map the architecture & choose storage](../index.html#lesson/d5-l1). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Keep old answers forever because they once passed review:** Previously acceptable content can become incorrect after a source change.
- **B. Trace and update or invalidate derived versions across the read path — correct:** Correcting the source alone does not update all cached and indexed evidence.
- **C. Only change the model's display name:** A name change does not refresh derived content.
- **D. Treat the newest source as proof that all copies are current:** The scenario explicitly contains stale derived copies.

## 7. A sponsor proposes an assistant to shorten a benefits application. Research finds the main delay is a legally required external approval, not form filling. What should feasibility compare?

Domain 7. Topic: [Discover the problem & earn the use of AI](../index.html#lesson/d7-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Assume generated text can waive external approval:** Automation does not authorize bypassing applicable requirements.
- **B. Choose the newest model before mapping the process:** A model choice does not establish where the bottleneck is.
- **C. Report all external waiting as AI time saved:** That benefit is unsupported if the wait remains.
- **D. Which delays can actually be changed and whether AI adds value within the constraints — correct:** Problem discovery should distinguish a removable task burden from a binding process step.

## 8. A release uses a feature table that is overwritten daily. What provenance makes an old run more reproducible?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. A retained permitted snapshot or reproducible versioned reconstruction — correct:** Reproduction needs the actual data state and transformations, subject to legitimate retention and access rules.
- **B. Only today's mutable table name:** The table's current contents need not match the old run.
- **C. Keeping every raw personal payload forever:** Reproducibility does not authorize unlimited personal-data retention.
- **D. The developer's memory of a typical row:** Memory is not a reliable record of the exact experiment inputs.

## 9. Two branches each record 20 late deliveries. Branch A made 100 deliveries and B made 400. Which comparison is appropriate for delivery-level lateness?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. A 5%; B 20%, because the larger branch has more deliveries:** This reverses the stated count-to-exposure ratios.
- **B. Both 4%, using all 500 deliveries for each branch:** A shared denominator does not give each branch's own lateness rate.
- **C. A 20%; B 5%, using each branch's delivery count — correct:** The rates are 20/100 and 20/400; equal counts have different exposure denominators.
- **D. Both 20%, because their late-delivery counts match:** A count of twenty is not a percentage without the relevant denominator.

## 10. A control agent is trained through interaction. Exploring unsafe actions on live equipment could cause injury. What should the learning plan address?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Allow every action until enough negative rewards accumulate:** A later penalty does not undo physical harm.
- **B. Assume a high cumulative reward certifies safety:** A reward score can omit harms or conceal unacceptable actions.
- **C. Remove all safety constraints to speed training:** Faster exploration is not an adequate justification for unsafe operations.
- **D. Safe exploration boundaries and validated simulation or controlled trials — correct:** Reward learning does not authorize dangerous live exploration; constrain and evaluate the training setting.

## 11. An AI optimization reduces energy per query but triples query volume, making total energy use rise. Which evidence is needed for a social/environmental benefit claim?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Whole-process resource use and wider effects, not per-query efficiency alone — correct:** The reviewed principle concerns actual environmental and social consequences, including increased total use.
- **B. Only the lower energy number for one query:** That ignores the volume increase and higher overall use.
- **C. The model file's color on an architecture slide:** Presentation color is unrelated to environmental performance.
- **D. A claim that more automation always reduces total energy:** The scenario supplies a counterexample to that assumption.

## 12. An AI API expects a list of one or more documents. The request sends an empty list that passes basic JSON parsing. What contract check is missing?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Whether the request text is fluent:** Fluency does not validate collection cardinality.
- **B. Whether HTTP transport is encrypted:** Transport protection is important but does not make an empty required list valid.
- **C. Whether the provider can invent a source document:** Invented evidence is not a valid substitute for required input.
- **D. The list's required minimum length and item constraints — correct:** Syntactic JSON validity does not establish task-level structural requirements.

## 13. An AI pipeline needs shared hierarchical files for an existing application and large independent immutable artifacts. What should storage selection recognize?

Domain 5. Topic: [Map the architecture & choose storage](../index.html#lesson/d5-l1). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. File and object interfaces serve different access patterns — correct:** Choose storage by operations, compatibility, scale, and integrity needs rather than assuming one interface suits everything.
- **B. Object storage is always a drop-in local filesystem:** Object interfaces and filesystem semantics need not match.
- **C. Block storage automatically supplies semantic document search:** Block devices do not inherently implement similarity search.
- **D. The largest storage product name determines the architecture:** Names do not establish workload fit or consistency requirements.

## 14. A model registry marks an artifact approved for one low-risk task. A team wants to reuse it in a high-impact decision workflow. What should happen?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Review approval scope and evaluate the new context before promotion — correct:** Approval is tied to evidence, intended use, and constraints; it is not universal authorization.
- **B. Assume the approved tag covers every use:** The tag does not establish fitness for the changed impact context.
- **C. Copy the tag to a new name without new evidence:** Relabeling does not expand the validated scope.
- **D. Use only the artifact's download count as the release gate:** Popularity does not establish context-specific suitability.

## 15. A forecast is commissioned to reduce inventory shortages. The available target is units sold, and sales stop when stock runs out. What limitation affects the target?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A more accurate sales model automatically estimates all unmet demand:** Accuracy against recorded sales does not validate an unobserved demand target.
- **B. Stockout days should always be assigned maximum demand:** That invents unsupported target values rather than assessing missing demand evidence.
- **C. Observed sales may understate demand during stockouts — correct:** Unfulfilled demand is not recorded as sales; identify censoring and the decision objective before fitting.
- **D. Every zero sale proves zero demand:** Stock availability and other conditions can prevent sales even when demand exists.

## 16. A route solver uses uniform-cost search. All edge costs are nonnegative. Why is cumulative cost more relevant than the number of visited edges?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Every additional edge necessarily costs the same amount:** Nonnegative does not mean equal.
- **B. Visited-edge count is identical to financial cost:** Search effort and path cost are different quantities.
- **C. Negative rewards prove all route costs are nonnegative:** The costs are supplied by the problem; reward terminology does not establish them.
- **D. Its objective is the lowest summed path cost, not merely the fewest transitions — correct:** Cost-aware expansion distinguishes paths with unequal edge costs under the stated assumptions.

## 17. A fairness audit finds equal overall group error rates, but errors concentrate among disabled users within one group. What should be investigated?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Automatically infer that disability caused every error:** A disparity is a signal to investigate, not proof of causation.
- **B. Relevant intersections, accessibility, and end-to-end effects with protected lawful audit data — correct:** Broad parity can conceal concentrated harm within affected populations; audit information itself needs privacy safeguards.
- **C. Nothing, because a single aggregate parity result proves fairness:** One summary cannot establish all relevant treatment and consequences.
- **D. Publish every user's sensitive data for transparency:** Audit value does not justify unrestricted disclosure.

## 18. A contract allows scores from 0 to 100 inclusive. Another consumer expects risk categories. Why should the adapter not guess category cutoffs?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. All numbers represent the same category:** The contract does not establish such a mapping.
- **B. Changing a field name establishes the category semantics:** Names cannot supply missing thresholds or their meaning.
- **C. The mapping is decision semantics that needs an agreed versioned definition — correct:** A numeric range does not establish which boundaries or direction correspond to each category.
- **D. Any equal-width split is automatically approved:** Convenient bins are not evidence of an agreed decision rule.

## 19. An LLM evaluator changes while the generated system stays fixed. Reported scores improve. What should the experiment report qualify?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Evaluator versions never affect scores:** Different criteria or evaluator behavior can alter ratings.
- **B. Old evaluator results should be deleted to avoid confusion:** Preserving the comparison history supports honest interpretation.
- **C. Measurement changes may explain the gain; version and compare the evaluator — correct:** The scoring instrument is part of evaluation provenance and can change rankings without a system improvement.
- **D. The generating model definitely improved:** Its configuration is unchanged; the changed evaluator is a plausible explanation.

## 20. A retrieval pipeline's network transfer dominates latency because it sends entire documents although only short authorized excerpts are used. What experiment targets the bottleneck?

Domain 5. Topic: [Map the architecture & choose storage](../index.html#lesson/d5-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Add GPUs without changing document transfer:** More model compute does not directly remove the observed network bottleneck.
- **B. Skip all permission checks to transfer sooner:** Performance goals do not justify unauthorized evidence.
- **C. Remove relevant evidence and assume quality is unchanged:** Less data movement is not useful if necessary task support is lost.
- **D. Measure a minimized excerpt-transfer design with equivalent evidence and permissions — correct:** Reducing unnecessary movement may help while preserving task quality and access boundaries.

## 21. A service publishes average task time among successful users. A new interface causes slow users to abandon sooner, and the published average improves. What should an evaluation add?

Domain 1. Topic: [Frame the problem & understand the data](../index.html#lesson/d1-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Completion and abandonment outcomes for all eligible starters — correct:** Conditioning on success can hide harmed users who exit; evaluate the end-to-end population.
- **B. Only the average among the fastest successful users:** Further selection makes the result less representative of the stated service goal.
- **C. A claim that shorter observed time proves improvement for everyone:** The excluded abandoners undermine that conclusion.
- **D. Training accuracy of an unrelated classifier:** It does not assess this service's selection-dependent task-time result.

## 22. A service must both enforce an exact account limit and interpret varied free-text requests. Which division is defensible?

Domain 2. Topic: [Choose an AI approach: rules, search & learning](../index.html#lesson/d2-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Use a search engine's document count as the account limit:** Retrieved document frequency does not define the mandatory bound.
- **B. Require the same algorithm for both jobs regardless of fit:** Different responsibilities can appropriately use different mechanisms.
- **C. Use language interpretation for uncertain text and deterministic enforcement for the limit — correct:** A learned component can assist interpretation while an external rule protects a mandatory bound.
- **D. Let fluent interpretation override the exact account limit:** Text confidence does not authorize violating the account constraint.

## 23. A pilot automates drafting successfully, but deployment would also authorize final decisions. What should the next approval recognize?

Domain 7. Topic: [Discover the problem & earn the use of AI](../index.html#lesson/d7-l1). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Final decisions are merely a cosmetic interface change:** They introduce material side effects and accountability.
- **B. The added decision authority is a new scope and risk requiring review — correct:** Drafting evidence is not production approval for autonomous decisions; revisit oversight, permissions, outcomes, and operations.
- **C. A successful drafting pilot approves every downstream action:** The untested action scope has different consequences.
- **D. A larger model alone supplies the missing authority:** Technical capability does not grant decision authorization.

## 24. A model is classified little or no risk under the reviewed May 2025 ethics framework. It still processes identifiable customer records. What must not be inferred?

Domain 6. Topic: [Recognize harm & evaluate fairness](../index.html#lesson/d6-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. That ethical compliance is still recommended:** The reviewed framework recommends it for this tier.
- **B. That a later change in purpose can require reassessment:** Changing the use can change both risk and applicable requirements.
- **C. That the risk classification exempts it from applicable PDPL duties — correct:** Framework risk categories do not waive otherwise applicable law or processing obligations.
- **D. That the actual use and data deserve review:** Context and data remain relevant to identifying obligations.

## 25. A provider adds a fifth classification category. The consumer accepts only four documented categories. What is the safest migration response?

Domain 3. Topic: [APIs, HTTP & data contracts](../index.html#lesson/d3-l1). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Assume numeric type checking alone validates the response:** The category set and semantics also form part of the contract.
- **B. Delete the new category from monitoring:** Hiding unexpected values prevents diagnosis rather than solving compatibility.
- **C. Handle the unknown category explicitly and assess contract compatibility — correct:** A new valid provider value can be incompatible with a closed consumer enumeration; do not silently misroute it.
- **D. Map every unknown category to the least urgent queue:** That invents potentially unsafe meaning for a new value.

## 26. A reproducible run records random seed, data, code, and model, but omits the environment and dependency versions. What risk remains?

Domain 4. Topic: [Track experiments & version the whole system](../index.html#lesson/d4-l1). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Different runtime behavior may prevent reproduction or change outputs — correct:** Environment and dependency identity can affect processing and execution even with the same seed.
- **B. A seed guarantees bit-identical behavior across all environments:** The seed alone does not control every implementation or hardware difference.
- **C. Data provenance is therefore unnecessary:** Environment records complement rather than replace input provenance.
- **D. Reproduction should be claimed without rerunning:** A record helps, but an actual reproduction check supplies stronger evidence.

## 27. A join between shipments and tracking events multiplies each shipment row. The intended model predicts one outcome per shipment. What preparation is needed?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Keep only the last event even if it occurred after the prediction:** An event aggregation must respect information availability, not just reduce row count.
- **B. Standardize numeric columns without examining the join:** Scaling does not repair a changed unit of analysis.
- **C. Define shipment-level event aggregation and check join cardinality — correct:** One-to-many joins can alter weighting and grain; use events available at prediction time to construct shipment features.
- **D. Treat each multiplied row as an independent shipment:** Repeated rows do not create independent shipments and can bias fitting and evaluation.

## 28. In neural training, an optimizer changes weights to reduce a chosen loss. What does the loss provide?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. A numerical training objective measuring mismatch under the chosen definition — correct:** The loss guides fitting; its definition must still reflect the intended task and evaluation.
- **B. A legally verified measure of all possible harm:** A mathematical objective is not comprehensive legal or ethical validation.
- **C. A guarantee that held-out performance improves at each update:** Reducing training loss need not improve generalization at every step.
- **D. A replacement for the data's target definition:** A loss operates on the task's outputs and targets; it does not resolve a wrongly framed target.

## 29. A model's weights occupy 8 GB on a 12-GB accelerator. Serving runs out of memory with long concurrent requests. What estimate was incomplete?

Domain 5. Topic: [Match compute, memory & model efficiency](../index.html#lesson/d5-l2). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. All out-of-memory events prove corrupted weights:** Valid weights can exceed capacity when combined with runtime state.
- **B. Runtime allocations, request-dependent state, and concurrency headroom — correct:** Weight memory is only one component; buffers and request state can exhaust remaining capacity.
- **C. The assumption that 8 is smaller than 12:** The arithmetic is correct; other allocations were omitted.
- **D. The model's name must require exactly 12 GB:** Names do not determine runtime memory.

## 30. A pipeline tests one model artifact but deploys a freshly rebuilt artifact that was not checked. What release integrity gap exists?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. The evaluated artifact is not demonstrably the deployed artifact — correct:** Promotion should bind evidence to the exact candidate and compatible configuration.
- **B. Any build with the same display name is identical:** A name does not establish content identity.
- **C. Testing once proves all later builds pass:** Later builds can change dependencies or output content.
- **D. Deploying without a release record fixes the mismatch:** Removing provenance hides rather than repairs the gap.

## 31. A counterfactual explanation says changing a recorded attribute would lead to approval, but the attribute cannot realistically be changed. What should communication clarify?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. A plausible generated rationale replaces the actual decision record:** Audit evidence must reflect real inputs, rules, and versions.
- **B. A hypothetical model response is not necessarily a feasible or guaranteed remedy — correct:** Counterfactuals depend on assumptions; useful redress should identify actual correctable evidence and review routes.
- **C. Every counterfactual is an enforceable promise of approval:** The model's hypothetical is not an unconditional decision guarantee.
- **D. Unchangeable attributes should be falsified to obtain approval:** False records are not a legitimate correction path.

## 32. A sensor records extremely high pressure just before real failures. An automatic cleaning rule removes all values beyond the normal range. What is the concern?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Every rare value is an invalid measurement:** Rarity alone does not establish a sensor error.
- **B. Deleting failure precursors guarantees better generalization:** It can remove the cases the system most needs to recognize.
- **C. All high values should be kept without source checks:** Some extremes can be erroneous; distinguish valid events from collection failures.
- **D. Valid rare warning signals may be removed with genuine measurement errors — correct:** Investigate physical validity and deployment relevance before treating unusual values as noise.

## 33. A status endpoint says an analysis is complete, but the result file is not yet readable. Which workflow requirement would prevent this race?

Domain 3. Topic: [Synchronous, asynchronous & event workflows](../index.html#lesson/d3-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Display completion immediately when a worker starts:** Starting work is even further from a usable completed result.
- **B. Replace the unreadable output with an empty successful result:** That masks a failed contract and may mislead downstream decisions.
- **C. Require users to refresh indefinitely without status meaning:** Indefinite retries do not define or repair the completion guarantee.
- **D. Define completion to include committed, retrievable output — correct:** A completed state should not be published before the contract's result is available.

## 34. A training run produces non-finite losses after a preprocessing change. What should be investigated before increasing model size?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only the model's marketing description:** It gives no evidence about the failing calculations.
- **B. Whether deleting loss monitoring makes training successful:** Hiding a symptom does not repair training.
- **C. Whether all non-finite values can be reported as zero loss:** That would misrepresent the objective and conceal the failure.
- **D. Invalid input values, numerical ranges, and optimization stability — correct:** Non-finite losses suggest a data or numerical failure; more capacity does not diagnose it.

## 35. A training workload splits different examples across several devices and combines their learning updates. What form of parallelism is described?

Domain 5. Topic: [Match compute, memory & model efficiency](../index.html#lesson/d5-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Proof of linear speedup with every added device:** Coordination and other bottlenecks can limit scaling.
- **B. Data parallelism — correct:** Devices process different data portions for a shared model, unlike splitting the model itself across devices.
- **C. Model parallelism by definition:** The described division is of examples, not necessarily model components.
- **D. A response cache:** Caching reuses stored results rather than distributes training examples.

## 36. A required evaluation cannot run because its test service is unavailable. What should a fail-closed promotion gate do?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Remove the gate silently for this release:** A policy exception, if allowed, needs explicit authority and recorded rationale.
- **B. Assume unavailable tests imply no defects:** Absence of a result is not evidence of absence of defects.
- **C. Treat missing required evidence as a blocked gate, not a pass — correct:** A failed measurement does not establish that the candidate satisfies the requirement.
- **D. Substitute a perfect score automatically:** That fabricates evidence.

## 37. A dataset codes service urgency as low, medium, and high. Unlike arbitrary department names, what property should its representation acknowledge?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Urgency levels have no ordering:** The stated low-to-high levels explicitly describe ordered urgency.
- **B. The final test outcome is the appropriate urgency code:** Using the target to encode inputs would contaminate evaluation.
- **C. An order exists, but equally spaced numerical distances are not established — correct:** Ordinal levels have an ordering; their names alone do not prove equal intervals or risk ratios.
- **D. High urgency is exactly three times low urgency:** Arbitrary coding does not establish a physical or quantitative ratio.

## 38. A chatbot deliberately presents itself as a human employee. Which reviewed ethics control is directly relevant?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Disclosure that users are interacting with a non-human correspondent — correct:** The May 2025 checklist DM.1 addresses chatbot disclosure; it complements other transparency and redress controls.
- **B. A guarantee that the chatbot actually has human feelings:** Simulated interaction does not establish feelings or humanity.
- **C. Publishing all credentials to make the system transparent:** Transparency does not require exposing secrets.
- **D. Replacing disclosure with a higher accuracy score:** Accuracy does not tell users whether their correspondent is human.

## 39. For a one-year simple undiscounted training example, AI costs SAR 80,000 and yields SAR 130,000 benefits. A feasible rules option costs SAR 20,000 and yields SAR 90,000. What is AI's incremental net benefit over the rules option?

Domain 7. Topic: [Define success, total cost & business value](../index.html#lesson/d7-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Positive SAR 110,000:** That subtracts rules cost from AI gross benefit rather than comparing net alternatives.
- **B. Zero, because all AI investments have equal ROI:** The supplied costs and benefits differ; no universal equality exists.
- **C. Negative SAR 20,000 — correct:** AI net benefit is 50,000; rules net benefit is 70,000. Their difference is −20,000, so the larger gross benefit does not imply the better net alternative.
- **D. Positive SAR 40,000:** That compares gross benefits only and omits the extra 60,000 cost.

## 40. A dropout layer randomly omits some activations during training. What is the intended general role?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. A guarantee that inference uses no computation:** The trained network still performs inference computations.
- **B. A method for filling missing personal-data records:** Dropout is a network-training technique, not data imputation.
- **C. Regularization that can reduce reliance on particular activation paths — correct:** Dropout perturbs training to discourage co-adaptation; effectiveness still needs validation.
- **D. Permanent deletion of every learned weight:** Dropping activations during training is not deleting all parameters.

## 41. A document workflow sends a completion event containing only a job ID. The consumer cannot tell which document revision was analyzed. What should the event contract include?

Domain 3. Topic: [Synchronous, asynchronous & event workflows](../index.html#lesson/d3-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. The current document text regardless of analyzed revision:** Current text may differ from the source actually used for the result.
- **B. A claim that events always arrive in source order:** Delivery order alone is not a reliable revision identity.
- **C. Stable source identity and analyzed revision alongside result identity — correct:** Consumers need to associate the result with the exact source state, not just a job's existence.
- **D. Only the worker's friendly display name:** A name does not identify the analyzed document revision.

## 42. A staging evaluation uses permissive access filters; production uses tenant-specific filters. What must release testing establish?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. That more retrieved documents always means better production quality:** Unauthorized or irrelevant evidence can reduce safety and quality.
- **B. Quality and permissions under the production-equivalent filtering policy — correct:** Different filters change retrieved evidence and security behavior; staging results may not transfer.
- **C. Only that both deployments use the same model weights:** Weights do not capture retrieval and authorization differences.
- **D. That production filters should be disabled for score consistency:** Benchmark comparability does not justify weakening required controls.

## 43. Missing sensor readings become much more common on older machines that also fail more often. The team plans complete-case deletion. What should it assess?

Domain 1. Topic: [Prepare data without creating new problems](../index.html#lesson/d1-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Whether deleting rows makes missingness random by definition:** Deleting selected observations does not remove the selection mechanism.
- **B. Whether missing readings can safely be labeled 'no failure':** An absent measurement is not an observed outcome.
- **C. How deletion changes machine coverage and the failure population — correct:** Missingness relates to a relevant subgroup; dropping rows can selectively remove high-risk machines.
- **D. Only how much smaller the exported file becomes:** Storage reduction is not evidence of representative training data.

## 44. A distilled student matches its teacher on ordinary cases. Both fail the same critical exceptions. What evaluation boundary matters?

Domain 5. Topic: [Match compute, memory & model efficiency](../index.html#lesson/d5-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Teacher agreement proves the exceptions are correct:** Agreement between two models is not independent correctness evidence.
- **B. A smaller artifact automatically means safer decisions:** Size does not establish task safety.
- **C. Remove exceptions from assessment because the teacher misses them:** Those cases remain relevant to deployment harm.
- **D. Assess the student against independent task truth, not teacher agreement alone — correct:** Teacher imitation can reproduce teacher errors; compression quality requires relevant ground-truth evaluation.

## 45. An appeals workflow sends disputed decisions back to the same model with no new evidence or independent reviewer. What should be tested?

Domain 6. Topic: [Explain decisions & make oversight meaningful](../index.html#lesson/d6-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Only how quickly the model repeats its answer:** Speed does not establish fair reconsideration.
- **B. Whether the word 'appeal' is visible in the interface:** A label is not evidence that the process works.
- **C. Assume repeated model agreement proves the original decision:** The same unsupported process can reproduce the same error.
- **D. Whether reconsideration is genuinely independent, accessible, and able to correct the source — correct:** A nominal appeal button does not ensure meaningful challenge or correction.

## 46. A gradient for one weight is zero on a training step. What can safely be concluded about that step alone?

Domain 2. Topic: [Neural networks: from a neuron to training](../index.html#lesson/d2-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. That gradient gives no local first-order change for that weight on that step — correct:** A zero gradient is local evidence; it does not establish global optimality or useful generalization.
- **B. The entire model is globally optimal:** One weight's gradient does not prove global optimality of the network.
- **C. Every future gradient must remain zero:** Other batches or changed parameters can yield different gradients.
- **D. The deployment predictions must all be correct:** Optimization signals do not certify all unseen outputs.

## 47. An interactive request times out after five seconds, but its analysis needs a minute. Which redesign is a reasonable starting point?

Domain 3. Topic: [Synchronous, asynchronous & event workflows](../index.html#lesson/d3-l2). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. An asynchronous job with explicit status, expiry, and result retrieval — correct:** Long-running work can be decoupled from a short request while maintaining clear user-facing state.
- **B. Report a final answer before analysis starts:** That would misrepresent incomplete work as a finished result.
- **C. Retry the entire job every five seconds unconditionally:** Uncoordinated retries can create duplicate work and overload.
- **D. Remove all failure reporting to keep the interface simple:** Users still need terminal states and recovery direction.

## 48. A release changes feature names and serving code together. The model expects the prior schema. Which check should block a mismatched bundle?

Domain 4. Topic: [Build pipelines & enforce release gates](../index.html#lesson/d4-l2). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Assuming every schema change is cosmetic:** Names, types, and semantics can determine model input meaning.
- **B. An end-to-end compatibility check binding features, model, and serving contract — correct:** A correct individual component can fail when paired with an incompatible schema.
- **C. Only confirming each file exists:** Existence does not establish compatible interfaces.
- **D. Deploying components in arbitrary order:** Uncoordinated updates can expose incompatible combinations.

## 49. A company deploys a risk model to existing customers tomorrow. Its random historical split includes transactions from next month as training examples for yesterday's test transactions. What needs protection?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. No boundary because the customers are already known:** Future behavior remains unavailable even for a known customer.
- **B. Chronological information availability, even though customers recur — correct:** Known-customer deployment does not justify learning from transactions that occur after evaluated prediction times.
- **C. Only customer uniqueness, regardless of chronology:** Customer grouping alone can leave future information influencing earlier predictions.
- **D. Only equal partition sizes:** Balanced sizes do not enforce the prediction-time boundary.

## 50. An image classifier is highly sensitive to a small shift of an otherwise unchanged object. What model-family property motivates evaluating convolutional features?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Shared local filters can detect visual patterns across image locations — correct:** Convolution exploits local spatial structure; robustness remains empirical, not guaranteed.
- **B. Convolution makes all image transformations harmless:** It does not guarantee invariance to every shift, rotation, or distortion.
- **C. Convolution removes the need for labeled evaluation:** Task quality and robustness still require suitable assessment.
- **D. Convolution treats the image as a verified legal document:** A visual architecture does not establish factual or legal authority.

## 51. A supplier processes prompts for the customer's service and also uses them for its own unrelated training. What role question requires review?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Whether the supplier's separate purposes change its processing-role analysis — correct:** Roles depend on actual purposes and methods, not only a marketing label or a processor clause.
- **B. The supplier is always only a processor for every purpose:** Independent use needs its own analysis and permitted basis.
- **C. Outsourcing removes all controller diligence:** The reviewed PDPL Article 8 summary preserves controller responsibilities.
- **D. Calling prompts 'telemetry' removes privacy relevance:** Renaming identifiable information does not alter its nature.

## 52. A request spends 300 ms queued, 150 ms retrieving, 500 ms generating, and 50 ms validating, sequentially. What end-to-end latency should be reported?

Domain 5. Topic: [Measure latency, throughput & useful cost](../index.html#lesson/d5-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. 700 ms, excluding queueing:** Queueing is part of the stated end-to-end request.
- **B. 300 ms, because the longest wait defines every sequential path:** Taking a maximum fits some parallel paths, not this sequential pipeline.
- **C. 1,000 ms, including queueing and validation — correct:** The user waits for all sequential stages: 300 + 150 + 500 + 50 = 1,000 ms.
- **D. 500 ms, because only model execution counts:** This omits the other user-visible waiting stages.

## 53. A simple undiscounted training case has SAR 30,000 setup, SAR 3,000 monthly operation, and SAR 3,000 monthly capacity value with no cash expense reduction. What is established?

Domain 7. Topic: [Define success, total cost & business value](../index.html#lesson/d7-l2). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. A guaranteed loss in every possible future scenario:** The result applies to the stated assumptions; changed costs or realized benefits need separate analysis.
- **B. No positive monthly net capacity-value benefit and no demonstrated cash payback — correct:** The recurring valued capacity equals operating cost before setup; capacity value is not proven cash savings, and setup is not recovered under the stated constant assumptions.
- **C. Ten-month cash payback because setup divided by capacity value is ten:** That ignores operating cost and treats valued time as cash.
- **D. Immediate profit because the capacity benefit is positive:** A gross benefit is not net profit after incremental costs.

## 54. A canary shows low error rates for brief requests but receives no traffic from the largest customer tenant. What should expansion consider?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Whether exposure covers tenant and workload slices relevant to full rollout — correct:** Good results in a limited slice do not establish behavior for a major unexposed group.
- **B. Only the elapsed wall-clock duration:** Waiting longer without relevant exposure may not improve coverage.
- **C. That the unexposed tenant is proven safe by default:** No observation was collected for that workload.
- **D. Deleting tenant labels from the dashboard:** That hides the exposure gap instead of resolving it.

## 55. A retry uses the original idempotency key but changes the transaction amount. What should the operation contract specify?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Reject or otherwise explicitly handle conflicting payloads for the same operation key — correct:** Idempotency must bind operation identity to its intended request semantics, not silently substitute a different transaction.
- **B. Execute both amounts because the key matches:** That defeats the aim of preventing duplicate or inconsistent side effects.
- **C. Always choose whichever amount is larger:** This invents unauthorized transaction semantics.
- **D. Assume the key proves every payload field is unchanged:** The scenario explicitly contains a changed amount.

## 56. Synthetic training images are created from original photographs before splitting. Some synthetic versions land in training while their originals land in testing. What is the appropriate boundary?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Move all originals to testing after training on their variants:** This deliberately evaluates on sources already represented in training.
- **B. Use only filenames to decide independence:** Distinct filenames do not establish independent image content.
- **C. Split source photographs first and keep derived variants with their source — correct:** Augmented variants retain source-specific information; crossing partitions compromises independence.
- **D. Split each synthetic image independently because its pixels differ:** A transformed image can still reveal the same source object or scene.

## 57. A pretrained encoder is frozen while a small classification head is fitted to new labels. Which parameters are updated?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. The head's parameters, not the frozen encoder's — correct:** Freezing prevents encoder updates in this setup while allowing the added head to learn.
- **B. Every encoder parameter on every example:** That contradicts the stated frozen-encoder setup.
- **C. Only the labels themselves:** Fitting adjusts model parameters, not the observed target labels.
- **D. No parameters, because pretraining prohibits later fitting:** A new head can be trained even when the encoder is held fixed.

## 58. An encrypted customer dataset can be decrypted by authorized operators. Which claim is not established by encryption alone?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. That access and purpose rules still matter:** Encryption complements rather than replaces those rules.
- **B. That recipients and storage copies belong in the data map:** Those flows still need review even when encrypted.
- **C. That the dataset is anonymous or its processing is fully compliant — correct:** Encryption protects readability from unauthorized access; authorized decryption still reveals personal data.
- **D. That key handling affects confidentiality:** Protection depends partly on controlling decryption keys.

## 59. Candidate and control share a constrained retrieval backend. Candidate traffic saturates it, slowing both groups. What should the rollout analysis recognize?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Only compare response wording and ignore latency:** User-visible performance is part of the rollout's effect.
- **B. Shared-resource interference can contaminate the control comparison — correct:** The control is affected by the candidate's load; inspect dependency metrics and isolate or account for interference.
- **C. Equal slowdown proves the candidate has no impact:** Both groups can be harmed through the same shared dependency.
- **D. The control cannot be affected by any candidate traffic:** Shared capacity explicitly provides an interference path.

## 60. A dashboard adds retrieval p95 to generation p95 and calls the sum the measured request p95. What is the issue?

Domain 5. Topic: [Measure latency, throughput & useful cost](../index.html#lesson/d5-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. All percentile sums are exact by definition:** Percentiles are distribution summaries, not additive per-request durations.
- **B. Only median durations can ever be recorded:** Tail measurements are useful when measured appropriately.
- **C. End-to-end p95 ignores sequential stages:** It includes their actual combined durations, not an arbitrary sum of marginal percentiles.
- **D. Component percentiles do not generally add to the end-to-end percentile — correct:** Percentiles may concern different requests and correlations; measure complete request durations directly.

## 61. A pipeline removes duplicate rows separately inside training and test partitions. Identical records still exist across the partitions. What should the team check?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Whether all legitimate repeat events should be deleted:** Repeated real events require a task-aware identity definition, not indiscriminate removal.
- **B. Cross-partition overlap under a justified record-identity rule — correct:** Within-partition deduplication does not prevent the same case appearing in both training and evaluation.
- **C. Only whether each partition has unique local row numbers:** Local numbering does not identify duplicate underlying cases.
- **D. Whether test accuracy increased after deduplication:** An improved score is not proof of clean information boundaries.

## 62. A client has a ten-second total deadline. Each retry independently gets ten seconds, plus backoff. What failure in deadline handling exists?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Only the last successful call counts toward latency:** User-visible latency includes previous attempts and delays.
- **B. An HTTP status code automatically enforces the client deadline:** Application deadline propagation requires explicit design.
- **C. Retries can exceed the original end-to-end budget — correct:** Each stage and retry should use the remaining absolute budget; a fresh timeout is not a fresh user deadline.
- **D. Backoff consumes no elapsed time:** Waiting contributes to the user's total elapsed time.

## 63. An attention visualization highlights a word in a generated answer's context. What should a reviewer avoid inferring from the visualization alone?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. That model internals and user-facing explanations are distinct evidence:** Keeping those forms of evidence distinct is appropriate.
- **B. That it proves a faithful causal explanation or verifies the answer — correct:** Attention weights describe part of computation; they do not by themselves certify causal attribution or truth.
- **C. That the network uses relationships among tokens:** Attention is designed to combine token-dependent representations.
- **D. That the visualization may warrant further analysis:** It can be a diagnostic clue without being decisive proof.

## 64. Two serving environments are ready, and traffic is switched from the old one to the new one after checks. What strategy is described?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. Shadow evaluation only:** The new environment now serves users rather than merely observing copied requests.
- **B. Offline cross-validation:** This describes live serving environments, not data folds.
- **C. Automatic proof of safe rollback:** A traffic-switch design alone does not verify state or dependency reversibility.
- **D. Blue-green deployment — correct:** A prepared alternate environment permits a traffic switch; compatible state and rollback still need planning.

## 65. A sponsor proposes training on sensitive health records under a generic legitimate-interests assertion. What does the kit's reviewed Saudi summary require the team to recognize?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. The ethics officer's enthusiasm overrides privacy law:** Ethical project support cannot waive statutory requirements.
- **B. That this basis has restrictions, including sensitive-data exclusion, and needs qualified review — correct:** The reviewed Implementing Regulation Article 16 summary does not permit importing a blanket legitimate-interests slogan.
- **C. Any useful AI project automatically qualifies:** Utility alone is not a lawful-basis determination.
- **D. A consent checkbox is unnecessary for every conceivable purpose:** The applicable basis and conditions depend on the specific processing.

## 66. An analyst compares 80 configurations by cross-validation and reports the winning cross-validation score as an unbiased final estimate. What concern remains?

Domain 1. Topic: [Protect evaluation: splits, leakage & validation](../index.html#lesson/d1-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Cross-validation forbids any model selection:** It supports selection, but selection and unbiased final estimation are different uses.
- **B. Eighty trials guarantee the winner generalizes:** More trials can increase selection optimism rather than remove it.
- **C. A configuration name can restore evaluation independence:** Names do not undo information used during selection.
- **D. Selection on those scores can make the winning estimate optimistic — correct:** The folds are development evidence; an untouched assessment or suitable nested design helps assess the selected procedure.

## 67. Serving A costs SAR 30 for 100 acceptable tasks; B costs SAR 36 for 150 acceptable tasks under the same acceptance rules. Which has lower cost per acceptable task?

Domain 5. Topic: [Measure latency, throughput & useful cost](../index.html#lesson/d5-l3). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. B: SAR 0.30 versus A: SAR 0.24:** This reverses the stated ratios.
- **B. B: SAR 0.24 versus A: SAR 0.30 — correct:** Use acceptable outcomes as the denominator: 36/150 and 30/100.
- **C. A, because total spending is lower:** Total cost alone ignores the different count of useful outcomes.
- **D. Both SAR 0.36 because B sets the common cost:** Each design has its own cost and acceptable-task denominator.

## 68. A pilot completion rate rose in both AI and non-AI branches after a common process simplification. What should a stakeholder report avoid?

Domain 7. Topic: [Communicate evidence, uncertainty & tradeoffs](../index.html#lesson/d7-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Explaining that causation is uncertain:** That is an appropriate qualification of the available evidence.
- **B. Investigating whether non-AI improvements provide similar value:** Comparing alternatives is relevant to the investment decision.
- **C. Attributing the entire observed gain to AI without isolating the common change — correct:** The comparison needs aligned populations and a credible design to estimate incremental AI contribution.
- **D. Reporting descriptive before-and-after rates with caveats:** Descriptive evidence can be useful when its limitations are stated.

## 69. A provider signals temporary throttling and gives a retry delay. Thousands of jobs are already queued. What should the client coordinate?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Ignore all queue growth because the provider will recover:** Recovery is not guaranteed and local work can become infeasible.
- **B. Mark throttled jobs complete without output:** A temporary refusal is not successful task completion.
- **C. Provider delay, bounded retry policy, and local admission or queue limits — correct:** Retry timing alone is insufficient if accumulated work overwhelms local capacity or the provider.
- **D. Immediate parallel retries for every queued job:** That can amplify the overload that caused throttling.

## 70. A pretrained vision model performs well on ordinary photos but poorly on scanned diagrams. Which adaptation experiment is most informative?

Domain 2. Topic: [Model families, attention & transfer learning](../index.html#lesson/d2-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Use target test labels in every adaptation trial:** Repeated test-driven adaptation compromises independent final evaluation.
- **B. Compare frozen and adapted representations on held-out diagram tasks — correct:** Target-domain evidence can show whether adaptation helps without assuming pretraining transfers perfectly.
- **C. Declare that any pretrained model must work equally on diagrams:** Representations can transfer unevenly across domains.
- **D. Choose only on ordinary-photo benchmark rank:** That benchmark does not establish performance on the target scans.

## 71. An overnight batch scoring job fails halfway. A rerun would overwrite some delivered scores and duplicate others. What should serving design specify?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Append all rerun scores without identity checks:** That can create ambiguous or duplicate results.
- **B. Treat batch mode as exempt from operational testing:** Batch side effects and failures still require verification.
- **C. Run identity, output versioning, and safe partial-run recovery — correct:** Batch work needs completeness and rerun semantics, not just a successful process exit.
- **D. Mark the entire batch complete because half was delivered:** Partial completion is not full contractual completion.

## 72. A proposed retention policy cites five years after processing ends for processing-activity records, then applies that period to every raw chat. What is the correction?

Domain 6. Topic: [Protect privacy & navigate Saudi PDPL context](../index.html#lesson/d6-l3). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. All raw chats must therefore be retained indefinitely:** Neither five-year activity records nor auditability establishes indefinite retention.
- **B. Destroy every legally required record immediately:** The distinction does not remove applicable recordkeeping duties.
- **C. An overseas backup is exempt from retention review:** Copies and applicable current transfer requirements remain part of the data map; this kit is not a complete current inventory.
- **D. Keep activity-record duties distinct from justified raw-payload retention — correct:** The reviewed Article 33 record period is not universal raw-payload retention; purposes, category-specific rules, copies, and applicable exceptions need review.

## 73. A binary classifier is compared with a rule that always predicts the most common class. What must a meaningful comparison use?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. Candidate training accuracy versus the baseline's test recall:** Different data and metrics do not provide a fair direct comparison.
- **B. Only the number of algorithm features:** Feature count does not establish useful performance.
- **C. A baseline trained using held-out answers:** Using held-out outcomes to fit the baseline contaminates its evaluation.
- **D. The same held-out cases and metrics tied to the important errors — correct:** A common evaluation basis reveals whether the candidate improves on a simple operational alternative.

## 74. An Arabic passage and its English translation contain the same ideas but use different token counts in a model. What should budgeting use?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: D.**

- **A. The English word count for both passages:** Words are not a reliable cross-language token count.
- **B. One token per sentence in every language:** Tokenizers do not generally operate as one token per sentence.
- **C. The count of cited sources only:** Sources do not determine the input's token length.
- **D. Counts from the actual model's tokenizer for each text — correct:** Semantic equivalence does not imply equal tokenization; language and tokenizer affect the budget.

## 75. One downstream call permanently rejects an unsupported file type. What should a useful failure response do?

Domain 3. Topic: [Timeouts, retries & safe failure handling](../index.html#lesson/d3-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Expose a clear terminal error with a supported recovery path — correct:** A permanent input problem calls for correction or another supported route, not blind retries.
- **B. Retry forever with the identical unsupported file:** An unchanged permanent error is unlikely to recover by repetition.
- **C. Hide the error and show a success checkmark:** This misrepresents an unsuccessful analysis.
- **D. Change the filename extension and assume content compatibility:** Renaming a file does not change its underlying format.

## 76. A candidate improves one-day latency, but the task's harmful outcome is observable only after two weeks. What should the rollout gate account for?

Domain 4. Topic: [Choose serving & gradual rollout strategies](../index.html#lesson/d4-l3). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Outcome delay and exposure risk before broad expansion — correct:** Fast operational metrics cannot substitute for the unavailable delayed quality evidence.
- **B. Assume short-term latency proves long-term quality:** These measurements cover different properties.
- **C. Count all immature outcomes as successful:** Unobserved outcomes are not verified successes.
- **D. Expand immediately because more exposure makes every risk acceptable:** Additional exposure can increase harm before evidence matures.

## 77. A cache stores a policy answer before a temporary exception expires. The source file is unchanged when the expiry time passes. What invalidation factor is missing?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only the source filename's character count:** Filename length does not determine the exception's validity.
- **B. A guarantee that unchanged files imply unchanged answers forever:** Effective and expiry dates contradict that assumption.
- **C. Permission to ignore all expiry dates for cached responses:** Cache convenience does not override the applicable rule.
- **D. Time-dependent applicability as well as source version — correct:** A rule can change applicability with time even when its source bytes remain the same.

## 78. A model performs well on a stable development sample but fails after a source field is misparsed in validation. Why is adding regularization not the first remedy?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Regularization always increases validation accuracy:** Its effect depends on the problem and does not guarantee improvement.
- **B. Validation errors necessarily mean excess parameters:** Data defects, shifts, and other causes can produce the same symptom.
- **C. The source field should be hidden from all testing:** Removing diagnostic evidence conceals the defect.
- **D. A broken data contract needs correction before diagnosing model complexity — correct:** A processing defect can explain the performance gap; capacity controls do not repair incorrectly parsed inputs.

## 79. A model adapter downloads additional executable code when loaded. The inspection machine contains production credentials. What boundary should be changed?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Accept the artifact solely because its sample accuracy is good:** Ordinary quality does not establish safe provenance or execution.
- **B. Inspect untrusted loading behavior in isolation without production secrets — correct:** Artifact review must consider code execution and supply-chain trust, not just model metrics.
- **C. Load it with administrator privileges to avoid inspection errors:** Extra privilege increases possible impact.
- **D. Assume a small adapter cannot execute harmful code:** File size does not determine loading behavior or trust.

## 80. Input distributions look unchanged, but the relationship between features and outcomes has shifted after a policy change. Which issue is most consistent?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Guaranteed training-data duplication:** No duplicate records are described.
- **B. Concept drift — correct:** The feature-to-target relationship can change even without a large change in marginal input distributions.
- **C. Proof that no drift occurred:** Stable input histograms do not establish stable outcome relationships.
- **D. A network timeout by definition:** The scenario concerns prediction relationships, not transport behavior.

## 81. A conversation service silently discards its earliest messages when context fills. A later answer violates a constraint stated at the start. What should the design check?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Whether the model can be assumed to remember every previous session:** No such persistent memory is established by this context setup.
- **B. Whether the lost instruction should be blamed on tokenizer spelling alone:** The specified failure is information removal, not merely token spelling.
- **C. Which constraints survive context management and how required state is maintained — correct:** Truncation can remove essential information; context policy must preserve or reconstruct necessary constraints.
- **D. Whether increasing temperature restores discarded text:** Sampling does not recover information no longer supplied.

## 82. Every unit test passes, but a real integration fails because authentication expires mid-job. Which test adds directly relevant evidence?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. An integration scenario covering credential expiry and safe recovery — correct:** Tests should exercise the boundary failure, not only isolated happy-path components.
- **B. A duplicate arithmetic unit test unrelated to credentials:** It does not test the observed integration failure.
- **C. A test double that never expires credentials:** That removes the relevant condition rather than covering it.
- **D. A claim that passing unit tests proves the whole workflow:** Unit scope does not establish all cross-component behavior.

## 83. A team finds a serious limitation in one language but its overall demo is impressive. What should communication include?

Domain 7. Topic: [Communicate evidence, uncertainty & tradeoffs](../index.html#lesson/d7-l3). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. A guarantee that unseen users will match the demo:** A demonstration does not establish universal performance.
- **B. A claim that disclosure is unnecessary until users complain:** Known consequential limits should inform decisions before wider exposure.
- **C. The affected scope, supporting evidence, uncertainty, and proposed next decision — correct:** Stakeholders need actionable limitations rather than an unqualified overall success story.
- **D. Only the most favorable demonstration:** Selective reporting hides a relevant deployment gap.

## 84. A batcher waits longer to collect larger batches and improves compute utilization. What tradeoff needs measurement?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Only report the largest batch size ever observed:** A size statistic does not quantify useful throughput or user wait.
- **B. Treat waiting time as outside the service experience:** Users experience batch formation delay as part of response time.
- **C. Queueing delay and tail latency against useful throughput — correct:** Larger batches can improve efficiency while increasing individual request waiting time.
- **D. Assume utilization and user latency always improve together:** Waiting for batch formation can worsen latency.

## 85. A tree uses a staff identifier to achieve excellent training performance. New staff identifiers appear at deployment and quality falls. What explanation is plausible?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. New identifiers must have the same learned behavior:** The training association need not generalize to unseen staff.
- **B. Identifier columns always have a meaningful numerical order:** Their codes usually do not represent task-relevant quantities.
- **C. Training accuracy proves the identifiers should be retained:** A training fit alone does not validate deployable generalization.
- **D. The model learned identity-specific shortcuts rather than transferable task patterns — correct:** An identifier can encourage memorization; assess relevant unseen-identity performance and justified features.

## 86. A service verifies a downloaded file against a checksum supplied by the same untrusted message. What trust-chain gap remains in this integrity check?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Whether every checksum must be stored in a public document:** Public storage is not necessary to verify an artifact and does not resolve the origin's trust.
- **B. Whether the expected checksum and artifact came from a trusted approved origin — correct:** Matching attacker-supplied bytes and checksum does not establish approved provenance.
- **C. Whether two matching hashes establish byte equality under the check:** They can support identity relative to that expected hash, but its trust is the missing issue.
- **D. Whether a hash can ever reveal accidental change:** Hashes can detect differences when compared with a trusted expected value.

## 87. A model is retrained using reviewer decisions, but reviewers now see and tend to accept its suggestions. What should data monitoring examine?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Only monitor endpoint availability:** Availability does not reveal label-feedback bias.
- **B. Label dependence on the model and possible self-reinforcing feedback — correct:** Human decisions influenced by the model may not provide independent ground truth.
- **C. Assume human-entered labels are automatically independent:** The workflow exposes reviewers to the model's outputs.
- **D. Discard all labels from every human forever:** The issue calls for provenance and validation, not indiscriminate rejection.

## 88. Two embedding models produce vectors with the same dimension. An index built with one is queried using the other. What must be established?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. The index can convert spaces by renaming the model:** Metadata changes do not transform vectors.
- **B. Every similar vector proves a supported factual answer:** Similarity is a retrieval signal, not truth verification.
- **C. Compatibility of their representation spaces, not just vector length — correct:** Equal dimensions do not align coordinate meanings; use a matched encoder/index or validated migration.
- **D. Compatibility automatically follows from equal dimension:** Shape compatibility does not imply semantic-space compatibility.

## 89. An AI integration test is flaky because a live provider changes outputs and becomes unavailable. What separation helps?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Use the live provider for all tests and ignore flakiness:** This impairs diagnosis and repeatability of contract checks.
- **B. Keep retrying until a pass and report no failures:** Selective reruns conceal instability and weaken the evidence.
- **C. Stable contract/failure tests with controlled responses plus separate live-provider evaluations — correct:** Deterministic boundary checks and live quality checks answer different questions; neither replaces the other.
- **D. Remove every live evaluation and claim quality is proven:** Controlled doubles cannot establish current provider quality.

## 90. A learning curve improves materially as more training examples are added, with a remaining training-validation gap. What is a defensible next experiment?

Domain 1. Topic: [Baselines, model families & generalization](../index.html#lesson/d1-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Test additional representative data while tracking the same protected validation — correct:** The curve suggests more data may help, but the improvement and cost must be measured.
- **B. Declare that one extra example guarantees perfect performance:** The observed trend is not a guarantee of a zero-error model.
- **C. Move validation rows into training and report the old validation score:** That destroys the protected comparison without a fresh assessment.
- **D. Ignore data coverage and acquire only repeated copies:** Copies do not provide the same information as new representative observations.

## 91. Many users request the same uncached item after expiry, triggering simultaneous expensive generation. Which design consideration addresses the burst?

Domain 5. Topic: [Batch & cache without hiding stale results](../index.html#lesson/d5-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Coordinate equivalent in-flight work and bound regeneration load — correct:** Work coalescing can reduce duplicate generation where authorization and result semantics permit safe sharing.
- **B. Disable every cache authorization check:** Avoiding duplication must not allow cross-user disclosure.
- **C. Spawn unlimited generation for all identical requests:** That can magnify load exactly when the cache stops helping.
- **D. Reuse any tenant's private cached answer:** Identical question text does not establish permission to share personalized content.

## 92. Overall accuracy is stable while performance drops in a newly expanded language group that remains a small fraction of traffic. What monitor is essential?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Delete the new group to keep the graph stable:** Removing evidence would misrepresent the deployed population.
- **B. Assume small groups cannot have meaningful harm:** Population share does not determine whether harms matter.
- **C. Language-slice quality and sample coverage — correct:** An aggregate dominated by older traffic can hide a worsening newly served group.
- **D. Only the weighted overall score:** That score already conceals the relevant decline.

## 93. A supplier's ordinary benchmarks pass, but a triggered subset produces harmful outputs. Which threat must the review consider?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Proof that the aggregate benchmark excludes every attack:** The observed trigger failure contradicts that conclusion.
- **B. Only the model's average response length:** Length does not diagnose the targeted behavior.
- **C. A guarantee that every rare failure is deliberate poisoning:** The pattern warrants investigation; it does not by itself prove intent.
- **D. A targeted backdoor or manipulated behavior masked by aggregate quality — correct:** A trigger-dependent failure can coexist with high average scores; investigate provenance and scoped adversarial evidence.

## 94. A model produces a confident numerical total, but a calculator tool gives a different result from the stated inputs. What is the appropriate next step?

Domain 2. Topic: [Tokens, embeddings & how generation behaves](../index.html#lesson/d2-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Prefer the model because its prose sounds more certain:** Confidence in wording does not validate the numerical result.
- **B. Average both totals without checking either:** Averaging conflicting claims does not establish the correct computation.
- **C. Treat all tool outputs as correct without checking inputs:** A tool can compute the wrong problem if its inputs or contract are wrong.
- **D. Verify the inputs and computation instead of trusting linguistic confidence — correct:** A fluent generated number is not evidence of correct arithmetic; check the relevant calculation.

## 95. A validation set has TP = 40, FP = 10, FN = 40, TN = 910. What are F1 and accuracy, and why can they differ?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. F1 50%; accuracy 50%, because half the positives were missed:** Fifty percent is recall; it does not account for the other metric denominators.
- **B. F1 about 61.5%; accuracy 95%, with many true negatives lifting accuracy — correct:** F1 = 80/(80 + 10 + 40); accuracy = 950/1000. The metrics answer different questions.
- **C. F1 95%; accuracy about 61.5%, because their definitions are interchangeable:** This reverses the calculations; F1 excludes true negatives.
- **D. Both 80%, because precision alone defines both:** Precision is 40/50 = 80%, not F1 or accuracy.

## 96. A release accidentally reverses a binary tool argument from 'include archived' to 'exclude archived'. Type checks still pass. What test targets this?

Domain 3. Topic: [Test integrations & reproduce failures](../index.html#lesson/d3-l4). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Only whether the tool's description is grammatically correct:** Grammar is not a test of the execution semantics.
- **B. A semantic contract test using known archived and active fixtures — correct:** A Boolean's type is unchanged; expected behavior on meaningful examples reveals inverted semantics.
- **C. A check that the field is still a Boolean only:** The error is in meaning, not basic type.
- **D. A comparison of source-file length:** File length does not establish the argument's behavior.

## 97. An alert detects that a required feature's missing rate rose from 1% to 40%. No outcome labels are ready. What does it establish?

Domain 4. Topic: [Monitor drift, delayed labels & retraining decisions](../index.html#lesson/d4-l4). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. An input-quality change needing investigation, not a measured accuracy drop — correct:** Label-free monitoring can detect pipeline symptoms without proving their outcome effect.
- **B. Exactly a 39-percentage-point decrease in accuracy:** Missing-input changes do not directly determine prediction accuracy.
- **C. That the model must be retrained immediately:** A source failure may need correction instead of training on broken inputs.
- **D. That all outputs are wrong:** The observation does not quantify every prediction's correctness.

## 98. Operations accepts service support, but the benefits owner and the person who can stop harmful use remain unnamed. What should collaboration clarify?

Domain 7. Topic: [Collaborate through ownership, review & handoffs](../index.html#lesson/d7-l4). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. The support team's acceptance waives every legal duty:** A collaboration agreement cannot override applicable law.
- **B. A RACI label creates all statutory appointments automatically:** A collaboration matrix and legally required roles have separate conditions.
- **C. The model itself is accountable for business benefit realization:** Accountability belongs to the responsible people and organization.
- **D. Distinct accepted ownership for benefits, operational response, and consequential decisions — correct:** A support handoff alone does not assign every decision. Collaboration roles are not automatic statutory privacy roles.

## 99. Arrivals are 60 jobs/minute. Each ready worker handles 20/minute. Three workers exactly match average demand under ideal conditions. What capacity concern remains?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. No margin for bursts, failures, or variable service times — correct:** Average equality is not a robust latency guarantee; real demand and processing variability need headroom.
- **B. The queue is guaranteed to remain empty forever:** Matching ideal average rates does not eliminate variability.
- **C. Only one worker is needed because capacity is per minute:** One worker's rate is below the arrival rate.
- **D. Three workers provide three times the required margin:** Their combined ideal capacity merely equals the stated average demand.

## 100. A public feedback form automatically promotes user-supplied corrections into the retrieval corpus. What safeguard addresses integrity?

Domain 6. Topic: [Threat-model the system & secure its supply chain](../index.html#lesson/d6-l4). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Controlled review, source identity, and authorized promotion of changes — correct:** A feedback path can become a poisoning route if untrusted submissions directly alter authoritative evidence.
- **B. Accept every correction because a user submitted it:** User input is not automatically verified policy truth.
- **C. Disable lineage to make edits harder to trace:** Traceability helps investigate and recover from manipulation.
- **D. Require fluent prose and assume factual validity:** Writing quality does not verify the correction.

## 101. Search retrieves a superseded procedure and its replacement. Both are relevant to the question. What should a RAG system resolve before answering?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only which passage has more repeated query words:** Lexical repetition is not evidence of current authority.
- **B. Merge incompatible rules into one unqualified procedure:** Combining conflicting versions can produce an unsupported answer.
- **C. Fine-tune on both passages and assume the conflict disappears:** Weight updates do not establish which rule applies at the relevant time.
- **D. Version authority and effective dates for the requested situation — correct:** Semantic relevance alone cannot distinguish the currently applicable procedure from a superseded one.

## 102. A screening threshold is raised while scores remain fixed. What change is normally expected in the predicted-positive set?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. The true labels change with the threshold:** The operating rule changes predictions, not the independently observed outcomes.
- **B. It becomes a subset of the previous positive set — correct:** With the same 'score at least threshold' rule, raising the cutoff cannot add previously negative cases.
- **C. It necessarily gains more predicted positives:** The stricter cutoff removes or retains cases rather than adding them.
- **D. Every missed positive must now be detected:** A higher threshold cannot recover below-threshold positive cases under this rule.

## 103. An illustrative SLO requires 99% of requests to succeed within two seconds. Of 10,000 requests, 9,800 succeed quickly, 150 succeed slowly, and 50 fail. What is the good-request rate?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. 100%; latency and failures need not be counted:** Both are part of the stated good-request definition.
- **B. 98%; the combined success-and-latency objective is missed — correct:** Only 9,800 meet both conditions. Slow successes and failures are bad under this SLI definition.
- **C. 99.5%; every successful request meets the stated objective:** That ignores the required latency condition for 150 successes.
- **D. 99%; all nonfailed requests are fast by definition:** The scenario explicitly includes slow successful requests.

## 104. A retrieval service checks access on source files but sends excerpts to a shared cache without tenant isolation. What boundary still needs enforcement?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Ask the model politely not to mention other tenants:** A prompt is not a cache access-control mechanism.
- **B. Authorization and isolation for derived excerpts and cache reuse — correct:** Protecting the original source is insufficient if derived content can be retrieved across tenants.
- **C. Only sorting cached excerpts by relevance:** Ranking does not restrict recipients.
- **D. Assume excerpts cease to be restricted because they are shorter:** Derived text can retain the source's confidential information.

## 105. A team trains a small set of additional adapter parameters while leaving most base weights frozen. Which category best describes this?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. A prompt demonstration only:** A demonstration in context does not itself update trained parameters.
- **B. An untouched model with no learned changes:** The fitted adapter changes the model's learned behavior.
- **C. Parameter-efficient model adaptation — correct:** Some parameters are trained even though most base weights remain fixed; this differs from prompt-only examples.
- **D. Retrieval with no parameter training:** The scenario explicitly includes training adapter parameters.

## 106. A generated answer includes a remote image URL containing private text in its parameters. The page loads the image automatically. What disclosure path must be controlled?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Assume read-only answers cannot disclose information:** Reading and rendering can still transfer protected content.
- **B. Permit every URL because it is syntactically valid:** URL shape does not establish authorized destinations or data scope.
- **C. Rendering-triggered outbound requests and their data destinations — correct:** Exfiltration can occur through links or images without an explicit email or export tool.
- **D. Only the visible answer's wording:** The outbound request can disclose data even if visible text looks harmless.

## 107. A queue begins with 100 jobs. Arrivals are 50/minute and service is 70/minute for four minutes. With constant rates and no other losses, what remains?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. 180 jobs:** That adds the net drain instead of subtracting it.
- **B. 0 jobs:** The 100-job backlog would require five minutes at this net drain rate.
- **C. 300 jobs:** This adds arrivals without accounting for completed service.
- **D. 20 jobs — correct:** Net drain is 20/minute; four minutes remove 80 from the initial 100.

## 108. Two detectors have equal ROC-AUC but different false-alert rates at the minimum required recall. What should drive the operating choice?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Performance at feasible thresholds that meet recall and workload requirements — correct:** Equal ranking summaries do not imply equal performance at a particular operating point.
- **B. Treat equal AUC as proof of identical deployment behavior:** AUC summarizes a curve; relevant thresholds can still differ.
- **C. Select the model with higher training accuracy:** Training fit does not resolve the stated held-out operating tradeoff.
- **D. Average their model names and ignore alert rates:** The review burden and missed-case constraints require quantitative evidence.

## 109. A daily SLO is met, but most failures occur during one hour when an urgent service is busiest. What should reliability review add?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Time-window and impact analysis alongside the aggregate objective — correct:** A daily average can mask concentrated harm; assess burst behavior and the task's tolerance.
- **B. Declare that meeting the aggregate proves acceptable experience at every time:** The distribution of failures can be highly uneven.
- **C. Remove busy-hour requests from the denominator:** That changes the reported population to conceal the problem.
- **D. Only compare hardware brands:** Hardware labels do not quantify the concentrated user impact.

## 110. A purchase tool validates authorization when a draft is created. The user's permission is revoked before the agent commits it. What check is needed?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Revalidate current permission at the side-effect boundary — correct:** An earlier authorization decision can become stale; the actual commit must remain permitted.
- **B. Use the earlier permission forever because drafting succeeded:** Draft access does not guarantee later execution authority.
- **C. Treat the model's approval as a substitute for current permission:** The model is not the authoritative access-control system.
- **D. Commit first and inspect permission only afterward:** A post-action check cannot prevent the unauthorized side effect.

## 111. A support model's answers are factually grounded but fail a specialized task consistently, even after prompt trials. What supports considering fine-tuning?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Using the final evaluation answers as all training examples:** That would eliminate the independent assessment.
- **B. Suitable authorized examples, a stable task objective, and independent evaluation — correct:** Adaptation may target repeated behavior gaps, but data suitability, cost, and generalization need evidence.
- **C. A belief that fine-tuning guarantees current facts forever:** Fine-tuning does not provide perpetual factual freshness.
- **D. Only access to the largest possible private-data dump:** Volume alone does not establish rights, quality, relevance, or necessity.

## 112. A three-class report averages recall equally across classes. Another weights recall by class frequency. Which statement is correct?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Frequency weighting proves fairness across affected groups:** A metric aggregation rule does not establish fairness or acceptable subgroup harms.
- **B. The equal-weight report gives rare classes more influence relative to their frequency — correct:** Macro averaging treats classes equally, whereas frequency weighting emphasizes common classes.
- **C. Both reports must always be numerically identical:** They differ when class frequencies and recalls differ.
- **D. Equal-weight recall deletes rare-class errors:** It explicitly gives each class a share in the summary.

## 113. A user approves a payment to one recipient. Before execution, an agent changes the recipient while preserving the approval flag. What enforcement is missing?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: A.**

- **A. Approval bound to the exact material arguments, with reapproval after changes — correct:** Approval of one transaction does not authorize a materially different recipient or amount.
- **B. A longer model rationale for the new recipient:** A generated explanation is not user authorization.
- **C. Only a check that both recipients have names:** Names do not bind consent to the intended action.
- **D. Assume an approval flag authorizes unlimited later actions:** A flag without scoped binding loses the meaning of the original approval.

## 114. One candidate saves substantial time but lacks authorized data and a viable review workflow. A smaller candidate has clear data rights, measurable need, and feasible controls. What should prioritization include?

Domain 7. Topic: [Prioritize work & manage adoption and change](../index.html#lesson/d7-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. A rule that the smallest project always wins:** Size alone is not a complete prioritization criterion.
- **B. Value together with feasibility, risk, evidence, and operational ownership — correct:** A larger projected benefit is not sufficient if the project cannot responsibly operate.
- **C. Only the largest promised time saving:** Promises do not resolve blocking data or oversight requirements.
- **D. The most fashionable model name:** Fashion is not evidence of need or deployability.

## 115. An LLM dashboard reports token cost per response. A release generates longer answers with more unsupported claims. What additional operational measure matters?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only total words generated:** More words can mean more cost and more errors.
- **B. Treat every nonempty answer as acceptable:** Nonempty output does not satisfy the task's acceptance criteria.
- **C. Drop quality review to reduce monitoring cost:** That removes the evidence needed to judge useful outcomes.
- **D. Cost per acceptable task outcome, with quality and coverage — correct:** Token efficiency and response count alone do not establish useful safe service value.

## 116. A load balancer gives more traffic to a replica that responds very quickly because it immediately fails requests. What health signal is missing?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. A rule that the fastest response always means the best server:** Immediate errors can be faster than real processing.
- **B. Only the replica's creation date:** Age does not determine current service health.
- **C. A decision to count every response as a successful task:** That would conceal the failed work.
- **D. Successful readiness and error behavior, not response speed alone — correct:** Fast failures are not useful capacity; routing must assess whether a replica can serve valid work.

## 117. A RAG experiment changes chunking, ranking, prompt, and model simultaneously and improves. What experiment best identifies the useful change?

Domain 2. Topic: [Prompting, RAG & fine-tuning: choose the right lever](../index.html#lesson/d2-l5). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Credit the most expensive component without further testing:** Cost is not evidence of causal contribution.
- **B. Assume all four changes independently improve every case:** A combined result does not establish each component's independent effect.
- **C. Compare different components on unrelated case sets:** Different populations confound component attribution.
- **D. Controlled component comparisons on a consistent evaluation set — correct:** Isolating or systematically combining changes helps attribute gains and regressions.

## 118. An extractor returns a valid date string for a day that does not exist in the calendar. What validation is additionally required?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Convert the date into a confidence word:** That discards the contract without resolving validity.
- **B. Semantic date validity, beyond string shape — correct:** An apparently correct format can encode an impossible date; downstream use needs domain checks.
- **C. Only checking that the output is nonempty:** Nonempty text can still contain an impossible date.
- **D. Trust any date emitted by a fluent model:** Fluency does not validate calendar semantics.

## 119. Model A flags 15 cases, 12 correctly. Model B flags 30, 18 correctly. There are 24 actual positives. Which tradeoff is correct?

Domain 1. Topic: [Classification metrics & decision thresholds](../index.html#lesson/d1-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Both metrics are equal because the true-positive counts are proportional:** The predicted-positive and actual-positive denominators are different.
- **B. A has higher precision; B has higher recall — correct:** A precision = 12/15 = 80%, recall = 12/24 = 50%; B precision = 60%, recall = 75%.
- **C. A has both higher precision and higher recall:** B detects more of the same 24 actual positives.
- **D. B has both higher precision and higher recall:** B's larger alert set has a lower correct-alert fraction.

## 120. A defensive test logs a refusal sentence, but the tool audit shows an unauthorized export occurred first. What is the outcome?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. Proof that exporting is safe whenever an apology follows:** Later wording does not undo the disclosure.
- **B. A successful violation under an unauthorized-export test definition — correct:** Measure actual side effects and disclosure, not just the final refusal phrase.
- **C. A successful defense because the final text refused:** The prohibited action already happened.
- **D. An irrelevant tool event because only prose counts:** The test's defined outcome is unauthorized export.

## 121. A trace connects one user request to retrieval, model generation, and validation spans. What is its diagnostic benefit?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Foundation (not an official level).

**Correct answer: B.**

- **A. It replaces every task-specific quality evaluation:** Operational observability and content evaluation complement one another.
- **B. It helps attribute delay and failure to the relevant stage — correct:** Correlated stage records reveal where an end-to-end operation spent time or failed, with appropriate data minimization.
- **C. It proves the final answer is factually correct:** A completed trace records execution, not automatic factual validity.
- **D. It requires every raw confidential payload to be retained:** Useful tracing can use identifiers, timings, outcomes, and appropriately limited diagnostics.

## 122. One long document request consumes far more compute than one short request, but both count as one against the quota. What should admission planning consider?

Domain 5. Topic: [Scale capacity & control queues](../index.html#lesson/d5-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Unlimited long requests are safe if average counts are low:** Costly requests can still exhaust memory or compute.
- **B. Only model parameter count, ignoring request size:** Runtime workload also affects capacity.
- **C. Workload cost, fairness, and bounded resource use beyond raw request count — correct:** Equal request counts can impose unequal load; use appropriate limits and scheduling for the actual workload.
- **D. Every request has equal processing cost by definition:** The described requests explicitly have different costs.

## 123. A document summarizer correctly extracts facts but fails to retain the distinction between mandatory and optional steps. What should its rubric explicitly assess?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Only the count of copied keywords:** Keywords can remain while the governing qualification is wrong.
- **B. Whether the generated text has perfect typography:** Formatting cannot repair a materially changed obligation.
- **C. Preservation of obligation strength and important qualifications — correct:** A useful summary must retain meaning, not just mention the right nouns and facts.
- **D. Only whether the summary is shorter than the original:** Brevity does not validate the meaning of mandatory versus optional.

## 124. Forecast A has absolute errors 0 and 6 litres; B has errors 3 and 3 litres. Which metric distinguishes them here?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. MAE ties at 3 litres; RMSE favors B — correct:** A RMSE = √18 and B RMSE = 3. Squared error emphasizes A's large miss.
- **B. RMSE ties and MAE favors A:** The average absolute errors tie, while squared errors do not.
- **C. Both metrics favor A because one error is zero:** One perfect case does not erase the larger error on the other case.
- **D. Both metrics tie because total absolute error matches:** Equal absolute-error totals do not imply equal squared-error totals.

## 125. An assistant can search and draft emails. A proposed combined tool would search arbitrary files and send them to any address. What interface design is safer?

Domain 3. Topic: [Connect retrieval, structured outputs & tools safely](../index.html#lesson/d3-l5). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. Separate narrow read and send capabilities with recipient, content, and approval checks — correct:** A broad combined operation hides sensitive side effects; explicit bounded tools support enforceable controls.
- **B. Keep the broad tool and rely only on its friendly name:** Names do not limit actual permissions or side effects.
- **C. Let retrieved text select every recipient automatically:** Untrusted content should not determine external disclosure authority.
- **D. Grant administrator access to reduce tool errors:** Broader privilege increases impact rather than defining safe action scope.

## 126. An alert fires on every small metric fluctuation and operators routinely ignore it. What improvement best supports response?

Domain 4. Topic: [Set reliability targets & observe LLM behavior](../index.html#lesson/d4-l5). Practice difficulty: Applied (not an official level).

**Correct answer: C.**

- **A. Turn off all user-impact monitoring:** That removes useful detection rather than improving it.
- **B. Use an alarming title without response guidance:** Wording alone does not establish actionability.
- **C. Actionable impact-based conditions, an owner, and a tested response procedure — correct:** Alerts should indicate a meaningful condition and a feasible action; noise erodes response reliability.
- **D. Increase the number of duplicate alerts:** More noise is unlikely to restore attention.

## 127. An injection defense blocks every attack by rejecting every request, including legitimate tasks. What evaluation is missing?

Domain 6. Topic: [Contain prompt injection, disclosure & tool abuse](../index.html#lesson/d6-l5). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Removal of permission checks to restore all tasks:** Usefulness should improve without discarding required safety boundaries.
- **B. Legitimate-task completion and false rejection alongside scoped attack outcomes — correct:** A defense must be assessed for both risk reduction and useful service; zero attack success alone is incomplete.
- **C. A claim of perfect AI quality from zero executed tools:** Doing nothing does not meet the intended tasks.
- **D. Only the count of rejection messages:** Rejection volume does not distinguish correct denials from lost legitimate work.

## 128. After rollout, 80 staff are eligible, 60 use the tool, and 36 complete the intended task appropriately. What are outcome-based adoption and success among tool users?

Domain 7. Topic: [Prioritize work & manage adoption and change](../index.html#lesson/d7-l5). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. 60% adoption; 75% success among users:** These exchange different numerator/denominator relationships.
- **B. 100% for both because the feature was released:** Release availability is not appropriate task use or task success.
- **C. 45% adoption; 60% success among users — correct:** Use matched denominators: 36/80 = 45% of eligible staff and 36/60 = 60% of users.
- **D. 75% adoption; 45% success among users:** Seventy-five percent counts any tool use; 45% uses the eligible population, not users.

## 129. An agent successfully completes a booking but makes six unnecessary paid tool calls. What should evaluation include besides final-task success?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Only whether the final message says 'done':** A completion claim does not establish outcome or process quality.
- **B. Ignore all intermediate behavior once the task succeeds:** Intermediate calls can incur cost, disclose data, or create unintended changes.
- **C. Reward every extra call regardless of utility:** That encourages unnecessary work rather than bounded effective action.
- **D. Action correctness, permitted scope, tool cost, and efficiency bounds — correct:** A correct final outcome can still involve wasteful or unsafe intermediate actions.

## 130. An urgent-case ranking model has high AUC, but a release requires calibrated risk estimates for staffing forecasts. What evidence is additionally needed?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Only the ordering of the highest-risk case:** A rank does not validate event probabilities across the population.
- **B. A guarantee that every 0.7-risk case has the event:** Calibration concerns frequencies, not deterministic individual outcomes.
- **C. Renaming the ranking score 'probability':** A field label does not establish calibration.
- **D. Observed outcome frequency against predicted probabilities on relevant held-out data — correct:** AUC evaluates ordering; staffing estimates also depend on probability magnitudes being reliable.

## 131. A primary and backup region both depend on the same identity service. That service fails. What resilience gap is exposed?

Domain 5. Topic: [Choose placement & rehearse resilient recovery](../index.html#lesson/d5-l6). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Two regions guarantee no common failure:** They can share critical upstream services.
- **B. Bypassing identity is automatically an acceptable recovery:** Availability does not authorize removing access controls.
- **C. Only the geographic distance between regions matters:** Logical dependency structure is also essential.
- **D. A shared dependency can defeat otherwise separate serving regions — correct:** Failover must include dependency availability and authentication readiness, not only model replicas.

## 132. During rollback, the old model requires a retired feature feed. Its artifact is available but cannot serve. What was missing from recovery planning?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Proof that old weights always operate on any feed:** Models can depend on particular feature contracts.
- **B. A requirement to retrain during every incident:** Retraining is not a guaranteed immediate mitigation for a broken rollback path.
- **C. Verification that the whole rollback bundle and dependencies remain usable — correct:** Recoverability requires compatible features, configuration, credentials, and capacity, not just stored weights.
- **D. Only a smaller artifact filename:** Names do not restore a retired dependency.

## 133. A provider migration preserves output fields but changes rounding and confidence meaning. What must compatibility review include?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Only whether JSON keys are spelled identically:** Identical keys can carry changed semantics.
- **B. Only whether the new provider is cheaper:** Cost does not establish safe substitutability.
- **C. An assumption that adapters automatically preserve all behavior:** An adapter needs specified and tested mappings.
- **D. Behavioral and decision-semantic differences as well as field shapes — correct:** Wire-format compatibility does not guarantee unchanged thresholds, calculations, or interpretation.

## 134. A controller learns of a qualifying breach at 08:00 Monday. Full forensics may finish Thursday afternoon. Under the reviewed Article 24 authority condition, what is appropriate?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Wait until Thursday afternoon before starting any notification work:** Forensic completion does not restart or suspend the stated awareness clock.
- **B. Use 72 hours as a permission to postpone containment:** The authority timeframe is not a universal waiting period.
- **C. Apply the same 72-hour deadline to all subjects and every outage:** Subject notification is separate and conditional; not every operational outage has the same legal duty.
- **D. Notify within the 72-hour awareness window; supply missing information promptly with reasons — correct:** The clock starts at controller awareness, reaching Thursday 08:00 under the stated condition. Containment and escalation proceed now; separate subject notification without undue delay and other duties also need assessment.

## 135. A generative assistant has no reliable evidence for a requested factual claim. Which evaluated behavior is preferable to inventing details?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. State the evidence limitation and route to an appropriate source or review — correct:** An honest bounded response avoids presenting unsupported content as fact.
- **B. Fabricate a plausible citation to maintain coverage:** A false citation creates a misleading appearance of grounding.
- **C. Express the guess with stronger confidence:** Confident wording does not create supporting evidence.
- **D. Treat every refusal as proof of perfect task performance:** Appropriate abstention matters, but coverage and useful outcomes still require evaluation.

## 136. A demand model's aggregate MAE falls because this month's sample contains more low-volume sites. Site-level errors have not improved. What should the comparison control?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Declare that the model improved at every site:** The scenario explicitly states that site-level errors did not improve.
- **B. Population composition and site-level performance on a matched basis — correct:** A changing mix can move the aggregate without any within-site improvement.
- **C. Only the number of decimal places in MAE:** Rounding does not remove the population-composition effect.
- **D. Exclude high-volume sites from future reports:** Selective reporting would hide a deployment-relevant slice.

## 137. An incident team contains a harmful release. Two shifts overlap but neither explicitly accepts incident coordination. What should happen?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. Treat containment as proof that all follow-up duties ended:** Recovery, communication, review, and applicable escalation can remain.
- **B. An explicit ownership handoff with status, decisions, and outstanding actions — correct:** Clear accepted coordination prevents gaps and conflicting mitigation during shift changes.
- **C. Assume the newest person present owns every decision:** Presence does not establish agreed responsibility.
- **D. Stop documenting to make the handoff faster:** A live record supports continuity and evidence preservation.

## 138. A backup job reports success, but no restore has been attempted. What does this leave unverified?

Domain 5. Topic: [Choose placement & rehearse resilient recovery](../index.html#lesson/d5-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. Recoverability of a usable consistent system within the objectives — correct:** Backup completion is not proof that restoration, dependencies, and recovery timing work.
- **B. Whether the success message was displayed:** That is already reported and does not test recovery.
- **C. Whether every live replica is identical forever:** Replication and backup restoration address different concerns.
- **D. Only whether the backup filename sounds official:** Names do not establish recoverability.

## 139. A receiving team gets a runbook with no way to identify which release it describes. What addition improves maintainability?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. Remove all release references to simplify the document:** That makes alignment harder to verify.
- **B. Promise that procedures never change:** Dependencies and system behavior can evolve.
- **C. Version linkage and an owner for keeping the runbook aligned — correct:** Operational guidance should match the deployed contracts, dependencies, and recovery procedures.
- **D. A generic title saying 'latest instructions' only:** A mutable label does not identify the actual applicable release.

## 140. A procurement checklist marks one item 'not binding for third-party'. The adopting entity concludes it need not meet that principle. What is the correction?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Applied (not an official level).

**Correct answer: B.**

- **A. A motivational badge replaces all project assessments:** Entity/product adoption recognition is not a complete compliance guarantee.
- **B. Third-party checklist status does not waive the entity's principles or applicable law — correct:** The reviewed framework distinguishes procurement bindings, entity responsibilities, and statutory duties; ethics roles and legally required privacy roles are also distinct.
- **C. The supplier's checkbox eliminates all controller responsibilities:** Contractual allocation does not erase statutory role analysis.
- **D. Optional ethics registration makes every privacy duty optional:** Optional registration is not a statutory exemption or an individual AI Engineer assessment result.

## 141. Human reviewers disagree about whether a generated answer is acceptable because one prioritizes completeness and another brevity. What should be improved before relying on their ratings?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Applied (not an official level).

**Correct answer: D.**

- **A. Choose the highest rating from each pair automatically:** Selecting favorable ratings hides disagreement and biases the result.
- **B. Replace both ratings with response length alone:** Length is not a complete definition of task correctness.
- **C. Assume disagreement proves the model is always wrong:** Disagreement may reflect rubric ambiguity rather than an incorrect answer.
- **D. A task-specific rubric, examples, and disagreement resolution — correct:** Shared criteria improve consistency and reveal genuine ambiguity in the acceptance definition.

## 142. A regression report gives MSE = 25 square minutes. What is the corresponding RMSE and unit?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. 5 minutes — correct:** Taking the square root restores the original target unit: √25 = 5 minutes.
- **B. 25 minutes:** This removes the squared unit without applying the required square root.
- **C. 5 square minutes:** RMSE is in the original unit, not its square.
- **D. 625 minutes:** Squaring MSE again is not the RMSE definition.

## 143. A fallback returns a clear 'temporarily unavailable' message rather than an unverified AI answer. When can this be appropriate?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: A.**

- **A. When bounded unavailability is safer than unsupported output for the task — correct:** A degraded mode should be justified against the service's risk and user needs, not merely maximize answer count.
- **B. Only when all users prefer silence by definition:** The choice needs contextual assessment, not a universal preference claim.
- **C. Because refusal always counts as a correct answer:** Availability and task success remain separately measurable.
- **D. Because a fallback is exempt from access control:** Required permissions remain applicable in degraded operation.

## 144. An engineer is asked to sign a security assessment outside their competence because a launch is urgent. What is the responsible response?

Domain 7. Topic: [Practice integrity, escalation & continuous learning](../index.html#lesson/d7-l6). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. State the limits, seek qualified review, and document unresolved risk through the proper channel — correct:** Professional integrity requires honest competence and evidence; the reviewed ACM guidance is not itself Saudi law or a waiver of applicable duties.
- **B. Sign and conceal the knowledge gap:** That misrepresents the evidence and the assessor's competence.
- **C. Treat launch urgency as proof of security:** Business timing does not establish that controls are adequate.
- **D. Use an exam badge as project-specific legal approval:** A credential is not a substitute for the required assessment and authorization.

## 145. A hybrid design keeps source records locally but sends derived snippets to an external model and remote telemetry. What must placement review map?

Domain 5. Topic: [Choose placement & rehearse resilient recovery](../index.html#lesson/d5-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: D.**

- **A. Only the location of the source database:** That omits the stated external processing paths.
- **B. Assume snippets can never contain personal information:** Derived text can preserve identifying or sensitive content.
- **C. Treat lower hardware cost as legal approval:** Cost comparison does not establish permissible processing.
- **D. All data flows, access, dependencies, and applicable processing/transfer requirements — correct:** Local sources do not establish that derived content and telemetry remain local or compliant.

## 146. Several teams independently translate the same provider error codes into user messages. Their retry recommendations now conflict. What refactoring boundary is useful?

Domain 3. Topic: [Adapters, compatibility & maintainable handoffs](../index.html#lesson/d3-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Move credentials into user-visible messages:** Exposing secrets is not a maintainability improvement.
- **B. A shared adapter/error policy with tested mappings and clear ownership — correct:** Centralizing provider-specific semantics reduces inconsistent behavior while leaving task-specific UI decisions explicit.
- **C. Copy the newest mapping into every screen manually forever:** Repeated copies encourage divergence and make coordinated changes difficult.
- **D. Ignore error codes and show success for all responses:** That hides failed work and unsafe recovery behavior.

## 147. A team wants a public non-technical account of its chosen fairness criteria and rationale. Which reviewed annex tool most directly fits?

Domain 6. Topic: [Govern risks, document evidence & escalate incidents](../index.html#lesson/d6-l6). Practice difficulty: Foundation (not an official level).

**Correct answer: C.**

- **A. An unlimited raw-prompt archive:** Payload retention is not the requested public rationale and needs its own justification.
- **B. An AI Engineer practice score report:** Practice results are not entity governance evidence or official badge cutoffs.
- **C. Fairness Position Statement — correct:** This explains the fairness position and rationale; it does not replace measured fairness assessments or high-risk pre- and post-conformity assessments.
- **D. A raw database backup:** A backup is not a stakeholder-oriented fairness explanation.

## 148. An agent's benchmark permits refunds up to SAR 100, but evaluation only checks the final written reply. What test is missing?

Domain 2. Topic: [Evaluate generative systems & bound agents](../index.html#lesson/d2-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: C.**

- **A. Testing a different agent with no refund tool:** That does not assess this agent's action boundary.
- **B. Assuming tool execution always matches the final prose:** A model's message and actual side effects can diverge.
- **C. Verification that actual executed actions respect the refund bound — correct:** The reply may look acceptable while the committed amount violates the operational limit.
- **D. Only checking whether the word 'refund' appears:** Keyword presence does not validate the executed transaction.

## 149. A candidate improves average forecast error but repeatedly underestimates demand during critical peaks. What is the best evaluation response?

Domain 1. Topic: [Regression, ranking & defensible model selection](../index.html#lesson/d1-l6). Practice difficulty: Stretch (not an official level).

**Correct answer: B.**

- **A. Replace numerical evaluation with model popularity:** Popularity is not evidence of task-specific error costs.
- **B. Assess peak slices and asymmetric shortage costs alongside the aggregate — correct:** A lower average error may still be unsuitable when critical underprediction causes greater harm.
- **C. Choose solely on average error regardless of the stated use:** The average omits the decision-specific peak and shortage concern.
- **D. Relabel peaks as outliers and remove them automatically:** Relevant deployment conditions should not be discarded simply because they are difficult.

## 150. A post-incident action says 'improve monitoring' without a target condition, owner, or verification. What makes the action useful?

Domain 4. Topic: [Recover safely: fallbacks, rollback & incidents](../index.html#lesson/d4-l6). Practice difficulty: Applied (not an official level).

**Correct answer: A.**

- **A. A specific failure signal, accountable follow-up, and a test of detection and response — correct:** Concrete remediation can be implemented and checked rather than remaining an unverified aspiration.
- **B. A stronger adjective in the action title:** Wording does not define implementation or evidence.
- **C. Deleting the incident record once service recovers:** That loses evidence and follow-up continuity.
- **D. Blaming one operator instead of examining system conditions:** A useful review identifies actionable causes and controls, not just personal blame.

## Scoring and repair

Score = correct answers / 150 × 100%. Each question has one point; no extra domain multiplier. Unanswered questions are incorrect. No official passing score or badge classification is inferred. Group misses by domain and lesson, work the related example without notes, and explain the distractors. A retake is familiar practice.

Source provenance and legal/financial limits: [Sources & exam facts](sources-and-exam-facts.md).
