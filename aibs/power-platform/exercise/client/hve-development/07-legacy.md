# Case 07: what makes a legacy handoff safe to operate?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-07 and bridge-jobs.csv define the first pilot.**

## Client interview evidence

- **C07-F1 / Operations:** "The target has only a UI in this pilot. We need a reliable handoff, not a production integration claim."
- **C07-F2 / Operator:** "Sometimes the caller loses the response after Save. We need to distinguish unknown completion from definitely not saved."
- **C07-F3 / Operator:** "Before retrying, I need the source reference, intended values and what we observed in the target."
- **C07-F4 / Service owner:** "One job can have several attempts. I need to explain what happened, not just overwrite the last error."
- **C07-F5 / Reviewer:** "If the target contains the same reference with different values, someone must decide what is correct."
- **C07-F6:** One worker and one training target apply initially. Stable Job ID is available; no financial posting is authorized.

## Technology-specific decision context

Power Automate cloud/desktop capabilities can bridge a UI-only process. Decide which supporting features are required: durable work queue, duplicate recognition, operator reconciliation, attempt history, exception review and recovery ownership.

Choose the data needed to support those decisions. Do not begin by recording UI actions or configuring retries.

## Proposal to inspect

- **C07-P1:** Keep only Job ID and a Done flag.
- **C07-P2:** Overwrite the intended payload and all earlier attempts whenever a retry starts.
- **C07-P3:** A caller failure always means the target has no record.

## Change for discussion

- **C07-C1:** More than one operator may review held jobs. Decide assignment/accountability and any claim/history data needed.
- **C07-C2:** Another target may eventually use a different reference format. Identify what belongs to the reusable job model versus target-specific mapping.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C07-T1 | JOB-02 can be marked only Done or Not done, although target completion is uncertain. |
| C07-T2 | A second attempt removes evidence of the first payload/result. |
| C07-T3 | A reviewer cannot compare intended quantity 2 with a different observed target value. |
| C07-T4 | Two people can make different resolution decisions with no accountable owner/history. |

These are feature/schema review findings, not a desktop trace to debug.
