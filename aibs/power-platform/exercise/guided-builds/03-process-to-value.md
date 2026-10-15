# Guided build 03: find waiting and build a reminder

[Lab 03](../03-process-to-value.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-03](../client/offerings/README.md) and [the event log](../client/offerings/process-events.csv). This log records events, not continuous labor.

## 1. Get the prepared resources

The card must identify Process Mining access, a `ZavaProcessToValue` solution, a Credit Review table, a permitted test notification connection and an operator error destination.

Credit Review's prepared display columns are Review reference, Case reference, Queued at UTC, Review stage, Reminder sent at and Last error. Review stage choices are Pending and Approved. The facilitator records logical column names for the expression below.

You build the mining process and reminder flow. You do not configure organization-wide credit policy or invent a production notification framework.

## 2. Ask HVE to explain the data before importing

In Cowork, after the first main-lab prompt:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / optional implementation reference
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 03: find waiting and build a reminder

[Lab 03](../03-process-to-value.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-03](../client/offerings/README.md) and [the event log](../client/offerings/process-events.csv). This log records events, not continuous labor.

## 1. Get the prepared resources

The card must identify Process Mining access, a `ZavaProcessToValue` solution, a Credit Review table, a permitted test notification connection and an operator error destination.

Credit Review's prepared display columns are Review reference, Case reference, Queued at UTC, Review stage, Reminder sent at and Last error. Review stage choices are Pending and Approved. The facilitator records logical column names for the expression below.

You build the mining process and reminder flow. You do not configure organization-wide credit policy or invent a production notification framework.

## 2. Ask HVE to explain the data before importing

In Cowork, after the first main-lab prompt:



**Expected:** CASE-01 is 28 elapsed hours. Verify the timestamps yourself. You are not required to know process-mining terminology in advance.

## 3. Create the mining process

1. Open [Power Automate](https://make.powerautomate.com/), choose the training environment and select **Process Mining**.
2. Choose **Start here** or **Create new process**, name it `ZavaOrderToCash`, and choose Create.
3. Select **Text/CSV** as the source. Use Browse OneDrive and upload the event-log working copy if that is the rehearsed route.
4. In the import preview confirm four columns and 14 rows. Do not accept a preview with the entire line in one column.
5. Map:

| Source | Process field |
|---|---|
| case_id | Case ID |
| activity | Activity Name |
| timestamp | Event timestamp |
| resource | Resource, if requested |

6. Confirm timestamp type and UTC interpretation using the facilitator's rehearsed import screen.
7. Start analysis/refresh. Wait for completion, then open the process map and case details.
8. Find CASE-01 and compare its four events with the CSV. Record current filters before taking any aggregate value.

**Expected:** three complete cases and one incomplete case in the source population. Some report screens filter incomplete cases by default; record that filter rather than claiming the fourth case vanished from the source.

## 4. Enter repeatable reminder test rows

Open the prepared queue app from the card. Enter these values. The facilitator prepares Queued at UTC as a time-zone-independent training column representing UTC. In its form choose the date and clock time separately; `Z` in this table explains UTC and is not text to type into a date picker.

| Review reference | Case reference | Queued at UTC | Stage | Reminder sent at |
|---|---|---|---|---|
| REV-01 | TEST-OLD | 2026-10-13 11:59Z | Pending | empty |
| REV-02 | TEST-BOUNDARY | 2026-10-13 12:00Z | Pending | empty |
| REV-03 | TEST-YOUNG | 2026-10-13 13:00Z | Pending | empty |
| REV-04 | TEST-APPROVED | 2026-10-13 10:00Z | Approved | empty |

These are new controlled test rows, not additional historical cases. The test's as-of time is `2026-10-14T00:00:00Z`.

## 5. Create a manual reminder flow

Use orientation **E**, inside the prepared solution:

1. Create an Instant flow called `Remind waiting credit review`.
2. Trigger: **Manually trigger a flow**. Add a Text input named `asOfUtc`.
3. Add **Compose**, rename it `AsOf`, and insert that trigger input through dynamic content.
4. Add **Dataverse > List rows**, selecting Credit Reviews. For the tiny training table, list the rows without an OData filter; this avoids guessing logical names or Choice numeric values.
5. Add **Apply to each** using List rows' `value` output.
6. Inside it add a Condition for Review stage = the prepared Pending value, Reminder sent at = null, and Queued at UTC earlier than 12 hours before AsOf.

The facilitator provides the actual Pending numeric value and column logical names on the card. In expression fields, a UTC age check has this form:



Replace only the bracketed logical name using the card and use the actual loop name from the designer. This is a copy-and-check expression, not an invitation to guess code. Check null queued times before calling `ticks`; the prepared test rows all have a valid queued time.

7. In the Yes branch add the approved training notification action. Include Case reference and `Waiting for credit review; no credit approval has been made`.
8. After a successful send, add **Update a row** for the current Credit Review row. Set Reminder sent at to the actual send time.
9. Save. In the trigger's Settings enable concurrency control with degree 1, as rehearsed by the facilitator. Use one worker only.

**Expected:** this flow reminds; it never changes Review stage to Approved.

## 6. Run exact boundary tests

Test using `2026-10-14T00:00:00Z`.

- REV-01 is 12 hours 1 minute old and should notify.
- REV-02 is exactly 12 hours old and should not.
- REV-03 is younger and should not.
- REV-04 is Approved and should not.

Open the run history and expand the Condition for each row. Verify one destination message and the stored reminder marker.

Run again using the same as-of time. REV-01 should be skipped because its reminder marker exists.

The facilitator demonstrates the prepared notification-failure path and operator error evidence. Do not disable a shared connection yourself. Discuss the residual crash window after sending but before saving; the training flow is not an exactly-once messaging service.

## 7. Return to HVE

Attach the case calculation, current mining filters, flow observations and reminder read-back. Run the main lab's review and offering prompts.

**Explain back:** the baseline is observed synthetic history; a working reminder is an implemented intervention; reduced cycle time is still unmeasured. A modeled second event log cannot turn into a claimed live improvement.

**Reference:** [Microsoft event-log import instructions](https://learn.microsoft.com/power-automate/process-mining-processes-and-data).
[END STANDALONE CONTEXT]

Use the fixed guided recipe. Explain one case's event sequence and
calculate its Received-to-Closed time step by step.
Explain why CASE-04 is incomplete. Show the difference between
waiting for approval and hands-on work. Keep calculations traceable
to rows; do not claim the reminder has improved anything yet.
```

**Expected:** CASE-01 is 28 elapsed hours. Verify the timestamps yourself. You are not required to know process-mining terminology in advance.

## 3. Create the mining process

1. Open [Power Automate](https://make.powerautomate.com/), choose the training environment and select **Process Mining**.
2. Choose **Start here** or **Create new process**, name it `ZavaOrderToCash`, and choose Create.
3. Select **Text/CSV** as the source. Use Browse OneDrive and upload the event-log working copy if that is the rehearsed route.
4. In the import preview confirm four columns and 14 rows. Do not accept a preview with the entire line in one column.
5. Map:

| Source | Process field |
|---|---|
| case_id | Case ID |
| activity | Activity Name |
| timestamp | Event timestamp |
| resource | Resource, if requested |

6. Confirm timestamp type and UTC interpretation using the facilitator's rehearsed import screen.
7. Start analysis/refresh. Wait for completion, then open the process map and case details.
8. Find CASE-01 and compare its four events with the CSV. Record current filters before taking any aggregate value.

**Expected:** three complete cases and one incomplete case in the source population. Some report screens filter incomplete cases by default; record that filter rather than claiming the fourth case vanished from the source.

## 4. Enter repeatable reminder test rows

Open the prepared queue app from the card. Enter these values. The facilitator prepares Queued at UTC as a time-zone-independent training column representing UTC. In its form choose the date and clock time separately; `Z` in this table explains UTC and is not text to type into a date picker.

| Review reference | Case reference | Queued at UTC | Stage | Reminder sent at |
|---|---|---|---|---|
| REV-01 | TEST-OLD | 2026-10-13 11:59Z | Pending | empty |
| REV-02 | TEST-BOUNDARY | 2026-10-13 12:00Z | Pending | empty |
| REV-03 | TEST-YOUNG | 2026-10-13 13:00Z | Pending | empty |
| REV-04 | TEST-APPROVED | 2026-10-13 10:00Z | Approved | empty |

These are new controlled test rows, not additional historical cases. The test's as-of time is `2026-10-14T00:00:00Z`.

## 5. Create a manual reminder flow

Use orientation **E**, inside the prepared solution:

1. Create an Instant flow called `Remind waiting credit review`.
2. Trigger: **Manually trigger a flow**. Add a Text input named `asOfUtc`.
3. Add **Compose**, rename it `AsOf`, and insert that trigger input through dynamic content.
4. Add **Dataverse > List rows**, selecting Credit Reviews. For the tiny training table, list the rows without an OData filter; this avoids guessing logical names or Choice numeric values.
5. Add **Apply to each** using List rows' `value` output.
6. Inside it add a Condition for Review stage = the prepared Pending value, Reminder sent at = null, and Queued at UTC earlier than 12 hours before AsOf.

The facilitator provides the actual Pending numeric value and column logical names on the card. In expression fields, a UTC age check has this form:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 03 / optional implementation reference
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 03: Power Automate Process Mining, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Process-service decision | HVE output | Used before |
|---|---|---|---|
| DS03-1 | What do the process owner and reviewers need to understand/do? | Evidence limits and feature questions | Selecting a bot or reminder |
| DS03-2 | Which insight/intervention capabilities are justified? | Prioritized mining, queue, follow-up and experiment choices | Commissioning automation |
| DS03-3 | Which historical/current/attempt data is necessary? | Compared event/work/follow-up models | Creating sources or persistent queues |
| DS03-4 | How will a trial and failed notification be represented? | Experiment/state/history impact | Claiming benefit or successful follow-up |
| DS03-5 | Can the model explain the source and the trial? | Feature/schema/measurement decision pack | Prototype and process-owner acceptance |

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
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.

SOURCE: client/hve-development/03-process.md
# Case 03: what process insight and intervention data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-03 and process-events.csv define the baseline.**

## Client interview evidence

- **C03-F1 / Omar:** "Orders take too long. I think rekeying is the cause, but we have not measured active handling time."
- **C03-F2 / Finance:** "Credit decisions remain ours. Reminding us is different from approving credit."
- **C03-F3 / Omar:** "We need to see where cases wait and which are still incomplete."
- **C03-F4 / Reviewer:** "Repeated reminders may be noise. I want to see whether the item is still pending and whether someone already followed up."
- **C03-F5 / Sponsor:** "A small trial must tell us whether the intervention helps, not just whether an automation exists."

## Technology-specific decision context

Process Mining needs a case identity and historical activity/timestamp events. A reminder feature needs current pending work and follow-up history; an event log does not automatically supply that state.

Decide whether the first intervention is a reviewer rota, reminder automation or further observation. Define only the event/work/experiment/follow-up data required for that choice.

## Proposal to inspect

- **C03-P1:** The 14 event rows are 14 cases, and incomplete cases can be counted as zero duration.
- **C03-P2:** A current-status table is enough to reconstruct historical waiting.
- **C03-P3:** The reminder needs no record of attempted/successful follow-up.

## Change for discussion

- **C03-C1:** Omar wants to compare a rota with a reminder pilot. Identify the minimum experiment/group/observation data needed.
- **C03-C2:** A failed notification should not mean "reviewer was reminded." Decide how that affects the state/history model.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C03-T1 | CASE-04 is hidden from the proposed report's population. |
| C03-T2 | Current status cannot reconstruct CASE-02's waiting interval. |
| C03-T3 | The model has one Reminded flag, with no distinction between failure and successful follow-up. |
| C03-T4 | No comparable post-intervention observation is defined. |

No executed reminder, mining refresh or achieved process improvement is supplied.


SOURCE: client/offerings/process-events.csv
case_id,activity,timestamp,resource
CASE-01,Received,2026-10-01T08:00:00Z,Intake
CASE-01,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-01,Credit approved,2026-10-02T09:00:00Z,Finance
CASE-01,Closed,2026-10-02T12:00:00Z,Operations
CASE-02,Received,2026-10-01T08:00:00Z,Intake
CASE-02,Credit review queued,2026-10-01T10:00:00Z,Finance
CASE-02,Credit approved,2026-10-03T10:00:00Z,Finance
CASE-02,Closed,2026-10-03T12:00:00Z,Operations
CASE-03,Received,2026-10-01T08:00:00Z,Intake
CASE-03,Credit review queued,2026-10-01T09:00:00Z,Finance
CASE-03,Credit approved,2026-10-01T10:00:00Z,Finance
CASE-03,Closed,2026-10-01T12:00:00Z,Operations
CASE-04,Received,2026-10-01T08:00:00Z,Intake
CASE-04,Credit review queued,2026-10-01T09:00:00Z,Finance

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 03: find waiting and build a reminder

[Lab 03](../03-process-to-value.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-03](../client/offerings/README.md) and [the event log](../client/offerings/process-events.csv). This log records events, not continuous labor.

## 1. Get the prepared resources

The card must identify Process Mining access, a `ZavaProcessToValue` solution, a Credit Review table, a permitted test notification connection and an operator error destination.

Credit Review's prepared display columns are Review reference, Case reference, Queued at UTC, Review stage, Reminder sent at and Last error. Review stage choices are Pending and Approved. The facilitator records logical column names for the expression below.

You build the mining process and reminder flow. You do not configure organization-wide credit policy or invent a production notification framework.

## 2. Ask HVE to explain the data before importing

In Cowork, after the first main-lab prompt:



**Expected:** CASE-01 is 28 elapsed hours. Verify the timestamps yourself. You are not required to know process-mining terminology in advance.

## 3. Create the mining process

1. Open [Power Automate](https://make.powerautomate.com/), choose the training environment and select **Process Mining**.
2. Choose **Start here** or **Create new process**, name it `ZavaOrderToCash`, and choose Create.
3. Select **Text/CSV** as the source. Use Browse OneDrive and upload the event-log working copy if that is the rehearsed route.
4. In the import preview confirm four columns and 14 rows. Do not accept a preview with the entire line in one column.
5. Map:

| Source | Process field |
|---|---|
| case_id | Case ID |
| activity | Activity Name |
| timestamp | Event timestamp |
| resource | Resource, if requested |

6. Confirm timestamp type and UTC interpretation using the facilitator's rehearsed import screen.
7. Start analysis/refresh. Wait for completion, then open the process map and case details.
8. Find CASE-01 and compare its four events with the CSV. Record current filters before taking any aggregate value.

**Expected:** three complete cases and one incomplete case in the source population. Some report screens filter incomplete cases by default; record that filter rather than claiming the fourth case vanished from the source.

## 4. Enter repeatable reminder test rows

Open the prepared queue app from the card. Enter these values. The facilitator prepares Queued at UTC as a time-zone-independent training column representing UTC. In its form choose the date and clock time separately; `Z` in this table explains UTC and is not text to type into a date picker.

| Review reference | Case reference | Queued at UTC | Stage | Reminder sent at |
|---|---|---|---|---|
| REV-01 | TEST-OLD | 2026-10-13 11:59Z | Pending | empty |
| REV-02 | TEST-BOUNDARY | 2026-10-13 12:00Z | Pending | empty |
| REV-03 | TEST-YOUNG | 2026-10-13 13:00Z | Pending | empty |
| REV-04 | TEST-APPROVED | 2026-10-13 10:00Z | Approved | empty |

These are new controlled test rows, not additional historical cases. The test's as-of time is `2026-10-14T00:00:00Z`.

## 5. Create a manual reminder flow

Use orientation **E**, inside the prepared solution:

1. Create an Instant flow called `Remind waiting credit review`.
2. Trigger: **Manually trigger a flow**. Add a Text input named `asOfUtc`.
3. Add **Compose**, rename it `AsOf`, and insert that trigger input through dynamic content.
4. Add **Dataverse > List rows**, selecting Credit Reviews. For the tiny training table, list the rows without an OData filter; this avoids guessing logical names or Choice numeric values.
5. Add **Apply to each** using List rows' `value` output.
6. Inside it add a Condition for Review stage = the prepared Pending value, Reminder sent at = null, and Queued at UTC earlier than 12 hours before AsOf.

The facilitator provides the actual Pending numeric value and column logical names on the card. In expression fields, a UTC age check has this form:



Replace only the bracketed logical name using the card and use the actual loop name from the designer. This is a copy-and-check expression, not an invitation to guess code. Check null queued times before calling `ticks`; the prepared test rows all have a valid queued time.

7. In the Yes branch add the approved training notification action. Include Case reference and `Waiting for credit review; no credit approval has been made`.
8. After a successful send, add **Update a row** for the current Credit Review row. Set Reminder sent at to the actual send time.
9. Save. In the trigger's Settings enable concurrency control with degree 1, as rehearsed by the facilitator. Use one worker only.

**Expected:** this flow reminds; it never changes Review stage to Approved.

## 6. Run exact boundary tests

Test using `2026-10-14T00:00:00Z`.

- REV-01 is 12 hours 1 minute old and should notify.
- REV-02 is exactly 12 hours old and should not.
- REV-03 is younger and should not.
- REV-04 is Approved and should not.

Open the run history and expand the Condition for each row. Verify one destination message and the stored reminder marker.

Run again using the same as-of time. REV-01 should be skipped because its reminder marker exists.

The facilitator demonstrates the prepared notification-failure path and operator error evidence. Do not disable a shared connection yourself. Discuss the residual crash window after sending but before saving; the training flow is not an exactly-once messaging service.

## 7. Return to HVE

Attach the case calculation, current mining filters, flow observations and reminder read-back. Run the main lab's review and offering prompts.

**Explain back:** the baseline is observed synthetic history; a working reminder is an implemented intervention; reduced cycle time is still unmeasured. A modeled second event log cannot turn into a claimed live improvement.

**Reference:** [Microsoft event-log import instructions](https://learn.microsoft.com/power-automate/process-mining-processes-and-data).
[END STANDALONE CONTEXT]

less(
  ticks(items('Apply_to_each')?['<queued-at-logical-name>']),
  ticks(addHours(outputs('AsOf'), -12))
)
```

Replace only the bracketed logical name using the card and use the actual loop name from the designer. This is a copy-and-check expression, not an invitation to guess code. Check null queued times before calling `ticks`; the prepared test rows all have a valid queued time.

7. In the Yes branch add the approved training notification action. Include Case reference and `Waiting for credit review; no credit approval has been made`.
8. After a successful send, add **Update a row** for the current Credit Review row. Set Reminder sent at to the actual send time.
9. Save. In the trigger's Settings enable concurrency control with degree 1, as rehearsed by the facilitator. Use one worker only.

**Expected:** this flow reminds; it never changes Review stage to Approved.

## 6. Run exact boundary tests

Test using `2026-10-14T00:00:00Z`.

- REV-01 is 12 hours 1 minute old and should notify.
- REV-02 is exactly 12 hours old and should not.
- REV-03 is younger and should not.
- REV-04 is Approved and should not.

Open the run history and expand the Condition for each row. Verify one destination message and the stored reminder marker.

Run again using the same as-of time. REV-01 should be skipped because its reminder marker exists.

The facilitator demonstrates the prepared notification-failure path and operator error evidence. Do not disable a shared connection yourself. Discuss the residual crash window after sending but before saving; the training flow is not an exactly-once messaging service.

## 7. Return to HVE

Attach the case calculation, current mining filters, flow observations and reminder read-back. Run the main lab's review and offering prompts.

**Explain back:** the baseline is observed synthetic history; a working reminder is an implemented intervention; reduced cycle time is still unmeasured. A modeled second event log cannot turn into a claimed live improvement.

**Reference:** [Microsoft event-log import instructions](https://learn.microsoft.com/power-automate/process-mining-processes-and-data).
