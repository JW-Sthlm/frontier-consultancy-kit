# AI-First Beyond Delivery — M365 Copilot for Secondary Processes

The Frontier Consultancy tracks focus on the primary process: the AI-first delivery of services to customers. But an AI-first partner is AI-first everywhere. On the project side, **project management**, **consulting**, and **development** also contain repetitive, language-heavy work where Copilot helps. The same applies across internal functions such as **Finance**, **HR**, **purchasing**, **facilities**, and **sales**. Adopting here requires less technical setup than delivery-side AI, and the habit-building is the same.

---

## Why this matters

Partners who adopt M365 Copilot internally get three things:

1. **Direct productivity gains** — hours recovered per person per week across all departments.
2. **Internal credibility** — you cannot convincingly deliver AI transformation for your customers if your own finance team still writes emails from scratch.
3. **A replication pattern** — the adoption motion you run internally is the same motion you will help your customers run. You learn it by doing it first.

---

## Adoption approach

Adopt with a 30-day **Control → Use → Value** motion:

| Phase | Days | What to do |
|---|---|---|
| **Control** | **1–10** | Inventory entitlements; redeem and assign licences; fund the gap; name owners; configure access; set guardrails (spending policies, alerts, oversharing checks). |
| **Use** | **11–15** | Pick tasks and baseline outcomes; launch the pilot cohort; run first tasks with champions and human approval gates for external/system actions. |
| **Value** | **16–30** | Run and measure cost/time/quality; save winning prompts as reusable skills; schedule recurring work; forecast consumption; make Day-30 decision. |

**Day-30 decision:** scale · adjust · stop

---

## Partner Zero execution play book

The Partner Zero Execution Playbook is a practical 30-day, internal-first method to adopt Copilot Cowork and Copilot Code, establish governance and cost control, measure real productivity and quality outcomes, and decide whether to scale, adjust, or stop based on evidence.

Open it here: [Partner Zero execution play book](./partner-zero-execution-play-book/index.md)

---

## M365 Copilot for Frontier Consultancy

### M365 Copilot

Use Microsoft 365 Copilot as the daily AI layer across the consultancy. Prioritise:

- Chat-first work in Business Chat for synthesis, drafting, and action planning.
- Teams meeting preparation and recap workflows with transcript-based follow-up.
- Word/Outlook drafting standards so proposals, summaries, and customer communications start from Copilot by default.
- Lightweight agent usage where recurring tasks justify automation.

#### Cowork, Code and Skills across the consulting lifecycle (Slide 3)

**Copilot Cowork**  
Does the work: researches across emails, meetings, files, and the web; creates finished Word, Excel, and PowerPoint deliverables; and runs scheduled tasks with approval.  
**In consulting:** RFP responses, blueprints, status and RAID, SteerCo packs, test packs, adoption plans.

**Copilot Code**  
Builds the solution: writes, explains, tests, and reviews code and simple apps in the repo for the team to run in their dev environment.  
**In consulting:** Power Fx, C# plug-ins, X++ stubs, deployment and data-load scripts, Cutover Command app.

**Skills**  
Packages practice IP: a proven prompt, templates, and checks saved as a reusable skill anyone in the practice can run consistently.  
**In consulting:** RFP Accelerator, Weekly Status, SteerCo Pack, Cutover Command, Copilot Readiness.

**Lifecycle coverage:** Pursue → Respond → Design → Build & POC → Test → Deploy → Hypercare.

#### Where Cowork, Code and Skills come in (Slide 4)

| Scenario | Lead persona | Cowork | Code | Skill | Skill name |
|---|---|---|---|---|---|
| [RFP 01 - Traceable RFP response](M365%20Copilot%20Scenarios/RFP01/rfp-exercise.md) | Bid Manager | Yes (plug-in) |  | Yes | rfp-processing |
| RFP 02 — Orals and demo-script preparation | Pre-sales Solution Architect | Yes |  | Yes | Orals Prep |
| SA 01 — Discovery-to-solution blueprint | Solution Architect | Yes |  | Yes | Solution Blueprint |
| SA 02 — Fit-gap analysis and effort estimate | Solution Architect | Yes |  | Yes | Fit-Gap Estimator |
| PM 01 — Weekly status and RAID log with Cowork | Project Manager | Yes |  | Yes | Weekly Status |
| PM 02 — Steering committee pack and change control | Project Manager | Yes |  | Yes | SteerCo Pack |
| PM 03 — Project and meeting management flow with scheduled Cowork tasks | Project Manager | Yes |  | Yes | Meeting Rhythm |
| M365 01 — M365 Copilot readiness and adoption plan | Change & Adoption Lead | Yes |  | Yes | Copilot Readiness |

RFP 01 uses the [Copilot Cowork RFP exercise](M365%20Copilot%20Scenarios/RFP01/rfp-exercise.md) and [Cowork setup guide](M365%20Copilot%20Scenarios/RFP01/rfp-setup-overview.md). Its FC RFP Processing plugin and source are in `RFP01/cowork-plugin/`, and the four-file Zava D365 Commerce source pack is in `RFP01/test-pack/`. Cowork keeps the wiki and review state in a shared OneDrive or SharePoint folder. The original Scout exercise and skill remain separate in the Dynamics lane.

#### Who uses each scenario (Slide 5)


| Persona | Scenarios |
|---|---|
| Bid Manager | RFP 01 (lead); RFP 02 (support); SA 02 (support) |
| Pre-sales Solution Architect | RFP 02 (lead); RFP 01 (support) |
| Solution Architect | SA 01; SA 02 |
| Project Manager | PM 01; PM 02; PM 03 |
| Functional Consultant | RFP 02 (support); SA 02 (support) |
| Technical Consultant | SA 01 |
| Change & Adoption Lead | M365 01 |

#### Top scenarios across 5 practice areas (Slide 6)

| Practice area | Top scenarios |
|---|---|
| Pre-sales & RFP | RFP response accelerator; Compliance matrix and fit rating; Orals and demo scripts; Bid/no-bid summary; Account and stakeholder research; Proposal and SOW drafting; Reference and case-study matching; Pricing assumptions pack |
| Solution Architecture | Discovery-to-blueprint; Fit-gap and estimation; Integration inventory; Environment and ALM strategy; Data migration strategy; Security role design; Licensing considerations; Design authority decisions log |
| Project Management | Weekly status and RAID log; Scheduled project and meeting flow; Steering committee packs; Change-request impact; Resource and timesheet reconciliation; Meeting minutes and actions; Hypercare daily summary; Lessons-learned capture; Project closure report |
| Build & POC — CE | D365 Sales POC; Customer Service routing POC; Build the CS POC in Dynamics 365; Customer Insights – Journeys POC; Power Fx and plug-in code; Sample data generation; Test scripts and UAT packs; Training guides and videos; Knowledge-article drafting |
| Build — F&O and M365 | F&O configuration workbooks; Data-entity mapping; X++ extension stubs; R2R, P2P and O2C test packs; Cutover Command app (Code); M365 Copilot readiness; Governance and oversharing actions; Persona adoption plans |

### M365 Office Apps

#### Finance

**Standard M365 Copilot experiences:**

| Scenario | App | What to prompt |
|---|---|---|
| Summarise invoice or contract | Outlook, Word | "Summarise this document and list all amounts, deadlines, and parties" |
| Write financial narrative for a board deck | Word | "Write a 3-paragraph summary of Q2 results based on this data" |
| Analyse cost data | Excel | "What are the top 5 cost lines this quarter? Show as a table and flag any variances above 10%" |
| Prepare for a finance meeting | Teams | "Summarise the last three finance meetings and list open actions" |
| Draft a vendor response | Outlook | "Draft a response to this vendor email asking for a payment extension of 30 days" |

**Role-specific:** [Microsoft 365 Finance Agent](https://learn.microsoft.com/en-us/copilot/finance/) — invoice reconciliation, financial analysis, and variance analysis in Excel. Available as an add-on for users who already have a Microsoft 365 Copilot licence.

**Quick win to start:** Copilot in Excel for monthly cost analysis. Ask it to flag variances above a threshold. Takes 10 minutes of setup and zero process change.

---

#### HR

**Standard M365 Copilot experiences:**

| Scenario | App | What to prompt |
|---|---|---|
| Write or rewrite a job description | Word | "Write a job description for a senior Dynamics 365 consultant at [company name]" |
| Summarise interview or performance review notes | Teams, Word | "Summarise this meeting transcript and extract the key feedback points" |
| Draft onboarding documentation | Word | "Create a 1-week onboarding plan for a new ERP consultant joining our team" |
| Answer HR policy questions | Business Chat | "What is our parental leave policy?" (requires SharePoint knowledge source) |
| Draft an offer letter | Word | "Draft an offer letter for [role] at [salary] starting [date]" |

**Agents:** The [Benefits agent template](https://learn.microsoft.com/en-us/microsoft-copilot-studio/template-m365-ext-benefits) (Copilot Studio) answers employee questions about company-provided benefits. Requires SAP SuccessFactors as a data source. For a broader HR Q&A agent without that dependency, build a custom agent in Copilot Studio against a SharePoint knowledge base containing your HR policies.

**Quick win to start:** Copilot in Teams for meeting summaries after interviews and performance conversations. Zero setup if Copilot is licensed and transcription is enabled.

---

#### Purchasing and Facilities

There is no dedicated role-specific Copilot for procurement yet. Standard M365 Copilot covers the main workflow:

| Scenario | App | What to prompt |
|---|---|---|
| Summarise and compare vendor quotes | Word, Excel | "Compare these three quotes and recommend the best value option based on total cost and delivery lead time" |
| Draft a purchase request or approval email | Outlook | "Write a purchase request for [item] including the business justification and estimated cost" |
| Review a supplier contract | Word | "Summarise this contract. Flag any auto-renewal clauses, termination conditions, and payment terms" |
| Track facility issues and actions | Teams, OneNote | "Summarise the open facility issues from the last three meeting notes" |
| Write an RFP or supplier brief | Word | "Write a request-for-proposal for office cleaning services at our [city] location" |

**Custom agent option:** A Copilot Studio agent connected to your procurement mailbox can triage incoming supplier emails and route them by category. Medium effort — worth it if you process more than 50 supplier emails per week.

**Quick win to start:** Copilot in Word for contract review. Paste in a supplier contract, ask it to flag risks and key terms. No process change required.

---

#### Sales

Sales is the department with the most mature role-specific Copilot tooling.

**[Microsoft 365 Sales Agent](https://learn.microsoft.com/en-us/microsoft-sales-copilot/)** (add-on to Copilot licence, connects to Dynamics 365 Sales or Salesforce):

| Scenario | What it does |
|---|---|
| Meeting prep | Pulls opportunity data from CRM, surfaces last interactions, suggests talking points |
| Meeting follow-up | Auto-drafts follow-up email with action items from the Teams meeting transcript |
| CRM updates | Extracts commitments and updates Dynamics 365 Sales fields from meeting notes |
| Opportunity summary | One-click summary of any open opportunity: stage, contacts, recent activity |
| Pipeline review | "Show me all open deals at proposal stage" answered from Business Chat |

**Standard M365 Copilot (no Sales Agent add-on):**

| Scenario | App | What to prompt |
|---|---|---|
| Draft a proposal or statement of work | Word | "Draft a proposal for [service] addressing [client problem]" |
| Prepare for a customer meeting | Teams, Outlook | "Summarise the last 5 emails with [client] and list any open questions" |
| Write a follow-up email | Outlook | "Write a follow-up to today's discovery call summarising what we discussed and the agreed next steps" |
| Research a prospect | Business Chat | "Summarise [company name]'s industry, recent news, and likely Dynamics 365 needs" |

**Custom agents:** Build a follow-up agent in Copilot Studio that sends personalised follow-up messages after a defined period of no activity on an opportunity. See [Copilot Studio agent templates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/template-fundamentals) for a starting point.

**Quick win to start:** Copilot in Outlook for meeting follow-up emails. After every sales call, paste the notes and prompt: "Write a follow-up email summarising what we discussed and the agreed next steps."
