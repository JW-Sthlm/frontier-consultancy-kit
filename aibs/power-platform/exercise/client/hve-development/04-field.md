# Case 04: decide the inspection app's features and schema

**HVE-DECISIONS-1.0. Fictional client interview and design-review inputs. No prescribed canvas controls, formulas or database blueprint.**

## Client interview evidence

- **C04-F1 / Eva:** "A visit may have no defect, or several. The app must not limit us to a fixed number of findings."
- **C04-F2 / Inspector:** "We return to the same site and equipment. We need to know what was observed on each visit, not overwrite last month's inspection."
- **C04-F3 / Eva:** "Checklist wording changes. We must still understand the questions and answers from a completed inspection."
- **C04-F4 / Supervisor:** "A finding may stay open after the inspection. Someone owns remediation and records follow-up. High severity requires my disposition before closure."
- **C04-F5 / Inspector:** "Connectivity is poor at some sites. A capture solution that requires continuous network access will not work for the intended field use."
- **C04-F6 / Eva:** "Photos could help a dispute, but we have not agreed retention, access or whether every finding needs one."
- **C04-F7 / Sponsor:** "The pilot covers two sites and one inspector per visit. AI scoring, inventory integration and travel optimization are not required."
- **C04-F8:** inspections.csv provides sample observations, not a normalized schema. INS-03 communicates a visit with no finding.

## Technology-specific decision context

A canvas app supports a task-oriented mobile experience and device capture. Supported Dataverse-backed mobile offline is a capability to assess against licensing/player/data constraints, not a reason to invent proven support.

Decide whether the first release needs structured checklist responses, reusable/versioned templates, photo evidence, remediation history and offline capture. Features drive the entities, fields, relationships and access/lifecycle rules.

## Proposal to inspect

- **C04-P1:** One Inspection row with Defect 1 through Defect 10 columns will represent every visit.
- **C04-P2:** Edit the current checklist in place; old responses do not need original question wording.
- **C04-P3:** Use one status that becomes Closed when capture is complete, even if remediation is pending.
- **C04-P4:** Build a configurable template designer, photo library and AI risk score before trying the first inspection.

## Change for discussion

- **C04-C1:** Next quarter, equipment types may use different checklists. Compare preserving a simple version/snapshot now with a full template/question model.
- **C04-C2:** Two people may help remediate a finding, but one person remains accountable. Decide whether that feature is required now and what association/history it would need.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C04-T1 | A visit with zero findings or more than ten cannot be represented consistently. |
| C04-T2 | After checklist editing, a completed inspection cannot explain the original question wording. |
| C04-T3 | Closing inspection capture also erases the distinction between open remediation and supervisor acceptance. |
| C04-T4 | The proposed photo feature has no Finding association, access or retention decision. |
| C04-T5 | The first-release scope includes AI scoring despite C04-F7 and no supporting user need. |

These are walkthroughs of candidate features/models, not app runtime tests. Derive and justify your own model; more tables are not automatically better.
