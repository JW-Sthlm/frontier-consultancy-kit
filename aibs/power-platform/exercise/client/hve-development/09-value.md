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
