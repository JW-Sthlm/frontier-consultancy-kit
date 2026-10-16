# 04. Decide a canvas inspection app's features and schema with HVE

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Eva needs a field-inspection solution. Use HVE Squad to decide what belongs in the first release and what information/relationships are necessary to support it. Do not start from a predetermined app or schema.**

This is requirements, feature selection and data modelling. Canvas capabilities matter to the choices; formulas, control-property edits and code debugging are not the exercise.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [the client interview and candidate designs](client/hve-development/04-field.md), [RULE-04](client/offerings/README.md), [sample observations](client/offerings/inspections.csv) and this guide.

The evidence includes repeated visits, zero or many findings, changing checklist wording, remediation after capture, poor connectivity and a possible photo feature. The pilot is deliberately smaller than the long-term ambition.

**Technology context:** a canvas app is suited to a task-oriented mobile experience. Offline capture and device media are capabilities to evaluate, not default requirements. A relational Dataverse model may support finding ownership and history; an existing list-based solution may be simpler but needs its limitations examined. Actual licensing/player/support facts remain to be checked.

## Feature and schema decision workflow

| Step | Canvas-development decision | HVE output | Used before |
|---|---|---|---|
| DS04-1 | Which inspector/supervisor needs are real? | Evidence-linked feature hypotheses and unanswered questions | Choosing screens, data or automation |
| DS04-2 | Which canvas/mobile capabilities belong in release one? | Included/deferred/rejected feature choices and technology implications | Committing to offline, photos, checklists or remediation features |
| DS04-3 | What data structure supports those features? | Compared schema options, entity/field rationale and cardinalities | Creating tables, relationships or data sources |
| DS04-4 | What changes when requirements grow? | Feature/schema impact and explicit first-release tradeoffs | Adding template, collaboration or evidence complexity |
| DS04-5 | Can the proposed design explain realistic visits? | Reviewed feature/schema decision pack and open decisions | Prototype/build planning and partner offering |

## HVE learning objectives

- Turn interview evidence into feature choices rather than an unfiltered wish list.
- Assess canvas-specific offline, device-capture and task-experience capabilities.
- Derive entities/fields/relationships from selected features.
- Compare a minimal model with more reusable/versioned alternatives.
- Validate the design with sample records and explain its business rationale.

**Attempt first:** one visit has no finding and another has twelve. What feature must the app support, and why would Defect 1 through Defect 10 columns be a poor starting point?

## Expected result

A decision-ready first-release feature list and logical schema, with a trace from client evidence to feature to data requirement. Schema names are proposals to justify, not the answer supplied by the course.

Live HVE means actual Cowork requests and returned artifacts. A desk walkthrough must be labeled separately. No app implementation or performance result is claimed.

## Phase 1. Understand needs before selecting features

### Prompt 1: derive the feature questions from the interview

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 04 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 04: Canvas app, Dataverse mobile offline
## Feature and schema decision workflow

| Step | Canvas-development decision | HVE output | Used before |
|---|---|---|---|
| DS04-1 | Which inspector/supervisor needs are real? | Evidence-linked feature hypotheses and unanswered questions | Choosing screens, data or automation |
| DS04-2 | Which canvas/mobile capabilities belong in release one? | Included/deferred/rejected feature choices and technology implications | Committing to offline, photos, checklists or remediation features |
| DS04-3 | What data structure supports those features? | Compared schema options, entity/field rationale and cardinalities | Creating tables, relationships or data sources |
| DS04-4 | What changes when requirements grow? | Feature/schema impact and explicit first-release tradeoffs | Adding template, collaboration or evidence complexity |
| DS04-5 | Can the proposed design explain realistic visits? | Reviewed feature/schema decision pack and open decisions | Prototype/build planning and partner offering |

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
- **RULE-04 / Field:** Findings require an owner, severity and observation. High severity requires supervisor disposition before closure. An inspection cannot close with an open finding. Offline edits must synchronize and be checked in Dataverse before closure is claimed.

SOURCE: client/hve-development/04-field.md
# Case 04: decide the inspection app's features and schema

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. No prescribed canvas controls, formulas or database blueprint.**

## Client interview evidence

- **C04-F1 / Eva:** "A visit may have no defect, or several. The app must not limit us to a fixed number of findings."
- **C04-F2 / Inspector:** "We return to the same site and equipment. We need to know what was observed on each visit, not overwrite last month's inspection."
- **C04-F3 / Eva:** "Checklist wording changes. We must still understand the questions and answers from a completed inspection."
- **C04-F4 / Supervisor:** "A finding may stay open after the inspection. Someone owns remediation and records follow-up. High severity requires my disposition before closure."
- **C04-F5 / Inspector:** "Connectivity is poor at some sites. A capture solution that requires continuous network access will not work for the intended field use."
- **C04-F6 / Eva:** "Photos could help a dispute, but we have not agreed retention, access or whether every finding needs one."
- **C04-F7 / Sponsor:** "The pilot covers two sites and one inspector per visit. AI scoring, inventory integration and travel optimization are not required."
- **C04-F8:** inspections.csv provides sample observations, not a normalized schema. INS-03 communicates a visit with no finding.

## Technology-specific decision context

A canvas app supports a task-oriented mobile experience and device capture. Supported Dataverse-backed mobile offline is a capability to assess against licensing/player/data constraints, not a reason to invent proven support.

Decide whether the first release needs structured checklist responses, reusable/versioned templates, photo evidence, remediation history and offline capture. Features drive the entities, fields, relationships and access/lifecycle rules.

## Proposal to inspect

- **C04-P1:** One Inspection row with Defect 1 through Defect 10 columns will represent every visit.
- **C04-P2:** Edit the current checklist in place; old responses do not need original question wording.
- **C04-P3:** Use one status that becomes Closed when capture is complete, even if remediation is pending.
- **C04-P4:** Build a configurable template designer, photo library and AI risk score before trying the first inspection.

## Change for discussion

- **C04-C1:** Next quarter, equipment types may use different checklists. Compare preserving a simple version/snapshot now with a full template/question model.
- **C04-C2:** Two people may help remediate a finding, but one person remains accountable. Decide whether that feature is required now and what association/history it would need.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C04-T1 | A visit with zero findings or more than ten cannot be represented consistently. |
| C04-T2 | After checklist editing, a completed inspection cannot explain the original question wording. |
| C04-T3 | Closing inspection capture also erases the distinction between open remediation and supervisor acceptance. |
| C04-T4 | The proposed photo feature has no Finding association, access or retention decision. |
| C04-T5 | The first-release scope includes AI scoring despite C04-F7 and no supporting user need. |

These are walkthroughs of candidate features/models, not app runtime tests. Derive and justify your own model; more tables are not automatically better.


SOURCE: client/offerings/inspections.csv
inspection_id,site,inspector,severity,observation
INS-01,North depot,Inspector A,Low,Label damaged on storage bin
INS-02,South depot,Inspector B,High,Access route obstructed
INS-03,North depot,Inspector A,Low,Inspection completed with no finding
[END STANDALONE CONTEXT]

Decision step DS04-1: read the case-04 interview, RULE-04 and examples.
Identify inspector, supervisor and service-owner jobs and pain points.
For each propose a feature hypothesis, its source ID, intended outcome
and a question that could change whether it is needed.
Separate confirmed needs, future requests and assumptions.
Do not prescribe tables, screens or implementation details yet.
Output label: EX04-P1: Inspection needs and feature hypotheses.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX04-P1: Inspection needs and feature hypotheses` using the [output guide](OUTPUTS.md).

**Decision step:** DS04-1, evidence-to-feature discovery.

**Do with it:** match every proposed feature to an interview quote or policy. Mark unsupported AI scoring as out of scope. Identify which missing photo/access/retention fact needs Eva's answer rather than HVE's guess.

**Next:** tell Cowork your source-backed corrections and carry the actual artifact reference into prompt 2.

**Gateway 1:** each feature hypothesis has a user need; the feature list is not a list of everything a canvas app can do.

## Phase 2. Select first-release features and capabilities

### Prompt 2: choose what the canvas app must support

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 04 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 04: Canvas app, Dataverse mobile offline
## Feature and schema decision workflow

| Step | Canvas-development decision | HVE output | Used before |
|---|---|---|---|
| DS04-1 | Which inspector/supervisor needs are real? | Evidence-linked feature hypotheses and unanswered questions | Choosing screens, data or automation |
| DS04-2 | Which canvas/mobile capabilities belong in release one? | Included/deferred/rejected feature choices and technology implications | Committing to offline, photos, checklists or remediation features |
| DS04-3 | What data structure supports those features? | Compared schema options, entity/field rationale and cardinalities | Creating tables, relationships or data sources |
| DS04-4 | What changes when requirements grow? | Feature/schema impact and explicit first-release tradeoffs | Adding template, collaboration or evidence complexity |
| DS04-5 | Can the proposed design explain realistic visits? | Reviewed feature/schema decision pack and open decisions | Prototype/build planning and partner offering |

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
- **RULE-04 / Field:** Findings require an owner, severity and observation. High severity requires supervisor disposition before closure. An inspection cannot close with an open finding. Offline edits must synchronize and be checked in Dataverse before closure is claimed.

SOURCE: client/hve-development/04-field.md
# Case 04: decide the inspection app's features and schema

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. No prescribed canvas controls, formulas or database blueprint.**

## Client interview evidence

- **C04-F1 / Eva:** "A visit may have no defect, or several. The app must not limit us to a fixed number of findings."
- **C04-F2 / Inspector:** "We return to the same site and equipment. We need to know what was observed on each visit, not overwrite last month's inspection."
- **C04-F3 / Eva:** "Checklist wording changes. We must still understand the questions and answers from a completed inspection."
- **C04-F4 / Supervisor:** "A finding may stay open after the inspection. Someone owns remediation and records follow-up. High severity requires my disposition before closure."
- **C04-F5 / Inspector:** "Connectivity is poor at some sites. A capture solution that requires continuous network access will not work for the intended field use."
- **C04-F6 / Eva:** "Photos could help a dispute, but we have not agreed retention, access or whether every finding needs one."
- **C04-F7 / Sponsor:** "The pilot covers two sites and one inspector per visit. AI scoring, inventory integration and travel optimization are not required."
- **C04-F8:** inspections.csv provides sample observations, not a normalized schema. INS-03 communicates a visit with no finding.

## Technology-specific decision context

A canvas app supports a task-oriented mobile experience and device capture. Supported Dataverse-backed mobile offline is a capability to assess against licensing/player/data constraints, not a reason to invent proven support.

Decide whether the first release needs structured checklist responses, reusable/versioned templates, photo evidence, remediation history and offline capture. Features drive the entities, fields, relationships and access/lifecycle rules.

## Proposal to inspect

- **C04-P1:** One Inspection row with Defect 1 through Defect 10 columns will represent every visit.
- **C04-P2:** Edit the current checklist in place; old responses do not need original question wording.
- **C04-P3:** Use one status that becomes Closed when capture is complete, even if remediation is pending.
- **C04-P4:** Build a configurable template designer, photo library and AI risk score before trying the first inspection.

## Change for discussion

- **C04-C1:** Next quarter, equipment types may use different checklists. Compare preserving a simple version/snapshot now with a full template/question model.
- **C04-C2:** Two people may help remediate a finding, but one person remains accountable. Decide whether that feature is required now and what association/history it would need.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C04-T1 | A visit with zero findings or more than ten cannot be represented consistently. |
| C04-T2 | After checklist editing, a completed inspection cannot explain the original question wording. |
| C04-T3 | Closing inspection capture also erases the distinction between open remediation and supervisor acceptance. |
| C04-T4 | The proposed photo feature has no Finding association, access or retention decision. |
| C04-T5 | The first-release scope includes AI scoring despite C04-F7 and no supporting user need. |

These are walkthroughs of candidate features/models, not app runtime tests. Derive and justify your own model; more tables are not automatically better.


SOURCE: client/offerings/inspections.csv
inspection_id,site,inspector,severity,observation
INS-01,North depot,Inspector A,Low,Label damaged on storage bin
INS-02,South depot,Inspector B,High,Access route obstructed
INS-03,North depot,Inspector A,Low,Inspection completed with no finding
[END STANDALONE CONTEXT]

Decision step DS04-2: use the reviewed needs to compare capture of
inspection details, structured checklist responses, multiple findings,
photo evidence, offline use and remediation follow-up.
Classify each as first release, later, not needed or needs validation,
with value, dependency and source-backed reason.
Explain canvas/mobile and Dataverse versus simpler-list implications.
Do not assume every capability is licensed/supported or include a
template designer merely because future checklists may vary.
Output label: EX04-P2: Canvas feature and capability choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX04-P2: Canvas feature and capability choices` using the [output guide](OUTPUTS.md).

**Decision step:** DS04-2, product-specific feature scoping.

**Do with it:** select a first-release feature set with the workshop owner. Explain why offline capture is different from optional photo evidence. Record the unsupported capability/licensing question and which decision depends on it.

**Next:** pass only the selected features and pending assumptions to schema design. Do not let deferred features silently become required tables.

## Phase 3. Derive and compare the schema

### Prompt 3: explain why each entity and field is needed

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 04 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 04: Canvas app, Dataverse mobile offline
## Feature and schema decision workflow

| Step | Canvas-development decision | HVE output | Used before |
|---|---|---|---|
| DS04-1 | Which inspector/supervisor needs are real? | Evidence-linked feature hypotheses and unanswered questions | Choosing screens, data or automation |
| DS04-2 | Which canvas/mobile capabilities belong in release one? | Included/deferred/rejected feature choices and technology implications | Committing to offline, photos, checklists or remediation features |
| DS04-3 | What data structure supports those features? | Compared schema options, entity/field rationale and cardinalities | Creating tables, relationships or data sources |
| DS04-4 | What changes when requirements grow? | Feature/schema impact and explicit first-release tradeoffs | Adding template, collaboration or evidence complexity |
| DS04-5 | Can the proposed design explain realistic visits? | Reviewed feature/schema decision pack and open decisions | Prototype/build planning and partner offering |

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
- **RULE-04 / Field:** Findings require an owner, severity and observation. High severity requires supervisor disposition before closure. An inspection cannot close with an open finding. Offline edits must synchronize and be checked in Dataverse before closure is claimed.

SOURCE: client/hve-development/04-field.md
# Case 04: decide the inspection app's features and schema

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. No prescribed canvas controls, formulas or database blueprint.**

## Client interview evidence

- **C04-F1 / Eva:** "A visit may have no defect, or several. The app must not limit us to a fixed number of findings."
- **C04-F2 / Inspector:** "We return to the same site and equipment. We need to know what was observed on each visit, not overwrite last month's inspection."
- **C04-F3 / Eva:** "Checklist wording changes. We must still understand the questions and answers from a completed inspection."
- **C04-F4 / Supervisor:** "A finding may stay open after the inspection. Someone owns remediation and records follow-up. High severity requires my disposition before closure."
- **C04-F5 / Inspector:** "Connectivity is poor at some sites. A capture solution that requires continuous network access will not work for the intended field use."
- **C04-F6 / Eva:** "Photos could help a dispute, but we have not agreed retention, access or whether every finding needs one."
- **C04-F7 / Sponsor:** "The pilot covers two sites and one inspector per visit. AI scoring, inventory integration and travel optimization are not required."
- **C04-F8:** inspections.csv provides sample observations, not a normalized schema. INS-03 communicates a visit with no finding.

## Technology-specific decision context

A canvas app supports a task-oriented mobile experience and device capture. Supported Dataverse-backed mobile offline is a capability to assess against licensing/player/data constraints, not a reason to invent proven support.

Decide whether the first release needs structured checklist responses, reusable/versioned templates, photo evidence, remediation history and offline capture. Features drive the entities, fields, relationships and access/lifecycle rules.

## Proposal to inspect

- **C04-P1:** One Inspection row with Defect 1 through Defect 10 columns will represent every visit.
- **C04-P2:** Edit the current checklist in place; old responses do not need original question wording.
- **C04-P3:** Use one status that becomes Closed when capture is complete, even if remediation is pending.
- **C04-P4:** Build a configurable template designer, photo library and AI risk score before trying the first inspection.

## Change for discussion

- **C04-C1:** Next quarter, equipment types may use different checklists. Compare preserving a simple version/snapshot now with a full template/question model.
- **C04-C2:** Two people may help remediate a finding, but one person remains accountable. Decide whether that feature is required now and what association/history it would need.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C04-T1 | A visit with zero findings or more than ten cannot be represented consistently. |
| C04-T2 | After checklist editing, a completed inspection cannot explain the original question wording. |
| C04-T3 | Closing inspection capture also erases the distinction between open remediation and supervisor acceptance. |
| C04-T4 | The proposed photo feature has no Finding association, access or retention decision. |
| C04-T5 | The first-release scope includes AI scoring despite C04-F7 and no supporting user need. |

These are walkthroughs of candidate features/models, not app runtime tests. Derive and justify your own model; more tables are not automatically better.


SOURCE: client/offerings/inspections.csv
inspection_id,site,inspector,severity,observation
INS-01,North depot,Inspector A,Low,Label damaged on storage bin
INS-02,South depot,Inspector B,High,Access route obstructed
INS-03,North depot,Inspector A,Low,Inspection completed with no finding
[END STANDALONE CONTEXT]

Decision step DS04-3: derive a logical data model from the selected
features. Compare a flat inspection record, related inspection/finding
records and any checklist-response/version or evidence/history
concepts the selected scope actually needs.
For each proposed entity give purpose, key fields/types, required
versus optional data, ownership, cardinality and supporting feature IDs.
Explain how zero/many findings, repeated visits and original checklist
wording are represented. Compare snapshot and reference/version options.
Do not give a predetermined table count or add unsupported future data.
Output label: EX04-P3: Inspection schema options and recommendation.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX04-P3: Inspection schema options and recommendation` using the [output guide](OUTPUTS.md).

**Decision step:** DS04-3, feature-to-schema modelling.

**Do with it:** draw the proposed relationships and walk INS-03 with zero findings, then a derived visit with twelve. For each entity/field ask which selected feature needs it. Challenge orphan photo links, overwritten visit history and a full template subsystem with no first-release need.

**Next:** record the preferred model and rejected alternative with reasons. Carry both references into the change-impact request.

## Phase 4. Test the design against changing requirements

### Prompt 4: decide whether the new complexity is justified

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 04 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 04: Canvas app, Dataverse mobile offline
## Feature and schema decision workflow

| Step | Canvas-development decision | HVE output | Used before |
|---|---|---|---|
| DS04-1 | Which inspector/supervisor needs are real? | Evidence-linked feature hypotheses and unanswered questions | Choosing screens, data or automation |
| DS04-2 | Which canvas/mobile capabilities belong in release one? | Included/deferred/rejected feature choices and technology implications | Committing to offline, photos, checklists or remediation features |
| DS04-3 | What data structure supports those features? | Compared schema options, entity/field rationale and cardinalities | Creating tables, relationships or data sources |
| DS04-4 | What changes when requirements grow? | Feature/schema impact and explicit first-release tradeoffs | Adding template, collaboration or evidence complexity |
| DS04-5 | Can the proposed design explain realistic visits? | Reviewed feature/schema decision pack and open decisions | Prototype/build planning and partner offering |

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
- **RULE-04 / Field:** Findings require an owner, severity and observation. High severity requires supervisor disposition before closure. An inspection cannot close with an open finding. Offline edits must synchronize and be checked in Dataverse before closure is claimed.

SOURCE: client/hve-development/04-field.md
# Case 04: decide the inspection app's features and schema

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. No prescribed canvas controls, formulas or database blueprint.**

## Client interview evidence

- **C04-F1 / Eva:** "A visit may have no defect, or several. The app must not limit us to a fixed number of findings."
- **C04-F2 / Inspector:** "We return to the same site and equipment. We need to know what was observed on each visit, not overwrite last month's inspection."
- **C04-F3 / Eva:** "Checklist wording changes. We must still understand the questions and answers from a completed inspection."
- **C04-F4 / Supervisor:** "A finding may stay open after the inspection. Someone owns remediation and records follow-up. High severity requires my disposition before closure."
- **C04-F5 / Inspector:** "Connectivity is poor at some sites. A capture solution that requires continuous network access will not work for the intended field use."
- **C04-F6 / Eva:** "Photos could help a dispute, but we have not agreed retention, access or whether every finding needs one."
- **C04-F7 / Sponsor:** "The pilot covers two sites and one inspector per visit. AI scoring, inventory integration and travel optimization are not required."
- **C04-F8:** inspections.csv provides sample observations, not a normalized schema. INS-03 communicates a visit with no finding.

## Technology-specific decision context

A canvas app supports a task-oriented mobile experience and device capture. Supported Dataverse-backed mobile offline is a capability to assess against licensing/player/data constraints, not a reason to invent proven support.

Decide whether the first release needs structured checklist responses, reusable/versioned templates, photo evidence, remediation history and offline capture. Features drive the entities, fields, relationships and access/lifecycle rules.

## Proposal to inspect

- **C04-P1:** One Inspection row with Defect 1 through Defect 10 columns will represent every visit.
- **C04-P2:** Edit the current checklist in place; old responses do not need original question wording.
- **C04-P3:** Use one status that becomes Closed when capture is complete, even if remediation is pending.
- **C04-P4:** Build a configurable template designer, photo library and AI risk score before trying the first inspection.

## Change for discussion

- **C04-C1:** Next quarter, equipment types may use different checklists. Compare preserving a simple version/snapshot now with a full template/question model.
- **C04-C2:** Two people may help remediate a finding, but one person remains accountable. Decide whether that feature is required now and what association/history it would need.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C04-T1 | A visit with zero findings or more than ten cannot be represented consistently. |
| C04-T2 | After checklist editing, a completed inspection cannot explain the original question wording. |
| C04-T3 | Closing inspection capture also erases the distinction between open remediation and supervisor acceptance. |
| C04-T4 | The proposed photo feature has no Finding association, access or retention decision. |
| C04-T5 | The first-release scope includes AI scoring despite C04-F7 and no supporting user need. |

These are walkthroughs of candidate features/models, not app runtime tests. Derive and justify your own model; more tables are not automatically better.


SOURCE: client/offerings/inspections.csv
inspection_id,site,inspector,severity,observation
INS-01,North depot,Inspector A,Low,Label damaged on storage bin
INS-02,South depot,Inspector B,High,Access route obstructed
INS-03,North depot,Inspector A,Low,Inspection completed with no finding
[END STANDALONE CONTEXT]

Decision step DS04-4: apply C04-C1 equipment-specific checklists and
C04-C2 multiple remediation helpers to the preferred model.
Show the feature, entity/field/relationship, ownership/history and
scope consequences. Compare a minimal first-release approach with
a reusable/versioned model. Preserve one accountable owner.
Explain what must change now, what can wait and the assumptions that
would make today's simpler choice unsafe. No code or control edits.
Output label: EX04-P4: Changed inspection scope and schema impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX04-P4: Changed inspection scope and schema impact` using the [output guide](OUTPUTS.md).

**Decision step:** DS04-4, feature/schema tradeoffs.

**Do with it:** choose how old checklist meaning is preserved without automatically commissioning a template designer. Decide whether helpers need an association/history in this release. Record the actual schema impact of each included feature and leave undecided policy open.

**Next:** provide the selected scope/model and conditions to prompt 5. This is a workshop design disposition, not server acceptance or deployment approval.

## Phase 5. Validate and package the feature/schema decisions

### Prompt 5: produce the first-release design decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 04 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 04: Canvas app, Dataverse mobile offline
## Feature and schema decision workflow

| Step | Canvas-development decision | HVE output | Used before |
|---|---|---|---|
| DS04-1 | Which inspector/supervisor needs are real? | Evidence-linked feature hypotheses and unanswered questions | Choosing screens, data or automation |
| DS04-2 | Which canvas/mobile capabilities belong in release one? | Included/deferred/rejected feature choices and technology implications | Committing to offline, photos, checklists or remediation features |
| DS04-3 | What data structure supports those features? | Compared schema options, entity/field rationale and cardinalities | Creating tables, relationships or data sources |
| DS04-4 | What changes when requirements grow? | Feature/schema impact and explicit first-release tradeoffs | Adding template, collaboration or evidence complexity |
| DS04-5 | Can the proposed design explain realistic visits? | Reviewed feature/schema decision pack and open decisions | Prototype/build planning and partner offering |

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
- **RULE-04 / Field:** Findings require an owner, severity and observation. High severity requires supervisor disposition before closure. An inspection cannot close with an open finding. Offline edits must synchronize and be checked in Dataverse before closure is claimed.

SOURCE: client/hve-development/04-field.md
# Case 04: decide the inspection app's features and schema

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. No prescribed canvas controls, formulas or database blueprint.**

## Client interview evidence

- **C04-F1 / Eva:** "A visit may have no defect, or several. The app must not limit us to a fixed number of findings."
- **C04-F2 / Inspector:** "We return to the same site and equipment. We need to know what was observed on each visit, not overwrite last month's inspection."
- **C04-F3 / Eva:** "Checklist wording changes. We must still understand the questions and answers from a completed inspection."
- **C04-F4 / Supervisor:** "A finding may stay open after the inspection. Someone owns remediation and records follow-up. High severity requires my disposition before closure."
- **C04-F5 / Inspector:** "Connectivity is poor at some sites. A capture solution that requires continuous network access will not work for the intended field use."
- **C04-F6 / Eva:** "Photos could help a dispute, but we have not agreed retention, access or whether every finding needs one."
- **C04-F7 / Sponsor:** "The pilot covers two sites and one inspector per visit. AI scoring, inventory integration and travel optimization are not required."
- **C04-F8:** inspections.csv provides sample observations, not a normalized schema. INS-03 communicates a visit with no finding.

## Technology-specific decision context

A canvas app supports a task-oriented mobile experience and device capture. Supported Dataverse-backed mobile offline is a capability to assess against licensing/player/data constraints, not a reason to invent proven support.

Decide whether the first release needs structured checklist responses, reusable/versioned templates, photo evidence, remediation history and offline capture. Features drive the entities, fields, relationships and access/lifecycle rules.

## Proposal to inspect

- **C04-P1:** One Inspection row with Defect 1 through Defect 10 columns will represent every visit.
- **C04-P2:** Edit the current checklist in place; old responses do not need original question wording.
- **C04-P3:** Use one status that becomes Closed when capture is complete, even if remediation is pending.
- **C04-P4:** Build a configurable template designer, photo library and AI risk score before trying the first inspection.

## Change for discussion

- **C04-C1:** Next quarter, equipment types may use different checklists. Compare preserving a simple version/snapshot now with a full template/question model.
- **C04-C2:** Two people may help remediate a finding, but one person remains accountable. Decide whether that feature is required now and what association/history it would need.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C04-T1 | A visit with zero findings or more than ten cannot be represented consistently. |
| C04-T2 | After checklist editing, a completed inspection cannot explain the original question wording. |
| C04-T3 | Closing inspection capture also erases the distinction between open remediation and supervisor acceptance. |
| C04-T4 | The proposed photo feature has no Finding association, access or retention decision. |
| C04-T5 | The first-release scope includes AI scoring despite C04-F7 and no supporting user need. |

These are walkthroughs of candidate features/models, not app runtime tests. Derive and justify your own model; more tables are not automatically better.


SOURCE: client/offerings/inspections.csv
inspection_id,site,inspector,severity,observation
INS-01,North depot,Inspector A,Low,Label damaged on storage bin
INS-02,South depot,Inspector B,High,Access route obstructed
INS-03,North depot,Inspector A,Low,Inspection completed with no finding
[END STANDALONE CONTEXT]

Decision step DS04-5: review fictional design feedback C04-T1..T5
against our feature and schema choices. Walk realistic records,
not application runtime tests.
Produce the first-release feature/schema decision pack: need/source
trace, included/deferred features, preferred logical model, field/type/
relationship rationale, business states/access rules, rejected options,
sample-record walkthroughs and open owner decisions.
Name the next prototype/build questions and Field Quality Accelerator
offer boundaries. Do not claim an implemented app or approved schema.
Output label: EX04-P5: First-release inspection feature and schema pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX04-P5: First-release inspection feature and schema pack` using the [output guide](OUTPUTS.md).

**Decision step:** DS04-5, design acceptance before implementation.

**Do with it:** give a partner the pack and ask them to explain one feature, its evidence and every entity/field it needs. They must represent a no-finding visit, checklist change and open remediation without private author coaching. Revise the model if those examples fail.

**Next:** take the selected feature/model pack to the next design or prototype task. Populate the offering canvas from the justified scope, not the number of generated tables.

**Gateway 2:** the pack explains what is needed and why. More features/tables are not a better answer; missing relationships or unjustified complexity are both review findings.

## What good looks like

You can trace a client need to a canvas capability decision and a schema consequence. The model supports the chosen user journey and preserves required history without coding instructions or automatic scope expansion.

## Recovery and takeaways

If HVE starts with a ready-made schema, ask it to trace every element to a selected feature and compare a smaller alternative. If it produces implementation fixes, return it to the unresolved feature/data decision. With no live HVE, record a desk walkthrough.

Take home the feature prioritization, schema comparison and change-impact method as **Field Quality Accelerator** IP. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: why are findings separate from visits? When does a checklist version/reference become necessary? What evidence would make you defer photos? Explain the choices, not a formula.

**Optional implementation reference:** [maker material](guided-builds/04-field-inspections.md) comes after a reviewed feature/schema decision; its earlier example is not a prescribed design for this exercise.
