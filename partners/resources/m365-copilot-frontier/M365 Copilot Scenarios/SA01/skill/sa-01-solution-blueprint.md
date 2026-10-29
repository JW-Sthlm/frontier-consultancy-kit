# SA 01 · Discovery-to-solution blueprint
**Persona:** Solution Architect (lead) · Technical / Integration Architect  
**Uses:** Cowork · Skill (Solution Blueprint)  
**Practice area:** Solution Architecture · **Phase:** Pre-sales · **Products:** D365 (all), M365 Copilot · **Step tags:** Create · Research · Schedule

## Goal
Convert discovery workshops into a solution architecture document for D365 and M365, with integrations, data, security and licensing considerations.

## Output
A solution design document in Word, an architecture diagram slide, an integration inventory and an open-decisions log.

## Why Copilot
Architecture inputs are spread across workshop transcripts, whiteboard photos, process maps, the customer's IT landscape and Microsoft Learn guidance. Cowork combines: transcript synthesis, reference-architecture alignment and multi-file output.

**Data sources:** M365 Data, Meeting transcripts, Microsoft Learn

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Customer Name]` | Customer or prospect name |
| `[Date range]` | Dates of the discovery workshops |
| `[Discovery Folder]` | Folder with discovery notes, process maps and IT landscape documents |
| `[Solution Blueprint]` | Name to save the run as a reusable personal skill (default: Solution Blueprint) |

## Prompt template
```text
Use the transcripts and notes from the [Customer Name] discovery workshops held [Date range] and the documents in [Discovery Folder].
- Write a solution blueprint covering: business capabilities, D365 apps and modules in scope, Power Platform extensions, M365 and Teams collaboration, integrations, data migration, security roles and environment strategy.
- Build an integration inventory in Excel: source, target, direction, frequency, pattern (Dataverse / Logic Apps / Azure Integration Services) and complexity.
- Create an architecture slide showing the target landscape as labelled boxes and arrows.
- List open decisions and assumptions, each with an owner and due date.
- Visuals: include a target architecture diagram, an integration flow diagram, a data migration flow and an environment / ALM diagram – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Solution Blueprint] so the practice can reuse it.
```

## Visuals
- Target architecture diagram
- Integration flow diagram
- Data migration flow
- Environment / ALM diagram

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Create]** Synthesise – workshop transcripts and notes
2. **[Research]** Map – capabilities to D365, Power Platform and M365
3. **[Create]** Design – integrations, data and security
4. **[Create]** Produce – blueprint, inventory and architecture slide
5. **[Schedule]** Track – open decisions and assumptions

**Reusable skill:** Solution Blueprint – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Discovery-to-blueprint cycle | 30–40% shorter |
| Architect hours on documentation | −40–50% |
| Integration inventory completeness | Fewer late surprises |
| Design sign-off | 1–2 weeks earlier |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › SA 01). Summary: Zava discovery workshops 1–3 (transcripts); Zava discovery notes; Zava current IT landscape; Email 09.

- Folder root › Zava Discovery Notes - Sales and Service Workshops Oct 2026.docx
- Folder root › Zava Current IT Landscape.docx
- 02 Meeting transcripts › Zava Discovery Workshop 1 - Sales - 2026-10-14.vtt
- 02 Meeting transcripts › Zava Discovery Workshop 2 - Customer Service - 2026-10-15.vtt
- 02 Meeting transcripts › Zava Discovery Workshop 3 - IT and Integration - 2026-10-15.vtt
- 01 Emails › 09 Integration and infrastructure details for your design.eml

## What good looks like (demo run)
- UAE data residency and SSO captured as constraints
- Inventory includes rental app (undocumented API), logistics feed, the UAE and KSA banks, WhatsApp, data warehouse
- Open decisions include ZATCA switch timing and history depth (2 vs 5 years)
- Design favours low code (2-person IT team)

## Variants
- **Quick version:** "Summarise the [Customer Name] discovery workshop transcripts from [Date range] into capabilities, integrations and open decisions."
- **Scheduled version:** Scheduled Cowork task: every Monday at 09:00, chase owners of open decisions and assumptions past their due date and send me a digest (draft-only to the customer).
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › SA 01.

---
Last reviewed: October 2026 · Owner: Lorette Roos
