# Source citation

## RFP source format

```text
SRC-XLSX-001#sheet=Requirements&row=42
SRC-PDF-002#page=14
SRC-DOCX-001#section=3.2
SRC-EML-004#from=vendor&date=2026-08-13
```

`SRC-<TYPE>-<nnn>` identifies a source registered in `wiki/source-map.md`. The fragment pins the location inside that source.

When an exact page, row, or section is unavailable, cite the closest known location and mark it approximate. Every material claim in an answer needs at least one RFP source, an approved decision reference, or a Microsoft Learn URL.

## Microsoft product claims

Use the Microsoft Learn connector included in the plugin:

1. Search with `microsoft_docs_search`.
2. Fetch the strongest page with `microsoft_docs_fetch`.
3. Cite the canonical Learn URL in the answer.
4. Record the retrieval date when product behavior is likely to change.

Example:

```text
Learn: https://learn.microsoft.com/dynamics365/commerce/ (retrieved 2026-10-19)
```

If the connector is unavailable or the documentation does not support the claim, do not fill the gap from model memory. Mark the answer `blocked` or `needs_context`.

## Shared-wiki rule

All citations resolve from the shared OneDrive or SharePoint wiki. Use relative links for wiki pages. Do not use local machine paths, temporary Cowork output paths, or private sharing URLs as citations.
