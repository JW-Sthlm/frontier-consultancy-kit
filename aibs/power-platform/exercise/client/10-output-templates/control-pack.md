# Control pack: [scope]

Owner: [ ] | Version: [ ] | Policy version: [ ] | Effective/expiry: [ ]\
Mode: [desk / simulation / live-sandbox] | Approver: [ ] | Status: DESIGNED, NOT TESTED

## Control artifacts and received constraints

| Artifact | Owner | Version | Effective / expiry | Included / excluded scope | Authoritative pointer |
|---|---|---|---|---|---|
| Instruction set | [ ] | [ ] | [ ] | [ ] | [ ] |
| Constraint register | [ ] | [ ] | [ ] | [ ] | [ ] |
| Evaluation harness | [ ] | [ ] | [ ] | [ ] | [ ] |

For each constraint record authority (or `none-known`), provenance (stated or assumed, with source), freeze evidence/date and cost or impossibility of moving it. Attach applicable IDs/versions and scope to every executor call.

| Request ID | Executor / actual enabled tool version | Sent constraints / versions / expiry | Included / excluded scope | Returned ACK evidence / date | Match? / action |
|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

Missing, stale or mismatched ACK means HOLD governed execution. ACK is receipt, not compliance, gate approval or technical enforcement. A folder containing constraints is not proof the executor received them.

## Product state and plugin boundary

Use the [platform decision record](platform-decision-record.md) for specific type/control support, version, scope, date and GA/preview/unknown status. Verify actual settings and tests at each stage. Never assume that different app types inherit quarantine, Conditional Access, Git, authoring portability or evaluation support.

If a plugin is used, record authoritative customer-owned project folder, project ID, installed skill/connector versions, enabled tool surface and authorized operator role: [ ]. If a folder is copied, record the new project ID and explicit provenance; do not silently merge two authoritative histories.

Advisory deliverable text is not deployment. A blocked or disabled tool has no successful result: record BLOCKED with the actual capability/denial evidence or `not-invoked` where no call happened. Do not fabricate a blocked plugin response either. Distinguish the coordinator's local blocker record from an actual remote tool response. Only an independently deployed and tested gate may be described as non-bypassable; the agent must not be assigned its release authority.

## Policy-to-evidence matrix

Account for every in-scope policy clause. Link instruction set, constraint register and evaluation plan; explain any not-applicable clause.

| Control ID / policy | Scope and obligation | Artifact reference | Check / required evidence | Enforcement location | Process or technical? | Evidence state | Exception owner |
|---|---|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [HVE / PPAC / data policy / pipeline / Entra / evaluation / human] | [ ] | [designed / simulated / observed-pass / observed-fail / not-run] | [ ] |

One obligation not yet operational and the missing owner/measure/evidence: [ ].

## Exact-action approval record

- Batch/action ID and immutable version: [ ]; source ADR: [ ].
- Target system/environment and connection: [ ]; intended acting identity: [ ].
- Full proposed payload or immutable snapshot pointer: [ ].
- Human approver, authority, timestamp and exact approved snapshot: [ ].
- Mutation after approval and resulting renewed approval/block: [ ].
- Actual result ID, full field read-back and comparison: [ ].
- If the platform permits changed parameters without a new gate, mark **observed-fail**, stop the action path and redesign. Chat confirmation is not proof of a non-bypassable gate.

## Bounded support action contract

Tool purpose/owner: [ ]. Invocation [explicit/dynamic] and reason: [ ]. Credential mode [end user/other, justify]: [ ]. Allowed schema and environment from POL-S04: [ ]. Missing input and denial behavior: [ ]. Confirmation point: [ ]. Read-back query method: [ ]. Administrator rollback owner/procedure: [ ].

## Negative and recovery tests

| Test | Precondition and exact input | Expected | Actual evidence | Target state / read-back | Pass/fail/not-run |
|---|---|---|---|---|---|
| Allowed connector combination | [ ] | Allowed in prepared sandbox | [ ] | [ ] | [ ] |
| Blocked connector combination | [ ] | Technically blocked | [ ] | [ ] | [ ] |
| Critical failed release check | [ ] | No target promotion | [ ] | [ ] | [ ] |
| Maker attempts central-rule override | [ ] | Configured lock holds or claim fails | [ ] | [ ] | [ ] |
| Denied identity attempts write | [ ] | Explicit denial; no new record | [ ] | [ ] | [ ] |
| Payload changes after confirmation | [ ] | Block or renewed confirmation | [ ] | [ ] | [ ] |
| Failed save / stale update / retry | [ ] | Visible failure; no false success or duplicate | [ ] | [ ] | [ ] |
| Recovery using approved artifact | [ ] | Same approved version verified in target | [ ] | [ ] | [ ] |
| Separately authorized rollback | [ ] | Verified inactive test record / restored artifact | [ ] | [ ] | [ ] |

Exception request: scope [ ], reason [ ], compensating control [ ], Noor and Arun decision [ ], expiry [ ]. Nonwaivable boundary: POL-F05.

Three delivery requests tested against the pack: [request IDs, allow/block/escalate, evidence]. Untested mappings stay designed. Do not infer controls from the platform inventory.

## Observed transfer and second-engagement evidence

Receiving owner, machine/workspace, observer and unaided harness run/date: [ ]. Authorized scoped change shipped by that owner and actual read-back: [ ]. Intervention count and failed steps: [ ]. Desk rehearsal leaves live transfer unproven.

Individually named artifacts/versions reused in engagement two: [ ]. Comparable effort/elapsed baseline and instrument recorded before work: [ ]. Gates that changed a decision, with evidence: [ ]. Pre-registered disconfirming statement, scope, threshold authority and review date: [ ]. Use the [asset record](asset-record.md) for the wider reuse claim; document `inconclusive` when evidence cannot support it.
