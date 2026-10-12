# Mock 3 full weighted practice paper

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

- 150 original questions across all seven domains, separate from lesson quizzes and domain papers. Study all domains first.
- Suggested practice time: 180 minutes. This count and timing are unofficial training choices, not verified exam specifications.
- One best answer and one point per question. Domain weighting comes from question counts, not another score multiplier. Unanswered questions count as incorrect.
- Write answers separately and do not open the separate key until finished. Downloadable order is fixed and mixed by domain; the website shuffles questions and options.
- Retakes use this same set, not fresh assessment. The other available mocks have their own reserved questions. Practice scores do not certify readiness or an official badge level.
- Saudi legal material is an educational summary of the previously reviewed texts, not legal advice or a current comprehensive compliance inventory. Financial exercises use stated simple undiscounted training assumptions.

Practice allocation, approximating the supplied image weights

| Domain | Supplied weight | Questions | Practice share |
| --- | --- | --- | --- |
| 1. Data, ML Foundations & Model Evaluation | 17.3% | 26 | 17.3% |
| 2. Core AI, Deep Learning & Generative AI | 16.7% | 25 | 16.7% |
| 3. AI Software Engineering & Integration | 14% | 21 | 14.0% |
| 4. MLOps, LLMOps, Deployment & Reliability | 18% | 27 | 18.0% |
| 5. Architecture, Infrastructure, Performance & Scalability | 12.6% | 19 | 12.7% |
| 6. Responsible AI, Security & Governance | 14.7% | 22 | 14.7% |
| 7. Business, Professional Practice & Collaboration | 6.7% | 10 | 6.7% |

### 1. Two experiments use identical data snapshots but different label-exclusion rules. Their scores differ. What must their tracking records expose?

A. Only the winning score

B. An assertion that identical snapshots imply identical cohorts

C. Only the model's file size

D. Cohort construction and inclusion rules alongside dataset identity

### 2. A warehouse wants to predict whether an item needs manual inspection before packing. Historical 'inspection' labels record the old routing rule, not independent defect checks. What must be clarified first?

A. Whether the label represents routing decisions or the actual quality outcome

B. Which classifier has the most parameters

C. Whether routing labels can be renamed 'defects'

D. Whether all historical inspections should be treated as defective

### 3. A puzzle solver needs to find a sequence of legal moves to reach a specified configuration. There are no historical labels to fit. Which framing fits?

A. State-space search with defined states, actions, and goal

B. Regression of a supplied continuous target

C. Classification of labeled puzzle photographs

D. Text generation without checking move legality

### 4. A system consistently applies a harmful exclusion rule. A sponsor calls it safe because results are repeatable. Which distinction matters?

A. A repeatable output is necessarily harmless

B. Only random systems can cause harm

C. No assessment is needed once repeatability is measured

D. Reliability of behavior does not by itself establish safety or fairness

### 5. An analysis endpoint returns HTTP 202 with a status URL. A dashboard counts this as a completed successful analysis. What is wrong?

A. 202 necessarily means the user's password is wrong

B. A status URL proves the generated answer is correct

C. All asynchronous work must be rejected as unsupported

D. Acceptance for processing is being confused with completed work

### 6. A source document is corrected, but a generated answer still uses a cached excerpt and an older search index. What architecture responsibility is required?

A. Keep old answers forever because they once passed review

B. Trace and update or invalidate derived versions across the read path

C. Only change the model's display name

D. Treat the newest source as proof that all copies are current

### 7. A sponsor proposes an assistant to shorten a benefits application. Research finds the main delay is a legally required external approval, not form filling. What should feasibility compare?

A. Assume generated text can waive external approval

B. Choose the newest model before mapping the process

C. Report all external waiting as AI time saved

D. Which delays can actually be changed and whether AI adds value within the constraints

### 8. A release uses a feature table that is overwritten daily. What provenance makes an old run more reproducible?

A. A retained permitted snapshot or reproducible versioned reconstruction

B. Only today's mutable table name

C. Keeping every raw personal payload forever

D. The developer's memory of a typical row

### 9. Two branches each record 20 late deliveries. Branch A made 100 deliveries and B made 400. Which comparison is appropriate for delivery-level lateness?

A. A 5%; B 20%, because the larger branch has more deliveries

B. Both 4%, using all 500 deliveries for each branch

C. A 20%; B 5%, using each branch's delivery count

D. Both 20%, because their late-delivery counts match

### 10. A control agent is trained through interaction. Exploring unsafe actions on live equipment could cause injury. What should the learning plan address?

A. Allow every action until enough negative rewards accumulate

B. Assume a high cumulative reward certifies safety

C. Remove all safety constraints to speed training

D. Safe exploration boundaries and validated simulation or controlled trials

### 11. An AI optimization reduces energy per query but triples query volume, making total energy use rise. Which evidence is needed for a social/environmental benefit claim?

A. Whole-process resource use and wider effects, not per-query efficiency alone

B. Only the lower energy number for one query

C. The model file's color on an architecture slide

D. A claim that more automation always reduces total energy

### 12. An AI API expects a list of one or more documents. The request sends an empty list that passes basic JSON parsing. What contract check is missing?

A. Whether the request text is fluent

B. Whether HTTP transport is encrypted

C. Whether the provider can invent a source document

D. The list's required minimum length and item constraints

### 13. An AI pipeline needs shared hierarchical files for an existing application and large independent immutable artifacts. What should storage selection recognize?

A. File and object interfaces serve different access patterns

B. Object storage is always a drop-in local filesystem

C. Block storage automatically supplies semantic document search

D. The largest storage product name determines the architecture

### 14. A model registry marks an artifact approved for one low-risk task. A team wants to reuse it in a high-impact decision workflow. What should happen?

A. Review approval scope and evaluate the new context before promotion

B. Assume the approved tag covers every use

C. Copy the tag to a new name without new evidence

D. Use only the artifact's download count as the release gate

### 15. A forecast is commissioned to reduce inventory shortages. The available target is units sold, and sales stop when stock runs out. What limitation affects the target?

A. A more accurate sales model automatically estimates all unmet demand

B. Stockout days should always be assigned maximum demand

C. Observed sales may understate demand during stockouts

D. Every zero sale proves zero demand

### 16. A route solver uses uniform-cost search. All edge costs are nonnegative. Why is cumulative cost more relevant than the number of visited edges?

A. Every additional edge necessarily costs the same amount

B. Visited-edge count is identical to financial cost

C. Negative rewards prove all route costs are nonnegative

D. Its objective is the lowest summed path cost, not merely the fewest transitions

### 17. A fairness audit finds equal overall group error rates, but errors concentrate among disabled users within one group. What should be investigated?

A. Automatically infer that disability caused every error

B. Relevant intersections, accessibility, and end-to-end effects with protected lawful audit data

C. Nothing, because a single aggregate parity result proves fairness

D. Publish every user's sensitive data for transparency

### 18. A contract allows scores from 0 to 100 inclusive. Another consumer expects risk categories. Why should the adapter not guess category cutoffs?

A. All numbers represent the same category

B. Changing a field name establishes the category semantics

C. The mapping is decision semantics that needs an agreed versioned definition

D. Any equal-width split is automatically approved

### 19. An LLM evaluator changes while the generated system stays fixed. Reported scores improve. What should the experiment report qualify?

A. Evaluator versions never affect scores

B. Old evaluator results should be deleted to avoid confusion

C. Measurement changes may explain the gain; version and compare the evaluator

D. The generating model definitely improved

### 20. A retrieval pipeline's network transfer dominates latency because it sends entire documents although only short authorized excerpts are used. What experiment targets the bottleneck?

A. Add GPUs without changing document transfer

B. Skip all permission checks to transfer sooner

C. Remove relevant evidence and assume quality is unchanged

D. Measure a minimized excerpt-transfer design with equivalent evidence and permissions

### 21. A service publishes average task time among successful users. A new interface causes slow users to abandon sooner, and the published average improves. What should an evaluation add?

A. Completion and abandonment outcomes for all eligible starters

B. Only the average among the fastest successful users

C. A claim that shorter observed time proves improvement for everyone

D. Training accuracy of an unrelated classifier

### 22. A service must both enforce an exact account limit and interpret varied free-text requests. Which division is defensible?

A. Use a search engine's document count as the account limit

B. Require the same algorithm for both jobs regardless of fit

C. Use language interpretation for uncertain text and deterministic enforcement for the limit

D. Let fluent interpretation override the exact account limit

### 23. A pilot automates drafting successfully, but deployment would also authorize final decisions. What should the next approval recognize?

A. Final decisions are merely a cosmetic interface change

B. The added decision authority is a new scope and risk requiring review

C. A successful drafting pilot approves every downstream action

D. A larger model alone supplies the missing authority

### 24. A model is classified little or no risk under the reviewed May 2025 ethics framework. It still processes identifiable customer records. What must not be inferred?

A. That ethical compliance is still recommended

B. That a later change in purpose can require reassessment

C. That the risk classification exempts it from applicable PDPL duties

D. That the actual use and data deserve review

### 25. A provider adds a fifth classification category. The consumer accepts only four documented categories. What is the safest migration response?

A. Assume numeric type checking alone validates the response

B. Delete the new category from monitoring

C. Handle the unknown category explicitly and assess contract compatibility

D. Map every unknown category to the least urgent queue

### 26. A reproducible run records random seed, data, code, and model, but omits the environment and dependency versions. What risk remains?

A. Different runtime behavior may prevent reproduction or change outputs

B. A seed guarantees bit-identical behavior across all environments

C. Data provenance is therefore unnecessary

D. Reproduction should be claimed without rerunning

### 27. A join between shipments and tracking events multiplies each shipment row. The intended model predicts one outcome per shipment. What preparation is needed?

A. Keep only the last event even if it occurred after the prediction

B. Standardize numeric columns without examining the join

C. Define shipment-level event aggregation and check join cardinality

D. Treat each multiplied row as an independent shipment

### 28. In neural training, an optimizer changes weights to reduce a chosen loss. What does the loss provide?

A. A numerical training objective measuring mismatch under the chosen definition

B. A legally verified measure of all possible harm

C. A guarantee that held-out performance improves at each update

D. A replacement for the data's target definition

### 29. A model's weights occupy 8 GB on a 12-GB accelerator. Serving runs out of memory with long concurrent requests. What estimate was incomplete?

A. All out-of-memory events prove corrupted weights

B. Runtime allocations, request-dependent state, and concurrency headroom

C. The assumption that 8 is smaller than 12

D. The model's name must require exactly 12 GB

### 30. A pipeline tests one model artifact but deploys a freshly rebuilt artifact that was not checked. What release integrity gap exists?

A. The evaluated artifact is not demonstrably the deployed artifact

B. Any build with the same display name is identical

C. Testing once proves all later builds pass

D. Deploying without a release record fixes the mismatch

### 31. A counterfactual explanation says changing a recorded attribute would lead to approval, but the attribute cannot realistically be changed. What should communication clarify?

A. A plausible generated rationale replaces the actual decision record

B. A hypothetical model response is not necessarily a feasible or guaranteed remedy

C. Every counterfactual is an enforceable promise of approval

D. Unchangeable attributes should be falsified to obtain approval

### 32. A sensor records extremely high pressure just before real failures. An automatic cleaning rule removes all values beyond the normal range. What is the concern?

A. Every rare value is an invalid measurement

B. Deleting failure precursors guarantees better generalization

C. All high values should be kept without source checks

D. Valid rare warning signals may be removed with genuine measurement errors

### 33. A status endpoint says an analysis is complete, but the result file is not yet readable. Which workflow requirement would prevent this race?

A. Display completion immediately when a worker starts

B. Replace the unreadable output with an empty successful result

C. Require users to refresh indefinitely without status meaning

D. Define completion to include committed, retrievable output

### 34. A training run produces non-finite losses after a preprocessing change. What should be investigated before increasing model size?

A. Only the model's marketing description

B. Whether deleting loss monitoring makes training successful

C. Whether all non-finite values can be reported as zero loss

D. Invalid input values, numerical ranges, and optimization stability

### 35. A training workload splits different examples across several devices and combines their learning updates. What form of parallelism is described?

A. Proof of linear speedup with every added device

B. Data parallelism

C. Model parallelism by definition

D. A response cache

### 36. A required evaluation cannot run because its test service is unavailable. What should a fail-closed promotion gate do?

A. Remove the gate silently for this release

B. Assume unavailable tests imply no defects

C. Treat missing required evidence as a blocked gate, not a pass

D. Substitute a perfect score automatically

### 37. A dataset codes service urgency as low, medium, and high. Unlike arbitrary department names, what property should its representation acknowledge?

A. Urgency levels have no ordering

B. The final test outcome is the appropriate urgency code

C. An order exists, but equally spaced numerical distances are not established

D. High urgency is exactly three times low urgency

### 38. A chatbot deliberately presents itself as a human employee. Which reviewed ethics control is directly relevant?

A. Disclosure that users are interacting with a non-human correspondent

B. A guarantee that the chatbot actually has human feelings

C. Publishing all credentials to make the system transparent

D. Replacing disclosure with a higher accuracy score

### 39. For a one-year simple undiscounted training example, AI costs SAR 80,000 and yields SAR 130,000 benefits. A feasible rules option costs SAR 20,000 and yields SAR 90,000. What is AI's incremental net benefit over the rules option?

A. Positive SAR 110,000

B. Zero, because all AI investments have equal ROI

C. Negative SAR 20,000

D. Positive SAR 40,000

### 40. A dropout layer randomly omits some activations during training. What is the intended general role?

A. A guarantee that inference uses no computation

B. A method for filling missing personal-data records

C. Regularization that can reduce reliance on particular activation paths

D. Permanent deletion of every learned weight

### 41. A document workflow sends a completion event containing only a job ID. The consumer cannot tell which document revision was analyzed. What should the event contract include?

A. The current document text regardless of analyzed revision

B. A claim that events always arrive in source order

C. Stable source identity and analyzed revision alongside result identity

D. Only the worker's friendly display name

### 42. A staging evaluation uses permissive access filters; production uses tenant-specific filters. What must release testing establish?

A. That more retrieved documents always means better production quality

B. Quality and permissions under the production-equivalent filtering policy

C. Only that both deployments use the same model weights

D. That production filters should be disabled for score consistency

### 43. Missing sensor readings become much more common on older machines that also fail more often. The team plans complete-case deletion. What should it assess?

A. Whether deleting rows makes missingness random by definition

B. Whether missing readings can safely be labeled 'no failure'

C. How deletion changes machine coverage and the failure population

D. Only how much smaller the exported file becomes

### 44. A distilled student matches its teacher on ordinary cases. Both fail the same critical exceptions. What evaluation boundary matters?

A. Teacher agreement proves the exceptions are correct

B. A smaller artifact automatically means safer decisions

C. Remove exceptions from assessment because the teacher misses them

D. Assess the student against independent task truth, not teacher agreement alone

### 45. An appeals workflow sends disputed decisions back to the same model with no new evidence or independent reviewer. What should be tested?

A. Only how quickly the model repeats its answer

B. Whether the word 'appeal' is visible in the interface

C. Assume repeated model agreement proves the original decision

D. Whether reconsideration is genuinely independent, accessible, and able to correct the source

### 46. A gradient for one weight is zero on a training step. What can safely be concluded about that step alone?

A. That gradient gives no local first-order change for that weight on that step

B. The entire model is globally optimal

C. Every future gradient must remain zero

D. The deployment predictions must all be correct

### 47. An interactive request times out after five seconds, but its analysis needs a minute. Which redesign is a reasonable starting point?

A. An asynchronous job with explicit status, expiry, and result retrieval

B. Report a final answer before analysis starts

C. Retry the entire job every five seconds unconditionally

D. Remove all failure reporting to keep the interface simple

### 48. A release changes feature names and serving code together. The model expects the prior schema. Which check should block a mismatched bundle?

A. Assuming every schema change is cosmetic

B. An end-to-end compatibility check binding features, model, and serving contract

C. Only confirming each file exists

D. Deploying components in arbitrary order

### 49. A company deploys a risk model to existing customers tomorrow. Its random historical split includes transactions from next month as training examples for yesterday's test transactions. What needs protection?

A. No boundary because the customers are already known

B. Chronological information availability, even though customers recur

C. Only customer uniqueness, regardless of chronology

D. Only equal partition sizes

### 50. An image classifier is highly sensitive to a small shift of an otherwise unchanged object. What model-family property motivates evaluating convolutional features?

A. Shared local filters can detect visual patterns across image locations

B. Convolution makes all image transformations harmless

C. Convolution removes the need for labeled evaluation

D. Convolution treats the image as a verified legal document

### 51. A supplier processes prompts for the customer's service and also uses them for its own unrelated training. What role question requires review?

A. Whether the supplier's separate purposes change its processing-role analysis

B. The supplier is always only a processor for every purpose

C. Outsourcing removes all controller diligence

D. Calling prompts 'telemetry' removes privacy relevance

### 52. A request spends 300 ms queued, 150 ms retrieving, 500 ms generating, and 50 ms validating, sequentially. What end-to-end latency should be reported?

A. 700 ms, excluding queueing

B. 300 ms, because the longest wait defines every sequential path

C. 1,000 ms, including queueing and validation

D. 500 ms, because only model execution counts

### 53. A simple undiscounted training case has SAR 30,000 setup, SAR 3,000 monthly operation, and SAR 3,000 monthly capacity value with no cash expense reduction. What is established?

A. A guaranteed loss in every possible future scenario

B. No positive monthly net capacity-value benefit and no demonstrated cash payback

C. Ten-month cash payback because setup divided by capacity value is ten

D. Immediate profit because the capacity benefit is positive

### 54. A canary shows low error rates for brief requests but receives no traffic from the largest customer tenant. What should expansion consider?

A. Whether exposure covers tenant and workload slices relevant to full rollout

B. Only the elapsed wall-clock duration

C. That the unexposed tenant is proven safe by default

D. Deleting tenant labels from the dashboard

### 55. A retry uses the original idempotency key but changes the transaction amount. What should the operation contract specify?

A. Reject or otherwise explicitly handle conflicting payloads for the same operation key

B. Execute both amounts because the key matches

C. Always choose whichever amount is larger

D. Assume the key proves every payload field is unchanged

### 56. Synthetic training images are created from original photographs before splitting. Some synthetic versions land in training while their originals land in testing. What is the appropriate boundary?

A. Move all originals to testing after training on their variants

B. Use only filenames to decide independence

C. Split source photographs first and keep derived variants with their source

D. Split each synthetic image independently because its pixels differ

### 57. A pretrained encoder is frozen while a small classification head is fitted to new labels. Which parameters are updated?

A. The head's parameters, not the frozen encoder's

B. Every encoder parameter on every example

C. Only the labels themselves

D. No parameters, because pretraining prohibits later fitting

### 58. An encrypted customer dataset can be decrypted by authorized operators. Which claim is not established by encryption alone?

A. That access and purpose rules still matter

B. That recipients and storage copies belong in the data map

C. That the dataset is anonymous or its processing is fully compliant

D. That key handling affects confidentiality

### 59. Candidate and control share a constrained retrieval backend. Candidate traffic saturates it, slowing both groups. What should the rollout analysis recognize?

A. Only compare response wording and ignore latency

B. Shared-resource interference can contaminate the control comparison

C. Equal slowdown proves the candidate has no impact

D. The control cannot be affected by any candidate traffic

### 60. A dashboard adds retrieval p95 to generation p95 and calls the sum the measured request p95. What is the issue?

A. All percentile sums are exact by definition

B. Only median durations can ever be recorded

C. End-to-end p95 ignores sequential stages

D. Component percentiles do not generally add to the end-to-end percentile

### 61. A pipeline removes duplicate rows separately inside training and test partitions. Identical records still exist across the partitions. What should the team check?

A. Whether all legitimate repeat events should be deleted

B. Cross-partition overlap under a justified record-identity rule

C. Only whether each partition has unique local row numbers

D. Whether test accuracy increased after deduplication

### 62. A client has a ten-second total deadline. Each retry independently gets ten seconds, plus backoff. What failure in deadline handling exists?

A. Only the last successful call counts toward latency

B. An HTTP status code automatically enforces the client deadline

C. Retries can exceed the original end-to-end budget

D. Backoff consumes no elapsed time

### 63. An attention visualization highlights a word in a generated answer's context. What should a reviewer avoid inferring from the visualization alone?

A. That model internals and user-facing explanations are distinct evidence

B. That it proves a faithful causal explanation or verifies the answer

C. That the network uses relationships among tokens

D. That the visualization may warrant further analysis

### 64. Two serving environments are ready, and traffic is switched from the old one to the new one after checks. What strategy is described?

A. Shadow evaluation only

B. Offline cross-validation

C. Automatic proof of safe rollback

D. Blue-green deployment

### 65. A sponsor proposes training on sensitive health records under a generic legitimate-interests assertion. What does the kit's reviewed Saudi summary require the team to recognize?

A. The ethics officer's enthusiasm overrides privacy law

B. That this basis has restrictions, including sensitive-data exclusion, and needs qualified review

C. Any useful AI project automatically qualifies

D. A consent checkbox is unnecessary for every conceivable purpose

### 66. An analyst compares 80 configurations by cross-validation and reports the winning cross-validation score as an unbiased final estimate. What concern remains?

A. Cross-validation forbids any model selection

B. Eighty trials guarantee the winner generalizes

C. A configuration name can restore evaluation independence

D. Selection on those scores can make the winning estimate optimistic

### 67. Serving A costs SAR 30 for 100 acceptable tasks; B costs SAR 36 for 150 acceptable tasks under the same acceptance rules. Which has lower cost per acceptable task?

A. B: SAR 0.30 versus A: SAR 0.24

B. B: SAR 0.24 versus A: SAR 0.30

C. A, because total spending is lower

D. Both SAR 0.36 because B sets the common cost

### 68. A pilot completion rate rose in both AI and non-AI branches after a common process simplification. What should a stakeholder report avoid?

A. Explaining that causation is uncertain

B. Investigating whether non-AI improvements provide similar value

C. Attributing the entire observed gain to AI without isolating the common change

D. Reporting descriptive before-and-after rates with caveats

### 69. A provider signals temporary throttling and gives a retry delay. Thousands of jobs are already queued. What should the client coordinate?

A. Ignore all queue growth because the provider will recover

B. Mark throttled jobs complete without output

C. Provider delay, bounded retry policy, and local admission or queue limits

D. Immediate parallel retries for every queued job

### 70. A pretrained vision model performs well on ordinary photos but poorly on scanned diagrams. Which adaptation experiment is most informative?

A. Use target test labels in every adaptation trial

B. Compare frozen and adapted representations on held-out diagram tasks

C. Declare that any pretrained model must work equally on diagrams

D. Choose only on ordinary-photo benchmark rank

### 71. An overnight batch scoring job fails halfway. A rerun would overwrite some delivered scores and duplicate others. What should serving design specify?

A. Append all rerun scores without identity checks

B. Treat batch mode as exempt from operational testing

C. Run identity, output versioning, and safe partial-run recovery

D. Mark the entire batch complete because half was delivered

### 72. A proposed retention policy cites five years after processing ends for processing-activity records, then applies that period to every raw chat. What is the correction?

A. All raw chats must therefore be retained indefinitely

B. Destroy every legally required record immediately

C. An overseas backup is exempt from retention review

D. Keep activity-record duties distinct from justified raw-payload retention

### 73. A binary classifier is compared with a rule that always predicts the most common class. What must a meaningful comparison use?

A. Candidate training accuracy versus the baseline's test recall

B. Only the number of algorithm features

C. A baseline trained using held-out answers

D. The same held-out cases and metrics tied to the important errors

### 74. An Arabic passage and its English translation contain the same ideas but use different token counts in a model. What should budgeting use?

A. The English word count for both passages

B. One token per sentence in every language

C. The count of cited sources only

D. Counts from the actual model's tokenizer for each text

### 75. One downstream call permanently rejects an unsupported file type. What should a useful failure response do?

A. Expose a clear terminal error with a supported recovery path

B. Retry forever with the identical unsupported file

C. Hide the error and show a success checkmark

D. Change the filename extension and assume content compatibility

### 76. A candidate improves one-day latency, but the task's harmful outcome is observable only after two weeks. What should the rollout gate account for?

A. Outcome delay and exposure risk before broad expansion

B. Assume short-term latency proves long-term quality

C. Count all immature outcomes as successful

D. Expand immediately because more exposure makes every risk acceptable

### 77. A cache stores a policy answer before a temporary exception expires. The source file is unchanged when the expiry time passes. What invalidation factor is missing?

A. Only the source filename's character count

B. A guarantee that unchanged files imply unchanged answers forever

C. Permission to ignore all expiry dates for cached responses

D. Time-dependent applicability as well as source version

### 78. A model performs well on a stable development sample but fails after a source field is misparsed in validation. Why is adding regularization not the first remedy?

A. Regularization always increases validation accuracy

B. Validation errors necessarily mean excess parameters

C. The source field should be hidden from all testing

D. A broken data contract needs correction before diagnosing model complexity

### 79. A model adapter downloads additional executable code when loaded. The inspection machine contains production credentials. What boundary should be changed?

A. Accept the artifact solely because its sample accuracy is good

B. Inspect untrusted loading behavior in isolation without production secrets

C. Load it with administrator privileges to avoid inspection errors

D. Assume a small adapter cannot execute harmful code

### 80. Input distributions look unchanged, but the relationship between features and outcomes has shifted after a policy change. Which issue is most consistent?

A. Guaranteed training-data duplication

B. Concept drift

C. Proof that no drift occurred

D. A network timeout by definition

### 81. A conversation service silently discards its earliest messages when context fills. A later answer violates a constraint stated at the start. What should the design check?

A. Whether the model can be assumed to remember every previous session

B. Whether the lost instruction should be blamed on tokenizer spelling alone

C. Which constraints survive context management and how required state is maintained

D. Whether increasing temperature restores discarded text

### 82. Every unit test passes, but a real integration fails because authentication expires mid-job. Which test adds directly relevant evidence?

A. An integration scenario covering credential expiry and safe recovery

B. A duplicate arithmetic unit test unrelated to credentials

C. A test double that never expires credentials

D. A claim that passing unit tests proves the whole workflow

### 83. A team finds a serious limitation in one language but its overall demo is impressive. What should communication include?

A. A guarantee that unseen users will match the demo

B. A claim that disclosure is unnecessary until users complain

C. The affected scope, supporting evidence, uncertainty, and proposed next decision

D. Only the most favorable demonstration

### 84. A batcher waits longer to collect larger batches and improves compute utilization. What tradeoff needs measurement?

A. Only report the largest batch size ever observed

B. Treat waiting time as outside the service experience

C. Queueing delay and tail latency against useful throughput

D. Assume utilization and user latency always improve together

### 85. A tree uses a staff identifier to achieve excellent training performance. New staff identifiers appear at deployment and quality falls. What explanation is plausible?

A. New identifiers must have the same learned behavior

B. Identifier columns always have a meaningful numerical order

C. Training accuracy proves the identifiers should be retained

D. The model learned identity-specific shortcuts rather than transferable task patterns

### 86. A service verifies a downloaded file against a checksum supplied by the same untrusted message. What trust-chain gap remains in this integrity check?

A. Whether every checksum must be stored in a public document

B. Whether the expected checksum and artifact came from a trusted approved origin

C. Whether two matching hashes establish byte equality under the check

D. Whether a hash can ever reveal accidental change

### 87. A model is retrained using reviewer decisions, but reviewers now see and tend to accept its suggestions. What should data monitoring examine?

A. Only monitor endpoint availability

B. Label dependence on the model and possible self-reinforcing feedback

C. Assume human-entered labels are automatically independent

D. Discard all labels from every human forever

### 88. Two embedding models produce vectors with the same dimension. An index built with one is queried using the other. What must be established?

A. The index can convert spaces by renaming the model

B. Every similar vector proves a supported factual answer

C. Compatibility of their representation spaces, not just vector length

D. Compatibility automatically follows from equal dimension

### 89. An AI integration test is flaky because a live provider changes outputs and becomes unavailable. What separation helps?

A. Use the live provider for all tests and ignore flakiness

B. Keep retrying until a pass and report no failures

C. Stable contract/failure tests with controlled responses plus separate live-provider evaluations

D. Remove every live evaluation and claim quality is proven

### 90. A learning curve improves materially as more training examples are added, with a remaining training-validation gap. What is a defensible next experiment?

A. Test additional representative data while tracking the same protected validation

B. Declare that one extra example guarantees perfect performance

C. Move validation rows into training and report the old validation score

D. Ignore data coverage and acquire only repeated copies

### 91. Many users request the same uncached item after expiry, triggering simultaneous expensive generation. Which design consideration addresses the burst?

A. Coordinate equivalent in-flight work and bound regeneration load

B. Disable every cache authorization check

C. Spawn unlimited generation for all identical requests

D. Reuse any tenant's private cached answer

### 92. Overall accuracy is stable while performance drops in a newly expanded language group that remains a small fraction of traffic. What monitor is essential?

A. Delete the new group to keep the graph stable

B. Assume small groups cannot have meaningful harm

C. Language-slice quality and sample coverage

D. Only the weighted overall score

### 93. A supplier's ordinary benchmarks pass, but a triggered subset produces harmful outputs. Which threat must the review consider?

A. Proof that the aggregate benchmark excludes every attack

B. Only the model's average response length

C. A guarantee that every rare failure is deliberate poisoning

D. A targeted backdoor or manipulated behavior masked by aggregate quality

### 94. A model produces a confident numerical total, but a calculator tool gives a different result from the stated inputs. What is the appropriate next step?

A. Prefer the model because its prose sounds more certain

B. Average both totals without checking either

C. Treat all tool outputs as correct without checking inputs

D. Verify the inputs and computation instead of trusting linguistic confidence

### 95. A validation set has TP = 40, FP = 10, FN = 40, TN = 910. What are F1 and accuracy, and why can they differ?

A. F1 50%; accuracy 50%, because half the positives were missed

B. F1 about 61.5%; accuracy 95%, with many true negatives lifting accuracy

C. F1 95%; accuracy about 61.5%, because their definitions are interchangeable

D. Both 80%, because precision alone defines both

### 96. A release accidentally reverses a binary tool argument from 'include archived' to 'exclude archived'. Type checks still pass. What test targets this?

A. Only whether the tool's description is grammatically correct

B. A semantic contract test using known archived and active fixtures

C. A check that the field is still a Boolean only

D. A comparison of source-file length

### 97. An alert detects that a required feature's missing rate rose from 1% to 40%. No outcome labels are ready. What does it establish?

A. An input-quality change needing investigation, not a measured accuracy drop

B. Exactly a 39-percentage-point decrease in accuracy

C. That the model must be retrained immediately

D. That all outputs are wrong

### 98. Operations accepts service support, but the benefits owner and the person who can stop harmful use remain unnamed. What should collaboration clarify?

A. The support team's acceptance waives every legal duty

B. A RACI label creates all statutory appointments automatically

C. The model itself is accountable for business benefit realization

D. Distinct accepted ownership for benefits, operational response, and consequential decisions

### 99. Arrivals are 60 jobs/minute. Each ready worker handles 20/minute. Three workers exactly match average demand under ideal conditions. What capacity concern remains?

A. No margin for bursts, failures, or variable service times

B. The queue is guaranteed to remain empty forever

C. Only one worker is needed because capacity is per minute

D. Three workers provide three times the required margin

### 100. A public feedback form automatically promotes user-supplied corrections into the retrieval corpus. What safeguard addresses integrity?

A. Controlled review, source identity, and authorized promotion of changes

B. Accept every correction because a user submitted it

C. Disable lineage to make edits harder to trace

D. Require fluent prose and assume factual validity

### 101. Search retrieves a superseded procedure and its replacement. Both are relevant to the question. What should a RAG system resolve before answering?

A. Only which passage has more repeated query words

B. Merge incompatible rules into one unqualified procedure

C. Fine-tune on both passages and assume the conflict disappears

D. Version authority and effective dates for the requested situation

### 102. A screening threshold is raised while scores remain fixed. What change is normally expected in the predicted-positive set?

A. The true labels change with the threshold

B. It becomes a subset of the previous positive set

C. It necessarily gains more predicted positives

D. Every missed positive must now be detected

### 103. An illustrative SLO requires 99% of requests to succeed within two seconds. Of 10,000 requests, 9,800 succeed quickly, 150 succeed slowly, and 50 fail. What is the good-request rate?

A. 100%; latency and failures need not be counted

B. 98%; the combined success-and-latency objective is missed

C. 99.5%; every successful request meets the stated objective

D. 99%; all nonfailed requests are fast by definition

### 104. A retrieval service checks access on source files but sends excerpts to a shared cache without tenant isolation. What boundary still needs enforcement?

A. Ask the model politely not to mention other tenants

B. Authorization and isolation for derived excerpts and cache reuse

C. Only sorting cached excerpts by relevance

D. Assume excerpts cease to be restricted because they are shorter

### 105. A team trains a small set of additional adapter parameters while leaving most base weights frozen. Which category best describes this?

A. A prompt demonstration only

B. An untouched model with no learned changes

C. Parameter-efficient model adaptation

D. Retrieval with no parameter training

### 106. A generated answer includes a remote image URL containing private text in its parameters. The page loads the image automatically. What disclosure path must be controlled?

A. Assume read-only answers cannot disclose information

B. Permit every URL because it is syntactically valid

C. Rendering-triggered outbound requests and their data destinations

D. Only the visible answer's wording

### 107. A queue begins with 100 jobs. Arrivals are 50/minute and service is 70/minute for four minutes. With constant rates and no other losses, what remains?

A. 180 jobs

B. 0 jobs

C. 300 jobs

D. 20 jobs

### 108. Two detectors have equal ROC-AUC but different false-alert rates at the minimum required recall. What should drive the operating choice?

A. Performance at feasible thresholds that meet recall and workload requirements

B. Treat equal AUC as proof of identical deployment behavior

C. Select the model with higher training accuracy

D. Average their model names and ignore alert rates

### 109. A daily SLO is met, but most failures occur during one hour when an urgent service is busiest. What should reliability review add?

A. Time-window and impact analysis alongside the aggregate objective

B. Declare that meeting the aggregate proves acceptable experience at every time

C. Remove busy-hour requests from the denominator

D. Only compare hardware brands

### 110. A purchase tool validates authorization when a draft is created. The user's permission is revoked before the agent commits it. What check is needed?

A. Revalidate current permission at the side-effect boundary

B. Use the earlier permission forever because drafting succeeded

C. Treat the model's approval as a substitute for current permission

D. Commit first and inspect permission only afterward

### 111. A support model's answers are factually grounded but fail a specialized task consistently, even after prompt trials. What supports considering fine-tuning?

A. Using the final evaluation answers as all training examples

B. Suitable authorized examples, a stable task objective, and independent evaluation

C. A belief that fine-tuning guarantees current facts forever

D. Only access to the largest possible private-data dump

### 112. A three-class report averages recall equally across classes. Another weights recall by class frequency. Which statement is correct?

A. Frequency weighting proves fairness across affected groups

B. The equal-weight report gives rare classes more influence relative to their frequency

C. Both reports must always be numerically identical

D. Equal-weight recall deletes rare-class errors

### 113. A user approves a payment to one recipient. Before execution, an agent changes the recipient while preserving the approval flag. What enforcement is missing?

A. Approval bound to the exact material arguments, with reapproval after changes

B. A longer model rationale for the new recipient

C. Only a check that both recipients have names

D. Assume an approval flag authorizes unlimited later actions

### 114. One candidate saves substantial time but lacks authorized data and a viable review workflow. A smaller candidate has clear data rights, measurable need, and feasible controls. What should prioritization include?

A. A rule that the smallest project always wins

B. Value together with feasibility, risk, evidence, and operational ownership

C. Only the largest promised time saving

D. The most fashionable model name

### 115. An LLM dashboard reports token cost per response. A release generates longer answers with more unsupported claims. What additional operational measure matters?

A. Only total words generated

B. Treat every nonempty answer as acceptable

C. Drop quality review to reduce monitoring cost

D. Cost per acceptable task outcome, with quality and coverage

### 116. A load balancer gives more traffic to a replica that responds very quickly because it immediately fails requests. What health signal is missing?

A. A rule that the fastest response always means the best server

B. Only the replica's creation date

C. A decision to count every response as a successful task

D. Successful readiness and error behavior, not response speed alone

### 117. A RAG experiment changes chunking, ranking, prompt, and model simultaneously and improves. What experiment best identifies the useful change?

A. Credit the most expensive component without further testing

B. Assume all four changes independently improve every case

C. Compare different components on unrelated case sets

D. Controlled component comparisons on a consistent evaluation set

### 118. An extractor returns a valid date string for a day that does not exist in the calendar. What validation is additionally required?

A. Convert the date into a confidence word

B. Semantic date validity, beyond string shape

C. Only checking that the output is nonempty

D. Trust any date emitted by a fluent model

### 119. Model A flags 15 cases, 12 correctly. Model B flags 30, 18 correctly. There are 24 actual positives. Which tradeoff is correct?

A. Both metrics are equal because the true-positive counts are proportional

B. A has higher precision; B has higher recall

C. A has both higher precision and higher recall

D. B has both higher precision and higher recall

### 120. A defensive test logs a refusal sentence, but the tool audit shows an unauthorized export occurred first. What is the outcome?

A. Proof that exporting is safe whenever an apology follows

B. A successful violation under an unauthorized-export test definition

C. A successful defense because the final text refused

D. An irrelevant tool event because only prose counts

### 121. A trace connects one user request to retrieval, model generation, and validation spans. What is its diagnostic benefit?

A. It replaces every task-specific quality evaluation

B. It helps attribute delay and failure to the relevant stage

C. It proves the final answer is factually correct

D. It requires every raw confidential payload to be retained

### 122. One long document request consumes far more compute than one short request, but both count as one against the quota. What should admission planning consider?

A. Unlimited long requests are safe if average counts are low

B. Only model parameter count, ignoring request size

C. Workload cost, fairness, and bounded resource use beyond raw request count

D. Every request has equal processing cost by definition

### 123. A document summarizer correctly extracts facts but fails to retain the distinction between mandatory and optional steps. What should its rubric explicitly assess?

A. Only the count of copied keywords

B. Whether the generated text has perfect typography

C. Preservation of obligation strength and important qualifications

D. Only whether the summary is shorter than the original

### 124. Forecast A has absolute errors 0 and 6 litres; B has errors 3 and 3 litres. Which metric distinguishes them here?

A. MAE ties at 3 litres; RMSE favors B

B. RMSE ties and MAE favors A

C. Both metrics favor A because one error is zero

D. Both metrics tie because total absolute error matches

### 125. An assistant can search and draft emails. A proposed combined tool would search arbitrary files and send them to any address. What interface design is safer?

A. Separate narrow read and send capabilities with recipient, content, and approval checks

B. Keep the broad tool and rely only on its friendly name

C. Let retrieved text select every recipient automatically

D. Grant administrator access to reduce tool errors

### 126. An alert fires on every small metric fluctuation and operators routinely ignore it. What improvement best supports response?

A. Turn off all user-impact monitoring

B. Use an alarming title without response guidance

C. Actionable impact-based conditions, an owner, and a tested response procedure

D. Increase the number of duplicate alerts

### 127. An injection defense blocks every attack by rejecting every request, including legitimate tasks. What evaluation is missing?

A. Removal of permission checks to restore all tasks

B. Legitimate-task completion and false rejection alongside scoped attack outcomes

C. A claim of perfect AI quality from zero executed tools

D. Only the count of rejection messages

### 128. After rollout, 80 staff are eligible, 60 use the tool, and 36 complete the intended task appropriately. What are outcome-based adoption and success among tool users?

A. 60% adoption; 75% success among users

B. 100% for both because the feature was released

C. 45% adoption; 60% success among users

D. 75% adoption; 45% success among users

### 129. An agent successfully completes a booking but makes six unnecessary paid tool calls. What should evaluation include besides final-task success?

A. Only whether the final message says 'done'

B. Ignore all intermediate behavior once the task succeeds

C. Reward every extra call regardless of utility

D. Action correctness, permitted scope, tool cost, and efficiency bounds

### 130. An urgent-case ranking model has high AUC, but a release requires calibrated risk estimates for staffing forecasts. What evidence is additionally needed?

A. Only the ordering of the highest-risk case

B. A guarantee that every 0.7-risk case has the event

C. Renaming the ranking score 'probability'

D. Observed outcome frequency against predicted probabilities on relevant held-out data

### 131. A primary and backup region both depend on the same identity service. That service fails. What resilience gap is exposed?

A. Two regions guarantee no common failure

B. Bypassing identity is automatically an acceptable recovery

C. Only the geographic distance between regions matters

D. A shared dependency can defeat otherwise separate serving regions

### 132. During rollback, the old model requires a retired feature feed. Its artifact is available but cannot serve. What was missing from recovery planning?

A. Proof that old weights always operate on any feed

B. A requirement to retrain during every incident

C. Verification that the whole rollback bundle and dependencies remain usable

D. Only a smaller artifact filename

### 133. A provider migration preserves output fields but changes rounding and confidence meaning. What must compatibility review include?

A. Only whether JSON keys are spelled identically

B. Only whether the new provider is cheaper

C. An assumption that adapters automatically preserve all behavior

D. Behavioral and decision-semantic differences as well as field shapes

### 134. A controller learns of a qualifying breach at 08:00 Monday. Full forensics may finish Thursday afternoon. Under the reviewed Article 24 authority condition, what is appropriate?

A. Wait until Thursday afternoon before starting any notification work

B. Use 72 hours as a permission to postpone containment

C. Apply the same 72-hour deadline to all subjects and every outage

D. Notify within the 72-hour awareness window; supply missing information promptly with reasons

### 135. A generative assistant has no reliable evidence for a requested factual claim. Which evaluated behavior is preferable to inventing details?

A. State the evidence limitation and route to an appropriate source or review

B. Fabricate a plausible citation to maintain coverage

C. Express the guess with stronger confidence

D. Treat every refusal as proof of perfect task performance

### 136. A demand model's aggregate MAE falls because this month's sample contains more low-volume sites. Site-level errors have not improved. What should the comparison control?

A. Declare that the model improved at every site

B. Population composition and site-level performance on a matched basis

C. Only the number of decimal places in MAE

D. Exclude high-volume sites from future reports

### 137. An incident team contains a harmful release. Two shifts overlap but neither explicitly accepts incident coordination. What should happen?

A. Treat containment as proof that all follow-up duties ended

B. An explicit ownership handoff with status, decisions, and outstanding actions

C. Assume the newest person present owns every decision

D. Stop documenting to make the handoff faster

### 138. A backup job reports success, but no restore has been attempted. What does this leave unverified?

A. Recoverability of a usable consistent system within the objectives

B. Whether the success message was displayed

C. Whether every live replica is identical forever

D. Only whether the backup filename sounds official

### 139. A receiving team gets a runbook with no way to identify which release it describes. What addition improves maintainability?

A. Remove all release references to simplify the document

B. Promise that procedures never change

C. Version linkage and an owner for keeping the runbook aligned

D. A generic title saying 'latest instructions' only

### 140. A procurement checklist marks one item 'not binding for third-party'. The adopting entity concludes it need not meet that principle. What is the correction?

A. A motivational badge replaces all project assessments

B. Third-party checklist status does not waive the entity's principles or applicable law

C. The supplier's checkbox eliminates all controller responsibilities

D. Optional ethics registration makes every privacy duty optional

### 141. Human reviewers disagree about whether a generated answer is acceptable because one prioritizes completeness and another brevity. What should be improved before relying on their ratings?

A. Choose the highest rating from each pair automatically

B. Replace both ratings with response length alone

C. Assume disagreement proves the model is always wrong

D. A task-specific rubric, examples, and disagreement resolution

### 142. A regression report gives MSE = 25 square minutes. What is the corresponding RMSE and unit?

A. 5 minutes

B. 25 minutes

C. 5 square minutes

D. 625 minutes

### 143. A fallback returns a clear 'temporarily unavailable' message rather than an unverified AI answer. When can this be appropriate?

A. When bounded unavailability is safer than unsupported output for the task

B. Only when all users prefer silence by definition

C. Because refusal always counts as a correct answer

D. Because a fallback is exempt from access control

### 144. An engineer is asked to sign a security assessment outside their competence because a launch is urgent. What is the responsible response?

A. State the limits, seek qualified review, and document unresolved risk through the proper channel

B. Sign and conceal the knowledge gap

C. Treat launch urgency as proof of security

D. Use an exam badge as project-specific legal approval

### 145. A hybrid design keeps source records locally but sends derived snippets to an external model and remote telemetry. What must placement review map?

A. Only the location of the source database

B. Assume snippets can never contain personal information

C. Treat lower hardware cost as legal approval

D. All data flows, access, dependencies, and applicable processing/transfer requirements

### 146. Several teams independently translate the same provider error codes into user messages. Their retry recommendations now conflict. What refactoring boundary is useful?

A. Move credentials into user-visible messages

B. A shared adapter/error policy with tested mappings and clear ownership

C. Copy the newest mapping into every screen manually forever

D. Ignore error codes and show success for all responses

### 147. A team wants a public non-technical account of its chosen fairness criteria and rationale. Which reviewed annex tool most directly fits?

A. An unlimited raw-prompt archive

B. An AI Engineer practice score report

C. Fairness Position Statement

D. A raw database backup

### 148. An agent's benchmark permits refunds up to SAR 100, but evaluation only checks the final written reply. What test is missing?

A. Testing a different agent with no refund tool

B. Assuming tool execution always matches the final prose

C. Verification that actual executed actions respect the refund bound

D. Only checking whether the word 'refund' appears

### 149. A candidate improves average forecast error but repeatedly underestimates demand during critical peaks. What is the best evaluation response?

A. Replace numerical evaluation with model popularity

B. Assess peak slices and asymmetric shortage costs alongside the aggregate

C. Choose solely on average error regardless of the stated use

D. Relabel peaks as outliers and remove them automatically

### 150. A post-incident action says 'improve monitoring' without a target condition, owner, or verification. What makes the action useful?

A. A specific failure signal, accountable follow-up, and a test of detection and response

B. A stronger adjective in the action title

C. Deleting the incident record once service recovers

D. Blaming one operator instead of examining system conditions

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

25. ____

26. ____

27. ____

28. ____

29. ____

30. ____

31. ____

32. ____

33. ____

34. ____

35. ____

36. ____

37. ____

38. ____

39. ____

40. ____

41. ____

42. ____

43. ____

44. ____

45. ____

46. ____

47. ____

48. ____

49. ____

50. ____

51. ____

52. ____

53. ____

54. ____

55. ____

56. ____

57. ____

58. ____

59. ____

60. ____

61. ____

62. ____

63. ____

64. ____

65. ____

66. ____

67. ____

68. ____

69. ____

70. ____

71. ____

72. ____

73. ____

74. ____

75. ____

76. ____

77. ____

78. ____

79. ____

80. ____

81. ____

82. ____

83. ____

84. ____

85. ____

86. ____

87. ____

88. ____

89. ____

90. ____

91. ____

92. ____

93. ____

94. ____

95. ____

96. ____

97. ____

98. ____

99. ____

100. ____

101. ____

102. ____

103. ____

104. ____

105. ____

106. ____

107. ____

108. ____

109. ____

110. ____

111. ____

112. ____

113. ____

114. ____

115. ____

116. ____

117. ____

118. ____

119. ____

120. ____

121. ____

122. ____

123. ____

124. ____

125. ____

126. ____

127. ____

128. ____

129. ____

130. ____

131. ____

132. ____

133. ____

134. ____

135. ____

136. ____

137. ____

138. ____

139. ____

140. ____

141. ____

142. ____

143. ____

144. ____

145. ____

146. ____

147. ____

148. ____

149. ____

150. ____
