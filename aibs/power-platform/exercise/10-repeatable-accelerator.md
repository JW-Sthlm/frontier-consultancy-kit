# 10. Decide reusable versus client-specific features and schema

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Nora wants a supplier service based on Zava's learning. Use HVE to decide which features/data should remain standard and which require a client-specific choice, rather than copying a solution or over-generalizing everything.**

The component context includes Power Pages, model-driven casework and Power Platform solutions. The core does not export/import packages, change code or debug deployment.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-10 interview](client/hve-development/10-reuse.md), [RULE-05/RULE-10](client/offerings/README.md), [Nora's brief](client/offerings/second-client.md) and this guide. Use actual lab-05 feature/schema artifacts if available; otherwise use its business boundary as a proposed baseline, not invented accepted history.

Nora requires service region before review, its own reviewers/destination/identities and an explanation of why inherited features/fields exist.

## Feature and schema decision workflow

| Step | Reuse decision | HVE output | Used before |
|---|---|---|---|
| DS10-1 | What accepted needs/features/model can actually be reused? | Evidence-backed baseline and open assumptions | Copying prior decisions |
| DS10-2 | Which capabilities should be standard or variable? | Feature/variation boundary | Choosing one configurable product versus variants |
| DS10-3 | What schema options support the differences? | Compared fixed/optional/reference/configuration models | Adding client-specific data |
| DS10-4 | How do more regions or reviewers change it? | Feature/schema/history/ownership impact | Generalizing beyond the evidence |
| DS10-5 | Can a receiver explain the new client's decisions? | Client-specific feature/schema decision pack | Prototype/build and reusable offering |

## HVE learning objectives

- Resume actual accepted design evidence without inventing project history.
- Distinguish reusable capability from client data/authority.
- Choose proportionate schema variation rather than default forks/flags.
- Compare fixed Choices with managed reference data against ownership needs.
- Validate transfer through a receiver's explanation and new question.

**Attempt first:** which of Zava's decisions can be reused as a pattern, and which need Nora's own answer?

## Expected result

A Nora feature/schema adaptation decision pack and explicit reusable boundary. Actual project read-back may be navigation over earlier originals, not a new HVE run. A desk walkthrough and any optional implementation remain separate; no imported solution is claimed.

## Phase 1. Recover the real design basis

### Prompt 1: establish what is fact versus inherited assumption

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 10 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 10: Power Pages, Model-driven app, Power Platform solutions
## Feature and schema decision workflow

| Step | Reuse decision | HVE output | Used before |
|---|---|---|---|
| DS10-1 | What accepted needs/features/model can actually be reused? | Evidence-backed baseline and open assumptions | Copying prior decisions |
| DS10-2 | Which capabilities should be standard or variable? | Feature/variation boundary | Choosing one configurable product versus variants |
| DS10-3 | What schema options support the differences? | Compared fixed/optional/reference/configuration models | Adding client-specific data |
| DS10-4 | How do more regions or reviewers change it? | Feature/schema/history/ownership impact | Generalizing beyond the evidence |
| DS10-5 | Can a receiver explain the new client's decisions? | Client-specific feature/schema decision pack | Prototype/build and reusable offering |

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
- **RULE-10 / Reuse:** Package structure and tests are reusable. Customer rules, identities and connection values are not universal. No secrets or training records in a deployment package. Receiving operators perform the new-client change without author coaching.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/10-reuse.md
# Case 10: what should be standard versus client-specific?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. Use RULE-05, RULE-10 and Nora's change brief.**

## Client interview evidence

- **C10-F1 / Partner lead:** "Reuse the supplier-service learning, not a copy of Zava's customer data or project identity."
- **C10-F2 / Nora:** "We need North/South service region before an application enters review."
- **C10-F3 / Nora reviewer:** "Our team, notification destination and supplier identities are different. Missing settings must not fall back to another client."
- **C10-F4 / Receiving consultant:** "I need to know why a feature/field was chosen and which assumptions must be checked again."
- **C10-F5:** Use actual lab-05 decision artifacts if available; otherwise use its business boundary as a proposed baseline without invented history.

## Technology-specific decision context

Power Platform solutions can package components, but reuse starts with the intended features, logical model, business rules and variation boundaries. Decide whether a request needs configuration, an additive schema change, a new feature or a separate product variant.

Do not assume an optional Region field, existing feature flag, actual package or target deployment. Those are implementation facts to verify later.

## Proposal to inspect

- **C10-P1:** Every new client gets a separate fork with no explanation of what changed.
- **C10-P2:** Put all possible client variations into the first common schema, whether anyone needs them.
- **C10-P3:** Rename Zava's entire project and contacts Nora, and treat earlier decisions as approved by the new client.

## Change for discussion

- **C10-C1:** Nora may add more regions later. Compare a fixed Choice with a managed Region reference entity against actual ownership/change needs.
- **C10-C2:** Another client wants two reviewers for high-risk applications. Identify feature/rule/schema impact without imposing that feature on every client.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C10-T1 | The receiving person can see field names but not which client need each supports. |
| C10-T2 | Nora's required-region feature has no schema/business-rule consequence. |
| C10-T3 | Target team/destination/identity are assumed inherited from Zava. |
| C10-T4 | No distinction exists between a reusable capability and a client-specific decision. |

These are design-transfer findings, not solution import logs or evidence of deployed reuse.


SOURCE: client/offerings/second-client.md
# Nora: second-client adaptation

**Synthetic change brief NORA-01..03. The HVE core uses the supplier-service boundary and relevant actual HVE artifacts where available. A deployed lab 05 application is needed only for the optional implementation extension.**

- **NORA-01:** Nora Services requires an additional `Service region` choice: North or South. It is required before a submission is accepted into review, including API/form bypass attempts, not just visually marked on the page. An invalid attempt can be retained as evidence but cannot create a review application.
- **NORA-02:** Supplier contacts see only their own applications, unchanged from RULE-05. Nora's test contacts are new identities; do not copy Zava contact rows.
- **NORA-03:** Procurement uses a different sandbox review team and a different training notification recipient. Both are configuration. Missing configuration must stop processing with an explicit operator-visible failure, not default to Zava.

No new customer data, site publication, bank details or ERP integration is authorized. In the core, the receiving consultant must find the accepted basis and obtain a credible adaptation handoff without private author coaching. Actual deployment/configuration tests are separate optional evidence.
[END STANDALONE CONTEXT]

Decision step DS10-1: read back the actual accepted needs, feature
choices, schema rationale and open decisions from this selected project.
Link original artifacts, not only your summary. Use case 10 as
fictional context, not invented history. If lab 05 was not run,
propose its RULE-05 baseline for workshop review and mark it unaccepted.
Do not start new work merely to summarize existing verified content.
Output label: EX10-P1: Reusable feature and schema basis read-back.
Present verified original links; identify any real new baseline run
separately. Preserve canonical paths and actual provenance.
```

**Find this output:** `EX10-P1: Reusable feature and schema basis read-back` in Cowork's read-back and its linked originals; use [output navigation](OUTPUTS.md).

**Decision step:** DS10-1, accepted design recovery.

**Do with it:** identify which feature/model choices have evidence and which are proposals. For navigation-only work record no new work run. Do not invent a deployed package or earlier approval.

**Next:** give the verified basis or proposed workshop baseline to the variation request.

**Gateway 1:** a receiver can find why the source design exists, not just field names.

## Phase 2. Choose standard and variable features

### Prompt 2: define the reusable capability boundary

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 10 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 10: Power Pages, Model-driven app, Power Platform solutions
## Feature and schema decision workflow

| Step | Reuse decision | HVE output | Used before |
|---|---|---|---|
| DS10-1 | What accepted needs/features/model can actually be reused? | Evidence-backed baseline and open assumptions | Copying prior decisions |
| DS10-2 | Which capabilities should be standard or variable? | Feature/variation boundary | Choosing one configurable product versus variants |
| DS10-3 | What schema options support the differences? | Compared fixed/optional/reference/configuration models | Adding client-specific data |
| DS10-4 | How do more regions or reviewers change it? | Feature/schema/history/ownership impact | Generalizing beyond the evidence |
| DS10-5 | Can a receiver explain the new client's decisions? | Client-specific feature/schema decision pack | Prototype/build and reusable offering |

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
- **RULE-10 / Reuse:** Package structure and tests are reusable. Customer rules, identities and connection values are not universal. No secrets or training records in a deployment package. Receiving operators perform the new-client change without author coaching.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/10-reuse.md
# Case 10: what should be standard versus client-specific?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. Use RULE-05, RULE-10 and Nora's change brief.**

## Client interview evidence

- **C10-F1 / Partner lead:** "Reuse the supplier-service learning, not a copy of Zava's customer data or project identity."
- **C10-F2 / Nora:** "We need North/South service region before an application enters review."
- **C10-F3 / Nora reviewer:** "Our team, notification destination and supplier identities are different. Missing settings must not fall back to another client."
- **C10-F4 / Receiving consultant:** "I need to know why a feature/field was chosen and which assumptions must be checked again."
- **C10-F5:** Use actual lab-05 decision artifacts if available; otherwise use its business boundary as a proposed baseline without invented history.

## Technology-specific decision context

Power Platform solutions can package components, but reuse starts with the intended features, logical model, business rules and variation boundaries. Decide whether a request needs configuration, an additive schema change, a new feature or a separate product variant.

Do not assume an optional Region field, existing feature flag, actual package or target deployment. Those are implementation facts to verify later.

## Proposal to inspect

- **C10-P1:** Every new client gets a separate fork with no explanation of what changed.
- **C10-P2:** Put all possible client variations into the first common schema, whether anyone needs them.
- **C10-P3:** Rename Zava's entire project and contacts Nora, and treat earlier decisions as approved by the new client.

## Change for discussion

- **C10-C1:** Nora may add more regions later. Compare a fixed Choice with a managed Region reference entity against actual ownership/change needs.
- **C10-C2:** Another client wants two reviewers for high-risk applications. Identify feature/rule/schema impact without imposing that feature on every client.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C10-T1 | The receiving person can see field names but not which client need each supports. |
| C10-T2 | Nora's required-region feature has no schema/business-rule consequence. |
| C10-T3 | Target team/destination/identity are assumed inherited from Zava. |
| C10-T4 | No distinction exists between a reusable capability and a client-specific decision. |

These are design-transfer findings, not solution import logs or evidence of deployed reuse.


SOURCE: client/offerings/second-client.md
# Nora: second-client adaptation

**Synthetic change brief NORA-01..03. The HVE core uses the supplier-service boundary and relevant actual HVE artifacts where available. A deployed lab 05 application is needed only for the optional implementation extension.**

- **NORA-01:** Nora Services requires an additional `Service region` choice: North or South. It is required before a submission is accepted into review, including API/form bypass attempts, not just visually marked on the page. An invalid attempt can be retained as evidence but cannot create a review application.
- **NORA-02:** Supplier contacts see only their own applications, unchanged from RULE-05. Nora's test contacts are new identities; do not copy Zava contact rows.
- **NORA-03:** Procurement uses a different sandbox review team and a different training notification recipient. Both are configuration. Missing configuration must stop processing with an explicit operator-visible failure, not default to Zava.

No new customer data, site publication, bank details or ERP integration is authorized. In the core, the receiving consultant must find the accepted basis and obtain a credible adaptation handoff without private author coaching. Actual deployment/configuration tests are separate optional evidence.
[END STANDALONE CONTEXT]

Decision step DS10-2: compare Nora's needs with the supplier baseline.
Classify features as reusable standard, client-specific variation,
new capability or not needed. Give IDs, source/value/dependencies
and first/later choices. Explain Power Pages self-service, model-driven
review and solution reuse implications without copying customer data,
identity, decisions or assuming a feature flag already exists.
Output label: EX10-P2: Standard and client-specific feature choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX10-P2: Standard and client-specific feature choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS10-2, reusable feature scope.

**Do with it:** select the common business behavior and state what Nora must decide afresh. Identify whether required region is a new feature, a rule variation or an unanswered requirement.

**Next:** carry the chosen boundary and pending client questions into modelling.

## Phase 3. Compare schema variation options

### Prompt 3: decide the data structure, not the implementation mechanism

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 10 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 10: Power Pages, Model-driven app, Power Platform solutions
## Feature and schema decision workflow

| Step | Reuse decision | HVE output | Used before |
|---|---|---|---|
| DS10-1 | What accepted needs/features/model can actually be reused? | Evidence-backed baseline and open assumptions | Copying prior decisions |
| DS10-2 | Which capabilities should be standard or variable? | Feature/variation boundary | Choosing one configurable product versus variants |
| DS10-3 | What schema options support the differences? | Compared fixed/optional/reference/configuration models | Adding client-specific data |
| DS10-4 | How do more regions or reviewers change it? | Feature/schema/history/ownership impact | Generalizing beyond the evidence |
| DS10-5 | Can a receiver explain the new client's decisions? | Client-specific feature/schema decision pack | Prototype/build and reusable offering |

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
- **RULE-10 / Reuse:** Package structure and tests are reusable. Customer rules, identities and connection values are not universal. No secrets or training records in a deployment package. Receiving operators perform the new-client change without author coaching.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/10-reuse.md
# Case 10: what should be standard versus client-specific?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. Use RULE-05, RULE-10 and Nora's change brief.**

## Client interview evidence

- **C10-F1 / Partner lead:** "Reuse the supplier-service learning, not a copy of Zava's customer data or project identity."
- **C10-F2 / Nora:** "We need North/South service region before an application enters review."
- **C10-F3 / Nora reviewer:** "Our team, notification destination and supplier identities are different. Missing settings must not fall back to another client."
- **C10-F4 / Receiving consultant:** "I need to know why a feature/field was chosen and which assumptions must be checked again."
- **C10-F5:** Use actual lab-05 decision artifacts if available; otherwise use its business boundary as a proposed baseline without invented history.

## Technology-specific decision context

Power Platform solutions can package components, but reuse starts with the intended features, logical model, business rules and variation boundaries. Decide whether a request needs configuration, an additive schema change, a new feature or a separate product variant.

Do not assume an optional Region field, existing feature flag, actual package or target deployment. Those are implementation facts to verify later.

## Proposal to inspect

- **C10-P1:** Every new client gets a separate fork with no explanation of what changed.
- **C10-P2:** Put all possible client variations into the first common schema, whether anyone needs them.
- **C10-P3:** Rename Zava's entire project and contacts Nora, and treat earlier decisions as approved by the new client.

## Change for discussion

- **C10-C1:** Nora may add more regions later. Compare a fixed Choice with a managed Region reference entity against actual ownership/change needs.
- **C10-C2:** Another client wants two reviewers for high-risk applications. Identify feature/rule/schema impact without imposing that feature on every client.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C10-T1 | The receiving person can see field names but not which client need each supports. |
| C10-T2 | Nora's required-region feature has no schema/business-rule consequence. |
| C10-T3 | Target team/destination/identity are assumed inherited from Zava. |
| C10-T4 | No distinction exists between a reusable capability and a client-specific decision. |

These are design-transfer findings, not solution import logs or evidence of deployed reuse.


SOURCE: client/offerings/second-client.md
# Nora: second-client adaptation

**Synthetic change brief NORA-01..03. The HVE core uses the supplier-service boundary and relevant actual HVE artifacts where available. A deployed lab 05 application is needed only for the optional implementation extension.**

- **NORA-01:** Nora Services requires an additional `Service region` choice: North or South. It is required before a submission is accepted into review, including API/form bypass attempts, not just visually marked on the page. An invalid attempt can be retained as evidence but cannot create a review application.
- **NORA-02:** Supplier contacts see only their own applications, unchanged from RULE-05. Nora's test contacts are new identities; do not copy Zava contact rows.
- **NORA-03:** Procurement uses a different sandbox review team and a different training notification recipient. Both are configuration. Missing configuration must stop processing with an explicit operator-visible failure, not default to Zava.

No new customer data, site publication, bank details or ERP integration is authorized. In the core, the receiving consultant must find the accepted basis and obtain a credible adaptation handoff without private author coaching. Actual deployment/configuration tests are separate optional evidence.
[END STANDALONE CONTEXT]

Decision step DS10-3: derive model options for the selected Nora
features. Compare a fixed/optional region attribute, managed Region
reference and proportionate rule/configuration concepts only where
needed. Give field/type/requiredness, relationship/cardinality,
ownership, lifecycle and supporting feature IDs.
Explain what remains common and what is client-specific. Do not
assume an existing extension point or a table for every future variant.
Output label: EX10-P3: Reuse and variation schema options.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX10-P3: Reuse and variation schema options` using [output navigation](OUTPUTS.md).

**Decision step:** DS10-3, schema/variation design.

**Do with it:** compare the simplest valid North/South model with a managed Region concept. Identify what ownership/change requirement would justify the richer option. Check target-specific reviewer/destination/identity remain explicit.

**Next:** record a preferred model and the assumptions behind it.

## Phase 4. Assess growing regions and review complexity

### Prompt 4: decide when the common model must change

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 10 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 10: Power Pages, Model-driven app, Power Platform solutions
## Feature and schema decision workflow

| Step | Reuse decision | HVE output | Used before |
|---|---|---|---|
| DS10-1 | What accepted needs/features/model can actually be reused? | Evidence-backed baseline and open assumptions | Copying prior decisions |
| DS10-2 | Which capabilities should be standard or variable? | Feature/variation boundary | Choosing one configurable product versus variants |
| DS10-3 | What schema options support the differences? | Compared fixed/optional/reference/configuration models | Adding client-specific data |
| DS10-4 | How do more regions or reviewers change it? | Feature/schema/history/ownership impact | Generalizing beyond the evidence |
| DS10-5 | Can a receiver explain the new client's decisions? | Client-specific feature/schema decision pack | Prototype/build and reusable offering |

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
- **RULE-10 / Reuse:** Package structure and tests are reusable. Customer rules, identities and connection values are not universal. No secrets or training records in a deployment package. Receiving operators perform the new-client change without author coaching.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/10-reuse.md
# Case 10: what should be standard versus client-specific?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. Use RULE-05, RULE-10 and Nora's change brief.**

## Client interview evidence

- **C10-F1 / Partner lead:** "Reuse the supplier-service learning, not a copy of Zava's customer data or project identity."
- **C10-F2 / Nora:** "We need North/South service region before an application enters review."
- **C10-F3 / Nora reviewer:** "Our team, notification destination and supplier identities are different. Missing settings must not fall back to another client."
- **C10-F4 / Receiving consultant:** "I need to know why a feature/field was chosen and which assumptions must be checked again."
- **C10-F5:** Use actual lab-05 decision artifacts if available; otherwise use its business boundary as a proposed baseline without invented history.

## Technology-specific decision context

Power Platform solutions can package components, but reuse starts with the intended features, logical model, business rules and variation boundaries. Decide whether a request needs configuration, an additive schema change, a new feature or a separate product variant.

Do not assume an optional Region field, existing feature flag, actual package or target deployment. Those are implementation facts to verify later.

## Proposal to inspect

- **C10-P1:** Every new client gets a separate fork with no explanation of what changed.
- **C10-P2:** Put all possible client variations into the first common schema, whether anyone needs them.
- **C10-P3:** Rename Zava's entire project and contacts Nora, and treat earlier decisions as approved by the new client.

## Change for discussion

- **C10-C1:** Nora may add more regions later. Compare a fixed Choice with a managed Region reference entity against actual ownership/change needs.
- **C10-C2:** Another client wants two reviewers for high-risk applications. Identify feature/rule/schema impact without imposing that feature on every client.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C10-T1 | The receiving person can see field names but not which client need each supports. |
| C10-T2 | Nora's required-region feature has no schema/business-rule consequence. |
| C10-T3 | Target team/destination/identity are assumed inherited from Zava. |
| C10-T4 | No distinction exists between a reusable capability and a client-specific decision. |

These are design-transfer findings, not solution import logs or evidence of deployed reuse.


SOURCE: client/offerings/second-client.md
# Nora: second-client adaptation

**Synthetic change brief NORA-01..03. The HVE core uses the supplier-service boundary and relevant actual HVE artifacts where available. A deployed lab 05 application is needed only for the optional implementation extension.**

- **NORA-01:** Nora Services requires an additional `Service region` choice: North or South. It is required before a submission is accepted into review, including API/form bypass attempts, not just visually marked on the page. An invalid attempt can be retained as evidence but cannot create a review application.
- **NORA-02:** Supplier contacts see only their own applications, unchanged from RULE-05. Nora's test contacts are new identities; do not copy Zava contact rows.
- **NORA-03:** Procurement uses a different sandbox review team and a different training notification recipient. Both are configuration. Missing configuration must stop processing with an explicit operator-visible failure, not default to Zava.

No new customer data, site publication, bank details or ERP integration is authorized. In the core, the receiving consultant must find the accepted basis and obtain a credible adaptation handoff without private author coaching. Actual deployment/configuration tests are separate optional evidence.
[END STANDALONE CONTEXT]

Decision step DS10-4: apply C10-C1 additional regions and C10-C2 two
reviewers for high-risk applications. Show feature, field/association,
cardinality, state/history and ownership consequences.
Compare a minimal client-specific extension with common configurable
capability and a separate variant. Explain needed-now versus later,
the human decisions and any source assumptions to revalidate.
Output label: EX10-P4: Client variation and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX10-P4: Client variation and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS10-4, bounded generalization.

**Do with it:** decide whether two-reviewer history needs another association or can remain out of scope. Do not force Nora's rule on every client or fork the entire capability without explaining the cost.

**Next:** give the selected model and actual client-specific conditions to the final pack.

## Phase 5. Review design transfer and package the decisions

### Prompt 5: produce the Nora feature/schema decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 10 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 10: Power Pages, Model-driven app, Power Platform solutions
## Feature and schema decision workflow

| Step | Reuse decision | HVE output | Used before |
|---|---|---|---|
| DS10-1 | What accepted needs/features/model can actually be reused? | Evidence-backed baseline and open assumptions | Copying prior decisions |
| DS10-2 | Which capabilities should be standard or variable? | Feature/variation boundary | Choosing one configurable product versus variants |
| DS10-3 | What schema options support the differences? | Compared fixed/optional/reference/configuration models | Adding client-specific data |
| DS10-4 | How do more regions or reviewers change it? | Feature/schema/history/ownership impact | Generalizing beyond the evidence |
| DS10-5 | Can a receiver explain the new client's decisions? | Client-specific feature/schema decision pack | Prototype/build and reusable offering |

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
- **RULE-10 / Reuse:** Package structure and tests are reusable. Customer rules, identities and connection values are not universal. No secrets or training records in a deployment package. Receiving operators perform the new-client change without author coaching.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/10-reuse.md
# Case 10: what should be standard versus client-specific?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. Use RULE-05, RULE-10 and Nora's change brief.**

## Client interview evidence

- **C10-F1 / Partner lead:** "Reuse the supplier-service learning, not a copy of Zava's customer data or project identity."
- **C10-F2 / Nora:** "We need North/South service region before an application enters review."
- **C10-F3 / Nora reviewer:** "Our team, notification destination and supplier identities are different. Missing settings must not fall back to another client."
- **C10-F4 / Receiving consultant:** "I need to know why a feature/field was chosen and which assumptions must be checked again."
- **C10-F5:** Use actual lab-05 decision artifacts if available; otherwise use its business boundary as a proposed baseline without invented history.

## Technology-specific decision context

Power Platform solutions can package components, but reuse starts with the intended features, logical model, business rules and variation boundaries. Decide whether a request needs configuration, an additive schema change, a new feature or a separate product variant.

Do not assume an optional Region field, existing feature flag, actual package or target deployment. Those are implementation facts to verify later.

## Proposal to inspect

- **C10-P1:** Every new client gets a separate fork with no explanation of what changed.
- **C10-P2:** Put all possible client variations into the first common schema, whether anyone needs them.
- **C10-P3:** Rename Zava's entire project and contacts Nora, and treat earlier decisions as approved by the new client.

## Change for discussion

- **C10-C1:** Nora may add more regions later. Compare a fixed Choice with a managed Region reference entity against actual ownership/change needs.
- **C10-C2:** Another client wants two reviewers for high-risk applications. Identify feature/rule/schema impact without imposing that feature on every client.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C10-T1 | The receiving person can see field names but not which client need each supports. |
| C10-T2 | Nora's required-region feature has no schema/business-rule consequence. |
| C10-T3 | Target team/destination/identity are assumed inherited from Zava. |
| C10-T4 | No distinction exists between a reusable capability and a client-specific decision. |

These are design-transfer findings, not solution import logs or evidence of deployed reuse.


SOURCE: client/offerings/second-client.md
# Nora: second-client adaptation

**Synthetic change brief NORA-01..03. The HVE core uses the supplier-service boundary and relevant actual HVE artifacts where available. A deployed lab 05 application is needed only for the optional implementation extension.**

- **NORA-01:** Nora Services requires an additional `Service region` choice: North or South. It is required before a submission is accepted into review, including API/form bypass attempts, not just visually marked on the page. An invalid attempt can be retained as evidence but cannot create a review application.
- **NORA-02:** Supplier contacts see only their own applications, unchanged from RULE-05. Nora's test contacts are new identities; do not copy Zava contact rows.
- **NORA-03:** Procurement uses a different sandbox review team and a different training notification recipient. Both are configuration. Missing configuration must stop processing with an explicit operator-visible failure, not default to Zava.

No new customer data, site publication, bank details or ERP integration is authorized. In the core, the receiving consultant must find the accepted basis and obtain a credible adaptation handoff without private author coaching. Actual deployment/configuration tests are separate optional evidence.
[END STANDALONE CONTEXT]

Decision step DS10-5: review fictional design feedback C10-T1..T4.
Consolidate Nora's feature priorities, preferred schema, field/
relationship rationale, standard/variable boundary, business/access
rules, rejected alternatives, record walkthroughs and open decisions.
Keep actual project evidence and supplied review feedback separate.
Define next prototype questions and Repeatable Accelerator Delivery
scope. Do not claim exported/deployed components or automatic reuse.
Output label: EX10-P5: Nora feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX10-P5: Nora feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS10-5, design/transfer acceptance.

**Do with it:** ask a receiving participant to explain one inherited feature, one new need, the data consequences and a rejected model. Record help needed and their next useful HVE question without private author coaching.

**Next:** use the reviewed pack for client prototype/build planning and the offering canvas. A new client project still needs normal explicit confirmation and actual identity.

**Gateway 2:** reuse is justified standard behavior plus explicit new decisions, not copied names, credentials or an unbounded generic schema.

## What good looks like

HVE helps choose what can stay common and what must change for Nora. A receiver understands feature/data rationale and can continue the design without assuming deployment occurred.

## Recovery and takeaways

If HVE jumps to export/import or code, return to the unresolved variation/schema choice. If it invents prior history, request the real source or label the baseline proposed. With no live HVE, record a desk walkthrough.

Take home the standard-versus-variation decision method as **Repeatable Accelerator Delivery** IP. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: when does a Choice deserve a reference entity? What new rule would justify review associations/history? Which source decisions must the next client make again?

**Optional implementation reference:** [earlier maker material](guided-builds/10-repeatable-accelerator.md) is downstream and does not decide the common schema.
