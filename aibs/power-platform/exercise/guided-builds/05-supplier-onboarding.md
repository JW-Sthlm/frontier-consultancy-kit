# Guided build 05: supplier submission pages and procurement review

[Lab 05](../05-supplier-onboarding.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-05](../client/offerings/README.md) and [the three supplier examples](../client/offerings/suppliers.csv).

## 1. Separate the work you build from the platform preparation

You will add the supplier-facing pages, choose the supplied forms/lists, configure their presentation and run the end-to-end review.

The facilitator prepares:

- A private Power Pages site and its approved identity provider.
- Supplier A and Supplier B test accounts, mapped to separate Contact records.
- Supplier Submission, Supplier Application and Review Note tables.
- Contact-scoped table permissions and page permissions.
- A current-user-associated **Supplier Submission** form.
- A server validation flow, unique submission-to-application key and internal review app.

These are required teaching assets. A new learner is not asked to configure Entra, infer portal identity relationships or invent secure record permissions during the page-building task.

If your card has no working A/B accounts, stop before adding pages. The presence of an administrator account alone is insufficient.

## 2. Ask HVE to explain the journey

After accepting the core handoff and choosing this optional implementation extension, in Cowork:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / Exercise 05 / optional implementation reference
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

EXERCISE 05: Power Pages, Model-driven app, Power Automate cloud flow
## Feature and schema decision workflow

| Step | Supplier-service decision | HVE output | Used before |
|---|---|---|---|
| DS05-1 | What do supplier and reviewer users need? | Evidence-linked feature questions | Choosing a portal over simpler intake |
| DS05-2 | Which self-service/internal features are first release? | Prioritized submission, correction, status and review choices | Defining pages, work queues and automation |
| DS05-3 | How do organizations, contacts, applications and history relate? | Schema options and access/lifecycle rationale | Creating data and permission structures |
| DS05-4 | How do legal-entity delegation and future bank data affect it? | Feature/schema/access impact | Expanding collected data or visibility |
| DS05-5 | Does the design represent correction and acceptance clearly? | First-release decision pack | Prototype and customer acceptance |

SCENARIO AUTHORITY
Zava and Nora are fictional. All interviews, policies and records below are synthetic training evidence, not real client data or executed tests. Amounts are EUR and timestamps UTC. CSVs are examples, not prescribed tables.

## People and decisions

| Role | Fictional owner | Authority in the scenario |
|---|---|---|
| CoE sponsor | Priya, operations director | Scope, value and operating-model decisions |
| Order operations | Lena | Order validation and human handoff |
| Process owner | Omar | Order-to-cash experiment |
| Field service | Eva | Inspections and remediation acceptance |
| Procurement | Arun | Supplier review |
| Service operations | Mia | Service-request policy |
| Dispatch | Noah | Scheduling rules |
| Finance | Lina | Leakage investigation, never automatic recovery |
| Platform owner | Jules | Sandbox configuration and technical release |

Learners playing these roles sign **workshop role-play**. Fictional authority does not authorize real tenant actions.

APPLICABLE POLICIES (complete text)
- **RULE-01 / Boundaries:** Training sandbox only. Human acceptance, technical release and business approval are separate. No real email recipients, ERP writes, payments or external publication.
- **RULE-05 / Suppliers:** A supplier contact sees only its own application. Required: legal name, country and tax reference. Procurement accepts or requests changes; submission never means approval. No bank details in this lab.

SOURCE: client/hve-development/05-suppliers.md
# Case 05: decide supplier self-service and review features

**HVE-DECISIONS-1.0. Fictional interview/design feedback. RULE-05 and suppliers.csv remain authoritative.**

## Client interview evidence

- **C05-F1 / Arun:** "Suppliers submit legal name, country and tax reference. Missing information creates repeated email chasing."
- **C05-F2 / Supplier:** "I want to know whether you received it, need a correction or accepted it."
- **C05-F3 / Reviewer:** "I need internal notes and the reason for requesting changes. Suppliers must not see internal discussion."
- **C05-F4 / Arun:** "Submission is not approval. I want to retain the original details when a supplier resubmits."
- **C05-F5 / Supplier:** "A colleague may help us submit, but you need to decide who is allowed to see which applications."
- **C05-F6:** Bank details, ERP vendor creation and purchasing authority are outside the first pilot.

## Technology-specific decision context

Power Pages can provide external submission/status. A model-driven app can support relational internal casework, and Power Automate can notify or route review events.

Decide whether a portal is justified over an emailed form, which self-service/review features are needed and whether supplier organization, contact, application, submission revision and internal/public review information need distinct records.

## Proposal to inspect

- **C05-P1:** The supplier edits the same row that holds the final approval and internal notes.
- **C05-P2:** All contacts from a company automatically share every application.
- **C05-P3:** Resubmission overwrites the only copy; current status is enough review history.

## Change for discussion

- **C05-C1:** Supplier A may submit for two legal entities. Compare direct contact ownership with an organization/access-association model.
- **C05-C2:** Arun asks for bank details later. State the new feature/data/access decisions needed rather than quietly collecting them.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C05-T1 | The model cannot separate public supplier response from internal reviewer notes. |
| C05-T2 | A contact's allowed legal entity/application is not represented. |
| C05-T3 | A correction loses the original tax-reference submission and reviewer reason. |
| C05-T4 | SUP-03's incomplete data is indistinguishable from an accepted supplier. |

No configured portal permissions or deployed validation flow is supplied.


SOURCE: client/offerings/suppliers.csv
application_id,contact_alias,legal_name,country,tax_reference
SUP-01,Supplier A,North Parts Ltd,SE,TRAIN-TAX-001
SUP-02,Supplier B,South Tools Ltd,DK,TRAIN-TAX-002
SUP-03,Supplier A,North Parts Services,SE,

OPTIONAL RECIPE (example only; reconcile with actual reviewed design and facilitator readiness)
# Guided build 05: supplier submission pages and procurement review

[Lab 05](../05-supplier-onboarding.md) | [Orientation](README.md) | [Handoff card](training-handoff.md)

**Build basis:** [RULE-05](../client/offerings/README.md) and [the three supplier examples](../client/offerings/suppliers.csv).

## 1. Separate the work you build from the platform preparation

You will add the supplier-facing pages, choose the supplied forms/lists, configure their presentation and run the end-to-end review.

The facilitator prepares:

- A private Power Pages site and its approved identity provider.
- Supplier A and Supplier B test accounts, mapped to separate Contact records.
- Supplier Submission, Supplier Application and Review Note tables.
- Contact-scoped table permissions and page permissions.
- A current-user-associated **Supplier Submission** form.
- A server validation flow, unique submission-to-application key and internal review app.

These are required teaching assets. A new learner is not asked to configure Entra, infer portal identity relationships or invent secure record permissions during the page-building task.

If your card has no working A/B accounts, stop before adding pages. The presence of an administrator account alone is insufficient.

## 2. Ask HVE to explain the journey

After accepting the core handoff and choosing this optional implementation extension, in Cowork:



**Expected:** a submission/review distinction and a clear build/test checklist.

## 3. Open the prepared site and inspect its data

1. Open [Power Pages](https://make.powerpages.microsoft.com/), select the training environment and locate the private site named on your card.
2. Choose **Edit** to open design studio. Do not create a second site.
3. Open the **Data** workspace. Inspect Supplier Submission and its prepared form.
4. Confirm visible fields: Legal name, Country and Tax reference. The Contact association is supplied by the signed-in identity and is not a field the supplier selects.
5. Inspect Supplier Application's public form/list: Application reference, Public status and Public response. Internal Review Notes must not appear.

**Expected:** the prepared forms correspond to these tables. If a form exposes internal approval controls or a Contact selector, stop and ask the facilitator to correct it.

## 4. Build the submission page

1. Open **Pages**. Choose **+ Page** and the standard page layout. Name it `Submit supplier details`.
2. In the content area choose **+ > Text**. Add:
   `Submit your legal name, country and tax reference. Procurement reviews every application. Submission is not approval. Do not include bank details.`
3. Add a **Form** component. Select Supplier Submission and the prepared **Supplier Submission** form from your card.
4. Use its supplied Insert/create mode. Do not switch it to edit internal Application records.
5. Keep the prepared authentication/page permissions. If design studio asks to set up permissions, ask the facilitator to apply the reviewed permissions, not Global access.
6. Set the success text to `Your details were submitted. Check My applications for validation and review status.`
7. Save or sync the site changes using the current studio control.

**Expected:** a signed-in supplier can see three business input fields, not a list of every supplier.

## 5. Build the status page

1. Add another page named `My applications`.
2. Add a **List** component and select the prepared Supplier Application list/view.
3. Show Application reference, Public status and Public response.
4. Add the supplied read-only detail form if the starter includes it. Do not enable supplier edit/delete actions on the internal review table.
5. Add navigation links between submission and status pages.
6. Sync and choose **Preview** using the private training site. The facilitator confirms which users can access this private site.

The site remains private. A design preview is not permission to publish it to the public Internet.

## 6. Submit as two different suppliers

Use the facilitator's separate authenticated sessions or browser profiles. Do not rely on signing out of an admin tab while another session remains privileged.

1. As Supplier A, submit North Parts Ltd, SE, TRAIN-TAX-001 (SUP-01).
2. Open My applications. Record its application reference and initial public status.
3. As Supplier B, submit South Tools Ltd, DK, TRAIN-TAX-002 (SUP-02).
4. Open B's My applications. It must not show A's record.
5. Attempt B's supplied detail URL as A.

**Expected:** A cannot read B's record. Empty or denied data is acceptable; another supplier's data is not.

The facilitator then runs the prepared authenticated API/forged-contact challenge while learners observe the identity and actual response. A page-only test cannot establish every data boundary.

## 7. Try incomplete data and review a valid application

1. Submit the SUP-03 example with no tax reference through the facilitator's controlled incomplete-submission route. A normal browser form may correctly block this earlier.
2. In the internal review app, confirm that the server did **not** create an accepted application for that invalid submission.
3. Observe the public completion response in the supplied validation-result/status surface.
4. As the procurement reviewer, open SUP-01's valid application and choose the supplied review command **Request changes** or **Accept**.
5. Add an internal Review Note.
6. Return to Supplier A's session and refresh My applications. The public disposition should update; the internal note must not appear.

The facilitator's prepared flow is the basis for the server check. If it is absent, the form's visual required marker does not replace it.

## 8. Capture the supply chain for reuse

Return actual page configuration, A/B observations, validation result and internal/public review results to Cowork. Run the main lab's review and offering prompts.

Record the solution/site version and the prepared component manifest. Lab 10 uses these actual artifacts, not merely a screenshot of the site.

**Explain back:** what did you add, what did the facilitator supply, what did HVE help you decide, and what proves one supplier cannot read another's data?

**Reference:** [Power Pages security components](https://learn.microsoft.com/power-pages/security/power-pages-security). These explain the underlying model; the prepared training site supplies its reviewed configuration.
[END STANDALONE CONTEXT]

Use guided build 05 as the fixed baseline. Explain Supplier Submission,
Supplier Application and Review Note using SUP-01.
Identify which prepared component validates data and which identity
may accept a supplier. Explain what I build in Power Pages and what
I test rather than configure. Do not replace Contact-scoped access
with a filtered list or hide a permission defect.
```

**Expected:** a submission/review distinction and a clear build/test checklist.

## 3. Open the prepared site and inspect its data

1. Open [Power Pages](https://make.powerpages.microsoft.com/), select the training environment and locate the private site named on your card.
2. Choose **Edit** to open design studio. Do not create a second site.
3. Open the **Data** workspace. Inspect Supplier Submission and its prepared form.
4. Confirm visible fields: Legal name, Country and Tax reference. The Contact association is supplied by the signed-in identity and is not a field the supplier selects.
5. Inspect Supplier Application's public form/list: Application reference, Public status and Public response. Internal Review Notes must not appear.

**Expected:** the prepared forms correspond to these tables. If a form exposes internal approval controls or a Contact selector, stop and ask the facilitator to correct it.

## 4. Build the submission page

1. Open **Pages**. Choose **+ Page** and the standard page layout. Name it `Submit supplier details`.
2. In the content area choose **+ > Text**. Add:
   `Submit your legal name, country and tax reference. Procurement reviews every application. Submission is not approval. Do not include bank details.`
3. Add a **Form** component. Select Supplier Submission and the prepared **Supplier Submission** form from your card.
4. Use its supplied Insert/create mode. Do not switch it to edit internal Application records.
5. Keep the prepared authentication/page permissions. If design studio asks to set up permissions, ask the facilitator to apply the reviewed permissions, not Global access.
6. Set the success text to `Your details were submitted. Check My applications for validation and review status.`
7. Save or sync the site changes using the current studio control.

**Expected:** a signed-in supplier can see three business input fields, not a list of every supplier.

## 5. Build the status page

1. Add another page named `My applications`.
2. Add a **List** component and select the prepared Supplier Application list/view.
3. Show Application reference, Public status and Public response.
4. Add the supplied read-only detail form if the starter includes it. Do not enable supplier edit/delete actions on the internal review table.
5. Add navigation links between submission and status pages.
6. Sync and choose **Preview** using the private training site. The facilitator confirms which users can access this private site.

The site remains private. A design preview is not permission to publish it to the public Internet.

## 6. Submit as two different suppliers

Use the facilitator's separate authenticated sessions or browser profiles. Do not rely on signing out of an admin tab while another session remains privileged.

1. As Supplier A, submit North Parts Ltd, SE, TRAIN-TAX-001 (SUP-01).
2. Open My applications. Record its application reference and initial public status.
3. As Supplier B, submit South Tools Ltd, DK, TRAIN-TAX-002 (SUP-02).
4. Open B's My applications. It must not show A's record.
5. Attempt B's supplied detail URL as A.

**Expected:** A cannot read B's record. Empty or denied data is acceptable; another supplier's data is not.

The facilitator then runs the prepared authenticated API/forged-contact challenge while learners observe the identity and actual response. A page-only test cannot establish every data boundary.

## 7. Try incomplete data and review a valid application

1. Submit the SUP-03 example with no tax reference through the facilitator's controlled incomplete-submission route. A normal browser form may correctly block this earlier.
2. In the internal review app, confirm that the server did **not** create an accepted application for that invalid submission.
3. Observe the public completion response in the supplied validation-result/status surface.
4. As the procurement reviewer, open SUP-01's valid application and choose the supplied review command **Request changes** or **Accept**.
5. Add an internal Review Note.
6. Return to Supplier A's session and refresh My applications. The public disposition should update; the internal note must not appear.

The facilitator's prepared flow is the basis for the server check. If it is absent, the form's visual required marker does not replace it.

## 8. Capture the supply chain for reuse

Return actual page configuration, A/B observations, validation result and internal/public review results to Cowork. Run the main lab's review and offering prompts.

Record the solution/site version and the prepared component manifest. Lab 10 uses these actual artifacts, not merely a screenshot of the site.

**Explain back:** what did you add, what did the facilitator supply, what did HVE help you decide, and what proves one supplier cannot read another's data?

**Reference:** [Power Pages security components](https://learn.microsoft.com/power-pages/security/power-pages-security). These explain the underlying model; the prepared training site supplies its reviewed configuration.
