# PM 01 · Weekly status and RAID log with Cowork
**Persona:** Project Manager (lead) · PMO Analyst · Workstream Leads  
**Uses:** Cowork · Skill (Weekly Status)  
**Practice area:** Project Management · **Phase:** Post-sales · **Products:** Any D365 / M365 project · **Step tags:** Schedule · Create

## Goal
Give the project manager a weekly status report and an up-to-date RAID log without chasing workstream leads.

## Output
A RAG status report, an updated RAID log, a Teams post to the project channel and nudges to owners of overdue actions.

## Why Copilot
Project signals live in Azure DevOps or Project boards, Teams channels, emails, meeting transcripts and the RAID log. Cowork combines: cross-source signal gathering, RAG scoring and scheduled, approval-gated communication.

**Data sources:** M365 Data, Azure DevOps / Planner, Teams

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Friday at 14:00]` | Day and time the scheduled run happens |
| `[Project Name]` | Delivery project or programme name |
| `[Project Code]` | Tag/code used in email subjects and meeting titles |
| `[Azure DevOps / Planner]` | Backlog or plan source |
| `[RAID File]` | RAID log workbook |
| `[Weekly Status]` | Name to save the prompt as a reusable skill |

## Prompt template
```text
Every [Friday at 14:00], prepare the status for [Project Name].
- Read this week's project channel, emails tagged [Project Code], meeting transcripts and the backlog in [Azure DevOps / Planner].
- Score each workstream (Sales, Customer Service, F&O, Data, Integration, Change) Red / Amber / Green with a one-line reason.
- Update the RAID log in [RAID File]: add new risks and issues, close resolved ones, flag overdue actions.
- Draft the status report and a Teams post; show me both before anything is posted.
- Draft a reminder to each owner with overdue actions.
- Visuals: include a RAG heatmap by workstream, a sprint burndown chart and a RAID trend chart – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Weekly Status] and schedule it to run every week.
```

## Visuals
- RAG heatmap by workstream
- Sprint burndown chart
- RAID trend chart

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Schedule]** Gather – Teams, email, transcripts and backlog
2. **[Create]** Score – RAG by workstream
3. **[Schedule]** Update – RAID log
4. **[Create]** Draft – status report, Teams post and nudges
5. **[Schedule]** Schedule – every Friday afternoon

**Reusable skill:** Weekly Status – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| PM time on weekly reporting | 4–6 hrs saved per week |
| RAID log currency | Updated weekly, not monthly |
| Overdue actions | −20–30% |
| Status consistency | Same RAG logic every week |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › PM 01). Summary: ZAV-HZN RAID log (xlsx); ZAV-HZN sprint backlog (xlsx); Status report template; Teams channel export; Design authority, PMO and stand-up transcripts; Emails 10–14, 17–18.

- Folder root › ZAV-HZN RAID Log.xlsx
- Folder root › ZAV-HZN Sprint Backlog Export.xlsx
- Folder root › Frontier Delivery - Project Status Report Template.docx
- 02 Meeting transcripts › ZAV-HZN Design Authority - 2026-10-13.vtt
- 02 Meeting transcripts › ZAV-HZN PMO Weekly Status - 2026-10-15.vtt
- 02 Meeting transcripts › ZAV-HZN Daily Stand-up - 2026-10-19.vtt
- 03 Teams channel › ZAV-HZN Project Channel Export - 12 to 19 Oct 2026.md
- 01 Emails › 10 CargoWise API spec still not received.eml
- 01 Emails › 11 ZATCA ISV shortlist update.eml
- 01 Emails › 12 Vendor master data quality first profiling results.eml
- 01 Emails › 13 Warehouse mobile devices decision delayed again.eml
- 01 Emails › 14 UAT dates clash with Qatar year-end close.eml
- 01 Emails › 17 Sprint 4 blocked items.eml
- 01 Emails › 18 Warehousing workstream weekly update.eml

## What good looks like (demo run)
- Integration RED (CargoWise, 6 blocked stories, 34/42 velocity); Data migration and Warehousing AMBER; Finance and CE GREEN
- RAID gets new items (vendor cleansing owner) and stale/overdue items flagged; the oversharing issue is recognised as an existing RAID item, not added as a duplicate
- Nothing posted without approval

## Variants
- **Quick version:** "Summarise this week's [Project Code] emails and channel posts into RAG by workstream and new risks."
- **Scheduled version:** Scheduled Cowork task: runs every [Friday at 14:00]; drafts the status report, Teams post and nudges and holds them for approval before posting.
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › PM 01.

---
Last reviewed: October 2026 · Owner: Lorette Roos
