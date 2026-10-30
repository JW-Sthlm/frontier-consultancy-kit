# Writing to the shared OneDrive/SharePoint wiki

Applies to every create, replace or edit of a file in the RFP folder.

> **Temporary workaround (observed 20 and 26 Oct 2026).** The Cowork workspace syncs to remote storage with a ~30–35 s delay. Writing a file too soon after it was downloaded returns an input/output error, and uploading too soon after a write sends the PREVIOUS content while reporting success. If the platform fixes this, the waits can be shortened or removed; keep the OneDrive verification regardless.

## Replacing or editing an existing file (batched)
Batch size: at most 10 files per script run (each download takes ~35 s; one script run is limited to 10 minutes).

1. Re-read: delete any local copy of the file, then download it fresh. Confirm the local copy's content hash (quickXorHash) matches OneDrive. A local copy left over from an earlier run is never a valid re-read.
2. Check: skip and report the file if it no longer matches the expected original (question status, or the control page's size, last editor or eTag). Record its eTag.
3. Wait 30 s after the last download in the batch.
4. Write: overwrite each downloaded copy in place. Do not write a temporary file and rename it over the copy; the upload then sends the old content.
5. Wait 30 s after the last write in the batch.
6. Upload: just before each upload, re-check the eTag. If it changed, skip and report. Upload in place.
7. Verify: read the file's hash from OneDrive and compare it with the intended content. An upload that reports success is NOT proof of success.
8. Stop at the first failed read, write, upload or verification. Never retry in a loop.
9. Keep a progress file in working/ (done / skipped) so a stopped run resumes without repeating or losing work.

## Adding a new file (for example an export)
Direct upload of a file created in the workspace is refused (not a provenance-tracked download). Save it as a deliverable (it syncs to the user's Coworker folder), then copy it into the target folder with a OneDrive copy step (needs the user's approval). Confirm it is listed in the target folder before reporting it as done.

## Reporting
Report counts only from OneDrive checks, never from script results alone. Log the method and any skipped files in wiki/logs/processing-log.md.
