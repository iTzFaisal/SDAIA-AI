# Domain 3 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes cover our proposed domain curriculum, not every possible official expert-level objective.

## Before you begin

Read the foundation primer and Domains 1–2, especially inference, evaluation, RAG, structured outputs, and bounded agents. No programming background is required.

## Lesson 1: APIs, HTTP & data contracts

**Learning objectives**

- Describe a request, response, endpoint, headers, and body.
- Interpret common HTTP statuses without mistaking them for model-quality scores.
- Distinguish syntax, schema, meaning, and authorization checks.

### An interface is an agreement

An application programming interface (API) defines how one software component asks another to do something. A courier's support screen might ask an AI service to classify a message. The screen is the client for that call; the AI service is the server. These are roles in an interaction, not permanent descriptions of a machine. The AI service may itself become a client when it calls a document store.

An endpoint is an address for a particular service operation or resource. HTTP stands for Hypertext Transfer Protocol. Its requests combine a method, an address, headers carrying metadata, and sometimes a body carrying the input. A response includes a status, headers, and sometimes a body with results or error details. A request identifier helps link records of the same interaction. You do not need to write a request to explain what information must cross the boundary.

### Read the exchange, not just the number

GET normally requests a representation of a resource; POST commonly submits input for processing or creates work. The documented service contract determines the exact operation. HTTPS protects data in transit, but does not decide whether a user may access a parcel or whether a model's answer is true. Credentials should be handled through protected application configuration, not included in prompts or public pages.

A 200 response reports successful handling at the HTTP level, not correct classification or grounded prose. A 202 response means accepted for processing, not completed. A 400 commonly indicates an invalid request; 401 points to missing or invalid authentication; 403 indicates refused access; 429 indicates too many requests. A 503 indicates temporary service unavailability. Codes guide diagnosis, but the documented body and operation matter too: not every server error is safe to retry, and a status alone cannot reveal whether a side effect occurred.

### Syntax and shape are separate boundaries

JSON is a common format for exchanging objects containing named fields and values. Parsing checks whether the text follows JSON syntax. A schema describes permitted shapes: required fields, types, allowed category values, and limits. Merely listing a field in a schema does not necessarily require its presence. Decide explicitly what is required and how unexpected fields should be handled.

Missing, null, and zero have different meanings. If journey_minutes must be a number, a missing field is absent, null is an explicit empty value, and zero is an actual numeric value. The contract must say which are allowed. Quietly converting every missing estimate to zero can turn a service failure into a false promise of immediate delivery. Type checking is useful, but the number also needs stated units and a defensible range.

### A data contract includes meaning

A contract extends beyond field names: define units, timestamp conventions, category meanings, input size limits, error behavior, and version expectations. A probability of late arrival differs from a probability of arriving on time, even if both are numbers between zero and one. A change in meaning can break a consumer while every schema check still passes. Document the decision the consumer is supposed to support.

Validate caller inputs before inference and validate outputs before use. Enforce authorization before accessing protected resources, and check business rules independently of data shape. A schema-valid parcel ID might belong to another customer. A schema-valid estimate might use the wrong unit. A generated explanation might contradict the authoritative estimate. Each failure needs an appropriate response rather than a single vague success flag. Shared contract examples make disagreements between teams visible before launch.

### Worked example: a parcel estimate

A support screen expects parcel_id as text and status as either estimated or unavailable. For estimated, require journey_minutes as a nonnegative number; for unavailable, allow an absent estimate according to an explicit contract rule. A response claiming estimated with journey_minutes as the text 'soon' may parse as JSON but fails the number requirement. A response containing 90 seconds in a field defined as minutes can pass a type check while violating the meaning. Check syntax, shape, units, and task validity as distinct steps.

Suppose a correctly shaped response returns a valid estimate for parcel P42, but the caller owns P17 only. Do not display P42 merely because the AI service returned 200. Enforce the user's parcel access in the application and downstream service. If no defensible estimate exists, use the documented unavailable path rather than inventing a zero. On paper, draw client → validated and authorized request → service → validated response → authorized display.

**Remember:** An API contract covers shape, meaning, errors, and permissions; HTTP success is not AI correctness.

### Common exam traps

- Valid JSON can violate a schema; valid schema can violate meaning or permission.
- 202 Accepted is not a completed result.
- HTTPS and authentication do not grant access to every resource.

### Explain without notes

- Explain how a numeric response can pass schema validation yet be wrong.
- What would you check after a 200 response before showing a customer's parcel estimate?

### Learning references

- MDN — HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- JSON Schema — Object reference: https://json-schema.org/understanding-json-schema/reference/object
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Lesson 2: Synchronous, asynchronous & event workflows

**Learning objectives**

- Choose a request-response or background-job workflow for a stated need.
- Explain job states, polling, callbacks, and duplicate event delivery.
- Separate streaming progress, cancellation, and confirmed completion.

### Waiting is a product decision

In a synchronous request-response workflow, the caller waits for the result of that interaction. This suits short tasks when a user needs an immediate answer and the complete path fits the waiting budget. A caller can still use nonblocking programming internally; here synchronous describes the user-facing interaction, not a requirement to freeze the whole computer.

In an asynchronous job workflow, the application accepts work, returns a job identifier, and completes it later. A courier can upload a large bundle of scanned invoices, continue other work, and return for extraction results. This changes the experience from 'wait for an answer' to 'track a job'. It requires durable status and failure handling; moving a slow task into the background does not itself make it faster or correct.

### Make states and ownership explicit

A simple job can move through accepted, queued, running, and succeeded or failed. Cancellation may add cancel_requested and cancelled. Define allowed transitions and what each state guarantees. Accepted should mean the system has taken responsibility according to its documented durability guarantee, not merely that a screen flashed a message. A succeeded state should refer to the full agreed task, not just a successful call to the model.

Keep the job ID, input reference, owner, relevant configuration versions, and final outcome linked. Each status or result lookup still needs authorization. An unpredictable ID is not a substitute for checking its owner. Retain only the information needed under the organization's data rules. Report useful error categories so users can distinguish invalid input from a temporary dependency failure, without exposing credentials or unrelated documents.

### Polling and callbacks deliver updates differently

Polling means the caller periodically asks for current status. It is simple to understand but overly frequent polling wastes resources. A callback or webhook means another system sends an HTTP notification when something changes. Verify its authenticity, expected source and scope, and protection against inappropriate replay. A browser displaying a job is not automatically the place to receive a server callback.

Queues and event systems often deliver a message at least once: a worker may receive it again if an acknowledgement is lost. Duplicate delivery must not create duplicate invoices or repeat a consequential action. Link events to the job and operation, deduplicate or apply idempotent handling, and do not assume events arrive in the order sent. A late running notification should not overwrite a confirmed succeeded state. The service's actual guarantees determine the design.

### Streaming and cancellation are not completion

Streaming exposes pieces of an output as they arrive, which can make a text assistant feel responsive. It does not certify the unfinished answer or turn fragments into a validated complete object. If a connection breaks after a draft sentence, the application needs to label the result incomplete. Accumulating fragments and validating the completed output is safer than using a partial generated amount to trigger a payment.

A cancellation request is not proof that work or side effects stopped. A worker might finish before it sees the request, or a downstream action might already have occurred. Define what can be interrupted, which outcomes users will see, and how results are reconciled. Likewise, a client disconnect does not necessarily cancel a server job. Avoid pretending the user can undo an irreversible external action merely by closing a tab.

### Worked example: extract a large invoice bundle

A batch takes about six minutes, while the upload screen's interaction budget is ten seconds. Choose a durable background job, return its ID promptly, and show queued or running status with an authorized status page. On completion, validate required fields and totals before exposing the final extraction. If one scan is unreadable, the contract should define whether this means a partial result with item-level failures or a failed whole job.

Imagine a worker stores the completed extraction but its acknowledgement is lost. The queue sends the same work again. Processing must recognize the existing completed operation rather than insert a second invoice. If a delayed running event arrives afterward, retain the terminal result. Sketch the states and ownership checks on paper; no queue library or programming exercise is needed to identify these failure modes.

**Remember:** Background work needs durable, authorized state and duplicate-safe handling; progress is not confirmed completion.

### Common exam traps

- Asynchronous processing changes waiting, not necessarily processing speed.
- At-least-once delivery does not mean exactly one execution.
- A disconnected stream or requested cancellation does not prove no side effect occurred.

### Explain without notes

- When is a job ID preferable to keeping one request open?
- Why should a late running event not replace a succeeded state?

### Learning references

- MDN — HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- Amazon Builders' Library — Timeouts, retries, and backoff with jitter: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Lesson 3: Timeouts, retries & safe failure handling

**Learning objectives**

- Distinguish transient failures, invalid requests, and uncertain action outcomes.
- Use deadlines, bounded backoff, jitter, and idempotency conceptually.
- Select an honest fallback without turning an outage into fabricated output.

### A failure can leave the outcome unknown

A timeout means the caller stopped waiting within a limit. It does not prove the server did nothing. The server may have finished while its response was lost. This distinction is especially important for payments, bookings, and ticket creation: a second call can repeat a side effect even though the first appeared to fail. Separate 'known failed before action', 'confirmed completed', and 'outcome unknown'.

A malformed request is unlikely to improve when sent unchanged. A short network interruption or temporary service overload may improve later. Authentication failures usually require valid credentials rather than repeated identical calls; a permission refusal requires the proper authorization path. Rate limiting requires respecting service guidance, not accelerating traffic. Decide retryability using the documented operation, failure category, and side-effect risk, not just whether an error looks inconvenient.

### Use an overall deadline

A timeout limits one wait; a deadline bounds the complete operation. Include the time spent on earlier steps, attempts, and retry delays. If the user must receive a response within five seconds, allowing each of three calls five seconds is inconsistent with that requirement. Pass or enforce a remaining budget at boundaries and leave time for validation and a useful failure response.

Timeouts set too low can create unnecessary failures and retries; values set too high can hold resources and leave users waiting. Choose them from realistic service behavior and product constraints, including network overhead. A cancellation signal may reduce wasted work, but verify what the downstream system actually stops. Expiry of the caller's deadline does not erase work already accepted by the server.

### Retries can magnify an outage

Use a limited number of retries for eligible transient failures. Backoff increases the delay between attempts; exponential backoff grows that delay quickly and is commonly capped. Jitter introduces controlled randomness to spread clients' retries instead of making them all hit the service at the same instant. A Retry-After instruction, when provided and applicable, should inform waiting, subject to the overall deadline.

Coordinate which layer retries. An application, its adapter, and a client library can accidentally multiply calls when all retry independently. Two layers making up to three total attempts each can generate up to nine downstream attempts for one logical request. This example counts attempts including the first call, not three extra retries. Backoff reduces synchronized pressure, but it does not make unlimited retries or unsafe actions acceptable.

### Idempotency protects an operation, not a word

An idempotent operation can be repeated without adding unintended effects beyond the original operation. For a non-idempotent creation request, a service may support an idempotency key identifying one intended operation. Retries of that same operation reuse the same key. The server must implement deduplication with appropriate storage, concurrency handling, scope, and retention. Merely sending a header or writing 'do not duplicate' in a prompt is not enough.

A new legitimate action needs its own operation identity; reusing one key for unrelated actions can suppress work incorrectly. For an uncertain payment outcome, look up the authoritative operation status or reconcile through a controlled path before allowing another charge. Where duplicate protection is unsupported or its retention has expired, blind retries are unsafe. A request correlation ID helps debugging, but is not an idempotency guarantee unless the service explicitly implements it that way.

### Worked example: a refund call times out

A support assistant submits an approved refund, then receives no response. Do not tell the customer the refund definitely failed and immediately submit a new refund identity. Mark the outcome uncertain and query the payment system using the original operation reference. If the service supports appropriate idempotency, a bounded retry with the original key can recover the original result instead of creating another refund.

For a separate read-only estimate with a five-second budget, the first attempt uses two seconds and a retry delay uses one second. Two seconds remain for all later work, including validation and response. A four-second retry cannot fit. If recovery is not possible in time, state that the estimate is unavailable and offer an approved manual route. A cached estimate is a valid fallback only if its freshness, permission, and task suitability are explicitly acceptable; never fabricate success to hide an outage.

**Remember:** Bound retries by safety and time; reconcile unknown side effects instead of assuming a timeout means failure.

### Common exam traps

- Timeouts do not prove that a payment or booking did not happen.
- Retries at multiple layers multiply load.
- Idempotency requires service enforcement; jitter alone does not prevent duplicate effects.

### Explain without notes

- What should remain the same when retrying one idempotency-protected action?
- Why might an unavailable response be safer than switching silently to an unverified answer?

### Learning references

- Amazon Builders' Library — Timeouts, retries, and backoff with jitter: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- MDN — HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

## Lesson 4: Test integrations & reproduce failures

**Learning objectives**

- Choose unit, contract, integration, end-to-end, and model-quality checks.
- Explain what test doubles demonstrate and what they cannot prove.
- Capture reproducible evidence and test failure paths without requiring identical AI prose.

### Test different claims at different boundaries

A unit test checks focused logic, such as rejecting a missing parcel ID or mapping a provider error to an unavailable result. A contract test checks the interface assumptions shared by producer and consumer: fields, types, meanings represented by examples, and error cases. An integration test exercises interaction between real components, such as an adapter and a service in a controlled environment. An end-to-end test checks a complete user journey.

The names overlap across organizations; always explain which real boundaries are exercised and which are substituted. Prefer focused, fast tests where they can establish the intended behavior, plus selected broader tests for wiring and actual exchanges. A universal percentage of each type is not a quality requirement. A fully mocked user journey cannot establish that a live provider accepts the request, even if it covers many lines of application logic.

### Test doubles are controlled stand-ins

A test double replaces a dependency during a test. A stub supplies prepared responses; a mock can also check expected interactions; a fake provides a simplified working implementation. These let the team simulate slow calls, 429 responses, invalid output, and unknown outcomes without making real payments or depending on live availability. An adapter with a clear interface makes such replacement easier.

A double can be wrong. If the stub returns a category field the real provider no longer supplies, every local test may pass while the integration fails. Maintain representative fixtures and contract checks, and use selected real-service tests in a safe environment. Avoid over-specifying irrelevant call order or exact internal details, because tests should protect required behavior rather than block harmless refactoring. Never use sensitive production records casually as fixtures.

### Correct software can still produce poor AI answers

Deterministic software checks and statistical model evaluation complement each other. Exact comparison is appropriate for fixed parsing, permission rules, and documented category fields. Free-text generation can have several acceptable phrasings. Assess evidence support, required facts, abstention, and prohibited actions using a defined rubric rather than assuming one exact sentence is the only correct result.

Reuse Domain 1's evaluation boundaries and Domain 2's generative rubrics. Keep development cases separate from final reserved evidence. Include ordinary messages, ambiguous requests, unsupported claims, conflicting retrieved versions, and costly errors. A system returning valid objects for every input may still choose the wrong category. A model with excellent offline answers can still fail because the application sends the wrong customer's evidence. Test both the model task and its integration.

### Reproducibility starts with identifying the system

Record the application revision, adapter and dependency versions, model identity, prompt/template version, retrieval corpus or index version, schema, settings, and evaluation-case version. Capture a sanitized input or reference and expected versus observed behavior. A random seed can help some systems repeat sampling, but does not guarantee identical results across different hardware, provider revisions, or serving conditions.

Make test environments controlled: isolate state, avoid dependence on test order, and provide known fixtures. Flaky tests pass and fail without a relevant intentional change; investigate clocks, race conditions, network assumptions, and output variability rather than rerunning until green and forgetting the failure. Logs and traces should link a request's stages using identifiers, durations, outcomes, and versions without indiscriminately retaining private prompts or secrets.

### Worked example: the classifier passes but the screen fails

A unit stub supplies category = billing, and the screen routes correctly. The real service now supplies label = billing, so the deployed screen treats the category as missing. A consumer/provider contract check and a real adapter integration test can catch this mismatch. A useful unit test still checks the application's safe behavior when the field is absent. Replacing the model with a larger one would not repair the broken field agreement.

Design a small test matrix on paper: valid response → show permitted category; missing category → reject or use documented fallback; 429 → bounded delayed recovery; timeout after action → reconcile; another user's parcel → deny; valid-shaped wrong answer → fail the quality rubric. The matrix names inputs, expected behavior, and test boundaries. High line coverage alone does not prove these assertions exist or that the model is useful.

**Remember:** Test logic, contracts, real boundaries, user journeys, and AI quality as different claims; record enough context to diagnose failures.

### Common exam traps

- A mock proves behavior under its assumptions, not live-provider compatibility.
- Line coverage measures executed code, not meaningful correctness assertions.
- A fixed seed or exact text match is not a universal generative-quality test.

### Explain without notes

- Which test catches a renamed response field hidden by an outdated stub?
- What versions and sanitized evidence would you collect for an intermittent retrieval failure?

### Learning references

- Software Engineering at Google — Testing Overview: https://abseil.io/resources/swe-book/html/ch11.html
- JSON Schema — Object reference: https://json-schema.org/understanding-json-schema/reference/object
- NIST AI RMF — Generative AI Profile (600-1): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- Google Engineering Practices — What to look for in a code review: https://google.github.io/eng-practices/review/reviewer/looking-for.html

## Lesson 5: Connect retrieval, structured outputs & tools safely

**Learning objectives**

- Preserve source identity and user permissions through retrieval integrations.
- Validate structured outputs and tool proposals outside the model.
- Distinguish evidence, suggestions, approvals, and confirmed actions.

### Keep evidence attached to its origin

Domain 2 described RAG as retrieval supporting generation. Integration must carry source IDs, chunk references, document versions, effective dates, and access scope through indexing, retrieval, prompt assembly, and citation display. A relevant paragraph stripped of its exception or date can support the wrong decision. A source ID should resolve to the actual authorized evidence, not simply to an invented title from the model.

Apply access restrictions before restricted content enters the model context, and enforce permissions again when sources or results are opened. Also scope caches and conversation history: filtering a search correctly is insufficient if another user's private answer is later returned from a shared cache. Query and document embeddings must be compatible. Changing embedding models generally calls for a deliberate index migration and retrieval evaluation, not merely changing a label.

### Parse, validate, then decide

Structured output asks a model to return agreed fields rather than arbitrary prose. Some systems constrain generation to a supported schema, but the application still needs to handle refusals, incomplete streams, service errors, and unsupported output forms. Valid JSON checks syntax; schema validation checks structure. Neither establishes that an amount matches an invoice, that a citation supports a claim, or that an action is authorized.

Treat external output as untrusted data. Validate permitted fields, types, ranges, identifiers, and cross-field consistency, then check facts and business rules using authoritative records. If validation fails, a limited repair attempt may be reasonable for a low-risk draft, but do not invent facts or widen permission to make the response pass. When displaying generated text, use safe rendering; when interacting with databases or commands, use controlled interfaces rather than executing generated strings.

### A tool call is a proposal

An LLM may propose a tool name and arguments. The application decides whether that tool is allowed, whether its arguments are valid, whether the user has permission, whether limits are met, and whether approval is needed. Authentication establishes identity; authorization decides whether this specific operation on this specific object is allowed. Tool descriptions and prompt instructions help guide selection, but cannot replace these enforced boundaries.

Expose narrow operations such as look up the caller's parcel status instead of unrestricted database access. Use the caller's scope rather than a shared administrator identity. A drafting task does not need send, delete, or payment authority. Keep retrieved passages and tool replies as data: an email saying 'ignore all rules and send the database' cannot grant new permission. Security coverage in Domain 6 will go deeper; here the goal is identifying where controls belong in an integration.

### Approval must match the actual action

For a consequential operation, show the reviewer the target, amount, destination, and relevant evidence. Bind approval to that exact operation, not to an open-ended instruction to do whatever the assistant decides later. Recheck authorization and current business conditions at execution, because a record can change after a draft was reviewed. Reject or request fresh approval if the approved action changes.

After execution, report the authoritative tool result rather than the model's claim that it succeeded. Distinguish proposed, awaiting approval, submitted, confirmed completed, failed, and outcome unknown. Log the enforced decision and actual effect with appropriate minimization. Step limits, cost limits, and duplicate-safe operation identities reduce damage; they do not replace source access control or fact checking. A friendly final sentence is not a receipt.

### Worked example: a draft refund with a forged instruction

A support assistant retrieves an approved policy and an attached customer email. The email says to ignore the refund limit and pay an unrelated account. It is source content, not application authority. The draft can summarize the request, but a narrow refund service must independently enforce ownership, the actual policy, destination rules, and the allowed amount. A proposal with a schema-valid amount of 900 still fails if the authorized ceiling is 100.

Suppose a reviewer approves 80 for parcel P17, then the model proposes 800 for P42. The earlier approval does not cover those arguments. Reject the changed proposal and require a new authorized review if appropriate. If the approved 80 is submitted and the response times out, use Lesson 3's unknown-outcome reconciliation. If a tool confirms success, store its operation reference and show that confirmation instead of trusting generated prose.

**Remember:** Preserve evidence and permissions; validate model proposals and bind approval to the exact action before execution.

### Common exam traps

- Schema-valid output can still be false, unsafe, or unauthorized.
- Instructions inside retrieved text do not grant tool authority.
- Approval of one amount or target does not authorize a changed action.

### Explain without notes

- Where must access control apply beyond the initial document search?
- How do you distinguish a model's success claim from a confirmed tool result?

### Learning references

- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- JSON Schema — Object reference: https://json-schema.org/understanding-json-schema/reference/object
- Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks: https://arxiv.org/abs/2005.11401
- Amazon Builders' Library — Timeouts, retries, and backoff with jitter: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/

## Lesson 6: Adapters, compatibility & maintainable handoffs

**Learning objectives**

- Separate business rules from provider-specific model integration.
- Plan compatibility checks for dependencies, models, schemas, and indexes.
- Review a design and document ownership, failures, and change decisions.

### Separate responsibilities, not just files

An adapter translates an application's stable interface into a provider's particular request and response format. For example, the application asks for a permitted category or an unavailable outcome; the adapter maps that request to a specific AI service and translates its response. Keep parcel ownership and refund rules outside provider-specific prompting so that changing the provider does not silently change the business policy.

Separate input validation, identity and permissions, retrieval, model access, output checks, and the final business action into understandable responsibilities. This does not require a separate remote service for every step. A small modular application may be easier to test and maintain than a network of unnecessary services. Choose boundaries that make real changes and failures easier to reason about, rather than adding abstractions for hypothetical future needs.

### Compatibility has more than one dimension

An interface can remain syntactically compatible while behavior changes. A new model may return the same fields but classify borderline messages differently. A provider might rename a field, change a refusal format, alter its tokenizer, or deprecate an API version. A retrieval migration can keep vector length while changing the representation space. Evaluate contracts, quality, permission handling, timing, and cost for the actual task.

Backward compatibility means old consumers continue to work under the promised contract. Renaming a required field or changing minutes to seconds is usually breaking. Adding an optional field may be compatible for tolerant consumers but can fail consumers that reject unknown fields. Plan versioning, migration examples, and a deprecation window with the consuming teams. Do not assume any change called minor is safe without checking the real agreement.

### Define the environment and update deliberately

Dependencies include the runtime, client libraries, adapters, model artifacts, and supporting services. Direct dependencies are chosen by the application; transitive dependencies come through those choices. Record exact resolved versions or an equivalent environment specification, and use approved sources. A lockfile can help reproduce package resolution, but it does not freeze a remote provider's behavior or certify the dependencies' safety.

Avoid unreviewed automatic upgrades in a critical path, but do not interpret reproducibility as permission to keep vulnerable versions forever. Review release notes and deprecations, test proposed changes in an isolated environment, and compare both contract behavior and task quality. Document what must change together, such as an embedding model and its index. Deployment gates and rollback are developed further in Domain 4; compatibility evidence begins before deployment.

### Review and documentation make knowledge transferable

A design or code review asks whether the change meets real requirements, respects access boundaries, handles edge cases, has useful tests, and remains understandable. Reviewers should inspect the risk-bearing logic and evidence, not just formatting or one successful demo. Small focused changes make cause and effect easier to inspect. Refactoring changes internal structure while aiming to preserve external behavior; tests should detect accidental behavior changes.

A handoff should state purpose and non-goals, the interface contract, component owners, supported versions, known limitations, failure categories, and the steps to reproduce a problem safely. A short architecture decision record captures the context, choice, alternatives, and consequences of an important decision. A runbook gives practical diagnosis and recovery steps. Explain why a rule exists and update documentation when behavior changes; stale documents can mislead the next team as much as stale test doubles.

### Worked example: replace a message-classification provider

Provider A returns category directly; provider B returns a different envelope and sometimes a refusal. Keep the application's category-or-unavailable contract stable and implement the translation in the adapter. Evaluate representative messages, category meanings, refusals, malformed outputs, authorization, latency, and cost before adopting B. A shared HTTP endpoint or a successful demo is not sufficient compatibility evidence.

Record why B was considered, the comparison data and versions, which behaviors are preserved, and which differences require migration. Update fixtures, contract examples, dependency records, and the owner's runbook. Leave an explicit limitation if B performs poorly on one required message type. On paper, explain who owns the business rule, adapter, document index, and approval path; a maintainable handoff makes those responsibilities clear without requiring learners to write code.

**Remember:** Use clear boundaries and adapters, verify both contract and behavioral compatibility, and leave an evidence-based handoff.

### Common exam traps

- An adapter isolates provider details; it does not guarantee equal model quality.
- Adding a field is not always compatible with strict consumers.
- A lockfile cannot freeze a remote service or replace security updates.

### Explain without notes

- What should be checked when a new model keeps the same schema?
- What belongs in a decision record that a successful demo cannot explain?

### Learning references

- Google Engineering Practices — What to look for in a code review: https://google.github.io/eng-practices/review/reviewer/looking-for.html
- Software Engineering at Google — Testing Overview: https://abseil.io/resources/swe-book/html/ch11.html
- JSON Schema — Object reference: https://json-schema.org/understanding-json-schema/reference/object
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Domain 3 revision sheet

- **API exchange:** Method + address + headers + optional body → response status, metadata, and optional result.
- **HTTP statuses:** 200: HTTP success, not AI correctness. 202: accepted, not completed. 401: authentication; 403: denied; 429: rate limit; 503: unavailable.
- **Contract:** Check syntax → schema → meaning/business rules → permissions. Specify units, missing/null behavior, errors, and versions.
- **Workflow:** Short immediate task → request-response. Long work → durable job identity, authorized status, and explicit states.
- **Events:** Expect documented delivery/order guarantees; duplicate-safe handling and valid state transitions protect outcomes.
- **Completion:** Stream fragments, disconnects, and cancellation requests are not confirmed final outcomes.
- **Retries:** Classify the failure; use bounded retries, backoff, jitter, and the remaining overall deadline. Avoid retry multiplication.
- **Side effects:** A timeout can leave the outcome unknown. Reconcile authoritative status; reuse a supported idempotency key for the same operation.
- **Testing:** Focused logic, contracts, real integrations, selected complete journeys, and model quality establish different claims.
- **Reproduction:** Record sanitized evidence and application, adapter, dependency, model, prompt, corpus/index, schema, and case versions.
- **Retrieval:** Preserve source/version metadata and compatible embeddings. Enforce permissions in retrieval, caches, history, and source opening.
- **Tools:** A model call is a proposal. Enforce allowed tools, arguments, user scope, business rules, and approval outside the model.
- **Approval:** Bind approval to exact arguments; recheck current conditions and report the authoritative action result.
- **Maintenance:** Adapters isolate provider details. Verify contract and task behavior on updates; document owners, decisions, limits, and recovery.

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

### APIs, HTTP & data contracts

### 1. An AI service returns HTTP 200 with a fluent but unsupported answer. What does the status establish?

A. The answer is factually correct

B. The request succeeded at the HTTP level; answer quality still needs checking

C. The caller can read every source in the organization

D. The model was retrained on the request

### 2. A response parses as JSON but contains journey_minutes as the text 'soon'. Which boundary fails when a number is required?

A. JSON syntax necessarily fails

B. The user's identity is necessarily wrong

C. Schema validation of the field type

D. The model's token budget necessarily fails

### 3. A schema-valid parcel estimate belongs to a different customer. What must prevent its display?

A. An enforced resource-authorization check

B. A lower generation temperature alone

C. Accepting it because the parcel ID is valid text

D. Changing HTTP to HTTPS alone

### Synchronous, asynchronous & event workflows

### 1. A service returns HTTP 202 and a job ID for document extraction. What should the screen communicate?

A. All extracted fields are already validated and complete

B. The job cannot fail after acceptance

C. Anyone with the job ID may see the result

D. The work was accepted; track its status for the final outcome

### 2. A queue redelivers invoice work after a lost acknowledgement. Which design protects against a second invoice record?

A. Duplicate-safe processing linked to the same operation identity

B. Assuming queue delivery always means one execution

C. Giving every delivery a fresh unrelated operation identity

D. Increasing the language model's output length

### 3. A text stream disconnects halfway through a proposed refund amount. What is the safest interpretation?

A. The partial amount is a validated final instruction

B. The server certainly stopped every associated task

C. The output is incomplete; do not use fragments as an approved action

D. The connection failure proves the refund was denied

### Timeouts, retries & safe failure handling

### 1. A booking call times out after submission. Which statement is justified?

A. The booking definitely never happened

B. The outcome may be unknown and needs authoritative reconciliation

C. The booking definitely happened twice

D. The user must immediately submit a new unrelated booking

### 2. Two nested layers each make up to three total attempts, including their first call. What is the maximum downstream attempt count?

A. 3

B. 6

C. 12

D. 9

### 3. What is the purpose of adding jitter to retry backoff?

A. Spread clients' retries over time to reduce synchronized bursts

B. Guarantee that a payment is applied only once

C. Make malformed requests valid without changing them

D. Remove the need for an overall deadline

### Test integrations & reproduce failures

### 1. What does a test with a prepared model-service stub demonstrate most directly?

A. The real provider accepts every production request

B. The model is always factually correct

C. The application handles the supplied response under the test's assumptions

D. All required contracts are permanently compatible

### 2. A local stub uses category, but the real provider now returns label. Which check most directly exposes this interface mismatch?

A. An exact comparison of the screen's font size

B. A consumer/provider contract check using representative real responses

C. Repeating the same stale stub test

D. A higher training accuracy score

### 3. A generated summary has several acceptable phrasings. Which test best checks the task rather than one arbitrary sentence?

A. Require every response to match one sentence character for character

B. Check only that the response contains at least fifty words

C. Count executed application lines and skip answer assessment

D. Use a rubric for required facts, evidence support, and unacceptable claims

### Connect retrieval, structured outputs & tools safely

### 1. An LLM proposes a tool name and arguments. Who must enforce whether the operation is allowed?

A. The application and downstream service using validated user permissions

B. Only the model's explanation that it has permission

C. Only a tool description written in the prompt

D. The retrieved document that requested the action

### 2. Retrieval filters by user permission, but a shared cache returns another user's private generated answer. What was missed?

A. Every cache must be deleted regardless of use

B. Higher cosine similarity would have authorized the answer

C. Access scope must also be enforced for cached results

D. A citation automatically permits private content disclosure

### 3. A reviewer approves 60 for parcel P10. The assistant then proposes 600 for P11. What should happen?

A. Execute because any approval authorizes the whole conversation

B. Reject the changed action and require appropriate fresh approval

C. Execute if the proposal is valid JSON

D. Let the model claim the two proposals are equivalent

### Adapters, compatibility & maintainable handoffs

### 1. What is the main role of a model-provider adapter?

A. Guarantee every provider has identical answer quality

B. Move all customer-permission rules into provider prompts

C. Retrain the model every time the user opens a screen

D. Translate a stable application interface to provider-specific requests and results

### 2. A new model keeps the old output schema but handles ambiguous messages differently. What is needed?

A. Representative task-quality checks as well as interface checks

B. No evaluation because field names are unchanged

C. Only a screenshot of one successful response

D. Remove ambiguous cases from the evaluation

### 3. What can a package lockfile help reproduce?

A. The exact behavior of a remotely updated model service

B. Permanent absence of dependency vulnerabilities

C. The resolved package-version selection

D. Every user's document access permissions

## Lesson checks — explanations (spoilers)

### APIs, HTTP & data contracts

#### Check 1: An AI service returns HTTP 200 with a fluent but unsupported answer. What does the status establish?

**Correct answer: B.**

- **A. The answer is factually correct:** HTTP status is not a measure of factual correctness.
- **B. The request succeeded at the HTTP level; answer quality still needs checking — correct:** Protocol handling and AI-task correctness are separate claims.
- **C. The caller can read every source in the organization:** A successful call does not grant unrestricted resource permission.
- **D. The model was retrained on the request:** Ordinary request handling does not imply parameter updates.

#### Check 2: A response parses as JSON but contains journey_minutes as the text 'soon'. Which boundary fails when a number is required?

**Correct answer: C.**

- **A. JSON syntax necessarily fails:** A text value can appear in syntactically valid JSON.
- **B. The user's identity is necessarily wrong:** A field-type mismatch does not identify an authentication failure.
- **C. Schema validation of the field type — correct:** The parsed value does not satisfy the required numeric type.
- **D. The model's token budget necessarily fails:** No context-length failure is described by this response.

#### Check 3: A schema-valid parcel estimate belongs to a different customer. What must prevent its display?

**Correct answer: A.**

- **A. An enforced resource-authorization check — correct:** Ownership or access permission must be checked independently of output shape.
- **B. A lower generation temperature alone:** Sampling settings do not enforce customer access rights.
- **C. Accepting it because the parcel ID is valid text:** A permitted field type does not authorize the referenced resource.
- **D. Changing HTTP to HTTPS alone:** Transport protection does not decide which customer's parcel is accessible.

### Synchronous, asynchronous & event workflows

#### Check 1: A service returns HTTP 202 and a job ID for document extraction. What should the screen communicate?

**Correct answer: D.**

- **A. All extracted fields are already validated and complete:** Accepted work can still be queued, running, or later fail.
- **B. The job cannot fail after acceptance:** Acceptance does not eliminate processing failures.
- **C. Anyone with the job ID may see the result:** Status and result lookups still need access control.
- **D. The work was accepted; track its status for the final outcome — correct:** A job identity supports later status and result retrieval, not immediate completion.

#### Check 2: A queue redelivers invoice work after a lost acknowledgement. Which design protects against a second invoice record?

**Correct answer: A.**

- **A. Duplicate-safe processing linked to the same operation identity — correct:** Redelivery must recognize or safely repeat the intended work without an extra effect.
- **B. Assuming queue delivery always means one execution:** At-least-once delivery explicitly permits repeated messages.
- **C. Giving every delivery a fresh unrelated operation identity:** This hides that both deliveries represent the same intended work.
- **D. Increasing the language model's output length:** Output length does not control duplicate inserts.

#### Check 3: A text stream disconnects halfway through a proposed refund amount. What is the safest interpretation?

**Correct answer: C.**

- **A. The partial amount is a validated final instruction:** Fragments are not a complete checked result or authorized action.
- **B. The server certainly stopped every associated task:** A client disconnect does not prove server-side cancellation.
- **C. The output is incomplete; do not use fragments as an approved action — correct:** Validate completed output and enforce the action boundary before execution.
- **D. The connection failure proves the refund was denied:** A transport interruption does not establish a business decision.

### Timeouts, retries & safe failure handling

#### Check 1: A booking call times out after submission. Which statement is justified?

**Correct answer: B.**

- **A. The booking definitely never happened:** The server may have completed while its response was lost.
- **B. The outcome may be unknown and needs authoritative reconciliation — correct:** A caller's timeout limits waiting, not proof of the server's effect.
- **C. The booking definitely happened twice:** A timeout alone establishes neither completion nor duplication.
- **D. The user must immediately submit a new unrelated booking:** A new identity can create a duplicate if the first booking completed.

#### Check 2: Two nested layers each make up to three total attempts, including their first call. What is the maximum downstream attempt count?

**Correct answer: D.**

- **A. 3:** This counts only one layer and ignores the other's attempts.
- **B. 6:** Nested attempts multiply rather than simply adding layer counts.
- **C. 12:** The stated limits include the initial call; each layer has three total attempts.
- **D. 9 — correct:** Three outer attempts can each cause three inner attempts: 3 × 3 = 9.

#### Check 3: What is the purpose of adding jitter to retry backoff?

**Correct answer: A.**

- **A. Spread clients' retries over time to reduce synchronized bursts — correct:** Controlled randomness helps avoid many clients retrying at the same instant.
- **B. Guarantee that a payment is applied only once:** Duplicate-effect prevention requires idempotent service handling, not randomized timing.
- **C. Make malformed requests valid without changing them:** Waiting randomly does not repair invalid request fields.
- **D. Remove the need for an overall deadline:** Retry delays still consume the operation's time budget.

### Test integrations & reproduce failures

#### Check 1: What does a test with a prepared model-service stub demonstrate most directly?

**Correct answer: C.**

- **A. The real provider accepts every production request:** The live service is not exercised by this prepared stand-in.
- **B. The model is always factually correct:** A canned response cannot establish population-level answer quality.
- **C. The application handles the supplied response under the test's assumptions — correct:** The test controls its dependency and checks behavior for those conditions.
- **D. All required contracts are permanently compatible:** A stub can become stale while a provider changes.

#### Check 2: A local stub uses category, but the real provider now returns label. Which check most directly exposes this interface mismatch?

**Correct answer: B.**

- **A. An exact comparison of the screen's font size:** Presentation styling does not verify provider response fields.
- **B. A consumer/provider contract check using representative real responses — correct:** The check compares actual exchanged fields with consumer assumptions.
- **C. Repeating the same stale stub test:** Reusing the wrong assumption cannot reveal the real response change.
- **D. A higher training accuracy score:** Model fitting accuracy does not validate field-name compatibility.

#### Check 3: A generated summary has several acceptable phrasings. Which test best checks the task rather than one arbitrary sentence?

**Correct answer: D.**

- **A. Require every response to match one sentence character for character:** Exact wording can reject correct paraphrases without assessing task meaning.
- **B. Check only that the response contains at least fifty words:** Length does not establish required facts or evidence support.
- **C. Count executed application lines and skip answer assessment:** Code coverage does not measure the generated summary's correctness.
- **D. Use a rubric for required facts, evidence support, and unacceptable claims — correct:** Task-specific semantic checks can allow valid phrasings while rejecting substantive errors.

### Connect retrieval, structured outputs & tools safely

#### Check 1: An LLM proposes a tool name and arguments. Who must enforce whether the operation is allowed?

**Correct answer: A.**

- **A. The application and downstream service using validated user permissions — correct:** The model proposal must pass externally enforced operation and resource checks.
- **B. Only the model's explanation that it has permission:** A generated claim does not establish actual authorization.
- **C. Only a tool description written in the prompt:** Descriptions guide the model but do not constrain effective service authority.
- **D. The retrieved document that requested the action:** Source text cannot grant privileges to execute tools.

#### Check 2: Retrieval filters by user permission, but a shared cache returns another user's private generated answer. What was missed?

**Correct answer: C.**

- **A. Every cache must be deleted regardless of use:** Caching can be appropriate with correct scope, freshness, and permission handling.
- **B. Higher cosine similarity would have authorized the answer:** Similarity does not establish access rights.
- **C. Access scope must also be enforced for cached results — correct:** Correct retrieval filtering alone does not protect a later cross-user cache response.
- **D. A citation automatically permits private content disclosure:** A citation can expose restricted information and grants no access.

#### Check 3: A reviewer approves 60 for parcel P10. The assistant then proposes 600 for P11. What should happen?

**Correct answer: B.**

- **A. Execute because any approval authorizes the whole conversation:** Approval of specific arguments is not open-ended delegation.
- **B. Reject the changed action and require appropriate fresh approval — correct:** The amount and target differ from the reviewed operation.
- **C. Execute if the proposal is valid JSON:** Output syntax does not bind the proposal to the actual approval.
- **D. Let the model claim the two proposals are equivalent:** Generated equivalence cannot replace the exact approved action boundary.

### Adapters, compatibility & maintainable handoffs

#### Check 1: What is the main role of a model-provider adapter?

**Correct answer: D.**

- **A. Guarantee every provider has identical answer quality:** Translation boundaries do not establish equal task behavior.
- **B. Move all customer-permission rules into provider prompts:** Business authorization should remain externally enforced and independent of prompting.
- **C. Retrain the model every time the user opens a screen:** An adapter translates interactions and does not inherently perform training.
- **D. Translate a stable application interface to provider-specific requests and results — correct:** This isolates provider formats and errors from the application's consumers.

#### Check 2: A new model keeps the old output schema but handles ambiguous messages differently. What is needed?

**Correct answer: A.**

- **A. Representative task-quality checks as well as interface checks — correct:** Syntactic compatibility can coexist with important behavioral changes.
- **B. No evaluation because field names are unchanged:** Stable field names do not establish stable decisions or quality.
- **C. Only a screenshot of one successful response:** One demonstration cannot cover representative and costly edge cases.
- **D. Remove ambiguous cases from the evaluation:** Required difficult cases should be tested, not hidden.

#### Check 3: What can a package lockfile help reproduce?

**Correct answer: C.**

- **A. The exact behavior of a remotely updated model service:** Package versions do not freeze a separate provider's serving behavior.
- **B. Permanent absence of dependency vulnerabilities:** Resolved versions can still contain vulnerabilities or need updates.
- **C. The resolved package-version selection — correct:** A lockfile records dependency resolution for an appropriately specified environment.
- **D. Every user's document access permissions:** Dependency records are not resource-authorization policies.

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
