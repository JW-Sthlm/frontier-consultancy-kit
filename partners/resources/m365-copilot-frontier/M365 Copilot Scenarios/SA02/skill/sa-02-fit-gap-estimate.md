# SA 02 · Fit-gap analysis and effort estimate
**Persona:** Solution Architect (lead) · Functional Consultant · Bid Manager  
**Uses:** Cowork · Skill (Fit-Gap Estimator)  
**Practice area:** Solution Architecture · **Phase:** Pre-sales · **Products:** D365 (all) · **Step tags:** Create · Research

## Goal
Produce a defensible fit-gap and a bottom-up estimate that pre-sales, delivery and commercial teams all trust.

## Output
A fit-gap workbook with effort by work package, a gap-solution options summary and an estimate assumptions document.

## Why Copilot
Requirements, standard D365 capabilities, estimation models and past project actuals are held in different places. Cowork combines: requirement classification, estimation-model application and output in Excel and Word.

**Data sources:** M365 Data, Estimation templates, Dynamics 365

## Inputs / placeholders
| Placeholder | Description |
|---|---|
| `[Requirements File]` | Excel/Word requirements list |
| `[Customer Name]` | Customer or prospect name |
| `[Estimation Template]` | Practice estimation model workbook |
| `[Similar Past Project]` | Past project whose actuals are used as a benchmark |
| `[20%]` | Variance threshold for flagging an estimate |
| `[Fit-Gap Estimator]` | Name to save the run as a reusable personal skill (default: Fit-Gap Estimator) |

## Prompt template
```text
Take the requirements list in [Requirements File] for [Customer Name].
- Classify each requirement as Standard, Configuration, Extension (Power Platform / plug-in / X++), Integration, Report or Gap, with a short rationale.
- Apply our estimation model in [Estimation Template] and calculate effort by work package and role.
- For every Gap, propose two options (ISV, extension or process change) with pros and cons.
- Compare with actuals from [Similar Past Project] and flag any estimate more than [20%] out.
- Write the assumptions and exclusions for the statement of work.
- Visuals: include a fit-gap chart by module and an effort chart by work package and role – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Fit-Gap Estimator] so the practice can reuse it.
```

## Visuals
- Fit-gap chart by module
- Effort chart by work package and role

Diagrams as editable shapes and connectors in PowerPoint (or inserted into Word) – never generated pictures; charts built from the actual data in Excel or PowerPoint. Give every visual a title and a short caption; where data is missing, show a clearly labelled placeholder rather than an invented figure.

## Workflow
1. **[Create]** Classify – requirements against standard D365
2. **[Create]** Estimate – effort using the practice model
3. **[Create]** Benchmark – against past project actuals
4. **[Research]** Options – for every gap
5. **[Create]** Document – assumptions and exclusions

**Reusable skill:** Fit-Gap Estimator – after a successful run, offer to save it as a personal skill with this name (only on explicit approval).

## Business value (Estimates – validate per engagement)
| Measure | Estimate |
|---|---|
| Fit-gap classification effort | 50–70% faster |
| Estimate variance at close | Reduced by 10–20 pts |
| Gap options prepared | Every gap, not top 10 |
| SOW assumptions quality | Fewer change requests |

> Estimates – validate per engagement.

## Demo data (test pack – fictitious Zava data)
Folder: **Frontier Test Pack** (see `test-pack.md` › SA 02). Summary: Appendix A requirements (xlsx); Frontier estimation model (xlsx); Zava Industrial Distribution project actuals (xlsx); Email 04.

- Folder root › Zava RFP - Appendix A - Functional Requirements.xlsx
- Folder root › Frontier Estimation Model - D365.xlsx
- Folder root › Frontier Project Actuals - Zava Industrial Distribution.xlsx
- 01 Emails › 04 RE Zava RFP bidno-bid needed by Wednesday.eml

## What good looks like (demo run)
- Effort uses the model's rates and overheads
- Data migration, integrations and reports are uplifted or flagged because Zava Industrial Distribution overran (+38%, +27%, +22%)
- Each gap has two options

## Variants
- **Quick version:** "Classify these requirements from [Requirements File] as Standard, Configuration, Extension, Integration, Report or Gap with a one-line rationale."
- **Scheduled version:** not applicable – one-off deliverable.
- **Demo mode:** fictitious Zava data – files in *Demo data* above; filled prompt and checks in `test-pack.md` › SA 02.

---
Last reviewed: October 2026 · Owner: Lorette Roos
