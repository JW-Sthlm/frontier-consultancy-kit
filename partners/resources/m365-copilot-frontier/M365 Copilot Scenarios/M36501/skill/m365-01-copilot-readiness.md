# M365 01 · M365 Copilot readiness and adoption plan
**Persona:** Change & Adoption Lead (lead) · Modern Work Consultant  
**Uses:** Cowork · Skill (Copilot Readiness)  
**Practice area:** Build & POC › M365 Copilot · **Phase:** Post-sales · **Products:** M365 Copilot · **Step tags:** Create · Research · Schedule

## Goal
Help the customer move from M365 Copilot pilot to scale with a readiness assessment, governance plan and persona-based adoption programme.

## Output
A readiness assessment, an oversharing and governance action list, persona prompt libraries and an adoption plan with success measures.

## Why Copilot
Readiness signals sit in tenant reports, SharePoint permissions reviews, licence data, survey results and workshop notes. Cowork combines: assessment against a checklist, persona content creation and a scheduled adoption cadence.

**Data sources:** M365 Data, Tenant and usage reports, SharePoint

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Customer Name]` | Customer or prospect name |
| `[Readiness Folder]` | Folder with tenant, licensing and usage assessment data |
| `[3 personas]` | Personas to build prompt libraries for |
| `[Copilot Readiness]` | Name to save the run as a reusable personal skill (default: Copilot Readiness) |

## Prompt template
```text
For [Customer Name], use the assessment data in [Readiness Folder] and our workshop notes.
- Score readiness across licensing, identity, data governance, SharePoint oversharing, Teams and change management.
- List governance actions (sensitivity labels, site access reviews, restricted content discovery) with owners.
- Create prompt libraries for [3 personas] with Cowork scenarios.
- Build a 90-day adoption plan with champions, training and success measures, and a weekly progress email I can review.
- Visuals: include a readiness heatmap, a governance roadmap and an adoption curve chart – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Copilot Readiness] so the practice can reuse it.
```

## Visuals
- Readiness heatmap
- Governance roadmap
- Adoption curve chart

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Create]** Assess – readiness across six areas
2. **[Create]** Govern – data and access actions
3. **[Research]** Enable – persona prompt libraries
4. **[Create]** Plan – 90-day adoption programme
5. **[Schedule]** Track – weekly progress update

**Reusable skill:** Copilot Readiness – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Readiness assessment effort | 40–50% faster |
| Governance actions identified | Before broad rollout |
| Persona prompt libraries | Days, not weeks |
| Active Copilot usage at 90 days | Higher (track) |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › M365 01). Summary: Zava M365 Copilot readiness data (xlsx); Readiness workshop notes 8 Oct; Emails 20–21.

- Folder root › Zava M365 Copilot Readiness Data.xlsx
- Folder root › Zava M365 Copilot Readiness Workshop Notes 8 Oct 2026.docx
- 01 Emails › 20 Copilot pilot feedback and a worry.eml
- 01 Emails › 21 Copilot rollout I need a plan for the 480 remaining licences.eml

## What good looks like (demo run)
- 37 overshared sites prioritised, HR-Payroll first
- Usage and survey numbers quoted from the workbook
- Persona libraries reflect pilot feedback (CS agents: 'doesn't know our processes')

## Variants
- **Quick version:** "Summarise the oversharing and governance risks for M365 Copilot at [Customer Name] from [Readiness Folder]."
- **Scheduled version:** Scheduled Cowork task: every Monday at 08:00, draft the weekly adoption progress email for my review.
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › M365 01.

---
Last reviewed: October 2026 · Owner: Lorette Roos
