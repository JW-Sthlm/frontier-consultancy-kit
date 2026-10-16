# Guided build 09: a reconciled report and an investigation

[Lab 09](../09-revenue-leakage.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-09](../client/offerings/README.md), [work rows](../client/offerings/delivery-work.csv) and [invoice lines](../client/offerings/invoice-lines.csv).

The beginner core builds the report from these CSVs so connection administration does not obscure the calculation. The investigation store/action is prepared in Dataverse using the same fixture records. A live Dataverse-fed report is an optional connection extension, not something silently assumed.

## 1. Check the prepared action route

The facilitator supplies Power BI Desktop, a training Investigation app, active work-ID uniqueness and a reviewed **Open Investigation** action.

Open Investigation accepts a work ID, verifies the stored source facts and creates/returns one investigation. It does not trust an amount typed from a dashboard and does not invoice a customer.

The card includes the action's actual input/output names and, if publishing, the permitted Power BI workspace.

## 2. Ask HVE to explain the grain

In Cowork:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / optional implementation reference
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

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 09: a reconciled report and an investigation

[Lab 09](../09-revenue-leakage.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-09](../client/offerings/README.md), [work rows](../client/offerings/delivery-work.csv) and [invoice lines](../client/offerings/invoice-lines.csv).

The beginner core builds the report from these CSVs so connection administration does not obscure the calculation. The investigation store/action is prepared in Dataverse using the same fixture records. A live Dataverse-fed report is an optional connection extension, not something silently assumed.

## 1. Check the prepared action route

The facilitator supplies Power BI Desktop, a training Investigation app, active work-ID uniqueness and a reviewed **Open Investigation** action.

Open Investigation accepts a work ID, verifies the stored source facts and creates/returns one investigation. It does not trust an amount typed from a dashboard and does not invoice a customer.

The card includes the action's actual input/output names and, if publishing, the permitted Power BI workspace.

## 2. Ask HVE to explain the grain

In Cowork:



**Expected:** WORK-01 has expected EUR 1000, posted EUR 800 and potential gap EUR 200, regardless of its two invoice lines.

## 3. Import the two files into Power BI Desktop

1. Open Power BI Desktop and choose **Get data > Text/CSV**.
2. Select delivery-work.csv. Confirm five rows and separate columns, then choose **Transform Data**.
3. In Power Query rename this query `Work`.
4. Use **New source > Text/CSV** to load invoice-lines.csv. Rename it `InvoiceLines`. Confirm four rows.
5. Check hours, rate_eur and net_eur are numeric; source IDs are text. Retain the source column names exactly.
6. Do not filter InvoiceLines down permanently: the later separate draft/unmatched checks need all rows.

**Expected:** two queries, named exactly Work and InvoiceLines. You have not yet created a report visual.

## 4. Build the supplied work-grain calculation

In Power Query choose **New source > Blank query**, rename it `WorkAnalysis`, then open **Advanced Editor**. Replace its contents with:



This is Power Query's transformation language, not a command to run in Cowork. You can ask HVE to explain each named step before copying it.

If the preview errors, check query names and numeric column types first. Do not change the business formula to hide a type error.

**Expected:** five WorkAnalysis rows; WORK-01 gap 200, WORK-02 0, WORK-03 0, WORK-04 0, WORK-05 200.

## 5. Keep unmatched invoice lines visible

Create another Blank query named `UnmatchedInvoiceLines`. In its Advanced Editor enter:



The baseline has no unmatched line. That is an observed empty check, not permission to remove the query.

Choose **Close & Apply**. Wait for the report model to load.

## 6. Create the report page

1. In Report view add a **Table** visual.
2. From WorkAnalysis add work_id, Eligible, Expected EUR, Posted EUR, Potential unbilled EUR and Excess billed EUR.
3. For detail columns use **Don't summarize** where appropriate so you can inspect individual work rows.
4. Add a Card showing **Sum of Potential unbilled EUR**.
5. Add a table from InvoiceLines showing line_id, work_id, net_eur and status; filter this visual to Draft.
6. Add a text box: `Synthetic net EUR data. Potential gap, not recovered revenue. CSV snapshot, not a live ERP feed.`
7. Save as `Zava Commercial Gap.pbix` in the approved working location.

**Expected:** the gap card is EUR 400. INV-04 appears as Draft and does not count as posted. Do not label the card "money recovered."

## 7. Open an investigation through a real action

In Power Automate, inside the prepared solution:

1. Create an Instant flow `Investigate training work`.
2. Use Manually trigger a flow with one Text input `workId`.
3. Add the prepared Open Investigation action from the card and map workId through dynamic content.
4. Add a Compose displaying its returned investigation reference/outcome.
5. Save and test with WORK-01.
6. Open the Investigation app and verify the related work, owner and actual reference.
7. Repeat with WORK-01. There should still be one investigation.

The prepared action enforces current eligibility and gap rules. The CSV report is a discovery snapshot, not authorization to create financial records.

## 8. Change one fixture and reconcile

In a working copy, add a Posted EUR 100 invoice line for WORK-01 with a new line ID. Point the query to the working copy or use the facilitator's prepared test file. Refresh.

**Expected:** WORK-01 gap becomes 100 and total gap becomes 300. Do not change the original immutable source file.

The facilitator supplies an unknown-work-ID and overbilling example. Confirm the unknown line appears in UnmatchedInvoiceLines and the excess appears in Excess billed EUR, separately from other rows' potential gaps. Add a table visual for UnmatchedInvoiceLines so this result is visible in the report.

## 9. Return to HVE

Attach the query code, actual five-row reconciliation, refresh time and investigation read-back. Use the main lab's review/offer prompts.

Explain which parts are observed, which are investigation decisions and what additional evidence would establish actual recovery. Package the transformation, report, prepared action and finance acceptance tests, not merely a screenshot with a large number.
[END STANDALONE CONTEXT]

Use guided build 09. Explain one row per work item and one row per
invoice line using WORK-01. Calculate its expected, posted and
potential-unbilled amounts. Explain why summing a joined expected
amount can double count. Keep potential gap separate from recovery.
```

**Expected:** WORK-01 has expected EUR 1000, posted EUR 800 and potential gap EUR 200, regardless of its two invoice lines.

## 3. Import the two files into Power BI Desktop

1. Open Power BI Desktop and choose **Get data > Text/CSV**.
2. Select delivery-work.csv. Confirm five rows and separate columns, then choose **Transform Data**.
3. In Power Query rename this query `Work`.
4. Use **New source > Text/CSV** to load invoice-lines.csv. Rename it `InvoiceLines`. Confirm four rows.
5. Check hours, rate_eur and net_eur are numeric; source IDs are text. Retain the source column names exactly.
6. Do not filter InvoiceLines down permanently: the later separate draft/unmatched checks need all rows.

**Expected:** two queries, named exactly Work and InvoiceLines. You have not yet created a report visual.

## 4. Build the supplied work-grain calculation

In Power Query choose **New source > Blank query**, rename it `WorkAnalysis`, then open **Advanced Editor**. Replace its contents with:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / optional implementation reference
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

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 09: a reconciled report and an investigation

[Lab 09](../09-revenue-leakage.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-09](../client/offerings/README.md), [work rows](../client/offerings/delivery-work.csv) and [invoice lines](../client/offerings/invoice-lines.csv).

The beginner core builds the report from these CSVs so connection administration does not obscure the calculation. The investigation store/action is prepared in Dataverse using the same fixture records. A live Dataverse-fed report is an optional connection extension, not something silently assumed.

## 1. Check the prepared action route

The facilitator supplies Power BI Desktop, a training Investigation app, active work-ID uniqueness and a reviewed **Open Investigation** action.

Open Investigation accepts a work ID, verifies the stored source facts and creates/returns one investigation. It does not trust an amount typed from a dashboard and does not invoice a customer.

The card includes the action's actual input/output names and, if publishing, the permitted Power BI workspace.

## 2. Ask HVE to explain the grain

In Cowork:



**Expected:** WORK-01 has expected EUR 1000, posted EUR 800 and potential gap EUR 200, regardless of its two invoice lines.

## 3. Import the two files into Power BI Desktop

1. Open Power BI Desktop and choose **Get data > Text/CSV**.
2. Select delivery-work.csv. Confirm five rows and separate columns, then choose **Transform Data**.
3. In Power Query rename this query `Work`.
4. Use **New source > Text/CSV** to load invoice-lines.csv. Rename it `InvoiceLines`. Confirm four rows.
5. Check hours, rate_eur and net_eur are numeric; source IDs are text. Retain the source column names exactly.
6. Do not filter InvoiceLines down permanently: the later separate draft/unmatched checks need all rows.

**Expected:** two queries, named exactly Work and InvoiceLines. You have not yet created a report visual.

## 4. Build the supplied work-grain calculation

In Power Query choose **New source > Blank query**, rename it `WorkAnalysis`, then open **Advanced Editor**. Replace its contents with:



This is Power Query's transformation language, not a command to run in Cowork. You can ask HVE to explain each named step before copying it.

If the preview errors, check query names and numeric column types first. Do not change the business formula to hide a type error.

**Expected:** five WorkAnalysis rows; WORK-01 gap 200, WORK-02 0, WORK-03 0, WORK-04 0, WORK-05 200.

## 5. Keep unmatched invoice lines visible

Create another Blank query named `UnmatchedInvoiceLines`. In its Advanced Editor enter:



The baseline has no unmatched line. That is an observed empty check, not permission to remove the query.

Choose **Close & Apply**. Wait for the report model to load.

## 6. Create the report page

1. In Report view add a **Table** visual.
2. From WorkAnalysis add work_id, Eligible, Expected EUR, Posted EUR, Potential unbilled EUR and Excess billed EUR.
3. For detail columns use **Don't summarize** where appropriate so you can inspect individual work rows.
4. Add a Card showing **Sum of Potential unbilled EUR**.
5. Add a table from InvoiceLines showing line_id, work_id, net_eur and status; filter this visual to Draft.
6. Add a text box: `Synthetic net EUR data. Potential gap, not recovered revenue. CSV snapshot, not a live ERP feed.`
7. Save as `Zava Commercial Gap.pbix` in the approved working location.

**Expected:** the gap card is EUR 400. INV-04 appears as Draft and does not count as posted. Do not label the card "money recovered."

## 7. Open an investigation through a real action

In Power Automate, inside the prepared solution:

1. Create an Instant flow `Investigate training work`.
2. Use Manually trigger a flow with one Text input `workId`.
3. Add the prepared Open Investigation action from the card and map workId through dynamic content.
4. Add a Compose displaying its returned investigation reference/outcome.
5. Save and test with WORK-01.
6. Open the Investigation app and verify the related work, owner and actual reference.
7. Repeat with WORK-01. There should still be one investigation.

The prepared action enforces current eligibility and gap rules. The CSV report is a discovery snapshot, not authorization to create financial records.

## 8. Change one fixture and reconcile

In a working copy, add a Posted EUR 100 invoice line for WORK-01 with a new line ID. Point the query to the working copy or use the facilitator's prepared test file. Refresh.

**Expected:** WORK-01 gap becomes 100 and total gap becomes 300. Do not change the original immutable source file.

The facilitator supplies an unknown-work-ID and overbilling example. Confirm the unknown line appears in UnmatchedInvoiceLines and the excess appears in Excess billed EUR, separately from other rows' potential gaps. Add a table visual for UnmatchedInvoiceLines so this result is visible in the report.

## 9. Return to HVE

Attach the query code, actual five-row reconciliation, refresh time and investigation read-back. Use the main lab's review/offer prompts.

Explain which parts are observed, which are investigation decisions and what additional evidence would establish actual recovery. Package the transformation, report, prepared action and finance acceptance tests, not merely a screenshot with a large number.
[END STANDALONE CONTEXT]

let
    Posted = Table.SelectRows(InvoiceLines, each [status] = "Posted"),
    Totals = Table.Group(Posted, {"work_id"},
        {{"Posted EUR", each List.Sum([net_eur]), type number}}),
    Joined = Table.NestedJoin(Work, {"work_id"}, Totals, {"work_id"},
        "InvoiceTotal", JoinKind.LeftOuter),
    Expanded = Table.ExpandTableColumn(Joined, "InvoiceTotal",
        {"Posted EUR"}, {"Posted EUR"}),
    Filled = Table.ReplaceValue(Expanded, null, 0,
        Replacer.ReplaceValue, {"Posted EUR"}),
    Eligible = Table.AddColumn(Filled, "Eligible", each
        Text.Lower(Text.From([delivered])) = "true" and
        Text.Lower(Text.From([commercially_approved])) = "true", type logical),
    Expected = Table.AddColumn(Eligible, "Expected EUR", each
        if [Eligible] then [hours] * [rate_eur] else null, type number),
    Gap = Table.AddColumn(Expected, "Potential unbilled EUR", each
        if [Eligible] then List.Max({[Expected EUR] - [Posted EUR], 0})
        else 0, type number),
    Excess = Table.AddColumn(Gap, "Excess billed EUR", each
        if [Eligible] then List.Max({[Posted EUR] - [Expected EUR], 0})
        else 0, type number)
in
    Excess
```

This is Power Query's transformation language, not a command to run in Cowork. You can ask HVE to explain each named step before copying it.

If the preview errors, check query names and numeric column types first. Do not change the business formula to hide a type error.

**Expected:** five WorkAnalysis rows; WORK-01 gap 200, WORK-02 0, WORK-03 0, WORK-04 0, WORK-05 200.

## 5. Keep unmatched invoice lines visible

Create another Blank query named `UnmatchedInvoiceLines`. In its Advanced Editor enter:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 09 / optional implementation reference
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

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 09: a reconciled report and an investigation

[Lab 09](../09-revenue-leakage.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-09](../client/offerings/README.md), [work rows](../client/offerings/delivery-work.csv) and [invoice lines](../client/offerings/invoice-lines.csv).

The beginner core builds the report from these CSVs so connection administration does not obscure the calculation. The investigation store/action is prepared in Dataverse using the same fixture records. A live Dataverse-fed report is an optional connection extension, not something silently assumed.

## 1. Check the prepared action route

The facilitator supplies Power BI Desktop, a training Investigation app, active work-ID uniqueness and a reviewed **Open Investigation** action.

Open Investigation accepts a work ID, verifies the stored source facts and creates/returns one investigation. It does not trust an amount typed from a dashboard and does not invoice a customer.

The card includes the action's actual input/output names and, if publishing, the permitted Power BI workspace.

## 2. Ask HVE to explain the grain

In Cowork:



**Expected:** WORK-01 has expected EUR 1000, posted EUR 800 and potential gap EUR 200, regardless of its two invoice lines.

## 3. Import the two files into Power BI Desktop

1. Open Power BI Desktop and choose **Get data > Text/CSV**.
2. Select delivery-work.csv. Confirm five rows and separate columns, then choose **Transform Data**.
3. In Power Query rename this query `Work`.
4. Use **New source > Text/CSV** to load invoice-lines.csv. Rename it `InvoiceLines`. Confirm four rows.
5. Check hours, rate_eur and net_eur are numeric; source IDs are text. Retain the source column names exactly.
6. Do not filter InvoiceLines down permanently: the later separate draft/unmatched checks need all rows.

**Expected:** two queries, named exactly Work and InvoiceLines. You have not yet created a report visual.

## 4. Build the supplied work-grain calculation

In Power Query choose **New source > Blank query**, rename it `WorkAnalysis`, then open **Advanced Editor**. Replace its contents with:



This is Power Query's transformation language, not a command to run in Cowork. You can ask HVE to explain each named step before copying it.

If the preview errors, check query names and numeric column types first. Do not change the business formula to hide a type error.

**Expected:** five WorkAnalysis rows; WORK-01 gap 200, WORK-02 0, WORK-03 0, WORK-04 0, WORK-05 200.

## 5. Keep unmatched invoice lines visible

Create another Blank query named `UnmatchedInvoiceLines`. In its Advanced Editor enter:



The baseline has no unmatched line. That is an observed empty check, not permission to remove the query.

Choose **Close & Apply**. Wait for the report model to load.

## 6. Create the report page

1. In Report view add a **Table** visual.
2. From WorkAnalysis add work_id, Eligible, Expected EUR, Posted EUR, Potential unbilled EUR and Excess billed EUR.
3. For detail columns use **Don't summarize** where appropriate so you can inspect individual work rows.
4. Add a Card showing **Sum of Potential unbilled EUR**.
5. Add a table from InvoiceLines showing line_id, work_id, net_eur and status; filter this visual to Draft.
6. Add a text box: `Synthetic net EUR data. Potential gap, not recovered revenue. CSV snapshot, not a live ERP feed.`
7. Save as `Zava Commercial Gap.pbix` in the approved working location.

**Expected:** the gap card is EUR 400. INV-04 appears as Draft and does not count as posted. Do not label the card "money recovered."

## 7. Open an investigation through a real action

In Power Automate, inside the prepared solution:

1. Create an Instant flow `Investigate training work`.
2. Use Manually trigger a flow with one Text input `workId`.
3. Add the prepared Open Investigation action from the card and map workId through dynamic content.
4. Add a Compose displaying its returned investigation reference/outcome.
5. Save and test with WORK-01.
6. Open the Investigation app and verify the related work, owner and actual reference.
7. Repeat with WORK-01. There should still be one investigation.

The prepared action enforces current eligibility and gap rules. The CSV report is a discovery snapshot, not authorization to create financial records.

## 8. Change one fixture and reconcile

In a working copy, add a Posted EUR 100 invoice line for WORK-01 with a new line ID. Point the query to the working copy or use the facilitator's prepared test file. Refresh.

**Expected:** WORK-01 gap becomes 100 and total gap becomes 300. Do not change the original immutable source file.

The facilitator supplies an unknown-work-ID and overbilling example. Confirm the unknown line appears in UnmatchedInvoiceLines and the excess appears in Excess billed EUR, separately from other rows' potential gaps. Add a table visual for UnmatchedInvoiceLines so this result is visible in the report.

## 9. Return to HVE

Attach the query code, actual five-row reconciliation, refresh time and investigation read-back. Use the main lab's review/offer prompts.

Explain which parts are observed, which are investigation decisions and what additional evidence would establish actual recovery. Package the transformation, report, prepared action and finance acceptance tests, not merely a screenshot with a large number.
[END STANDALONE CONTEXT]

let
    Unmatched = Table.NestedJoin(InvoiceLines, {"work_id"}, Work,
        {"work_id"}, "WorkMatch", JoinKind.LeftAnti)
in
    Unmatched
```

The baseline has no unmatched line. That is an observed empty check, not permission to remove the query.

Choose **Close & Apply**. Wait for the report model to load.

## 6. Create the report page

1. In Report view add a **Table** visual.
2. From WorkAnalysis add work_id, Eligible, Expected EUR, Posted EUR, Potential unbilled EUR and Excess billed EUR.
3. For detail columns use **Don't summarize** where appropriate so you can inspect individual work rows.
4. Add a Card showing **Sum of Potential unbilled EUR**.
5. Add a table from InvoiceLines showing line_id, work_id, net_eur and status; filter this visual to Draft.
6. Add a text box: `Synthetic net EUR data. Potential gap, not recovered revenue. CSV snapshot, not a live ERP feed.`
7. Save as `Zava Commercial Gap.pbix` in the approved working location.

**Expected:** the gap card is EUR 400. INV-04 appears as Draft and does not count as posted. Do not label the card "money recovered."

## 7. Open an investigation through a real action

In Power Automate, inside the prepared solution:

1. Create an Instant flow `Investigate training work`.
2. Use Manually trigger a flow with one Text input `workId`.
3. Add the prepared Open Investigation action from the card and map workId through dynamic content.
4. Add a Compose displaying its returned investigation reference/outcome.
5. Save and test with WORK-01.
6. Open the Investigation app and verify the related work, owner and actual reference.
7. Repeat with WORK-01. There should still be one investigation.

The prepared action enforces current eligibility and gap rules. The CSV report is a discovery snapshot, not authorization to create financial records.

## 8. Change one fixture and reconcile

In a working copy, add a Posted EUR 100 invoice line for WORK-01 with a new line ID. Point the query to the working copy or use the facilitator's prepared test file. Refresh.

**Expected:** WORK-01 gap becomes 100 and total gap becomes 300. Do not change the original immutable source file.

The facilitator supplies an unknown-work-ID and overbilling example. Confirm the unknown line appears in UnmatchedInvoiceLines and the excess appears in Excess billed EUR, separately from other rows' potential gaps. Add a table visual for UnmatchedInvoiceLines so this result is visible in the report.

## 9. Return to HVE

Attach the query code, actual five-row reconciliation, refresh time and investigation read-back. Use the main lab's review/offer prompts.

Explain which parts are observed, which are investigation decisions and what additional evidence would establish actual recovery. Package the transformation, report, prepared action and finance acceptance tests, not merely a screenshot with a large number.
