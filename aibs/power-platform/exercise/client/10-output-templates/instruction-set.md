# Instruction set: [asset ID]

Version: [ ] | Owner: [ ] | Authority: [policy IDs/version] | Effective/expiry: [ ]\
Intended environment and identity: [ ] | Execution mode: [ ]

## Scope, conformance and delivery

Included artifact/work-item/action scope: [ ]. Explicit excluded scope: [ ]. Conformance mode: [execution / review / not-checked]. Provenance for each instruction: [decision record / specification / stated preference / explicit assumption], source ID/version and person: [ ]. A preference is not silently promoted to policy.

Instruction-set owner/version/expiry: [ ]. Constraint-register owner/version/expiry: [ ]. Evaluation-harness owner/version/expiry: [ ]. Freeze evidence/date and authority that can change each constraint, or `none-known`: [ ]. Cost/consequence of moving it, or nonwaivable: [ ].

The executor must receive the current in-scope constraints on **every call**, not merely have access to a folder. Record the request and the executor's returned acknowledgment (ACK). A receipt proves only that the specified constraints arrived; it does not prove compliance, approval or technical enforcement.

| Call / request ID | Executor identity / tool version | Sent constraint IDs / versions / expiry | Included and excluded scope | Returned ACK evidence / date | Match and permitted next step |
|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

Missing ACK, expired versions or wrong scope means HOLD governed execution. Record a disabled/unavailable tool as BLOCKED with actual capability evidence or `not-invoked`; never fill its result with an imagined response or relabel a desk simulation as live execution.

## Contract

- Purpose and decision supported: [ ].
- Required inputs with source versions: [ ]. Missing prerequisites: return HOLD with missing evidence and owner; do not fabricate replacements.
- Outputs and required citation format: [ ].
- Allowed actions: [ ]. Prohibited actions: [ ].
- Source-authority and conflict handling: [ ].
- Deterministic checks versus AI judgment: [ ].
- Human approval, exact payload and read-back requirements: [ ].
- Permission failure, failed save, stale record and retry behavior: [ ].
- Escalation path, owner and response expectation: [ ].
- Logging, retention and sensitive-data boundary: [ ].

## Operational tests

| Instruction ID | Policy authority | Observable behavior | Positive case | Negative case | Evidence pointer |
|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

Do not call these instructions enforcement. Record separately what the platform actually prevents. "Be accurate" alone is not testable; define cases, measures, owner and release consequence.

## Observed handover and reuse challenge

Receiving owner: [ ]. Observed date and run ID on their own machine/workspace: [ ]. Harness inputs, outputs and transcript evidence: [ ]. Observer and author intervention count: [ ]. Authorized scoped change they shipped and independently verified: [ ]. A handover meeting without a receiving-owner run does not pass.

Second-engagement scope: [ ]. Reused instruction/constraint/harness IDs and exact versions: [ ]. Comparable effort and elapsed-time instrument, recorded before work: [ ]. Disconfirming result and next review date: [ ]. Keep desk reproduction separate from actual engagement-two deployment evidence.
