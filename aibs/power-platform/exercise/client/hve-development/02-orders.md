# Case 02: which order-intake features and data are needed?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-02 and the source messages/catalog remain authoritative.**

## Client interview evidence

- **C02-F1 / Lena:** "Orders arrive as email text. A reviewer still accepts the draft before any ERP handoff."
- **C02-F2 / Reviewer:** "I need to see the original message next to the candidate values. If I correct a quantity, the original must not disappear."
- **C02-F3 / Lena:** "An unknown SKU or 'some units' needs clarification. Never guess the product or quantity to make it look complete."
- **C02-F4 / Operator:** "A message may be received twice. We must recognize the same source request, including after an interruption."
- **C02-F5 / Reviewer:** "One line can have several problems. I need to know all reasons it needs review, not one generic Invalid flag."
- **C02-F6:** The initial pilot processes one order line per message. Automatic ERP entry is excluded.

## Technology-specific decision context

AI Builder can assist extraction; Power Automate can coordinate validation and review; a model-driven app can expose relational exception work. Decide whether extraction adds value, what correction/review features are essential and what data each feature needs.

The supplied CSV is an example source, not a ready database schema. Consider source message, order/draft, line, validation issue and review/history concepts only when selected features justify them.

## Proposal to inspect

- **C02-P1:** Store only final order values; raw extraction and review history are unnecessary.
- **C02-P2:** Model confidence can accept the order. Missing quantity defaults to one.
- **C02-P3:** Store all product lines in one free-text field and all exception reasons in one status.

## Change for discussion

- **C02-C1:** A customer now sends two products in one message. Decide whether multi-line support is first release or later, and how that affects cardinality.
- **C02-C2:** Lena asks to distinguish "needs customer clarification" from "reviewer corrected" and preserve who changed what.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C02-T1 | MSG-01 can be represented, but two-line C02-C1 cannot be separated for review. |
| C02-T2 | MSG-02 has no place to record an unresolved product match. |
| C02-T3 | MSG-03's missing quantity cannot be represented without a valid default. |
| C02-T4 | Duplicate source identity is not included in the model. |
| C02-T5 | A correction destroys the original candidate value and attribution. |

These are model/feature walkthroughs, not AI Builder accuracy results or actual flow executions.
