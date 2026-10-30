# RFP 02 · Orals and demo-script preparation
**Persona:** Pre-sales Solution Architect (lead) · Functional Consultant · Bid Manager  
**Uses:** Cowork · Skill (Orals Prep)  
**Practice area:** Pre-sales › RFP · **Phase:** Pre-sales · **Products:** D365 Sales, Customer Service · **Step tags:** Research · Create

## Goal
Prepare the shortlist presentation and a scripted D365 demo that maps directly to the customer's top scored requirements.

## Output
A presentation deck, a scene-by-scene demo script, a demo-data checklist and a Q&A rehearsal sheet.

## Why Copilot
Evaluation criteria sit in the RFP, customer pain points in discovery notes and emails, and demo assets with the pre-sales team. Cowork combines: scoring-criteria analysis, storyboarding and deck creation in one run.

**Data sources:** M365 Data, Meeting transcripts, Dynamics 365 demo tenant

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Customer Name]` | Customer or prospect name |
| `[Date]` | Date of the orals / meeting |
| `[RFP Folder]` | OneDrive/SharePoint folder holding the tender pack (RFP, appendices, templates, evaluation criteria) |
| `[4 weeks]` | Look-back window for discovery notes and emails |
| `[D365 Sales + Customer Service]` | D365 apps the demo script covers |
| `[Pursuit Team]` | People invited to the rehearsal |
| `[Orals Prep]` | Name to save the run as a reusable personal skill (default: Orals Prep) |

## Prompt template
```text
We are shortlisted for [Customer Name]. Orals are on [Date].
- Read the evaluation criteria in [RFP Folder] and our discovery notes and emails from the last [4 weeks].
- Build a 12-slide orals deck: their challenges, our approach, D365 solution overview, delivery plan, team and references.
- Write a demo script for [D365 Sales + Customer Service] scene by scene: persona, business story, clicks to show, and the requirement IDs each scene proves.
- List the demo data we need to load and the 15 toughest questions we may get, with suggested answers.
- Book a 60-minute rehearsal with [Pursuit Team] before the orals date.
- Visuals: include an architecture overview slide, a demo storyboard flow (scene by scene) and a delivery timeline – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Orals Prep] so the practice can reuse it.
```

## Visuals
- Architecture overview slide
- Demo storyboard flow (scene by scene)
- Delivery timeline

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Research]** Analyse – evaluation criteria and weighting
2. **[Create]** Recall – discovery notes, emails and meeting transcripts
3. **[Create]** Storyboard – demo scenes mapped to requirements
4. **[Create]** Build – orals deck and demo script
5. **[Create]** Schedule – rehearsal with the pursuit team

**Reusable skill:** Orals Prep – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Orals deck and demo-script prep | 30–50% less effort |
| Demo scenes mapped to scored criteria | Up to 100% traceability |
| Rehearsal readiness | 1–2 extra rehearsal cycles |
| Shortlist-to-win conversion | Improved (track) |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › RFP 02). Summary: Zava RFP ZAV-RFP-2026-014; Zava discovery notes; Zava discovery workshops 1–3 (transcripts); Emails 05–06.

- Folder root › Zava RFP ZAV-RFP-2026-014 - Customer Engagement and Finance Transformation.docx (section 8 demo scenarios, evaluation criteria)
- Folder root › Zava Discovery Notes - Sales and Service Workshops Oct 2026.docx
- 02 Meeting transcripts › Zava Discovery Workshop 1 - Sales - 2026-10-14.vtt
- 02 Meeting transcripts › Zava Discovery Workshop 2 - Customer Service - 2026-10-15.vtt
- 02 Meeting transcripts › Zava Discovery Workshop 3 - IT and Integration - 2026-10-15.vtt
- 01 Emails › 05 ZAV-RFP-2026-014 Indicative format for orals and demonstrations.eml
- 01 Emails › 06 Follow-up from our sales workshop a few things we forgot.eml

## What good looks like (demo run)
- Demo script includes Daniel's 'site survey to approved quote in one day' scene and Arabic quote
- Each scene lists requirement IDs
- Questions cover consolidation, ZATCA, supportability with a 2-person IT team

## Variants
- **Quick version:** "From the evaluation criteria in [RFP Folder], suggest five demo scenes for [Customer Name] and the requirement each proves."
- **Scheduled version:** not applicable – one-off deliverable.
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › RFP 02.

---
Last reviewed: October 2026 · Owner: Lorette Roos
