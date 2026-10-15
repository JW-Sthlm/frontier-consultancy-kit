# 02. Decide order-intake features and data contracts with HVE

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Lena needs less rekeying and more reliable review. Use HVE to decide what extraction, correction, exception and approval features are needed and what data can support them.**

Power Automate, AI Builder and a model-driven review app provide the technology context. The task is not configuring flow cards, parsing code or debugging an automation.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-02 interview](client/hve-development/02-orders.md), [RULE-02](client/offerings/README.md), [messages](client/offerings/order-messages.csv), [catalog](client/offerings/products.csv) and this guide.

The initial pilot accepts one line per message, preserves ambiguity and requires Lena's review. Raw values, corrections, repeated messages and multiple exception reasons matter.

## Feature and schema decision workflow

| Step | Order-service decision | HVE output | Used before |
|---|---|---|---|
| DS02-1 | What work should be assisted versus decided by people? | Source-backed needs and feature questions | Choosing AI extraction or automation |
| DS02-2 | Which intake/review features are first release? | Prioritized extraction, correction, exception and acceptance choices | Defining the app/flow scope |
| DS02-3 | What source/order/line/review data is needed? | Compared schemas and feature-to-field rationale | Creating tables or flow input/output contracts |
| DS02-4 | How do multi-line orders and correction history change it? | Feature/cardinality/history impact | Extending scope or designing loops/history |
| DS02-5 | Can the design represent the source cases? | Reviewed feature/schema pack and open decisions | Prototype/build planning |

## HVE learning objectives

- Derive features from actual order/reviewer needs.
- Assess AI extraction versus a simpler entry/review service.
- Model ambiguity, line cardinality, raw/corrected values and source identity.
- Make first-release versus future-scope choices explicitly.
- Explain why each proposed field/relationship exists.

**Attempt first:** if MSG-03's quantity is unknown, what must the user be able to do and what must the model be able to remember?

## Expected result

A first-release feature and logical-schema decision pack, not an implemented flow. Keep live HVE requests/artifacts distinct from a desk walkthrough. No extraction accuracy or runtime evidence is supplied.

## Phase 1. Discover the intake and review needs

### Prompt 1: ask what the service must support

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 02 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 02: Power Automate cloud flow, AI Builder, Model-driven app
## Feature and schema decision workflow

| Step | Order-service decision | HVE output | Used before |
|---|---|---|---|
| DS02-1 | What work should be assisted versus decided by people? | Source-backed needs and feature questions | Choosing AI extraction or automation |
| DS02-2 | Which intake/review features are first release? | Prioritized extraction, correction, exception and acceptance choices | Defining the app/flow scope |
| DS02-3 | What source/order/line/review data is needed? | Compared schemas and feature-to-field rationale | Creating tables or flow input/output contracts |
| DS02-4 | How do multi-line orders and correction history change it? | Feature/cardinality/history impact | Extending scope or designing loops/history |
| DS02-5 | Can the design represent the source cases? | Reviewed feature/schema pack and open decisions | Prototype/build planning |

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
- **RULE-02 / Orders:** Customer `C-100` is the only approved training customer. Products must exist and be active; quantities must be positive integers. Unknowns stay missing. The source message ID is the intake uniqueness key. Only Lena may accept a validated draft. Approval does not submit to an ERP.

SOURCE: client/hve-development/02-orders.md
# Case 02: which order-intake features and data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-02 and the source messages/catalog remain authoritative.**

## Client interview evidence

- **C02-F1 / Lena:** "Orders arrive as email text. A reviewer still accepts the draft before any ERP handoff."
- **C02-F2 / Reviewer:** "I need to see the original message next to the candidate values. If I correct a quantity, the original must not disappear."
- **C02-F3 / Lena:** "An unknown SKU or 'some units' needs clarification. Never guess the product or quantity to make it look complete."
- **C02-F4 / Operator:** "A message may be received twice. We must recognize the same source request, including after an interruption."
- **C02-F5 / Reviewer:** "One line can have several problems. I need to know all reasons it needs review, not one generic Invalid flag."
- **C02-F6:** The initial pilot processes one order line per message. Automatic ERP entry is excluded.

## Technology-specific decision context

AI Builder can assist extraction; Power Automate can coordinate validation and review; a model-driven app can expose relational exception work. Decide whether extraction adds value, what correction/review features are essential and what data each feature needs.

The supplied CSV is an example source, not a ready database schema. Consider source message, order/draft, line, validation issue and review/history concepts only when selected features justify them.

## Proposal to inspect

- **C02-P1:** Store only final order values; raw extraction and review history are unnecessary.
- **C02-P2:** Model confidence can accept the order. Missing quantity defaults to one.
- **C02-P3:** Store all product lines in one free-text field and all exception reasons in one status.

## Change for discussion

- **C02-C1:** A customer now sends two products in one message. Decide whether multi-line support is first release or later, and how that affects cardinality.
- **C02-C2:** Lena asks to distinguish "needs customer clarification" from "reviewer corrected" and preserve who changed what.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C02-T1 | MSG-01 can be represented, but two-line C02-C1 cannot be separated for review. |
| C02-T2 | MSG-02 has no place to record an unresolved product match. |
| C02-T3 | MSG-03's missing quantity cannot be represented without a valid default. |
| C02-T4 | Duplicate source identity is not included in the model. |
| C02-T5 | A correction destroys the original candidate value and attribution. |

These are model/feature walkthroughs, not AI Builder accuracy results or actual flow executions.


SOURCE: client/offerings/order-messages.csv
message_id,body
MSG-01,"Order O-100 from customer C-100. Please supply 3 units of SKU-100."
MSG-02,"Order O-101 from customer C-100. Please supply 2 units of SKU-999."
MSG-03,"Order O-102 from customer C-100. Please supply some units of SKU-200."
MSG-04,"Order O-103 from customer C-100. Please supply -1 units of SKU-100."


SOURCE: client/offerings/products.csv
sku,description,active,unit_price_eur
SKU-100,Filter kit,true,40
SKU-200,Service pack,true,75
[END STANDALONE CONTEXT]

Decision step DS02-1: use the interview, messages, catalog and RULE-02.
Identify reviewer/customer/operator jobs, pain points and decisions.
Propose feature hypotheses with source IDs and unanswered questions.
Separate extraction assistance from catalog authority and human review.
Do not infer that AI or automatic ERP entry is necessary.
Output label: EX02-P1: Order-intake needs and feature questions.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX02-P1: Order-intake needs and feature questions` using [output navigation](OUTPUTS.md).

**Decision step:** DS02-1, needs discovery.

**Do with it:** match each feature hypothesis to an interview/source case. Explain why ambiguity and correction are user features, not merely error messages. Reject a default quantity as a substitute for clarification.

**Next:** carry the reviewed needs and unknowns to prompt 2.

**Gateway 1:** the service's job is defined before selecting AI/flow features.

## Phase 2. Select the order-service features

### Prompt 2: decide what to include and exclude

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 02 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 02: Power Automate cloud flow, AI Builder, Model-driven app
## Feature and schema decision workflow

| Step | Order-service decision | HVE output | Used before |
|---|---|---|---|
| DS02-1 | What work should be assisted versus decided by people? | Source-backed needs and feature questions | Choosing AI extraction or automation |
| DS02-2 | Which intake/review features are first release? | Prioritized extraction, correction, exception and acceptance choices | Defining the app/flow scope |
| DS02-3 | What source/order/line/review data is needed? | Compared schemas and feature-to-field rationale | Creating tables or flow input/output contracts |
| DS02-4 | How do multi-line orders and correction history change it? | Feature/cardinality/history impact | Extending scope or designing loops/history |
| DS02-5 | Can the design represent the source cases? | Reviewed feature/schema pack and open decisions | Prototype/build planning |

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
- **RULE-02 / Orders:** Customer `C-100` is the only approved training customer. Products must exist and be active; quantities must be positive integers. Unknowns stay missing. The source message ID is the intake uniqueness key. Only Lena may accept a validated draft. Approval does not submit to an ERP.

SOURCE: client/hve-development/02-orders.md
# Case 02: which order-intake features and data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-02 and the source messages/catalog remain authoritative.**

## Client interview evidence

- **C02-F1 / Lena:** "Orders arrive as email text. A reviewer still accepts the draft before any ERP handoff."
- **C02-F2 / Reviewer:** "I need to see the original message next to the candidate values. If I correct a quantity, the original must not disappear."
- **C02-F3 / Lena:** "An unknown SKU or 'some units' needs clarification. Never guess the product or quantity to make it look complete."
- **C02-F4 / Operator:** "A message may be received twice. We must recognize the same source request, including after an interruption."
- **C02-F5 / Reviewer:** "One line can have several problems. I need to know all reasons it needs review, not one generic Invalid flag."
- **C02-F6:** The initial pilot processes one order line per message. Automatic ERP entry is excluded.

## Technology-specific decision context

AI Builder can assist extraction; Power Automate can coordinate validation and review; a model-driven app can expose relational exception work. Decide whether extraction adds value, what correction/review features are essential and what data each feature needs.

The supplied CSV is an example source, not a ready database schema. Consider source message, order/draft, line, validation issue and review/history concepts only when selected features justify them.

## Proposal to inspect

- **C02-P1:** Store only final order values; raw extraction and review history are unnecessary.
- **C02-P2:** Model confidence can accept the order. Missing quantity defaults to one.
- **C02-P3:** Store all product lines in one free-text field and all exception reasons in one status.

## Change for discussion

- **C02-C1:** A customer now sends two products in one message. Decide whether multi-line support is first release or later, and how that affects cardinality.
- **C02-C2:** Lena asks to distinguish "needs customer clarification" from "reviewer corrected" and preserve who changed what.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C02-T1 | MSG-01 can be represented, but two-line C02-C1 cannot be separated for review. |
| C02-T2 | MSG-02 has no place to record an unresolved product match. |
| C02-T3 | MSG-03's missing quantity cannot be represented without a valid default. |
| C02-T4 | Duplicate source identity is not included in the model. |
| C02-T5 | A correction destroys the original candidate value and attribution. |

These are model/feature walkthroughs, not AI Builder accuracy results or actual flow executions.


SOURCE: client/offerings/order-messages.csv
message_id,body
MSG-01,"Order O-100 from customer C-100. Please supply 3 units of SKU-100."
MSG-02,"Order O-101 from customer C-100. Please supply 2 units of SKU-999."
MSG-03,"Order O-102 from customer C-100. Please supply some units of SKU-200."
MSG-04,"Order O-103 from customer C-100. Please supply -1 units of SKU-100."


SOURCE: client/offerings/products.csv
sku,description,active,unit_price_eur
SKU-100,Filter kit,true,40
SKU-200,Service pack,true,75
[END STANDALONE CONTEXT]

Decision step DS02-2: compare manual candidate entry with AI-assisted
extraction, side-by-side review, correction, exception grouping,
customer clarification, duplicate recognition and acceptance.
Give feature IDs, source/value/dependency and first/later/not-needed
status. Explain AI Builder, Power Automate and model-driven queue
fit without assuming every capability belongs in release one.
Keep ERP submission excluded unless a new human decision changes scope.
Output label: EX02-P2: Order-service feature choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX02-P2: Order-service feature choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS02-2, capability and release scope.

**Do with it:** select the minimum coherent reviewer journey. Record what value extraction must add beyond manual entry and which review/identity features remain essential even if AI is deferred.

**Next:** give only selected features and unresolved assumptions to schema comparison.

## Phase 3. Derive the data model

### Prompt 3: compare source, order and review representations

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 02 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 02: Power Automate cloud flow, AI Builder, Model-driven app
## Feature and schema decision workflow

| Step | Order-service decision | HVE output | Used before |
|---|---|---|---|
| DS02-1 | What work should be assisted versus decided by people? | Source-backed needs and feature questions | Choosing AI extraction or automation |
| DS02-2 | Which intake/review features are first release? | Prioritized extraction, correction, exception and acceptance choices | Defining the app/flow scope |
| DS02-3 | What source/order/line/review data is needed? | Compared schemas and feature-to-field rationale | Creating tables or flow input/output contracts |
| DS02-4 | How do multi-line orders and correction history change it? | Feature/cardinality/history impact | Extending scope or designing loops/history |
| DS02-5 | Can the design represent the source cases? | Reviewed feature/schema pack and open decisions | Prototype/build planning |

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
- **RULE-02 / Orders:** Customer `C-100` is the only approved training customer. Products must exist and be active; quantities must be positive integers. Unknowns stay missing. The source message ID is the intake uniqueness key. Only Lena may accept a validated draft. Approval does not submit to an ERP.

SOURCE: client/hve-development/02-orders.md
# Case 02: which order-intake features and data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-02 and the source messages/catalog remain authoritative.**

## Client interview evidence

- **C02-F1 / Lena:** "Orders arrive as email text. A reviewer still accepts the draft before any ERP handoff."
- **C02-F2 / Reviewer:** "I need to see the original message next to the candidate values. If I correct a quantity, the original must not disappear."
- **C02-F3 / Lena:** "An unknown SKU or 'some units' needs clarification. Never guess the product or quantity to make it look complete."
- **C02-F4 / Operator:** "A message may be received twice. We must recognize the same source request, including after an interruption."
- **C02-F5 / Reviewer:** "One line can have several problems. I need to know all reasons it needs review, not one generic Invalid flag."
- **C02-F6:** The initial pilot processes one order line per message. Automatic ERP entry is excluded.

## Technology-specific decision context

AI Builder can assist extraction; Power Automate can coordinate validation and review; a model-driven app can expose relational exception work. Decide whether extraction adds value, what correction/review features are essential and what data each feature needs.

The supplied CSV is an example source, not a ready database schema. Consider source message, order/draft, line, validation issue and review/history concepts only when selected features justify them.

## Proposal to inspect

- **C02-P1:** Store only final order values; raw extraction and review history are unnecessary.
- **C02-P2:** Model confidence can accept the order. Missing quantity defaults to one.
- **C02-P3:** Store all product lines in one free-text field and all exception reasons in one status.

## Change for discussion

- **C02-C1:** A customer now sends two products in one message. Decide whether multi-line support is first release or later, and how that affects cardinality.
- **C02-C2:** Lena asks to distinguish "needs customer clarification" from "reviewer corrected" and preserve who changed what.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C02-T1 | MSG-01 can be represented, but two-line C02-C1 cannot be separated for review. |
| C02-T2 | MSG-02 has no place to record an unresolved product match. |
| C02-T3 | MSG-03's missing quantity cannot be represented without a valid default. |
| C02-T4 | Duplicate source identity is not included in the model. |
| C02-T5 | A correction destroys the original candidate value and attribution. |

These are model/feature walkthroughs, not AI Builder accuracy results or actual flow executions.


SOURCE: client/offerings/order-messages.csv
message_id,body
MSG-01,"Order O-100 from customer C-100. Please supply 3 units of SKU-100."
MSG-02,"Order O-101 from customer C-100. Please supply 2 units of SKU-999."
MSG-03,"Order O-102 from customer C-100. Please supply some units of SKU-200."
MSG-04,"Order O-103 from customer C-100. Please supply -1 units of SKU-100."


SOURCE: client/offerings/products.csv
sku,description,active,unit_price_eur
SKU-100,Filter kit,true,40
SKU-200,Service pack,true,75
[END STANDALONE CONTEXT]

Decision step DS02-3: compare a single intake record with related
source-message, order/draft, line, validation issue and review/history
concepts where selected features need them.
Specify proposed entities, fields/types/requiredness, source identity,
cardinalities, ownership and lifecycle, linked to feature IDs.
Explain how missing quantity/product match, several issues and raw/
corrected values are represented. Do not add fields just because the
technology supports them or treat the CSV as the database schema.
Output label: EX02-P3: Order schema options and recommendation.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX02-P3: Order schema options and recommendation` using [output navigation](OUTPUTS.md).

**Decision step:** DS02-3, feature-to-data design.

**Do with it:** walk MSG-02/03/04 and a repeated MSG-01 through the candidate model. Identify the data that distinguishes ambiguity, invalidity, correction and duplicate source. Challenge overwritten originals and unexplained extra entities.

**Next:** record the preferred option and its limits for the scope change.

## Phase 4. Evaluate multi-line and review-history impact

### Prompt 4: decide what changes now versus later

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 02 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 02: Power Automate cloud flow, AI Builder, Model-driven app
## Feature and schema decision workflow

| Step | Order-service decision | HVE output | Used before |
|---|---|---|---|
| DS02-1 | What work should be assisted versus decided by people? | Source-backed needs and feature questions | Choosing AI extraction or automation |
| DS02-2 | Which intake/review features are first release? | Prioritized extraction, correction, exception and acceptance choices | Defining the app/flow scope |
| DS02-3 | What source/order/line/review data is needed? | Compared schemas and feature-to-field rationale | Creating tables or flow input/output contracts |
| DS02-4 | How do multi-line orders and correction history change it? | Feature/cardinality/history impact | Extending scope or designing loops/history |
| DS02-5 | Can the design represent the source cases? | Reviewed feature/schema pack and open decisions | Prototype/build planning |

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
- **RULE-02 / Orders:** Customer `C-100` is the only approved training customer. Products must exist and be active; quantities must be positive integers. Unknowns stay missing. The source message ID is the intake uniqueness key. Only Lena may accept a validated draft. Approval does not submit to an ERP.

SOURCE: client/hve-development/02-orders.md
# Case 02: which order-intake features and data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-02 and the source messages/catalog remain authoritative.**

## Client interview evidence

- **C02-F1 / Lena:** "Orders arrive as email text. A reviewer still accepts the draft before any ERP handoff."
- **C02-F2 / Reviewer:** "I need to see the original message next to the candidate values. If I correct a quantity, the original must not disappear."
- **C02-F3 / Lena:** "An unknown SKU or 'some units' needs clarification. Never guess the product or quantity to make it look complete."
- **C02-F4 / Operator:** "A message may be received twice. We must recognize the same source request, including after an interruption."
- **C02-F5 / Reviewer:** "One line can have several problems. I need to know all reasons it needs review, not one generic Invalid flag."
- **C02-F6:** The initial pilot processes one order line per message. Automatic ERP entry is excluded.

## Technology-specific decision context

AI Builder can assist extraction; Power Automate can coordinate validation and review; a model-driven app can expose relational exception work. Decide whether extraction adds value, what correction/review features are essential and what data each feature needs.

The supplied CSV is an example source, not a ready database schema. Consider source message, order/draft, line, validation issue and review/history concepts only when selected features justify them.

## Proposal to inspect

- **C02-P1:** Store only final order values; raw extraction and review history are unnecessary.
- **C02-P2:** Model confidence can accept the order. Missing quantity defaults to one.
- **C02-P3:** Store all product lines in one free-text field and all exception reasons in one status.

## Change for discussion

- **C02-C1:** A customer now sends two products in one message. Decide whether multi-line support is first release or later, and how that affects cardinality.
- **C02-C2:** Lena asks to distinguish "needs customer clarification" from "reviewer corrected" and preserve who changed what.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C02-T1 | MSG-01 can be represented, but two-line C02-C1 cannot be separated for review. |
| C02-T2 | MSG-02 has no place to record an unresolved product match. |
| C02-T3 | MSG-03's missing quantity cannot be represented without a valid default. |
| C02-T4 | Duplicate source identity is not included in the model. |
| C02-T5 | A correction destroys the original candidate value and attribution. |

These are model/feature walkthroughs, not AI Builder accuracy results or actual flow executions.


SOURCE: client/offerings/order-messages.csv
message_id,body
MSG-01,"Order O-100 from customer C-100. Please supply 3 units of SKU-100."
MSG-02,"Order O-101 from customer C-100. Please supply 2 units of SKU-999."
MSG-03,"Order O-102 from customer C-100. Please supply some units of SKU-200."
MSG-04,"Order O-103 from customer C-100. Please supply -1 units of SKU-100."


SOURCE: client/offerings/products.csv
sku,description,active,unit_price_eur
SKU-100,Filter kit,true,40
SKU-200,Service pack,true,75
[END STANDALONE CONTEXT]

Decision step DS02-4: apply C02-C1's two-line message and C02-C2's
clarification/correction history. Show feature, field, relationship,
state and ownership consequences. Compare first-release support
with deferral and a sensible extension path. Explain order-to-line
and issue/review cardinality without requiring an oversized model.
Identify the human decision still needed.
Output label: EX02-P4: Order feature and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX02-P4: Order feature and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS02-4, scope/cardinality/history choice.

**Do with it:** decide whether the release supports two lines or explicitly holds them. Explain what that choice changes in the model and reviewer experience. Keep one accountable acceptance decision, not model confidence.

**Next:** pass the selected scope and schema conditions into the decision pack.

## Phase 5. Validate the proposed design

### Prompt 5: produce the order feature/schema decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 02 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 02: Power Automate cloud flow, AI Builder, Model-driven app
## Feature and schema decision workflow

| Step | Order-service decision | HVE output | Used before |
|---|---|---|---|
| DS02-1 | What work should be assisted versus decided by people? | Source-backed needs and feature questions | Choosing AI extraction or automation |
| DS02-2 | Which intake/review features are first release? | Prioritized extraction, correction, exception and acceptance choices | Defining the app/flow scope |
| DS02-3 | What source/order/line/review data is needed? | Compared schemas and feature-to-field rationale | Creating tables or flow input/output contracts |
| DS02-4 | How do multi-line orders and correction history change it? | Feature/cardinality/history impact | Extending scope or designing loops/history |
| DS02-5 | Can the design represent the source cases? | Reviewed feature/schema pack and open decisions | Prototype/build planning |

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
- **RULE-02 / Orders:** Customer `C-100` is the only approved training customer. Products must exist and be active; quantities must be positive integers. Unknowns stay missing. The source message ID is the intake uniqueness key. Only Lena may accept a validated draft. Approval does not submit to an ERP.

SOURCE: client/hve-development/02-orders.md
# Case 02: which order-intake features and data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-02 and the source messages/catalog remain authoritative.**

## Client interview evidence

- **C02-F1 / Lena:** "Orders arrive as email text. A reviewer still accepts the draft before any ERP handoff."
- **C02-F2 / Reviewer:** "I need to see the original message next to the candidate values. If I correct a quantity, the original must not disappear."
- **C02-F3 / Lena:** "An unknown SKU or 'some units' needs clarification. Never guess the product or quantity to make it look complete."
- **C02-F4 / Operator:** "A message may be received twice. We must recognize the same source request, including after an interruption."
- **C02-F5 / Reviewer:** "One line can have several problems. I need to know all reasons it needs review, not one generic Invalid flag."
- **C02-F6:** The initial pilot processes one order line per message. Automatic ERP entry is excluded.

## Technology-specific decision context

AI Builder can assist extraction; Power Automate can coordinate validation and review; a model-driven app can expose relational exception work. Decide whether extraction adds value, what correction/review features are essential and what data each feature needs.

The supplied CSV is an example source, not a ready database schema. Consider source message, order/draft, line, validation issue and review/history concepts only when selected features justify them.

## Proposal to inspect

- **C02-P1:** Store only final order values; raw extraction and review history are unnecessary.
- **C02-P2:** Model confidence can accept the order. Missing quantity defaults to one.
- **C02-P3:** Store all product lines in one free-text field and all exception reasons in one status.

## Change for discussion

- **C02-C1:** A customer now sends two products in one message. Decide whether multi-line support is first release or later, and how that affects cardinality.
- **C02-C2:** Lena asks to distinguish "needs customer clarification" from "reviewer corrected" and preserve who changed what.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C02-T1 | MSG-01 can be represented, but two-line C02-C1 cannot be separated for review. |
| C02-T2 | MSG-02 has no place to record an unresolved product match. |
| C02-T3 | MSG-03's missing quantity cannot be represented without a valid default. |
| C02-T4 | Duplicate source identity is not included in the model. |
| C02-T5 | A correction destroys the original candidate value and attribution. |

These are model/feature walkthroughs, not AI Builder accuracy results or actual flow executions.


SOURCE: client/offerings/order-messages.csv
message_id,body
MSG-01,"Order O-100 from customer C-100. Please supply 3 units of SKU-100."
MSG-02,"Order O-101 from customer C-100. Please supply 2 units of SKU-999."
MSG-03,"Order O-102 from customer C-100. Please supply some units of SKU-200."
MSG-04,"Order O-103 from customer C-100. Please supply -1 units of SKU-100."


SOURCE: client/offerings/products.csv
sku,description,active,unit_price_eur
SKU-100,Filter kit,true,40
SKU-200,Service pack,true,75
[END STANDALONE CONTEXT]

Decision step DS02-5: review fictional design feedback C02-T1..T5.
Consolidate prioritized features, preferred schema, field/relationship
rationale, business rules/access, rejected alternatives and open
decisions. Walk the message examples and multi-line working case.
Provide need-to-feature-to-data trace and prototype acceptance
scenarios for the Order Intake Accelerator. No implemented-flow claim.
Output label: EX02-P5: Order feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX02-P5: Order feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS02-5, design validation.

**Do with it:** ask a partner to explain how a missing quantity is stored, clarified and accepted, and how two problems on one line remain visible. Revise any schema that cannot represent the chosen feature set.

**Next:** use the agreed pack to brief a prototype/build and the offering canvas, not to claim ERP entry or an executed automation.

**Gateway 2:** features and data agree; unresolved values and review history are not erased for convenience.

## What good looks like

HVE helps choose the necessary intake/review capabilities and a proportionate data model. Every data element has a selected-feature purpose and every included feature has a realistic example.

## Recovery and takeaways

If HVE jumps to action configuration or code, request the missing feature/data decision first. If it prescribes a large schema, ask which current need justifies each entity. With no live HVE, record a desk walkthrough.

Take home the ambiguity, correction and cardinality decision method as **Order Intake Accelerator** IP. Use the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: what made a separate line or review-history concept necessary? What could stay simpler in release one? Explain the evidence, not a parser expression.

**Optional implementation reference:** [earlier maker material](guided-builds/02-order-intake.md) follows a reviewed scope/model and is not the core answer.
