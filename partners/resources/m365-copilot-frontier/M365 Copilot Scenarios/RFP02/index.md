# RFP 02 — Orals and demo-script preparation

| Section | Details |
|---|---|
| Persona | Pre-sales Solution Architect (lead) · Functional Consultant · Bid Manager |
| Category | Pre-sales › RFP · **Phase:** Pre-sales · **Products:** D365 Sales, Customer Service · **Step tags:** Research · Create |
| Mode | Cowork + Skill (Orals Prep) |
| Goal | Prepare the shortlist presentation and a scripted D365 demo that maps directly to the customer's top scored requirements. |
| Output | A presentation deck, a scene-by-scene demo script, a demo-data checklist and a Q&A rehearsal sheet. |
| Workflow | Research -> Analyse – evaluation criteria and weighting<br>Create -> Recall – discovery notes, emails and meeting transcripts<br>Create -> Storyboard – demo scenes mapped to requirements<br>Create -> Build – orals deck and demo script<br>Create -> Schedule – rehearsal with the pursuit team |
| Data sources | M365 Data, Meeting transcripts, Dynamics 365 demo tenant |
| Why Copilot | Evaluation criteria sit in the RFP, customer pain points in discovery notes and emails, and demo assets with the pre-sales team. Cowork combines: scoring-criteria analysis, storyboarding and deck creation in one run. |
| Business value | Orals deck and demo-script prep: 30–50% less effort<br>Demo scenes mapped to scored criteria: Up to 100% traceability<br>Rehearsal readiness: 1–2 extra rehearsal cycles<br>Shortlist-to-win conversion: Improved (track) |

## Cowork Prompt (Create your own skill)

Use this prompt in **Copilot Cowork** after you:
1. Open Copilot Cowork ([Open Copilot Cowork](https://m365.cloud.microsoft/chat/)) and ensure you select **Cowork**.
2. Replace every value in square brackets with your own values.
3. Run the prompt and save it as a skill named 'Orals Prep'.

~~~text
We are shortlisted for [Customer Name]. Orals are on [Date].
- Read the evaluation criteria in [RFP Folder] and our discovery notes and emails from the last [4 weeks].
- Build a 12-slide orals deck: their challenges, our approach, D365 solution overview, delivery plan, team and references.
- Write a demo script for [D365 Sales + Customer Service] scene by scene: persona, business story, clicks to show, and the requirement IDs each scene proves.
- List the demo data we need to load and the 15 toughest questions we may get, with suggested answers.
- Book a 60-minute rehearsal with [Pursuit Team] before the orals date.
- Visuals: include an architecture overview slide, a demo storyboard flow (scene by scene) and a delivery timeline – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Orals Prep] so the practice can reuse it.
~~~

## Practice this scenario

You have two options:
1. **Option 1: Cowork Prompt (run directly from repo)**  
2. **Option 2: Cowork Prompt (download skill + download test pack)**

### Option 1: Cowork Prompt (run directly from repo)

Open Copilot Cowork ([Open Copilot Cowork](https://m365.cloud.microsoft/chat/)) and ensure you select **Cowork**, then run directly from repo paths with no downloads.

**Repo locations:**

- Test pack folder: <https://github.com/JW-Sthlm/frontier-consultancy-kit/tree/main/partners/resources/m365-copilot-frontier/M365%20Copilot%20Scenarios/RFP02/test-pack>
- Skill source: <https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/partners/resources/m365-copilot-frontier/M365%20Copilot%20Scenarios/RFP02/skill/rfp-02-orals-demo-script.md>

~~~text
First download and add this skill, then use the skill:
https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/partners/resources/m365-copilot-frontier/M365%20Copilot%20Scenarios/RFP02/skill/rfp-02-orals-demo-script.md

We are shortlisted for [Customer Name]. Orals are on [Date].
- Read the evaluation criteria in [RFP Folder] and our discovery notes and emails from the last [4 weeks].
- Build a 12-slide orals deck: their challenges, our approach, D365 solution overview, delivery plan, team and references.
- Write a demo script for [D365 Sales + Customer Service] scene by scene: persona, business story, clicks to show, and the requirement IDs each scene proves.
- List the demo data we need to load and the 15 toughest questions we may get, with suggested answers.
- Book a 60-minute rehearsal with [Pursuit Team] before the orals date.
- Visuals: include an architecture overview slide, a demo storyboard flow (scene by scene) and a delivery timeline – diagrams as editable shapes in Word or PowerPoint, charts from the data.
Save this as a skill named [Orals Prep] so the practice can reuse it.

Use skill named Orals Prep.
~~~

### Option 2: Cowork Prompt (download skill + download test pack)

Open Copilot Cowork, download the reusable skill and place it in your **Cowork Skill** folder ([Microsoft Learn: cowork-customize](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize)), download/save the full test pack locally, then replace bracketed values before running.
Run the prompt under **Cowork Prompt (Create your own skill)**, but do not create a new skill — use the existing skill 'Orals Prep'.

**Download locations:**

- Test pack (ZIP): <https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/partners/resources/m365-copilot-frontier/M365%20Copilot%20Scenarios/RFP02/frontier-test-pack-rfp02.zip>
- Reusable skill (ZIP): <https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/partners/resources/m365-copilot-frontier/M365%20Copilot%20Scenarios/RFP02/skill/rfp-02-orals-demo-script-skill.zip>
- Skill source: <https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/partners/resources/m365-copilot-frontier/M365%20Copilot%20Scenarios/RFP02/skill/rfp-02-orals-demo-script.md>

**Test pack contents:**

- [00 Test Guide - Copilot for Frontier Consultancy.html](./test-pack/00%20Test%20Guide%20-%20Copilot%20for%20Frontier%20Consultancy.html)
- [00 Test Universe - companies people and dates.md](./test-pack/00%20Test%20Universe%20-%20companies%20people%20and%20dates.md)
- [01 Emails/01 ZAV-RFP-2026-014 Invitation to Tender Customer Engagement Finance Tr.eml](./test-pack/01%20Emails/01%20ZAV-RFP-2026-014%20Invitation%20to%20Tender%20Customer%20Engagement%20Finance%20Tr.eml)
- [01 Emails/02 Zava RFP bidno-bid needed by Wednesday.eml](./test-pack/01%20Emails/02%20Zava%20RFP%20bidno-bid%20needed%20by%20Wednesday.eml)
- [01 Emails/03 ZAV-RFP-2026-014 Addendum 1.eml](./test-pack/01%20Emails/03%20ZAV-RFP-2026-014%20Addendum%201.eml)
- [01 Emails/04 RE Zava RFP bidno-bid needed by Wednesday.eml](./test-pack/01%20Emails/04%20RE%20Zava%20RFP%20bidno-bid%20needed%20by%20Wednesday.eml)
- [01 Emails/05 ZAV-RFP-2026-014 Indicative format for orals and demonstrations.eml](./test-pack/01%20Emails/05%20ZAV-RFP-2026-014%20Indicative%20format%20for%20orals%20and%20demonstrations.eml)
- [01 Emails/06 Follow-up from our sales workshop a few things we forgot.eml](./test-pack/01%20Emails/06%20Follow-up%20from%20our%20sales%20workshop%20a%20few%20things%20we%20forgot.eml)
- [01 Emails/07 Ticket export and support documents for the POC.eml](./test-pack/01%20Emails/07%20Ticket%20export%20and%20support%20documents%20for%20the%20POC.eml)
- [01 Emails/08 Big 5 Global 2026 can we use this for the marketing POC.eml](./test-pack/01%20Emails/08%20Big%205%20Global%202026%20can%20we%20use%20this%20for%20the%20marketing%20POC.eml)
- [01 Emails/09 Integration and infrastructure details for your design.eml](./test-pack/01%20Emails/09%20Integration%20and%20infrastructure%20details%20for%20your%20design.eml)
- [01 Emails/10 CargoWise API spec still not received.eml](./test-pack/01%20Emails/10%20CargoWise%20API%20spec%20still%20not%20received.eml)
- [01 Emails/11 ZATCA ISV shortlist update.eml](./test-pack/01%20Emails/11%20ZATCA%20ISV%20shortlist%20update.eml)
- [01 Emails/12 Vendor master data quality first profiling results.eml](./test-pack/01%20Emails/12%20Vendor%20master%20data%20quality%20first%20profiling%20results.eml)
- [01 Emails/13 Warehouse mobile devices decision delayed again.eml](./test-pack/01%20Emails/13%20Warehouse%20mobile%20devices%20decision%20delayed%20again.eml)
- [01 Emails/14 UAT dates clash with Qatar year-end close.eml](./test-pack/01%20Emails/14%20UAT%20dates%20clash%20with%20Qatar%20year-end%20close.eml)
- [01 Emails/15 SteerCo 28 October what I need.eml](./test-pack/01%20Emails/15%20SteerCo%2028%20October%20what%20I%20need.eml)
- [01 Emails/16 CR-008 shipment tracking portal urgent for us.eml](./test-pack/01%20Emails/16%20CR-008%20shipment%20tracking%20portal%20urgent%20for%20us.eml)
- [01 Emails/17 Sprint 4 blocked items.eml](./test-pack/01%20Emails/17%20Sprint%204%20blocked%20items.eml)
- [01 Emails/18 Warehousing workstream weekly update.eml](./test-pack/01%20Emails/18%20Warehousing%20workstream%20weekly%20update.eml)
- [01 Emails/19 Cutover plan v03 can we turn this into an app.eml](./test-pack/01%20Emails/19%20Cutover%20plan%20v03%20can%20we%20turn%20this%20into%20an%20app.eml)
- [01 Emails/20 Copilot pilot feedback and a worry.eml](./test-pack/01%20Emails/20%20Copilot%20pilot%20feedback%20and%20a%20worry.eml)
- [01 Emails/21 Copilot rollout I need a plan for the 480 remaining licences.eml](./test-pack/01%20Emails/21%20Copilot%20rollout%20I%20need%20a%20plan%20for%20the%20480%20remaining%20licences.eml)
- [01 Emails/22 ZAV-HZN meeting rhythm and action tracker.eml](./test-pack/01%20Emails/22%20ZAV-HZN%20meeting%20rhythm%20and%20action%20tracker.eml)
- [02 Meeting transcripts/Zava Discovery Workshop 1 - Sales - 2026-10-14.vtt](./test-pack/02%20Meeting%20transcripts/Zava%20Discovery%20Workshop%201%20-%20Sales%20-%202026-10-14.vtt)
- [02 Meeting transcripts/Zava Discovery Workshop 2 - Customer Service - 2026-10-15.vtt](./test-pack/02%20Meeting%20transcripts/Zava%20Discovery%20Workshop%202%20-%20Customer%20Service%20-%202026-10-15.vtt)
- [02 Meeting transcripts/Zava Discovery Workshop 3 - IT and Integration - 2026-10-15.vtt](./test-pack/02%20Meeting%20transcripts/Zava%20Discovery%20Workshop%203%20-%20IT%20and%20Integration%20-%202026-10-15.vtt)
- [02 Meeting transcripts/ZAV-HZN Daily Stand-up - 2026-10-19.vtt](./test-pack/02%20Meeting%20transcripts/ZAV-HZN%20Daily%20Stand-up%20-%202026-10-19.vtt)
- [02 Meeting transcripts/ZAV-HZN Design Authority - 2026-10-13.vtt](./test-pack/02%20Meeting%20transcripts/ZAV-HZN%20Design%20Authority%20-%202026-10-13.vtt)
- [02 Meeting transcripts/ZAV-HZN PMO Weekly Status - 2026-10-15.vtt](./test-pack/02%20Meeting%20transcripts/ZAV-HZN%20PMO%20Weekly%20Status%20-%202026-10-15.vtt)
- [02 Meeting transcripts/ZAV-HZN SteerCo - 2026-09-30.vtt](./test-pack/02%20Meeting%20transcripts/ZAV-HZN%20SteerCo%20-%202026-09-30.vtt)
- [03 Teams channel/ZAV-HZN Project Channel Export - 12 to 19 Oct 2026.md](./test-pack/03%20Teams%20channel/ZAV-HZN%20Project%20Channel%20Export%20-%2012%20to%2019%20Oct%202026.md)
- [04 Data extracts/Zava_Big5_Invite_List.csv](./test-pack/04%20Data%20extracts/Zava_Big5_Invite_List.csv)
- [04 Data extracts/Zava_GP_ChartOfAccounts_ZVAE.csv](./test-pack/04%20Data%20extracts/Zava_GP_ChartOfAccounts_ZVAE.csv)
- [04 Data extracts/Zava_GP_Customers_Extract.csv](./test-pack/04%20Data%20extracts/Zava_GP_Customers_Extract.csv)
- [04 Data extracts/Zava_GP_OpenAP_ZVAE_30Sep2026.csv](./test-pack/04%20Data%20extracts/Zava_GP_OpenAP_ZVAE_30Sep2026.csv)
- [04 Data extracts/Zava_GP_Vendors_Extract.csv](./test-pack/04%20Data%20extracts/Zava_GP_Vendors_Extract.csv)
- [04 Data extracts/Zava_Product_Price_List_Oct2026.csv](./test-pack/04%20Data%20extracts/Zava_Product_Price_List_Oct2026.csv)
- [04 Data extracts/Zava_Salesforce_Accounts_Export.csv](./test-pack/04%20Data%20extracts/Zava_Salesforce_Accounts_Export.csv)
- [04 Data extracts/Zava_Tally_KSA_Vendors_Extract.csv](./test-pack/04%20Data%20extracts/Zava_Tally_KSA_Vendors_Extract.csv)
- [04 Data extracts/Zava_Zendesk_Ticket_Export_Sep2026.csv](./test-pack/04%20Data%20extracts/Zava_Zendesk_Ticket_Export_Sep2026.csv)
- [Frontier Bid Pipeline and Capacity.xlsx](./test-pack/Frontier%20Bid%20Pipeline%20and%20Capacity.xlsx)
- [Frontier Case Study - Zava Hospitality Customer Service.docx](./test-pack/Frontier%20Case%20Study%20-%20Zava%20Hospitality%20Customer%20Service.docx)
- [Frontier Case Study - Zava Industrial Distribution Sales and Finance.docx](./test-pack/Frontier%20Case%20Study%20-%20Zava%20Industrial%20Distribution%20Sales%20and%20Finance.docx)
- [Frontier Delivery - Project Status Report Template.docx](./test-pack/Frontier%20Delivery%20-%20Project%20Status%20Report%20Template.docx)
- [Frontier Estimation Model - D365.xlsx](./test-pack/Frontier%20Estimation%20Model%20-%20D365.xlsx)
- [Frontier Past Bid - Zava Cement Industries D365 Finance Response 2025.docx](./test-pack/Frontier%20Past%20Bid%20-%20Zava%20Cement%20Industries%20D365%20Finance%20Response%202025.docx)
- [Frontier Past Bid - Zava Retail D365 CE Response 2025.docx](./test-pack/Frontier%20Past%20Bid%20-%20Zava%20Retail%20D365%20CE%20Response%202025.docx)
- [Frontier Project Actuals - Zava Industrial Distribution.xlsx](./test-pack/Frontier%20Project%20Actuals%20-%20Zava%20Industrial%20Distribution.xlsx)
- [Zava Big 5 Global 2026 - Campaign Brief.docx](./test-pack/Zava%20Big%205%20Global%202026%20-%20Campaign%20Brief.docx)
- [Zava Brand Guidelines 2026.docx](./test-pack/Zava%20Brand%20Guidelines%202026.docx)
- [Zava Current IT Landscape.docx](./test-pack/Zava%20Current%20IT%20Landscape.docx)
- [Zava Customer Service Policies and FAQ.docx](./test-pack/Zava%20Customer%20Service%20Policies%20and%20FAQ.docx)
- [Zava Discovery Notes - Sales and Service Workshops Oct 2026.docx](./test-pack/Zava%20Discovery%20Notes%20-%20Sales%20and%20Service%20Workshops%20Oct%202026.docx)
- [Zava Horizon - Finance Design Document v1.2.docx](./test-pack/Zava%20Horizon%20-%20Finance%20Design%20Document%20v1.2.docx)
- [Zava Horizon - Test Strategy and Standards.docx](./test-pack/Zava%20Horizon%20-%20Test%20Strategy%20and%20Standards.docx)
- [Zava M365 Copilot Readiness Data.xlsx](./test-pack/Zava%20M365%20Copilot%20Readiness%20Data.xlsx)
- [Zava M365 Copilot Readiness Workshop Notes 8 Oct 2026.docx](./test-pack/Zava%20M365%20Copilot%20Readiness%20Workshop%20Notes%208%20Oct%202026.docx)
- [Zava RFP - Appendix A - Functional Requirements.xlsx](./test-pack/Zava%20RFP%20-%20Appendix%20A%20-%20Functional%20Requirements.xlsx)
- [Zava RFP - Appendix C - Response Template.docx](./test-pack/Zava%20RFP%20-%20Appendix%20C%20-%20Response%20Template.docx)
- [Zava RFP ZAV-RFP-2026-014 - Customer Engagement and Finance Transformation.docx](./test-pack/Zava%20RFP%20ZAV-RFP-2026-014%20-%20Customer%20Engagement%20and%20Finance%20Transformation.docx)
- [ZAV-HZN Action Tracker.xlsx](./test-pack/ZAV-HZN%20Action%20Tracker.xlsx)
- [ZAV-HZN Budget Tracker.xlsx](./test-pack/ZAV-HZN%20Budget%20Tracker.xlsx)
- [ZAV-HZN CR-007 Intercompany Auto-Settlement ZVQA.docx](./test-pack/ZAV-HZN%20CR-007%20Intercompany%20Auto-Settlement%20ZVQA.docx)
- [ZAV-HZN CR-008 Customer Shipment Tracking Portal.docx](./test-pack/ZAV-HZN%20CR-008%20Customer%20Shipment%20Tracking%20Portal.docx)
- [ZAV-HZN CR-009 Replace Rate-Card Engine with Trade Agreements.docx](./test-pack/ZAV-HZN%20CR-009%20Replace%20Rate-Card%20Engine%20with%20Trade%20Agreements.docx)
- [ZAV-HZN Cutover Plan v0.3.xlsx](./test-pack/ZAV-HZN%20Cutover%20Plan%20v0.3.xlsx)
- [ZAV-HZN Project Charter and Baseline Plan.docx](./test-pack/ZAV-HZN%20Project%20Charter%20and%20Baseline%20Plan.docx)
- [ZAV-HZN RAID Log.xlsx](./test-pack/ZAV-HZN%20RAID%20Log.xlsx)
- [ZAV-HZN Sprint Backlog Export.xlsx](./test-pack/ZAV-HZN%20Sprint%20Backlog%20Export.xlsx)
- [ZAV-HZN SteerCo Minutes 30 Sep 2026.docx](./test-pack/ZAV-HZN%20SteerCo%20Minutes%2030%20Sep%202026.docx)
- [zz Old names - please delete/01 TTL-RFP-2026-014 Invitation to Tender Customer Engagement Finance Tr.eml](./test-pack/zz%20Old%20names%20-%20please%20delete/01%20TTL-RFP-2026-014%20Invitation%20to%20Tender%20Customer%20Engagement%20Finance%20Tr.eml)
- [zz Old names - please delete/02 Tailspin RFP bidno-bid needed by Wednesday.eml](./test-pack/zz%20Old%20names%20-%20please%20delete/02%20Tailspin%20RFP%20bidno-bid%20needed%20by%20Wednesday.eml)
- [zz Old names - please delete/03 TTL-RFP-2026-014 Addendum 1.eml](./test-pack/zz%20Old%20names%20-%20please%20delete/03%20TTL-RFP-2026-014%20Addendum%201.eml)
- [zz Old names - please delete/04 RE Tailspin RFP bidno-bid needed by Wednesday.eml](./test-pack/zz%20Old%20names%20-%20please%20delete/04%20RE%20Tailspin%20RFP%20bidno-bid%20needed%20by%20Wednesday.eml)
- [zz Old names - please delete/05 TTL-RFP-2026-014 Indicative format for orals and demonstrations.eml](./test-pack/zz%20Old%20names%20-%20please%20delete/05%20TTL-RFP-2026-014%20Indicative%20format%20for%20orals%20and%20demonstrations.eml)
- [zz Old names - please delete/22 FAB-HZN meeting rhythm and action tracker.eml](./test-pack/zz%20Old%20names%20-%20please%20delete/22%20FAB-HZN%20meeting%20rhythm%20and%20action%20tracker.eml)
- [zz Old names - please delete/FAB-HZN Daily Stand-up - 2026-10-19.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/FAB-HZN%20Daily%20Stand-up%20-%202026-10-19.vtt)
- [zz Old names - please delete/FAB-HZN Design Authority - 2026-10-13.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/FAB-HZN%20Design%20Authority%20-%202026-10-13.vtt)
- [zz Old names - please delete/FAB-HZN PMO Weekly Status - 2026-10-15.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/FAB-HZN%20PMO%20Weekly%20Status%20-%202026-10-15.vtt)
- [zz Old names - please delete/FAB-HZN Project Channel Export - 12 to 19 Oct 2026.md](./test-pack/zz%20Old%20names%20-%20please%20delete/FAB-HZN%20Project%20Channel%20Export%20-%2012%20to%2019%20Oct%202026.md)
- [zz Old names - please delete/FAB-HZN SteerCo - 2026-09-30.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/FAB-HZN%20SteerCo%20-%202026-09-30.vtt)
- [zz Old names - please delete/Fabrikam_GP_ChartOfAccounts_FLAE.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Fabrikam_GP_ChartOfAccounts_FLAE.csv)
- [zz Old names - please delete/Fabrikam_GP_Customers_Extract.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Fabrikam_GP_Customers_Extract.csv)
- [zz Old names - please delete/Fabrikam_GP_OpenAP_FLAE_30Sep2026.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Fabrikam_GP_OpenAP_FLAE_30Sep2026.csv)
- [zz Old names - please delete/Fabrikam_GP_Vendors_Extract.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Fabrikam_GP_Vendors_Extract.csv)
- [zz Old names - please delete/Fabrikam_Tally_KSA_Vendors_Extract.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Fabrikam_Tally_KSA_Vendors_Extract.csv)
- [zz Old names - please delete/pm-03-meeting-flow-scout.md](./test-pack/zz%20Old%20names%20-%20please%20delete/pm-03-meeting-flow-scout.md)
- [zz Old names - please delete/Tailspin Discovery Workshop 1 - Sales - 2026-10-14.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin%20Discovery%20Workshop%201%20-%20Sales%20-%202026-10-14.vtt)
- [zz Old names - please delete/Tailspin Discovery Workshop 2 - Customer Service - 2026-10-15.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin%20Discovery%20Workshop%202%20-%20Customer%20Service%20-%202026-10-15.vtt)
- [zz Old names - please delete/Tailspin Discovery Workshop 3 - IT and Integration - 2026-10-15.vtt](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin%20Discovery%20Workshop%203%20-%20IT%20and%20Integration%20-%202026-10-15.vtt)
- [zz Old names - please delete/Tailspin_Big5_Invite_List.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin_Big5_Invite_List.csv)
- [zz Old names - please delete/Tailspin_Product_Price_List_Oct2026.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin_Product_Price_List_Oct2026.csv)
- [zz Old names - please delete/Tailspin_Salesforce_Accounts_Export.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin_Salesforce_Accounts_Export.csv)
- [zz Old names - please delete/Tailspin_Zendesk_Ticket_Export_Sep2026.csv](./test-pack/zz%20Old%20names%20-%20please%20delete/Tailspin_Zendesk_Ticket_Export_Sep2026.csv)
- [zz Old names - please delete/ZAV-HZN CR-007 Intercompany Auto-Settlement ZVQA 2.docx](./test-pack/zz%20Old%20names%20-%20please%20delete/ZAV-HZN%20CR-007%20Intercompany%20Auto-Settlement%20ZVQA%202.docx)