# Synthetic invoice fixtures

Source: `INV-PACK-1`, version 1.0. No real supplier, bank account or payment destination exists. These are review exercises, not payable documents.

| Source ID | Document | Deliberate property |
|---|---|---|
| SRC-NORMAL | [normal.html](normal.html) | Clear valid fields |
| SRC-DIFFICULT | [difficult.html](difficult.html) | Two reference numbers and unusually placed labels |
| SRC-DUPLICATE | [duplicate.html](duplicate.html) | Clear fields, key already in REF-LEDGER |
| SRC-POLICY | [policy-exception.html](policy-exception.html) | Total exceeds the exercise boundary, PO mismatch, payment request |

## Use documents in a live sandbox

Open each HTML in a browser. Choose Print, A4, portrait, scale 100%, turn browser headers/footers off, then Save as PDF. Keep the source ID in the filename. Inspect that totals and references are readable before submitting the PDF to your prepared invoice-processing action. No binary generator, JavaScript, external fonts or network content is required.

The difficult layout is a stress fixture, **not a guarantee of low model confidence**. Actual extraction fields, accuracy and confidence depend on the model and rendered PDF. Record raw response, actual field mapping, source ID, run ID, model/action version where available and any unreturned fields. Do not silently replace live output with the CSV.

## Use the desk simulation

`extracted-results.csv` is explicitly **SIMULATED**. It contains fictional extracted values and a compact confidence summary for testing routing logic, not actual AI Builder responses or an import schema.

- `min_required_confidence`: simulated minimum over all eight POL-F01 fields.
- `confidence_field_count=8`: all eight simulated confidence fields present.
- `ambiguous_fields`: `none` or field names requiring human resolution.
- `requested_action`: `review` or `pay_now`; document intent, not permission.
- For a live result compute the minimum only after checking presence of all eight required confidences. Missing values must fail POL-F04, not disappear from the denominator.

Reset REF-LEDGER before a run. Process in CSV order and preserve every failed rule. Store original extraction, validated values, reason codes, queue route and human disposition separately. A simulated route does not prove that a flow, app or write works.
