# Guided build 08: adapt, build and test a prepared dispatch code app

[Lab 08](../08-dispatch-workbench.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-08](../client/offerings/README.md), the jobs/technicians fixtures and the facilitator-reviewed starter.

## 1. Understand this route before opening a terminal

A code app is written as project files rather than only arranged in a browser designer. You do not need to author a scheduling server for this guided exercise.

The facilitator must supply a **working starter workspace**, not an empty Vite template. It includes:

- Job and technician lists, keyboard-accessible assignment and visible loading/error states.
- Typed Dataverse data access and an authenticated AssignJob operation.
- The transactional server rule, technician-slot concurrency protection and bypass prevention.
- A small `src/training-settings.ts` file for the changes below.
- A documented `npm run verify` script covering type-check, build and the focused tests.
- A rehearsed local-run command and sandbox deployment command for the installed CLI.

**This repository does not currently bundle that workspace or server binary.** The guided live route is blocked until the facilitator supplies and rehearses them. A scaffolded blank page is not an equivalent starter.

## 2. Ask HVE to explain the system

In Cowork:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / optional implementation reference
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

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

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
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


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 08: adapt, build and test a prepared dispatch code app

[Lab 08](../08-dispatch-workbench.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-08](../client/offerings/README.md), the jobs/technicians fixtures and the facilitator-reviewed starter.

## 1. Understand this route before opening a terminal

A code app is written as project files rather than only arranged in a browser designer. You do not need to author a scheduling server for this guided exercise.

The facilitator must supply a **working starter workspace**, not an empty Vite template. It includes:

- Job and technician lists, keyboard-accessible assignment and visible loading/error states.
- Typed Dataverse data access and an authenticated AssignJob operation.
- The transactional server rule, technician-slot concurrency protection and bypass prevention.
- A small `src/training-settings.ts` file for the changes below.
- A documented `npm run verify` script covering type-check, build and the focused tests.
- A rehearsed local-run command and sandbox deployment command for the installed CLI.

**This repository does not currently bundle that workspace or server binary.** The guided live route is blocked until the facilitator supplies and rehearses them. A scaffolded blank page is not an equivalent starter.

## 2. Ask HVE to explain the system

In Cowork:



**Expected:** a three-part explanation and clear boundaries for your local changes.

## 3. Open and verify the supplied workspace

1. Download the facilitator's reviewed starter through the approved training location.
2. Open its folder in VS Code using **File > Open Folder**.
3. Read its `START-HERE` instructions. Match the supplied version with the handoff card.
4. Open **Terminal > New Terminal**. A terminal is where you run the project's documented commands.
5. Run the dependency command stated by the starter: normally `npm ci` when it supplies a lockfile, or `npm install` when the rehearsed starter explicitly requires it.
6. Run `npm run verify`.

**Expected:** the unchanged starter passes. If it fails, preserve the output and ask the facilitator. Do not start debugging an unknown baseline alone.

## 4. Run the app locally

1. Use the exact initialization/authentication command from the card for the installed code-app CLI. Select only the training environment.
2. Run the starter's local command, for example `pa app run` in the currently rehearsed CLI.
3. Open the reported Local Play URL in the training browser profile.
4. Confirm jobs DSP-01..04 and TECH-A/B match the fixture.
5. Do not put credentials into source files. If authentication fails, use the facilitator's supported sign-in route.

**Expected:** an already functioning dispatch board, not an empty application shell.

## 5. Make one bounded code change

Open `src/training-settings.ts` in the supplied starter. The facilitator's starter contract provides:



Change only the title to `Zava training dispatch`. Keep showUtcLabel true. Save.

Then use the starter's prepared **visible fields** configuration to add Required skill to the job list. Its exact property/type is documented in the supplied workspace; do not invent a file/property that is absent.

This is a real configuration/UI change within a functioning code app. The advanced extension is authoring new components or server behavior, not a mandatory beginner task.

If using a separately authorized local coding assistant:



This prompt belongs in the local developer environment, not in Cowork.

## 6. Build and test the change

1. Run `npm run verify` again. Preserve the actual result.
2. Reload Local Play and verify title, skill column, keyboard interaction and errors.
3. Try DSP-02 to TECH-A: overlap rejection.
4. Try DSP-03 to TECH-A: wrong-skill rejection.
5. Try DSP-03 to TECH-B: allowed.
6. Try DSP-04 to TECH-A: allowed at the 10:00 boundary, if no intervening test assignment conflicts.

Use the facilitator's exact reset/read-back procedure between cases. Resetting expected test records is not deleting an environment.

The facilitator then runs the prepared two-client race harness: same stale job/version, and two different overlapping jobs for one technician. You observe both request results and the final stored schedule.

**Expected:** no double booking. Passing a UI test does not substitute for the server race tests.

## 7. Publish only to the sandbox

After operator approval, run the documented build/publish route from the starter. In the current CLI this can be `npm run build` followed by `pa app push`; the card confirms the installed version and environment.

Open the returned app URL as the training dispatcher and repeat one allowed and one denied assignment. Record app identity/version.

## 8. Return to HVE and package

Attach the starter manifest, actual changed-file summary, verification output and runtime observations. Use the main lab's review prompt.

Name what you actually did: adapted and delivered a prepared code app. Do not claim you independently built a transactional scheduler from an empty template.

The partner offering includes both the custom UI and the reviewed backend, deployment instructions, tests and specialist support ownership. Code-app Git/ALM behavior differs from model-driven solution authoring; do not claim native Power Platform Git integration.
[END STANDALONE CONTEXT]

Use guided build 08 and the supplied starter manifest.
Explain browser UI, Dataverse records and the assignment server in
plain language. Identify what I can change without altering business
authorization. Explain why a local overlap check cannot prevent
two dispatchers racing. Check starter readiness before build advice.
Do not imply that this Cowork plugin can edit or run the code.
```

**Expected:** a three-part explanation and clear boundaries for your local changes.

## 3. Open and verify the supplied workspace

1. Download the facilitator's reviewed starter through the approved training location.
2. Open its folder in VS Code using **File > Open Folder**.
3. Read its `START-HERE` instructions. Match the supplied version with the handoff card.
4. Open **Terminal > New Terminal**. A terminal is where you run the project's documented commands.
5. Run the dependency command stated by the starter: normally `npm ci` when it supplies a lockfile, or `npm install` when the rehearsed starter explicitly requires it.
6. Run `npm run verify`.

**Expected:** the unchanged starter passes. If it fails, preserve the output and ask the facilitator. Do not start debugging an unknown baseline alone.

## 4. Run the app locally

1. Use the exact initialization/authentication command from the card for the installed code-app CLI. Select only the training environment.
2. Run the starter's local command, for example `pa app run` in the currently rehearsed CLI.
3. Open the reported Local Play URL in the training browser profile.
4. Confirm jobs DSP-01..04 and TECH-A/B match the fixture.
5. Do not put credentials into source files. If authentication fails, use the facilitator's supported sign-in route.

**Expected:** an already functioning dispatch board, not an empty application shell.

## 5. Make one bounded code change

Open `src/training-settings.ts` in the supplied starter. The facilitator's starter contract provides:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / optional implementation reference
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

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

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
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


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 08: adapt, build and test a prepared dispatch code app

[Lab 08](../08-dispatch-workbench.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-08](../client/offerings/README.md), the jobs/technicians fixtures and the facilitator-reviewed starter.

## 1. Understand this route before opening a terminal

A code app is written as project files rather than only arranged in a browser designer. You do not need to author a scheduling server for this guided exercise.

The facilitator must supply a **working starter workspace**, not an empty Vite template. It includes:

- Job and technician lists, keyboard-accessible assignment and visible loading/error states.
- Typed Dataverse data access and an authenticated AssignJob operation.
- The transactional server rule, technician-slot concurrency protection and bypass prevention.
- A small `src/training-settings.ts` file for the changes below.
- A documented `npm run verify` script covering type-check, build and the focused tests.
- A rehearsed local-run command and sandbox deployment command for the installed CLI.

**This repository does not currently bundle that workspace or server binary.** The guided live route is blocked until the facilitator supplies and rehearses them. A scaffolded blank page is not an equivalent starter.

## 2. Ask HVE to explain the system

In Cowork:



**Expected:** a three-part explanation and clear boundaries for your local changes.

## 3. Open and verify the supplied workspace

1. Download the facilitator's reviewed starter through the approved training location.
2. Open its folder in VS Code using **File > Open Folder**.
3. Read its `START-HERE` instructions. Match the supplied version with the handoff card.
4. Open **Terminal > New Terminal**. A terminal is where you run the project's documented commands.
5. Run the dependency command stated by the starter: normally `npm ci` when it supplies a lockfile, or `npm install` when the rehearsed starter explicitly requires it.
6. Run `npm run verify`.

**Expected:** the unchanged starter passes. If it fails, preserve the output and ask the facilitator. Do not start debugging an unknown baseline alone.

## 4. Run the app locally

1. Use the exact initialization/authentication command from the card for the installed code-app CLI. Select only the training environment.
2. Run the starter's local command, for example `pa app run` in the currently rehearsed CLI.
3. Open the reported Local Play URL in the training browser profile.
4. Confirm jobs DSP-01..04 and TECH-A/B match the fixture.
5. Do not put credentials into source files. If authentication fails, use the facilitator's supported sign-in route.

**Expected:** an already functioning dispatch board, not an empty application shell.

## 5. Make one bounded code change

Open `src/training-settings.ts` in the supplied starter. The facilitator's starter contract provides:



Change only the title to `Zava training dispatch`. Keep showUtcLabel true. Save.

Then use the starter's prepared **visible fields** configuration to add Required skill to the job list. Its exact property/type is documented in the supplied workspace; do not invent a file/property that is absent.

This is a real configuration/UI change within a functioning code app. The advanced extension is authoring new components or server behavior, not a mandatory beginner task.

If using a separately authorized local coding assistant:



This prompt belongs in the local developer environment, not in Cowork.

## 6. Build and test the change

1. Run `npm run verify` again. Preserve the actual result.
2. Reload Local Play and verify title, skill column, keyboard interaction and errors.
3. Try DSP-02 to TECH-A: overlap rejection.
4. Try DSP-03 to TECH-A: wrong-skill rejection.
5. Try DSP-03 to TECH-B: allowed.
6. Try DSP-04 to TECH-A: allowed at the 10:00 boundary, if no intervening test assignment conflicts.

Use the facilitator's exact reset/read-back procedure between cases. Resetting expected test records is not deleting an environment.

The facilitator then runs the prepared two-client race harness: same stale job/version, and two different overlapping jobs for one technician. You observe both request results and the final stored schedule.

**Expected:** no double booking. Passing a UI test does not substitute for the server race tests.

## 7. Publish only to the sandbox

After operator approval, run the documented build/publish route from the starter. In the current CLI this can be `npm run build` followed by `pa app push`; the card confirms the installed version and environment.

Open the returned app URL as the training dispatcher and repeat one allowed and one denied assignment. Record app identity/version.

## 8. Return to HVE and package

Attach the starter manifest, actual changed-file summary, verification output and runtime observations. Use the main lab's review prompt.

Name what you actually did: adapted and delivered a prepared code app. Do not claim you independently built a transactional scheduler from an empty template.

The partner offering includes both the custom UI and the reviewed backend, deployment instructions, tests and specialist support ownership. Code-app Git/ALM behavior differs from model-driven solution authoring; do not claim native Power Platform Git integration.
[END STANDALONE CONTEXT]

displayTitle: "Zava dispatch"
showUtcLabel: true
```

Change only the title to `Zava training dispatch`. Keep showUtcLabel true. Save.

Then use the starter's prepared **visible fields** configuration to add Required skill to the job list. Its exact property/type is documented in the supplied workspace; do not invent a file/property that is absent.

This is a real configuration/UI change within a functioning code app. The advanced extension is authoring new components or server behavior, not a mandatory beginner task.

If using a separately authorized local coding assistant:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 08 / optional implementation reference
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 08: Power Apps code app, Dataverse
## Feature and schema decision workflow

| Step | Dispatch decision | HVE output | Used before |
|---|---|---|---|
| DS08-1 | What must the dispatcher compare and decide? | User needs and feature questions | Choosing app type |
| DS08-2 | Which workbench features are first release? | Prioritized features and product-fit tradeoffs | Commissioning a custom interface |
| DS08-3 | What jobs, skills, assignments and history data is necessary? | Schema alternatives and feature rationale | Creating tables/services |
| DS08-4 | What do multiple skills and reassignment change? | Feature/cardinality/lifecycle impact | Adding complexity or broader scope |
| DS08-5 | Can the model explain valid/invalid assignments and accountability? | Feature/schema decision pack | Prototype and acceptance planning |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

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

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-08 / Dispatch:** Jobs are assigned only to an active technician with the required skill and non-overlapping UTC time interval. Intervals are half-open: an end at 10:00 permits a start at 10:00. Concurrent stale changes must be rejected by the server, not only by the screen.

SOURCE: client/hve-development/08-dispatch.md
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


SOURCE: client/offerings/dispatch-jobs.csv
job_id,required_skill,start_utc,end_utc,assigned_technician
DSP-01,Electrical,2026-10-14T09:00:00Z,2026-10-14T10:00:00Z,TECH-A
DSP-02,Electrical,2026-10-14T09:30:00Z,2026-10-14T10:30:00Z,
DSP-03,Mechanical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,
DSP-04,Electrical,2026-10-14T10:00:00Z,2026-10-14T11:00:00Z,


SOURCE: client/offerings/technicians.csv
technician_id,skill,active
TECH-A,Electrical,true
TECH-B,Mechanical,true

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 08: adapt, build and test a prepared dispatch code app

[Lab 08](../08-dispatch-workbench.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-08](../client/offerings/README.md), the jobs/technicians fixtures and the facilitator-reviewed starter.

## 1. Understand this route before opening a terminal

A code app is written as project files rather than only arranged in a browser designer. You do not need to author a scheduling server for this guided exercise.

The facilitator must supply a **working starter workspace**, not an empty Vite template. It includes:

- Job and technician lists, keyboard-accessible assignment and visible loading/error states.
- Typed Dataverse data access and an authenticated AssignJob operation.
- The transactional server rule, technician-slot concurrency protection and bypass prevention.
- A small `src/training-settings.ts` file for the changes below.
- A documented `npm run verify` script covering type-check, build and the focused tests.
- A rehearsed local-run command and sandbox deployment command for the installed CLI.

**This repository does not currently bundle that workspace or server binary.** The guided live route is blocked until the facilitator supplies and rehearses them. A scaffolded blank page is not an equivalent starter.

## 2. Ask HVE to explain the system

In Cowork:



**Expected:** a three-part explanation and clear boundaries for your local changes.

## 3. Open and verify the supplied workspace

1. Download the facilitator's reviewed starter through the approved training location.
2. Open its folder in VS Code using **File > Open Folder**.
3. Read its `START-HERE` instructions. Match the supplied version with the handoff card.
4. Open **Terminal > New Terminal**. A terminal is where you run the project's documented commands.
5. Run the dependency command stated by the starter: normally `npm ci` when it supplies a lockfile, or `npm install` when the rehearsed starter explicitly requires it.
6. Run `npm run verify`.

**Expected:** the unchanged starter passes. If it fails, preserve the output and ask the facilitator. Do not start debugging an unknown baseline alone.

## 4. Run the app locally

1. Use the exact initialization/authentication command from the card for the installed code-app CLI. Select only the training environment.
2. Run the starter's local command, for example `pa app run` in the currently rehearsed CLI.
3. Open the reported Local Play URL in the training browser profile.
4. Confirm jobs DSP-01..04 and TECH-A/B match the fixture.
5. Do not put credentials into source files. If authentication fails, use the facilitator's supported sign-in route.

**Expected:** an already functioning dispatch board, not an empty application shell.

## 5. Make one bounded code change

Open `src/training-settings.ts` in the supplied starter. The facilitator's starter contract provides:



Change only the title to `Zava training dispatch`. Keep showUtcLabel true. Save.

Then use the starter's prepared **visible fields** configuration to add Required skill to the job list. Its exact property/type is documented in the supplied workspace; do not invent a file/property that is absent.

This is a real configuration/UI change within a functioning code app. The advanced extension is authoring new components or server behavior, not a mandatory beginner task.

If using a separately authorized local coding assistant:



This prompt belongs in the local developer environment, not in Cowork.

## 6. Build and test the change

1. Run `npm run verify` again. Preserve the actual result.
2. Reload Local Play and verify title, skill column, keyboard interaction and errors.
3. Try DSP-02 to TECH-A: overlap rejection.
4. Try DSP-03 to TECH-A: wrong-skill rejection.
5. Try DSP-03 to TECH-B: allowed.
6. Try DSP-04 to TECH-A: allowed at the 10:00 boundary, if no intervening test assignment conflicts.

Use the facilitator's exact reset/read-back procedure between cases. Resetting expected test records is not deleting an environment.

The facilitator then runs the prepared two-client race harness: same stale job/version, and two different overlapping jobs for one technician. You observe both request results and the final stored schedule.

**Expected:** no double booking. Passing a UI test does not substitute for the server race tests.

## 7. Publish only to the sandbox

After operator approval, run the documented build/publish route from the starter. In the current CLI this can be `npm run build` followed by `pa app push`; the card confirms the installed version and environment.

Open the returned app URL as the training dispatcher and repeat one allowed and one denied assignment. Record app identity/version.

## 8. Return to HVE and package

Attach the starter manifest, actual changed-file summary, verification output and runtime observations. Use the main lab's review prompt.

Name what you actually did: adapted and delivered a prepared code app. Do not claim you independently built a transactional scheduler from an empty template.

The partner offering includes both the custom UI and the reviewed backend, deployment instructions, tests and specialist support ownership. Code-app Git/ALM behavior differs from model-driven solution authoring; do not claim native Power Platform Git integration.
[END STANDALONE CONTEXT]

Inspect this supplied starter first. Change the display title to
"Zava training dispatch" and add Required skill to the existing job
list using its current typed model. Preserve keyboard operation,
UTC labeling and server assignment calls. Do not change the API,
credentials, authorization or concurrency behavior. Run npm run verify.
```

This prompt belongs in the local developer environment, not in Cowork.

## 6. Build and test the change

1. Run `npm run verify` again. Preserve the actual result.
2. Reload Local Play and verify title, skill column, keyboard interaction and errors.
3. Try DSP-02 to TECH-A: overlap rejection.
4. Try DSP-03 to TECH-A: wrong-skill rejection.
5. Try DSP-03 to TECH-B: allowed.
6. Try DSP-04 to TECH-A: allowed at the 10:00 boundary, if no intervening test assignment conflicts.

Use the facilitator's exact reset/read-back procedure between cases. Resetting expected test records is not deleting an environment.

The facilitator then runs the prepared two-client race harness: same stale job/version, and two different overlapping jobs for one technician. You observe both request results and the final stored schedule.

**Expected:** no double booking. Passing a UI test does not substitute for the server race tests.

## 7. Publish only to the sandbox

After operator approval, run the documented build/publish route from the starter. In the current CLI this can be `npm run build` followed by `pa app push`; the card confirms the installed version and environment.

Open the returned app URL as the training dispatcher and repeat one allowed and one denied assignment. Record app identity/version.

## 8. Return to HVE and package

Attach the starter manifest, actual changed-file summary, verification output and runtime observations. Use the main lab's review prompt.

Name what you actually did: adapted and delivered a prepared code app. Do not claim you independently built a transactional scheduler from an empty template.

The partner offering includes both the custom UI and the reviewed backend, deployment instructions, tests and specialist support ownership. Code-app Git/ALM behavior differs from model-driven solution authoring; do not claim native Power Platform Git integration.
