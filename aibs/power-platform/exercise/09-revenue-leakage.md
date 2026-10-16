# 09. Decide commercial-insight features and the necessary data model

[Course](README.md) | [Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md)

**Lina wants explainable commercial exceptions and owned follow-up. Use HVE to decide what the reporting/casework service needs and how the source, measure and investigation data should be modelled.**

Power BI, model-driven casework and Power Automate are technology options. Query coding, measure debugging and visual configuration are not the exercise.

## Customer scenario and inputs

Source evidence (included in every standalone prompt): [case-09 interview](client/hve-development/09-value.md), [RULE-09](client/offerings/README.md), [work](client/offerings/delivery-work.csv), [invoice lines](client/offerings/invoice-lines.csv) and this guide.

Work may be partially invoiced across several lines. Only eligible work and Posted lines count. The client needs lineage, source date, accountable investigation and distinct potential/validated/recovered meaning.

## Feature and schema decision workflow

| Step | Commercial-service decision | HVE output | Used before |
|---|---|---|---|
| DS09-1 | What must finance explain or act on? | User needs and evidence limits | Choosing dashboard versus managed service |
| DS09-2 | Which insight and follow-up features are first release? | Prioritized visibility, lineage, casework and notification choices | Building reports/actions |
| DS09-3 | What source grain and investigation relationships are needed? | Schema/semantic-model alternatives | Creating datasets and case records |
| DS09-4 | How do new lines and repeat observations affect it? | Feature/measure/history/identity impact | Expanding the service |
| DS09-5 | Can the model explain amounts and decisions? | Feature/schema/measure decision pack | Prototype and finance acceptance |

## HVE learning objectives

- Select insight and follow-up features from finance jobs.
- Derive source facts, measures and dispositions without conflating them.
- Explain work/invoice cardinality and source lineage.
- Decide investigation identity/history against repeat-report needs.
- Validate the design with row-level examples, not code.

**Attempt first:** why can one work item have multiple invoice lines but only one expected amount for that observation?

## Expected result

A feature/data/measure decision pack, not a published dashboard. Actual HVE work is separate from a desk walkthrough. No financial recovery or executed investigation is supplied.

## Phase 1. Understand the financial decision needs

### Prompt 1: establish the questions and source meaning

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 09: Power BI, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Commercial-service decision | HVE output | Used before |
|---|---|---|---|
| DS09-1 | What must finance explain or act on? | User needs and evidence limits | Choosing dashboard versus managed service |
| DS09-2 | Which insight and follow-up features are first release? | Prioritized visibility, lineage, casework and notification choices | Building reports/actions |
| DS09-3 | What source grain and investigation relationships are needed? | Schema/semantic-model alternatives | Creating datasets and case records |
| DS09-4 | How do new lines and repeat observations affect it? | Feature/measure/history/identity impact | Expanding the service |
| DS09-5 | Can the model explain amounts and decisions? | Feature/schema/measure decision pack | Prototype and finance acceptance |

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
- **RULE-09 / Leakage:** Eligible work is delivered and commercially approved. Expected amount is hours times agreed rate. Posted invoice lines are net amounts before tax; sum by work ID. Potential unbilled amount is `max(expected minus posted, 0)` for eligible work. Excess billing, draft invoices and unknown work IDs are separate exceptions, not netted against unbilled work. EUR only; no extrapolation.

SOURCE: client/hve-development/09-value.md
# Case 09: what must a commercial-insight solution explain?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-09 and work/invoice fixtures remain authoritative.**

## Client interview evidence

- **C09-F1 / Lina:** "Show delivered, approved work that is not fully covered by posted invoices."
- **C09-F2 / Analyst:** "One work item can have several invoice lines. Draft invoices must not look like posted billing."
- **C09-F3 / Finance:** "An exception is a reason to investigate, not permission to invoice or call the money recovered."
- **C09-F4 / Case owner:** "I need to assign an investigation, explain its disposition and recognize a repeated report of the same work."
- **C09-F5 / Lina:** "Show the underlying amounts and source date so I can explain the number."
- **C09-F6:** The first scope is net EUR, agreed rate on each work item, no tax/revenue-recognition automation and no actual recovery evidence.

## Technology-specific decision context

Power BI can expose reconciled insight; a model-driven app can support investigation; Power Automate can route alerts/work. Decide whether the customer needs a one-off diagnostic or a recurring managed process and which features justify persistent case data.

The schema/semantic model must preserve work and invoice-line grain. Decide which amounts are source facts, derived measures, business dispositions and actual recovery events.

## Proposal to inspect

- **C09-P1:** Use one joined row for every invoice line and repeat each work item's expected amount on each row.
- **C09-P2:** Store only a total labeled Recovered revenue with no source lineage or date.
- **C09-P3:** Create a fresh investigation every refresh and overwrite prior reviewer notes.

## Change for discussion

- **C09-C1:** Add a Posted EUR 100 line for WORK-01 in a derived working case. The model must explain the changed gap.
- **C09-C2:** A work item may be reported again after an investigation closes. Decide active-case uniqueness, history and observation-period needs rather than creating uncontrolled duplicates.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C09-T1 | The candidate model cannot reconstruct WORK-01's expected/posted amounts independently. |
| C09-T2 | Draft and Posted line states are indistinguishable. |
| C09-T3 | A report cannot explain which source date or work records support the total. |
| C09-T4 | The same active issue creates multiple unowned cases. |
| C09-T5 | Potential, validated and recovered amounts are treated as the same business fact. |

No Power Query code, published dashboard or achieved recovery is supplied.


SOURCE: client/offerings/delivery-work.csv
work_id,hours,rate_eur,delivered,commercially_approved
WORK-01,10,100,true,true
WORK-02,5,100,true,true
WORK-03,3,100,true,false
WORK-04,4,100,false,true
WORK-05,2,100,true,true


SOURCE: client/offerings/invoice-lines.csv
line_id,work_id,net_eur,status
INV-01,WORK-01,600,Posted
INV-02,WORK-01,200,Posted
INV-03,WORK-02,500,Posted
INV-04,WORK-05,200,Draft
[END STANDALONE CONTEXT]

Decision step DS09-1: read the interview, RULE-09 and both sources.
Identify finance/analyst/case-owner jobs and feature questions.
Reconcile enough source rows to explain eligibility, work versus line
grain, Posted/Draft and potential versus recovered meaning.
Cite evidence and missing facts. Do not prescribe a dashboard or schema.
Output label: EX09-P1: Commercial needs and evidence limits.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX09-P1: Commercial needs and evidence limits` using [output navigation](OUTPUTS.md).

**Decision step:** DS09-1, needs/source understanding.

**Do with it:** check WORK-01's expected/posted values and the baseline potential EUR 400 gap. Identify the business question that number supports and why it cannot be called recovered money.

**Next:** carry reviewed needs and measure limits to capability selection.

**Gateway 1:** source facts, derived amount and finance decision are distinct.

## Phase 2. Choose insight and investigation capabilities

### Prompt 2: decide diagnostic versus recurring service

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 09: Power BI, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Commercial-service decision | HVE output | Used before |
|---|---|---|---|
| DS09-1 | What must finance explain or act on? | User needs and evidence limits | Choosing dashboard versus managed service |
| DS09-2 | Which insight and follow-up features are first release? | Prioritized visibility, lineage, casework and notification choices | Building reports/actions |
| DS09-3 | What source grain and investigation relationships are needed? | Schema/semantic-model alternatives | Creating datasets and case records |
| DS09-4 | How do new lines and repeat observations affect it? | Feature/measure/history/identity impact | Expanding the service |
| DS09-5 | Can the model explain amounts and decisions? | Feature/schema/measure decision pack | Prototype and finance acceptance |

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
- **RULE-09 / Leakage:** Eligible work is delivered and commercially approved. Expected amount is hours times agreed rate. Posted invoice lines are net amounts before tax; sum by work ID. Potential unbilled amount is `max(expected minus posted, 0)` for eligible work. Excess billing, draft invoices and unknown work IDs are separate exceptions, not netted against unbilled work. EUR only; no extrapolation.

SOURCE: client/hve-development/09-value.md
# Case 09: what must a commercial-insight solution explain?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-09 and work/invoice fixtures remain authoritative.**

## Client interview evidence

- **C09-F1 / Lina:** "Show delivered, approved work that is not fully covered by posted invoices."
- **C09-F2 / Analyst:** "One work item can have several invoice lines. Draft invoices must not look like posted billing."
- **C09-F3 / Finance:** "An exception is a reason to investigate, not permission to invoice or call the money recovered."
- **C09-F4 / Case owner:** "I need to assign an investigation, explain its disposition and recognize a repeated report of the same work."
- **C09-F5 / Lina:** "Show the underlying amounts and source date so I can explain the number."
- **C09-F6:** The first scope is net EUR, agreed rate on each work item, no tax/revenue-recognition automation and no actual recovery evidence.

## Technology-specific decision context

Power BI can expose reconciled insight; a model-driven app can support investigation; Power Automate can route alerts/work. Decide whether the customer needs a one-off diagnostic or a recurring managed process and which features justify persistent case data.

The schema/semantic model must preserve work and invoice-line grain. Decide which amounts are source facts, derived measures, business dispositions and actual recovery events.

## Proposal to inspect

- **C09-P1:** Use one joined row for every invoice line and repeat each work item's expected amount on each row.
- **C09-P2:** Store only a total labeled Recovered revenue with no source lineage or date.
- **C09-P3:** Create a fresh investigation every refresh and overwrite prior reviewer notes.

## Change for discussion

- **C09-C1:** Add a Posted EUR 100 line for WORK-01 in a derived working case. The model must explain the changed gap.
- **C09-C2:** A work item may be reported again after an investigation closes. Decide active-case uniqueness, history and observation-period needs rather than creating uncontrolled duplicates.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C09-T1 | The candidate model cannot reconstruct WORK-01's expected/posted amounts independently. |
| C09-T2 | Draft and Posted line states are indistinguishable. |
| C09-T3 | A report cannot explain which source date or work records support the total. |
| C09-T4 | The same active issue creates multiple unowned cases. |
| C09-T5 | Potential, validated and recovered amounts are treated as the same business fact. |

No Power Query code, published dashboard or achieved recovery is supplied.


SOURCE: client/offerings/delivery-work.csv
work_id,hours,rate_eur,delivered,commercially_approved
WORK-01,10,100,true,true
WORK-02,5,100,true,true
WORK-03,3,100,true,false
WORK-04,4,100,false,true
WORK-05,2,100,true,true


SOURCE: client/offerings/invoice-lines.csv
line_id,work_id,net_eur,status
INV-01,WORK-01,600,Posted
INV-02,WORK-01,200,Posted
INV-03,WORK-02,500,Posted
INV-04,WORK-05,200,Draft
[END STANDALONE CONTEXT]

Decision step DS09-2: compare one-off diagnostic with recurring
visibility, row-level explanation, freshness, exception categories,
owned investigation, disposition/history and notifications.
Give IDs, source/value/dependencies and first/later/not-needed status.
Explain Power BI, model-driven casework and flow fit against selected
needs. Keep automatic invoicing and revenue recognition outside scope.
Output label: EX09-P2: Commercial feature and capability choices.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX09-P2: Commercial feature and capability choices` using [output navigation](OUTPUTS.md).

**Decision step:** DS09-2, service/release scope.

**Do with it:** choose whether the first outcome is a diagnostic or managed follow-up. Explain which persistent casework features that choice actually needs and what can remain simpler.

**Next:** give only selected features and measure definitions to modelling.

## Phase 3. Compare source and casework models

### Prompt 3: derive grain, relationships and ownership

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 09: Power BI, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Commercial-service decision | HVE output | Used before |
|---|---|---|---|
| DS09-1 | What must finance explain or act on? | User needs and evidence limits | Choosing dashboard versus managed service |
| DS09-2 | Which insight and follow-up features are first release? | Prioritized visibility, lineage, casework and notification choices | Building reports/actions |
| DS09-3 | What source grain and investigation relationships are needed? | Schema/semantic-model alternatives | Creating datasets and case records |
| DS09-4 | How do new lines and repeat observations affect it? | Feature/measure/history/identity impact | Expanding the service |
| DS09-5 | Can the model explain amounts and decisions? | Feature/schema/measure decision pack | Prototype and finance acceptance |

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
- **RULE-09 / Leakage:** Eligible work is delivered and commercially approved. Expected amount is hours times agreed rate. Posted invoice lines are net amounts before tax; sum by work ID. Potential unbilled amount is `max(expected minus posted, 0)` for eligible work. Excess billing, draft invoices and unknown work IDs are separate exceptions, not netted against unbilled work. EUR only; no extrapolation.

SOURCE: client/hve-development/09-value.md
# Case 09: what must a commercial-insight solution explain?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-09 and work/invoice fixtures remain authoritative.**

## Client interview evidence

- **C09-F1 / Lina:** "Show delivered, approved work that is not fully covered by posted invoices."
- **C09-F2 / Analyst:** "One work item can have several invoice lines. Draft invoices must not look like posted billing."
- **C09-F3 / Finance:** "An exception is a reason to investigate, not permission to invoice or call the money recovered."
- **C09-F4 / Case owner:** "I need to assign an investigation, explain its disposition and recognize a repeated report of the same work."
- **C09-F5 / Lina:** "Show the underlying amounts and source date so I can explain the number."
- **C09-F6:** The first scope is net EUR, agreed rate on each work item, no tax/revenue-recognition automation and no actual recovery evidence.

## Technology-specific decision context

Power BI can expose reconciled insight; a model-driven app can support investigation; Power Automate can route alerts/work. Decide whether the customer needs a one-off diagnostic or a recurring managed process and which features justify persistent case data.

The schema/semantic model must preserve work and invoice-line grain. Decide which amounts are source facts, derived measures, business dispositions and actual recovery events.

## Proposal to inspect

- **C09-P1:** Use one joined row for every invoice line and repeat each work item's expected amount on each row.
- **C09-P2:** Store only a total labeled Recovered revenue with no source lineage or date.
- **C09-P3:** Create a fresh investigation every refresh and overwrite prior reviewer notes.

## Change for discussion

- **C09-C1:** Add a Posted EUR 100 line for WORK-01 in a derived working case. The model must explain the changed gap.
- **C09-C2:** A work item may be reported again after an investigation closes. Decide active-case uniqueness, history and observation-period needs rather than creating uncontrolled duplicates.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C09-T1 | The candidate model cannot reconstruct WORK-01's expected/posted amounts independently. |
| C09-T2 | Draft and Posted line states are indistinguishable. |
| C09-T3 | A report cannot explain which source date or work records support the total. |
| C09-T4 | The same active issue creates multiple unowned cases. |
| C09-T5 | Potential, validated and recovered amounts are treated as the same business fact. |

No Power Query code, published dashboard or achieved recovery is supplied.


SOURCE: client/offerings/delivery-work.csv
work_id,hours,rate_eur,delivered,commercially_approved
WORK-01,10,100,true,true
WORK-02,5,100,true,true
WORK-03,3,100,true,false
WORK-04,4,100,false,true
WORK-05,2,100,true,true


SOURCE: client/offerings/invoice-lines.csv
line_id,work_id,net_eur,status
INV-01,WORK-01,600,Posted
INV-02,WORK-01,200,Posted
INV-03,WORK-02,500,Posted
INV-04,WORK-05,200,Draft
[END STANDALONE CONTEXT]

Decision step DS09-3: compare a joined flat dataset with distinct work,
invoice-line and any investigation/observation/disposition concepts
the selected features need. Specify purpose, fields/types/requiredness,
keys/cardinality, ownership, source date and feature IDs.
Keep agreed source amounts/rates, derived measures and finance
dispositions distinct. Explain Draft, unmatched and excess-billing
information without adding unjustified tables or writing query code.
Output label: EX09-P3: Commercial schema and measure options.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX09-P3: Commercial schema and measure options` using [output navigation](OUTPUTS.md).

**Decision step:** DS09-3, logical/semantic data modelling.

**Do with it:** walk WORK-01 with two lines and WORK-05 with a Draft. Identify how lineage and one expected work value are preserved. Ask which selected feature requires every proposed investigation/history field.

**Next:** select a model with reasons and limits for repeat-observation review.

## Phase 4. Evaluate source changes and repeated investigations

### Prompt 4: decide which history and identity are necessary

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 09: Power BI, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Commercial-service decision | HVE output | Used before |
|---|---|---|---|
| DS09-1 | What must finance explain or act on? | User needs and evidence limits | Choosing dashboard versus managed service |
| DS09-2 | Which insight and follow-up features are first release? | Prioritized visibility, lineage, casework and notification choices | Building reports/actions |
| DS09-3 | What source grain and investigation relationships are needed? | Schema/semantic-model alternatives | Creating datasets and case records |
| DS09-4 | How do new lines and repeat observations affect it? | Feature/measure/history/identity impact | Expanding the service |
| DS09-5 | Can the model explain amounts and decisions? | Feature/schema/measure decision pack | Prototype and finance acceptance |

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
- **RULE-09 / Leakage:** Eligible work is delivered and commercially approved. Expected amount is hours times agreed rate. Posted invoice lines are net amounts before tax; sum by work ID. Potential unbilled amount is `max(expected minus posted, 0)` for eligible work. Excess billing, draft invoices and unknown work IDs are separate exceptions, not netted against unbilled work. EUR only; no extrapolation.

SOURCE: client/hve-development/09-value.md
# Case 09: what must a commercial-insight solution explain?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-09 and work/invoice fixtures remain authoritative.**

## Client interview evidence

- **C09-F1 / Lina:** "Show delivered, approved work that is not fully covered by posted invoices."
- **C09-F2 / Analyst:** "One work item can have several invoice lines. Draft invoices must not look like posted billing."
- **C09-F3 / Finance:** "An exception is a reason to investigate, not permission to invoice or call the money recovered."
- **C09-F4 / Case owner:** "I need to assign an investigation, explain its disposition and recognize a repeated report of the same work."
- **C09-F5 / Lina:** "Show the underlying amounts and source date so I can explain the number."
- **C09-F6:** The first scope is net EUR, agreed rate on each work item, no tax/revenue-recognition automation and no actual recovery evidence.

## Technology-specific decision context

Power BI can expose reconciled insight; a model-driven app can support investigation; Power Automate can route alerts/work. Decide whether the customer needs a one-off diagnostic or a recurring managed process and which features justify persistent case data.

The schema/semantic model must preserve work and invoice-line grain. Decide which amounts are source facts, derived measures, business dispositions and actual recovery events.

## Proposal to inspect

- **C09-P1:** Use one joined row for every invoice line and repeat each work item's expected amount on each row.
- **C09-P2:** Store only a total labeled Recovered revenue with no source lineage or date.
- **C09-P3:** Create a fresh investigation every refresh and overwrite prior reviewer notes.

## Change for discussion

- **C09-C1:** Add a Posted EUR 100 line for WORK-01 in a derived working case. The model must explain the changed gap.
- **C09-C2:** A work item may be reported again after an investigation closes. Decide active-case uniqueness, history and observation-period needs rather than creating uncontrolled duplicates.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C09-T1 | The candidate model cannot reconstruct WORK-01's expected/posted amounts independently. |
| C09-T2 | Draft and Posted line states are indistinguishable. |
| C09-T3 | A report cannot explain which source date or work records support the total. |
| C09-T4 | The same active issue creates multiple unowned cases. |
| C09-T5 | Potential, validated and recovered amounts are treated as the same business fact. |

No Power Query code, published dashboard or achieved recovery is supplied.


SOURCE: client/offerings/delivery-work.csv
work_id,hours,rate_eur,delivered,commercially_approved
WORK-01,10,100,true,true
WORK-02,5,100,true,true
WORK-03,3,100,true,false
WORK-04,4,100,false,true
WORK-05,2,100,true,true


SOURCE: client/offerings/invoice-lines.csv
line_id,work_id,net_eur,status
INV-01,WORK-01,600,Posted
INV-02,WORK-01,200,Posted
INV-03,WORK-02,500,Posted
INV-04,WORK-05,200,Draft
[END STANDALONE CONTEXT]

Decision step DS09-4: apply C09-C1's additional Posted EUR 100 working
case and C09-C2's report after a closed investigation.
Show feature, measure, relationship, case identity/history and source
observation consequences. Compare one active case per work with a
period/observation-aware model against the actual business need.
Keep original sources unchanged and no recovery claim implied.
Output label: EX09-P4: Commercial feature and schema change impact.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX09-P4: Commercial feature and schema change impact` using [output navigation](OUTPUTS.md).

**Decision step:** DS09-4, observation/history tradeoffs.

**Do with it:** verify the derived potential gap becomes EUR 300. Decide what a new observation should do to an open or closed case and which information is needed to explain the difference.

**Next:** pass selected rules/model and open finance questions to the pack.

## Phase 5. Validate the reporting/casework design

### Prompt 5: produce the commercial feature/schema decision pack

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / feature and schema decisions
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 09: Power BI, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Commercial-service decision | HVE output | Used before |
|---|---|---|---|
| DS09-1 | What must finance explain or act on? | User needs and evidence limits | Choosing dashboard versus managed service |
| DS09-2 | Which insight and follow-up features are first release? | Prioritized visibility, lineage, casework and notification choices | Building reports/actions |
| DS09-3 | What source grain and investigation relationships are needed? | Schema/semantic-model alternatives | Creating datasets and case records |
| DS09-4 | How do new lines and repeat observations affect it? | Feature/measure/history/identity impact | Expanding the service |
| DS09-5 | Can the model explain amounts and decisions? | Feature/schema/measure decision pack | Prototype and finance acceptance |

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
- **RULE-09 / Leakage:** Eligible work is delivered and commercially approved. Expected amount is hours times agreed rate. Posted invoice lines are net amounts before tax; sum by work ID. Potential unbilled amount is `max(expected minus posted, 0)` for eligible work. Excess billing, draft invoices and unknown work IDs are separate exceptions, not netted against unbilled work. EUR only; no extrapolation.

SOURCE: client/hve-development/09-value.md
# Case 09: what must a commercial-insight solution explain?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-09 and work/invoice fixtures remain authoritative.**

## Client interview evidence

- **C09-F1 / Lina:** "Show delivered, approved work that is not fully covered by posted invoices."
- **C09-F2 / Analyst:** "One work item can have several invoice lines. Draft invoices must not look like posted billing."
- **C09-F3 / Finance:** "An exception is a reason to investigate, not permission to invoice or call the money recovered."
- **C09-F4 / Case owner:** "I need to assign an investigation, explain its disposition and recognize a repeated report of the same work."
- **C09-F5 / Lina:** "Show the underlying amounts and source date so I can explain the number."
- **C09-F6:** The first scope is net EUR, agreed rate on each work item, no tax/revenue-recognition automation and no actual recovery evidence.

## Technology-specific decision context

Power BI can expose reconciled insight; a model-driven app can support investigation; Power Automate can route alerts/work. Decide whether the customer needs a one-off diagnostic or a recurring managed process and which features justify persistent case data.

The schema/semantic model must preserve work and invoice-line grain. Decide which amounts are source facts, derived measures, business dispositions and actual recovery events.

## Proposal to inspect

- **C09-P1:** Use one joined row for every invoice line and repeat each work item's expected amount on each row.
- **C09-P2:** Store only a total labeled Recovered revenue with no source lineage or date.
- **C09-P3:** Create a fresh investigation every refresh and overwrite prior reviewer notes.

## Change for discussion

- **C09-C1:** Add a Posted EUR 100 line for WORK-01 in a derived working case. The model must explain the changed gap.
- **C09-C2:** A work item may be reported again after an investigation closes. Decide active-case uniqueness, history and observation-period needs rather than creating uncontrolled duplicates.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C09-T1 | The candidate model cannot reconstruct WORK-01's expected/posted amounts independently. |
| C09-T2 | Draft and Posted line states are indistinguishable. |
| C09-T3 | A report cannot explain which source date or work records support the total. |
| C09-T4 | The same active issue creates multiple unowned cases. |
| C09-T5 | Potential, validated and recovered amounts are treated as the same business fact. |

No Power Query code, published dashboard or achieved recovery is supplied.


SOURCE: client/offerings/delivery-work.csv
work_id,hours,rate_eur,delivered,commercially_approved
WORK-01,10,100,true,true
WORK-02,5,100,true,true
WORK-03,3,100,true,false
WORK-04,4,100,false,true
WORK-05,2,100,true,true


SOURCE: client/offerings/invoice-lines.csv
line_id,work_id,net_eur,status
INV-01,WORK-01,600,Posted
INV-02,WORK-01,200,Posted
INV-03,WORK-02,500,Posted
INV-04,WORK-05,200,Draft
[END STANDALONE CONTEXT]

Decision step DS09-5: review fictional design feedback C09-T1..T5.
Consolidate feature priorities, preferred model, grain/measure
definitions, field/relationship rationale, access/history rules,
rejected alternatives, source-record walkthroughs and open decisions.
Define prototype acceptance and Revenue Leakage Diagnostic +
Resolution offer boundaries. No query implementation or recovered-money
claim is established by this pack.
Output label: EX09-P5: Commercial feature and schema decision pack.
Include the label in the original output; preserve canonical paths.
```

**Find this output:** `EX09-P5: Commercial feature and schema decision pack` using [output navigation](OUTPUTS.md).

**Decision step:** DS09-5, design/measure acceptance.

**Do with it:** have a partner explain one displayed amount, its underlying facts/date and the related investigation state. Revise the design if it cannot distinguish potential, validated and actually recovered value.

**Next:** use the selected pack for prototype/build planning and the offering canvas.

**Gateway 2:** the features/data can explain and support the client decision without turning a calculated exception into posting authority.

## What good looks like

HVE helps choose useful insight/casework features and the right logical grain, history and ownership. The design remains explainable and proportionate before any report is implemented.

## Recovery and takeaways

If HVE starts writing query/visual fixes, request the unresolved feature/grain decision. If it introduces a new amount, require source meaning and evidence. With no live HVE, record a desk walkthrough.

Take home the need-to-measure-to-model method as **Revenue Leakage Diagnostic + Resolution** IP. Use the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Close the guide: which values are facts, measures and dispositions? When is observation/history needed? Why is a report refresh not a new recovery event?

**Optional implementation reference:** [earlier maker material](guided-builds/09-revenue-leakage.md) is downstream from these decisions.
