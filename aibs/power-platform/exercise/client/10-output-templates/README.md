# Output templates

These are blank working contracts, not approved decisions or completed execution evidence. Copy the relevant template into your approved workshop workspace, preserve its source version and fill the fields. Keep proposed outputs separate from observed results.

| Template | Use |
|---|---|
| [HVE field sheet](hve-field-sheet.md) | Choose engagement shape, name the decider and run nine stages with evidence and exits |
| [Platform decision record](platform-decision-record.md) | Compare seven mixed-level categories plus agents and verify type-specific controls before choosing technology |
| [Agent decision record](agent-decision-record.md) | Record four human decisions with settings, authority, tests and a receiving owner |
| [Pilot brief](pilot-brief.md) | Bound the pilot, cite the baseline and define measurable stop criteria |
| [Intake record](intake-record.md) | Qualify prerequisites and record PROCEED, HOLD or DECLINE |
| [Dispatch record](dispatch-record.md) | Assign only necessary roles, evidence requirements and handoffs |
| [Decision log](decision-log.md) | Preserve decisions, stable request keys and revisions |
| [Architecture decision record](adr.md) | Compare alternatives and record the human decision and conditions |
| [Backlog CSV](backlog.csv) | Propose a traceable work-item batch before approval and creation |
| [Instruction set](instruction-set.md) | Define allowed behavior, source authority and missing-input handling |
| [Constraint register CSV](constraint-register.csv) | Map policy obligations to checks, ownership and evidence |
| [Evaluation report](evaluation-report.md) | Compare fixed before/after cases and report regressions and limitations |
| [Control pack](control-pack.md) | Map controls, exact-action approval, negative tests and recovery evidence |
| [Decision board](decision-board.md) | Compare six opportunities and select one bounded pilot |
| [Asset record](asset-record.md) | Package an asset and record independent second-builder evidence |

The two CSV templates contain headers only. Add participant-authored rows without changing column meaning. `backlog.csv` is a neutral proposal format, not an import contract or proof that work items exist. `constraint-register.csv` records intended enforcement and its evidence state; a row does not implement a control. Its scope excludes what does not apply, conformance mode is `execution`, `review` or `not-checked`, and unknown authority is `none-known`. Record provenance, evidence/date of a frozen constraint and the cost or impossibility of moving it.

The instruction set, constraint register and evaluation harness each require an owner, version and expiry. Every executor call carries applicable constraint IDs/versions and scope and records returned ACK evidence. Receipt is not conformance or gate approval. Keep per-call ACK records in the instruction set or control pack and reference them from `ack_evidence`; do not treat one ACK as permanent coverage.

## Recording outputs

Use `desk`, `simulation` or `live-sandbox` consistently. Capture source IDs, versions, owners, expiry and run IDs. Leave unknowns explicit. Human approval must name its authority and exact scope.

Record an observed receiving-owner handover and a falsifiable second-engagement reuse claim. A handover meeting or a list of reusable files alone is not evidence of transfer or reduced effort.

Completed participant outputs are not supplied in this pack. Refer to your own output locations as code-formatted filenames or workspace references until they exist; do not create links that suggest a generated record or test result is already available.

Return to the [synthetic client pack](../README.md). The [policy extract](../04-policy-extract.md) supplies the fixed exercise rules.
