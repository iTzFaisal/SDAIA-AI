# Domain 4 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

Use only after completing the separate practice paper. Letters refer to the fixed order in the downloadable paper; the website shuffles options.

## 1. Which record most directly links a served prediction to the components and approval evidence used for its release?

Topic: Track experiments & version the whole system. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. A screenshot of the largest training score:** A single score does not identify the served bundle, evaluation basis, or approval.
- **B. An unversioned folder called final:** A mutable folder name does not preserve a stable component identity.
- **C. A release manifest referencing compatible versions and evaluation records — correct:** The manifest ties the actual serving configuration to identifiable evidence and artifacts.
- **D. The current production alias without historical resolution:** Today's alias may refer to a different model from the one that served the prediction.

## 2. An evaluation score rises after the model judge and rubric change, while the assistant itself is unchanged. Which conclusion is best supported?

Topic: Track experiments & version the whole system. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. The measurement basis changed; compare on a controlled common rubric before claiming improvement — correct:** A changed evaluator can change scores without any change to the assistant's answers.
- **B. The assistant necessarily learned new weights:** No assistant change is described; a score is not evidence of parameter updating.
- **C. The new score can replace all old records without qualification:** Removing the evaluator distinction makes historical comparisons misleading.
- **D. A larger judge makes human calibration unnecessary:** Judge size does not eliminate bias or the need to validate the evaluation process.

## 3. A retrieval complaint traces to index I14. What additional lineage evidence is most useful for finding a bad source?

Topic: Track experiments & version the whole system. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Only the support agent's display name:** A person's name does not identify documents or transformations used to build the index.
- **B. Only the total number of model parameters:** Parameter count cannot identify the wrong corpus version or source transformation.
- **C. Every user's full conversation history with unrestricted access:** Broad private histories are unnecessary and introduce exposure without precise source lineage.
- **D. Corpus snapshot, document versions/effective dates, chunking, and embedding/index build records — correct:** These links establish which evidence entered I14 and how it was transformed.

## 4. A hosted model has been retired despite an exact local record of its prior version and seed. What should the team acknowledge?

Topic: Track experiments & version the whole system. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. The seed can recreate the hosted service without its artifacts:** A random seed does not recreate inaccessible weights, infrastructure, or provider behavior.
- **B. Records preserve identity, not guaranteed remote availability; use an evaluated continuity plan — correct:** Reproducibility documentation cannot force a provider to keep a retired model accessible.
- **C. Any replacement with the same output schema is automatically equivalent:** Task behavior, refusals, quality, timing, and cost can differ despite shared structure.
- **D. Erase the old release identity so users cannot notice a change:** Deleting records conceals the dependency change and harms diagnosis and accountability.

## 5. Which statement correctly relates retraining to deployment?

Topic: Build pipelines & enforce release gates. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. New data must automatically replace the production model:** Updated data can be invalid or unrepresentative; candidates need release evidence.
- **B. Retraining creates a candidate that still needs quality and release checks — correct:** Training and promotion are distinct decisions, even when both have automated stages.
- **C. Deployment always requires learning new parameters:** Prompt, index, configuration, or software releases may involve no training.
- **D. A training pipeline cannot fail if it is automated:** Automation repeats defined behavior; it does not guarantee valid inputs or successful stages.

## 6. A candidate reduces overall error but violates a predeclared minimum for an important small region. What is the most defensible gate decision?

Topic: Build pipelines & enforce release gates. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Approve because the region contributes few requests:** Low volume does not override a stated critical requirement for that region.
- **B. Lower the region's minimum after seeing the failure and call the original gate passed:** Changing the criterion to fit a result undermines the claimed approval evidence.
- **C. Deploy first and evaluate the region only if users complain:** The known failing gate warrants repair before broader exposure.
- **D. Block promotion, inspect representative slice evidence, and repair or reject the candidate — correct:** Release gates must enforce the actual constraints, not only the favorable overall average.

## 7. A prompt and tool-policy update bypasses the release pipeline because application code did not change. What is the strongest concern?

Topic: Build pipelines & enforce release gates. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Behavior and permissions can change without code changes and need risk-bearing gates — correct:** Prompts and tool policies are release components that can affect correctness and authority.
- **B. Only trained weight files can change an AI application's behavior:** Retrieval, prompts, settings, and tool constraints also shape outputs and actions.
- **C. A prompt edit is always safer than a code edit:** Safety depends on consequences and controls, not the file category alone.
- **D. The update requires changing the official domain weights:** Engineering changes do not alter the supplied assessment blueprint.

## 8. A staging test passes using one scaler, but production packaging silently includes another fitted scaler. What should a release check establish?

Topic: Build pipelines & enforce release gates. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Only that both files have similar names:** Similar names do not establish identical learned preparation or compatibility.
- **B. Only that training loss is low:** Training fit does not exercise the wrongly packaged serving configuration.
- **C. The actual promoted bundle has the tested model, preparation, contract, and environment — correct:** Testing the real identified artifact bundle catches packaging divergence from approved evidence.
- **D. That production can fit a new scaler on each request:** Refitting on requests changes preparation and does not restore the approved trained process.

## 9. Which statement correctly distinguishes online inference from online learning?

Topic: Choose serving & gradual rollout strategies. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. Both must update model weights for every request:** Serving predictions does not inherently perform parameter updates.
- **B. Online inference can only use last month's stored outputs:** It computes outputs for arriving requests rather than requiring old precomputed predictions.
- **C. Online learning means the response contains a hyperlink:** The term concerns learning updates, not browser navigation or links.
- **D. Online inference serves arriving requests; online learning updates the learned model incrementally — correct:** Prediction-time computation and parameter adaptation are different operations.

## 10. A shadow test copies refund requests to a candidate with access to the live payment tool. Which control is essential?

Topic: Choose serving & gradual rollout strategies. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Allow payments because candidate answers are not shown to users:** Hidden outputs do not prevent real external effects from tool execution.
- **B. Block or simulate consequential execution outside the model and protect copied data — correct:** Shadow comparison must not duplicate refunds or bypass data-handling restrictions.
- **C. Use only a prompt asking the candidate to avoid payments:** Prompt instructions cannot replace enforced control of payment authority.
- **D. Give copied refunds new identities to avoid sharing results:** New identities can create separate duplicate payments rather than prevent them.

## 11. A canary receives 1,000 of 20,000 requests and fails 80; the control fails none. What are candidate and overall error rates?

Topic: Choose serving & gradual rollout strategies. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Candidate 0.4%; overall 8%:** This reverses the denominators: the candidate uses 1,000 requests and overall uses 20,000.
- **B. Candidate 4%; overall 4%:** Neither stated fraction equals 80/1,000 or 80/20,000.
- **C. Candidate 8%; overall 0.4% — correct:** 80/1,000 = 8%; 80/20,000 = 0.4%, showing why per-version monitoring matters.
- **D. Both 0%, because the control succeeded:** A healthy control does not erase failures experienced by the candidate's users.

## 12. A new blue-green environment changed shared persistent data in a form the old application cannot read. Is routing traffic back sufficient recovery?

Topic: Choose serving & gradual rollout strategies. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. No; recovery needs a safe data-compatibility plan as well as routing — correct:** A traffic switch cannot repair state that the previous version no longer understands.
- **B. Yes; blue-green guarantees all state changes are reversible:** Prepared environments do not automatically isolate or reverse shared data migrations.
- **C. Yes; the old model's validation score proves it can read any schema:** Model quality evidence does not establish application compatibility with changed data.
- **D. No; permanently disabling every unrelated service is always necessary:** The response should address affected scope and safe recovery, not indiscriminate shutdown.

## 13. Similar parcel features now imply longer arrival times after a road-access change. Which change does this most directly illustrate?

Topic: Monitor drift, delayed labels & retraining decisions. Practice difficulty: Foundation (not an official question level).

**Correct answer: A.**

- **A. Concept drift — correct:** The relationship between available inputs and the target duration has changed.
- **B. A necessarily malformed JSON response:** A changed real-world relationship can occur while syntax and schema remain valid.
- **C. Only a larger fraction of long-distance inputs:** Input proportions alone are different from changed outcomes for similar features.
- **D. Proof of a credential expiry:** The described outcome shift does not establish an authentication failure.

## 14. Confirmed fraud labels can take 30 days. The team labels yesterday's unconfirmed transactions as legitimate to report recall. What is the best correction?

Topic: Monitor drift, delayed labels & retraining decisions. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Keep the report because no complaint means no fraud:** Absence of an early complaint is not a confirmed negative outcome.
- **B. Report training recall as yesterday's live recall:** Training performance is not evidence about yesterday's operational cohort.
- **C. Use adequately mature event-time cohorts and report label delay, coverage, and selection — correct:** Delayed outcomes require appropriate follow-up and qualified performance claims.
- **D. Remove all positive labels so the metric becomes stable:** Discarding outcomes changes and biases the evidence rather than correcting its timing.

## 15. A feature table stopped updating last week and predictions deteriorate. Which first response is best supported?

Topic: Monitor drift, delayed labels & retraining decisions. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Immediately replace the model with a larger neural network:** Model capacity does not repair stale feature data.
- **B. Investigate and repair the freshness fault, then verify predictions and pipeline health — correct:** The concrete stale-input fault should be corrected before assuming retraining is the remedy.
- **C. Classify every future alarm as harmless seasonality:** A known broken update path is not evidence that later changes are benign seasonal effects.
- **D. Hide the freshness metric to reduce alert volume:** Concealing the signal does not restore current inputs or task quality.

## 16. A recommendation model is retrained only on clicks from items it previously chose to display. What risk should be assessed?

Topic: Monitor drift, delayed labels & retraining decisions. Practice difficulty: Stretch (not an official question level).

**Correct answer: D.**

- **A. Click feedback is always independent of the model's decisions:** The model influences exposure, which influences which clicks can be observed.
- **B. More epochs necessarily remove missing-item coverage:** Repeated fitting does not create observations about items that were never displayed.
- **C. Every clicked item is guaranteed to satisfy the user's true need:** Clicks are a proxy influenced by position, curiosity, and exposure, not unquestionable task truth.
- **D. A feedback loop can reinforce selected exposure and hide useful unshown items — correct:** Evidence collection must account for model-induced selection rather than treating observed clicks as neutral coverage.

## 17. A p95 latency is 1.5 seconds for a defined request set. What does that measurement most directly describe?

Topic: Set reliability targets & observe LLM behavior. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Every request completes within 1.5 seconds:** A percentile leaves a tail of slower requests and is not a universal maximum.
- **B. The mean response time is exactly 1.5 seconds:** A percentile is a distribution position rather than an arithmetic average.
- **C. Roughly 95% of measured requests complete within that value — correct:** The percentile describes latency distribution under the stated measurement basis, not quality.
- **D. 95% of generated facts are correct:** Response time cannot establish factual correctness.

## 18. A fixed-count window has 40,000 eligible requests and a 99.5% good-response objective. With 150 bad requests, what remains in the request error budget?

Topic: Set reliability targets & observe LLM behavior. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. 50 bad requests — correct:** The allowance is 40,000 × 0.005 = 200; subtracting 150 leaves 50 under this fixed counting basis.
- **B. 200 bad requests:** Two hundred is the full allowance before the 150 observed bad requests are deducted.
- **C. 39,800 bad requests:** That is the required good count, not the remaining bad allowance.
- **D. 50 unauthorized disclosures:** A reliability error budget is not permission to violate authorization or privacy rules.

## 19. A support assistant receives 200 requests, answers 120, and 90 answers pass its quality rubric. Which summary uses the correct denominators?

Topic: Set reliability targets & observe LLM behavior. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. 75% coverage; 60% of answers pass:** This swaps 120/200 coverage with 90/120 quality among answers.
- **B. 90% coverage; 120% of answers pass:** Raw counts are not percentages, and neither figure uses the required denominator.
- **C. 75% of all requests produced passing answers:** 90/200 = 45% of all requests produced a passing answer, not 75%.
- **D. 60% answer coverage; 75% of answers pass — correct:** 120/200 = 60% coverage and 90/120 = 75% pass rate among answered requests.

## 20. Latency and token cost rise after an agent update despite unchanged request volume. Which evidence is most useful and proportionate?

Topic: Set reliability targets & observe LLM behavior. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. Only the request count, because cost must track it exactly:** More calls, longer context, or retries per request can change cost independently of volume.
- **B. Minimized traces of stages, attempts, tool loops, versions, durations, and token accounting — correct:** Linked stage metadata can distinguish retrieval delay, repeated calls, and prompt growth without indiscriminate content retention.
- **C. Unrestricted logs of every prompt, credential, and tool reply:** Raw sensitive logging is disproportionate and can expose secrets and private records.
- **D. Only model-judge answer scores:** Answer ratings do not identify where operational latency or repeated token usage arises.

## 21. Which statement best describes a post-incident review that can reduce recurrence?

Topic: Recover safely: fallbacks, rollback & incidents. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. Identify one person to blame and close every follow-up:** Blame alone does not repair contributing conditions or verify preventive changes.
- **B. Document impact, timeline, contributing conditions, and corrective actions with owners and checks — correct:** Owned, verifiable changes turn incident learning into improvements in gates, monitoring, and recovery.
- **C. Declare prevention complete as soon as a report is written:** A document without implemented and verified actions does not reduce recurrence.
- **D. Delete the timeline so future teams cannot repeat the investigation:** Necessary minimized records support learning and clear operational handoffs.

## 22. The normal provider fails and a backup has never been tested for this application's contracts or quality. Which response is safest?

Topic: Recover safely: fallbacks, rollback & incidents. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Switch silently because any provider is equivalent:** Contract, task quality, permission handling, and failure behavior can differ across providers.
- **B. Disable output checks so backup responses always count as success:** Bypassing validation hides errors and can introduce unsafe downstream actions.
- **C. Return invented successful answers until the provider recovers:** Fabricating success conceals the outage and misleads users.
- **D. Use an already evaluated safe degradation or an honest unavailable/manual path — correct:** An unverified substitute is not a recovery guarantee; approved alternatives preserve the task's constraints.

## 23. A deployment command succeeds after an outage, but queued jobs and user-facing quality have not been checked. What is still required?

Topic: Recover safely: fallbacks, rollback & incidents. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Verify user-visible recovery, permissions, quality, and outstanding work — correct:** Deployment success is an intermediate event, not proof that the full service and affected operations recovered.
- **B. Close the incident solely because the command exited successfully:** A successful command does not establish downstream results or user experience.
- **C. Treat every queued consequential action as never executed:** Some outcomes may be uncertain and require authoritative reconciliation before replay.
- **D. Replace the SLO with the deployment exit code:** An internal command result is not a meaningful substitute for the user's defined service outcome.

## 24. A prior release would restore fast answers but would also restore a revoked document-access rule. What is the strongest recovery decision?

Topic: Recover safely: fallbacks, rollback & incidents. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Restore it because availability overrides all access constraints:** Reliability goals cannot authorize access that has been revoked.
- **B. Keep the new unsafe answers active until the full root cause is proven:** Ongoing harm can be contained without waiting for complete causal certainty.
- **C. Preserve current authorization, contain the affected feature, and use a verified compatible repair or fallback — correct:** Recovery must remain safe under current access rules; an old bundle is not automatically an acceptable rollback target.
- **D. Ask the model to hide any newly exposed documents in its final prose:** Prompt-based concealment does not enforce access boundaries before protected retrieval.

## Scoring

Score = correct answers / 24 × 100%. This does not classify an official badge level. Group missed questions by the lesson named above and revisit the worked example.
