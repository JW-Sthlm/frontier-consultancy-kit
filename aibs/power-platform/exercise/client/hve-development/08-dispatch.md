# Case 08: what must a dispatcher workbench support?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-08 and job/technician fixtures remain authoritative.**

## Client interview evidence

- **C08-F1 / Noah:** "Dispatchers need to compare unassigned jobs, technician skills and availability together."
- **C08-F2 / Dispatcher:** "I need to understand why an assignment is unsuitable, not just see an empty dropdown."
- **C08-F3 / Noah:** "Two dispatchers may work at once. We must avoid conflicting assignments."
- **C08-F4 / Service lead:** "We need to know who assigned a job and when. Reassignment and travel optimization are not first-release requirements."
- **C08-F5:** Current fixtures show one required skill per job and one skill per technician. Active status and non-overlapping UTC intervals matter; endpoints are half-open.
- **C08-F6:** A code-owning team exists, but a code app is a candidate, not proof that every feature needs custom development.

## Technology-specific decision context

Compare a custom code-app workbench with canvas/model-driven alternatives against the actual interaction and support needs. Decide features before selecting components or writing code.

Consider job, technician, skill, assignment and assignment-history concepts only when a selected feature justifies them. Platform audit/history may meet some needs; a new custom table is not automatically required.

## Proposal to inspect

- **C08-P1:** Store only a technician name on each job and call the schedule complete.
- **C08-P2:** Model all future skills, certifications, optimization and travel rules in the first pilot.
- **C08-P3:** An assignment's current value is enough to explain who made it or changed it.

## Change for discussion

- **C08-C1:** Technicians may have multiple skills next quarter. Compare a single Choice/text field with managed skill associations.
- **C08-C2:** Noah asks to reassign existing jobs. Decide whether to include it now and how it affects lifecycle/history and conflict information.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C08-T1 | The model cannot explain an unavailable or unsuitable technician. |
| C08-T2 | Multiple skills are stored as a comma-separated display string with no defined matching semantics. |
| C08-T3 | Earlier assignment accountability is lost after replacement. |
| C08-T4 | First-release scope includes optimization and certifications without source evidence. |

No TypeScript component, API implementation or concurrency test is supplied.
