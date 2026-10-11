# Domain 5 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

Use only after completing the separate practice paper. Letters refer to the fixed order in the downloadable paper; the website shuffles options.

## 1. A team needs to store versioned image datasets and model artifacts as individually addressed items. Which storage abstraction most directly fits?

Topic: Map the architecture & choose storage. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. A semantic answer cache as the only persistent store:** Temporary answer reuse is not a durable source for datasets and release artifacts.
- **B. Object storage with appropriate version, access, and recovery controls — correct:** Individually addressed objects suit these artifacts, while actual durability and access requirements still need verification.
- **C. Only each application replica's temporary memory:** Temporary local memory loses required artifacts when the instance disappears.
- **D. A transaction status inferred from embeddings:** Similarity results do not provide the artifact storage or authoritative status required.

## 2. A routing service adds replicas, but job status is saved only in the replica that accepted the job. What is the main design risk?

Topic: Map the architecture & choose storage. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. The model automatically becomes better calibrated:** Application state placement does not establish probability calibration.
- **B. The vector dimension must increase:** Embedding dimensionality is unrelated to preserving job state across replicas.
- **C. The system can no longer use object storage:** Adding application replicas does not prohibit appropriate artifact storage.
- **D. Rerouting or instance loss can lose or contradict required job progress — correct:** Unique local durable truth makes replaceability unsafe unless progress is preserved in an appropriate shared system.

## 3. A lost vector index must be rebuilt. Which evidence is most important for a compatible, safe reconstruction?

Topic: Map the architecture & choose storage. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Authorized source versions, transformation/embedding configuration, and current access/deletion state — correct:** Rebuilding requires lineage and compatibility, while current access and legitimate deletion requirements must survive recovery.
- **B. Only the application's color scheme:** Visual settings do not reproduce searchable representations or permission behavior.
- **C. Any embedding model with the same vector length:** Equal dimensionality does not guarantee query and document vectors inhabit compatible learned spaces.
- **D. Old final answers copied back as authoritative documents:** Generated outputs are not a trustworthy substitute for approved source material.

## 4. A team proposes separate services for every small transformation despite low traffic and no need to scale them independently. What is the strongest architecture review?

Topic: Map the architecture & choose storage. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Approve because more network boundaries always improve reliability:** Every boundary adds dependencies and possible failures rather than automatically improving reliability.
- **B. Reject all service boundaries in every future system:** Some boundaries earn their place through isolation, ownership, or independently constrained workloads.
- **C. Compare with a simpler design using requirements, ownership, latency, and failure costs — correct:** Complexity should be justified by the constraints and operational tradeoffs, not component count.
- **D. Choose whichever design uses the most expensive hardware:** Price is not evidence that the architecture meets task and operating requirements.

## 5. A small CPU-served classifier already meets quality and response targets at low volume. What evidence is needed before moving it to a GPU?

Topic: Match compute, memory & model efficiency. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Only the word accelerator in a product description:** A hardware category does not establish actual workload benefit.
- **B. A claim that GPUs make predictions more correct:** Hardware does not automatically improve the learned decision's task quality.
- **C. Comparable end-to-end workload measurements including transfer overhead and total cost — correct:** The intended journey and demand determine whether GPU execution provides a justified benefit.
- **D. The official badge level the GPU will award:** Infrastructure purchases do not confer exam awards or official readiness.

## 6. Ignoring metadata, 4 billion weights move from 16-bit to 8-bit representation. Using decimal units, what happens to raw weight storage?

Topic: Match compute, memory & model efficiency. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. 8 GB becomes 4 GB; total serving memory still needs measurement — correct:** Each weight changes from two bytes to one, while non-weight allocations are excluded.
- **B. 8 GB becomes 4 GB, guaranteeing twice the end-to-end speed:** The storage arithmetic is right, but runtime operations, transfers, and other stages determine speed.
- **C. 4 GB becomes 8 GB:** This reverses the effect of reducing bits per weight.
- **D. The model uses no memory because all weights are integers:** Integer representations still consume storage and working memory.

## 7. Weights fit in accelerator memory, but long prompts and many simultaneous generations cause allocation failures. Which diagnosis is best supported?

Topic: Match compute, memory & model efficiency. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. The weight-size estimate must include every possible request automatically:** Raw weight storage deliberately excludes request-dependent state and working allocations.
- **B. Current access checks can be removed to make the model fit:** Permissions must remain enforced and are not a remedy for serving memory pressure.
- **C. The model has proven concept drift:** Memory exhaustion is an operational capacity symptom, not proof of a changed input-outcome relationship.
- **D. Working buffers and concurrent sequence state, including KV cache, exceed remaining memory — correct:** Context lengths and simultaneous sequences can make total serving memory much larger than weights alone.

## 8. One model is divided across two devices to fit. A manager expects exactly twice the throughput. What is the strongest correction?

Topic: Match compute, memory & model efficiency. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. Model parallelism is always the same as two independent serving replicas:** A divided model can require both devices for each request rather than independently handling two requests.
- **B. Fitting and speedup are different goals; communication and the workload must be measured — correct:** Splitting computation helps capacity but introduces inter-device work and does not guarantee linear throughput gains.
- **C. Every extra device necessarily halves task accuracy:** There is no universal accuracy-halving rule for distributing computation.
- **D. Data parallelism means storing half of each model on each device:** That describes model partitioning, whereas data parallelism distributes examples across model copies.

## 9. A streaming assistant emits a first token in 100 ms but completes validation in 5 seconds. Which claim is defensible?

Topic: Measure latency, throughput & useful cost. Practice difficulty: Foundation (not an official question level).

**Correct answer: A.**

- **A. Time to first token is 100 ms; complete validated-response time is 5 seconds — correct:** These measurements describe different milestones and neither alone certifies answer correctness.
- **B. The full validated answer took 100 ms:** The first emitted token precedes final output completion and validation.
- **C. The answer is correct because the first token was quick:** Emission speed is not evidence of task correctness or grounding.
- **D. The model trained for 5 seconds on this request:** Inference completion time does not establish that weights were updated.

## 10. A request runs two required independent checks in parallel, taking 300 ms and 500 ms, then performs 200 ms of validation. Ignoring other overhead, what is its latency?

Topic: Measure latency, throughput & useful cost. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. 1,000 ms:** Adding both independent branches overcounts their overlapping execution.
- **B. 500 ms:** The slower parallel branch completes at 500 ms, but subsequent validation still takes 200 ms.
- **C. 700 ms — correct:** Both branches must finish, so max(300, 500) + 200 = 700 ms under these assumptions.
- **D. 200 ms:** Validation cannot replace the required preceding checks.

## 11. A controlled test costs 18 units, including failed attempts, and produces 300 confirmed acceptable results in 60 seconds. Which summary is correct?

Topic: Measure latency, throughput & useful cost. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. 300 results/s and 18 units/result:** The counts must be divided by their respective time and successful-result denominators.
- **B. 5 acceptable results/s and 0.06 units/acceptable result — correct:** 300/60 = 5 and 18/300 = 0.06; the quality claim is limited to the stated confirmed results.
- **C. 60 acceptable results/s and 5 units/acceptable result:** This confuses the test duration and derived throughput with cost per result.
- **D. 0.06 results/s and 5 units/acceptable result:** This reverses the correctly calculated useful rate and cost.

## 12. A load test waits for each answer before sending the next request, uses only warm-cache short prompts, and reports a good p50. What is missing before a busy launch?

Topic: Measure latency, throughput & useful cost. Practice difficulty: Stretch (not an official question level).

**Correct answer: D.**

- **A. Nothing; the test proves all traffic patterns meet p99 requirements:** One favorable median under serialized warm requests cannot establish production tails.
- **B. Only a higher official practice badge score:** Exam classifications do not establish system capacity or benchmark representativeness.
- **C. A rule that all model stages must run on the same GPU:** Hardware co-location is not a universal remedy for an unrepresentative benchmark.
- **D. Realistic independent arrivals, bursts, lengths, misses, cold starts, failures, and tail/quality measures — correct:** These conditions reveal queues and resource limits hidden by the favorable serialized test.

## 13. What does language-model prefix caching most directly reuse?

Topic: Batch & cache without hiding stale results. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. A guaranteed factually correct final answer:** Computation reuse does not verify facts or return an independently validated answer.
- **B. A previous user's approval for a new payment:** Approval is bound to its operation and current conditions, not reusable model calculation state.
- **C. A training label that automatically updates weights:** Prefix caching concerns inference calculations, not supervised learning updates.
- **D. Compatible calculations for a matching token prefix — correct:** Reusing earlier computation can save work but requires matching configuration and safe scope.

## 14. A compatible inference batch of 6 takes 120 ms. A request waits 30 ms for its batch. Ignoring other overhead, which statement is correct?

Topic: Batch & cache without hiding stale results. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Every request's latency is 20 ms:** 120/6 is not the elapsed time each request waits for its batched result.
- **B. Ideal stage throughput is 50 requests/s; this request waits at least 150 ms for its result — correct:** 6/0.12 = 50, while 30 ms collection plus 120 ms execution gives 150 ms before other stages.
- **C. System throughput is guaranteed 50 requests/s under all workloads:** An ideal continuously occupied stage rate excludes routing, other bottlenecks, and arrival patterns.
- **D. Batch collection time disappears from end-to-end latency:** The caller experiences waiting before execution as part of the journey.

## 15. A cached policy answer has an unexpired TTL, but its source policy was superseded this morning. What should happen?

Topic: Batch & cache without hiding stale results. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Return it because expiry is the only validity condition:** Source changes can invalidate an entry before its TTL ends.
- **B. Keep it if the wording sounds confident:** Confidence does not establish current authoritative policy.
- **C. Invalidate or reject affected reuse and check the current authorized source — correct:** Cache validity depends on current facts and relevant versions, not just age.
- **D. Treat the source change as proof that every answer needs model retraining:** Updating evidence or invalidating reuse can address source freshness without changing weights.

## 16. A semantic cache treats 'approve 10 units' and 'do not approve 10 units' as similar. What is the most important safeguard?

Topic: Batch & cache without hiding stale results. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. Require task-appropriate equivalence checks or avoid this reuse for consequential decisions — correct:** Similarity can miss a negation that reverses the decision; execution still needs current authorization and approval.
- **B. Raise hit rate by removing the word not from every key:** Discarding the negation deliberately makes opposite requests collide.
- **C. Execute the old approved action whenever similarity is high:** A cached answer does not authorize replaying a consequential operation.
- **D. Use a longer TTL to ensure similarity becomes correct:** Entry lifetime cannot repair a semantic mismatch.

## 17. Which statement distinguishes sharding from replication?

Topic: Scale capacity & control queues. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Both guarantee recoverable data before an accidental deletion:** Live copies may replicate deletion, and partitions are not recovery copies.
- **B. Sharding keeps identical copies; replication partitions different records:** This reverses the two concepts.
- **C. Sharding partitions data or work; replication maintains copies — correct:** Partitions can distribute capacity, while copies can support availability or reads; neither alone proves restore capability.
- **D. Sharding means increasing one processor's clock speed:** Increasing a local resource is vertical scaling, not partitioning the workload.

## 18. A queue holds 480 jobs. Workers sustainably finish 50 jobs/s while 30 new jobs/s continue to arrive. Under constant rates, how long does it take to drain?

Topic: Scale capacity & control queues. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. 9.6 seconds:** 480/50 ignores ongoing arrivals that consume part of completion capacity.
- **B. 16 seconds:** 480/30 uses arrival rate rather than the positive net drain rate.
- **C. The queue cannot drain while any arrivals continue:** It can drain when completion capacity exceeds the ongoing arrival rate.
- **D. 24 seconds — correct:** The net drain rate is 50 − 30 = 20 jobs/s, so 480/20 = 24 seconds.

## 19. Five ready replicas each sustain 20 requests/s. One fails, and a shared provider permits only 70 requests/s. What is the ideal upper limit before other overhead?

Topic: Scale capacity & control queues. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. 70 requests/s — correct:** Remaining replicas total 80 requests/s, but the shared 70 requests/s limit is lower; actual performance still needs verification.
- **B. 80 requests/s regardless of the provider limit:** The four-replica sum does not bypass the shared dependency quota.
- **C. 100 requests/s:** This counts the failed replica and ignores the shared limit.
- **D. 350 requests/s:** A shared quota is not separately available in full to each replica.

## 20. A known launch burst begins in one minute, but new model replicas need five minutes to load. Which plan most directly protects the launch?

Topic: Scale capacity & control queues. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. Rely only on scaling after CPU reaches 100%:** Reactive provisioning starts too late for the stated loading delay and may miss other bottlenecks.
- **B. Pre-scale ready capacity where possible and enforce bounded admission and evaluated degradation — correct:** Startup-aware capacity and overload safeguards address demand while new instances become ready.
- **C. Accept unlimited jobs and label them all completed immediately:** Intake acknowledgment cannot truthfully represent completion and unbounded queues threaten deadlines.
- **D. Retry every rejection indefinitely at every layer:** Uncontrolled retries amplify overload rather than supply missing ready capacity.

## 21. Which placement concept most directly addresses a validated workload that must continue during internet disconnection near a sensor?

Topic: Choose placement & rehearse resilient recovery. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. An unapproved remote API with no local path:** A remote-only dependency cannot meet the stated disconnected requirement.
- **B. Edge processing with approved local data, updates, and recovery behavior — correct:** Near-source execution can support offline operation, while security and stale-state handling still matter.
- **C. A claim that every private cloud is physically on-premises:** Private cloud describes dedicated use and can be hosted elsewhere.
- **D. A larger cross-region transfer for every reading:** Mandatory remote transfers preserve the connectivity dependency rather than remove it.

## 22. An outage starts at 14:00. Recoverable state is from 13:52 and validated service resumes at 14:35. Objectives are RTO 30 minutes and RPO 10 minutes. What is the result?

Topic: Choose placement & rehearse resilient recovery. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Both objectives met because machines restarted:** The required service was interrupted for 35 minutes, exceeding the 30-minute recovery target.
- **B. RTO met; RPO missed:** This reverses the result: interruption is too long, but the eight-minute data gap is within target.
- **C. Both objectives missed because any data gap is forbidden:** The stated RPO permits up to ten minutes; the observed eight-minute gap is within it.
- **D. RTO missed by 5 minutes; RPO met with an 8-minute data gap — correct:** 14:00 to 14:35 is 35 minutes, while 13:52 to 14:00 is eight minutes under the stated recovery evidence.

## 23. Two regions have healthy inference replicas but both depend on one unavailable identity service. What does this show?

Topic: Choose placement & rehearse resilient recovery. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Different regions guarantee every dependency is independent:** Geographic separation does not remove a shared required service.
- **B. Identity checks should be silently disabled during failover:** An outage cannot justify bypassing required authentication or authorization.
- **C. A shared dependency can defeat otherwise redundant serving capacity — correct:** Useful recovery must include identity and other required dependencies, not just model hosts.
- **D. The system has proven its backup restore meets RPO:** Replica health and identity failure provide no recovered-data-gap evidence.

## 24. A hosting option has the lowest hourly compute price but needs more staff, idle recovery capacity, and costly data transfers. How should it be compared?

Topic: Choose placement & rehearse resilient recovery. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. Compare total cost of meeting quality, permissions, service, and tested recovery requirements — correct:** Useful service cost includes operational labor, transfers, headroom, evaluation, and recovery, not only a processor rate.
- **B. Select it solely from the lowest processor price:** A component price can conceal larger operating and dependency costs.
- **C. Ignore recovery because an SLA guarantees no outages:** Agreements can have consequences for failure but do not eliminate outages or the need for recovery.
- **D. Declare compliance from its cloud or on-premises label:** Placement labels do not establish current legal obligations or actual controls.

## Scoring

Score = correct answers / 24 × 100%. This does not classify an official badge level. Group missed questions by the lesson named above and revisit the worked example.
