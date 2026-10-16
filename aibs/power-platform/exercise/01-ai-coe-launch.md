# 01. Decide the CoE's capabilities and first-service data with HVE

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Priya asks for an AI CoE. Use HVE to decide which delivery capabilities are actually needed, which first-service features to include and what data connects the two.**

Do not start by building a portfolio system or preselecting three tables. The task is a justified capability/feature/schema decision, not code, form configuration or implementation debugging.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-01 interview](client/hve-development/01-coe.md), [policy](client/offerings/README.md), [demands](client/offerings/coe-demand.csv), [service knowledge](client/offerings/service-knowledge.md) and this guide.

There are three opportunities, limited platform capacity and a first employee-service pilot. Business teams need ownership; earlier use-case decisions and reusable-asset meaning must survive later changes.

**Technology context:** model-driven apps support related case records and work queues; Power Automate supports routing/reminders; Copilot Studio can explain a service or perform a bounded business action. Decide which features justify those capabilities. An agent and a business process are not mandatory for every use case.

## Feature and schema decision workflow

| Step | CoE/service decision | HVE output | Used before |
|---|---|---|---|
| DS01-1 | What must the CoE enable and the service solve? | Source-backed capability and user-need map | Selecting platform components |
| DS01-2 | Which capabilities/features belong in release one? | Central/team responsibility and prioritized feature choices | Commissioning portfolio, intake, routing or agent features |
| DS01-3 | What records and relationships are necessary? | Compared logical models linked to selected features | Creating use-case/service/decision/asset data |
| DS01-4 | What should be standard versus team-specific? | Change impact and variation boundaries | Adding more teams or reopening earlier decisions |
| DS01-5 | Is the scope/data sufficient and proportionate? | First-release decision pack and unresolved owner choices | Prototype/build brief and partner offering |

## HVE learning objectives

- Use HVE to separate a CoE capability from its first application.
- Select useful intake, assessment, delivery, support and reuse features.
- Derive a model that distinguishes use cases, decisions and service activity.
- Challenge unnecessary centralization and premature platform complexity.
- Explain every proposed field/entity through a selected business need.

**Attempt first:** is a business use case the same thing as an employee's Repair request? Identify what each must remember before thinking about tables.

## Expected result

A bounded CoE capability/feature list and logical data model for the first service, with reasons, alternatives and scope limits. Live HVE requires actual requests/artifacts; a desk walkthrough is separately labeled. No implemented service or financial saving is claimed.

## Phase 1. Understand the capability and user needs

### Prompt 1: distinguish the CoE from its first application

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 01 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 01: Model-driven app, Power Automate cloud flow, Copilot Studio agent
## Feature and schema decision workflow

| Step | CoE/service decision | HVE output | Used before |
|---|---|---|---|
| DS01-1 | What must the CoE enable and the service solve? | Source-backed capability and user-need map | Selecting platform components |
| DS01-2 | Which capabilities/features belong in release one? | Central/team responsibility and prioritized feature choices | Commissioning portfolio, intake, routing or agent features |
| DS01-3 | What records and relationships are necessary? | Compared logical models linked to selected features | Creating use-case/service/decision/asset data |
| DS01-4 | What should be standard versus team-specific? | Change impact and variation boundaries | Adding more teams or reopening earlier decisions |
| DS01-5 | Is the scope/data sufficient and proportionate? | First-release decision pack and unresolved owner choices | Prototype/build brief and partner offering |

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
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.

SOURCE: client/hve-development/01-coe.md
# Case 01: what must the CoE actually do?

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. Not an approved schema or a working platform.**

## Client interview evidence

- **C01-F1 / Priya:** "Teams have three different AI ideas. I need a consistent way to decide which are worth pursuing, not a central committee that approves every small edit."
- **C01-F2 / Mia:** "Start with employee service requests. I must know who asked, what they need, who is handling it and whether they are satisfied."
- **C01-F3 / Jules:** "I can support only part of the first pilot. Business teams must own their service decisions and support after handover."
- **C01-F4 / Priya:** "A use case may be paused, changed or declined. I want to retain the evidence and reason, not just its current score."
- **C01-F5 / Delivery lead:** "If a second team reuses an asset, we need its owner, accepted version, suitable use and limitations."
- **C01-F6 / Mia:** "An employee request cannot close without an accountable handler. A technical record owner is not necessarily that person."
- **C01-F7 / Priya:** "The first service should explain Repair and Delivery and route the request. Payroll advice and autonomous financial decisions are not part of it."
- **C01-F8:** DEM-01's four-case/40-minute baseline is synthetic. No achieved saving is supplied.

## Technology-specific decision context

Model-driven apps can support related records, work queues and role-specific forms/views. Power Automate can route business events and reminders. Copilot Studio can explain a service or perform a deliberately bounded business action.

Decide which capabilities the CoE and its first service need. Do not start with a mandatory list of tables, flows or agents. Business-process stages may be useful, but nine HVE stages are not automatically nine database statuses.

## Proposal to inspect

- **C01-P1:** One portfolio spreadsheet can hold ideas, requests, assessments, decisions, service activity and asset details in the same row.
- **C01-P2:** Build a full enterprise CoE inventory/approval system before the first service can be tried.
- **C01-P3:** An agent is mandatory for every use case; its demonstration proves the CoE is operational.

## Change for discussion

- **C01-C1:** A second business team wants the same intake but different acceptance rules. Identify standard capability versus team-specific variation.
- **C01-C2:** Priya wants to reconsider a previously declined idea. Current status alone must not erase its earlier decision/evidence.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C01-T1 | The proposed feature list contains central approval for every edit, although no interview need supports it. |
| C01-T2 | The model cannot distinguish a business use case from an individual employee service request. |
| C01-T3 | Reopening a use case overwrites its earlier decision and reason. |
| C01-T4 | The reusable asset has no accepted-version or receiving-owner information. |
| C01-T5 | No first-release boundary explains which CoE features can wait. |

Use this to review feature/schema choices. It is not a runtime test or proof of a deployed CoE.


SOURCE: client/offerings/coe-demand.csv
demand_id,request,owner,baseline_cases,baseline_total_minutes
DEM-01,Route employee service requests,Mia,4,40
DEM-02,Validate emailed customer orders,Lena,4,48
DEM-03,Track supplier application completeness,Arun,3,45


SOURCE: client/offerings/service-knowledge.md
# Approved training service knowledge

**ZAVA-PP-2.0. Synthetic authority for labs 01 and 06.**

## KB-01: service boundaries

Zava accepts Repair and Delivery requests. The service team reviews priority and assignment. A created request is not a repair booking, delivery promise or compensation approval.

## KB-02: information to provide

Supply a category and a description of up to 500 characters. Do not include passwords, payment details or sensitive employee data. The service agent displays the request for confirmation before creation. If creation fails, it must say so and offer a retry using the same request key or a manual handoff.

## KB-03: unsupported request

Payroll advice, employment decisions and supplier payment changes are outside this service. Direct the user to the relevant human service owner without inventing contact details.
[END STANDALONE CONTEXT]

Decision step DS01-1: use the interview, DEM-01..03 and KB-01..03.
Identify what Priya, business teams, service owners and receiving
teams need to decide/do. Separate CoE delivery capabilities from
individual employee-service features. Cite evidence and questions.
Do not turn nine HVE stages into nine mandatory database statuses.
Do not prescribe a platform stack or schema before the needs.
Output label: EX01-P1: CoE and first-service needs.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX01-P1: CoE and first-service needs` using [output navigation](OUTPUTS.md).

**Decision step:** DS01-1, needs/capability discovery.

**Do with it:** check that qualification, retaining decisions, operating the pilot and transferring ownership have evidence. Remove central approval for every small edit unless a real need supports it.

**Next:** carry the reviewed needs and unresolved support question into prompt 2.

**Gateway 1:** the CoE is not just a policy charter or a mandatory app inventory.

## Phase 2. Choose capabilities and first-release features

### Prompt 2: decide what to include and defer

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 01 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 01: Model-driven app, Power Automate cloud flow, Copilot Studio agent
## Feature and schema decision workflow

| Step | CoE/service decision | HVE output | Used before |
|---|---|---|---|
| DS01-1 | What must the CoE enable and the service solve? | Source-backed capability and user-need map | Selecting platform components |
| DS01-2 | Which capabilities/features belong in release one? | Central/team responsibility and prioritized feature choices | Commissioning portfolio, intake, routing or agent features |
| DS01-3 | What records and relationships are necessary? | Compared logical models linked to selected features | Creating use-case/service/decision/asset data |
| DS01-4 | What should be standard versus team-specific? | Change impact and variation boundaries | Adding more teams or reopening earlier decisions |
| DS01-5 | Is the scope/data sufficient and proportionate? | First-release decision pack and unresolved owner choices | Prototype/build brief and partner offering |

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
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.

SOURCE: client/hve-development/01-coe.md
# Case 01: what must the CoE actually do?

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. Not an approved schema or a working platform.**

## Client interview evidence

- **C01-F1 / Priya:** "Teams have three different AI ideas. I need a consistent way to decide which are worth pursuing, not a central committee that approves every small edit."
- **C01-F2 / Mia:** "Start with employee service requests. I must know who asked, what they need, who is handling it and whether they are satisfied."
- **C01-F3 / Jules:** "I can support only part of the first pilot. Business teams must own their service decisions and support after handover."
- **C01-F4 / Priya:** "A use case may be paused, changed or declined. I want to retain the evidence and reason, not just its current score."
- **C01-F5 / Delivery lead:** "If a second team reuses an asset, we need its owner, accepted version, suitable use and limitations."
- **C01-F6 / Mia:** "An employee request cannot close without an accountable handler. A technical record owner is not necessarily that person."
- **C01-F7 / Priya:** "The first service should explain Repair and Delivery and route the request. Payroll advice and autonomous financial decisions are not part of it."
- **C01-F8:** DEM-01's four-case/40-minute baseline is synthetic. No achieved saving is supplied.

## Technology-specific decision context

Model-driven apps can support related records, work queues and role-specific forms/views. Power Automate can route business events and reminders. Copilot Studio can explain a service or perform a deliberately bounded business action.

Decide which capabilities the CoE and its first service need. Do not start with a mandatory list of tables, flows or agents. Business-process stages may be useful, but nine HVE stages are not automatically nine database statuses.

## Proposal to inspect

- **C01-P1:** One portfolio spreadsheet can hold ideas, requests, assessments, decisions, service activity and asset details in the same row.
- **C01-P2:** Build a full enterprise CoE inventory/approval system before the first service can be tried.
- **C01-P3:** An agent is mandatory for every use case; its demonstration proves the CoE is operational.

## Change for discussion

- **C01-C1:** A second business team wants the same intake but different acceptance rules. Identify standard capability versus team-specific variation.
- **C01-C2:** Priya wants to reconsider a previously declined idea. Current status alone must not erase its earlier decision/evidence.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C01-T1 | The proposed feature list contains central approval for every edit, although no interview need supports it. |
| C01-T2 | The model cannot distinguish a business use case from an individual employee service request. |
| C01-T3 | Reopening a use case overwrites its earlier decision and reason. |
| C01-T4 | The reusable asset has no accepted-version or receiving-owner information. |
| C01-T5 | No first-release boundary explains which CoE features can wait. |

Use this to review feature/schema choices. It is not a runtime test or proof of a deployed CoE.


SOURCE: client/offerings/coe-demand.csv
demand_id,request,owner,baseline_cases,baseline_total_minutes
DEM-01,Route employee service requests,Mia,4,40
DEM-02,Validate emailed customer orders,Lena,4,48
DEM-03,Track supplier application completeness,Arun,3,45


SOURCE: client/offerings/service-knowledge.md
# Approved training service knowledge

**ZAVA-PP-2.0. Synthetic authority for labs 01 and 06.**

## KB-01: service boundaries

Zava accepts Repair and Delivery requests. The service team reviews priority and assignment. A created request is not a repair booking, delivery promise or compensation approval.

## KB-02: information to provide

Supply a category and a description of up to 500 characters. Do not include passwords, payment details or sensitive employee data. The service agent displays the request for confirmation before creation. If creation fails, it must say so and offer a retry using the same request key or a manual handoff.

## KB-03: unsupported request

Payroll advice, employment decisions and supplier payment changes are outside this service. Direct the user to the relevant human service owner without inventing contact details.
[END STANDALONE CONTEXT]

Decision step DS01-2: propose a minimum first-release feature set:
use-case intake, evidence/assessment, decision history, service
request routing/status, support ownership and reusable assets.
Include only what the interviews justify. Give feature IDs, value,
source, central-versus-team owner and first/later/not-needed status.
Assess model-driven queues, flow routing and agent knowledge/actions.
Do not require an agent or full governance suite for each feature.
Output label: EX01-P2: CoE capability and feature choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX01-P2: CoE capability and feature choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS01-2, scope and technology-capability choice.

**Do with it:** select the smallest coherent capability set with the workshop sponsor. Explain how it delivers DEM-01 and who maintains it. Keep unsupported payroll or financial autonomy excluded.

**Next:** carry only selected features and pending assumptions to modelling.

## Phase 3. Derive the necessary records and relationships

### Prompt 3: compare a simple portfolio with related records

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 01 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 01: Model-driven app, Power Automate cloud flow, Copilot Studio agent
## Feature and schema decision workflow

| Step | CoE/service decision | HVE output | Used before |
|---|---|---|---|
| DS01-1 | What must the CoE enable and the service solve? | Source-backed capability and user-need map | Selecting platform components |
| DS01-2 | Which capabilities/features belong in release one? | Central/team responsibility and prioritized feature choices | Commissioning portfolio, intake, routing or agent features |
| DS01-3 | What records and relationships are necessary? | Compared logical models linked to selected features | Creating use-case/service/decision/asset data |
| DS01-4 | What should be standard versus team-specific? | Change impact and variation boundaries | Adding more teams or reopening earlier decisions |
| DS01-5 | Is the scope/data sufficient and proportionate? | First-release decision pack and unresolved owner choices | Prototype/build brief and partner offering |

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
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.

SOURCE: client/hve-development/01-coe.md
# Case 01: what must the CoE actually do?

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. Not an approved schema or a working platform.**

## Client interview evidence

- **C01-F1 / Priya:** "Teams have three different AI ideas. I need a consistent way to decide which are worth pursuing, not a central committee that approves every small edit."
- **C01-F2 / Mia:** "Start with employee service requests. I must know who asked, what they need, who is handling it and whether they are satisfied."
- **C01-F3 / Jules:** "I can support only part of the first pilot. Business teams must own their service decisions and support after handover."
- **C01-F4 / Priya:** "A use case may be paused, changed or declined. I want to retain the evidence and reason, not just its current score."
- **C01-F5 / Delivery lead:** "If a second team reuses an asset, we need its owner, accepted version, suitable use and limitations."
- **C01-F6 / Mia:** "An employee request cannot close without an accountable handler. A technical record owner is not necessarily that person."
- **C01-F7 / Priya:** "The first service should explain Repair and Delivery and route the request. Payroll advice and autonomous financial decisions are not part of it."
- **C01-F8:** DEM-01's four-case/40-minute baseline is synthetic. No achieved saving is supplied.

## Technology-specific decision context

Model-driven apps can support related records, work queues and role-specific forms/views. Power Automate can route business events and reminders. Copilot Studio can explain a service or perform a deliberately bounded business action.

Decide which capabilities the CoE and its first service need. Do not start with a mandatory list of tables, flows or agents. Business-process stages may be useful, but nine HVE stages are not automatically nine database statuses.

## Proposal to inspect

- **C01-P1:** One portfolio spreadsheet can hold ideas, requests, assessments, decisions, service activity and asset details in the same row.
- **C01-P2:** Build a full enterprise CoE inventory/approval system before the first service can be tried.
- **C01-P3:** An agent is mandatory for every use case; its demonstration proves the CoE is operational.

## Change for discussion

- **C01-C1:** A second business team wants the same intake but different acceptance rules. Identify standard capability versus team-specific variation.
- **C01-C2:** Priya wants to reconsider a previously declined idea. Current status alone must not erase its earlier decision/evidence.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C01-T1 | The proposed feature list contains central approval for every edit, although no interview need supports it. |
| C01-T2 | The model cannot distinguish a business use case from an individual employee service request. |
| C01-T3 | Reopening a use case overwrites its earlier decision and reason. |
| C01-T4 | The reusable asset has no accepted-version or receiving-owner information. |
| C01-T5 | No first-release boundary explains which CoE features can wait. |

Use this to review feature/schema choices. It is not a runtime test or proof of a deployed CoE.


SOURCE: client/offerings/coe-demand.csv
demand_id,request,owner,baseline_cases,baseline_total_minutes
DEM-01,Route employee service requests,Mia,4,40
DEM-02,Validate emailed customer orders,Lena,4,48
DEM-03,Track supplier application completeness,Arun,3,45


SOURCE: client/offerings/service-knowledge.md
# Approved training service knowledge

**ZAVA-PP-2.0. Synthetic authority for labs 01 and 06.**

## KB-01: service boundaries

Zava accepts Repair and Delivery requests. The service team reviews priority and assignment. A created request is not a repair booking, delivery promise or compensation approval.

## KB-02: information to provide

Supply a category and a description of up to 500 characters. Do not include passwords, payment details or sensitive employee data. The service agent displays the request for confirmation before creation. If creation fails, it must say so and offer a retry using the same request key or a manual handoff.

## KB-03: unsupported request

Payroll advice, employment decisions and supplier payment changes are outside this service. Direct the user to the relevant human service owner without inventing contact details.
[END STANDALONE CONTEXT]

Decision step DS01-3: derive schema options from selected features.
Compare a single portfolio/list model with related use-case,
assessment/evidence, decision, service activity and reusable-asset
concepts only where needed. Explain cardinality and lifecycle.
For every entity/field give purpose, type/requiredness, owner and
supporting feature IDs. Distinguish current status from decision history.
Do not force a table for every noun or copy a fixed starter schema.
Output label: EX01-P3: CoE and service schema options.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX01-P3: CoE and service schema options` using [output navigation](OUTPUTS.md).

**Decision step:** DS01-3, logical model selection.

**Do with it:** walk one use case with two decisions and several employee requests. Ask which records preserve a declined decision and which track a request's handler. Challenge any field/entity with no selected-feature rationale.

**Next:** record a preferred model and rejected alternative for prompt 4.

## Phase 4. Assess team variation and reconsideration

### Prompt 4: decide which variation the model must support

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 01 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 01: Model-driven app, Power Automate cloud flow, Copilot Studio agent
## Feature and schema decision workflow

| Step | CoE/service decision | HVE output | Used before |
|---|---|---|---|
| DS01-1 | What must the CoE enable and the service solve? | Source-backed capability and user-need map | Selecting platform components |
| DS01-2 | Which capabilities/features belong in release one? | Central/team responsibility and prioritized feature choices | Commissioning portfolio, intake, routing or agent features |
| DS01-3 | What records and relationships are necessary? | Compared logical models linked to selected features | Creating use-case/service/decision/asset data |
| DS01-4 | What should be standard versus team-specific? | Change impact and variation boundaries | Adding more teams or reopening earlier decisions |
| DS01-5 | Is the scope/data sufficient and proportionate? | First-release decision pack and unresolved owner choices | Prototype/build brief and partner offering |

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
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.

SOURCE: client/hve-development/01-coe.md
# Case 01: what must the CoE actually do?

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. Not an approved schema or a working platform.**

## Client interview evidence

- **C01-F1 / Priya:** "Teams have three different AI ideas. I need a consistent way to decide which are worth pursuing, not a central committee that approves every small edit."
- **C01-F2 / Mia:** "Start with employee service requests. I must know who asked, what they need, who is handling it and whether they are satisfied."
- **C01-F3 / Jules:** "I can support only part of the first pilot. Business teams must own their service decisions and support after handover."
- **C01-F4 / Priya:** "A use case may be paused, changed or declined. I want to retain the evidence and reason, not just its current score."
- **C01-F5 / Delivery lead:** "If a second team reuses an asset, we need its owner, accepted version, suitable use and limitations."
- **C01-F6 / Mia:** "An employee request cannot close without an accountable handler. A technical record owner is not necessarily that person."
- **C01-F7 / Priya:** "The first service should explain Repair and Delivery and route the request. Payroll advice and autonomous financial decisions are not part of it."
- **C01-F8:** DEM-01's four-case/40-minute baseline is synthetic. No achieved saving is supplied.

## Technology-specific decision context

Model-driven apps can support related records, work queues and role-specific forms/views. Power Automate can route business events and reminders. Copilot Studio can explain a service or perform a deliberately bounded business action.

Decide which capabilities the CoE and its first service need. Do not start with a mandatory list of tables, flows or agents. Business-process stages may be useful, but nine HVE stages are not automatically nine database statuses.

## Proposal to inspect

- **C01-P1:** One portfolio spreadsheet can hold ideas, requests, assessments, decisions, service activity and asset details in the same row.
- **C01-P2:** Build a full enterprise CoE inventory/approval system before the first service can be tried.
- **C01-P3:** An agent is mandatory for every use case; its demonstration proves the CoE is operational.

## Change for discussion

- **C01-C1:** A second business team wants the same intake but different acceptance rules. Identify standard capability versus team-specific variation.
- **C01-C2:** Priya wants to reconsider a previously declined idea. Current status alone must not erase its earlier decision/evidence.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C01-T1 | The proposed feature list contains central approval for every edit, although no interview need supports it. |
| C01-T2 | The model cannot distinguish a business use case from an individual employee service request. |
| C01-T3 | Reopening a use case overwrites its earlier decision and reason. |
| C01-T4 | The reusable asset has no accepted-version or receiving-owner information. |
| C01-T5 | No first-release boundary explains which CoE features can wait. |

Use this to review feature/schema choices. It is not a runtime test or proof of a deployed CoE.


SOURCE: client/offerings/coe-demand.csv
demand_id,request,owner,baseline_cases,baseline_total_minutes
DEM-01,Route employee service requests,Mia,4,40
DEM-02,Validate emailed customer orders,Lena,4,48
DEM-03,Track supplier application completeness,Arun,3,45


SOURCE: client/offerings/service-knowledge.md
# Approved training service knowledge

**ZAVA-PP-2.0. Synthetic authority for labs 01 and 06.**

## KB-01: service boundaries

Zava accepts Repair and Delivery requests. The service team reviews priority and assignment. A created request is not a repair booking, delivery promise or compensation approval.

## KB-02: information to provide

Supply a category and a description of up to 500 characters. Do not include passwords, payment details or sensitive employee data. The service agent displays the request for confirmation before creation. If creation fails, it must say so and offer a retry using the same request key or a manual handoff.

## KB-03: unsupported request

Payroll advice, employment decisions and supplier payment changes are outside this service. Direct the user to the relevant human service owner without inventing contact details.
[END STANDALONE CONTEXT]

Decision step DS01-4: apply C01-C1's second team and C01-C2's
reconsidered idea. Show changes to capabilities/features, data
relationships, rules and ownership. Compare simple team-specific
configuration with separate processes/data where justified.
Preserve earlier decision evidence. Identify what is needed now,
what can wait and the human questions still open.
Output label: EX01-P4: CoE variation and schema impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX01-P4: CoE variation and schema impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS01-4, variation/history design.

**Do with it:** explain how the second team can differ without forking everything or centralizing every decision. Record whether the chosen model needs another association, version or history concept and why.

**Next:** give prompt 5 the selected scope/model and explicit conditions.

## Phase 5. Review and package the decisions

### Prompt 5: produce the first-release capability/schema pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 01 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 01: Model-driven app, Power Automate cloud flow, Copilot Studio agent
## Feature and schema decision workflow

| Step | CoE/service decision | HVE output | Used before |
|---|---|---|---|
| DS01-1 | What must the CoE enable and the service solve? | Source-backed capability and user-need map | Selecting platform components |
| DS01-2 | Which capabilities/features belong in release one? | Central/team responsibility and prioritized feature choices | Commissioning portfolio, intake, routing or agent features |
| DS01-3 | What records and relationships are necessary? | Compared logical models linked to selected features | Creating use-case/service/decision/asset data |
| DS01-4 | What should be standard versus team-specific? | Change impact and variation boundaries | Adding more teams or reopening earlier decisions |
| DS01-5 | Is the scope/data sufficient and proportionate? | First-release decision pack and unresolved owner choices | Prototype/build brief and partner offering |

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
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.

SOURCE: client/hve-development/01-coe.md
# Case 01: what must the CoE actually do?

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. Not an approved schema or a working platform.**

## Client interview evidence

- **C01-F1 / Priya:** "Teams have three different AI ideas. I need a consistent way to decide which are worth pursuing, not a central committee that approves every small edit."
- **C01-F2 / Mia:** "Start with employee service requests. I must know who asked, what they need, who is handling it and whether they are satisfied."
- **C01-F3 / Jules:** "I can support only part of the first pilot. Business teams must own their service decisions and support after handover."
- **C01-F4 / Priya:** "A use case may be paused, changed or declined. I want to retain the evidence and reason, not just its current score."
- **C01-F5 / Delivery lead:** "If a second team reuses an asset, we need its owner, accepted version, suitable use and limitations."
- **C01-F6 / Mia:** "An employee request cannot close without an accountable handler. A technical record owner is not necessarily that person."
- **C01-F7 / Priya:** "The first service should explain Repair and Delivery and route the request. Payroll advice and autonomous financial decisions are not part of it."
- **C01-F8:** DEM-01's four-case/40-minute baseline is synthetic. No achieved saving is supplied.

## Technology-specific decision context

Model-driven apps can support related records, work queues and role-specific forms/views. Power Automate can route business events and reminders. Copilot Studio can explain a service or perform a deliberately bounded business action.

Decide which capabilities the CoE and its first service need. Do not start with a mandatory list of tables, flows or agents. Business-process stages may be useful, but nine HVE stages are not automatically nine database statuses.

## Proposal to inspect

- **C01-P1:** One portfolio spreadsheet can hold ideas, requests, assessments, decisions, service activity and asset details in the same row.
- **C01-P2:** Build a full enterprise CoE inventory/approval system before the first service can be tried.
- **C01-P3:** An agent is mandatory for every use case; its demonstration proves the CoE is operational.

## Change for discussion

- **C01-C1:** A second business team wants the same intake but different acceptance rules. Identify standard capability versus team-specific variation.
- **C01-C2:** Priya wants to reconsider a previously declined idea. Current status alone must not erase its earlier decision/evidence.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C01-T1 | The proposed feature list contains central approval for every edit, although no interview need supports it. |
| C01-T2 | The model cannot distinguish a business use case from an individual employee service request. |
| C01-T3 | Reopening a use case overwrites its earlier decision and reason. |
| C01-T4 | The reusable asset has no accepted-version or receiving-owner information. |
| C01-T5 | No first-release boundary explains which CoE features can wait. |

Use this to review feature/schema choices. It is not a runtime test or proof of a deployed CoE.


SOURCE: client/offerings/coe-demand.csv
demand_id,request,owner,baseline_cases,baseline_total_minutes
DEM-01,Route employee service requests,Mia,4,40
DEM-02,Validate emailed customer orders,Lena,4,48
DEM-03,Track supplier application completeness,Arun,3,45


SOURCE: client/offerings/service-knowledge.md
# Approved training service knowledge

**ZAVA-PP-2.0. Synthetic authority for labs 01 and 06.**

## KB-01: service boundaries

Zava accepts Repair and Delivery requests. The service team reviews priority and assignment. A created request is not a repair booking, delivery promise or compensation approval.

## KB-02: information to provide

Supply a category and a description of up to 500 characters. Do not include passwords, payment details or sensitive employee data. The service agent displays the request for confirmation before creation. If creation fails, it must say so and offer a retry using the same request key or a manual handoff.

## KB-03: unsupported request

Payroll advice, employment decisions and supplier payment changes are outside this service. Direct the user to the relevant human service owner without inventing contact details.
[END STANDALONE CONTEXT]

Decision step DS01-5: review fictional design feedback C01-T1..T5.
Consolidate the capability/feature priorities, preferred model,
field/relationship rationale, ownership/states, rejected options,
example-record walkthroughs and open client decisions.
Tie evidence to feature IDs and features to data requirements.
State the next prototype questions and AI CoE Launch + First Value
Stream offer boundaries. Do not claim implemented controls or savings.
Output label: EX01-P5: CoE feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX01-P5: CoE feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS01-5, scope/model acceptance before build planning.

**Do with it:** ask a partner to explain one included feature, the data it needs and one deliberately deferred capability. Test whether reopened decisions and receiving ownership remain understandable without author coaching.

**Next:** use the pack as the agreed design basis for prototype/build planning and the offering canvas, not as a deployed CoE.

**Gateway 2:** every included capability has a need, every record has a feature purpose, and the first release is achievable with the stated ownership/capacity.

## What good looks like

HVE helps make a smaller, better-justified delivery capability and a coherent first-service model. Neither a giant governance suite nor a bare request app is accepted without explaining what client need it meets.

## Recovery and takeaways

If HVE returns a charter or implementation task list, request the missing feature choices and schema rationale. If earlier implementation artifacts are reused, revalidate them against the new needs rather than inheriting their schema. With no live HVE, record a desk walkthrough.

Take home the capability-to-feature-to-data method as **AI CoE Launch + First Value Stream** IP. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: which features are central, which are team-owned, and why? How does the schema preserve the reason for a past decision? What did you deliberately not build?

**Optional implementation reference:** [earlier maker material](guided-builds/01-ai-coe-launch.md) is not a prescribed feature list or schema.
