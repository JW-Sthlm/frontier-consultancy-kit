# Platform decision record: [decision ID]

Owner: [ ] | Version: [ ] | Effective date: [ ] | Expiry/review date: [ ]\
Human decision authority: [ ] | Environment/tenant scope: [ ] | Mode: [ ]\
Related intake, ADR and constraint versions: [ ]

## Inventory first, choose second

Inspect all seven source comparison categories **plus agents**, including unregistered discoveries. This is a mixed-level comparison, not seven exclusive platform resource types: generative actions are actions within cloud flows, not a third peer flow type. Record their parent flow to avoid double-counting. The [synthetic inventory](../05-platform-inventory.csv) is a scenario prompt, not proof of a tenant estate. Record the actual query, access scope and coverage gaps; one administrator view must not be assumed to cover every category.

| Comparison category | Supplied IDs / actual discovery evidence | Owner | Actual product version and date observed | GA / preview / unsupported / unknown | Missing visibility or support evidence |
|---|---|---|---|---|---|
| Canvas app | [ ] | [ ] | [ ] | [ ] | [ ] |
| Model-driven app | [ ] | [ ] | [ ] | [ ] | [ ] |
| Code app | [ ] | [ ] | [ ] | [ ] | [ ] |
| Vibe app | [ ] | [ ] | [ ] | [ ] | [ ] |
| Cloud flow | [ ] | [ ] | [ ] | [ ] | [ ] |
| Desktop flow / hosted RPA | [ ] | [ ] | [ ] | [ ] | [ ] |
| Generative actions within a cloud flow | [parent flow ID and action evidence] | [ ] | [ ] | [ ] | [ ] |
| Agent | [ ] | [ ] | [ ] | [ ] | [ ] |

Chosen artifact type and precise workload: [ ]. Simpler technology alternative, including a deterministic workflow or no new build: [ ]. Why it is sufficient or rejected, with evidence: [ ]. Nontransferable controls or authoring assumptions: [ ].

## Verify support per artifact type

Never infer a control applies because it exists elsewhere in Power Platform. Record published support separately from observed enforcement. A dated slide is a research lead, not current support proof. Availability can differ by feature, region, environment, license and version.

| Artifact type / version | Specific feature or control | Scope and licensing/region conditions | Current first-party support source / checked date | GA / preview / unsupported / unknown | Actual setting and test evidence / date | Decision authority and consequence |
|---|---|---|---|---|---|---|
| [ ] | Quarantine / per-app Conditional Access | [ ] | [ ] | [ ] | [ ] | [ ] |
| [ ] | Git integration / solution packaging / pipeline | [ ] | [ ] | [ ] | [ ] | [ ] |
| [ ] | Authoring portability / edit surface | [ ] | [ ] | [ ] | [ ] | [ ] |
| [ ] | Data policy / connector boundary | [ ] | [ ] | [ ] | [ ] | [ ] |
| [ ] | App Checker / solution checker / agent evaluation | [ ] | [ ] | [ ] | [ ] | [ ] |
| [ ] | Attended/unattended execution and credentials | [ ] | [ ] | [ ] | [ ] | [ ] |
| [ ] | Agent identity / lifecycle / telemetry | [ ] | [ ] | [ ] | [ ] | [ ] |

Use one row per feature/type combination; split controls with different support. `Unknown` remains unknown until verified. Preview requires explicit scoped risk acceptance and a fallback; do not invent a GA date. Unsupported means redesign or narrow scope, not silently claim coverage.

Disambiguate native Power Platform Git integration from ordinary Git, external editing from redeployment identity and plan linkage, and standard agent evaluation from a specific new evaluation experience or evaluator. A feature-specific preview label must not become a blanket agent-evaluation claim.

## Stage product-state evidence

These are verification prompts, not a claim that every feature supports the chosen type.

| HVE stage | Product-state question | Exact setting/artifact/version and environment | Actual evidence / date | Supported for chosen type? | Accountable owner / exit |
|---|---|---|---|---|---|
| Qualify | What baseline, readiness and scope exist? | [ ] | [ ] | [ ] | [ ] |
| Discover | What apps, automation and agents can this identity actually see? | [ ] | [ ] | [ ] | [ ] |
| Frame | Which data policies and environment-group constraints apply? | [ ] | [ ] | [ ] | [ ] |
| Prove | Is a governed environment and routing actually available? | [ ] | [ ] | [ ] | [ ] |
| Build | What solution, source-control and pipeline path is supported and used? | [ ] | [ ] | [ ] | [ ] |
| Assure | Which checkers/evaluations ran; who owns each finding and due date? | [ ] | [ ] | [ ] | [ ] |
| Operate | Which monitoring/telemetry path works with this type and identity? | [ ] | [ ] | [ ] | [ ] |
| Transfer | Which delegated permissions/lifecycle controls can the receiving owner exercise? | [ ] | [ ] | [ ] | [ ] |
| Compound | What dated reassessment and second-engagement evidence exist? | [ ] | [ ] | [ ] | [ ] |

Verdict: [proceed within scope / hold / redesign]. Unverified assumptions: [ ]. Human approver, authority, timestamp and exact version: [ ]. Next support recheck: [ ]. The fixture author does not authorize deployment.
