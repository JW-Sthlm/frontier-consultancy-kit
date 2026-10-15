# Evaluation report: [run pair]

Owner: [ ] | Version: [ ] | Date: [ ] | Review/expiry: [ ] | Mode: [ ]\
Agent/solution version before/after: [ ] | Knowledge set/version before/after: [ ]\
Development dataset/version: [ ] | Unseen holdout custodian/version: [ ]

The client CSV is a **neutral evaluation-design format**, not a Copilot Studio import promise. Columns are case ID, dataset version, category, prompt, expected behavior, authority IDs, critical-failure condition and weight (all 1). Map fields to the current supported evaluation mechanism and document the mapping before import. Do not rename an unrun design case a test result.

## Experiment

Selection rule: all eight EV cases unchanged before/after; no cherry-picking. Repeat stochastic runs consistently if used, preserving per-run results. Holdout is revealed only after the change is frozen. Tune again only with a new untouched holdout.

Hypothesis: [ ]. Bounded change: [ ]. Predicted improvement and possible regression: [ ]. All other configuration differences: [ ].

Harness owner, version and expiry: [ ]. Definition of right, dataset selection, threshold authority/provenance and critical-stop consequence agreed before tuning: [ ]. A threshold selected during tuning is not independent release evidence. Receiving owner and rerun cadence: [ ]. Applicable constraint IDs/versions, scope and per-call returned ACK record: [ ]. ACK is receipt, not a passing evaluation.

| Case / run ID | Category | Before pass/fail/not-run | After pass/fail/not-run | Expected versus observed | Sources cited | Transcript/activity/tool evidence | Failure class | Critical? | Reviewer |
|---|---|---|---|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [knowledge / instruction / orchestration / permission / ambiguity / expected refusal] | [ ] | [ ] |

Expected refusal is a success when it meets the case contract. Record content accuracy, grounding and boundary behavior separately.

## Measures

- Pass rate = fully passing cases / all selected cases, including not-run in denominator.
- Coverage = executed cases / selected cases; show failed and not-run counts.
- Grounded-answer rate = correct approved citations / executed cases requiring a grounded answer; publish that case list and denominator.
- Escalation correctness = correct handoffs / selected escalation-required cases.
- Report each category, critical failures, fail-to-pass improvements and pass-to-fail regressions.
- Human review effort, unresolved cases and latency: [measures and limits].
- Holdout results, separate from development: [ ]. No tuning on holdout: [attestation].

## Decision

Apply POL-E01/E02, do not average away critical failures. Proposed [release / iterate / stop]: [rationale]. Human decision owner and signed evidence: [ ]. Remaining unknowns and scope limitations: [ ]. Small-set success does not certify production safety.

Observed transfer: receiving owner [ ], own machine/workspace [ ], unaided run/date/evidence [ ], observer [ ], intervention count [ ], authorized scoped change shipped and verified [ ]. Mark live transfer unproven if this was only a desk run. Named harness/version reused in engagement two, changed context and comparable effort instrument: [ ].
