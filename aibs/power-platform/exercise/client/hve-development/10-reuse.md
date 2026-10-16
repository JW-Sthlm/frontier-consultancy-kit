# Case 10: what should be standard versus client-specific?

**HVE-DECISIONS-1.0. Fictional interview/design feedback. Use RULE-05, RULE-10 and Nora's change brief.**

## Client interview evidence

- **C10-F1 / Partner lead:** "Reuse the supplier-service learning, not a copy of Zava's customer data or project identity."
- **C10-F2 / Nora:** "We need North/South service region before an application enters review."
- **C10-F3 / Nora reviewer:** "Our team, notification destination and supplier identities are different. Missing settings must not fall back to another client."
- **C10-F4 / Receiving consultant:** "I need to know why a feature/field was chosen and which assumptions must be checked again."
- **C10-F5:** Use actual lab-05 decision artifacts if available; otherwise use its business boundary as a proposed baseline without invented history.

## Technology-specific decision context

Power Platform solutions can package components, but reuse starts with the intended features, logical model, business rules and variation boundaries. Decide whether a request needs configuration, an additive schema change, a new feature or a separate product variant.

Do not assume an optional Region field, existing feature flag, actual package or target deployment. Those are implementation facts to verify later.

## Proposal to inspect

- **C10-P1:** Every new client gets a separate fork with no explanation of what changed.
- **C10-P2:** Put all possible client variations into the first common schema, whether anyone needs them.
- **C10-P3:** Rename Zava's entire project and contacts Nora, and treat earlier decisions as approved by the new client.

## Change for discussion

- **C10-C1:** Nora may add more regions later. Compare a fixed Choice with a managed Region reference entity against actual ownership/change needs.
- **C10-C2:** Another client wants two reviewers for high-risk applications. Identify feature/rule/schema impact without imposing that feature on every client.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C10-T1 | The receiving person can see field names but not which client need each supports. |
| C10-T2 | Nora's required-region feature has no schema/business-rule consequence. |
| C10-T3 | Target team/destination/identity are assumed inherited from Zava. |
| C10-T4 | No distinction exists between a reusable capability and a client-specific decision. |

These are design-transfer findings, not solution import logs or evidence of deployed reuse.
