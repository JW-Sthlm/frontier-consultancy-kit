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
