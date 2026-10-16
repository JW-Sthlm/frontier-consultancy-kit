# HVE Squad: Power Platform feature and schema decisions

**Decide what is needed, why it is needed and what data supports it.**

[Start here](START-HERE.md) | [Cowork method](delivery-playbook.md) | [Find outputs](OUTPUTS.md) | [Setup](../BEFORE-WORKSHOP.md) | [Deck](../presentation/index.html)

## The learning contract

Use HVE to interpret client evidence, select technology-specific features, compare logical schemas, handle a change and assemble a justified first-release design.

This is neither generic prompting nor implementation troubleshooting. Core tasks do not debug formulas/code, configure designer properties, or begin with a mandatory table blueprint.

Each case supplies an interview and candidate designs, not the answer. The current case version is HVE-DECISIONS-1.0. Sample CSVs are source examples, not normalized schemas.

## Choose the component and decision problem

| Lab | Power Platform components | Feature/schema decisions | Partner offer |
|---|---|---|---|
| [01 CoE and first service](01-ai-coe-launch.md) | Model-driven app, Power Automate cloud flow, Copilot Studio agent | CoE capabilities versus service features; use-case/decision/activity/reuse data | AI CoE Launch + First Value Stream |
| [02 Order intake](02-order-intake.md) | Power Automate cloud flow, AI Builder, Model-driven app | Extraction/correction/review needs; source/order/line/issue/history cardinality | Order Intake Accelerator |
| [03 Process service](03-process-to-value.md) | Power Automate Process Mining, Power Automate cloud flow | Insight/rota/reminder/trial scope; event/current-work/follow-up data | Process-to-Value Sprint |
| [04 Canvas inspection](04-field-inspections.md) | Canvas app, Dataverse mobile offline | Offline/photos/checklists/remediation; visit/finding/version/evidence relationships | Field Quality Accelerator |
| [05 Supplier service](05-supplier-onboarding.md) | Power Pages, Model-driven app, Power Automate cloud flow | Self-service/review/correction scope; supplier/contact/application/revision visibility | Supplier Onboarding Accelerator |
| [06 Service agent](06-service-agent.md) | Copilot Studio agent, Agent flow | Knowledge/actions/status scope; transient conversation versus persistent requests | Transactional Service Agent Pilot |
| [07 Legacy operating service](07-legacy-bridge.md) | Power Automate desktop flow, Power Automate cloud flow | Queue/reconciliation/history needs; job/attempt/observation/resolution identity | Legacy Workflow Bridge |
| [08 Dispatch workbench](08-dispatch-workbench.md) | Power Apps code app, Dataverse | Custom interaction versus simpler apps; job/skill/assignment/history model | Dispatch Workbench Accelerator |
| [09 Commercial insight](09-revenue-leakage.md) | Power BI, Model-driven app, Power Automate cloud flow | Diagnostic/casework/freshness scope; work/line/measure/investigation grain | Revenue Leakage Diagnostic + Resolution |
| [10 Client variation](10-repeatable-accelerator.md) | Power Pages, Model-driven app, Power Platform solutions | Standard versus variable features; region/reviewer/history schema choices | Repeatable Accelerator Delivery |

Component names identify the decision context, not compulsory architecture. HVE can recommend a simpler alternative. Original approved candidates remain 1, 2, 4, 6, 9, 12, 13, 14, 17 and 20.

## Five requests, five decisions

1. **Needs:** what are users trying to do, on what evidence?
2. **Features:** what is included, deferred, rejected or unverified?
3. **Schema:** what entities, fields, relationships and rules support selected features?
4. **Change:** what happens when a real requirement grows or varies?
5. **Decision pack:** can another person explain the choices using realistic records?

These are teaching requests, not five internal Squad stages. The server coordinates the actual work.

## Your actions

After each prompt follow **Find this output / Do with it / Next**. Record the actual original artifact/run/version, your source-backed disposition and the content carried forward.

You should make a choice, compare an alternative, draw/test a relationship, question an unjustified field or walk a changed example. Merely reading an answer or filling a generic decision log is insufficient.

## What you leave with

- A prioritized feature set with evidence and technology implications.
- A preferred logical schema and a reason for each field/relationship.
- Rejected options, business states/access/history rules and open client decisions.
- Sample-record/functional acceptance walkthroughs.
- A reusable decision method and [offering canvas](client/offerings/offering-canvas.md).

Use [the receipt](client/offerings/lab-receipt.md) to preserve decisions and source provenance. Supplied review findings are fictional, not actual application test results.

## Prerequisites and completion

No Power Platform authoring experience or provisioned app is required for the core. A connected, rehearsed Cowork/HVE project is required to claim live HVE practice; otherwise label a desk walkthrough. Timings require a representative pilot.

The [business source pack](client/offerings/README.md) and [decision cases](client/hve-development/README.md) support standalone starts. Lab 10 uses actual lab-05 artifacts when available, or a proposed baseline without invented history.

## Optional downstream implementation

[Earlier maker references](guided-builds/README.md) remain separate. Their example schemas and technical drills are not the core decision task or a prescribed answer. Applying a reviewed decision pack requires separate design/build preparation and actual execution evidence.
