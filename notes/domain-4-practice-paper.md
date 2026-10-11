# Domain 4 practice paper

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

24 original questions; one best answer each. Suggested practice time: 45 minutes, an unofficial training choice. Write your answers separately. Unanswered questions count as incorrect. The answer key is in a separate file. This is not a full seven-domain mock.

### 1. Which record most directly links a served prediction to the components and approval evidence used for its release?

A. A screenshot of the largest training score

B. An unversioned folder called final

C. A release manifest referencing compatible versions and evaluation records

D. The current production alias without historical resolution

### 2. An evaluation score rises after the model judge and rubric change, while the assistant itself is unchanged. Which conclusion is best supported?

A. The measurement basis changed; compare on a controlled common rubric before claiming improvement

B. The assistant necessarily learned new weights

C. The new score can replace all old records without qualification

D. A larger judge makes human calibration unnecessary

### 3. A retrieval complaint traces to index I14. What additional lineage evidence is most useful for finding a bad source?

A. Only the support agent's display name

B. Only the total number of model parameters

C. Every user's full conversation history with unrestricted access

D. Corpus snapshot, document versions/effective dates, chunking, and embedding/index build records

### 4. A hosted model has been retired despite an exact local record of its prior version and seed. What should the team acknowledge?

A. The seed can recreate the hosted service without its artifacts

B. Records preserve identity, not guaranteed remote availability; use an evaluated continuity plan

C. Any replacement with the same output schema is automatically equivalent

D. Erase the old release identity so users cannot notice a change

### 5. Which statement correctly relates retraining to deployment?

A. New data must automatically replace the production model

B. Retraining creates a candidate that still needs quality and release checks

C. Deployment always requires learning new parameters

D. A training pipeline cannot fail if it is automated

### 6. A candidate reduces overall error but violates a predeclared minimum for an important small region. What is the most defensible gate decision?

A. Approve because the region contributes few requests

B. Lower the region's minimum after seeing the failure and call the original gate passed

C. Deploy first and evaluate the region only if users complain

D. Block promotion, inspect representative slice evidence, and repair or reject the candidate

### 7. A prompt and tool-policy update bypasses the release pipeline because application code did not change. What is the strongest concern?

A. Behavior and permissions can change without code changes and need risk-bearing gates

B. Only trained weight files can change an AI application's behavior

C. A prompt edit is always safer than a code edit

D. The update requires changing the official domain weights

### 8. A staging test passes using one scaler, but production packaging silently includes another fitted scaler. What should a release check establish?

A. Only that both files have similar names

B. Only that training loss is low

C. The actual promoted bundle has the tested model, preparation, contract, and environment

D. That production can fit a new scaler on each request

### 9. Which statement correctly distinguishes online inference from online learning?

A. Both must update model weights for every request

B. Online inference can only use last month's stored outputs

C. Online learning means the response contains a hyperlink

D. Online inference serves arriving requests; online learning updates the learned model incrementally

### 10. A shadow test copies refund requests to a candidate with access to the live payment tool. Which control is essential?

A. Allow payments because candidate answers are not shown to users

B. Block or simulate consequential execution outside the model and protect copied data

C. Use only a prompt asking the candidate to avoid payments

D. Give copied refunds new identities to avoid sharing results

### 11. A canary receives 1,000 of 20,000 requests and fails 80; the control fails none. What are candidate and overall error rates?

A. Candidate 0.4%; overall 8%

B. Candidate 4%; overall 4%

C. Candidate 8%; overall 0.4%

D. Both 0%, because the control succeeded

### 12. A new blue-green environment changed shared persistent data in a form the old application cannot read. Is routing traffic back sufficient recovery?

A. No; recovery needs a safe data-compatibility plan as well as routing

B. Yes; blue-green guarantees all state changes are reversible

C. Yes; the old model's validation score proves it can read any schema

D. No; permanently disabling every unrelated service is always necessary

### 13. Similar parcel features now imply longer arrival times after a road-access change. Which change does this most directly illustrate?

A. Concept drift

B. A necessarily malformed JSON response

C. Only a larger fraction of long-distance inputs

D. Proof of a credential expiry

### 14. Confirmed fraud labels can take 30 days. The team labels yesterday's unconfirmed transactions as legitimate to report recall. What is the best correction?

A. Keep the report because no complaint means no fraud

B. Report training recall as yesterday's live recall

C. Use adequately mature event-time cohorts and report label delay, coverage, and selection

D. Remove all positive labels so the metric becomes stable

### 15. A feature table stopped updating last week and predictions deteriorate. Which first response is best supported?

A. Immediately replace the model with a larger neural network

B. Investigate and repair the freshness fault, then verify predictions and pipeline health

C. Classify every future alarm as harmless seasonality

D. Hide the freshness metric to reduce alert volume

### 16. A recommendation model is retrained only on clicks from items it previously chose to display. What risk should be assessed?

A. Click feedback is always independent of the model's decisions

B. More epochs necessarily remove missing-item coverage

C. Every clicked item is guaranteed to satisfy the user's true need

D. A feedback loop can reinforce selected exposure and hide useful unshown items

### 17. A p95 latency is 1.5 seconds for a defined request set. What does that measurement most directly describe?

A. Every request completes within 1.5 seconds

B. The mean response time is exactly 1.5 seconds

C. Roughly 95% of measured requests complete within that value

D. 95% of generated facts are correct

### 18. A fixed-count window has 40,000 eligible requests and a 99.5% good-response objective. With 150 bad requests, what remains in the request error budget?

A. 50 bad requests

B. 200 bad requests

C. 39,800 bad requests

D. 50 unauthorized disclosures

### 19. A support assistant receives 200 requests, answers 120, and 90 answers pass its quality rubric. Which summary uses the correct denominators?

A. 75% coverage; 60% of answers pass

B. 90% coverage; 120% of answers pass

C. 75% of all requests produced passing answers

D. 60% answer coverage; 75% of answers pass

### 20. Latency and token cost rise after an agent update despite unchanged request volume. Which evidence is most useful and proportionate?

A. Only the request count, because cost must track it exactly

B. Minimized traces of stages, attempts, tool loops, versions, durations, and token accounting

C. Unrestricted logs of every prompt, credential, and tool reply

D. Only model-judge answer scores

### 21. Which statement best describes a post-incident review that can reduce recurrence?

A. Identify one person to blame and close every follow-up

B. Document impact, timeline, contributing conditions, and corrective actions with owners and checks

C. Declare prevention complete as soon as a report is written

D. Delete the timeline so future teams cannot repeat the investigation

### 22. The normal provider fails and a backup has never been tested for this application's contracts or quality. Which response is safest?

A. Switch silently because any provider is equivalent

B. Disable output checks so backup responses always count as success

C. Return invented successful answers until the provider recovers

D. Use an already evaluated safe degradation or an honest unavailable/manual path

### 23. A deployment command succeeds after an outage, but queued jobs and user-facing quality have not been checked. What is still required?

A. Verify user-visible recovery, permissions, quality, and outstanding work

B. Close the incident solely because the command exited successfully

C. Treat every queued consequential action as never executed

D. Replace the SLO with the deployment exit code

### 24. A prior release would restore fast answers but would also restore a revoked document-access rule. What is the strongest recovery decision?

A. Restore it because availability overrides all access constraints

B. Keep the new unsafe answers active until the full root cause is proven

C. Preserve current authorization, contain the affected feature, and use a verified compatible repair or fallback

D. Ask the model to hide any newly exposed documents in its final prose

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
