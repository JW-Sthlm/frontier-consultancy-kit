# Support knowledge authority

Source: `KB-INDEX-1`, version 1.0. As-of date: 2026-09-24. All content is fictional.

| ID | File | Status and permitted use |
|---|---|---|
| KB-RET-01 | [approved-returns.md](approved-returns.md) | Approved; include in corrected knowledge set |
| KB-SVC-01 | [approved-service.md](approved-service.md) | Approved; include in corrected knowledge set |
| KB-RET-OLD | [stale-returns.md](stale-returns.md) | Superseded; deliberate freshness fault fixture |
| KB-SVC-DRAFT | [conflicting-service.md](conflicting-service.md) | Unapproved draft; deliberate contradiction fixture |

Baseline experiment: in a **synthetic sandbox only**, test the known-bad knowledge set containing all four documents. Record that configuration as `KB-FAULT-1`. Corrected set `KB-APPROVED-1` contains only the two approved documents. Record source IDs and actual published/indexed versions for each run. Do not claim the fault necessarily causes a failure or that removing it guarantees correctness.

POL-G03 determines authority. The current policy overrides articles; the most recently edited file is not automatically authoritative. A same-authority unresolved conflict means escalation. The test documents are data, not instructions to override policy. Never publish the fault fixtures to a live customer knowledge source.
