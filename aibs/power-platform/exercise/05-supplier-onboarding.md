# 05. Decide a Power Pages supplier service's features and schema

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Arun wants fewer incomplete supplier submissions and clearer review. Use HVE to decide whether self-service is worthwhile, which features it needs and how supplier/contact/application data should relate.**

This is not a portal-configuration or permission-debugging exercise. Keep Power Pages capabilities explicit while choosing the business behavior and information they must support.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-05 interview](client/hve-development/05-suppliers.md), [RULE-05](client/offerings/README.md), [supplier examples](client/offerings/suppliers.csv) and this guide.

Suppliers need submission, correction and status clarity. Procurement needs private notes and acceptance. Corrections must not erase originals. Legal-entity representation and delegated contact access need decisions, not assumptions.

**Technology context:** Power Pages supports external forms/lists and identity-based access; a model-driven app can support relational internal casework; Power Automate can route business events and notifications. Choose these features against value and data/access needs, not because all are available.

## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

## HVE learning objectives

- Derive portal/review features from user evidence.
- Compare contact-owned and organization-associated models.
- Decide how original submissions, revisions and review information persist.
- Treat visibility and data collection as design choices with owners.
- Validate selected features through sample applications.

**Attempt first:** is the supplier, the person submitting and the application necessarily the same record? What would C05-C1 change?

## Expected result

A prioritized feature set and justified logical model for supplier onboarding. Live HVE requires actual requests/artifacts; a desk walkthrough is distinct. No configured portal or permission test is claimed.

## Phase 1. Understand supplier and reviewer needs

### Prompt 1: decide which problems the service should solve

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 05 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 05: Power Pages, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

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
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/05-suppliers.md
# Case 05: decide supplier self-service and review features

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-05 and suppliers.csv remain authoritative.**

## Client interview evidence

- **C05-F1 / Arun:** "Suppliers submit legal name, country and tax reference. Missing information creates repeated email chasing."
- **C05-F2 / Supplier:** "I want to know whether you received it, need a correction or accepted it."
- **C05-F3 / Reviewer:** "I need internal notes and the reason for requesting changes. Suppliers must not see internal discussion."
- **C05-F4 / Arun:** "Submission is not approval. I want to retain the original details when a supplier resubmits."
- **C05-F5 / Supplier:** "A colleague may help us submit, but you need to decide who is allowed to see which applications."
- **C05-F6:** Bank details, ERP vendor creation and purchasing authority are outside the first pilot.

## Technology-specific decision context

Power Pages can provide external submission/status. A model-driven app can support relational internal casework, and Power Automate can notify or route review events.

Decide whether a portal is justified over an emailed form, which self-service/review features are needed and whether supplier organization, contact, application, submission revision and internal/public review information need distinct records.

## Proposal to inspect

- **C05-P1:** The supplier edits the same row that holds the final approval and internal notes.
- **C05-P2:** All contacts from a company automatically share every application.
- **C05-P3:** Resubmission overwrites the only copy; current status is enough review history.

## Change for discussion

- **C05-C1:** Supplier A may submit for two legal entities. Compare direct contact ownership with an organization/access-association model.
- **C05-C2:** Arun asks for bank details later. State the new feature/data/access decisions needed rather than quietly collecting them.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C05-T1 | The model cannot separate public supplier response from internal reviewer notes. |
| C05-T2 | A contact's allowed legal entity/application is not represented. |
| C05-T3 | A correction loses the original tax-reference submission and reviewer reason. |
| C05-T4 | SUP-03's incomplete data is indistinguishable from an accepted supplier. |

No configured portal permissions or deployed validation flow is supplied.


SOURCE: client/offerings/suppliers.csv
application_id,contact_alias,legal_name,country,tax_reference
SUP-01,Supplier A,North Parts Ltd,SE,TRAIN-TAX-001
SUP-02,Supplier B,South Tools Ltd,DK,TRAIN-TAX-002
SUP-03,Supplier A,North Parts Services,SE,
[END STANDALONE CONTEXT]

Decision step DS05-1: use the interview, RULE-05 and supplier examples.
Identify supplier/reviewer jobs, pain points and acceptance decisions.
Propose feature hypotheses with evidence and open questions.
Separate receipt, incomplete submission, review and acceptance.
Do not assume a portal or a fixed schema is already the answer.
Output label: EX05-P1: Supplier-service needs and feature questions.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX05-P1: Supplier-service needs and feature questions` using [output navigation](OUTPUTS.md).

**Decision step:** DS05-1, needs discovery.

**Do with it:** compare the feature hypotheses with the supplier's status/correction needs and procurement's private review. Remove unsupported data collection or approval authority.

**Next:** carry reviewed needs and unanswered ownership questions to scoping.

**Gateway 1:** external submission is not treated as internal acceptance.

## Phase 2. Select Power Pages and review capabilities

### Prompt 2: choose the first self-service journey

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 05 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 05: Power Pages, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

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
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/05-suppliers.md
# Case 05: decide supplier self-service and review features

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-05 and suppliers.csv remain authoritative.**

## Client interview evidence

- **C05-F1 / Arun:** "Suppliers submit legal name, country and tax reference. Missing information creates repeated email chasing."
- **C05-F2 / Supplier:** "I want to know whether you received it, need a correction or accepted it."
- **C05-F3 / Reviewer:** "I need internal notes and the reason for requesting changes. Suppliers must not see internal discussion."
- **C05-F4 / Arun:** "Submission is not approval. I want to retain the original details when a supplier resubmits."
- **C05-F5 / Supplier:** "A colleague may help us submit, but you need to decide who is allowed to see which applications."
- **C05-F6:** Bank details, ERP vendor creation and purchasing authority are outside the first pilot.

## Technology-specific decision context

Power Pages can provide external submission/status. A model-driven app can support relational internal casework, and Power Automate can notify or route review events.

Decide whether a portal is justified over an emailed form, which self-service/review features are needed and whether supplier organization, contact, application, submission revision and internal/public review information need distinct records.

## Proposal to inspect

- **C05-P1:** The supplier edits the same row that holds the final approval and internal notes.
- **C05-P2:** All contacts from a company automatically share every application.
- **C05-P3:** Resubmission overwrites the only copy; current status is enough review history.

## Change for discussion

- **C05-C1:** Supplier A may submit for two legal entities. Compare direct contact ownership with an organization/access-association model.
- **C05-C2:** Arun asks for bank details later. State the new feature/data/access decisions needed rather than quietly collecting them.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C05-T1 | The model cannot separate public supplier response from internal reviewer notes. |
| C05-T2 | A contact's allowed legal entity/application is not represented. |
| C05-T3 | A correction loses the original tax-reference submission and reviewer reason. |
| C05-T4 | SUP-03's incomplete data is indistinguishable from an accepted supplier. |

No configured portal permissions or deployed validation flow is supplied.


SOURCE: client/offerings/suppliers.csv
application_id,contact_alias,legal_name,country,tax_reference
SUP-01,Supplier A,North Parts Ltd,SE,TRAIN-TAX-001
SUP-02,Supplier B,South Tools Ltd,DK,TRAIN-TAX-002
SUP-03,Supplier A,North Parts Services,SE,
[END STANDALONE CONTEXT]

Decision step DS05-2: compare emailed intake with authenticated
self-service submission, missing-data correction, status visibility,
review queue, public response and internal notes.
Give feature IDs, value/source/dependencies and first/later/not-needed
status. Explain Power Pages, model-driven review and notification
capabilities against those needs. Keep bank/ERP features excluded.
Output label: EX05-P2: Supplier feature and capability choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX05-P2: Supplier feature and capability choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS05-2, release and product-capability choice.

**Do with it:** choose the smallest journey that reduces chasing without exposing private review. State why a portal is justified, or what evidence still needs to support it.

**Next:** give selected features and visibility assumptions to the schema request.

## Phase 3. Compare the supplier data models

### Prompt 3: derive records and visibility relationships

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 05 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 05: Power Pages, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

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
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/05-suppliers.md
# Case 05: decide supplier self-service and review features

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-05 and suppliers.csv remain authoritative.**

## Client interview evidence

- **C05-F1 / Arun:** "Suppliers submit legal name, country and tax reference. Missing information creates repeated email chasing."
- **C05-F2 / Supplier:** "I want to know whether you received it, need a correction or accepted it."
- **C05-F3 / Reviewer:** "I need internal notes and the reason for requesting changes. Suppliers must not see internal discussion."
- **C05-F4 / Arun:** "Submission is not approval. I want to retain the original details when a supplier resubmits."
- **C05-F5 / Supplier:** "A colleague may help us submit, but you need to decide who is allowed to see which applications."
- **C05-F6:** Bank details, ERP vendor creation and purchasing authority are outside the first pilot.

## Technology-specific decision context

Power Pages can provide external submission/status. A model-driven app can support relational internal casework, and Power Automate can notify or route review events.

Decide whether a portal is justified over an emailed form, which self-service/review features are needed and whether supplier organization, contact, application, submission revision and internal/public review information need distinct records.

## Proposal to inspect

- **C05-P1:** The supplier edits the same row that holds the final approval and internal notes.
- **C05-P2:** All contacts from a company automatically share every application.
- **C05-P3:** Resubmission overwrites the only copy; current status is enough review history.

## Change for discussion

- **C05-C1:** Supplier A may submit for two legal entities. Compare direct contact ownership with an organization/access-association model.
- **C05-C2:** Arun asks for bank details later. State the new feature/data/access decisions needed rather than quietly collecting them.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C05-T1 | The model cannot separate public supplier response from internal reviewer notes. |
| C05-T2 | A contact's allowed legal entity/application is not represented. |
| C05-T3 | A correction loses the original tax-reference submission and reviewer reason. |
| C05-T4 | SUP-03's incomplete data is indistinguishable from an accepted supplier. |

No configured portal permissions or deployed validation flow is supplied.


SOURCE: client/offerings/suppliers.csv
application_id,contact_alias,legal_name,country,tax_reference
SUP-01,Supplier A,North Parts Ltd,SE,TRAIN-TAX-001
SUP-02,Supplier B,South Tools Ltd,DK,TRAIN-TAX-002
SUP-03,Supplier A,North Parts Services,SE,
[END STANDALONE CONTEXT]

Decision step DS05-3: compare direct contact-owned applications with
supplier-organization/contact associations and separate submission/
revision/review concepts where selected features require them.
Give proposed entities, fields/types/requiredness, cardinality,
ownership, public/private information and feature rationale.
Explain how original details, resubmission and acceptance history
remain distinguishable. Do not assume automatic company-wide access.
Output label: EX05-P3: Supplier schema options and recommendation.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX05-P3: Supplier schema options and recommendation` using [output navigation](OUTPUTS.md).

**Decision step:** DS05-3, relationship/history/access design.

**Do with it:** walk SUP-01 and SUP-03 through original submission, completion request and revised details. Check where internal notes live and which association justifies a contact seeing an application.

**Next:** select a model with reasons and carry its access assumptions into the changes.

## Phase 4. Assess legal-entity and data-expansion impact

### Prompt 4: decide what the changed needs require

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 05 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 05: Power Pages, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

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
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/05-suppliers.md
# Case 05: decide supplier self-service and review features

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-05 and suppliers.csv remain authoritative.**

## Client interview evidence

- **C05-F1 / Arun:** "Suppliers submit legal name, country and tax reference. Missing information creates repeated email chasing."
- **C05-F2 / Supplier:** "I want to know whether you received it, need a correction or accepted it."
- **C05-F3 / Reviewer:** "I need internal notes and the reason for requesting changes. Suppliers must not see internal discussion."
- **C05-F4 / Arun:** "Submission is not approval. I want to retain the original details when a supplier resubmits."
- **C05-F5 / Supplier:** "A colleague may help us submit, but you need to decide who is allowed to see which applications."
- **C05-F6:** Bank details, ERP vendor creation and purchasing authority are outside the first pilot.

## Technology-specific decision context

Power Pages can provide external submission/status. A model-driven app can support relational internal casework, and Power Automate can notify or route review events.

Decide whether a portal is justified over an emailed form, which self-service/review features are needed and whether supplier organization, contact, application, submission revision and internal/public review information need distinct records.

## Proposal to inspect

- **C05-P1:** The supplier edits the same row that holds the final approval and internal notes.
- **C05-P2:** All contacts from a company automatically share every application.
- **C05-P3:** Resubmission overwrites the only copy; current status is enough review history.

## Change for discussion

- **C05-C1:** Supplier A may submit for two legal entities. Compare direct contact ownership with an organization/access-association model.
- **C05-C2:** Arun asks for bank details later. State the new feature/data/access decisions needed rather than quietly collecting them.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C05-T1 | The model cannot separate public supplier response from internal reviewer notes. |
| C05-T2 | A contact's allowed legal entity/application is not represented. |
| C05-T3 | A correction loses the original tax-reference submission and reviewer reason. |
| C05-T4 | SUP-03's incomplete data is indistinguishable from an accepted supplier. |

No configured portal permissions or deployed validation flow is supplied.


SOURCE: client/offerings/suppliers.csv
application_id,contact_alias,legal_name,country,tax_reference
SUP-01,Supplier A,North Parts Ltd,SE,TRAIN-TAX-001
SUP-02,Supplier B,South Tools Ltd,DK,TRAIN-TAX-002
SUP-03,Supplier A,North Parts Services,SE,
[END STANDALONE CONTEXT]

Decision step DS05-4: apply C05-C1's contact representing two legal
entities and C05-C2's future bank-data request.
Show feature, association/cardinality, access, validation/history and
scope consequences. Compare simpler first-release handling with a
managed delegation model. Preserve RULE-05 and identify the new human
data/visibility decisions; do not silently collect bank information.
Output label: EX05-P4: Supplier scope and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX05-P4: Supplier scope and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS05-4, variation and information boundaries.

**Do with it:** explain the difference between a contact and a supplier organization. Decide whether a delegation association is needed now. Record which new information/retention/access decisions block the bank-data feature.

**Next:** pass the selected model and deferred decisions to the design pack.

## Phase 5. Validate the design and package the offer

### Prompt 5: produce the supplier feature/schema decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 05 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 05: Power Pages, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

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
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/05-suppliers.md
# Case 05: decide supplier self-service and review features

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-05 and suppliers.csv remain authoritative.**

## Client interview evidence

- **C05-F1 / Arun:** "Suppliers submit legal name, country and tax reference. Missing information creates repeated email chasing."
- **C05-F2 / Supplier:** "I want to know whether you received it, need a correction or accepted it."
- **C05-F3 / Reviewer:** "I need internal notes and the reason for requesting changes. Suppliers must not see internal discussion."
- **C05-F4 / Arun:** "Submission is not approval. I want to retain the original details when a supplier resubmits."
- **C05-F5 / Supplier:** "A colleague may help us submit, but you need to decide who is allowed to see which applications."
- **C05-F6:** Bank details, ERP vendor creation and purchasing authority are outside the first pilot.

## Technology-specific decision context

Power Pages can provide external submission/status. A model-driven app can support relational internal casework, and Power Automate can notify or route review events.

Decide whether a portal is justified over an emailed form, which self-service/review features are needed and whether supplier organization, contact, application, submission revision and internal/public review information need distinct records.

## Proposal to inspect

- **C05-P1:** The supplier edits the same row that holds the final approval and internal notes.
- **C05-P2:** All contacts from a company automatically share every application.
- **C05-P3:** Resubmission overwrites the only copy; current status is enough review history.

## Change for discussion

- **C05-C1:** Supplier A may submit for two legal entities. Compare direct contact ownership with an organization/access-association model.
- **C05-C2:** Arun asks for bank details later. State the new feature/data/access decisions needed rather than quietly collecting them.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C05-T1 | The model cannot separate public supplier response from internal reviewer notes. |
| C05-T2 | A contact's allowed legal entity/application is not represented. |
| C05-T3 | A correction loses the original tax-reference submission and reviewer reason. |
| C05-T4 | SUP-03's incomplete data is indistinguishable from an accepted supplier. |

No configured portal permissions or deployed validation flow is supplied.


SOURCE: client/offerings/suppliers.csv
application_id,contact_alias,legal_name,country,tax_reference
SUP-01,Supplier A,North Parts Ltd,SE,TRAIN-TAX-001
SUP-02,Supplier B,South Tools Ltd,DK,TRAIN-TAX-002
SUP-03,Supplier A,North Parts Services,SE,
[END STANDALONE CONTEXT]

Decision step DS05-5: review fictional design feedback C05-T1..T4.
Consolidate feature priorities, preferred model, field/relationship
rationale, business states/access rules, rejected alternatives,
sample application/revision walkthroughs and open decisions.
Trace needs to features and features to data. Identify prototype
questions and Supplier Onboarding Accelerator boundaries.
Do not claim configured permissions or a deployed site.
Output label: EX05-P5: Supplier feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX05-P5: Supplier feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS05-5, first-release design acceptance.

**Do with it:** have a partner explain a correction, a private review note and a contact acting for another legal entity using the proposed model. Challenge gaps and unnecessary entities before moving to platform design.

**Next:** retain the reviewed decision pack for lab 10 and the offering canvas, not as proof of a deployed supplier service.

**Gateway 2:** the selected features have explicit data/access consequences and the first-release boundary is defensible.

## What good looks like

HVE helps choose useful self-service/review capabilities and a data model that preserves identities, revisions and private information. It does not simply prescribe portal settings.

## Recovery and takeaways

If HVE gives configuration instructions, ask which unresolved feature/schema choice they answer. If it assumes company-wide visibility, return to the interview and source policy. With no live HVE, record a desk walkthrough.

Take home the supplier/contact/revision decision method as **Supplier Onboarding Accelerator** IP. Use the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: why might one person relate to several suppliers? What must a correction preserve? Which data belongs outside the first release?

**Optional implementation reference:** [earlier maker material](guided-builds/05-supplier-onboarding.md) does not prescribe this exercise's schema.
