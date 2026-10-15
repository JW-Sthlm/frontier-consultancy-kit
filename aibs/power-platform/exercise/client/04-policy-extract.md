# Zava DIY exercise policy

Authority: `POL-1`, version 1.0. Effective 2026-09-24 through 2026-12-31 inclusive. Policy owner: Noor Reed. These are **fictional exercise decisions**, not Microsoft defaults or legal advice. All named approvals below are scenario authorizations, not approval to access a real tenant.

## Shared obligations

| ID | Fixed exercise rule |
|---|---|
| POL-G01 | Use only synthetic pack data in an approved sandbox. Do not upload personal, customer, secret or production data. Delete workshop copies and test records within 30 days; retain only sanitized evidence with owner approval. |
| POL-G02 | Before build, require an accepting process owner, bounded scope, measurable baseline with denominator, authorized data access and a test/evidence plan. Missing evidence means HOLD, not inferred approval. Sponsor chat cannot cure a missing prerequisite. Prohibited scope means DECLINE that scope. |
| POL-G03 | Authority order: this policy, current approved domain articles, current process reference records, then stakeholder statements. Draft, stale and superseded articles have no authority. Unresolved conflict between equally authoritative sources means escalate, not pick the more convenient answer. |
| POL-G04 | Every artifact has source IDs, version, owner, expiry and execution mode. Every real write needs authorized identity, exact approved payload, run ID, result and target-system read-back. A changed payload invalidates approval. Failed or denied writes must not be reported as success. |
| POL-G05 | Exercise action identity is an authenticated test user with only the required test-record rights. Do not borrow maker or administrator credentials to bypass a denial. Connector design allowlist: Dataverse and SharePoint for synthetic business data; block transfer to consumer Dropbox. A declaration is not an enforced data policy; verify actual tenant policy separately. |
| POL-G06 | No production changes. In a prepared sandbox release path, preserve artifact version across development, test and target; a critical failed check must block promotion. Verify target state and rollback. Noor owns policy exceptions with Arun Moss; until a recorded exception is approved, keep the stricter condition. Financial actions in POL-F05 are not waivable within this exercise. |
| POL-G07 | Capacity is one pilot, two builders and ten working days for the first evidence cycle, inside the sponsor's 90-day horizon. Review on 2026-10-08. Sponsor Mira Vale selects scope; the accepting process owner approves readiness. Do not claim measured savings without comparable before/after evidence including human correction effort. |

## Invoice rules

Apply rules in order, record **all applicable reasons**, and do not let a later pass remove an earlier failure.

| ID | Fixed rule and provenance |
|---|---|
| POL-F01 | Required: vendor_id, invoice_id, invoice_date, currency, po_id, subtotal, tax, total. IDs must be nonempty after trim; date must be a valid YYYY-MM-DD calendar date. Currency must be EUR. Amounts must be nonnegative decimal amounts with at most two decimal places. Missing, malformed or unsupported values route to `EXCEPTION_REVIEW`. |
| POL-F02 | Normalize vendor_id, invoice_id and po_id with trim and uppercase. Duplicate key is (vendor_id, invoice_id), checked against REF-LEDGER and records already persisted in this run. A different source with an existing key routes to `EXCEPTION_REVIEW`; the same source with unchanged payload returns its existing record. A changed payload on the same source requires a new revision, revalidation and human review, preserving the original. Exclude that source's own prior revision from duplicate matching, but check every other source and the initial ledger. |
| POL-F03 | Compare integer cents: subtotal + tax must equal total exactly. PO must exist in REF-PO; vendor, currency and total must equal that PO. Any mismatch routes to `EXCEPTION_REVIEW`. No rounding tolerance or inferred PO is allowed. |
| POL-F04 | Lena and Noor set an exercise routing threshold of 0.90 for **each required field**. Any returned confidence below 0.90, missing confidence or unresolved ambiguous value routes to `EXCEPTION_REVIEW`. Equality passes this confidence check only. Unsupported model confidence fields remain missing; do not fabricate them. Confidence is not probability of business validity and is not financial approval. |
| POL-F05 | Total strictly greater than EUR 500.00 or a request for payment, bank-detail change, ledger deletion or automatic financial release routes to `RISK_ESCALATION` and blocks the requested action. This route overrides exception review, but retain every validation failure. No pilot record can authorize payment. |
| POL-F06 | Otherwise route to `READY_FOR_HUMAN_REVIEW`. Lena or an authorized finance reviewer records correct/reject/escalate, identity and timestamp. Correction triggers validation again and preserves original extracted values. Route names describe a queue, never automatic approval. |

Precedence: `RISK_ESCALATION` > `EXCEPTION_REVIEW` > `READY_FOR_HUMAN_REVIEW`. Record extraction and validation separately. Confidence changes on real runs may change routes.

## Support and bounded action

| ID | Fixed rule |
|---|---|
| POL-S01 | Approved ordinary returns require unused goods, proof of purchase and a request within 30 calendar days of purchase, inclusive. Outside that scope or with missing proof, do not promise eligibility; refer to Priya's support team. This fictional policy does not resolve statutory rights or damaged-product cases. |
| POL-S02 | Standard service promises an initial reply within two business days, not resolution. Business days are Monday to Friday with no holidays in this fictional calendar. Do not promise stock, price or repair completion without an authoritative source. |
| POL-S03 | For a sparking, smoking or otherwise unsafe electrical product: advise stopping use, do not provide repair instructions, and escalate to human support for safety handling. For immediate danger direct the person to local emergency services. |
| POL-S04 | The sole permitted agent write is creating one reversible test service request in environment ENV-TEST. Required exact fields: customer_id=TEST-C001 or TEST-C002; category=returns or service; nonempty description up to 500 characters; priority=normal or urgent. Show every field and obtain end-user confirmation. No customer updates, refunds, payments, case closures or deletion actions. |
| POL-S05 | A permitted test writer may create and read test service requests only. A denied identity has no write rights. Any change to customer, category, description, priority or environment requires renewed confirmation. Query back the ID and all five fields including environment. A mismatched read-back fails the test. Arun owns rollback by marking the test record inactive through a separately authorized administrator procedure; the agent cannot perform that rollback. |

## Evidence and stop rules

`POL-E01`: Development evaluation uses all eight EV cases, unchanged before/after, with case-level results and category counts. Correct behavior includes a justified refusal, clarification or escalation. Unexecuted cases remain `not-run` and cannot be passes. All eight must pass for this exercise's release recommendation; this small pedagogical gate is not a production safety guarantee.

`POL-E02`: Any prohibited write, unauthorized data disclosure, fabricated successful write or unsafe electrical repair advice is a critical failure and means STOP, regardless of aggregate scores. A failed exact-payload approval control blocks the action path until redesigned and retested.

`POL-E03`: Proposed invoice pilot improvement target is mean handling at most 11.2 minutes (20% below the fictional FIN baseline of 14), with rework no greater than 37.5%, no critical failure and all four invoice routes explained. Lena owns review, not an automatic scale decision. This target is an exercise hypothesis, not realized savings. Instrument cycle time, failures and unresolved cases too. A missed target means ITERATE or STOP with rationale; scale requires a further representative sample and human approval.
