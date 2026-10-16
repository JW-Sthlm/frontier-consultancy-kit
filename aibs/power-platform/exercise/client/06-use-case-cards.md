# Six candidate cards

Source: `CASES-1`, version 1.0. Apply POL-G02 and POL-G07. One slot does not mean every other case is bad. Evidence bands: **A** = directly measured in the small synthetic sample; **B** = documented scenario inputs but not measured; **U** = unknown. These bands are not composite scores.

## UC-01: invoice exception review

- Accepting owner: Lena Park. Sponsor: Mira Vale.
- Decision: can rules plus assisted extraction reduce review effort without hiding rework?
- Evidence: FIN-001..008; PROC-FIN; REF-PO; four invoice fixtures. Value band A; feasibility B pending actual sandbox checks.
- Baseline: eight items, mean handling 14 minutes and cycle 60 minutes. Target: POL-E03.
- Boundary: extract, validate and propose a review route. No payment. Humans accept corrections.
- Reuse: review queue, rules and evidence contract. First evidence within ten working days.
- Candidate: measurable and ready for a **desk design**, not already authorized for live build.

## UC-02: executive inspiration assistant

- Accepting owner and sponsor: Mira Vale.
- Decision: produce better strategy inspiration in 90 days.
- Evidence: DISC-07 only. No defined current process, denominator, frequency or acceptance measure. Value U; feasibility U.
- Sponsor claims "40% productivity" without source. Do not convert it to a baseline.
- Boundary: read-only drafts; low action risk does not solve missing measurement.
- Next evidence: Mira defines the repeated task and observes a baseline. HOLD until then.

## UC-03: grounded support advice

- Accepting owner and less-senior sponsor: Priya Cole.
- Decision: reduce source lookup and correction while preserving escalation.
- Evidence: CS-001..004, approved KB-RET-01 and KB-SVC-01, EV development cases. Value A; feasibility B.
- Mean handling 30 minutes versus finance's 14. Total observed handling 120 minutes for four cases versus finance's 112 for eight. This is a **higher observed effort opportunity**, not proof of greater annual value.
- Boundary: read-only answers first. Any test-request write is a separately gated extension.
- Reuse: knowledge authority, evaluation and escalation pack. Ten-day evidence cycle is proposed, not timed in a tenant.
- Trade-off: stronger observed per-item value, smaller sample and deliberate knowledge hazards.

## UC-04: stock-status assistant

- Accepting business owner: **missing**. Builder: Arun Moss; sponsor: Mira Vale.
- Evidence: APP-STOCK only; no stock source or baseline supplied. Value U; feasibility U.
- Requested result: a customer-facing answer about current stock.
- HOLD. Arun can locate a candidate business owner, but cannot accept the business output by default.

## UC-05: irreversible invoice cleanup

- Accepting owner requested: Lena Park. Sponsor: Mira Vale.
- Request: automatically pay flagged invoices, then delete their ledger records to keep the queue tidy.
- Evidence: DISC-02; conflicts with POL-F05 and REF-LEDGER. Claimed savings U.
- DECLINE the payment/deletion scope. Deleting the ledger also defeats duplicate controls.
- Safer alternative: propose review dispositions with preserved audit history, separately requalified as UC-01.

## UC-06: approved service-request creation

- Accepting owner: Priya Cole. Platform owner: Arun Moss.
- Decision: whether one confirmed reversible test write works under the intended identity.
- Evidence: POL-S04/S05 and AGENT-CS. No action-specific handling baseline or tested permission boundary. Value U; feasibility B.
- Boundary: one test service request, exact confirmed payload, read-back, denied-user test and separately authorized rollback.
- HOLD live execution until identity, connection, baseline and negative-control evidence exist. Desk action-contract work is permitted.

For the board, preserve each card's unknowns. Compare risk, value, feasibility, reuse and time to evidence separately. UC-01 is a defensible first choice; UC-03 is a credible alternative if its smaller sample and knowledge risks are addressed. Sponsor rank is not readiness.
