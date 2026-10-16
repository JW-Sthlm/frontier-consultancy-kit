# Zava services: current course source pack

**Version `ZAVA-PP-2.0`, 14 October 2026. Entirely synthetic.**

Zava is a fictional distributor and field-service business. Orders arrive by email, suppliers use attachments, technicians work at disconnected sites, and service teams bridge several systems. Its first AI CoE must improve an actual service, not become another approval committee.

These are small teaching fixtures, not business research, live system exports or model outputs. Names are fictional roles. Amounts use EUR. Timestamps use UTC. Earlier Zava invoice/support files elsewhere in the client folder are **legacy material**, not the authority for this course.

The exercises pair these records with [HVE-DECISIONS-1.0 interviews](../hve-development/README.md): feature/schema proposals to compare, changes to discuss and fictional design-review feedback. The files are examples, not a prescribed database schema. No provisioned app is required.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

## Source files

| Lab | Inputs | Stable IDs |
|---|---|---|
| 01 CoE launch | [Demand](coe-demand.csv), [knowledge](service-knowledge.md) | DEM-01..03 |
| 02 Order intake | [Messages](order-messages.csv), [catalog](products.csv) | MSG-01..04, SKU-100/200 |
| 03 Process mining | [Event log](process-events.csv) | CASE-01..04 plus activity |
| 04 Inspections | [Inspection assignments](inspections.csv) | INS-01..03 |
| 05 Suppliers | [Supplier applications](suppliers.csv) | SUP-01..03 |
| 06 Agent | [Requests](service-cases.csv), [knowledge](service-knowledge.md) | SR-01..04, KB-01..02 |
| 07 Legacy | [Bridge jobs](bridge-jobs.csv), [training ledger](legacy-ledger.html) | JOB-01..03 |
| 08 Dispatch | [Jobs](dispatch-jobs.csv), [technicians](technicians.csv) | DSP-01..04, TECH-A/B |
| 09 Leakage | [Work](delivery-work.csv), [invoice lines](invoice-lines.csv) | WORK-01..05, INV-01..04 |
| 10 Reuse | Actual lab 05 HVE artifacts if available, supplied boundary and [second client](second-client.md) | NORA-01..03 |

## Scenario policy: cite these IDs

- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-02 / Orders:** Customer `C-100` is the only approved training customer. Products must exist and be active; quantities must be positive integers. Unknowns stay missing. The source message ID is the intake uniqueness key. Only Lena may accept a validated draft. Approval does not submit to an ERP.
- **RULE-03 / Process:** Cycle time is elapsed UTC hours from `Received` to `Closed` for complete cases only. Incomplete cases are reported separately. Waiting after `Credit review queued` is not hands-on work. Interventions may remind a reviewer, not auto-approve credit.
- **RULE-04 / Field:** Findings require an owner, severity and observation. High severity requires supervisor disposition before closure. An inspection cannot close with an open finding. Offline edits must synchronize and be checked in Dataverse before closure is claimed.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.
- **RULE-06 / Service:** Only authenticated test users with effective request-store permission may create a service request. Categories are `Repair` and `Delivery`; description is required and at most 500 characters. A human confirms the displayed payload before action. A caller-scoped request key prevents duplicate creation. A denied caller must not write through a privileged shared connection.
- **RULE-07 / Legacy:** Preserve job ID as the ledger's unique reference. Search before create; after uncertain completion, reconcile before retry. One learner/worker uses a ledger instance at a time. No financial posting.
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.
- **RULE-09 / Leakage:** Eligible work is delivered and commercially approved. Expected amount is hours times agreed rate. Posted invoice lines are net amounts before tax; sum by work ID. Potential unbilled amount is `max(expected minus posted, 0)` for eligible work. Excess billing, draft invoices and unknown work IDs are separate exceptions, not netted against unbilled work. EUR only; no extrapolation.
- **RULE-10 / Reuse:** Package structure and tests are reusable. Customer rules, identities and connection values are not universal. No secrets or training records in a deployment package. Receiving operators perform the new-client change without author coaching.

The client's sample rules are not platform guarantees. For example, Dataverse permissions must enforce access and an appropriate transactional server operation must enforce concurrent scheduling.

## Working outputs

Use copies of the [lab receipt](lab-receipt.md) and [offering canvas](offering-canvas.md) in your selected project. Source inputs remain unchanged. Live HVE artifacts follow the installed plugin's actual canonical storage paths, not a made-up course scaffold.
