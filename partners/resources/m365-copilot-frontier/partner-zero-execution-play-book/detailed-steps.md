# Partner Zero detailed steps

This page contains detailed guidance for each playbook step.

## Control (Days 1–10)

### Control step 1: Inventory entitlements

**Objective:** Understand what Copilot capacity and benefits are already available before redeeming or purchasing.

**Key actions:**
- Check Partner Center benefits and cloud services ([AI Cloud Partner Program benefits FAQ](https://learn.microsoft.com/en-us/partner-center/benefits/benefits-faq-new)).
- Verify M365 Copilot seats (available, assigned, expiry).
- Verify Copilot Studio/Copilot Credit capacity and source.
- Review Solutions Partner and specialization benefits.
- Review purchased packages (for example Partner Success Core/Expanded) ([Partner Success Expanded Benefits](https://learn.microsoft.com/en-us/partner-center/membership/partner-success-expanded-benefits)).
- Record source, quantity, redeemed status, assigned quantity, and expiry in an entitlement register.

**Owner / role:** Partner admin.

**Completion criteria:** Entitlement register completed with availability, redemption/assignment status, and expiry.

### Control step 2: Redeem & assign licences

**Objective:** Activate required base licences, redeem Copilot benefits, and assign licences to pilot groups.

**Key actions:**
- Retrieve key(s) from Benefits workspace ([Redeem cloud benefits / fetch key](https://learn.microsoft.com/en-us/partner-center/benefits/cloud-services#how-do-i-redeem-my-cloud-benefits-now)).
- Activate base licence first (M365 E3/E5/Business Premium (no Teams)) ([Activate a subscription for the first time](https://learn.microsoft.com/en-us/partner-center/benefits/cloud-services#activate-a-subscription-for-the-first-time)).
- Redeem Microsoft 365 Copilot on the same tenant ([Activate Copilot benefits](https://learn.microsoft.com/en-us/partner-center/benefits/cloud-services#activate-copilot-benefits)).
- Redeem Copilot Studio and assign relevant roles ([Set up users in Microsoft Copilot Studio after redeeming benefit](https://learn.microsoft.com/en-us/partner-center/benefits/cloud-services#how-do-i-set-up-users-in-microsoft-copilot-studio-after-redeeming-the-copilot-studio-benefit)).
- Assign licences to pilot groups:
  - `PZ-Cowork-Pilot`
  - `PZ-Code-Pilot`
- Select correct EEA/non-EEA key path where applicable and enroll users in Frontier ([Get started with the Microsoft Frontier Program](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/get-started-frontier#enroll-users-in-frontier)).

**Owner / role:** Partner admin + M365 admin.

**Completion criteria:** Required licences redeemed and assigned to defined pilot groups.

### Control step 3: Fund the gap

**Objective:** Confirm whether existing benefits cover pilot demand and set controlled funding for shortfall.

**Key actions:**
- Use available benefit capacity first.
- If needed, configure controlled PAYG pilot with limits ([Usage-based billing overview for Copilot Credits](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)).
- Connect required Azure subscription/billing path ([Usage-based billing for CSP, partner-managed and MACC](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-copilot-credits-csp-partner-macc)).
- Size pilot budget using users, tasks per user, estimated credits per task, and retry buffer.
- Measure real usage before moving to larger prepaid commitments ([Set up usage-based billing for Copilot Credits](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-copilot-credits-setup), [Manage Copilot Credits and billing methods](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)).

**Owner / role:** Budget owner.

**Completion criteria:** Pilot budget and billing path established; shortfall funding plan defined.

### Control step 4: Name owners & set the response

**Objective:** Define ownership and response process for limits, alerts, and exceptions.

**Key actions:**
- Name cost owner, exception approver, fallback contact, and review chair.
- Define exception route for additional credits/scope.
- Establish weekly pilot review cadence.
- Ensure each exception request has reason and scope.

**Owner / role:** Pilot sponsor (with Budget owner for exceptions).

**Completion criteria:** Documented RACI/response plan with owners, backups, escalation route, and review rhythm.

### Control step 5: Configure access

**Objective:** Enable controlled Cowork and Code access for pilot users.

**Key actions:**
- Enable Cowork usage-based billing and spending policy access ([Set up usage-based billing for Copilot Credits](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-copilot-credits-setup), [Manage Copilot Cowork for your organization](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-admin-governance)).
- Set discoverability and related tenant settings as needed ([AI experiences discoverability setting](https://learn.microsoft.com/en-us/microsoft-365/copilot/discovery-setting-ai-experiences)).
- Enable Code access via Frontier/Copilot settings for `PZ-Code-Pilot` ([Get started with the Microsoft Frontier Program](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/get-started-frontier)).
- Turn on Copilot Code organization setting and review defaults/controls ([Manage Copilot Code for your organization](https://learn.microsoft.com/en-us/copilot/code/code-admin)).

**Owner / role:** M365 admin.

**Completion criteria:** Cowork and Code enabled for intended pilot users/groups with required settings.

### Control step 6: Set guardrails

**Objective:** Put cost, access, and data governance controls in place before go-live.

**Key actions:**
- Create separate spending policies for Cowork and Code ([Manage Copilot Cowork for your organization](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-admin-governance)).
- Apply organizational/per-user limits and alert thresholds ([Manage Copilot Credits and billing methods](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)).
- Confirm policy scope also enforces access boundaries.
- Test in-scope/out-of-scope user behavior and alert routing.
- Review SharePoint/OneDrive permissions for oversharing risk; apply controls where needed.

**Owner / role:** M365 admin + Budget owner.

**Completion criteria:** Policies tested, alerts validated, access boundaries confirmed, and data-access review completed.

## Use (Days 11–15)

### Use step 1: Pick 3–5 tasks & capture the baseline

**Objective:** Select repeatable, measurable tasks and establish baseline metrics.

**Key actions:**
- Select 3–5 repeatable tasks across at least two personas.
- Prioritize medium/heavy multi-step work.
- For each task capture: persona, experience (Cowork/Code), frequency, current effort, accepted outcome definition, and reviewer.
- Agree accepted outcome and reviewer before launch.

**Owner / role:** Pilot sponsor + champions.

**Completion criteria:** Task cards/baselines completed for selected scenarios with accepted outcome definitions.

### Use step 2: Launch the cohort

**Objective:** Start pilot execution with consistent usage, measurement, and feedback.

**Key actions:**
- Run kickoff with scenarios and accepted outcome criteria.
- Assign champions per persona.
- Set up Teams feedback channel.
- Use standard run flow: run task, capture `/cost`, log credits/time.
- Keep human approval for outbound/system-changing actions.

**Owner / role:** Champions (enablement) + pilot users (execution).

**Completion criteria:** Cohort live by Day 15 with champions, feedback loop, and measurement process in use.

## Value (Days 16–30)

### Value step 1: Run & measure

**Objective:** Measure real adoption, consumption, productivity, quality, and outcomes.

**Key actions:**
- Log each run: user/persona, task, credits, attempts, time including review, accepted outcome/quality, and business impact.
- Include rejected/failed attempts in cost view.
- Use `/cost`, cost management, and usage/consumption reporting together.
- Review weekly and adjust limits/tasks.
- Save winning prompts as reusable skills; schedule repeatable work.

**Owner / role:** Pilot users + champions (with sponsor/budget owner in reviews).

**Completion criteria:** Evidence-based measurement maintained and reviewed; successful patterns operationalized.

### Value step 2: Forecast & decide

**Objective:** Convert measured usage into forecast and execute Day-30 decision.

**Key actions:**
- Forecast monthly credits:
  - `Users × runs per user per month × measured credits per run = monthly credits`
- Forecast by persona and workload type; separate Cowork and Code.
- Compare forecast with benefit capacity and identify the gap.
- Decide commercial path (PAYG vs prepaid) based on measured gap.
- Apply decision gate: **Scale / Adjust / Stop**.
- Package proven tasks, skills, governance, and economics into repeatable offer.

**Owner / role:** Pilot sponsor.

**Completion criteria:** Day-30 readout complete with forecast, economics, outcomes, and Scale/Adjust/Stop decision.
