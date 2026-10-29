# M365 Copilot Frontier - Hands-on exercise for RFP processing in Copilot Cowork

**A 100-question RFP just landed in your inbox: a Word cover, two appendices, and a sprawling Excel response form. The deadline is short, the answers have to be defensible, and several reviewers need to work from the same live source of truth. You have Copilot Cowork and the FC RFP Processing plugin. Let's turn the source pack into a shared, traceable, export-ready response.**

This exercise runs inside **Copilot Cowork** with one purpose-built plugin: **FC RFP Processing**. The plugin combines the `rfp-processing` skill with the Microsoft Learn MCP connector. The skill first asks where the wiki must live, then creates and updates the full RFP workspace in that OneDrive or SharePoint location. Review members see the same files, assignments, statuses, decisions, and version history.

> **Credit:** the `rfp-processing` skill was created by **[Joris Kalz](https://www.linkedin.com/in/joris-kalz/)** and adapted for shared Cowork delivery in Frontier Consultancy.

> **Before the workshop:** complete the [setup guide](rfp-setup-overview.md). You need Cowork, the FC RFP Processing plugin, a shared OneDrive or SharePoint folder, the bundled Microsoft Learn connector, and the Zava test pack. 

[Back to the scenario navigator](../../m365-copilot-frontier-scenarios-app.html)

***

## Why this skill matters for Frontier Consultancy

Responding to an RFP is one of the most expensive, least repeatable things a partner does. Source material is messy, questions run into the hundreds, and every answer must be accurate, consistent, and traceable. Under deadline pressure, teams copy old answers, lose the source behind a claim, and create parallel documents that drift apart.

The FC RFP Processing plugin treats the RFP as a **shared knowledge base, not a document**:

* **Structure over chaos:** raw sources become a navigable wiki with questions, requirements, context, source extracts, and an index.
* **Traceability by construction:** every question, requirement, source, and decision carries a stable ID, and every answer cites the exact source or Microsoft Learn page.
* **Grounded product claims:** Dynamics 365, Azure, and Power Platform claims are checked against current first-party documentation through the bundled Microsoft Learn MCP connector.
* **Shared review state:** owners, reviewers, statuses, open items, and decisions live in the same OneDrive or SharePoint folder.
* **A real approval gate:** the plugin refuses export until every question is approved.

For a partner, this is the difference between AI that drafts words and AI that helps run the bid while the team keeps control.

***

## Why Cowork for this exercise

Cowork gives a business team an agentic working surface inside Microsoft 365. It can work with files and folders stored in OneDrive or SharePoint, use the FC RFP Processing plugin automatically, and preserve normal cloud permissions and version history.

The critical design choice is the **shared wiki location**. Cowork's private output folder is not the bid team's source of truth. The skill therefore stops before writing and asks for a OneDrive or SharePoint folder. SharePoint is preferred for a team. A shared OneDrive folder is suitable for a smaller group.

Every review member needs two things: access to the same cloud folder and access to the plugin. Once both are in place, each reviewer can start Cowork, attach the same folder, and continue from the latest wiki state rather than making a separate copy.

***

## The scenario

You are responding to a bid from **Zava Retail Group**, a fictional but realistic multinational omnichannel retailer selecting a Dynamics 365 Commerce platform across Canada, the United States, and the United Kingdom.

| File                                               | What it is                                                                                                      |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Zava - RFP D365 Commerce - Cover Document.docx** | Background, objectives, scope, markets, and response instructions                                               |
| **Zava - RFP D365 Commerce - Appendix A.docx**     | Store and channel footprint, formats, volumes, currencies, and languages                                        |
| **Zava - RFP D365 Commerce - Appendix B.docx**     | Integration landscape and reference architecture                                                                |
| **Zava - RFP D365 Commerce - Response Form.xlsx**  | Appendix C with 105 functional requirements, 27 NFRs, 8 use cases, MoSCoW priority, and an A-F compliance model |

The four files are in [`test-pack/`](test-pack/). They are immutable inputs. The plugin derives from them but never edits them.

***

## What you will do

The plugin runs a five-stage motion in one shared cloud folder.

### The shared wiki it builds

```text
/zava-d365-commerce-2026/
  input/                      # immutable Zava source pack
  wiki/
    index.md                  # navigation hub
    source-map.md             # source registry with SRC- IDs
    open-items.md             # unclear, missing, contradictory, or risky items
    answer-strategy.md        # approved response approach
    decision-log.md           # DEC- decisions
    collaboration.md          # cloud location and team agreement
    review-board.md           # question ownership, reviewer, and status
    context/
    requirements/
    questions/
    sources/
    answers/
    reviews/
    logs/
      processing-log.md
  working/
  exports/                    # created only after the approval gate
```

### Phase 1 - Select, ingest, and structure

The skill asks where the wiki must be created. You attach the shared SharePoint or OneDrive folder, confirm the stable slug, and let the plugin scaffold the RFP there. It inventories every file in `input/`, creates source extracts and a source map, builds context and requirement pages, and turns each RFP question into a stable question page.

### Phase 2 - Organize the team and response strategy

The plugin records the review team and assignments in `collaboration.md` and `review-board.md`. Before drafting, the team agrees the win themes, fit assessment, gap handling, assumptions, and tone in `answer-strategy.md`.

### Phase 3 - Draft and ground

For each question, the plugin assembles only the relevant context and drafts an answer. Product claims are verified through Microsoft Learn and cite the Learn URL. Drafts remain `needs_review`.

### Phase 4 - Review and approve

Reviewers work from the same folder. Each answer moves through the status lifecycle, with ownership, reviewer, and decisions recorded. Human edits are preserved and Cowork reads the latest page before changing it.

> **Exercise shortcut:** after reviewing a real sample, the workshop uses an explicitly logged bulk approval to reach export. Never use that shortcut in a live bid.

### Phase 5 - Export, gated

The plugin re-reads the shared wiki immediately before export. If any question is not `approved`, it stops and reports the outstanding ID, owner, and status. Only an approved response is exported.

***

## Prompts and actions

### Action 1 - Open the shared cloud folder in Cowork

1. Open a new Cowork conversation.
2. Enable **FC RFP Processing** in **Sources & Skills**.
3. Select **Add attachments > Attach cloud files and folders** and attach the SharePoint or shared OneDrive folder prepared before the workshop.
4. Confirm every reviewer can edit that folder.

### Prompt 1 - Start with the location gate

```text
Use FC RFP Processing for the Zava D365 Commerce RFP. Before creating any files, ask me where the
shared RFP wiki must live. Use the cloud folder I attached, confirm that it is writable, recommend
SharePoint if this is not already a team location, and use the slug zava-d365-commerce-2026.
```

The plugin should repeat the selected location and slug before it writes. If it cannot access the folder, fix access instead of accepting a private fallback.

### Prompt 2 - Create the shared folder structure

```text
Create the RFP structure in the confirmed shared location. Include input/, wiki/, working/, and
exports/, plus wiki/collaboration.md and wiki/review-board.md. Do not create a copy in Cowork's
private output folder.
```

### Action 2 - Add the Zava source files to `input/`

Upload copies of the four files from [`test-pack/`](test-pack/) into the shared `zava-d365-commerce-2026/input/` folder:

* [Cover Document (.docx)](test-pack/Zava%20-%20RFP%20D365%20Commerce%20-%20Cover%20Document.docx)
* [Appendix A (.docx)](test-pack/Zava%20-%20RFP%20D365%20Commerce%20-%20Appendix%20A.docx)
* [Appendix B (.docx)](test-pack/Zava%20-%20RFP%20D365%20Commerce%20-%20Appendix%20B.docx)
* [Response Form (.xlsx)](test-pack/Zava%20-%20RFP%20D365%20Commerce%20-%20Response%20Form.xlsx)

### Prompt 3 - Ingest and build the wiki

```text
The four Zava source files are now in input/. Ingest all of them. Build the wiki in the same
shared location, register every source, extract all questions into individual English question
pages with stable IDs, and create the requirement and context pages. Treat input/ as immutable.
When finished, show the index and report the number of questions, requirements, and sources.
```

### Prompt 4 - Set the collaboration plan

```text
Help me set up the review team. Ask me for each review member and their role, then write the working
agreement to wiki/collaboration.md and assignments to wiki/review-board.md. Split the first 30
functional questions into three batches with an owner and a different reviewer for each batch.
Do not change file-sharing permissions without showing me exactly who will receive access first.
```

### Prompt 5 - Set the response strategy

```text
Read the shared wiki and propose the best response strategy for this Zava RFP: win themes, strong
fit, partial fit, gaps, assumptions, and tone. Write the agreed version to
wiki/answer-strategy.md and record approved positioning decisions in wiki/decision-log.md.
```

### Prompt 6 - Draft grounded answers

```text
Draft an answer for every question under wiki/questions/, including all functional requirements,
non-functional requirements, use cases, and any other question categories extracted from the RFP.
Work through manageable batches until every question has a corresponding answer page. Follow the
response strategy. For every Dynamics 365 Commerce capability claim, use the Microsoft Learn
connector, fetch the strongest official source, and cite the Learn URL. Include assumptions,
confidence, owner, and reviewer. If a question cannot be answered from the available evidence,
still create its answer page, state exactly what is missing, add an open item, and mark it blocked
rather than omitting it. Leave all completed drafts at needs_review, update wiki/review-board.md
after each batch, and finish by reporting totals by question category plus any blocked IDs.
```

### Prompt 7 - Review and approve a batch

```text
Walk me through the first 10 drafted answers one at a time. For each, show the question, answer,
RFP sources, Microsoft Learn citations, owner, and reviewer. I will approve it or request a change.
Update the shared page and review board after each decision.
```

### Prompt 8 - Try to export early

```text
Export the filled Excel response matrix now.
```

The plugin should refuse and list every outstanding question with its owner and status. That refusal is the exercise working as intended.

### Prompt 9 - Exercise-only approval shortcut

```text
For this workshop simulation only, approve the remaining question pages so we can demonstrate the
export. Record this as an exercise shortcut in the decision log and processing log. In a live bid,
every answer would require its assigned human approval.
```

### Prompt 10 - Export for real

```text
Re-read the shared wiki and verify every question is approved. Then export the filled Excel response
matrix, a Word response document, and a Markdown answer pack to exports/. Do not overwrite an
existing export. After the export succeeds, set the question pages to exported.
```

***

## What good looks like

* **After Prompt 1** Cowork has a confirmed OneDrive or SharePoint location and has not written to a private output folder.
* **After Prompt 2** the shared RFP structure exists and all review members can see it.
* **After Prompt 3** the wiki contains an index, source map, context, requirements, and one stable page per question.
* **After Prompt 4** `collaboration.md` and `review-board.md` make ownership and review responsibilities explicit.
* **After Prompt 5** the response strategy and approved positioning decisions are shared and linked.
* **After Prompt 6** grounded drafts have RFP citations, Microsoft Learn URLs, assumptions, confidence, owners, and reviewers.
* **After Prompt 8** export is blocked with a useful outstanding-item report.
* **After Prompt 10** approved deliverables are in the shared `exports/` folder and remain traceable to the wiki.

***

## If something goes wrong, in this order

1. **Ask Cowork.** Paste the error and ask what it means and how to fix it.
2. **Check the plugin.** Start a new conversation and enable FC RFP Processing in **Sources & Skills**.
3. **Check the shared location.** Confirm the folder is attached and writable. Do not create another copy.
4. **Check team permissions.** A reviewer needs edit access to the folder and access to the plugin.
5. **Check** **`input/`.** The four Zava files must be in the shared RFP folder's `input/` directory.
6. **Check Microsoft Learn.** If answers have no official citations, confirm the plugin's Microsoft Learn connector is enabled.
7. **Trust the export refusal.** Finish review or resolve blockers before exporting.
8. **Ask a neighbor or the facilitator.**

***

## Take this home

The pattern is reusable across pursuits:

1. Choose one shared OneDrive or SharePoint location before work starts.
2. Keep raw sources immutable in `input/`.
3. Build a traceable wiki with stable IDs.
4. Assign owners and reviewers in the wiki itself.
5. Set the response strategy before drafting.
6. Ground Microsoft product claims in current official documentation.
7. Review every answer to `approved`.
8. Export only after the gate clears.

The result is not just a faster first draft. It is a shared, reviewable, auditable bid process whose reasoning survives the conversation that created it.

***

### Reference

* [Use Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/use-cowork)
* [Use plugins with Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-plugins)
* [Customize Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-customize)
* [Build plugins for Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-plugin-development)
* [Microsoft Learn MCP server](https://learn.microsoft.com/training/support/mcp)
* [Dynamics 365 Commerce documentation](https://learn.microsoft.com/dynamics365/commerce/)

