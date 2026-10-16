# Domain 7 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12.

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes cover our proposed domain curriculum, not every possible official expert-level objective.

## Before you begin

Read the foundation primer and Domains 1–6, especially baselines, protected evaluation, integration contracts, releases, total cost, oversight, and governance. No programming background is required. Financial calculations and targets are illustrative; professional guidance does not replace applicable Saudi law or qualified project review.

## Lesson 1: Discover the problem & earn the use of AI

**Learning objectives**

- Turn a proposed AI solution into an evidence-based user problem.
- Compare non-AI alternatives and technical, operational, and legal feasibility.
- Design a bounded pilot that tests a risky assumption rather than a polished demonstration.

### A requested solution is not yet a need

A manager asks for an AI chatbot to reduce support delays. That is a proposed solution. The underlying need might be finding the correct policy, understanding a confusing form, or reaching a person who can approve an exception. Interview and observe actual users and staff, inspect authorized existing evidence, and map the journey from the first question to a verified resolution. A faster answer is not useful if the customer still cannot complete the task.

Write a problem statement that names who is affected, what they are trying to do, the current obstacle, its frequency or severity, and the desired outcome. Separate observed evidence from assumptions. Include people who abandon the current process, require accessibility support, or work outside the easiest branch. A sponsor's opinion is useful input, not a substitute for research with affected people.

### Compare the current process and simpler alternatives

Keep the current process as a baseline, and ask whether clearer instructions, better search, a fixed rule, workflow repair, or extra support could solve the problem. Deterministic rules suit stable explicit requirements; learning can help when useful patterns vary and representative authorized data exists. Generative text may help draft an explanation, but it adds unsupported-output and oversight risks. No option is best merely because it uses or avoids AI.

Compare alternatives on the same outcome, population, time horizon, constraints, and full cost. Doing nothing also has costs and harms, such as continued delays, so include it honestly. Conversely, a costly prototype is not evidence that AI is now necessary. Discovery can reasonably recommend stopping an AI project while improving the service another way.

### Feasibility has several independent gates

Technical feasibility asks whether useful inputs, labels or trusted evidence exist, whether they are available at decision time, and whether quality and latency can be evaluated. Operational feasibility asks whether the system fits the real workflow, users can use it, reviewers have capacity, and owners can support failures. Economic feasibility asks whether plausible benefits justify lifecycle costs. Legal and ethical feasibility asks whether the purpose, data use, actions, and consequences are permitted and appropriately controlled.

Passing one gate does not pass the others. A model may work on historical data while current data access is prohibited, or a safe draft may arrive too late to assist a decision. Consult qualified privacy, security, legal, and domain owners for applicable requirements. A profitable proposal cannot waive law or unacceptable harm, and the general references in this lesson do not establish project compliance.

### Test the uncertainty that could change the decision

A proof of concept tests whether an idea can work under chosen conditions; a pilot tests a bounded version in a realistic workflow with defined users and safeguards. Neither is automatically production approval. Write a hypothesis, representative cases, baseline, measurement plan, owner, duration, resource limit, and continue/change/stop rules before seeing results. Test the riskiest assumption, such as whether staff can verify drafts quickly enough, rather than selecting only easy demonstration questions.

Use synthetic or appropriately authorized data and limit live effects. For a drafting assistant, staff may review every draft before sending; that safeguard itself needs measurement and capacity. Record excluded cases and dependencies. A successful pilot among trained volunteers does not establish adoption or safety for all users. New scope needs fresh evidence and the relevant release and governance gates from earlier domains.

### Worked example: repair the journey first

A support desk handles 1,000 monthly requests. An authorized sample suggests 600 concern a form with contradictory instructions. The team compares corrected instructions, a searchable guide, and reviewed AI drafts. It must not promise that 600 requests will disappear: this count identifies a possible opportunity, not a measured effect. Observe whether users finish the form and whether repeat contacts and errors change after a bounded trial.

The remaining cases include exceptions requiring a caseworker's authority. A chatbot cannot invent that authority. A sensible problem statement is 'Help applicants submit a correct form and reach an authorized reviewer for exceptions.' On paper, list one non-AI option, one AI option, the missing evidence for each, and the decision that evidence would change. If a clearer form meets the need more safely and cheaply, recommend it without treating that choice as an engineering failure.

**Remember:** Discover a real need, compare simpler alternatives, and test the assumption that determines whether AI is justified.

### Common exam traps

- A request for a chatbot names a solution, not a verified user need.
- Technical feasibility does not establish operational or legal feasibility.
- A successful demonstration is not production approval or evidence for all users.

### Explain without notes

- What evidence distinguishes a user need from a sponsor's assumption?
- Give a pilot stop rule that could make a non-AI alternative the better choice.

### Learning references

- GOV.UK Service Manual — Learning about users and their needs: https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
- GOV.UK Service Manual — Measuring the benefits of your service: https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits
- SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf

## Lesson 2: Define success, total cost & business value

**Learning objectives**

- Separate model metrics, service outcomes, adoption, and guardrails.
- Calculate simple time savings, ROI, break-even volume, and payback using stated assumptions.
- Distinguish capacity released from cash saved and test benefit assumptions.

### Measure the result, not the activity

A business key performance indicator (KPI) tracks an important outcome, such as correctly resolved requests per eligible request or time to complete a valid application. Model accuracy is supporting evidence, not the entire business result. Adoption measures whether eligible people actually use the workflow; a login or generated draft is not a completed task. Guardrails constrain harms, such as unauthorized disclosure, worsening serious error rates, or unusable accessibility.

Define each metric's numerator, denominator, population, time window, baseline, source, owner, and target. State how abandoned, failed, escalated, and unanswered cases are counted. A team can raise apparent completion by excluding difficult requests or closing tickets prematurely. Check repeat contacts and verified outcomes as well. Agree success and stopping criteria before the pilot, and do not quietly change the denominator when results disappoint.

### Estimate the whole incremental cost

Total cost of ownership includes discovery, data preparation, licensing, integration, evaluation, hosting or inference, retrieval, human review, training, support, security/privacy work, monitoring, incident response, and retirement or migration. Some costs are one-time; others depend on volume or recur even with no traffic. Compare the incremental costs and benefits of each alternative against the same baseline and horizon. Existing spending that truly remains unchanged is not automatically a new project cost.

Account for rework and fallback workload rather than counting only model calls. A low token price can coexist with expensive verification. Do not double count one benefit as both staff time saved and an unrelated cash saving. Time released may improve capacity, quality, or service access without reducing payroll. Finance and service owners must explain how a benefit will be realized, by whom, and when.

### Use explicit simple financial conventions

For these paper exercises, simple undiscounted ROI = (incremental benefits − incremental costs) / incremental costs × 100% over the stated horizon. Both sides must use that same horizon and include stated setup and operating costs. If costs are zero, this ratio is undefined rather than infinite evidence of value. Real business cases may require discounting, tax, uncertainty, procurement rules, and qualified financial review; this convention is instructional, not a universal method.

Simple payback = setup cost / positive recurring net benefit per period, assuming constant benefit after launch and no other omitted cash flows. If recurring net benefit is zero or negative, there is no finite payback under those assumptions. Break-even volume = fixed incremental cost / positive net contribution per eligible completed task. State whether figures are monthly or annual, whether the contribution already subtracts variable costs, and whether savings are cash or an assigned capacity value.

### Challenge optimistic assumptions

Model low, central, and high adoption, review time, error/rework, useful volume, and provider costs. Sensitivity analysis changes assumptions to see which could reverse the decision. A forecast is not measured benefit, and a positive central estimate is not a guarantee. Name a benefits owner and an actual measurement plan, then compare realized outcomes and costs with the forecast after launch.

Nonfinancial benefits such as accessibility, reduced stress, or safer decisions can matter even if not converted to money. Present them explicitly rather than inventing a precise currency value. Mandatory safeguards and legal constraints are gates, not items that can be traded away for a higher ROI. A small valuable project can be preferable to a larger speculative one, but measured benefit and risk remain essential.

### Worked example: capacity value is not payroll cash

A reviewed drafting workflow saves a net 3 minutes on each of 2,000 monthly cases, after review and rework. Time released = 6,000 minutes = 100 hours. At an illustrative capacity value of SAR 60/hour, the benefit estimate is SAR 6,000/month. Operating cost is SAR 2,000/month and setup is SAR 12,000. Over 12 months, benefits = SAR 72,000; costs = SAR 36,000; net benefit = SAR 36,000; simple ROI = 100%. Recurring net benefit is SAR 4,000/month, so simple payback is 3 months after launch under constant assumptions.

This is capacity-value ROI, not proof of cash savings or an immediate staffing reduction. If useful volume halves, estimated benefit becomes SAR 3,000/month while operating cost stays SAR 2,000: first-year benefits and costs are both SAR 36,000, giving 0% ROI. Actual adoption and net time therefore matter. On paper, label horizon, units, costs, and benefit type before calculating; never present the favorable scenario alone.

**Remember:** Define honest outcome measures and full incremental costs; show the horizon, assumptions, and benefit type behind every value claim.

### Common exam traps

- Better accuracy or more generated answers does not prove a business benefit.
- Hours released are not automatically cash savings.
- ROI and payback need matched units and horizons; no positive recurring net benefit means no finite simple payback.

### Explain without notes

- Which costs would a token-price-only estimate miss?
- Why can a project release 100 hours without saving payroll cash?

### Learning references

- GOV.UK Service Manual — Measuring the success of your service: https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service
- GOV.UK Service Manual — Measuring the benefits of your service: https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits
- Google SRE — Service Level Objectives: https://sre.google/sre-book/service-level-objectives/

## Lesson 3: Communicate evidence, uncertainty & tradeoffs

**Learning objectives**

- Present evidence with population, counts, denominators, and scope limitations.
- Distinguish measured outcomes, forecasts, causal claims, and confidence.
- Give audience-appropriate recommendations with explicit decisions and next steps.

### Lead with the decision the audience must make

A sponsor needs to decide whether to fund a bounded pilot; a caseworker needs to know when to distrust a draft; an operator needs symptoms and recovery steps. Adapt detail to those decisions without changing the underlying facts. A useful brief states the problem, alternatives, evidence, costs and risks, recommendation, unresolved assumptions, owner, and next decision date. Plain language makes limitations easier to act on; it is not permission to omit them.

Describe uncertainty in concrete terms. 'We do not yet have outcomes for the rural branch' is more useful than 'AI is uncertain.' State what is measured, what is estimated, what is unknown, and what evidence would reduce uncertainty. Avoid pretending that a polished presentation, a vendor reputation, or a fluent generated explanation strengthens the actual evidence.

### Show denominators and coverage

Suppose an assistant answers only the easiest questions and achieves high correctness among its answers. Report both answer coverage and correctness among answered cases, plus unanswered/escalated outcomes. Give counts, sample selection, case difficulty, dates, and system versions. A single percentage with no population can hide exclusions. Tiny or unrepresentative samples require caution, not sweeping promises.

Separate a model's confidence score from uncertainty in an evaluation estimate and from confidence that the product will deliver business value. A score of 0.9 is not automatically a calibrated 90% probability for this population. Even a statistical confidence interval under appropriate assumptions does not cover all bias, leakage, new populations, or workflow changes. You do not need interval formulas here; understand what the evidence can and cannot support.

### Describe change and causation carefully

A rate increasing from 60% to 75% rises by 15 percentage points; relative increase = 15/60 = 25%. State which one you mean. A before-and-after change can reflect seasonality, staffing, case mix, or another policy change. It does not by itself prove AI caused the improvement. A suitable comparison or controlled experiment can improve causal evidence, but assignment, contamination, counts, harms, and the real workflow still need review.

Do not merge incompatible cohorts to make a favorable chart or tune repeatedly on the protected final test. Report important slices and serious failures even when the average improves. If a vendor benchmark concerns a different task, describe it as external evidence, not your measured service outcome. Forecasts based on those numbers must keep their assumptions visible.

### Recommend an action with limits and a follow-up

A balanced recommendation does not merely list risks and leave everyone uncertain. Explain why the proposed action fits the evidence, which alternatives were rejected, what conditions must hold, and what would cause a pause or reversal. Offer a smaller permitted scope when broad release is unsupported. Acknowledge disagreement and record the decision-maker's rationale rather than implying that all stakeholders agreed.

Use proportionate protected evidence. A report for a sponsor can contain aggregate failures and restricted links to sanitized examples, not private customer transcripts pasted into slides. Check understanding by asking recipients to explain the permitted use and escalation route in their own words. After a material finding or change, update affected users and documents rather than relying on an old disclaimer.

### Worked example: an honest pilot brief

Of 200 representative eligible pilot requests, the assistant answers 120; reviewers judge 108 of those answers correct using a stated rubric. Answer coverage = 120/200 = 60%; correctness among answers = 108/120 = 90%. Correct answered cases are 108/200 = 54% of all eligible requests. The other 80 requests require a fallback, and 12 answers fail the rubric. Calling this a '90% successful service' hides both groups.

The recommendation might be to continue the reviewed pilot while improving missing evidence and measuring total resolution time. It should state that serious failures, unresolved slices, and fallback cost remain release gates. On paper, write a three-sentence sponsor brief: what happened with denominators, what remains uncertain, and the next bounded action. Do not translate these practice figures into official badge levels or a promise of future production performance.

**Remember:** Communicate the decision, evidence, denominators, limits, and next action without turning estimates or narrow results into guarantees.

### Common exam traps

- Correctness among answers is not success across all eligible requests.
- Percentage points differ from relative percentage change.
- Before-and-after improvement and model confidence do not prove causation or business certainty.

### Explain without notes

- How would your pilot brief change for an operator versus a sponsor?
- Why should you report both coverage and answer correctness?

### Learning references

- GOV.UK Service Manual — Measuring the success of your service: https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service
- GOV.UK Service Manual — Measuring the benefits of your service: https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits
- ACM — Code of Ethics and Professional Conduct (2018): https://www.acm.org/code-of-ethics
- Google ML Crash Course — Accuracy, recall, precision, and related metrics: https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall

## Lesson 4: Collaborate through ownership, review & handoffs

**Learning objectives**

- Separate delivery responsibility, decision accountability, consultation, and notification.
- Prepare a usable handoff with versions, limits, runbooks, and accepted ownership.
- Resolve disagreements through evidence and appropriate authority rather than blame.

### Skills must meet around the same outcome

AI delivery needs domain knowledge, user research, data/evaluation work, integration, operations, security/privacy, and product decisions. Job titles vary; a small team may share skills, while high-impact decisions may need independent review. Product leadership connects priorities and user needs; domain experts define meaningful outcomes; data and AI specialists evaluate candidates; engineers and operators make the complete workflow supportable. No model specialist alone can authorize every business or legal decision.

Involve supporting teams early enough to change the design. A data owner can identify missing permission, and a caseworker can reveal that the proposed output is unusable at decision time. Consult affected users, including those needing assistance. Vendor expertise can help, but supplier promises do not replace adopting-entity accountability or the conditional legal and governance responsibilities described in Domain 6.

### Make decision rights explicit

A responsibility matrix can distinguish Responsible (does the work), Accountable (owns the decision or result), Consulted (provides input before the decision), and Informed (receives updates). This RACI convention is a collaboration aid, not Saudi law or a mandatory staffing chart. In a simple matrix, name one accountable owner for each decision to avoid ambiguous final authority, while separately preserving any required approval from security, privacy, legal, or other authorities.

Separate preparing evidence from approving a release or accepting permitted residual risk. State who can stop a risky capability, who covers absences, and how disagreements escalate. Being informed is not approval; attendance at a meeting is not consent to all decisions. If owners disagree, document the issue, constraints, evidence, and options, then ask the authorized decision-maker. Do not let a schedule owner overrule a legal gate simply because they own delivery.

### Review the work, not the person's status

Constructive review tests a claim against evidence: 'This sample excludes delayed outcomes; can we add a mature cohort?' is more useful than accusing someone of incompetence. Invite domain and operational review of evaluation rubrics, failure handling, accessibility, and support. Record unresolved findings and assign actions. A senior title, majority vote, or impressive demo does not establish correctness.

Use shared acceptance criteria so product and technical teams do not mean different things by 'done.' A model can pass an offline metric while the application lacks source access, authorization checks, or a fallback. User acceptance testing checks a useful workflow with representative users; it complements rather than replaces model, integration, security, and recovery tests. Recheck the agreed evidence when interfaces, versions, or purposes change.

### A handoff is an accepted transfer, not a file dump

A usable handoff names purpose, permitted and excluded uses, compatible versions, data/source lineage, evaluation and known gaps, current status, dependencies, access process, monitoring, incident contacts, runbook, fallback/rollback steps, and open actions with owners and dates. Include privacy-safe reproduction steps and restricted evidence links rather than passwords or raw confidential records. Documentation needs a maintained location and owner, not several contradictory copies.

The receiving team should confirm access, rehearse a likely failure or recovery scenario, ask questions, and explicitly accept the responsibilities it can support. If monitoring or escalation is inaccessible, the handoff is incomplete even if a document was emailed. State temporary coverage and limits until gaps are fixed. A training session is useful, but a tested runbook and a clear on-call path matter when the original builder is absent.

### Worked example: the missing owner is the blocker

A reviewed assistant is ready for a limited launch. The builder sends a presentation saying 'model accuracy is good' and then leaves. Operations has no corpus version, fallback instructions, quality-alert owner, or permission to disable the messaging tool. This is not an accepted operational handoff. Narrow or pause the rollout until named owners verify the release identity, access, alerts, intervention authority, and practical recovery steps.

On paper, assign responsibilities for four decisions: source approval, release approval, daily monitoring, and incident containment. Then write the receiving operator's first action if private data appears in an answer. The instruction should identify an enforced containment path and appropriate security/privacy escalation, not 'ask the model to be careful.' Keep operational recovery and any conditional notification duties separate, and record the recipient's acceptance rather than assuming silence means readiness.

**Remember:** Shared outcomes need explicit decision rights, evidence-based review, and a handoff the receiving team can actually operate and accept.

### Common exam traps

- Being informed or attending a meeting is not approval.
- A RACI chart does not replace legally required roles or independent approval gates.
- Sending documents is not an accepted transfer of operational responsibility.

### Explain without notes

- What is the difference between doing release work and approving the release?
- Which rehearsal would show whether a handoff runbook is usable?

### Learning references

- GOV.UK Service Manual — What each role does in a service team: https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team
- Google Engineering Practices — What to look for in a code review: https://google.github.io/eng-practices/review/reviewer/looking-for.html
- Google SRE — Managing Incidents: https://sre.google/sre-book/managing-incidents/
- ACM — Code of Ethics and Professional Conduct (2018): https://www.acm.org/code-of-ethics

## Lesson 5: Prioritize work & manage adoption and change

**Learning objectives**

- Prioritize permitted projects using value, uncertainty, dependencies, and constrained capacity.
- Separate a prototype, bounded useful scope, and production-ready service.
- Plan adoption, scope-change review, and responsible retirement.

### Do the necessary gates before ranking attractive ideas

A backlog is an ordered list of proposed work, not a promise that every item will be delivered. First separate mandatory safety/legal work and blockers from optional improvements. For feasible permitted candidates, compare expected user benefit, strategic fit, evidence strength, effort, dependencies, operational burden, and reversibility. A simple value-to-effort ratio can aid discussion, but uncertain estimates are not precise facts and a high score cannot override a gate.

Opportunity cost is the value of the best alternative forgone when resources are committed. Include scarce domain-review and operations capacity, not only development days. An independent small project may produce value sooner than a nominally better project waiting for unavailable data. When uncertainty could reverse the choice, fund a bounded discovery experiment rather than pretending the forecast is certain.

### Deliver a small useful scope without dropping safeguards

A prototype explores an idea and may use synthetic data in an isolated setting. A minimum viable product is a deliberately limited useful product for defined users and a learning goal; it is not permission to omit required access checks, safe fallbacks, oversight, or monitoring. Production readiness concerns the full supported workflow, including failure modes and ownership. Label the stage and scope clearly so a demonstration is not mistaken for an approved service.

Sequence dependencies. Approved source data must exist before retrieval evaluation; reviewers need access and training before supervised live use; operators need alerts and runbooks before taking ownership. 'Ninety percent complete' is unhelpful if the remaining task is an essential gate. Report concrete milestones, blockers, decision dates, and evidence rather than counting visible features alone.

### Adoption is a workflow change, not an email

Users need to understand what the system can do, when it should not be used, how to verify an output, how to override or get help, and what happens if it fails. Involve frontline staff in design, provide accessible training and practice, appoint support contacts, and keep a workable alternative during transition. Changed incentives can make people close requests faster while quality worsens, so measure completed outcomes and rework as well as usage.

Distinguish availability, trial use, sustained appropriate use, and actual benefit. If only 40 of 100 eligible staff use a service regularly, adoption under that definition is 40%, even if all 100 attended training. Investigate obstacles rather than blaming users: slow integrations, unclear authority, added review work, and inaccessible design may explain low uptake. Never demand uncritical acceptance as proof of successful change.

### Material changes need impact review

A request to add automatic messages to a read-only assistant changes authority and consequences, not just a button. Assess effects on purpose, permissions, data, recipients, oversight, cost/capacity, evaluation, dependencies, and rollback. Record options, updated scope, evidence requirements, owners, and approval. Adjust delivery commitments honestly; do not quietly turn a reviewed pilot into an unreviewed high-impact service.

Retirement also needs care. Identify users and integrations that depend on the old behavior, communicate the timeline, provide an appropriate migration or alternative, and handle access and retained data according to applicable requirements. Deleting a UI does not remove every source copy or legal duty. Continue useful monitoring and support during the transition and verify that the new workflow actually works before removing a necessary fallback.

### Worked example: rank only the feasible choices

A team has eight review-days available. A form redesign needs three days and has observed user evidence; an assistant pilot needs five days but depends on a dataset not yet authorized; a required access-control repair needs two days. Perform the required repair first, leaving six days. The assistant's estimated benefit does not make its data blocker disappear. The team can proceed with the redesign and use remaining permitted time to investigate the assistant's feasibility, rather than promise both launches.

Later, a sponsor requests automatic refunds from the pilot. Treat this as a material change: financial authority, exact-argument approval, error consequences, duplicate-action reconciliation, and monitoring must be reassessed. On paper, write a short change note with the added capability, affected gates, revised owners, and what stays disabled until approval. A useful schedule expresses these dependencies instead of treating the original date as a reason to bypass them.

**Remember:** Prioritize permitted work under real constraints, support appropriate adoption, and review changes in authority or scope before expanding or retiring a service.

### Common exam traps

- A prioritization score cannot override legal or safety gates.
- A minimum viable product is not a safeguard-free prototype.
- Training attendance and feature delivery do not prove sustained adoption or benefit.

### Explain without notes

- Why might a lower predicted-value task be the best next task?
- What changes when a read-only assistant gains a refund tool?

### Learning references

- GOV.UK Service Manual — Measuring the benefits of your service: https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits
- GOV.UK Service Manual — What each role does in a service team: https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team
- ACM — Code of Ethics and Professional Conduct (2018): https://www.acm.org/code-of-ethics
- OWASP LLM Top 10 — LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

## Lesson 6: Practice integrity, escalation & continuous learning

**Learning objectives**

- Recognize misleading claims, conflicts of interest, confidentiality, and attribution issues.
- Escalate a material risk with proportionate protected evidence and a practical action.
- Build a learning and review loop without treating credentials or familiar scores as proof of competence.

### Honesty applies when the result is inconvenient

Professional integrity means accurately representing evidence, competence, commitments, and limitations. Do not hide serious failures, invent labels, cherry-pick an easy benchmark, or imply an independent review occurred when it did not. Correct material mistakes in reports and notify the appropriate people who relied on them. A manager's request to make the chart look better is not permission to falsify an evaluation or silently redefine success.

Disclose relevant real or perceived conflicts of interest, such as a supplier incentive tied to your recommendation. Arrange an appropriate independent review or recusal where needed; disclosure alone does not eliminate the conflict. Credit others' contributions and check permissions and licenses for reused datasets, models, text, and artifacts. Public accessibility does not itself establish unrestricted reuse rights.

### Protect confidentiality while still reporting risks

Use approved channels and minimum necessary evidence when sharing customer data, internal weaknesses, or commercial information. An external AI assistant or personal account is not automatically an approved place to analyze private material. Sanitization must consider indirect identification and linkage, not merely remove a name. Aggregate results and synthetic examples can often communicate a risk without disclosing raw records.

Confidentiality is not a reason to conceal a material risk from authorized responders. Identify the right security, privacy, service, legal, or governance owner and provide restricted evidence through the appropriate process. Do not indiscriminately publish private records to prove seriousness. General ACM professional guidance supports honest responsible practice, but it is not Saudi law or a legal exemption; applicable rules and qualified advice govern real disclosures and reporting duties.

### Escalation should enable a decision

An actionable escalation states observed behavior, time and versions, affected scope, plausible harm, evidence location, current containment, uncertainty, recommended action, owner, and urgency. Separate facts from hypotheses: an unexplained score drop is not confirmed poisoning, and a suspected disclosure is not a complete recipient inventory. Ask for a concrete decision, such as pausing a tool until authorization is verified, rather than forwarding a vague warning to everyone.

Escalate promptly when material harm is plausible; do not wait for perfect evidence. Use the authorized route and a higher appropriate channel if the first owner is unavailable or fails to act on a serious unresolved concern. Keep a protected decision record and communicate within your authority. A sponsor can decide permitted business tradeoffs but cannot waive law; operational containment, affected-subject communication, and conditional legal notification remain separate responsibilities.

### Know the boundary of your competence

A professional can say 'I do not yet know' and still be useful by identifying the missing expertise, evidence, and next step. Seek domain, statistical, security, privacy, legal, or financial review when a decision exceeds your competence. Do not sign a compliance assurance because you passed a practice paper or because a model generated a persuasive legal answer. Learning creates capability over time; it does not retrospectively validate unsafe work.

Use peer review, incident lessons, representative fresh evaluation, and a focused learning plan. After a failure, examine contributing factors such as incentives, unclear ownership, missing tests, and difficult interfaces; a blameless review still assigns corrective actions and accountability. State action, owner, due date, and verification. Completion means the fix works, not merely that a meeting was held or a training link was sent.

### Worked example: revise the claim and control the risk

A pilot report claims 95% correctness from 100 cases, but a colleague discovers that 20 difficult eligible cases were excluded without explanation. Preserve the original version, reconstruct the eligible cohort and outcomes, correct the report, and inform the decision-maker before it supports wider release. Do not count unknown outcomes as successes or silently remove the colleague's finding. Any privacy-sensitive examples remain restricted while the corrected aggregate evidence is shared.

Separately, an operator observes a draft containing another department's private record. Use the approved containment path, preserve proportionate protected evidence, and notify security/privacy owners promptly; do not upload the conversation to a public forum. On paper, write observed fact, possible impact, current control, missing evidence, and the next accountable action. Then identify one learning need and how you will test the resulting improvement with fresh cases rather than memorized questions.

**Remember:** Be honest about evidence and competence, protect confidential information, escalate material risks through appropriate owners, and verify what learning and corrective work actually improve.

### Common exam traps

- A deadline or sponsor request does not justify falsifying evidence.
- Conflict disclosure is not automatically conflict resolution; public data is not automatically unrestricted data.
- Credentials, familiar-question scores, and completed training do not certify project competence or compliance.

### Explain without notes

- What should an escalation contain besides a warning?
- How can you report a privacy risk without spreading the affected records?

### Learning references

- ACM — Code of Ethics and Professional Conduct (2018): https://www.acm.org/code-of-ethics
- Google SRE — Managing Incidents: https://sre.google/sre-book/managing-incidents/
- SDAIA — PDPL Implementing Regulation: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2
- Google Engineering Practices — What to look for in a code review: https://google.github.io/eng-practices/review/reviewer/looking-for.html

## Domain 7 revision sheet

- **Discovery:** Find affected users, their goal, journey, obstacle, and evidence. A chatbot request is a solution assumption.
- **Alternatives:** Compare the current process, workflow/content fixes, rules, search, and AI under the same outcomes and constraints.
- **Feasibility:** Technical, operational, economic, legal, and ethical gates are distinct; profit cannot waive law or unacceptable harm.
- **Pilot:** Test a decision-changing assumption in bounded realistic use; define baseline, users, safeguards, owners, and stop rules first.
- **Success:** Separate model metrics, verified service outcomes, appropriate adoption, and harm guardrails. State counts, denominator, window, and owner.
- **Total cost:** Include setup, data, integration, inference, review/rework, support, assurance, monitoring, and retirement; compare incremental alternatives.
- **Benefit type:** Time released can improve capacity or quality without reducing payroll. Avoid double counting and name a realization owner.
- **Simple ROI:** (Incremental benefits − incremental costs) / incremental costs × 100%, same stated horizon, including setup; costs must be positive.
- **Payback:** Setup / positive constant recurring net benefit per period; no finite simple payback if that benefit is zero or negative.
- **Break-even:** Fixed incremental cost / positive net contribution per task; state period and whether variable costs are already subtracted.
- **Sensitivity:** Vary adoption, useful volume, review time, and costs. Forecasts and central estimates are not guaranteed realized benefits.
- **Communication:** Decision → evidence and limits → alternatives and recommendation → owner and next evidence/date. Protect private examples.
- **Coverage:** Answered/eligible differs from correct/answered. Report excluded, unanswered, escalated, and serious failure outcomes.
- **Claims:** Percentage points differ from relative change; before-and-after movement alone does not prove causation.
- **Ownership:** Responsible does work; Accountable owns decision/result; Consulted provides input; Informed receives updates. Preserve required approvals.
- **Handoff:** Versions, evidence/gaps, permitted scope, access, alerts, runbook, fallback, contacts, and open actions need rehearsed recipient acceptance.
- **Priority:** Required gates and blockers precede scoring. Consider value, uncertainty, effort, dependencies, scarce capacity, and alternatives forgone.
- **Adoption and change:** Training attendance is not use or benefit. Review material scope/authority changes and support safe migration or retirement.
- **Integrity:** Do not falsify evidence; correct material errors, credit permitted work, disclose/manage conflicts, and acknowledge competence limits.
- **Escalation and learning:** Send minimum necessary protected facts, impact, uncertainty, containment, and a requested decision to appropriate owners. Verify corrective actions with fresh evidence.

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

### Discover the problem & earn the use of AI

### 1. A sponsor requests an AI chatbot for a confusing application process. What should discovery establish first?

A. Which model has the most parameters

B. A promise that every request will become automated

C. What users are trying to accomplish and where the current journey breaks

D. The final chatbot color scheme

### 2. A model performs well on authorized historical examples, but no team can review its high-impact outputs in time. Which feasibility issue remains?

A. Operational feasibility of the proposed oversight workflow

B. No issue; technical performance passes every feasibility gate

C. Only the spelling of the model's name

D. A guarantee that replacing reviewers with a prompt is lawful

### 3. A pilot is meant to decide whether reviewed drafts save staff time. Which design is most useful?

A. Show only three easy drafts and measure applause

B. Count generated words without tracking review or rework

C. Allow every draft to reach customers immediately

D. Compare representative cases with the current process, including review/rework and predefined stop rules

### Define success, total cost & business value

### 1. A team says an assistant released 80 staff-hours last month. Which claim follows without additional financial evidence?

A. Payroll definitely fell by the value of 80 hours

B. The team may have more useful capacity, but cash savings are not yet established

C. The project must have a positive lifetime ROI

D. Every reviewer should immediately be removed

### 2. Using this kit's simple first-year ROI convention, benefits are SAR 90,000, setup is SAR 10,000, and operation is SAR 40,000. What is ROI?

A. 180%

B. 125%

C. 80%

D. 40%

### 3. A candidate has positive estimated ROI at high adoption but negative ROI at low adoption. What should the business case do?

A. Show both scenarios, the assumptions, and a plan to measure adoption and realized benefit

B. Publish only the positive scenario as a guarantee

C. Treat token price as the entire cost

D. Ignore applicable privacy rules because the central estimate is profitable

### Communicate evidence, uncertainty & tradeoffs

### 1. A service completion rate rises from 50% to 60%. How should the change be described?

A. A 10% relative increase and 20 percentage points

B. A guaranteed causal effect of AI

C. A 60-percentage-point increase

D. 10 percentage points; a 20% relative increase

### 2. Of 100 eligible requests, an assistant answers 40 and 30 of those answers pass review. Which report uses honest denominators?

A. 75% of all eligible requests succeeded

B. 40% answer coverage; 75% of answers pass; 30% of eligible requests receive a passing answer

C. 30% coverage and 40% answer correctness

D. 100% coverage because unanswered cases are ignored

### 3. A sponsor needs a launch recommendation from a small pilot. Which brief is most responsible?

A. Only the highest accuracy number with no case counts

B. Every private transcript copied into the presentation

C. Evidence with counts and limits, alternatives, a bounded recommendation, owner, and next decision date

D. A vendor benchmark described as our measured production result

### Collaborate through ownership, review & handoffs

### 1. In a simple RACI matrix, what does Informed normally mean?

A. Receives relevant updates; not automatically the approving authority

B. Must approve every release by law

C. Does all implementation work

D. May waive privacy obligations

### 2. Operations receives a model file but cannot access quality alerts or disable an unsafe tool. What is the handoff status?

A. Complete because a file was sent

B. Complete if the model has many parameters

C. Complete if nobody replies within one hour

D. Incomplete until owners verify access, intervention, runbooks, and accepted responsibilities

### 3. A reviewer discovers missing rural cases in an evaluation. Which response best supports collaboration?

A. Dismiss the finding because the reviewer is junior

B. Record the coverage gap, discuss its decision impact, and assign appropriate evidence work

C. Take a vote on whether rural cases exist

D. Remove the finding from the handoff to reduce disagreement

### Prioritize work & manage adoption and change

### 1. A pilot has a limited useful scope. Which safeguard may be omitted solely because it is called a minimum viable product?

A. Required authorization checks

B. Necessary oversight for its consequential actions

C. None of the safeguards required for that scope

D. A tested safe fallback needed by its workflow

### 2. All 120 eligible staff attend training; 36 use the service regularly. With regular use as the adoption definition, what is adoption?

A. 30%

B. 100%

C. 36%

D. Guaranteed positive ROI

### 3. A sponsor adds automatic refunds to a read-only policy assistant. What is the best next step?

A. Enable refunds because the interface looks the same

B. Keep the original approval and add a longer prompt

C. Ignore capacity, duplicate actions, and error costs

D. Review changed authority, risks, contracts, evidence, costs, and owners before enabling it

### Practice integrity, escalation & continuous learning

### 1. An engineer receives a supplier incentive linked to recommending that supplier. What is the responsible response?

A. Hide it if the supplier is popular

B. Disclose the conflict and arrange appropriate independent review or recusal

C. Assume disclosure automatically resolves every conflict

D. Delete competing evaluations

### 2. A draft unexpectedly includes another department's private information. How should an engineer escalate?

A. Publish the raw conversation on a public forum

B. Wait until every recipient and cause is known

C. Use approved containment and restricted minimum evidence to alert security/privacy owners promptly

D. Treat a generic model apology as complete recovery

### 3. A practitioner passes a familiar quiz but lacks expertise for a project-specific legal assurance. What should they do?

A. State the competence limit and seek qualified review before making the assurance

B. Sign the assurance because retake scores are high

C. Ask a language model to declare compliance and use that as approval

D. Hide the gap to avoid delaying the deadline

## Lesson checks — explanations (spoilers)

### Discover the problem & earn the use of AI

#### Check 1: A sponsor requests an AI chatbot for a confusing application process. What should discovery establish first?

**Correct answer: C.**

- **A. Which model has the most parameters:** Model size does not identify what users need or why the current process fails.
- **B. A promise that every request will become automated:** Discovery has not established either the need or whether automation is appropriate.
- **C. What users are trying to accomplish and where the current journey breaks — correct:** Research turns a proposed solution into an evidence-based problem that alternatives can address.
- **D. The final chatbot color scheme:** Visual choices do not establish the underlying problem or feasibility.

#### Check 2: A model performs well on authorized historical examples, but no team can review its high-impact outputs in time. Which feasibility issue remains?

**Correct answer: A.**

- **A. Operational feasibility of the proposed oversight workflow — correct:** Useful historical performance does not supply reviewers, capacity, or timely intervention.
- **B. No issue; technical performance passes every feasibility gate:** Technical, operational, economic, and legal gates establish different claims.
- **C. Only the spelling of the model's name:** The actual blocker is the unsupported review process, not a label.
- **D. A guarantee that replacing reviewers with a prompt is lawful:** A prompt does not provide real oversight or establish legal permission.

#### Check 3: A pilot is meant to decide whether reviewed drafts save staff time. Which design is most useful?

**Correct answer: D.**

- **A. Show only three easy drafts and measure applause:** Selected demonstrations and audience enthusiasm do not measure realistic net time.
- **B. Count generated words without tracking review or rework:** Output volume omits the workload that could erase the benefit.
- **C. Allow every draft to reach customers immediately:** Unbounded live effects are unnecessary and bypass the proposed oversight.
- **D. Compare representative cases with the current process, including review/rework and predefined stop rules — correct:** This tests the decision-changing assumption under bounded realistic conditions.

### Define success, total cost & business value

#### Check 1: A team says an assistant released 80 staff-hours last month. Which claim follows without additional financial evidence?

**Correct answer: B.**

- **A. Payroll definitely fell by the value of 80 hours:** Time released does not show an actual payroll or cash change.
- **B. The team may have more useful capacity, but cash savings are not yet established — correct:** Released time can improve throughput or quality while payroll remains unchanged.
- **C. The project must have a positive lifetime ROI:** ROI needs full costs, benefits, and a defined horizon, not one time figure.
- **D. Every reviewer should immediately be removed:** The time estimate does not justify removing required oversight or staff.

#### Check 2: Using this kit's simple first-year ROI convention, benefits are SAR 90,000, setup is SAR 10,000, and operation is SAR 40,000. What is ROI?

**Correct answer: C.**

- **A. 180%:** 90,000/50,000 is the benefit-to-cost percentage, not net benefit divided by cost.
- **B. 125%:** This uses only operating cost and omits the stated setup cost.
- **C. 80% — correct:** Costs are 50,000 and net benefit is 40,000, so 40,000/50,000 × 100 = 80%.
- **D. 40%:** Net benefit must be divided by the stated costs, not an invented 100,000 denominator.

#### Check 3: A candidate has positive estimated ROI at high adoption but negative ROI at low adoption. What should the business case do?

**Correct answer: A.**

- **A. Show both scenarios, the assumptions, and a plan to measure adoption and realized benefit — correct:** Sensitivity reveals whether an uncertain input can reverse the decision and directs evidence gathering.
- **B. Publish only the positive scenario as a guarantee:** Hiding plausible unfavorable assumptions misrepresents uncertainty.
- **C. Treat token price as the entire cost:** Review, integration, support, and other lifecycle costs can remain substantial.
- **D. Ignore applicable privacy rules because the central estimate is profitable:** Financial forecasts cannot waive legal or safety gates.

### Communicate evidence, uncertainty & tradeoffs

#### Check 1: A service completion rate rises from 50% to 60%. How should the change be described?

**Correct answer: D.**

- **A. A 10% relative increase and 20 percentage points:** This reverses the units: the absolute rate gap is 10 points.
- **B. A guaranteed causal effect of AI:** The rate change alone does not exclude staffing, seasonality, or case-mix changes.
- **C. A 60-percentage-point increase:** 60% is the final level, not the difference from the baseline.
- **D. 10 percentage points; a 20% relative increase — correct:** The gap is 60 − 50 = 10 points, and 10/50 × 100 = 20%.

#### Check 2: Of 100 eligible requests, an assistant answers 40 and 30 of those answers pass review. Which report uses honest denominators?

**Correct answer: B.**

- **A. 75% of all eligible requests succeeded:** 75% describes passing among the 40 answers, not among all 100 eligible requests.
- **B. 40% answer coverage; 75% of answers pass; 30% of eligible requests receive a passing answer — correct:** The three rates use 40/100, 30/40, and 30/100 respectively and keep their scopes clear.
- **C. 30% coverage and 40% answer correctness:** This swaps counts and denominators rather than measuring the stated outcomes.
- **D. 100% coverage because unanswered cases are ignored:** Removing eligible unanswered cases hides the actual coverage gap.

#### Check 3: A sponsor needs a launch recommendation from a small pilot. Which brief is most responsible?

**Correct answer: C.**

- **A. Only the highest accuracy number with no case counts:** An isolated maximum hides scope, uncertainty, and failures needed for a decision.
- **B. Every private transcript copied into the presentation:** Sponsors can often use aggregate evidence and restricted sanitized links without unnecessary disclosure.
- **C. Evidence with counts and limits, alternatives, a bounded recommendation, owner, and next decision date — correct:** This connects useful evidence to an action without pretending narrow results guarantee broad success.
- **D. A vendor benchmark described as our measured production result:** External evidence from a different setting must not be misrepresented as local measurement.

### Collaborate through ownership, review & handoffs

#### Check 1: In a simple RACI matrix, what does Informed normally mean?

**Correct answer: A.**

- **A. Receives relevant updates; not automatically the approving authority — correct:** Receiving information is distinct from owning a decision or approving it.
- **B. Must approve every release by law:** RACI is a collaboration convention, not a universal legal approval chart.
- **C. Does all implementation work:** Doing the work is the Responsible function in this convention.
- **D. May waive privacy obligations:** No collaboration label grants authority to waive applicable law.

#### Check 2: Operations receives a model file but cannot access quality alerts or disable an unsafe tool. What is the handoff status?

**Correct answer: D.**

- **A. Complete because a file was sent:** Delivery of an artifact does not establish usable operational ownership.
- **B. Complete if the model has many parameters:** Model size does not provide alert access or intervention authority.
- **C. Complete if nobody replies within one hour:** Silence is not explicit acceptance of unsupported responsibilities.
- **D. Incomplete until owners verify access, intervention, runbooks, and accepted responsibilities — correct:** The receiving team must be able to detect and manage failures, not just possess weights.

#### Check 3: A reviewer discovers missing rural cases in an evaluation. Which response best supports collaboration?

**Correct answer: B.**

- **A. Dismiss the finding because the reviewer is junior:** Seniority does not determine whether an evidence gap is real.
- **B. Record the coverage gap, discuss its decision impact, and assign appropriate evidence work — correct:** Constructive review focuses on the claim and an owned action rather than blame.
- **C. Take a vote on whether rural cases exist:** Evidence about population coverage is not established by majority preference.
- **D. Remove the finding from the handoff to reduce disagreement:** Concealing a material gap undermines safe decisions and operational understanding.

### Prioritize work & manage adoption and change

#### Check 1: A pilot has a limited useful scope. Which safeguard may be omitted solely because it is called a minimum viable product?

**Correct answer: C.**

- **A. Required authorization checks:** A small scope does not remove required access boundaries.
- **B. Necessary oversight for its consequential actions:** Oversight requirements depend on risks and rules, not a product-stage label.
- **C. None of the safeguards required for that scope — correct:** Limiting functionality is compatible with retaining the safeguards needed for permitted use.
- **D. A tested safe fallback needed by its workflow:** Necessary failure handling cannot be dropped merely to preserve the MVP label.

#### Check 2: All 120 eligible staff attend training; 36 use the service regularly. With regular use as the adoption definition, what is adoption?

**Correct answer: A.**

- **A. 30% — correct:** Regular-use adoption is 36/120 × 100 = 30%, not the training attendance rate.
- **B. 100%:** Attendance establishes exposure to training, not regular use.
- **C. 36%:** 36 is the user count; the eligible denominator is 120 rather than 100.
- **D. Guaranteed positive ROI:** Use alone does not establish benefits after costs or the quality of outcomes.

#### Check 3: A sponsor adds automatic refunds to a read-only policy assistant. What is the best next step?

**Correct answer: D.**

- **A. Enable refunds because the interface looks the same:** Financial authority and side effects change even if the screen barely changes.
- **B. Keep the original approval and add a longer prompt:** Old read-only evidence and model instructions do not approve new transactional permissions.
- **C. Ignore capacity, duplicate actions, and error costs:** These dependencies and consequences are central to safe action capability.
- **D. Review changed authority, risks, contracts, evidence, costs, and owners before enabling it — correct:** Material scope changes require appropriate reassessment and approval rather than silent expansion.

### Practice integrity, escalation & continuous learning

#### Check 1: An engineer receives a supplier incentive linked to recommending that supplier. What is the responsible response?

**Correct answer: B.**

- **A. Hide it if the supplier is popular:** Popularity does not remove a real or perceived conflict of interest.
- **B. Disclose the conflict and arrange appropriate independent review or recusal — correct:** Disclosure makes the issue visible; managing it protects independent judgment.
- **C. Assume disclosure automatically resolves every conflict:** The decision process may still need review or removal from the conflicted role.
- **D. Delete competing evaluations:** Removing evidence to favor the supplier compounds the integrity problem.

#### Check 2: A draft unexpectedly includes another department's private information. How should an engineer escalate?

**Correct answer: C.**

- **A. Publish the raw conversation on a public forum:** Unnecessary public disclosure can spread the very harm being reported.
- **B. Wait until every recipient and cause is known:** Material suspected harm requires prompt escalation, with uncertainty stated rather than hidden.
- **C. Use approved containment and restricted minimum evidence to alert security/privacy owners promptly — correct:** This enables an authorized response while limiting further disclosure and preserving useful facts.
- **D. Treat a generic model apology as complete recovery:** An apology neither contains the access failure nor verifies its correction.

#### Check 3: A practitioner passes a familiar quiz but lacks expertise for a project-specific legal assurance. What should they do?

**Correct answer: A.**

- **A. State the competence limit and seek qualified review before making the assurance — correct:** Practice scores do not certify legal competence or validate a specific project's compliance.
- **B. Sign the assurance because retake scores are high:** Question familiarity is not the missing project expertise or authoritative evidence.
- **C. Ask a language model to declare compliance and use that as approval:** Generated certainty cannot replace qualified interpretation and project evidence.
- **D. Hide the gap to avoid delaying the deadline:** Concealing competence limits undermines informed decisions and professional integrity.

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
