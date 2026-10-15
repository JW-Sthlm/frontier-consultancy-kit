# Second-builder case: facilities inspection triage

Source: `SECOND-1`, version 1.0. Different department, same intake and evidence discipline. Entirely synthetic. This is a **runnable desk case**, not a provisioned tenant app.

## CASE-FAC-MISSING: first handover

Copy this section and the shared policy to the second builder first. Do not supply the completion addendum until the HOLD is recorded.

- Department: facilities. Sponsor: Ellis Hart, facilities coordinator.
- Task: classify inspection requests into a proposed human review queue. No dispatch, repair instruction, ordering or asset updates.
- Accountable accepting process owner: **NOT PROVIDED**.
- Data custodian: Ellis Hart grants desk use of the synthetic rows below.
- Current process: coordinator reads an inspection note, checks safety words, assigns a proposed queue, then a human approves triage. Cycle endpoint is human-approved triage; handling includes corrections.
- Decision: is this package usable by a second builder without author help?
- Test plan: use all three requests below and log rule, proposed queue, evidence and missing prerequisites. One missing prerequisite must prevent build approval even if classification is possible.

### FAC-BASE: complete synthetic observations

| ID | Cycle minutes | Human handling minutes | Rework flag |
|---|---:|---:|---:|
| FAC-001 | 30 | 6 | 0 |
| FAC-002 | 60 | 12 | 1 |
| FAC-003 | 90 | 18 | 0 |

All three were observed to completion during 2026-09-01 through 2026-09-07. Mean cycle and handling use n=3; rework uses all three. No cost or annual volume is supplied.

### FAC-RULE: fixed classification-only contract

Authorized exercise rules supplied by policy owner Noor Reed. Reuse POL-G01..G07 and POL-E02; **invoice and support-domain rules do not transfer**.

1. `FAC-R01`: request ID, location and description must be present and nonblank after trim. Missing any field produces `HOLD_INPUT`.
2. `FAC-R02`: on otherwise complete input, case-insensitive whole-word `smoke` or `sparking` in the description produces `SAFETY_REVIEW`. Give no repair advice. A human facilities reviewer handles escalation.
3. `FAC-R03`: other complete input produces `ROUTINE_REVIEW`. Output is advisory only.
4. `FAC-R04`: same request ID and same payload returns the prior proposal; changed payload needs a new revision and human review. Never silently overwrite an approved proposal.
5. `FAC-R05`: accepting process owner is mandatory for gate PROCEED. No owner means HOLD of delivery regardless of the row-level classification.

### FAC-TEST: full inputs

| Request ID | Location | Description |
|---|---|---|
| FAC-RQ01 | Training room A | The door label is faded. |
| FAC-RQ02 | Training room B | The test lamp is sparking. |
| FAC-RQ03 | *(missing, an empty value)* | The door handle is loose. |

Output schema: `run_id,case_variant,request_id,revision,proposed_queue,rule_ids,evidence_ids,accepting_owner,gate_verdict,execution_mode`. Mode must be `desk`. Do not create a service request or reuse the invoice extraction schema.

## CASE-FAC-COMPLETE: completion addendum

Reveal only after the missing-owner HOLD is recorded.

- `FAC-AUTH-01`: Inez Vale is the accepting facilities process owner; she accepts/rejects triage proposals and owns safety handoff. Ellis remains sponsor and data custodian.
- `FAC-AUTH-02`: Inez authorizes the bounded desk trial using FAC-RULE and the three FAC-TEST inputs. Noor retains policy authority. No tenant write or external repair is authorized.
- `FAC-TARGET-01`: acceptance is all three classifications justified, no repair advice, the incomplete row held, and a retry not duplicated. This is a testability target, not a measured improvement claim.
- Keep FAC-RQ03 incomplete. A complete **exercise package** deliberately includes a negative input case.

## Independent run

1. Record missing variant intake and explicit owner HOLD. Baseline calculations and advisory classification can still be drafted, but do not claim gate PROCEED.
2. Record addendum as a new intake revision, naming Inez; recalculate baseline and classify all three inputs.
3. Retry FAC-RQ01 unchanged, then propose changing its description to "The test lamp is sparking." Record reuse of the unchanged proposal and a new revision requiring review for the changed payload.
4. Use the asset record to record intervention count, ambiguity, correction and rerun. The original author observes, not rescues.

Expected output can be completed entirely from this file, shared policy and templates. Missing-source variant: withhold this file itself and require an explicit missing-source report, not a fabricated facilities baseline.
