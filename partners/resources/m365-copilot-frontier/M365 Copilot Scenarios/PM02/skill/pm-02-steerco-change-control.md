# PM 02 · Steering committee pack and change control
**Persona:** Project Manager (lead) · Engagement / Delivery Director  
**Uses:** Cowork · Skill (SteerCo Pack)  
**Practice area:** Project Management · **Phase:** Post-sales · **Products:** Any D365 / M365 project · **Step tags:** Create · Research

## Goal
Prepare a decision-ready steering committee pack and assess change requests for scope, cost and timeline impact.

## Output
A steering committee deck, a change-request impact assessment, a decisions-and-actions log and draft minutes after the meeting.

## Why Copilot
Budget burn, milestones, change requests and decisions sit across finance trackers, plans, emails and previous minutes. Cowork combines: data from Excel and plans, impact analysis, deck creation and minutes from the transcript.

**Data sources:** M365 Data, Project / Excel trackers, Meeting transcripts

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Project Name]` | Delivery project or programme name |
| `[Date]` | Date of the orals / meeting |
| `[Budget File]` | Budget / burn tracker workbook |
| `[CR Folder]` | Folder holding the open change requests |
| `[SteerCo Pack]` | Name to save the run as a reusable personal skill (default: SteerCo Pack) |

## Prompt template
```text
The steering committee for [Project Name] meets on [Date].
- Build a 6-slide pack: milestones vs baseline, budget burn vs plan from [Budget File], top 5 risks, change requests, decisions needed and next-period plan.
- For each open change request in [CR Folder], assess the impact on scope, effort, cost and go-live date, and recommend approve, defer or reject.
- After the meeting, use the transcript to draft minutes and update the decisions log, then draft a follow-up email to attendees for my review.
- Visuals: include a milestone timeline against baseline, a budget burn chart and a change-request impact chart – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [SteerCo Pack] so the practice can reuse it.
```

## Visuals
- Milestone timeline against baseline
- Budget burn chart
- Change-request impact chart

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Create]** Collect – plan, budget and change requests
2. **[Create]** Assess – change-request impact
3. **[Create]** Build – steering committee deck
4. **[Research]** Capture – decisions from the meeting transcript
5. **[Create]** Follow up – minutes and actions

**Reusable skill:** SteerCo Pack – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Steering pack preparation | 1–2 days → 2–4 hrs |
| Change-request impact assessment | 50% faster |
| Decision turnaround | Decisions in the meeting |
| Minutes and follow-up | Same day |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › PM 02). Summary: ZAV-HZN budget tracker (xlsx); Project charter and baseline; CR-007, CR-008, CR-009; SteerCo minutes 30 Sep + transcript; Emails 11, 14–16.

- Folder root › ZAV-HZN Budget Tracker.xlsx
- Folder root › ZAV-HZN Project Charter and Baseline Plan.docx
- Folder root › ZAV-HZN CR-007 Intercompany Auto-Settlement ZVQA.docx
- Folder root › ZAV-HZN CR-008 Customer Shipment Tracking Portal.docx
- Folder root › ZAV-HZN CR-009 Replace Rate-Card Engine with Trade Agreements.docx
- Folder root › ZAV-HZN SteerCo Minutes 30 Sep 2026.docx
- 02 Meeting transcripts › ZAV-HZN SteerCo - 2026-09-30.vtt
- 01 Emails › 11 ZATCA ISV shortlist update.eml
- 01 Emails › 14 UAT dates clash with Qatar year-end close.eml
- 01 Emails › 15 SteerCo 28 October what I need.eml
- 01 Emails › 16 CR-008 shipment tracking portal urgent for us.eml

## What good looks like (demo run)
- Budget variance AED 200k explained, with forecast to complete
- CR-008 (45 days) likely recommended to defer post go-live; CR-009 shows saving vs pricing-accuracy risk; CR-007 assessed against ZVQA UAT clash
- Open actions: CargoWise letter, ZATCA shortlist, ZVQA UAT plan, mobile devices

## Variants
- **Quick version:** "Assess the change requests in [CR Folder] for [Project Name]: impact on scope, effort, cost and go-live, with a recommendation."
- **Scheduled version:** not applicable – one-off deliverable.
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › PM 02.

---
Last reviewed: October 2026 · Owner: Lorette Roos
