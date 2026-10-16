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
