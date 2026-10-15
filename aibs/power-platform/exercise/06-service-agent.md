# 06. Decide a Copilot Studio agent's features and business data

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Mia wants a useful service agent. Use HVE to decide what it should know/do, what must stay with people and what data is necessary for the selected business actions.**

Do not start by adding tools or configuring topic nodes. The exercise is feature, authority and schema choice; coding capability is not its objective.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-06 interview](client/hve-development/06-agent.md), [RULE-06](client/offerings/README.md), [knowledge](client/offerings/service-knowledge.md), [service examples](client/offerings/service-cases.csv) and this guide.

The first service covers Repair/Delivery requests, correction/cancellation before submission and accountable review. Booking, compensation and payroll are excluded. Full-chat retention has no approved business need.

**Technology context:** Copilot Studio supports grounded answers, conversational data collection and bounded tools/actions. Power Automate and Dataverse may support persistent work. Decide whether the first release needs each capability, not merely which tools can be connected.

## Feature and schema decision workflow

| Step | Agent-service decision | HVE output | Used before |
|---|---|---|---|
| DS06-1 | What user/service jobs should the agent support? | Needs, authority boundaries and feature questions | Choosing knowledge/actions |
| DS06-2 | Which conversational/action features are needed now? | Prioritized explain/collect/confirm/create/status choices | Designing topics or tools |
| DS06-3 | What is transient conversation versus persistent business data? | Compared request/action/identity/history models | Creating storage or action contracts |
| DS06-4 | How do status lookup and changed details affect the design? | Feature/access/identity/history impact | Adding more actions |
| DS06-5 | Can the design support safe useful journeys? | Feature/schema decision pack | Prototype and acceptance planning |

## HVE learning objectives

- Select agent capabilities from service needs, not tool availability.
- Distinguish intent, business authority and a persistent request.
- Decide what information must be retained and what should not.
- Model request identity/retry/history without treating chat as the database.
- Evaluate feature/data/access tradeoffs before implementation.

**Attempt first:** why might a chat transcript be insufficient as the service team's request record, yet excessive as retained data?

## Expected result

A first-release agent capability/feature list and logical business-data model, not an implemented topic/flow. Actual HVE artifacts distinguish live practice from a desk walkthrough; no action execution is claimed.

## Phase 1. Understand the useful service boundary

### Prompt 1: derive the jobs and feature questions

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 06 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 06: Copilot Studio agent, Agent flow
## Feature and schema decision workflow

| Step | Agent-service decision | HVE output | Used before |
|---|---|---|---|
| DS06-1 | What user/service jobs should the agent support? | Needs, authority boundaries and feature questions | Choosing knowledge/actions |
| DS06-2 | Which conversational/action features are needed now? | Prioritized explain/collect/confirm/create/status choices | Designing topics or tools |
| DS06-3 | What is transient conversation versus persistent business data? | Compared request/action/identity/history models | Creating storage or action contracts |
| DS06-4 | How do status lookup and changed details affect the design? | Feature/access/identity/history impact | Adding more actions |
| DS06-5 | Can the design support safe useful journeys? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-06 / Service:** Only authenticated test users with effective request-store permission may create a service request. Categories are `Repair` and `Delivery`; description is required and at most 500 characters. A human confirms the displayed payload before action. A caller-scoped request key prevents duplicate creation. A denied caller must not write through a privileged shared connection.

SOURCE: client/hve-development/06-agent.md
# Case 06: what should the service agent know and do?

**HVE-DECISIONS-1.0. Fictional client interview/design feedback. RULE-06, approved knowledge and service-cases.csv remain authoritative.**

## Client interview evidence

- **C06-F1 / Mia:** "The agent should explain Repair and Delivery. It may help an employee submit a request, but it cannot promise a booking or compensation."
- **C06-F2 / Employee:** "Before anything is submitted, show the category and my description so I can correct or cancel."
- **C06-F3 / Service team:** "A request needs an accountable requester, reference, category, description and review status."
- **C06-F4 / Operator:** "If a user retries, they should not create a second request. If details changed, we must distinguish a new request from a retry."
- **C06-F5 / Mia:** "We have not asked to retain entire conversations. Do not store passwords, payroll or payment details just because they appear in chat."
- **C06-F6:** Allowed categories are Repair/Delivery, description is required and at most 500 characters, and the intended caller must have permission.

## Technology-specific decision context

Copilot Studio can answer from approved knowledge, collect information and call a bounded business action. Decide which of those capabilities the first service needs, what must remain human-owned and what information is transient conversation state versus persistent business data.

Do not assume that every conversational variable needs a database table or that adding a tool authorizes every user.

## Proposal to inspect

- **C06-P1:** Give the agent booking, compensation and payroll tools to make it look useful.
- **C06-P2:** Persist every chat message and use it as the only request record.
- **C06-P3:** A retry is always a new request; a changed description always overwrites the existing request.

## Change for discussion

- **C06-C1:** Mia asks whether users should see request status later. Decide the feature, identity/data needs and access boundaries before adding it.
- **C06-C2:** The user changes category after seeing the summary. Determine what confirmation/identity/history information must be retained and what can remain transient.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C06-T1 | The feature list confuses request submission with repair booking. |
| C06-T2 | The model has no stable way to identify the same request across a retry. |
| C06-T3 | Conversation text is stored but the service team cannot identify the accountable requester or request state. |
| C06-T4 | Status lookup would reveal another employee's requests. |
| C06-T5 | Unnecessary full-chat retention is included without a stated business purpose. |

No live agent conversation, flow execution or stored-row test is supplied.


SOURCE: client/offerings/service-cases.csv
case_id,test_user,request_key,category,description
SR-01,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-02,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-03,Denied B,REQ-B-001,Delivery,Training parcel has not arrived
SR-04,Allowed A,REQ-A-002,Payroll,Please change my salary


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

Decision step DS06-1: read the interview, RULE-06, knowledge and cases.
Identify employee/service-team jobs and the decisions that remain
human-owned. Propose feature hypotheses with sources and questions.
Separate explaining a service, preparing a request, submitting it
and committing to an outcome. Do not select tools or a schema yet.
Output label: EX06-P1: Agent-service needs and feature questions.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX06-P1: Agent-service needs and feature questions` using [output navigation](OUTPUTS.md).

**Decision step:** DS06-1, needs/authority discovery.

**Do with it:** match features to KB-01..03 and the interview. Reject booking/compensation/payroll scope without a new decision. Record which user outcome makes action capability worthwhile.

**Next:** carry reviewed needs and missing service-owner answers into scoping.

**Gateway 1:** the proposed agent's business effect is clear before any tool is chosen.

## Phase 2. Choose knowledge and action features

### Prompt 2: define the first conversational service

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 06 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 06: Copilot Studio agent, Agent flow
## Feature and schema decision workflow

| Step | Agent-service decision | HVE output | Used before |
|---|---|---|---|
| DS06-1 | What user/service jobs should the agent support? | Needs, authority boundaries and feature questions | Choosing knowledge/actions |
| DS06-2 | Which conversational/action features are needed now? | Prioritized explain/collect/confirm/create/status choices | Designing topics or tools |
| DS06-3 | What is transient conversation versus persistent business data? | Compared request/action/identity/history models | Creating storage or action contracts |
| DS06-4 | How do status lookup and changed details affect the design? | Feature/access/identity/history impact | Adding more actions |
| DS06-5 | Can the design support safe useful journeys? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-06 / Service:** Only authenticated test users with effective request-store permission may create a service request. Categories are `Repair` and `Delivery`; description is required and at most 500 characters. A human confirms the displayed payload before action. A caller-scoped request key prevents duplicate creation. A denied caller must not write through a privileged shared connection.

SOURCE: client/hve-development/06-agent.md
# Case 06: what should the service agent know and do?

**HVE-DECISIONS-1.0. Fictional client interview/design feedback. RULE-06, approved knowledge and service-cases.csv remain authoritative.**

## Client interview evidence

- **C06-F1 / Mia:** "The agent should explain Repair and Delivery. It may help an employee submit a request, but it cannot promise a booking or compensation."
- **C06-F2 / Employee:** "Before anything is submitted, show the category and my description so I can correct or cancel."
- **C06-F3 / Service team:** "A request needs an accountable requester, reference, category, description and review status."
- **C06-F4 / Operator:** "If a user retries, they should not create a second request. If details changed, we must distinguish a new request from a retry."
- **C06-F5 / Mia:** "We have not asked to retain entire conversations. Do not store passwords, payroll or payment details just because they appear in chat."
- **C06-F6:** Allowed categories are Repair/Delivery, description is required and at most 500 characters, and the intended caller must have permission.

## Technology-specific decision context

Copilot Studio can answer from approved knowledge, collect information and call a bounded business action. Decide which of those capabilities the first service needs, what must remain human-owned and what information is transient conversation state versus persistent business data.

Do not assume that every conversational variable needs a database table or that adding a tool authorizes every user.

## Proposal to inspect

- **C06-P1:** Give the agent booking, compensation and payroll tools to make it look useful.
- **C06-P2:** Persist every chat message and use it as the only request record.
- **C06-P3:** A retry is always a new request; a changed description always overwrites the existing request.

## Change for discussion

- **C06-C1:** Mia asks whether users should see request status later. Decide the feature, identity/data needs and access boundaries before adding it.
- **C06-C2:** The user changes category after seeing the summary. Determine what confirmation/identity/history information must be retained and what can remain transient.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C06-T1 | The feature list confuses request submission with repair booking. |
| C06-T2 | The model has no stable way to identify the same request across a retry. |
| C06-T3 | Conversation text is stored but the service team cannot identify the accountable requester or request state. |
| C06-T4 | Status lookup would reveal another employee's requests. |
| C06-T5 | Unnecessary full-chat retention is included without a stated business purpose. |

No live agent conversation, flow execution or stored-row test is supplied.


SOURCE: client/offerings/service-cases.csv
case_id,test_user,request_key,category,description
SR-01,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-02,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-03,Denied B,REQ-B-001,Delivery,Training parcel has not arrived
SR-04,Allowed A,REQ-A-002,Payroll,Please change my salary


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

Decision step DS06-2: compare grounded explanation, clarification,
structured request preparation, review/confirmation, cancellation,
submission and later status lookup. Give IDs, value/source/dependencies
and first/later/not-needed status. Explain Copilot Studio knowledge
and action capabilities plus app/manual alternatives.
Keep a valid user's intent separate from permission to act.
Output label: EX06-P2: Agent capability and feature choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX06-P2: Agent capability and feature choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS06-2, action/knowledge scope.

**Do with it:** select a useful first service with Mia's workshop representative. State whether the first release explains, prepares or actually submits work and why. Do not include status lookup merely because it is possible.

**Next:** give selected features and privacy assumptions to data modelling.

## Phase 3. Decide what the service must remember

### Prompt 3: compare transient and persistent models

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 06 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 06: Copilot Studio agent, Agent flow
## Feature and schema decision workflow

| Step | Agent-service decision | HVE output | Used before |
|---|---|---|---|
| DS06-1 | What user/service jobs should the agent support? | Needs, authority boundaries and feature questions | Choosing knowledge/actions |
| DS06-2 | Which conversational/action features are needed now? | Prioritized explain/collect/confirm/create/status choices | Designing topics or tools |
| DS06-3 | What is transient conversation versus persistent business data? | Compared request/action/identity/history models | Creating storage or action contracts |
| DS06-4 | How do status lookup and changed details affect the design? | Feature/access/identity/history impact | Adding more actions |
| DS06-5 | Can the design support safe useful journeys? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-06 / Service:** Only authenticated test users with effective request-store permission may create a service request. Categories are `Repair` and `Delivery`; description is required and at most 500 characters. A human confirms the displayed payload before action. A caller-scoped request key prevents duplicate creation. A denied caller must not write through a privileged shared connection.

SOURCE: client/hve-development/06-agent.md
# Case 06: what should the service agent know and do?

**HVE-DECISIONS-1.0. Fictional client interview/design feedback. RULE-06, approved knowledge and service-cases.csv remain authoritative.**

## Client interview evidence

- **C06-F1 / Mia:** "The agent should explain Repair and Delivery. It may help an employee submit a request, but it cannot promise a booking or compensation."
- **C06-F2 / Employee:** "Before anything is submitted, show the category and my description so I can correct or cancel."
- **C06-F3 / Service team:** "A request needs an accountable requester, reference, category, description and review status."
- **C06-F4 / Operator:** "If a user retries, they should not create a second request. If details changed, we must distinguish a new request from a retry."
- **C06-F5 / Mia:** "We have not asked to retain entire conversations. Do not store passwords, payroll or payment details just because they appear in chat."
- **C06-F6:** Allowed categories are Repair/Delivery, description is required and at most 500 characters, and the intended caller must have permission.

## Technology-specific decision context

Copilot Studio can answer from approved knowledge, collect information and call a bounded business action. Decide which of those capabilities the first service needs, what must remain human-owned and what information is transient conversation state versus persistent business data.

Do not assume that every conversational variable needs a database table or that adding a tool authorizes every user.

## Proposal to inspect

- **C06-P1:** Give the agent booking, compensation and payroll tools to make it look useful.
- **C06-P2:** Persist every chat message and use it as the only request record.
- **C06-P3:** A retry is always a new request; a changed description always overwrites the existing request.

## Change for discussion

- **C06-C1:** Mia asks whether users should see request status later. Decide the feature, identity/data needs and access boundaries before adding it.
- **C06-C2:** The user changes category after seeing the summary. Determine what confirmation/identity/history information must be retained and what can remain transient.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C06-T1 | The feature list confuses request submission with repair booking. |
| C06-T2 | The model has no stable way to identify the same request across a retry. |
| C06-T3 | Conversation text is stored but the service team cannot identify the accountable requester or request state. |
| C06-T4 | Status lookup would reveal another employee's requests. |
| C06-T5 | Unnecessary full-chat retention is included without a stated business purpose. |

No live agent conversation, flow execution or stored-row test is supplied.


SOURCE: client/offerings/service-cases.csv
case_id,test_user,request_key,category,description
SR-01,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-02,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-03,Denied B,REQ-B-001,Delivery,Training parcel has not arrived
SR-04,Allowed A,REQ-A-002,Payroll,Please change my salary


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

Decision step DS06-3: derive schema options for the selected features.
Separate transient conversation inputs/confirmation from persistent
request, requester/owner, reference/status and any action/history
concept justified by retry or audit needs.
Give fields/types/requiredness, cardinalities, access, retention and
supporting feature IDs. Explain stable request identity and changed
details. Do not persist full chat or create tables for every variable.
Output label: EX06-P3: Agent business-data schema options.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX06-P3: Agent business-data schema options` using [output navigation](OUTPUTS.md).

**Decision step:** DS06-3, business-data and retention modelling.

**Do with it:** walk one submitted request and a repeated attempt. Identify the stable business identity and who may see the record. Challenge both a transcript-only model and unnecessary persistent conversation state.

**Next:** record a preferred model and unresolved privacy/identity decisions.

## Phase 4. Assess changed details and status lookup

### Prompt 4: decide the data and access impact

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 06 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 06: Copilot Studio agent, Agent flow
## Feature and schema decision workflow

| Step | Agent-service decision | HVE output | Used before |
|---|---|---|---|
| DS06-1 | What user/service jobs should the agent support? | Needs, authority boundaries and feature questions | Choosing knowledge/actions |
| DS06-2 | Which conversational/action features are needed now? | Prioritized explain/collect/confirm/create/status choices | Designing topics or tools |
| DS06-3 | What is transient conversation versus persistent business data? | Compared request/action/identity/history models | Creating storage or action contracts |
| DS06-4 | How do status lookup and changed details affect the design? | Feature/access/identity/history impact | Adding more actions |
| DS06-5 | Can the design support safe useful journeys? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-06 / Service:** Only authenticated test users with effective request-store permission may create a service request. Categories are `Repair` and `Delivery`; description is required and at most 500 characters. A human confirms the displayed payload before action. A caller-scoped request key prevents duplicate creation. A denied caller must not write through a privileged shared connection.

SOURCE: client/hve-development/06-agent.md
# Case 06: what should the service agent know and do?

**HVE-DECISIONS-1.0. Fictional client interview/design feedback. RULE-06, approved knowledge and service-cases.csv remain authoritative.**

## Client interview evidence

- **C06-F1 / Mia:** "The agent should explain Repair and Delivery. It may help an employee submit a request, but it cannot promise a booking or compensation."
- **C06-F2 / Employee:** "Before anything is submitted, show the category and my description so I can correct or cancel."
- **C06-F3 / Service team:** "A request needs an accountable requester, reference, category, description and review status."
- **C06-F4 / Operator:** "If a user retries, they should not create a second request. If details changed, we must distinguish a new request from a retry."
- **C06-F5 / Mia:** "We have not asked to retain entire conversations. Do not store passwords, payroll or payment details just because they appear in chat."
- **C06-F6:** Allowed categories are Repair/Delivery, description is required and at most 500 characters, and the intended caller must have permission.

## Technology-specific decision context

Copilot Studio can answer from approved knowledge, collect information and call a bounded business action. Decide which of those capabilities the first service needs, what must remain human-owned and what information is transient conversation state versus persistent business data.

Do not assume that every conversational variable needs a database table or that adding a tool authorizes every user.

## Proposal to inspect

- **C06-P1:** Give the agent booking, compensation and payroll tools to make it look useful.
- **C06-P2:** Persist every chat message and use it as the only request record.
- **C06-P3:** A retry is always a new request; a changed description always overwrites the existing request.

## Change for discussion

- **C06-C1:** Mia asks whether users should see request status later. Decide the feature, identity/data needs and access boundaries before adding it.
- **C06-C2:** The user changes category after seeing the summary. Determine what confirmation/identity/history information must be retained and what can remain transient.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C06-T1 | The feature list confuses request submission with repair booking. |
| C06-T2 | The model has no stable way to identify the same request across a retry. |
| C06-T3 | Conversation text is stored but the service team cannot identify the accountable requester or request state. |
| C06-T4 | Status lookup would reveal another employee's requests. |
| C06-T5 | Unnecessary full-chat retention is included without a stated business purpose. |

No live agent conversation, flow execution or stored-row test is supplied.


SOURCE: client/offerings/service-cases.csv
case_id,test_user,request_key,category,description
SR-01,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-02,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-03,Denied B,REQ-B-001,Delivery,Training parcel has not arrived
SR-04,Allowed A,REQ-A-002,Payroll,Please change my salary


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

Decision step DS06-4: apply C06-C1 status lookup and C06-C2 changed
category after confirmation. Explain feature, business identity,
state/history, access and retention consequences.
Compare including versus deferring status lookup and minimal
confirmation state versus persistent evidence where justified.
Preserve intended-caller authority; do not design more tools by default.
Output label: EX06-P4: Agent feature and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX06-P4: Agent feature and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS06-4, action/data variation choices.

**Do with it:** state what makes a retry the same request and which changed details require a new human confirmation. Decide what status lookup would need to prevent another employee's data exposure.

**Next:** carry selected features, model and open conditions to the pack.

## Phase 5. Validate the feature and data boundaries

### Prompt 5: produce the agent feature/schema decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 06 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 06: Copilot Studio agent, Agent flow
## Feature and schema decision workflow

| Step | Agent-service decision | HVE output | Used before |
|---|---|---|---|
| DS06-1 | What user/service jobs should the agent support? | Needs, authority boundaries and feature questions | Choosing knowledge/actions |
| DS06-2 | Which conversational/action features are needed now? | Prioritized explain/collect/confirm/create/status choices | Designing topics or tools |
| DS06-3 | What is transient conversation versus persistent business data? | Compared request/action/identity/history models | Creating storage or action contracts |
| DS06-4 | How do status lookup and changed details affect the design? | Feature/access/identity/history impact | Adding more actions |
| DS06-5 | Can the design support safe useful journeys? | Feature/schema decision pack | Prototype and acceptance planning |

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
- **RULE-06 / Service:** Only authenticated test users with effective request-store permission may create a service request. Categories are `Repair` and `Delivery`; description is required and at most 500 characters. A human confirms the displayed payload before action. A caller-scoped request key prevents duplicate creation. A denied caller must not write through a privileged shared connection.

SOURCE: client/hve-development/06-agent.md
# Case 06: what should the service agent know and do?

**HVE-DECISIONS-1.0. Fictional client interview/design feedback. RULE-06, approved knowledge and service-cases.csv remain authoritative.**

## Client interview evidence

- **C06-F1 / Mia:** "The agent should explain Repair and Delivery. It may help an employee submit a request, but it cannot promise a booking or compensation."
- **C06-F2 / Employee:** "Before anything is submitted, show the category and my description so I can correct or cancel."
- **C06-F3 / Service team:** "A request needs an accountable requester, reference, category, description and review status."
- **C06-F4 / Operator:** "If a user retries, they should not create a second request. If details changed, we must distinguish a new request from a retry."
- **C06-F5 / Mia:** "We have not asked to retain entire conversations. Do not store passwords, payroll or payment details just because they appear in chat."
- **C06-F6:** Allowed categories are Repair/Delivery, description is required and at most 500 characters, and the intended caller must have permission.

## Technology-specific decision context

Copilot Studio can answer from approved knowledge, collect information and call a bounded business action. Decide which of those capabilities the first service needs, what must remain human-owned and what information is transient conversation state versus persistent business data.

Do not assume that every conversational variable needs a database table or that adding a tool authorizes every user.

## Proposal to inspect

- **C06-P1:** Give the agent booking, compensation and payroll tools to make it look useful.
- **C06-P2:** Persist every chat message and use it as the only request record.
- **C06-P3:** A retry is always a new request; a changed description always overwrites the existing request.

## Change for discussion

- **C06-C1:** Mia asks whether users should see request status later. Decide the feature, identity/data needs and access boundaries before adding it.
- **C06-C2:** The user changes category after seeing the summary. Determine what confirmation/identity/history information must be retained and what can remain transient.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C06-T1 | The feature list confuses request submission with repair booking. |
| C06-T2 | The model has no stable way to identify the same request across a retry. |
| C06-T3 | Conversation text is stored but the service team cannot identify the accountable requester or request state. |
| C06-T4 | Status lookup would reveal another employee's requests. |
| C06-T5 | Unnecessary full-chat retention is included without a stated business purpose. |

No live agent conversation, flow execution or stored-row test is supplied.


SOURCE: client/offerings/service-cases.csv
case_id,test_user,request_key,category,description
SR-01,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-02,Allowed A,REQ-A-001,Repair,Training pump needs inspection
SR-03,Denied B,REQ-B-001,Delivery,Training parcel has not arrived
SR-04,Allowed A,REQ-A-002,Payroll,Please change my salary


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

Decision step DS06-5: review fictional design feedback C06-T1..T5.
Consolidate feature priorities, preferred data model, field/relationship
rationale, knowledge/action boundaries, business rules/access,
retention, rejected alternatives and open owner decisions.
Walk allowed/unsupported, retry, changed-detail and status examples.
Define prototype acceptance and Transactional Service Agent Pilot
scope without claiming an implemented agent or executed action.
Output label: EX06-P5: Agent feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX06-P5: Agent feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS06-5, design acceptance.

**Do with it:** ask a partner to distinguish what the agent knows, proposes, submits and retains. They must explain the data needed for each included feature and one deliberately excluded capability.

**Next:** use the pack to brief conversation/action design and the offering canvas; do not call it a configured agent.

**Gateway 2:** capability, business authority and data are coherent. More tools or more retained conversation data are not automatically better.

## What good looks like

HVE helps choose a bounded useful agent service and proportionate persistent data. The selected schema supports the business process without becoming a transcript archive or an unauthorized action catalogue.

## Recovery and takeaways

If HVE starts editing topic nodes or writing code, ask it to resolve the missing feature/data decision. If it adds retention, require the business purpose. With no live HVE, record a desk walkthrough.

Take home the knowledge/action/data-boundary method as **Transactional Service Agent Pilot** IP. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: which data can stay transient? What makes status lookup a separate feature decision? Why is a request not a booking?

**Optional implementation reference:** [earlier maker material](guided-builds/06-service-agent.md) follows, rather than defines, the approved feature/schema scope.
