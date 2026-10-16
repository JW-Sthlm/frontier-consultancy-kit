# Current process and reference records

Source: `PROC-1`, version 1.0, 2026-09-24. Synthetic scenario.

## PROC-FIN: invoice review

1. Finance clerk receives a document in a test inbox, records receipt time and source ID, then keys fields into a queue.
2. Clerk checks required fields, arithmetic, purchase order and the invoice ledger. Today these checks are manual.
3. Lena Park owns correction, rejection and escalation. A returned item can loop back for rework; count all human handling minutes.
4. Omar Bell, finance controller, separately authorizes financial release in the existing process. **The pilot ends at a review decision and cannot perform release.**
5. Clerk records final review disposition time. Cycle time is receipt to final review disposition, including waiting and rework, not receipt to payment.

Failures: late handoff to Lena, repeated keying, duplicate checks skipped, queue writes failing silently. Proposed responsibility split: model suggests fields; deterministic rules validate; a structured app displays evidence; a human accepts corrections and review decisions.

## PROC-CS: support advice

Priya Cole owns support acceptance and article approval. An advisor looks up policy, drafts a response, checks applicability and escalates exceptions. Cycle time is request receipt to approved response or completed escalation handoff, not customer resolution. Handling time includes source lookup, drafting and correction.

Known failures: stale articles resemble current policy, service response promises become resolution promises, and product-safety issues get treated as routine returns.

## REF-PO: fixed purchase-order allowlist

All amounts are EUR, two decimal places, tax-inclusive purchase-order totals. Only these open POs exist for the exercise.

| PO ID | Vendor ID | Fictional vendor | Currency | Approved total |
|---|---|---|---|---:|
| PO-001 | V001 | Cedar Bolt Supplies | EUR | 120.00 |
| PO-002 | V002 | Lantern Tool Parts | EUR | 240.00 |

## REF-LEDGER: initial duplicate ledger

| Vendor ID | Invoice ID | State |
|---|---|---|
| V001 | INV-099 | Previously recorded |

Reset the ledger to this single seed for each independent test run. Record new normalized vendor/invoice keys atomically when persisting new review records, including exception records. Reprocessing the **same source ID and unchanged payload within the same run** returns its existing record and does not create another record. A changed payload on that source requires a new revision, revalidation and human review, not silent overwrite. A different source with an existing key is a duplicate. A live implementation must test persistence and concurrency, not just this paper rule.

## BASE-DEF: baseline semantics

`03-baseline.csv` contains eight FIN and four CS observations from 2026-09-01 through 2026-09-07. They are invented, fully observed examples, not production samples.

| Column | Meaning |
|---|---|
| record_id | Unique citation key; one row is one completed item |
| process_id | FIN or CS; do not combine processes into a pilot baseline |
| period_start / period_end | Inclusive observation window |
| cycle_minutes | Elapsed minutes to the process endpoint above |
| handling_minutes | Total active human minutes, including rework |
| exception / rework / escalated | Integer 0 or 1; flags may overlap |
| sample_note | Limitation carried with the row |

Mean cycle and handling = column sum divided by process row count. Each rate = flagged rows divided by that same count. Rework is not "rework among exceptions." No costs, annual volume, staffing reduction, statistical significance or realized savings can be inferred.
