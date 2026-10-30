# PM 03 · Project and meeting management flow in Scout
**Practice area:** Project Management · **Phase:** Post-sales · **Roles:** PM · **Products:** Any D365 / M365 project · **Copilot tools:** Scout · Cowork

## Goal
Run the project's meeting rhythm automatically: agendas before each meeting, minutes and actions after, and a weekly roll-up to the PM — without manual chasing.

## Output
Pre-meeting agendas, post-meeting minutes, an updated action tracker, owner reminders in Teams and a Friday project digest for the PM.

## Why Copilot
Meeting rhythm work repeats every day across stand-ups, design authorities and steering committees, and the evidence sits in calendars, transcripts, Teams and trackers. Scout runs the flow on triggers and schedules; Cowork does the heavier synthesis; Chat answers ad-hoc questions.

**Data sources:** Calendar & transcripts, Teams, SharePoint / Planner

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Project Name]` | Delivery project or programme name |
| `[Project Code]` | Tag/code used in email subjects and meeting titles |
| `[Tracker List]` | Action tracker (SharePoint list, Planner or Excel) |

## Prompt template
```text
Create a Scout flow for [Project Name] that runs on these triggers:
- 24 hours before any meeting tagged [Project Code]: draft an agenda from open actions, RAID items and the last minutes, and post it in the meeting chat.
- When a transcript is available: write minutes with decisions and actions (owner, due date), update the action tracker in [Tracker List], and post a summary in the project channel.
- Every day at 09:00: send each owner a Teams reminder for actions due in the next 2 days or overdue.
- Every Friday at 15:00: send me a digest — decisions made, actions closed vs opened, overdue items and meetings without minutes.
Ask for my approval before posting anything to the customer's channel.
```

## Workflow
1. **[Scout]** Trigger – calendar, transcript and schedule events
2. **[Scout]** Prepare – agendas from actions, RAID and last minutes
3. **[Cowork]** Capture – minutes, decisions and actions from transcripts
4. **[Scout]** Update – action tracker and Teams reminders
5. **[Scout]** Digest – Friday roll-up to the PM

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Agenda and minutes effort | ~80% automated |
| Meetings with minutes and actions | Up to 100% |
| Action closure rate | +20–30% |
| PM admin time | 3–5 hrs saved per week |

> Estimates – validate per engagement.

## What good looks like (demo run)
- Minutes from the 13 Oct Design Authority capture 3 decisions/actions (sample XML, lane reconciliation 22 Oct, ZATCA paper 23 Oct)
- Overdue actions match the stand-up (CargoWise letter, cleansing owner, oversharing list)
- Schedules created as requested

## Variants
- **Quick Chat version:** "Write minutes from this [Project Code] meeting transcript: decisions, actions with owner and due date."
- **Scheduled Scout version:** Native: meeting-tag, transcript, daily 09:00 and Friday 15:00 triggers as in the prompt template.
- **Demo mode:** see `test-pack.md` › PM 03.

---
Last reviewed: October 2026 · Owner: Lorette Roos
