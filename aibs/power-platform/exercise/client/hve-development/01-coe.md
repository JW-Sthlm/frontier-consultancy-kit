# Case 01: what must the CoE actually do?

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. Not an approved schema or a working platform.**

## Client interview evidence

- **C01-F1 / Priya:** "Teams have three different AI ideas. I need a consistent way to decide which are worth pursuing, not a central committee that approves every small edit."
- **C01-F2 / Mia:** "Start with employee service requests. I must know who asked, what they need, who is handling it and whether they are satisfied."
- **C01-F3 / Jules:** "I can support only part of the first pilot. Business teams must own their service decisions and support after handover."
- **C01-F4 / Priya:** "A use case may be paused, changed or declined. I want to retain the evidence and reason, not just its current score."
- **C01-F5 / Delivery lead:** "If a second team reuses an asset, we need its owner, accepted version, suitable use and limitations."
- **C01-F6 / Mia:** "An employee request cannot close without an accountable handler. A technical record owner is not necessarily that person."
- **C01-F7 / Priya:** "The first service should explain Repair and Delivery and route the request. Payroll advice and autonomous financial decisions are not part of it."
- **C01-F8:** DEM-01's four-case/40-minute baseline is synthetic. No achieved saving is supplied.

## Technology-specific decision context

Model-driven apps can support related records, work queues and role-specific forms/views. Power Automate can route business events and reminders. Copilot Studio can explain a service or perform a deliberately bounded business action.

Decide which capabilities the CoE and its first service need. Do not start with a mandatory list of tables, flows or agents. Business-process stages may be useful, but nine HVE stages are not automatically nine database statuses.

## Proposal to inspect

- **C01-P1:** One portfolio spreadsheet can hold ideas, requests, assessments, decisions, service activity and asset details in the same row.
- **C01-P2:** Build a full enterprise CoE inventory/approval system before the first service can be tried.
- **C01-P3:** An agent is mandatory for every use case; its demonstration proves the CoE is operational.

## Change for discussion

- **C01-C1:** A second business team wants the same intake but different acceptance rules. Identify standard capability versus team-specific variation.
- **C01-C2:** Priya wants to reconsider a previously declined idea. Current status alone must not erase its earlier decision/evidence.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C01-T1 | The proposed feature list contains central approval for every edit, although no interview need supports it. |
| C01-T2 | The model cannot distinguish a business use case from an individual employee service request. |
| C01-T3 | Reopening a use case overwrites its earlier decision and reason. |
| C01-T4 | The reusable asset has no accepted-version or receiving-owner information. |
| C01-T5 | No first-release boundary explains which CoE features can wait. |

Use this to review feature/schema choices. It is not a runtime test or proof of a deployed CoE.
