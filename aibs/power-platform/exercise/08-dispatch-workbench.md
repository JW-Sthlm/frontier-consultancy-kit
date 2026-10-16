# 08. Decide dispatcher workbench features and schema with HVE

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Noah needs better dispatch decisions. Use HVE to choose the workbench features, assess whether a custom code app is justified and derive the data model that supports assignment and accountability.**

The exercise does not write components, implement an API or debug concurrency code. The business requirements still include skill, availability and conflict prevention.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-08 interview](client/hve-development/08-dispatch.md), [RULE-08](client/offerings/README.md), [jobs](client/offerings/dispatch-jobs.csv), [technicians](client/offerings/technicians.csv) and this guide.

Dispatchers compare jobs and capacity, need explanations of unsuitability and work concurrently. Current scope is unassigned fixed-interval jobs with one skill each. Reassignment, optimization and certifications need new decisions.

**Technology context:** a code app supports a code-owned custom experience; canvas/model-driven apps may be simpler. Side-by-side capacity, filtering, explainable availability and keyboard interaction are features to justify, not a reason to code everything.

## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

## HVE learning objectives

- Decide which interaction features justify custom development.
- Derive availability/explanation requirements from dispatcher jobs.
- Compare simple skill/assignment fields with related reference/history concepts.
- Treat future capability requests as scope decisions.
- Validate the logical model with job/technician examples.

**Attempt first:** is a technician name enough to explain suitability, availability and who assigned the job?

## Expected result

A justified first-release feature set, app-choice rationale and logical schema. Live HVE artifacts are distinct from a desk walkthrough. No working scheduler, typed component or race test is claimed.

## Phase 1. Understand the dispatch decisions

### Prompt 1: identify the required user capabilities

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
# Case 08: what must a dispatcher workbench support?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-08 and job/technician fixtures remain authoritative.**

## Client interview evidence

- **C08-F1 / Noah:** "Dispatchers need to compare unassigned jobs, technician skills and availability together."
- **C08-F2 / Dispatcher:** "I need to understand why an assignment is unsuitable, not just see an empty dropdown."
- **C08-F3 / Noah:** "Two dispatchers may work at once. We must avoid conflicting assignments."
- **C08-F4 / Service lead:** "We need to know who assigned a job and when. Reassignment and travel optimization are not first-release requirements."
- **C08-F5:** Current fixtures show one required skill per job and one skill per technician. Active status and non-overlapping UTC intervals matter; endpoints are half-open.
- **C08-F6:** A code-owning team exists, but a code app is a candidate, not proof that every feature needs custom development.

## Technology-specific decision context

Compare a custom code-app workbench with canvas/model-driven alternatives against the actual interaction and support needs. Decide features before selecting components or writing code.

Consider job, technician, skill, assignment and assignment-history concepts only when a selected feature justifies them. Platform audit/history may meet some needs; a new custom table is not automatically required.

## Proposal to inspect

- **C08-P1:** Store only a technician name on each job and call the schedule complete.
- **C08-P2:** Model all future skills, certifications, optimization and travel rules in the first pilot.
- **C08-P3:** An assignment's current value is enough to explain who made it or changed it.

## Change for discussion

- **C08-C1:** Technicians may have multiple skills next quarter. Compare a single Choice/text field with managed skill associations.
- **C08-C2:** Noah asks to reassign existing jobs. Decide whether to include it now and how it affects lifecycle/history and conflict information.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C08-T1 | The model cannot explain an unavailable or unsuitable technician. |
| C08-T2 | Multiple skills are stored as a comma-separated display string with no defined matching semantics. |
| C08-T3 | Earlier assignment accountability is lost after replacement. |
| C08-T4 | First-release scope includes optimization and certifications without source evidence. |

No TypeScript component, API implementation or concurrency test is supplied.


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true
[END STANDALONE CONTEXT]

Decision step DS08-1: read the interview, RULE-08 and fixtures.
Identify dispatcher/service-owner jobs, comparisons and explanations
needed. Propose feature hypotheses with source IDs and open questions.
Separate usability from skill/availability/conflict business rules.
Do not choose a code app or prescribe data tables before the needs.
Output label: EX08-P1: Dispatch needs and feature questions.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX08-P1: Dispatch needs and feature questions` using [output navigation](OUTPUTS.md).

**Decision step:** DS08-1, interaction/business-needs discovery.

**Do with it:** identify the information behind a "suitable technician" decision and one unanswered rule. Remove travel optimization from assumed first-release scope.

**Next:** carry the reviewed needs into product/feature choice.

**Gateway 1:** app choice follows the user's decision task, not the availability of a coding team.

## Phase 2. Choose features and application shape

### Prompt 2: justify the custom-workbench boundary

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
# Case 08: what must a dispatcher workbench support?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-08 and job/technician fixtures remain authoritative.**

## Client interview evidence

- **C08-F1 / Noah:** "Dispatchers need to compare unassigned jobs, technician skills and availability together."
- **C08-F2 / Dispatcher:** "I need to understand why an assignment is unsuitable, not just see an empty dropdown."
- **C08-F3 / Noah:** "Two dispatchers may work at once. We must avoid conflicting assignments."
- **C08-F4 / Service lead:** "We need to know who assigned a job and when. Reassignment and travel optimization are not first-release requirements."
- **C08-F5:** Current fixtures show one required skill per job and one skill per technician. Active status and non-overlapping UTC intervals matter; endpoints are half-open.
- **C08-F6:** A code-owning team exists, but a code app is a candidate, not proof that every feature needs custom development.

## Technology-specific decision context

Compare a custom code-app workbench with canvas/model-driven alternatives against the actual interaction and support needs. Decide features before selecting components or writing code.

Consider job, technician, skill, assignment and assignment-history concepts only when a selected feature justifies them. Platform audit/history may meet some needs; a new custom table is not automatically required.

## Proposal to inspect

- **C08-P1:** Store only a technician name on each job and call the schedule complete.
- **C08-P2:** Model all future skills, certifications, optimization and travel rules in the first pilot.
- **C08-P3:** An assignment's current value is enough to explain who made it or changed it.

## Change for discussion

- **C08-C1:** Technicians may have multiple skills next quarter. Compare a single Choice/text field with managed skill associations.
- **C08-C2:** Noah asks to reassign existing jobs. Decide whether to include it now and how it affects lifecycle/history and conflict information.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C08-T1 | The model cannot explain an unavailable or unsuitable technician. |
| C08-T2 | Multiple skills are stored as a comma-separated display string with no defined matching semantics. |
| C08-T3 | Earlier assignment accountability is lost after replacement. |
| C08-T4 | First-release scope includes optimization and certifications without source evidence. |

No TypeScript component, API implementation or concurrency test is supplied.


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true
[END STANDALONE CONTEXT]

Decision step DS08-2: compare job filtering, side-by-side capacity,
skill/availability explanation, assignment confirmation, keyboard use
and accountability features. Give IDs, value/source/dependencies and
first/later/not-needed status. Compare code-app, canvas and model-driven
fit, ownership and uncertainty. Do not assume a custom calendar or
optimizer is necessary for this pilot.
Output label: EX08-P2: Workbench feature and product choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX08-P2: Workbench feature and product choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS08-2, capability/app-fit scope.

**Do with it:** select features that materially improve dispatch decisions. State the interaction or support need that makes custom development worth its cost, or retain a simpler option pending evidence.

**Next:** pass selected features and explicit rules to modelling.

## Phase 3. Compare the data models

### Prompt 3: derive suitability, assignment and accountability data

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
# Case 08: what must a dispatcher workbench support?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-08 and job/technician fixtures remain authoritative.**

## Client interview evidence

- **C08-F1 / Noah:** "Dispatchers need to compare unassigned jobs, technician skills and availability together."
- **C08-F2 / Dispatcher:** "I need to understand why an assignment is unsuitable, not just see an empty dropdown."
- **C08-F3 / Noah:** "Two dispatchers may work at once. We must avoid conflicting assignments."
- **C08-F4 / Service lead:** "We need to know who assigned a job and when. Reassignment and travel optimization are not first-release requirements."
- **C08-F5:** Current fixtures show one required skill per job and one skill per technician. Active status and non-overlapping UTC intervals matter; endpoints are half-open.
- **C08-F6:** A code-owning team exists, but a code app is a candidate, not proof that every feature needs custom development.

## Technology-specific decision context

Compare a custom code-app workbench with canvas/model-driven alternatives against the actual interaction and support needs. Decide features before selecting components or writing code.

Consider job, technician, skill, assignment and assignment-history concepts only when a selected feature justifies them. Platform audit/history may meet some needs; a new custom table is not automatically required.

## Proposal to inspect

- **C08-P1:** Store only a technician name on each job and call the schedule complete.
- **C08-P2:** Model all future skills, certifications, optimization and travel rules in the first pilot.
- **C08-P3:** An assignment's current value is enough to explain who made it or changed it.

## Change for discussion

- **C08-C1:** Technicians may have multiple skills next quarter. Compare a single Choice/text field with managed skill associations.
- **C08-C2:** Noah asks to reassign existing jobs. Decide whether to include it now and how it affects lifecycle/history and conflict information.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C08-T1 | The model cannot explain an unavailable or unsuitable technician. |
| C08-T2 | Multiple skills are stored as a comma-separated display string with no defined matching semantics. |
| C08-T3 | Earlier assignment accountability is lost after replacement. |
| C08-T4 | First-release scope includes optimization and certifications without source evidence. |

No TypeScript component, API implementation or concurrency test is supplied.


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true
[END STANDALONE CONTEXT]

Decision step DS08-3: compare direct job/technician/skill fields with
related skill, assignment and history concepts as selected features need.
Specify entity purposes, key fields/types, cardinalities, ownership,
time/state meaning and feature IDs. Explain suitability and half-open
UTC availability. Compare platform audit/history with custom history.
Do not create tables for optimization or future certifications by default.
Output label: EX08-P3: Dispatch schema options and recommendation.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX08-P3: Dispatch schema options and recommendation` using [output navigation](OUTPUTS.md).

**Decision step:** DS08-3, logical scheduling data design.

**Do with it:** walk DSP-02/03/04 and explain what data makes each suitable or unsuitable. Check who assigned the job remains answerable. Challenge unexplained duplicate history or a name-only assignment.

**Next:** record the preferred model and its intentional first-release limits.

## Phase 4. Evaluate multiple skills and reassignment

### Prompt 4: decide how growth affects features and relationships

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
# Case 08: what must a dispatcher workbench support?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-08 and job/technician fixtures remain authoritative.**

## Client interview evidence

- **C08-F1 / Noah:** "Dispatchers need to compare unassigned jobs, technician skills and availability together."
- **C08-F2 / Dispatcher:** "I need to understand why an assignment is unsuitable, not just see an empty dropdown."
- **C08-F3 / Noah:** "Two dispatchers may work at once. We must avoid conflicting assignments."
- **C08-F4 / Service lead:** "We need to know who assigned a job and when. Reassignment and travel optimization are not first-release requirements."
- **C08-F5:** Current fixtures show one required skill per job and one skill per technician. Active status and non-overlapping UTC intervals matter; endpoints are half-open.
- **C08-F6:** A code-owning team exists, but a code app is a candidate, not proof that every feature needs custom development.

## Technology-specific decision context

Compare a custom code-app workbench with canvas/model-driven alternatives against the actual interaction and support needs. Decide features before selecting components or writing code.

Consider job, technician, skill, assignment and assignment-history concepts only when a selected feature justifies them. Platform audit/history may meet some needs; a new custom table is not automatically required.

## Proposal to inspect

- **C08-P1:** Store only a technician name on each job and call the schedule complete.
- **C08-P2:** Model all future skills, certifications, optimization and travel rules in the first pilot.
- **C08-P3:** An assignment's current value is enough to explain who made it or changed it.

## Change for discussion

- **C08-C1:** Technicians may have multiple skills next quarter. Compare a single Choice/text field with managed skill associations.
- **C08-C2:** Noah asks to reassign existing jobs. Decide whether to include it now and how it affects lifecycle/history and conflict information.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C08-T1 | The model cannot explain an unavailable or unsuitable technician. |
| C08-T2 | Multiple skills are stored as a comma-separated display string with no defined matching semantics. |
| C08-T3 | Earlier assignment accountability is lost after replacement. |
| C08-T4 | First-release scope includes optimization and certifications without source evidence. |

No TypeScript component, API implementation or concurrency test is supplied.


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true
[END STANDALONE CONTEXT]

Decision step DS08-4: apply C08-C1 multi-skill technicians and C08-C2
reassignment. Compare single values with managed associations and
current assignment with preserved history. Show feature, field,
cardinality, lifecycle and ownership consequences.
Recommend include/defer choices with evidence, keeping conflict rules
explicit. Do not jump to a technical concurrency implementation.
Output label: EX08-P4: Dispatch feature and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX08-P4: Dispatch feature and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS08-4, scope/cardinality/history tradeoffs.

**Do with it:** explain when skill associations become necessary and what reassignment must retain. Decide whether both features belong now; do not model every possible future certification without need.

**Next:** carry selected features, data choices and pending rule decisions to the pack.

## Phase 5. Validate the proposed workbench design

### Prompt 5: produce the dispatch feature/schema decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
# Case 08: what must a dispatcher workbench support?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-08 and job/technician fixtures remain authoritative.**

## Client interview evidence

- **C08-F1 / Noah:** "Dispatchers need to compare unassigned jobs, technician skills and availability together."
- **C08-F2 / Dispatcher:** "I need to understand why an assignment is unsuitable, not just see an empty dropdown."
- **C08-F3 / Noah:** "Two dispatchers may work at once. We must avoid conflicting assignments."
- **C08-F4 / Service lead:** "We need to know who assigned a job and when. Reassignment and travel optimization are not first-release requirements."
- **C08-F5:** Current fixtures show one required skill per job and one skill per technician. Active status and non-overlapping UTC intervals matter; endpoints are half-open.
- **C08-F6:** A code-owning team exists, but a code app is a candidate, not proof that every feature needs custom development.

## Technology-specific decision context

Compare a custom code-app workbench with canvas/model-driven alternatives against the actual interaction and support needs. Decide features before selecting components or writing code.

Consider job, technician, skill, assignment and assignment-history concepts only when a selected feature justifies them. Platform audit/history may meet some needs; a new custom table is not automatically required.

## Proposal to inspect

- **C08-P1:** Store only a technician name on each job and call the schedule complete.
- **C08-P2:** Model all future skills, certifications, optimization and travel rules in the first pilot.
- **C08-P3:** An assignment's current value is enough to explain who made it or changed it.

## Change for discussion

- **C08-C1:** Technicians may have multiple skills next quarter. Compare a single Choice/text field with managed skill associations.
- **C08-C2:** Noah asks to reassign existing jobs. Decide whether to include it now and how it affects lifecycle/history and conflict information.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C08-T1 | The model cannot explain an unavailable or unsuitable technician. |
| C08-T2 | Multiple skills are stored as a comma-separated display string with no defined matching semantics. |
| C08-T3 | Earlier assignment accountability is lost after replacement. |
| C08-T4 | First-release scope includes optimization and certifications without source evidence. |

No TypeScript component, API implementation or concurrency test is supplied.


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true
[END STANDALONE CONTEXT]

Decision step DS08-5: review fictional design feedback C08-T1..T4.
Consolidate feature priorities, app-fit rationale, preferred model,
field/relationship purpose, business/access/time rules, rejected
alternatives and open decisions. Walk suitable/unsuitable/conflicting
assignment and accountability examples. Define prototype questions and
Dispatch Workbench Accelerator boundaries, not an implemented scheduler.
Output label: EX08-P5: Dispatch feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX08-P5: Dispatch feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS08-5, scope/model acceptance.

**Do with it:** have a partner explain one feature, its evidence and supporting fields/relationships. Can the design describe unsuitable choices and previous assignment responsibility without author coaching?

**Next:** use the agreed decision pack to brief interaction/prototype/build work and the offering canvas.

**Gateway 2:** the data supports the chosen workbench behavior without requiring an oversized scheduler platform.

## What good looks like

HVE helps choose the right interaction/features and proportionate assignment/skill/history data. App technology is justified; code production is not the proof of learning.

## Recovery and takeaways

If HVE jumps to components/API code, request the missing feature or schema decision. If it overmodels future scope, ask which current need supports it. With no live HVE, record a desk walkthrough.

Take home the workbench capability/cardinality method as **Dispatch Workbench Accelerator** IP. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: what justifies custom UI? When does a skill become a separate managed concept? What does reassignment change in the model?

**Optional implementation reference:** [earlier maker material](guided-builds/08-dispatch-workbench.md) is not a required architecture or coding task.
