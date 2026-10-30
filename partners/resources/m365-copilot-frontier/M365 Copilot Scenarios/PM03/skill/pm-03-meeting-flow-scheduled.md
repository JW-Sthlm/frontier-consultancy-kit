# PM 03 · Project and meeting management flow with scheduled Cowork tasks
**Persona:** Project Manager (lead) · PMO Analyst  
**Uses:** Cowork · Skill (Meeting Rhythm)  
**Practice area:** Project Management · **Phase:** Post-sales · **Products:** Any D365 / M365 project · **Step tags:** Schedule · Create

## Goal
Run the project's meeting rhythm automatically: agendas before each meeting, minutes and actions after, and a weekly roll-up to the PM — without manual chasing.

## Output
Pre-meeting agendas, post-meeting minutes, an updated action tracker, owner reminders in Teams and a Friday project digest for the PM.

## Why Copilot
Meeting rhythm work repeats every day across stand-ups, design authorities and steering committees, and the evidence sits in calendars, transcripts, Teams and trackers. Cowork runs the flow on a schedule, synthesises transcripts and trackers, and drafts every update for approval.

**Data sources:** Calendar & transcripts, Teams, SharePoint / Planner

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Project Name]` | Delivery project or programme name |
| `[Project Code]` | Tag/code used in email subjects and meeting titles |
| `[Tracker List]` | Action tracker (SharePoint list, Planner or Excel) |
| `[Meeting Rhythm]` | Name to save the run as a reusable personal skill (default: Meeting Rhythm) |

## Prompt template
```text
Set up scheduled Cowork tasks for [Project Name] that do the following:
- 24 hours before any meeting tagged [Project Code]: draft an agenda from open actions, RAID items and the last minutes, and post it in the meeting chat.
- When a transcript is available: write minutes with decisions and actions (owner, due date), update the action tracker in [Tracker List], and post a summary in the project channel.
- Every day at 09:00: send each owner a Teams reminder for actions due in the next 2 days or overdue.
- Every Friday at 15:00: send me a digest — decisions made, actions closed vs opened, overdue items and meetings without minutes.
- Visuals: include a meeting-rhythm calendar and an actions opened vs closed chart – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Meeting Rhythm] so the practice can reuse it.
Ask for my approval before posting anything to the customer's channel.
```

## Visuals
- Meeting-rhythm calendar
- Actions opened vs closed chart

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Schedule]** Trigger – calendar, transcript and schedule events
2. **[Schedule]** Prepare – agendas from actions, RAID and last minutes
3. **[Create]** Capture – minutes, decisions and actions from transcripts
4. **[Schedule]** Update – action tracker and Teams reminders
5. **[Schedule]** Digest – Friday roll-up to the PM

**Reusable skill:** Meeting Rhythm – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Agenda and minutes effort | ~80% automated |
| Meetings with minutes and actions | Up to 100% |
| Action closure rate | +20–30% |
| PM admin time | 3–5 hrs saved per week |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › PM 03). Summary: ZAV-HZN action tracker (xlsx); Design authority, PMO and stand-up transcripts; Teams channel export; Email 22.

- Folder root › ZAV-HZN Action Tracker.xlsx
- 02 Meeting transcripts › ZAV-HZN Design Authority - 2026-10-13.vtt
- 02 Meeting transcripts › ZAV-HZN PMO Weekly Status - 2026-10-15.vtt
- 02 Meeting transcripts › ZAV-HZN Daily Stand-up - 2026-10-19.vtt
- 03 Teams channel › ZAV-HZN Project Channel Export - 12 to 19 Oct 2026.md
- 01 Emails › 22 ZAV-HZN meeting rhythm and action tracker.eml

## What good looks like (demo run)
- Minutes from the 13 Oct Design Authority capture 3 decisions/actions (sample XML, lane reconciliation 22 Oct, ZATCA paper 23 Oct)
- Overdue actions match the stand-up (CargoWise letter, cleansing owner, oversharing list)
- Schedules created as requested

## Variants
- **Quick version:** "Write minutes from this [Project Code] meeting transcript: decisions, actions with owner and due date."
- **Scheduled version:** Scheduled Cowork tasks for the meeting-tag check, daily 09:00 reminders and the Friday 15:00 digest, plus a Cowork event trigger when a transcript is available, as in the prompt template.
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › PM 03.

---
Last reviewed: October 2026 · Owner: Lorette Roos
