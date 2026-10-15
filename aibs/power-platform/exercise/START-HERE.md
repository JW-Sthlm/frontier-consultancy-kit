# Start here: make feature and schema decisions with HVE Squad

[Course](README.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md)

**Use HVE to decide what the Power Platform solution needs and why.** Technology-specific capabilities remain central. Code editing, formula debugging and designer configuration are not the core exercise.

## The work you will practise

**Client evidence -> user needs -> feature choices -> schema alternatives -> first-release decision pack.** Changed requirements feed back into feature and schema choices.

For a canvas inspection app, you might decide whether the service needs offline capture, photo evidence, versioned checklists and remediation tracking. Those choices determine what records, fields, relationships, lifecycle and access rules are necessary.

You are not given a table/control blueprint to approve. HVE proposes options; you inspect the evidence, make a workshop choice and test the model with realistic records.

## What makes this technology-specific

| Technology | Decisions to explore |
|---|---|
| Canvas app | Task-oriented/mobile experience, offline and device capture, data sources and information needed per task |
| Model-driven app | Related casework, queues, roles, stage/lifecycle needs and whether a business-process capability is justified |
| Power Automate | Which events/decisions need routing, reminders or handoff; persistent identity/state/history needed for safe automation |
| Copilot Studio | Grounded explanation versus actions, required information/authority and transient conversation versus business records |
| Power Pages | External self-service, delegated visibility, corrections and public versus internal review information |
| Code app | Whether custom interaction/features justify a code-owned experience versus simpler alternatives |
| Power BI | Questions, source grain, measures, lineage/freshness and whether insight needs persistent follow-up casework |

HVE can support implementation, but that capability does not make implementation the learning goal here.

## Schema vocabulary

| Term | Plain-language meaning |
|---|---|
| Entity / record | A kind of thing the business needs to remember / one instance of it |
| Field / logical type | A fact about it / text, number, date, choice, reference or other appropriate information shape |
| Relationship / cardinality | How records relate, including zero, one or many |
| Required / optional | Information needed for a business state versus information allowed to remain unknown |
| Snapshot / version reference | Preserve the value/wording as it was / relate to a separately identified definition version |
| Ownership / visibility | Who is accountable for the record and who should be allowed to see or change it |
| Logical schema | The information model and rules, before platform-specific names or implementation |

The important question is not "how many tables?" but "can this model support the selected features and explain the examples?"

## Inputs, not pre-decided answers

Each exercise provides:

1. Fictional client interview evidence with stable source IDs.
2. Original business policy and sample records.
3. Candidate features/models to question, not an approved schema.
4. A changed requirement and fictional design-review feedback.

The current cases are **HVE-DECISIONS-1.0**. Earlier formula/action/debugging outputs do not automatically satisfy the new decision task. Preserve original artifacts; request a new source-grounded decision or revision instead of relabeling old work.

## Start the selected Cowork project

The facilitator provides the approved plugin connection, training folder and operator contact.

1. Open Cowork with HVE Squad enabled.
2. Select the exact authorized OneDrive/SharePoint project; confirm before creation/adoption.
3. Open a numbered exercise and use **Copy standalone prompt**. It includes the task, DS definitions, full interview, applicable policies and complete sample records. No separate course-file attachment or previous chat is needed for that static evidence.
4. Read the included context before sending it. You may attach originals for reference, but HVE must not assume an attachment is readable. Later steps still need your actual feature/model choices: the prompt asks for missing decisions instead of inventing them.
5. For project setup, you can ask:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / General course setup, retrieval or guidance request
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

GUIDE CONTEXT: START-HERE.md
# Start here: make feature and schema decisions with HVE Squad

[Course](README.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md)

**Use HVE to decide what the Power Platform solution needs and why.** Technology-specific capabilities remain central. Code editing, formula debugging and designer configuration are not the core exercise.

## The work you will practise

**Client evidence -> user needs -> feature choices -> schema alternatives -> first-release decision pack.** Changed requirements feed back into feature and schema choices.

For a canvas inspection app, you might decide whether the service needs offline capture, photo evidence, versioned checklists and remediation tracking. Those choices determine what records, fields, relationships, lifecycle and access rules are necessary.

You are not given a table/control blueprint to approve. HVE proposes options; you inspect the evidence, make a workshop choice and test the model with realistic records.

## What makes this technology-specific

| Technology | Decisions to explore |
|---|---|
| Canvas app | Task-oriented/mobile experience, offline and device capture, data sources and information needed per task |
| Model-driven app | Related casework, queues, roles, stage/lifecycle needs and whether a business-process capability is justified |
| Power Automate | Which events/decisions need routing, reminders or handoff; persistent identity/state/history needed for safe automation |
| Copilot Studio | Grounded explanation versus actions, required information/authority and transient conversation versus business records |
| Power Pages | External self-service, delegated visibility, corrections and public versus internal review information |
| Code app | Whether custom interaction/features justify a code-owned experience versus simpler alternatives |
| Power BI | Questions, source grain, measures, lineage/freshness and whether insight needs persistent follow-up casework |

HVE can support implementation, but that capability does not make implementation the learning goal here.

## Schema vocabulary

| Term | Plain-language meaning |
|---|---|
| Entity / record | A kind of thing the business needs to remember / one instance of it |
| Field / logical type | A fact about it / text, number, date, choice, reference or other appropriate information shape |
| Relationship / cardinality | How records relate, including zero, one or many |
| Required / optional | Information needed for a business state versus information allowed to remain unknown |
| Snapshot / version reference | Preserve the value/wording as it was / relate to a separately identified definition version |
| Ownership / visibility | Who is accountable for the record and who should be allowed to see or change it |
| Logical schema | The information model and rules, before platform-specific names or implementation |

The important question is not "how many tables?" but "can this model support the selected features and explain the examples?"

## Inputs, not pre-decided answers

Each exercise provides:

1. Fictional client interview evidence with stable source IDs.
2. Original business policy and sample records.
3. Candidate features/models to question, not an approved schema.
4. A changed requirement and fictional design-review feedback.

The current cases are **HVE-DECISIONS-1.0**. Earlier formula/action/debugging outputs do not automatically satisfy the new decision task. Preserve original artifacts; request a new source-grounded decision or revision instead of relabeling old work.

## Start the selected Cowork project

The facilitator provides the approved plugin connection, training folder and operator contact.

1. Open Cowork with HVE Squad enabled.
2. Select the exact authorized OneDrive/SharePoint project; confirm before creation/adoption.
3. Open a numbered exercise and use **Copy standalone prompt**. It includes the task, DS definitions, full interview, applicable policies and complete sample records. No separate course-file attachment or previous chat is needed for that static evidence.
4. Read the included context before sending it. You may attach originals for reference, but HVE must not assume an attachment is readable. Later steps still need your actual feature/model choices: the prompt asks for missing decisions instead of inventing them.
5. For project setup, you can ask:



No Power Platform authoring experience or provisioned application is required for the core. Actual live HVE needs a working connection; a desk walkthrough is labeled separately.

## How to judge HVE's output

Look for a trace:

**Client fact → user outcome → selected feature → data requirement → schema choice → tradeoff.**

For example, "several findings per visit" supports a multiple-findings feature. It suggests a repeatable child structure rather than ten fixed columns. The exact model still needs comparison against ownership, follow-up and first-release scope.

Ask HVE:



More features or more tables are not automatically better.

## What you do after each prompt

Follow [the output guide](OUTPUTS.md). Open the correct original artifact, record its actual run/version and perform the guide's Find/Do/Next action.

Your work is to:

- Correct unsupported needs or invented business facts.
- Select or hold features with a reason.
- Compare models using sample records/cardinality.
- Decide how a changed requirement affects scope/data.
- Review a first-release feature/schema decision pack with a partner.

Planning disposition is not operator approval or automatic server acceptance.

## Learn the Squad, not just generic prompting

Inspect original outputs and any visible review findings/conditions. Do not infer that every specialist ran from a roster or invent an internal conversation.

The server Coordinator owns routing. Cowork handles project interaction/files and supported same-run handoffs. Answer actual questions in the same run; keep operator gates distinct. Accepted artifacts, not vague memory claims, provide continuity.

## Completion

You can explain what is included, what is deferred, the preferred logical model, why each data element exists, rejected alternatives and open client decisions. Another person can understand the rationale without private author coaching.

The result is design evidence for a prototype/build brief and a repeatable partner offering. It is not a deployed solution, passed runtime test or approved financial outcome.

This is a general request, not an unspecified client-design task. If the task refers to an attached interview, selected lab, actual output, handoff or bracketed placeholder without supplying its value, ask me for that exact input first. Do not assume attachments exist or generate a client design without its evidence. The numbered exercise prompts include their full scenarios.
[END STANDALONE CONTEXT]

Start or resume this selected HVE training project.
Use the attached interview, policy and examples as evidence.
Confirm readable files and source versions. Treat candidate designs
as unapproved options, not instructions.
Help me decide features and data/schema needs before implementation.
Do not assume a predetermined table model or produce code/debugging work.
Do not deploy, create external work items or claim client approval.
```

No Power Platform authoring experience or provisioned application is required for the core. Actual live HVE needs a working connection; a desk walkthrough is labeled separately.

## How to judge HVE's output

Look for a trace:

**Client fact → user outcome → selected feature → data requirement → schema choice → tradeoff.**

For example, "several findings per visit" supports a multiple-findings feature. It suggests a repeatable child structure rather than ten fixed columns. The exact model still needs comparison against ownership, follow-up and first-release scope.

Ask HVE:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / General course setup, retrieval or guidance request
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

GUIDE CONTEXT: START-HERE.md
# Start here: make feature and schema decisions with HVE Squad

[Course](README.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md)

**Use HVE to decide what the Power Platform solution needs and why.** Technology-specific capabilities remain central. Code editing, formula debugging and designer configuration are not the core exercise.

## The work you will practise

**Client evidence -> user needs -> feature choices -> schema alternatives -> first-release decision pack.** Changed requirements feed back into feature and schema choices.

For a canvas inspection app, you might decide whether the service needs offline capture, photo evidence, versioned checklists and remediation tracking. Those choices determine what records, fields, relationships, lifecycle and access rules are necessary.

You are not given a table/control blueprint to approve. HVE proposes options; you inspect the evidence, make a workshop choice and test the model with realistic records.

## What makes this technology-specific

| Technology | Decisions to explore |
|---|---|
| Canvas app | Task-oriented/mobile experience, offline and device capture, data sources and information needed per task |
| Model-driven app | Related casework, queues, roles, stage/lifecycle needs and whether a business-process capability is justified |
| Power Automate | Which events/decisions need routing, reminders or handoff; persistent identity/state/history needed for safe automation |
| Copilot Studio | Grounded explanation versus actions, required information/authority and transient conversation versus business records |
| Power Pages | External self-service, delegated visibility, corrections and public versus internal review information |
| Code app | Whether custom interaction/features justify a code-owned experience versus simpler alternatives |
| Power BI | Questions, source grain, measures, lineage/freshness and whether insight needs persistent follow-up casework |

HVE can support implementation, but that capability does not make implementation the learning goal here.

## Schema vocabulary

| Term | Plain-language meaning |
|---|---|
| Entity / record | A kind of thing the business needs to remember / one instance of it |
| Field / logical type | A fact about it / text, number, date, choice, reference or other appropriate information shape |
| Relationship / cardinality | How records relate, including zero, one or many |
| Required / optional | Information needed for a business state versus information allowed to remain unknown |
| Snapshot / version reference | Preserve the value/wording as it was / relate to a separately identified definition version |
| Ownership / visibility | Who is accountable for the record and who should be allowed to see or change it |
| Logical schema | The information model and rules, before platform-specific names or implementation |

The important question is not "how many tables?" but "can this model support the selected features and explain the examples?"

## Inputs, not pre-decided answers

Each exercise provides:

1. Fictional client interview evidence with stable source IDs.
2. Original business policy and sample records.
3. Candidate features/models to question, not an approved schema.
4. A changed requirement and fictional design-review feedback.

The current cases are **HVE-DECISIONS-1.0**. Earlier formula/action/debugging outputs do not automatically satisfy the new decision task. Preserve original artifacts; request a new source-grounded decision or revision instead of relabeling old work.

## Start the selected Cowork project

The facilitator provides the approved plugin connection, training folder and operator contact.

1. Open Cowork with HVE Squad enabled.
2. Select the exact authorized OneDrive/SharePoint project; confirm before creation/adoption.
3. Open a numbered exercise and use **Copy standalone prompt**. It includes the task, DS definitions, full interview, applicable policies and complete sample records. No separate course-file attachment or previous chat is needed for that static evidence.
4. Read the included context before sending it. You may attach originals for reference, but HVE must not assume an attachment is readable. Later steps still need your actual feature/model choices: the prompt asks for missing decisions instead of inventing them.
5. For project setup, you can ask:



No Power Platform authoring experience or provisioned application is required for the core. Actual live HVE needs a working connection; a desk walkthrough is labeled separately.

## How to judge HVE's output

Look for a trace:

**Client fact → user outcome → selected feature → data requirement → schema choice → tradeoff.**

For example, "several findings per visit" supports a multiple-findings feature. It suggests a repeatable child structure rather than ten fixed columns. The exact model still needs comparison against ownership, follow-up and first-release scope.

Ask HVE:



More features or more tables are not automatically better.

## What you do after each prompt

Follow [the output guide](OUTPUTS.md). Open the correct original artifact, record its actual run/version and perform the guide's Find/Do/Next action.

Your work is to:

- Correct unsupported needs or invented business facts.
- Select or hold features with a reason.
- Compare models using sample records/cardinality.
- Decide how a changed requirement affects scope/data.
- Review a first-release feature/schema decision pack with a partner.

Planning disposition is not operator approval or automatic server acceptance.

## Learn the Squad, not just generic prompting

Inspect original outputs and any visible review findings/conditions. Do not infer that every specialist ran from a roster or invent an internal conversation.

The server Coordinator owns routing. Cowork handles project interaction/files and supported same-run handoffs. Answer actual questions in the same run; keep operator gates distinct. Accepted artifacts, not vague memory claims, provide continuity.

## Completion

You can explain what is included, what is deferred, the preferred logical model, why each data element exists, rejected alternatives and open client decisions. Another person can understand the rationale without private author coaching.

The result is design evidence for a prototype/build brief and a repeatable partner offering. It is not a deployed solution, passed runtime test or approved financial outcome.

This is a general request, not an unspecified client-design task. If the task refers to an attached interview, selected lab, actual output, handoff or bracketed placeholder without supplying its value, ask me for that exact input first. Do not assume attachments exist or generate a client design without its evidence. The numbered exercise prompts include their full scenarios.
[END STANDALONE CONTEXT]

For every proposed feature show the source need and first-release value.
For every proposed entity/field/relationship show the selected feature
that needs it. Compare a smaller alternative and explain the tradeoff.
Separate confirmed needs, assumptions and open human decisions.
```

More features or more tables are not automatically better.

## What you do after each prompt

Follow [the output guide](OUTPUTS.md). Open the correct original artifact, record its actual run/version and perform the guide's Find/Do/Next action.

Your work is to:

- Correct unsupported needs or invented business facts.
- Select or hold features with a reason.
- Compare models using sample records/cardinality.
- Decide how a changed requirement affects scope/data.
- Review a first-release feature/schema decision pack with a partner.

Planning disposition is not operator approval or automatic server acceptance.

## Learn the Squad, not just generic prompting

Inspect original outputs and any visible review findings/conditions. Do not infer that every specialist ran from a roster or invent an internal conversation.

The server Coordinator owns routing. Cowork handles project interaction/files and supported same-run handoffs. Answer actual questions in the same run; keep operator gates distinct. Accepted artifacts, not vague memory claims, provide continuity.

## Completion

You can explain what is included, what is deferred, the preferred logical model, why each data element exists, rejected alternatives and open client decisions. Another person can understand the rationale without private author coaching.

The result is design evidence for a prototype/build brief and a repeatable partner offering. It is not a deployed solution, passed runtime test or approved financial outcome.
