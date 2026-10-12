# Domain 5 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes cover our proposed domain curriculum, not every possible official expert-level objective.

## Before you begin

Read the foundation primer and Domains 1–4, especially evaluation, embeddings/RAG, deadlines, permissions, serving, and recovery. No programming background is required.

## Lesson 1: Map the architecture & choose storage

**Learning objectives**

- Trace an AI request through components and trust boundaries.
- Separate authoritative records from derived indexes and temporary caches.
- Choose storage by access pattern, consistency, and recovery needs.

### Start with constraints and a simple map

Architecture is how a system's parts cooperate to meet requirements. Begin with the decision, quality criteria, freshness, acceptable waiting time, traffic pattern, permissions, availability, and cost. A nightly planning forecast and an interactive policy assistant need different paths even if both use models. Draw the smallest useful system before adding components. More services create more network calls, operational owners, compatibility boundaries, and failure modes; they do not automatically make a design scalable.

For a policy assistant, sketch user → application boundary → authorized retrieval → model → output validation → user. Keep tool execution behind a separate enforced permission and approval boundary. Mark dependencies such as identity, document storage, the search index, and the model endpoint. A model is one component, not the whole application. Identify what happens when each required dependency is slow, unavailable, or stale, and which owner can repair it.

### Keep preparation separate from the live path

The offline ingestion path checks documents, permission metadata, effective dates, chunking, and compatible embeddings, then publishes a versioned index. The live path uses that index for a new authorized query. Training and evaluation also have separate paths and protected datasets. Moving ingestion out of the request path can save time, but index freshness and deletion propagation still need explicit handling.

A derived index is a searchable representation of source information, not automatically its authoritative source. Preserve links to document identity, version, and access rules. If a document is withdrawn, a fast search over yesterday's index must not keep revealing it. Rebuilding a lost index requires authorized sources and the matching transformation configuration; record how long this takes. Derived does not mean disposable without a recovery plan.

### Different stores do different jobs

Object storage keeps individually addressed objects such as documents, model artifacts, and dataset snapshots. File storage presents named files in directories. Block storage supplies addressable blocks commonly used beneath disks, filesystems, and databases. These are access abstractions, not a ranking from bad to good. Compare actual size, update pattern, retrieval time, durability, and operating requirements rather than treating a category name as a performance guarantee.

A relational database organizes records and relationships and can support transactions that keep linked changes consistent. It might own job status, approved actions, and source metadata. A vector index supports similarity search over embeddings; keyword search supports exact terms and lexical matches, and a hybrid retrieval design can combine them. Vector capabilities can live inside a database rather than require another product. Similarity alone does not establish correctness, current permissions, or the exact status of a payment.

### State determines scaling and consistency needs

A stateless application replica does not rely on unique local memory to preserve a user's durable progress between requests. Store required session or job state in an appropriate shared system so another replica can continue. Stateless does not mean the entire architecture has no state: the database, queue, index, and authorization services still matter. Replicas that each hold their own unsynchronized job truth can disagree after a request is routed elsewhere.

Consistency describes what readers can observe after changes. Some derived search updates can tolerate a documented delay; consequential action status and revoked access require stronger application guarantees. State the exact required behavior, not just a label such as eventual consistency. Enforce current access before returning results even when an index lags. Track durable data, recovery copies, and temporary acceleration data separately, with access and retention rules for each.

### Worked example: a document assistant is not a payment ledger

A service stores approved PDFs as versioned objects, source ownership and current permissions as authoritative records, and compatible embeddings as a derived vector index. Application replicas can be replaced without losing source truth. At query time, retrieval applies user scope and validates current access before returning evidence. An authorized source-opening path checks permission again; possessing a citation URL is not authorization.

The same assistant proposes a refund. Similarity search cannot decide whether that refund already happened. The execution service checks authoritative transaction status and the approved operation identity. On paper, label each box source of truth, derived representation, or temporary cache; draw where permission is checked and what can be rebuilt. If the vector index is lost, rebuild and validate it; if transaction records are lost, use the ledger's tested recovery process rather than inventing them from generated answers.

**Remember:** Choose each component for a requirement and keep source truth, derived representations, and temporary acceleration separate.

### Common exam traps

- A vector similarity result is not an authoritative action record.
- Stateless replicas still depend on stateful services.
- An index freshness delay must not become a permission-revocation delay.

### Explain without notes

- Which stores would you use for documents, job status, and semantic search, and why?
- What must be preserved to rebuild a derived index safely?

### Learning references

- IBM Think — What is object storage?: https://www.ibm.com/think/topics/object-storage
- Google SRE — Data Integrity: https://sre.google/sre-book/data-integrity/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks: https://arxiv.org/abs/2005.11401

## Lesson 2: Match compute, memory & model efficiency

**Learning objectives**

- Distinguish CPU/GPU compute, memory capacity, and data movement.
- Estimate weight storage without mistaking it for total serving memory.
- Compare quantization, distillation, and parallelism with quality and hardware constraints.

### Processors are tools, not quality levels

A central processing unit (CPU) is a general-purpose processor suited to varied control logic and many smaller workloads. A graphics processing unit (GPU) provides extensive parallel computation that can suit large matrix operations in neural training and inference. Other specialized accelerators exist too. A GPU is not a smarter model, and it does not make a wrong output correct. A small tree model or light, infrequent inference may meet its requirements more economically on a CPU.

Choose using the actual model, input sizes, traffic, compatible serving software, cost, and response targets. Sending tiny workloads to a GPU can add transfer and scheduling overhead that outweighs compute savings. Training needs resources for gradients and optimizer state as well as model calculations; serving has a different resource pattern. Do not infer inference capacity directly from a training benchmark or assume two devices with the same marketing category perform identically.

### Fitting the weights is only the beginning

Memory capacity is how much can be held; memory bandwidth is how quickly it can be moved. A device can have free memory yet be limited by memory traffic, or have enough compute yet fail because the required working state will not fit. Host RAM and accelerator memory are not interchangeable at no cost. Moving data between them or across a network takes time and may reduce throughput. Storage reads and input preparation can leave a GPU idle while requests wait.

Serving memory includes model weights, temporary activations, runtime buffers, and concurrent-request state. Autoregressive language models commonly retain attention keys and values in a KV cache to reuse earlier calculations during generation. Longer contexts and more simultaneous sequences can increase this state substantially. This KV cache is computation state, not a database of verified answers. Record prompt/output lengths and concurrency when measuring memory, and leave room for the actual runtime rather than allocating every byte to weights.

### Quantization changes numerical representation

Quantization uses fewer bits to represent selected weights or activations. It can reduce storage and memory traffic, and supported hardware/software may execute the resulting operations faster. Post-training approaches transform an already trained candidate, often using representative calibration inputs to choose numerical ranges. Quantization-aware training accounts for reduced precision during training. Neither approach guarantees unchanged task behavior; validate the deployed representation on important cases.

Reducing weight precision alone does not shrink every runtime allocation or guarantee an equal reduction in response time. Extra scale metadata, unquantized components, conversion overhead, and unsupported operations affect the result. A smaller artifact may still exceed available memory under long contexts or high concurrency. Compare the actual candidate's quality, tail latency, throughput, and total memory on its intended device before approving it through Domain 4's release gates.

### Distillation and parallelism solve different problems

Distillation trains a student model using information from a teacher, often its outputs or output distributions. The student may be smaller and cheaper to serve, but it can inherit teacher errors and lose capability on rare or difficult cases. This is a training process, not just changing the same weights to fewer bits. Pruning removes selected weights or structures; speed benefits depend on whether the runtime exploits the resulting pattern. A zeroed weight does not automatically remove its computational cost.

Data parallelism distributes different examples across model copies; during training it also coordinates updates. Model parallelism divides one model's computation or parameters across devices, which can help a model fit but introduces communication. Adding devices does not guarantee linear speedup. When serving, independent replicas can handle different requests, while one split model may need several devices for each request. Name which goal is being addressed: fitting a model, training faster, or serving more concurrent demand.

### Worked example: estimate weights, then test the system

Using decimal units and ignoring metadata, a model with 2 billion parameters at 16 bits per parameter needs 2 billion × 16/8 = 4 billion bytes, or 4 GB, for weights. At 8 bits it needs 2 GB. This is a 50% reduction in raw weight storage, not proof of 50% lower total memory or twice the speed. A 4 GB device cannot safely be declared sufficient for the 16-bit model because it also needs working memory.

Suppose a quantized candidate fits, but urgent-message recall falls below the team's requirement. Do not deploy it because a memory chart improved. Try another representation, a different capacity plan, or a validated student, and retest under realistic context lengths and concurrency. If GPU utilization is low while document downloads dominate the trace, investigate data movement before buying more GPUs. On paper, distinguish compute, memory capacity, memory bandwidth, and input supply as possible constraints.

**Remember:** Match hardware and model representation to measured workload needs; weight size is not total memory and compression is not free quality.

### Common exam traps

- GPU hardware does not guarantee faster end-to-end requests or better answers.
- Weight storage excludes request state and runtime working memory.
- Quantization, distillation, and model parallelism are different changes with different risks.

### Explain without notes

- Estimate raw storage for 1 billion 8-bit parameters and name two excluded allocations.
- Why might a smaller quantized model still fail a release gate?

### Learning references

- Google ML glossary — Accelerator chip and parallelism: https://developers.google.com/machine-learning/glossary#accelerator-chip
- Jacob et al. — Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference: https://arxiv.org/abs/1712.05877
- Hinton, Vinyals & Dean — Distilling the Knowledge in a Neural Network: https://arxiv.org/abs/1503.02531
- Google ML Crash Course — Fine-tuning, distillation, and prompt engineering: https://developers.google.com/machine-learning/crash-course/llm/tuning
- Google SRE — Handling Overload: https://sre.google/sre-book/handling-overload/

## Lesson 3: Measure latency, throughput & useful cost

**Learning objectives**

- Interpret latency percentiles, throughput, and concurrency separately.
- Find the critical path and estimate a limited component speedup.
- Design a realistic benchmark that includes failures, quality, and cost.

### Define the measurement boundary

Latency is the elapsed time for a stated operation. End-to-end latency measured at the caller includes waiting, networking, preparation, retrieval, model work, and validation. A model-only duration omits other stages. For streaming generation, time to first token measures when output begins, while complete-response latency measures when the required final result is ready. A quick greeting can coexist with a slow, invalid, or never-completed answer.

Throughput is completed work per unit time, such as successful requests per second or documents processed per minute. Concurrency is the number of requests in flight at once, including work waiting for dependencies. Input/output tokens per second and requests per second answer different questions when lengths vary. Increasing concurrency may raise throughput until a resource saturates, then mainly raise queues, memory pressure, errors, and latency. Report what completed successfully, not merely how much traffic was submitted.

### The tail matters to users

The median or p50 describes a middle request; p95 and p99 describe progressively slower parts of the measured distribution. Use a specified population, window, and calculation. A p95 of 800 milliseconds does not mean every request completes in 800 milliseconds, nor that the mean is 800. Slow critical slices can be hidden by an overall percentile, so inspect request type and length as well as aggregate results.

Do not average replica p95 values and call the result the fleet's p95. Percentiles need the combined observations or an appropriate distribution aggregation. Also do not add the p95 of each stage and claim an exact end-to-end p95: the slow observations may belong to different requests. Measure the caller-visible distribution directly and use linked traces to explain individual slow requests. Track failed and timed-out work separately so fast rejection does not make an overloaded service appear efficient.

### Optimize the critical path

A bottleneck limits progress under stated conditions. For a sequential request, add actual elapsed stages on its path, including queue waiting. If independent stages run concurrently, completion waits for the required slowest branch and subsequent stages, not the sum of every branch. A change must preserve dependencies and permissions; source retrieval that requires identity cannot safely be started with an assumed authorized identity.

Amdahl's law expresses a simple limit: speeding only part of a fixed workload leaves the rest unchanged. If model work is 20% of a sequential request and is made infinitely fast, the other 80% remains. The maximum speedup is 1/0.8 = 1.25 times. This illustrative calculation assumes no new overhead or changed work. Optimizing a small component cannot produce a huge end-to-end gain; when load changes, the bottleneck can move and must be remeasured.

### Benchmark the journey, not the advertisement

Use representative authorized cases with realistic input lengths, output lengths, retrieval sizes, cache hit/miss patterns, arrival rates, and bursts. Include warm operation, cold model loading, failures, and dependency slowdown. Increase load in a controlled setting and observe the rate that still meets quality and latency requirements, not just the maximum rate before crashing. A test that submits the next request only after the previous one finishes may hide queues that independent real users would create.

Keep cases and conditions comparable when choosing a candidate; record model, prompt, index, hardware, runtime, and settings. Measure task quality and critical slices alongside p95/p99, completed throughput, error rate, memory, and cost. Count rejected or failed work and retries in resource spend. Cost per successful acceptable result can expose a cheap path that produces little useful work, but state whether quality is fully measured or only sampled. Do not claim sampled quality establishes every result's correctness.

### Worked example: a faster model is a modest system gain

One sequential request spends 100 ms on checks, 600 ms on retrieval, 200 ms on model work, and 100 ms on validation: 1,000 ms total. Halving model time saves 100 ms, giving 900 ms, a 10% latency reduction and about 1.11 times speedup. These are actual durations for this case, not stage percentiles. Retrieval remains the largest stage, so investigate it next without weakening permissions or evidence quality.

A controlled run completes 240 acceptable results in 60 seconds, so useful throughput is 4 per second. It costs 12 illustrative currency units, including failed attempts, making cost per acceptable result 12/240 = 0.05 units. Report submitted requests, failures, measurement criteria, and latency too. Neither this cost nor a fast p50 establishes a safe release. On paper, write the denominator and measurement boundary before interpreting any performance number.

**Remember:** Measure the complete user journey under realistic load; improve the actual bottleneck while preserving quality and honest denominators.

### Common exam traps

- First-token speed is not complete validated-response speed.
- Averages of p95s and sums of stage p95s are not exact fleet or journey percentiles.
- Fast errors and cheap incorrect outputs do not demonstrate useful throughput.

### Explain without notes

- Why might doubling model speed barely change total latency?
- Which benchmark conditions could hide a production queue or a cold start?

### Learning references

- Google SRE — Service Level Objectives: https://sre.google/sre-book/service-level-objectives/
- Google SRE — Monitoring Distributed Systems: https://sre.google/sre-book/monitoring-distributed-systems/
- Google SRE — Handling Overload: https://sre.google/sre-book/handling-overload/
- Google SRE — Load Balancing in the Datacenter: https://sre.google/sre-book/load-balancing-datacenter/

## Lesson 4: Batch & cache without hiding stale results

**Learning objectives**

- Explain how serving batches trade waiting time for efficiency.
- Choose cache scope, keys, freshness, and invalidation rules.
- Evaluate cache hits and approximate reuse without bypassing permissions.

### Batching shares work, but adds waiting

Serving batching combines several inference requests so hardware can process them efficiently together. Dynamic batching gathers arriving requests up to a size or waiting limit. This differs from a nightly batch job: online requests can still be batched briefly. It also differs from a training batch, which participates in learning updates. A larger serving batch may improve completed throughput and cost per request, yet hurt interactive latency through collection delay and longer processing.

Choose a maximum wait, maximum size, memory limit, and behavior for approaching deadlines. Consider request lengths: padding short inputs to match one long input can waste resources. Group compatible model versions and shapes where the runtime requires it; do not mix incompatible workloads just to fill a batch. At low traffic, waiting for a full batch can make almost every user slower. Measure end-to-end tails and capacity rather than assuming maximum hardware utilization is the user goal.

### Different caches reuse different things

A cache stores reusable work near the next consumer. You might cache document downloads, query embeddings, retrieval results, or a complete response. Language-model prefix caching can reuse calculations for a matching token prefix under a compatible model and configuration. It is not equivalent to returning a previously generated answer, and it does not validate the evidence in that prefix. A cache miss follows the normal path; a hit is useful only when the reused value remains valid for this caller and request.

A cache key identifies what makes two requests equivalent for that value. Depending on the cached item, this includes normalized input, tenant/user scope, model or embedding version, prompt settings, source/index version, and relevant policy or locale. Avoid including unnecessary private content in observable keys. Identical question text from two users is not enough to justify sharing a private answer. Scope separation and current authorization must be enforced outside the model, including when cached evidence is returned.

### Expiration alone is not authorization

A time-to-live (TTL) limits how long an entry may be reused. Invalidation removes or rejects entries after relevant changes. An answer may become invalid before its TTL ends because a policy changes, a record is corrected, or permission is revoked. TTL is a freshness policy, not proof of current validity. Recheck necessary permissions and use version-aware invalidation; define what happens when the validity check is unavailable rather than returning a private stale value.

Semantic caching retrieves a prior answer for a similar, not identical, request. Similarity can miss a changed date, a negation, a customer identity, or a critical amount. Require suitable equivalence checks and task evaluation, or avoid this reuse for high-risk personalized decisions. A cache must not replay a consequential tool action as though it were fresh approval. Keep operation status and idempotency in authoritative systems rather than treating response caching as duplicate-action protection.

### Plan misses, bursts, and quality measurement

Cache hit rate is hits divided by eligible lookups under a stated definition. A high hit rate can coexist with stale wrong answers or slow misses. Separate hit and miss latency, overall tails, source freshness, and correctness. Warm-cache testing can overstate capacity after a restart or a new version invalidates many entries. Test the uncached path and a realistic cold-cache burst, including dependency quotas and memory limits.

A cache stampede occurs when many requests try to recompute the same missing or expired value at once. Coordinating a permitted shared recomputation, spreading expiry times, or refreshing eligible values ahead of time can reduce bursts. These techniques require scope isolation and defined failure behavior; coalescing one tenant's work with another's private work is unsafe. Bound cache size and protect contents, access, and retention. Caching trades resource use and freshness complexity rather than removing the underlying dependency.

### Worked example: more throughput, slower requests

In an illustrative controlled test, a compatible batch of 8 requests takes 160 ms of inference, giving 8/0.16 = 50 requests per second if batches run continuously without other bottlenecks. A request waiting 40 ms to join that batch has at least 200 ms before its inference result is ready, excluding network and validation. Compare with the unbatched complete journey and real arrival pattern; 50 per second is an ideal stage rate, not guaranteed system capacity.

Of 1,000 eligible cache lookups, 700 hit: hit rate is 70%. If those entries contain yesterday's withdrawn policy, the high rate is not success. Invalidate affected entries, enforce current source access, and test the miss-path load before wider use. On paper, list which changes invalidate an embedding cache versus a final-answer cache. The latter may depend on more versions and business facts; reusable numerical work does not mean every downstream answer is reusable.

**Remember:** Batch for measured workload efficiency and cache only values that remain equivalent, fresh, and authorized for the current caller.

### Common exam traps

- Bigger batches can increase request waiting even when throughput improves.
- TTL and identical question text do not prove current access or answer validity.
- A response cache is not idempotency enforcement or permission to replay an action.

### Explain without notes

- What must change a private answer's cache key or invalidate the entry?
- Why should a capacity test include a cold cache and low-traffic batch behavior?

### Learning references

- Google ML glossary — Accelerator chip and parallelism: https://developers.google.com/machine-learning/glossary#accelerator-chip
- Google SRE — Handling Overload: https://sre.google/sre-book/handling-overload/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- Google SRE — Data Integrity: https://sre.google/sre-book/data-integrity/
- Amazon Builders' Library — Timeouts, retries, and backoff with jitter: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/

## Lesson 5: Scale capacity & control queues

**Learning objectives**

- Compare vertical/horizontal scaling, replication, and sharding.
- Estimate burst backlog and recovery capacity with explicit assumptions.
- Choose readiness, backpressure, autoscaling, and admission safeguards.

### Scale the constrained resource

Vertical scaling gives one instance more resources, such as RAM or a larger processor. It can help a model fit or relieve a local limit, but reaches device limits and may require interruption. Horizontal scaling adds instances and distributes work. It suits interchangeable serving replicas, yet requires state handling, routing, and enough capacity in shared dependencies. Ten application replicas cannot multiply the quota of a single remote model service.

Replication keeps copies of data or serving components, often for read capacity or availability. Sharding partitions data or work across instances; a request may then need one shard or several. Shards are not backup copies. Uneven popularity can create a hot shard, and cross-shard work adds coordination. Choose the simplest design meeting the requirements; horizontal scaling, sharding, and splitting one model across GPUs are different techniques, not interchangeable names for adding machines.

### Route to ready capacity and drain safely

A load balancer distributes requests among eligible replicas. Round-robin spreads request counts, but equal counts do not mean equal resource use: one long generation can cost far more than a short classification. Routing can consider appropriate load and health evidence. A process accepting connections is not necessarily ready; it may still be loading the correct model, warming caches, or checking configuration. Readiness should reflect whether it can handle its promised work.

Remove failing replicas from new routing and drain an instance before shutdown: stop new work and let eligible in-flight work finish within limits. A replica returning errors very quickly is not automatically the best target because its apparent latency is low. Protect required state and operation identities across rerouting; moving a request to another instance does not guarantee that its prior action never happened. Use Domain 3's reconciliation and duplicate-safe rules where needed.

### A queue absorbs a burst, not infinite demand

A durable queue can decouple arrivals from workers and preserve accepted jobs across restarts. It absorbs a finite burst when later capacity exceeds arrivals enough to drain the backlog. If arrival rate remains above completion capacity, the queue grows without bound unless admission is limited. Track oldest-job age and time remaining to business deadlines as well as queue length. A low failure rate at the intake endpoint can hide hours of unfinished work.

Backpressure communicates that downstream capacity is limited so upstream production slows. Admission control limits accepted work to what the system can handle; rate limits or per-tenant quotas can prevent one caller consuming everything. Bound queue size, concurrency, input/output length, and retry work. Expired jobs should not consume scarce capacity without a justified policy. Priority and separate worker pools can protect interactive traffic from large offline jobs while preserving an explicit policy for fairness and starvation.

### Capacity planning includes startup and failure

Autoscaling adjusts instance count using chosen demand and resource signals. Signals may include queue age, concurrent sequences, CPU/GPU memory, latency, or resource usage; no one signal fits every workload. Provisioning, artifact download, model loading, and warmup take time. Quotas, hardware supply, and downstream limits may prevent additional capacity from arriving at all. Keep justified ready headroom or pre-scale for a known event, and avoid rapid scale-up/down oscillation.

Benchmark sustainable per-replica capacity while meeting quality and response targets for the expected request mix. Plan what remains after an instance or failure domain is lost, and whether surviving dependencies can support the redirected load. The arithmetic sum of replica maximums is only an ideal estimate if routing and shared resources cooperate. Use safe load and failure tests; a design running at full healthy capacity often has no room for recovery traffic, retries, or backlog drainage.

### Worked example: calculate buildup and drain time

Assume a constant arrival rate of 50 jobs per second and sustainable aggregate worker capacity of 40 per second for a 30-second burst, with no initial backlog or dropped work. Backlog grows by (50 − 40) × 30 = 300 jobs. If arrivals then fall to 20 per second and capacity remains 40, the net drain rate is 20 per second, so the backlog takes 300/20 = 15 seconds to clear. A queue changes when users wait; it did not create compute capacity.

For an illustrative failure plan, four independent ready replicas each safely handle 30 requests per second under the measured mix. Losing one leaves an ideal 90 per second. A peak of 80 might fit that arithmetic, but verify shared dependencies, balanced routing, tail latency, and burst margin. If the remote provider permits only 60 per second, the replicas cannot deliver 90. On paper, mark the actual limiting service and describe how intake behaves while autoscaling is still starting.

**Remember:** Scale the real bottleneck, bound accepted work, and plan ready capacity for bursts, slow startup, shared limits, and failures.

### Common exam traps

- A queue cannot solve sustained arrivals above completion capacity.
- More replicas do not remove shared-service quotas or hot shards.
- Autoscaling is delayed and limited; maximum healthy capacity is not failure-safe capacity.

### Explain without notes

- How do you calculate drain time while new jobs still arrive?
- Which signals distinguish an idle GPU waiting on inputs from insufficient GPU capacity?

### Learning references

- Google SRE — Handling Overload: https://sre.google/sre-book/handling-overload/
- Google SRE — Load Balancing in the Datacenter: https://sre.google/sre-book/load-balancing-datacenter/
- Amazon Builders' Library — Timeouts, retries, and backoff with jitter: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- Google SRE — Monitoring Distributed Systems: https://sre.google/sre-book/monitoring-distributed-systems/
- Google SRE — Data Integrity: https://sre.google/sre-book/data-integrity/

## Lesson 6: Choose placement & rehearse resilient recovery

**Learning objectives**

- Compare cloud, on-premises, hybrid, and edge placement under real constraints.
- Distinguish high availability, backups, RTO, and RPO.
- Evaluate complete recovery dependencies, safe failover, and total cost.

### Place the workload where constraints can be met

On-premises means operating infrastructure at an organization's own controlled site; it offers direct operational control but requires procurement, maintenance, staffing, and capacity planning. Public cloud supplies provider-managed resources, potentially with flexible scaling, yet quotas, available hardware, network dependencies, and ongoing charges remain. A private cloud is dedicated to one organization and need not be physically on its premises. Location, ownership, and service model are related but different choices.

Hybrid placement connects environments, for example local authorized records with permitted remote computation. Edge processing runs near a user or sensor and can reduce network delay or support disconnected work. It still needs device security, update distribution, validated models, and a plan for stale local data. Compare placement using data movement permissions, required offline behavior, workload size, response time, skills, cost, and recovery. No location alone establishes legal compliance; current Saudi obligations require official verification in Domain 6.

### Managed services shift responsibilities, not accountability

Infrastructure as a service supplies basic compute, networking, and storage; the customer generally manages more of the operating system and application. Platform services manage more of the runtime. Software as a service supplies a hosted application. Exact responsibilities depend on the service and agreement, so record who owns patches, identity settings, data protection, logs, backups, and recovery. Serverless is managed execution, not an absence of servers or a promise of zero cold-start delay.

A hosted model API can reduce the need to operate GPUs, but introduces provider availability, quotas, version behavior, retention terms, and transfer constraints. Self-hosting gives more control and more operational work; it does not automatically make a model safe or cheaper. Hybrid paths can add latency and a network failure boundary. Keep data, inference, and necessary dependencies close where appropriate, but never move private data to an unapproved environment just to reduce a benchmark number.

### Availability and recoverability address different failures

High availability uses redundancy and controlled switching to reduce interruption. Replicas in independent failure domains can survive a local machine or site problem; multiple machines sharing one power source still share that risk. Multiple regions may reduce some correlated infrastructure risks but add data synchronization, routing, compliance, and operating complexity. Two providers still can share your identity service, a corrupted dataset, or one bad prompt release. Map common dependencies instead of assuming independence from different logos.

Backups preserve recoverable earlier state against failures such as accidental deletion or corruption. Live replication may copy the bad deletion to every replica, so it is not a replacement for backups. A backup success message is not a restore test. Restore the compatible application, source records, model artifacts, configuration, index, and required identity/key access, then verify useful behavior. Recovery copies need appropriate isolation, protected access, and retention without silently restoring revoked permissions or legitimately deleted material into serving.

### State objectives and prove recovery

Recovery time objective (RTO) is the target maximum interruption before the required service is restored. Recovery point objective (RPO) is the target maximum gap in recovered data, expressed as a time interval. These are objectives chosen from impact and feasibility, not guarantees. Backup frequency alone does not prove RPO: failed copies, replication lag, or inconsistent restores can leave a larger gap. Recovery capacity and validation time affect RTO even when machines start quickly.

Compare active-active serving, standby capacity, and backup-and-restore designs against those objectives. A warm standby may have some resources prepared but still need model loading or scaling; specify its actual readiness instead of relying on a label. Rehearse failover and return to primary operation, including queue work, current authorization, and authoritative action reconciliation. Include hardware or usage charges, idle headroom, storage, network transfers, support, staff, evaluation, and exercises in total cost. Lowest compute price alone is not lowest useful service cost.

### Worked example: restored machines are not restored service

A team chooses illustrative objectives of RTO 60 minutes and RPO 15 minutes. An outage begins at 10:00; the latest recoverable consistent state is from 09:50, and the required validated service resumes at 10:40. The observed data gap is 10 minutes and interruption 40 minutes, meeting those two objectives for this exercise. These are business examples, not official exam targets. If the index rebuild instead delays useful service until 11:20, the 80-minute interruption misses RTO despite an early server restart.

An offline warehouse uses an evaluated local model during network loss and later synchronizes authorized records under conflict rules. A private policy assistant must not silently fail over to an unapproved external API or an old snapshot containing revoked access. Test the complete dependency chain and report degraded scope honestly. On paper, name the failure scenario, acceptable service, recovered point, recovery steps, owner, and evidence of success; do not claim all disaster scenarios are covered by one passing exercise.

**Remember:** Choose placement by constraints and total cost; redundancy is not backup, and recovery is proven by safe useful service, not restarted machines.

### Common exam traps

- Cloud, on-premises, and hybrid labels do not certify compliance or unlimited capacity.
- Replication can propagate corruption and deletion to every copy.
- RTO concerns service interruption; RPO concerns the recovered data gap, and neither is proved by an untested plan.

### Explain without notes

- How can an architecture meet RPO but miss RTO?
- Which shared dependencies could defeat a multi-region or multi-provider failover?

### Learning references

- IBM Think — What is cloud computing?: https://www.ibm.com/think/topics/cloud-computing
- IBM Think — What is disaster recovery?: https://www.ibm.com/think/topics/disaster-recovery
- Google SRE — Data Integrity: https://sre.google/sre-book/data-integrity/
- Google SRE — Managing Incidents: https://sre.google/sre-book/managing-incidents/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Domain 5 revision sheet

- **Architecture:** Map requirements → components → dependencies → trust boundaries → owners. Complexity must earn its place.
- **Storage:** Objects for artifacts/documents; authoritative records for job/action truth; derived indexes for retrieval. Validate access and lineage.
- **State:** Replaceable application replicas keep required durable progress in appropriate shared systems; current access cannot wait for an index refresh.
- **Hardware:** CPU/GPU fit depends on workload, supported runtime, transfers, memory, quality, response targets, and total cost.
- **Memory:** Raw weight bytes = parameters × bits/8. Total serving memory also includes buffers, activations, and concurrent sequence state.
- **Compression:** Quantization reduces numerical precision; distillation trains a student. Neither guarantees unchanged quality or a fixed speedup.
- **Parallelism:** Data parallelism distributes examples; model parallelism divides one model. Device communication and shared limits matter.
- **Measures:** Latency = elapsed operation time; throughput = completed work/time; concurrency = in-flight work. First token is not final validation.
- **Tails:** Measure end-to-end p95/p99 directly; do not average replica percentiles or sum stage percentiles as exact journey values.
- **Bottleneck:** Optimize the measured critical path; the unchanged part limits total speedup. Include failures, cold starts, quality, and useful-cost denominators.
- **Batching:** Group compatible inference work with size, memory, and waiting bounds. Throughput gains can cost request latency.
- **Caching:** Scope and version keys appropriately; enforce current authorization, freshness, and invalidation. Similarity and TTL do not prove equivalence.
- **Misses:** Test cold-cache and expiry bursts, miss latency, and underlying quotas; a high hit rate can hide wrong results.
- **Scaling:** Vertical adds local resources; horizontal adds instances. Replication copies; sharding partitions. Shared bottlenecks remain.
- **Queues:** Backlog growth = arrivals − capacity when positive. Drain rate = capacity − ongoing arrivals when positive; bound work and deadlines.
- **Capacity:** Use measured sustainable capacity with startup time, routing/readiness, dependency quotas, failure loss, and headroom.
- **Placement:** Compare cloud, on-premises, hybrid, and edge by permissions, network/offline needs, skills, total cost, and recovery—not vendor slogans.
- **Resilience:** Map shared failure domains; replicas are not backups. RTO targets interruption; RPO targets recovered data gap. Rehearse safe useful recovery.

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

### Map the architecture & choose storage

### 1. Which component should establish whether a refund has already been executed?

A. The nearest embedding in a vector index

B. A generated summary of last week's refunds

C. The authoritative transaction service and its records

D. A cached answer from a different customer

### 2. An assistant's search index updates hourly. Access to one document is revoked now. What should the live path do?

A. Enforce current access before returning evidence, despite index lag

B. Continue returning it until the next hourly refresh

C. Let the model decide whether the revocation matters

D. Delete every source document to remove the index

### 3. What does a stateless application replica mean in a job-processing system?

A. The entire system has no persistent records

B. Required durable job progress does not depend on unique local replica memory

C. Every replica independently invents its own job status

D. The model never uses RAM

### Match compute, memory & model efficiency

### 1. A GPU is mostly idle while requests spend most of their time downloading documents. What is the strongest next investigation?

A. Buy more GPUs before inspecting the request path

B. Remove document authorization checks to save time

C. Retrain the model because idle hardware proves concept drift

D. Trace storage, networking, and preparation delays supplying the GPU

### 2. Ignoring metadata and using decimal units, how much raw storage do 3 billion 16-bit weights require?

A. 3 GB of guaranteed total serving memory

B. 6 GB for weights alone

C. 48 GB for weights alone

D. 6 GB including every possible concurrent request

### 3. Which comparison between quantization and distillation is correct?

A. Quantization reduces numerical precision; distillation trains a student using teacher information

B. Both only route traffic to another identical replica

C. Quantization guarantees identical answers; distillation guarantees better answers

D. Distillation merely converts unchanged weights from 16 bits to 8 bits

### Measure latency, throughput & useful cost

### 1. Which statement distinguishes throughput from concurrency?

A. Both measure only elapsed time for one request

B. Throughput counts submitted requests; concurrency counts only completed ones

C. Throughput is completed work per time; concurrency is work in flight

D. Doubling concurrency always doubles throughput

### 2. A sequential request spends 800 ms outside the model and 200 ms in it. Halving only model time gives what total?

A. 500 ms

B. 100 ms

C. 800 ms

D. 900 ms

### 3. Two replicas report their own p95 latency. How should the team obtain the service's p95?

A. Take the arithmetic mean of the two p95 numbers

B. Use combined observations or suitable distribution aggregation for the defined population

C. Choose the faster replica's p95

D. Add both p95 numbers because requests use one replica

### Batch & cache without hiding stale results

### 1. At low traffic, dynamic batching waits for more requests before inference. What tradeoff should be checked?

A. Collection waiting may worsen request latency despite potential throughput gains

B. Waiting automatically improves every user's complete-response time

C. Serving batches automatically update learned weights

D. Any batch size always fits available memory

### 2. Of 800 eligible cache lookups, 600 are hits. What is the hit rate, without claiming correctness?

A. 25%

B. 133%

C. 75%

D. 600%

### 3. Two employees ask identical text about their personal salary. What is the safest cache design?

A. Share one final answer using only the question text as its key

B. Share answers if the cache TTL has not expired

C. Ask the model not to mention the other employee's name

D. Isolate the relevant caller scope and enforce current access and validity

### Scale capacity & control queues

### 1. What happens if arrivals stay above worker completion capacity indefinitely?

A. A queue automatically makes workers faster

B. Backlog grows unless work is limited or sustainable capacity increases

C. Oldest-job age must remain zero

D. Acknowledging job intake proves every job meets its deadline

### 2. With no initial backlog, 60 jobs/s arrive and workers finish 45 jobs/s for 20 seconds. How many jobs accumulate?

A. 300 jobs

B. 1,200 jobs

C. 900 jobs

D. 15 jobs

### 3. A new inference replica accepts connections but is still loading its model. What should routing do?

A. Send full traffic because listening proves readiness

B. Prefer it because its early errors return quickly

C. Wait for defined serving readiness before adding normal traffic

D. Delete the existing healthy replicas immediately

### Choose placement & rehearse resilient recovery

### 1. Which mapping of recovery objectives is correct?

A. RTO is data loss; RPO is GPU utilization

B. Both are official SDAIA practice pass scores

C. RTO is backup file size; RPO is restoration price

D. RTO targets maximum service interruption; RPO targets maximum recovered-data gap in time

### 2. An accidental deletion immediately propagates to all live database replicas. What was missing from a replicas-only recovery plan?

A. A claim that all copies are automatically independent

B. Recoverable earlier state and a tested restore process

C. A larger prompt asking the model to remember the records

D. More live copies receiving the same deletion

### 3. A hybrid assistant's local network fails. Its private inputs are not approved for an external provider. What is the best response?

A. Use an evaluated permitted local/manual path or honestly report unavailability

B. Send every private input externally to meet a latency target

C. Assume hybrid means every cloud service is approved

D. Remove credentials from the request but send all private records

## Lesson checks — explanations (spoilers)

### Map the architecture & choose storage

#### Check 1: Which component should establish whether a refund has already been executed?

**Correct answer: C.**

- **A. The nearest embedding in a vector index:** Similarity helps retrieval but cannot establish authoritative transaction status.
- **B. A generated summary of last week's refunds:** A generated summary may be incomplete or wrong and is not the action ledger.
- **C. The authoritative transaction service and its records — correct:** Consequential operation status must come from the system that owns the transaction truth.
- **D. A cached answer from a different customer:** Another customer's answer is neither authoritative nor necessarily permitted for this caller.

#### Check 2: An assistant's search index updates hourly. Access to one document is revoked now. What should the live path do?

**Correct answer: A.**

- **A. Enforce current access before returning evidence, despite index lag — correct:** Derived-index lag must not permit retrieval or disclosure of material the caller can no longer access.
- **B. Continue returning it until the next hourly refresh:** The index schedule is not permission to ignore current authorization.
- **C. Let the model decide whether the revocation matters:** Access must be enforced by the application, not discretionary model text.
- **D. Delete every source document to remove the index:** A scoped access change does not justify destroying unrelated authoritative documents.

#### Check 3: What does a stateless application replica mean in a job-processing system?

**Correct answer: B.**

- **A. The entire system has no persistent records:** Job status, identity, and other dependencies can remain stateful even when application instances are replaceable.
- **B. Required durable job progress does not depend on unique local replica memory — correct:** Appropriate shared durable state allows another eligible instance to continue without losing required progress.
- **C. Every replica independently invents its own job status:** Uncoordinated local truth can disagree when requests move between replicas.
- **D. The model never uses RAM:** Statelessness concerns durable application state, not an absence of computation memory.

### Match compute, memory & model efficiency

#### Check 1: A GPU is mostly idle while requests spend most of their time downloading documents. What is the strongest next investigation?

**Correct answer: D.**

- **A. Buy more GPUs before inspecting the request path:** Additional idle accelerators do not directly repair slow data supply.
- **B. Remove document authorization checks to save time:** Performance improvements cannot bypass required access enforcement.
- **C. Retrain the model because idle hardware proves concept drift:** Resource waiting is not evidence of a changed input-outcome relationship.
- **D. Trace storage, networking, and preparation delays supplying the GPU — correct:** Input supply and data movement can limit performance even when accelerator compute has spare capacity.

#### Check 2: Ignoring metadata and using decimal units, how much raw storage do 3 billion 16-bit weights require?

**Correct answer: B.**

- **A. 3 GB of guaranteed total serving memory:** Sixteen bits is two bytes per weight, and raw weights are not total serving memory.
- **B. 6 GB for weights alone — correct:** 3 billion × 16/8 = 6 billion bytes; runtime buffers and request state need additional memory.
- **C. 48 GB for weights alone:** This treats bits as bytes rather than dividing by eight.
- **D. 6 GB including every possible concurrent request:** The arithmetic excludes activations, buffers, and concurrent sequence state.

#### Check 3: Which comparison between quantization and distillation is correct?

**Correct answer: A.**

- **A. Quantization reduces numerical precision; distillation trains a student using teacher information — correct:** They change representation and learned model behavior through different mechanisms, both requiring evaluation.
- **B. Both only route traffic to another identical replica:** Routing requests is not reduced precision or teacher/student training.
- **C. Quantization guarantees identical answers; distillation guarantees better answers:** Neither method guarantees preserved or improved quality on the intended task.
- **D. Distillation merely converts unchanged weights from 16 bits to 8 bits:** That describes a precision change, not training a student using a teacher.

### Measure latency, throughput & useful cost

#### Check 1: Which statement distinguishes throughput from concurrency?

**Correct answer: C.**

- **A. Both measure only elapsed time for one request:** Elapsed operation time is latency, not completed rate or in-flight count.
- **B. Throughput counts submitted requests; concurrency counts only completed ones:** Submission is not completion, and concurrency concerns work still in flight.
- **C. Throughput is completed work per time; concurrency is work in flight — correct:** The completion rate and the number of waiting or executing requests are distinct measurements.
- **D. Doubling concurrency always doubles throughput:** After saturation, more in-flight work can mainly increase waiting, errors, and memory pressure.

#### Check 2: A sequential request spends 800 ms outside the model and 200 ms in it. Halving only model time gives what total?

**Correct answer: D.**

- **A. 500 ms:** Only the 200 ms model stage is halved, not the whole 1,000 ms journey.
- **B. 100 ms:** This is the new model time alone and omits the unchanged 800 ms.
- **C. 800 ms:** This would require eliminating model time entirely rather than halving it.
- **D. 900 ms — correct:** The unchanged 800 ms plus 100 ms model time gives 900 ms under the stated assumptions.

#### Check 3: Two replicas report their own p95 latency. How should the team obtain the service's p95?

**Correct answer: B.**

- **A. Take the arithmetic mean of the two p95 numbers:** Percentiles cannot generally be averaged to recover the combined distribution's percentile.
- **B. Use combined observations or suitable distribution aggregation for the defined population — correct:** The service percentile depends on the distribution of service requests, including how many each replica served.
- **C. Choose the faster replica's p95:** Selecting the better subset hides users experiencing the other replica.
- **D. Add both p95 numbers because requests use one replica:** Adding percentiles does not describe the distribution of requests routed to one replica.

### Batch & cache without hiding stale results

#### Check 1: At low traffic, dynamic batching waits for more requests before inference. What tradeoff should be checked?

**Correct answer: A.**

- **A. Collection waiting may worsen request latency despite potential throughput gains — correct:** Grouping work can improve utilization while adding delay before any inference starts.
- **B. Waiting automatically improves every user's complete-response time:** Low traffic may make batch formation dominate waiting rather than speed up the journey.
- **C. Serving batches automatically update learned weights:** Inference batching does not itself perform training updates.
- **D. Any batch size always fits available memory:** Batch size and sequence lengths affect working memory and need explicit limits.

#### Check 2: Of 800 eligible cache lookups, 600 are hits. What is the hit rate, without claiming correctness?

**Correct answer: C.**

- **A. 25%:** 200/800 describes misses, not the 600 hits.
- **B. 133%:** 800/600 reverses the hit-rate denominator and cannot represent this fraction.
- **C. 75% — correct:** 600/800 = 75%; this rate alone says nothing about authorization, freshness, or answer quality.
- **D. 600%:** The hit count is not a percentage; divide it by eligible lookups.

#### Check 3: Two employees ask identical text about their personal salary. What is the safest cache design?

**Correct answer: D.**

- **A. Share one final answer using only the question text as its key:** Identical wording does not make personalized private answers equivalent or mutually authorized.
- **B. Share answers if the cache TTL has not expired:** Expiration does not establish caller scope or current authorization.
- **C. Ask the model not to mention the other employee's name:** Text instructions do not prevent exposing another person's underlying private information.
- **D. Isolate the relevant caller scope and enforce current access and validity — correct:** Private cache reuse requires appropriate scope, business facts, versions, and current authorization.

### Scale capacity & control queues

#### Check 1: What happens if arrivals stay above worker completion capacity indefinitely?

**Correct answer: B.**

- **A. A queue automatically makes workers faster:** A queue stores waiting work; it does not create compute capacity.
- **B. Backlog grows unless work is limited or sustainable capacity increases — correct:** Persistent positive arrivals minus completions accumulates waiting work and threatens deadlines.
- **C. Oldest-job age must remain zero:** Growing backlog generally increases how long jobs wait.
- **D. Acknowledging job intake proves every job meets its deadline:** Accepted work is not completed work, and intake health can conceal a delayed backlog.

#### Check 2: With no initial backlog, 60 jobs/s arrive and workers finish 45 jobs/s for 20 seconds. How many jobs accumulate?

**Correct answer: A.**

- **A. 300 jobs — correct:** The excess is 15 jobs/s for 20 seconds, giving 300 waiting jobs under the stated assumptions.
- **B. 1,200 jobs:** This counts all arrivals and ignores 900 completions during the interval.
- **C. 900 jobs:** This counts completed work rather than the unprocessed excess.
- **D. 15 jobs:** Fifteen is the excess rate per second; multiply by the 20-second duration.

#### Check 3: A new inference replica accepts connections but is still loading its model. What should routing do?

**Correct answer: C.**

- **A. Send full traffic because listening proves readiness:** The process can listen without being ready to perform promised inference.
- **B. Prefer it because its early errors return quickly:** Fast failures are not successful low-latency work and can sinkhole traffic.
- **C. Wait for defined serving readiness before adding normal traffic — correct:** Readiness must establish the appropriate model and required configuration can handle work.
- **D. Delete the existing healthy replicas immediately:** Removing ready capacity while the replacement loads can create an avoidable outage.

### Choose placement & rehearse resilient recovery

#### Check 1: Which mapping of recovery objectives is correct?

**Correct answer: D.**

- **A. RTO is data loss; RPO is GPU utilization:** RTO concerns service interruption and RPO concerns the recovered-data gap.
- **B. Both are official SDAIA practice pass scores:** Recovery objectives are business engineering targets, not badge thresholds.
- **C. RTO is backup file size; RPO is restoration price:** Neither target is defined by file size or monetary price.
- **D. RTO targets maximum service interruption; RPO targets maximum recovered-data gap in time — correct:** They address how quickly useful service returns and how far back recovered data may be.

#### Check 2: An accidental deletion immediately propagates to all live database replicas. What was missing from a replicas-only recovery plan?

**Correct answer: B.**

- **A. A claim that all copies are automatically independent:** Replication can deliberately copy the same destructive update, so independence cannot be assumed.
- **B. Recoverable earlier state and a tested restore process — correct:** Backups or suitable protected recovery points address corruption and deletion that replication can spread.
- **C. A larger prompt asking the model to remember the records:** Generated memory is not an authoritative replacement for lost records.
- **D. More live copies receiving the same deletion:** Additional synchronized replicas can propagate the same failure rather than preserve an earlier state.

#### Check 3: A hybrid assistant's local network fails. Its private inputs are not approved for an external provider. What is the best response?

**Correct answer: A.**

- **A. Use an evaluated permitted local/manual path or honestly report unavailability — correct:** Recovery must preserve data movement permissions, even when an external service is available.
- **B. Send every private input externally to meet a latency target:** A performance target does not authorize an unapproved transfer.
- **C. Assume hybrid means every cloud service is approved:** The placement label does not establish permissions for each service and data flow.
- **D. Remove credentials from the request but send all private records:** Removing a credential does not make sensitive record transfer authorized.

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
