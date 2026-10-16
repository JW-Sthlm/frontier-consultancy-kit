# 07. Decide legacy-handoff operating features and data with HVE

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Operations needs a dependable UI-only handoff. Use HVE to decide which queue, reconciliation and history features make it safe to operate, and what data those features need.**

The technologies are Power Automate cloud/desktop automation and an operational data store. The goal is not recording selectors, debugging actions or tuning retry settings.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-07 interview](client/hve-development/07-legacy.md), [RULE-07](client/offerings/README.md), [job examples](client/offerings/bridge-jobs.csv) and this guide.

A caller may lose the response after a target save. Operators need intended values, observed values, earlier attempts and accountable resolution. The first pilot is one worker/target.

## Feature and schema decision workflow

| Step | Legacy-service decision | HVE output | Used before |
|---|---|---|---|
| DS07-1 | What must operators know/do during uncertain completion? | Needs and feature questions | Selecting automation-only versus managed service |
| DS07-2 | Which queue/reconciliation/history features are essential? | Prioritized operating capability choices | Designing desktop/cloud actions |
| DS07-3 | What job, attempt, observation and resolution data is needed? | Schema alternatives and lifecycle meanings | Building the queue/review experience |
| DS07-4 | How do more reviewers/targets change the model? | Scope/association/history impact | Expanding beyond one worker/target |
| DS07-5 | Can the data support a safe operating decision? | Feature/schema decision pack | Prototype/build and service ownership |

## HVE learning objectives

- Derive operating features from failure risks and operator jobs.
- Distinguish job intent, attempt result and target observation.
- Choose history/state/ownership data needed for reconciliation.
- Challenge excessive first-release generalization.
- Produce a decision pack that explains safe human resolution.

**Attempt first:** why is Done/Not done insufficient when a response is lost after Save? What information would the operator need?

## Expected result

A justified feature set and logical operating model, not an automation repair. Live HVE requires actual Cowork artifacts; a desk walkthrough is separate. No executed desktop run or target reconciliation is claimed.

## Phase 1. Discover the operator's decision needs

### Prompt 1: identify what reliable operation requires

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 07 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 07: Power Automate desktop flow, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Legacy-service decision | HVE output | Used before |
|---|---|---|---|
| DS07-1 | What must operators know/do during uncertain completion? | Needs and feature questions | Selecting automation-only versus managed service |
| DS07-2 | Which queue/reconciliation/history features are essential? | Prioritized operating capability choices | Designing desktop/cloud actions |
| DS07-3 | What job, attempt, observation and resolution data is needed? | Schema alternatives and lifecycle meanings | Building the queue/review experience |
| DS07-4 | How do more reviewers/targets change the model? | Scope/association/history impact | Expanding beyond one worker/target |
| DS07-5 | Can the data support a safe operating decision? | Feature/schema decision pack | Prototype/build and service ownership |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-07 / Legacy:** Preserve job ID as the ledger's unique reference. Search before create; after uncertain completion, reconcile before retry. One learner/worker uses a ledger instance at a time. No financial posting.

SOURCE: client/hve-development/07-legacy.md
# Case 07: what makes a legacy handoff safe to operate?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-07 and bridge-jobs.csv define the first pilot.**

## Client interview evidence

- **C07-F1 / Operations:** "The target has only a UI in this pilot. We need a reliable handoff, not a production integration claim."
- **C07-F2 / Operator:** "Sometimes the caller loses the response after Save. We need to distinguish unknown completion from definitely not saved."
- **C07-F3 / Operator:** "Before retrying, I need the source reference, intended values and what we observed in the target."
- **C07-F4 / Service owner:** "One job can have several attempts. I need to explain what happened, not just overwrite the last error."
- **C07-F5 / Reviewer:** "If the target contains the same reference with different values, someone must decide what is correct."
- **C07-F6:** One worker and one training target apply initially. Stable Job ID is available; no financial posting is authorized.

## Technology-specific decision context

Power Automate cloud/desktop capabilities can bridge a UI-only process. Decide which supporting features are required: durable work queue, duplicate recognition, operator reconciliation, attempt history, exception review and recovery ownership.

Choose the data needed to support those decisions. Do not begin by recording UI actions or configuring retries.

## Proposal to inspect

- **C07-P1:** Keep only Job ID and a Done flag.
- **C07-P2:** Overwrite the intended payload and all earlier attempts whenever a retry starts.
- **C07-P3:** A caller failure always means the target has no record.

## Change for discussion

- **C07-C1:** More than one operator may review held jobs. Decide assignment/accountability and any claim/history data needed.
- **C07-C2:** Another target may eventually use a different reference format. Identify what belongs to the reusable job model versus target-specific mapping.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C07-T1 | JOB-02 can be marked only Done or Not done, although target completion is uncertain. |
| C07-T2 | A second attempt removes evidence of the first payload/result. |
| C07-T3 | A reviewer cannot compare intended quantity 2 with a different observed target value. |
| C07-T4 | Two people can make different resolution decisions with no accountable owner/history. |

These are feature/schema review findings, not a desktop trace to debug.


SOURCE: client/offerings/bridge-jobs.csv
job_id,customer_ref,quantity
JOB-01,C-100,3
JOB-02,C-100,2
JOB-03,C-100,1
[END STANDALONE CONTEXT]

Decision step DS07-1: read the interview, RULE-07 and job examples.
Identify operator/reviewer/service-owner jobs and uncertain states.
Propose feature hypotheses with source IDs and open questions.
Separate intended business work, an attempt and an observed target
result. Do not jump to retry settings or a predetermined queue schema.
Output label: EX07-P1: Legacy-service needs and feature questions.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX07-P1: Legacy-service needs and feature questions` using [output navigation](OUTPUTS.md).

**Decision step:** DS07-1, operating-needs discovery.

**Do with it:** explain one decision an operator cannot make from a Done flag. Identify the actual information gap and who resolves it; do not treat caller failure as a business fact about the target.

**Next:** carry reviewed needs into feature selection.

**Gateway 1:** automation completion and business completion are distinct concepts.

## Phase 2. Choose queue and reconciliation features

### Prompt 2: prioritize the minimum managed handoff

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 07 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 07: Power Automate desktop flow, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Legacy-service decision | HVE output | Used before |
|---|---|---|---|
| DS07-1 | What must operators know/do during uncertain completion? | Needs and feature questions | Selecting automation-only versus managed service |
| DS07-2 | Which queue/reconciliation/history features are essential? | Prioritized operating capability choices | Designing desktop/cloud actions |
| DS07-3 | What job, attempt, observation and resolution data is needed? | Schema alternatives and lifecycle meanings | Building the queue/review experience |
| DS07-4 | How do more reviewers/targets change the model? | Scope/association/history impact | Expanding beyond one worker/target |
| DS07-5 | Can the data support a safe operating decision? | Feature/schema decision pack | Prototype/build and service ownership |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-07 / Legacy:** Preserve job ID as the ledger's unique reference. Search before create; after uncertain completion, reconcile before retry. One learner/worker uses a ledger instance at a time. No financial posting.

SOURCE: client/hve-development/07-legacy.md
# Case 07: what makes a legacy handoff safe to operate?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-07 and bridge-jobs.csv define the first pilot.**

## Client interview evidence

- **C07-F1 / Operations:** "The target has only a UI in this pilot. We need a reliable handoff, not a production integration claim."
- **C07-F2 / Operator:** "Sometimes the caller loses the response after Save. We need to distinguish unknown completion from definitely not saved."
- **C07-F3 / Operator:** "Before retrying, I need the source reference, intended values and what we observed in the target."
- **C07-F4 / Service owner:** "One job can have several attempts. I need to explain what happened, not just overwrite the last error."
- **C07-F5 / Reviewer:** "If the target contains the same reference with different values, someone must decide what is correct."
- **C07-F6:** One worker and one training target apply initially. Stable Job ID is available; no financial posting is authorized.

## Technology-specific decision context

Power Automate cloud/desktop capabilities can bridge a UI-only process. Decide which supporting features are required: durable work queue, duplicate recognition, operator reconciliation, attempt history, exception review and recovery ownership.

Choose the data needed to support those decisions. Do not begin by recording UI actions or configuring retries.

## Proposal to inspect

- **C07-P1:** Keep only Job ID and a Done flag.
- **C07-P2:** Overwrite the intended payload and all earlier attempts whenever a retry starts.
- **C07-P3:** A caller failure always means the target has no record.

## Change for discussion

- **C07-C1:** More than one operator may review held jobs. Decide assignment/accountability and any claim/history data needed.
- **C07-C2:** Another target may eventually use a different reference format. Identify what belongs to the reusable job model versus target-specific mapping.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C07-T1 | JOB-02 can be marked only Done or Not done, although target completion is uncertain. |
| C07-T2 | A second attempt removes evidence of the first payload/result. |
| C07-T3 | A reviewer cannot compare intended quantity 2 with a different observed target value. |
| C07-T4 | Two people can make different resolution decisions with no accountable owner/history. |

These are feature/schema review findings, not a desktop trace to debug.


SOURCE: client/offerings/bridge-jobs.csv
job_id,customer_ref,quantity
JOB-01,C-100,3
JOB-02,C-100,2
JOB-03,C-100,1
[END STANDALONE CONTEXT]

Decision step DS07-2: compare durable queue, duplicate recognition,
held-job visibility, target-value comparison, attempt history,
operator assignment and resolution evidence.
Give IDs, value/source/dependencies and first/later/not-needed status.
Explain which cloud/desktop capabilities support the process and
where manual operation may suffice. Keep single-worker scope explicit.
Output label: EX07-P2: Legacy operating-feature choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX07-P2: Legacy operating-feature choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS07-2, service capability scope.

**Do with it:** select the minimum features needed to handle uncertainty without losing work or overwriting disagreement. Do not commission a multi-target orchestration product because it is technically possible.

**Next:** give selected features and retention/ownership questions to modelling.

## Phase 3. Derive job and history data

### Prompt 3: compare a status row with a traceable model

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 07 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 07: Power Automate desktop flow, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Legacy-service decision | HVE output | Used before |
|---|---|---|---|
| DS07-1 | What must operators know/do during uncertain completion? | Needs and feature questions | Selecting automation-only versus managed service |
| DS07-2 | Which queue/reconciliation/history features are essential? | Prioritized operating capability choices | Designing desktop/cloud actions |
| DS07-3 | What job, attempt, observation and resolution data is needed? | Schema alternatives and lifecycle meanings | Building the queue/review experience |
| DS07-4 | How do more reviewers/targets change the model? | Scope/association/history impact | Expanding beyond one worker/target |
| DS07-5 | Can the data support a safe operating decision? | Feature/schema decision pack | Prototype/build and service ownership |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-07 / Legacy:** Preserve job ID as the ledger's unique reference. Search before create; after uncertain completion, reconcile before retry. One learner/worker uses a ledger instance at a time. No financial posting.

SOURCE: client/hve-development/07-legacy.md
# Case 07: what makes a legacy handoff safe to operate?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-07 and bridge-jobs.csv define the first pilot.**

## Client interview evidence

- **C07-F1 / Operations:** "The target has only a UI in this pilot. We need a reliable handoff, not a production integration claim."
- **C07-F2 / Operator:** "Sometimes the caller loses the response after Save. We need to distinguish unknown completion from definitely not saved."
- **C07-F3 / Operator:** "Before retrying, I need the source reference, intended values and what we observed in the target."
- **C07-F4 / Service owner:** "One job can have several attempts. I need to explain what happened, not just overwrite the last error."
- **C07-F5 / Reviewer:** "If the target contains the same reference with different values, someone must decide what is correct."
- **C07-F6:** One worker and one training target apply initially. Stable Job ID is available; no financial posting is authorized.

## Technology-specific decision context

Power Automate cloud/desktop capabilities can bridge a UI-only process. Decide which supporting features are required: durable work queue, duplicate recognition, operator reconciliation, attempt history, exception review and recovery ownership.

Choose the data needed to support those decisions. Do not begin by recording UI actions or configuring retries.

## Proposal to inspect

- **C07-P1:** Keep only Job ID and a Done flag.
- **C07-P2:** Overwrite the intended payload and all earlier attempts whenever a retry starts.
- **C07-P3:** A caller failure always means the target has no record.

## Change for discussion

- **C07-C1:** More than one operator may review held jobs. Decide assignment/accountability and any claim/history data needed.
- **C07-C2:** Another target may eventually use a different reference format. Identify what belongs to the reusable job model versus target-specific mapping.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C07-T1 | JOB-02 can be marked only Done or Not done, although target completion is uncertain. |
| C07-T2 | A second attempt removes evidence of the first payload/result. |
| C07-T3 | A reviewer cannot compare intended quantity 2 with a different observed target value. |
| C07-T4 | Two people can make different resolution decisions with no accountable owner/history. |

These are feature/schema review findings, not a desktop trace to debug.


SOURCE: client/offerings/bridge-jobs.csv
job_id,customer_ref,quantity
JOB-01,C-100,3
JOB-02,C-100,2
JOB-03,C-100,1
[END STANDALONE CONTEXT]

Decision step DS07-3: compare a single job/status model with related
attempt, target-observation and resolution concepts as selected
features justify. Specify fields/types/requiredness, stable business
identity, cardinalities, ownership and lifecycle meanings.
Explain original intent, changed payload and uncertainty without
overwriting prior evidence. Do not add logs merely for volume.
Output label: EX07-P3: Legacy job and history schema options.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX07-P3: Legacy job and history schema options` using [output navigation](OUTPUTS.md).

**Decision step:** DS07-3, intent/attempt/evidence modelling.

**Do with it:** walk JOB-02 with two attempts and a target quantity disagreement. Identify what each record represents, how they relate and which fields let an operator decide. Challenge both missing history and unexplained duplicate data.

**Next:** record a preferred model and limits for expansion review.

## Phase 4. Evaluate reviewer and target variation

### Prompt 4: decide whether the extra associations are needed now

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 07 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 07: Power Automate desktop flow, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Legacy-service decision | HVE output | Used before |
|---|---|---|---|
| DS07-1 | What must operators know/do during uncertain completion? | Needs and feature questions | Selecting automation-only versus managed service |
| DS07-2 | Which queue/reconciliation/history features are essential? | Prioritized operating capability choices | Designing desktop/cloud actions |
| DS07-3 | What job, attempt, observation and resolution data is needed? | Schema alternatives and lifecycle meanings | Building the queue/review experience |
| DS07-4 | How do more reviewers/targets change the model? | Scope/association/history impact | Expanding beyond one worker/target |
| DS07-5 | Can the data support a safe operating decision? | Feature/schema decision pack | Prototype/build and service ownership |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-07 / Legacy:** Preserve job ID as the ledger's unique reference. Search before create; after uncertain completion, reconcile before retry. One learner/worker uses a ledger instance at a time. No financial posting.

SOURCE: client/hve-development/07-legacy.md
# Case 07: what makes a legacy handoff safe to operate?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-07 and bridge-jobs.csv define the first pilot.**

## Client interview evidence

- **C07-F1 / Operations:** "The target has only a UI in this pilot. We need a reliable handoff, not a production integration claim."
- **C07-F2 / Operator:** "Sometimes the caller loses the response after Save. We need to distinguish unknown completion from definitely not saved."
- **C07-F3 / Operator:** "Before retrying, I need the source reference, intended values and what we observed in the target."
- **C07-F4 / Service owner:** "One job can have several attempts. I need to explain what happened, not just overwrite the last error."
- **C07-F5 / Reviewer:** "If the target contains the same reference with different values, someone must decide what is correct."
- **C07-F6:** One worker and one training target apply initially. Stable Job ID is available; no financial posting is authorized.

## Technology-specific decision context

Power Automate cloud/desktop capabilities can bridge a UI-only process. Decide which supporting features are required: durable work queue, duplicate recognition, operator reconciliation, attempt history, exception review and recovery ownership.

Choose the data needed to support those decisions. Do not begin by recording UI actions or configuring retries.

## Proposal to inspect

- **C07-P1:** Keep only Job ID and a Done flag.
- **C07-P2:** Overwrite the intended payload and all earlier attempts whenever a retry starts.
- **C07-P3:** A caller failure always means the target has no record.

## Change for discussion

- **C07-C1:** More than one operator may review held jobs. Decide assignment/accountability and any claim/history data needed.
- **C07-C2:** Another target may eventually use a different reference format. Identify what belongs to the reusable job model versus target-specific mapping.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C07-T1 | JOB-02 can be marked only Done or Not done, although target completion is uncertain. |
| C07-T2 | A second attempt removes evidence of the first payload/result. |
| C07-T3 | A reviewer cannot compare intended quantity 2 with a different observed target value. |
| C07-T4 | Two people can make different resolution decisions with no accountable owner/history. |

These are feature/schema review findings, not a desktop trace to debug.


SOURCE: client/offerings/bridge-jobs.csv
job_id,customer_ref,quantity
JOB-01,C-100,3
JOB-02,C-100,2
JOB-03,C-100,1
[END STANDALONE CONTEXT]

Decision step DS07-4: apply C07-C1's multiple reviewers and C07-C2's
future target reference format. Show feature/schema/ownership/history
impact. Compare one accountable reviewer with collaboration/history,
and a target-specific pilot with reusable mapping concepts.
Decide what is needed now versus later; do not prescribe implementation.
Output label: EX07-P4: Legacy scope and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX07-P4: Legacy scope and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS07-4, operating-model variation.

**Do with it:** explain how a resolution stays attributable and whether target-specific mapping deserves separate data in this release. Record who accepts a mismatched target result rather than silently treating it as correct.

**Next:** pass selected boundaries and model to the final pack.

## Phase 5. Validate safe decision-making with the model

### Prompt 5: produce the operating feature/schema pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 07 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 07: Power Automate desktop flow, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Legacy-service decision | HVE output | Used before |
|---|---|---|---|
| DS07-1 | What must operators know/do during uncertain completion? | Needs and feature questions | Selecting automation-only versus managed service |
| DS07-2 | Which queue/reconciliation/history features are essential? | Prioritized operating capability choices | Designing desktop/cloud actions |
| DS07-3 | What job, attempt, observation and resolution data is needed? | Schema alternatives and lifecycle meanings | Building the queue/review experience |
| DS07-4 | How do more reviewers/targets change the model? | Scope/association/history impact | Expanding beyond one worker/target |
| DS07-5 | Can the data support a safe operating decision? | Feature/schema decision pack | Prototype/build and service ownership |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-07 / Legacy:** Preserve job ID as the ledger's unique reference. Search before create; after uncertain completion, reconcile before retry. One learner/worker uses a ledger instance at a time. No financial posting.

SOURCE: client/hve-development/07-legacy.md
# Case 07: what makes a legacy handoff safe to operate?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-07 and bridge-jobs.csv define the first pilot.**

## Client interview evidence

- **C07-F1 / Operations:** "The target has only a UI in this pilot. We need a reliable handoff, not a production integration claim."
- **C07-F2 / Operator:** "Sometimes the caller loses the response after Save. We need to distinguish unknown completion from definitely not saved."
- **C07-F3 / Operator:** "Before retrying, I need the source reference, intended values and what we observed in the target."
- **C07-F4 / Service owner:** "One job can have several attempts. I need to explain what happened, not just overwrite the last error."
- **C07-F5 / Reviewer:** "If the target contains the same reference with different values, someone must decide what is correct."
- **C07-F6:** One worker and one training target apply initially. Stable Job ID is available; no financial posting is authorized.

## Technology-specific decision context

Power Automate cloud/desktop capabilities can bridge a UI-only process. Decide which supporting features are required: durable work queue, duplicate recognition, operator reconciliation, attempt history, exception review and recovery ownership.

Choose the data needed to support those decisions. Do not begin by recording UI actions or configuring retries.

## Proposal to inspect

- **C07-P1:** Keep only Job ID and a Done flag.
- **C07-P2:** Overwrite the intended payload and all earlier attempts whenever a retry starts.
- **C07-P3:** A caller failure always means the target has no record.

## Change for discussion

- **C07-C1:** More than one operator may review held jobs. Decide assignment/accountability and any claim/history data needed.
- **C07-C2:** Another target may eventually use a different reference format. Identify what belongs to the reusable job model versus target-specific mapping.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C07-T1 | JOB-02 can be marked only Done or Not done, although target completion is uncertain. |
| C07-T2 | A second attempt removes evidence of the first payload/result. |
| C07-T3 | A reviewer cannot compare intended quantity 2 with a different observed target value. |
| C07-T4 | Two people can make different resolution decisions with no accountable owner/history. |

These are feature/schema review findings, not a desktop trace to debug.


SOURCE: client/offerings/bridge-jobs.csv
job_id,customer_ref,quantity
JOB-01,C-100,3
JOB-02,C-100,2
JOB-03,C-100,1
[END STANDALONE CONTEXT]

Decision step DS07-5: review fictional design feedback C07-T1..T4.
Consolidate prioritized features, preferred model, field/relationship
rationale, business state/ownership rules, rejected alternatives,
job/attempt/resolution walkthroughs and open client decisions.
Explain what information supports a safe retry/hold/resolution decision.
Package Legacy Workflow Bridge scope without claiming an implemented
queue or a reconciled target.
Output label: EX07-P5: Legacy feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX07-P5: Legacy feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS07-5, design acceptance.

**Do with it:** have a partner explain uncertain completion and a mismatched target using only the model and rules. If the required observation/owner is missing, revise the design rather than inventing an outcome.

**Next:** use the reviewed pack for prototype/build planning and the offering canvas, not as a desktop test result.

**Gateway 2:** the data supports the selected operating features and accountable resolution without unnecessary platform machinery.

## What good looks like

HVE helps decide what must be remembered and which features people need to operate safely. The output is not merely a retry recipe or a generic support checklist.

## Recovery and takeaways

If HVE starts debugging actions, ask what user decision the proposed data must support. If it adds exhaustive logs, request feature/retention justification. With no live HVE, record a desk walkthrough.

Take home the uncertainty-to-feature-to-data approach as **Legacy Workflow Bridge** IP. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: how do a job and an attempt differ? Which information makes resolution accountable? What can remain target-specific in the pilot?

**Optional implementation reference:** [earlier maker material](guided-builds/07-legacy-bridge.md) follows the decisions and is not a mandatory operating schema.
