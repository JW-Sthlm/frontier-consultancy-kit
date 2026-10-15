# Work with HVE on feature and schema decisions

[Start here](START-HERE.md) | [Course](README.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md)

**HVE helps you make informed design choices.** The exercises use specific Power Platform capabilities, but do not ask HVE to tinker with implementation.

## 1. Begin with client evidence

Give HVE the user jobs, pain points, examples, business policy, desired outcome and unknowns. A list of product capabilities is not a requirements interview.

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / General course setup, retrieval or guidance request
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

GUIDE CONTEXT: delivery-playbook.md
# Work with HVE on feature and schema decisions

[Start here](START-HERE.md) | [Course](README.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md)

**HVE helps you make informed design choices.** The exercises use specific Power Platform capabilities, but do not ask HVE to tinker with implementation.

## 1. Begin with client evidence

Give HVE the user jobs, pain points, examples, business policy, desired outcome and unknowns. A list of product capabilities is not a requirements interview.



The supplied CSVs are examples, not database blueprints.

## 2. Make feature choices

Ask for feature IDs with source need, value, dependency and first release/later/not needed/needs validation disposition.

Technology specificity belongs here: offline/device capture for canvas, relational casework for model-driven apps, routing/events for flows, knowledge/actions for agents, external visibility for Pages and grain/lineage for BI.

Compare simpler alternatives. HVE should not include a feature merely because the platform supports it.

## 3. Derive and compare schemas

For each selected feature, ask what information must be captured, retained, related, owned and explained later.

A useful schema comparison covers:

- Entity purpose and stable business identity.
- Fields, logical types and required versus optional information.
- Relationship cardinality, including zero/multiple child records.
- Current state versus version/history requirements.
- Ownership, visibility and business rules.
- Supporting feature IDs and the cost/limit of a smaller option.

Do not require a separate table for every noun or force all future variation into the first model.

## 4. Use changes to improve the decision

Introduce a concrete client change: multiple findings, multi-line order, legal-entity delegation, status lookup or another reviewer.



Record an actual revision or a source-backed confirmation. Do not manufacture a mistake if the first output is good.

## 5. Validate the model with records

Walk examples rather than code:

- One inspection with zero findings, another with twelve.
- One order with an unknown quantity and several issues.
- A supplier correction that must preserve the original.
- A retry that must remain the same request.
- A work item with several Posted/Draft invoice lines.

Ask where each fact/state/history belongs. A model that cannot explain the examples needs revision. A model with unused entities also needs challenge.

## 6. Make the decision pack actionable

The final output is:

1. Need-to-feature evidence trace.
2. Included/deferred/rejected features and technology implications.
3. Preferred logical model, field/relationship rationale and alternative.
4. Business states, ownership/access and retention/history rules.
5. Example-record walkthroughs and functional acceptance scenarios.
6. Open client decisions and the next prototype/build question.

This is the basis for implementation later, not its proof. Do not replace it with a code patch, generic decision log or exhaustive product wish list.

## 7. Keep HVE project evidence coherent

The current Cowork plugin uses `squad_run` for new HVE work; the server owns routing. You use natural-language requests, not a fixed manual specialist-tool sequence.

After completion, inspect original artifacts and visible review/conditions. If role/stage evidence is not exposed, mark it unknown. A roster is not proof every specialist ran. A Go recommendation is not customer acceptance.

The selected OneDrive/SharePoint project and actual artifacts supply continuity. Use [output navigation](OUTPUTS.md): project `START-HERE.md`, `library/deliverables.md`, `library/decisions.md` and `library/next-steps.md`. Do not create a rival artifact store.

## 8. Handle questions and gates correctly

| Situation | Supported action |
|---|---|
| Same-run business question | Answer the exact question from evidence or the workshop owner; do not invent a fact |
| Working run | Follow its status, not duplicate work |
| Operator gate | Ask the authorized operator; a content answer is not gate approval |
| Access/tool unavailable | Preserve the blocker; do not use direct specialist fallbacks |
| Provider rejection | Preserve the safe receipt and follow review/escalation; do not evade the block |
| Missing original output | Retrieve/synchronize the existing run rather than regenerate merely to get a link |

A worksheet planning disposition does not change server acceptance. A terminal run is not resumed by making up a question ID.

## 9. Transfer the reasoning and offering

Let a partner find an actual decision artifact and explain why a feature/data choice was made. Ask them to raise the next client question, not to follow hidden author instructions.

Extract the reusable need/feature/schema decision method, not client identities or arbitrary field lists. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Live HVE, a desk walkthrough, supplied design-review feedback and any optional actual implementation remain separate evidence kinds.

This is a general request, not an unspecified client-design task. If the task refers to an attached interview, selected lab, actual output, handoff or bracketed placeholder without supplying its value, ask me for that exact input first. Do not assume attachments exist or generate a client design without its evidence. The numbered exercise prompts include their full scenarios.
[END STANDALONE CONTEXT]

Use the interview evidence and policy. Identify the user outcome and
questions that could change the feature scope. Separate confirmed need,
future aspiration and assumption. Do not start from a ready-made schema.
```

The supplied CSVs are examples, not database blueprints.

## 2. Make feature choices

Ask for feature IDs with source need, value, dependency and first release/later/not needed/needs validation disposition.

Technology specificity belongs here: offline/device capture for canvas, relational casework for model-driven apps, routing/events for flows, knowledge/actions for agents, external visibility for Pages and grain/lineage for BI.

Compare simpler alternatives. HVE should not include a feature merely because the platform supports it.

## 3. Derive and compare schemas

For each selected feature, ask what information must be captured, retained, related, owned and explained later.

A useful schema comparison covers:

- Entity purpose and stable business identity.
- Fields, logical types and required versus optional information.
- Relationship cardinality, including zero/multiple child records.
- Current state versus version/history requirements.
- Ownership, visibility and business rules.
- Supporting feature IDs and the cost/limit of a smaller option.

Do not require a separate table for every noun or force all future variation into the first model.

## 4. Use changes to improve the decision

Introduce a concrete client change: multiple findings, multi-line order, legal-entity delegation, status lookup or another reviewer.

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / General course setup, retrieval or guidance request
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

GUIDE CONTEXT: delivery-playbook.md
# Work with HVE on feature and schema decisions

[Start here](START-HERE.md) | [Course](README.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md)

**HVE helps you make informed design choices.** The exercises use specific Power Platform capabilities, but do not ask HVE to tinker with implementation.

## 1. Begin with client evidence

Give HVE the user jobs, pain points, examples, business policy, desired outcome and unknowns. A list of product capabilities is not a requirements interview.



The supplied CSVs are examples, not database blueprints.

## 2. Make feature choices

Ask for feature IDs with source need, value, dependency and first release/later/not needed/needs validation disposition.

Technology specificity belongs here: offline/device capture for canvas, relational casework for model-driven apps, routing/events for flows, knowledge/actions for agents, external visibility for Pages and grain/lineage for BI.

Compare simpler alternatives. HVE should not include a feature merely because the platform supports it.

## 3. Derive and compare schemas

For each selected feature, ask what information must be captured, retained, related, owned and explained later.

A useful schema comparison covers:

- Entity purpose and stable business identity.
- Fields, logical types and required versus optional information.
- Relationship cardinality, including zero/multiple child records.
- Current state versus version/history requirements.
- Ownership, visibility and business rules.
- Supporting feature IDs and the cost/limit of a smaller option.

Do not require a separate table for every noun or force all future variation into the first model.

## 4. Use changes to improve the decision

Introduce a concrete client change: multiple findings, multi-line order, legal-entity delegation, status lookup or another reviewer.



Record an actual revision or a source-backed confirmation. Do not manufacture a mistake if the first output is good.

## 5. Validate the model with records

Walk examples rather than code:

- One inspection with zero findings, another with twelve.
- One order with an unknown quantity and several issues.
- A supplier correction that must preserve the original.
- A retry that must remain the same request.
- A work item with several Posted/Draft invoice lines.

Ask where each fact/state/history belongs. A model that cannot explain the examples needs revision. A model with unused entities also needs challenge.

## 6. Make the decision pack actionable

The final output is:

1. Need-to-feature evidence trace.
2. Included/deferred/rejected features and technology implications.
3. Preferred logical model, field/relationship rationale and alternative.
4. Business states, ownership/access and retention/history rules.
5. Example-record walkthroughs and functional acceptance scenarios.
6. Open client decisions and the next prototype/build question.

This is the basis for implementation later, not its proof. Do not replace it with a code patch, generic decision log or exhaustive product wish list.

## 7. Keep HVE project evidence coherent

The current Cowork plugin uses `squad_run` for new HVE work; the server owns routing. You use natural-language requests, not a fixed manual specialist-tool sequence.

After completion, inspect original artifacts and visible review/conditions. If role/stage evidence is not exposed, mark it unknown. A roster is not proof every specialist ran. A Go recommendation is not customer acceptance.

The selected OneDrive/SharePoint project and actual artifacts supply continuity. Use [output navigation](OUTPUTS.md): project `START-HERE.md`, `library/deliverables.md`, `library/decisions.md` and `library/next-steps.md`. Do not create a rival artifact store.

## 8. Handle questions and gates correctly

| Situation | Supported action |
|---|---|
| Same-run business question | Answer the exact question from evidence or the workshop owner; do not invent a fact |
| Working run | Follow its status, not duplicate work |
| Operator gate | Ask the authorized operator; a content answer is not gate approval |
| Access/tool unavailable | Preserve the blocker; do not use direct specialist fallbacks |
| Provider rejection | Preserve the safe receipt and follow review/escalation; do not evade the block |
| Missing original output | Retrieve/synchronize the existing run rather than regenerate merely to get a link |

A worksheet planning disposition does not change server acceptance. A terminal run is not resumed by making up a question ID.

## 9. Transfer the reasoning and offering

Let a partner find an actual decision artifact and explain why a feature/data choice was made. Ask them to raise the next client question, not to follow hidden author instructions.

Extract the reusable need/feature/schema decision method, not client identities or arbitrary field lists. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Live HVE, a desk walkthrough, supplied design-review feedback and any optional actual implementation remain separate evidence kinds.

This is a general request, not an unspecified client-design task. If the task refers to an attached interview, selected lab, actual output, handoff or bracketed placeholder without supplying its value, ask me for that exact input first. Do not assume attachments exist or generate a client design without its evidence. The numbered exercise prompts include their full scenarios.
[END STANDALONE CONTEXT]

Show the feature and schema consequences of this change.
What must change now, what can wait, and which assumption would make
the simpler design unsafe? Preserve policy and name the human decision.
```

Record an actual revision or a source-backed confirmation. Do not manufacture a mistake if the first output is good.

## 5. Validate the model with records

Walk examples rather than code:

- One inspection with zero findings, another with twelve.
- One order with an unknown quantity and several issues.
- A supplier correction that must preserve the original.
- A retry that must remain the same request.
- A work item with several Posted/Draft invoice lines.

Ask where each fact/state/history belongs. A model that cannot explain the examples needs revision. A model with unused entities also needs challenge.

## 6. Make the decision pack actionable

The final output is:

1. Need-to-feature evidence trace.
2. Included/deferred/rejected features and technology implications.
3. Preferred logical model, field/relationship rationale and alternative.
4. Business states, ownership/access and retention/history rules.
5. Example-record walkthroughs and functional acceptance scenarios.
6. Open client decisions and the next prototype/build question.

This is the basis for implementation later, not its proof. Do not replace it with a code patch, generic decision log or exhaustive product wish list.

## 7. Keep HVE project evidence coherent

The current Cowork plugin uses `squad_run` for new HVE work; the server owns routing. You use natural-language requests, not a fixed manual specialist-tool sequence.

After completion, inspect original artifacts and visible review/conditions. If role/stage evidence is not exposed, mark it unknown. A roster is not proof every specialist ran. A Go recommendation is not customer acceptance.

The selected OneDrive/SharePoint project and actual artifacts supply continuity. Use [output navigation](OUTPUTS.md): project `START-HERE.md`, `library/deliverables.md`, `library/decisions.md` and `library/next-steps.md`. Do not create a rival artifact store.

## 8. Handle questions and gates correctly

| Situation | Supported action |
|---|---|
| Same-run business question | Answer the exact question from evidence or the workshop owner; do not invent a fact |
| Working run | Follow its status, not duplicate work |
| Operator gate | Ask the authorized operator; a content answer is not gate approval |
| Access/tool unavailable | Preserve the blocker; do not use direct specialist fallbacks |
| Provider rejection | Preserve the safe receipt and follow review/escalation; do not evade the block |
| Missing original output | Retrieve/synchronize the existing run rather than regenerate merely to get a link |

A worksheet planning disposition does not change server acceptance. A terminal run is not resumed by making up a question ID.

## 9. Transfer the reasoning and offering

Let a partner find an actual decision artifact and explain why a feature/data choice was made. Ask them to raise the next client question, not to follow hidden author instructions.

Extract the reusable need/feature/schema decision method, not client identities or arbitrary field lists. Complete the [receipt](client/offerings/lab-receipt.md) and [offering canvas](client/offerings/offering-canvas.md).

Live HVE, a desk walkthrough, supplied design-review feedback and any optional actual implementation remain separate evidence kinds.
