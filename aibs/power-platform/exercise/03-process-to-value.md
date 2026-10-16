# 03. Decide process-insight and intervention features with HVE

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Omar suspects order-entry delay. Use HVE to decide which insight and intervention features are warranted, and what historical/current data is needed to support them.**

The technology context is Process Mining and Power Automate. The exercise does not configure a mining process or debug reminder expressions.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-03 interview](client/hve-development/03-process.md), [RULE-03](client/offerings/README.md), [events](client/offerings/process-events.csv) and this guide.

The source has four cases and 14 events, one case incomplete. Finance retains credit approval. A rota or further observation may be a better first intervention than automation.

## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

## HVE learning objectives

- Challenge a solution request before choosing features.
- Distinguish historical process evidence from current actionable work.
- Decide whether follow-up history and experiment records are needed.
- Derive case/event/state relationships from the selected service.
- Keep observed baseline and unmeasured improvement separate.

**Attempt first:** can a current-status row explain how long CASE-02 waited last week? What information would be missing?

## Expected result

A defensible first intervention and its feature/data requirements, not a built flow. Live HVE needs actual Cowork artifacts; a desk walkthrough is labeled separately. No actual process improvement is supplied.

## Phase 1. Identify questions the data can and cannot answer

### Prompt 1: connect process needs to evidence

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance
[END STANDALONE CONTEXT]

Decision step DS03-1: read the interview, RULE-03 and event log.
Identify owner/reviewer questions and intended outcomes. Calculate
only the baseline needed to test the diagnosis, with population/units.
Separate historical events, current pending work and hands-on effort.
Propose feature hypotheses and missing-data questions, not a bot plan.
Output label: EX03-P1: Process needs and evidence limits.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX03-P1: Process needs and evidence limits` using [output navigation](OUTPUTS.md).

**Decision step:** DS03-1, evidence and needs.

**Do with it:** verify CASE-01's 28 elapsed hours and the complete-case denominator. Record what waiting can show and what still needs observation. Do not accept 14 events as 14 cases or an incomplete case as zero.

**Next:** carry the actual limits and user questions into capability selection.

**Gateway 1:** the evidence supports a question, not a guaranteed cause or saving.

## Phase 2. Choose insight and intervention features

### Prompt 2: compare a rota, reminder and deeper analysis

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance
[END STANDALONE CONTEXT]

Decision step DS03-2: compare process visibility, incomplete-case
tracking, pending queue visibility, reviewer rota, reminder/follow-up
and trial comparison features. Give IDs, evidence/value/dependencies
and first/later/not-needed status. Explain where Process Mining and
Power Automate help and where a no-build option may be enough.
Keep credit decisions human-owned and benefits unproven.
Output label: EX03-P2: Process feature and intervention choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX03-P2: Process feature and intervention choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS03-2, justified capability scope.

**Do with it:** select or hold one intervention with the workshop owner. State what it is intended to change and the observation that could reverse the choice. Do not require automation simply to use the product.

**Next:** give selected features, not every future metric, to data modelling.

## Phase 3. Decide the historical and operational model

### Prompt 3: compare events, state and follow-up records

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance
[END STANDALONE CONTEXT]

Decision step DS03-3: derive schema options for selected features.
Compare current-status-only data with case/event history and, if
needed, pending work and follow-up/attempt information.
Give entities/fields/types, keys/cardinality, ownership, state meaning
and feature rationale. Explain incomplete cases, successful versus
failed follow-up and the source of current pending work.
Do not prescribe a queue or experiment table without a chosen need.
Output label: EX03-P3: Process and follow-up schema options.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX03-P3: Process and follow-up schema options` using [output navigation](OUTPUTS.md).

**Decision step:** DS03-3, time/state data modelling.

**Do with it:** reconstruct CASE-02's waiting and CASE-04's incomplete state. Walk one pending item with two follow-ups, one failed. Ask which data distinguishes event history from current status and whether the first-release needs the full history model.

**Next:** record the preferred model and assumptions for the trial changes.

## Phase 4. Assess experiment and failure-state needs

### Prompt 4: decide what a useful pilot must remember

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance
[END STANDALONE CONTEXT]

Decision step DS03-4: apply the rota-versus-reminder trial and failed
notification changes. Identify feature and schema consequences:
comparison population/time, intervention exposure, outcomes and
attempt/success information as justified. Define who owns those facts.
Compare minimal pilot records with a recurring managed-service model.
State what can wait and what evidence is required before a benefit claim.
Output label: EX03-P4: Process trial and schema impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX03-P4: Process trial and schema impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS03-4, measurement/history tradeoffs.

**Do with it:** check that a failed notification cannot mean successfully reminded, and that later outcomes can be compared on the same basis. Record which fields/relationships are essential for the chosen trial, not for an imagined enterprise analytics platform.

**Next:** carry the selected experiment and model to the final review.

## Phase 5. Validate feature, data and value assumptions

### Prompt 5: produce the process-service decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance
[END STANDALONE CONTEXT]

Decision step DS03-5: review fictional design feedback C03-T1..T4.
Consolidate feature priorities, intervention choice, preferred schema,
field/relationship rationale, business rules, rejected options and
open data/owner decisions. Include source-case and trial-record
walkthroughs plus outcome definitions. Package the Process-to-Value
Sprint boundaries without inventing a successful flow or improvement.
Output label: EX03-P5: Process feature schema and measurement pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX03-P5: Process feature schema and measurement pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS03-5, design/measurement acceptance.

**Do with it:** have a partner explain the selected feature, the data needed for it and what would disprove the benefit. Revisit the schema if it hides incomplete cases or cannot distinguish follow-up outcomes.

**Next:** brief a process trial/prototype from the decisions and transfer the justified scope to the offering canvas.

**Gateway 2:** the pack supports an informed intervention decision; a modelled future result is not an achieved improvement.

## What good looks like

HVE helps choose useful process capabilities and proportionate event/state/measurement data. A simpler first trial is acceptable if it answers the client's question better.

## Recovery and takeaways

If HVE jumps to flow settings, ask what selected feature requires them and return to the data requirement. If it forecasts savings, request missing evidence. With no live HVE, record a desk walkthrough.

Take home the diagnosis-to-feature-to-data approach as **Process-to-Value Sprint** IP. Use the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: what can an event log answer that current status cannot? What does the chosen trial need to remember? What data did you deliberately defer?

**Optional implementation reference:** [earlier maker material](guided-builds/03-process-to-value.md) is used after, not instead of, these decisions.
