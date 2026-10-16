# Domain 5 practice paper

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12.

24 original questions; one best answer each. Suggested practice time: 45 minutes, an unofficial training choice. Write your answers separately. Unanswered questions count as incorrect. The answer key is in a separate file. This is not a full seven-domain mock.

### 1. A team needs to store versioned image datasets and model artifacts as individually addressed items. Which storage abstraction most directly fits?

A. A semantic answer cache as the only persistent store

B. Object storage with appropriate version, access, and recovery controls

C. Only each application replica's temporary memory

D. A transaction status inferred from embeddings

### 2. A routing service adds replicas, but job status is saved only in the replica that accepted the job. What is the main design risk?

A. The model automatically becomes better calibrated

B. The vector dimension must increase

C. The system can no longer use object storage

D. Rerouting or instance loss can lose or contradict required job progress

### 3. A lost vector index must be rebuilt. Which evidence is most important for a compatible, safe reconstruction?

A. Authorized source versions, transformation/embedding configuration, and current access/deletion state

B. Only the application's color scheme

C. Any embedding model with the same vector length

D. Old final answers copied back as authoritative documents

### 4. A team proposes separate services for every small transformation despite low traffic and no need to scale them independently. What is the strongest architecture review?

A. Approve because more network boundaries always improve reliability

B. Reject all service boundaries in every future system

C. Compare with a simpler design using requirements, ownership, latency, and failure costs

D. Choose whichever design uses the most expensive hardware

### 5. A small CPU-served classifier already meets quality and response targets at low volume. What evidence is needed before moving it to a GPU?

A. Only the word accelerator in a product description

B. A claim that GPUs make predictions more correct

C. Comparable end-to-end workload measurements including transfer overhead and total cost

D. The official badge level the GPU will award

### 6. Ignoring metadata, 4 billion weights move from 16-bit to 8-bit representation. Using decimal units, what happens to raw weight storage?

A. 8 GB becomes 4 GB; total serving memory still needs measurement

B. 8 GB becomes 4 GB, guaranteeing twice the end-to-end speed

C. 4 GB becomes 8 GB

D. The model uses no memory because all weights are integers

### 7. Weights fit in accelerator memory, but long prompts and many simultaneous generations cause allocation failures. Which diagnosis is best supported?

A. The weight-size estimate must include every possible request automatically

B. Current access checks can be removed to make the model fit

C. The model has proven concept drift

D. Working buffers and concurrent sequence state, including KV cache, exceed remaining memory

### 8. One model is divided across two devices to fit. A manager expects exactly twice the throughput. What is the strongest correction?

A. Model parallelism is always the same as two independent serving replicas

B. Fitting and speedup are different goals; communication and the workload must be measured

C. Every extra device necessarily halves task accuracy

D. Data parallelism means storing half of each model on each device

### 9. A streaming assistant emits a first token in 100 ms but completes validation in 5 seconds. Which claim is defensible?

A. Time to first token is 100 ms; complete validated-response time is 5 seconds

B. The full validated answer took 100 ms

C. The answer is correct because the first token was quick

D. The model trained for 5 seconds on this request

### 10. A request runs two required independent checks in parallel, taking 300 ms and 500 ms, then performs 200 ms of validation. Ignoring other overhead, what is its latency?

A. 1,000 ms

B. 500 ms

C. 700 ms

D. 200 ms

### 11. A controlled test costs 18 units, including failed attempts, and produces 300 confirmed acceptable results in 60 seconds. Which summary is correct?

A. 300 results/s and 18 units/result

B. 5 acceptable results/s and 0.06 units/acceptable result

C. 60 acceptable results/s and 5 units/acceptable result

D. 0.06 results/s and 5 units/acceptable result

### 12. A load test waits for each answer before sending the next request, uses only warm-cache short prompts, and reports a good p50. What is missing before a busy launch?

A. Nothing; the test proves all traffic patterns meet p99 requirements

B. Only a higher official practice badge score

C. A rule that all model stages must run on the same GPU

D. Realistic independent arrivals, bursts, lengths, misses, cold starts, failures, and tail/quality measures

### 13. What does language-model prefix caching most directly reuse?

A. A guaranteed factually correct final answer

B. A previous user's approval for a new payment

C. A training label that automatically updates weights

D. Compatible calculations for a matching token prefix

### 14. A compatible inference batch of 6 takes 120 ms. A request waits 30 ms for its batch. Ignoring other overhead, which statement is correct?

A. Every request's latency is 20 ms

B. Ideal stage throughput is 50 requests/s; this request waits at least 150 ms for its result

C. System throughput is guaranteed 50 requests/s under all workloads

D. Batch collection time disappears from end-to-end latency

### 15. A cached policy answer has an unexpired TTL, but its source policy was superseded this morning. What should happen?

A. Return it because expiry is the only validity condition

B. Keep it if the wording sounds confident

C. Invalidate or reject affected reuse and check the current authorized source

D. Treat the source change as proof that every answer needs model retraining

### 16. A semantic cache treats 'approve 10 units' and 'do not approve 10 units' as similar. What is the most important safeguard?

A. Require task-appropriate equivalence checks or avoid this reuse for consequential decisions

B. Raise hit rate by removing the word not from every key

C. Execute the old approved action whenever similarity is high

D. Use a longer TTL to ensure similarity becomes correct

### 17. Which statement distinguishes sharding from replication?

A. Both guarantee recoverable data before an accidental deletion

B. Sharding keeps identical copies; replication partitions different records

C. Sharding partitions data or work; replication maintains copies

D. Sharding means increasing one processor's clock speed

### 18. A queue holds 480 jobs. Workers sustainably finish 50 jobs/s while 30 new jobs/s continue to arrive. Under constant rates, how long does it take to drain?

A. 9.6 seconds

B. 16 seconds

C. The queue cannot drain while any arrivals continue

D. 24 seconds

### 19. Five ready replicas each sustain 20 requests/s. One fails, and a shared provider permits only 70 requests/s. What is the ideal upper limit before other overhead?

A. 70 requests/s

B. 80 requests/s regardless of the provider limit

C. 100 requests/s

D. 350 requests/s

### 20. A known launch burst begins in one minute, but new model replicas need five minutes to load. Which plan most directly protects the launch?

A. Rely only on scaling after CPU reaches 100%

B. Pre-scale ready capacity where possible and enforce bounded admission and evaluated degradation

C. Accept unlimited jobs and label them all completed immediately

D. Retry every rejection indefinitely at every layer

### 21. Which placement concept most directly addresses a validated workload that must continue during internet disconnection near a sensor?

A. An unapproved remote API with no local path

B. Edge processing with approved local data, updates, and recovery behavior

C. A claim that every private cloud is physically on-premises

D. A larger cross-region transfer for every reading

### 22. An outage starts at 14:00. Recoverable state is from 13:52 and validated service resumes at 14:35. Objectives are RTO 30 minutes and RPO 10 minutes. What is the result?

A. Both objectives met because machines restarted

B. RTO met; RPO missed

C. Both objectives missed because any data gap is forbidden

D. RTO missed by 5 minutes; RPO met with an 8-minute data gap

### 23. Two regions have healthy inference replicas but both depend on one unavailable identity service. What does this show?

A. Different regions guarantee every dependency is independent

B. Identity checks should be silently disabled during failover

C. A shared dependency can defeat otherwise redundant serving capacity

D. The system has proven its backup restore meets RPO

### 24. A hosting option has the lowest hourly compute price but needs more staff, idle recovery capacity, and costly data transfers. How should it be compared?

A. Compare total cost of meeting quality, permissions, service, and tested recovery requirements

B. Select it solely from the lowest processor price

C. Ignore recovery because an SLA guarantees no outages

D. Declare compliance from its cloud or on-premises label

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
