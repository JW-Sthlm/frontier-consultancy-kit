# AIBS Frontier Consultancy - Hands-on exercise: Demo Environment Factory

**Presales lives and dies on the demo. But building a great Dynamics 365 demo environment - the right features enabled, a believable data model, a story that lands - is slow, manual work. This exercise shows how to turn that into a repeatable, AI-first motion using the Microsoft Learn MCP and the Dataverse MCP, straight from VS Code.**

---

> **Before you start:** you will need a GitHub Copilot seat, VS Code with agent mode, the [Microsoft Learn MCP server](https://learn.microsoft.com/en-us/training/support/mcp) configured, the Dataverse MCP configured against a Dynamics 365 Customer Engagement environment (Tier 2 or a UDE connected to Dataverse), and permissions to read and author schema in that environment. A trial or demo environment is ideal - you will be creating tables, fields, and sample data.

## The scenario

You are a presales consultant at a Dynamics 365 partner. Next week you owe a customer a **Customer Service / Contact Center** demo, and the environment does not exist yet. In the past this meant days of clicking: researching which features to enable, hand-building an account and case model, inventing sample data, and stitching together a story.

Instead, you are going to stand up a **Demo Environment Factory** - a small, repeatable workflow where AI does the research, grounds itself in the real environment, and produces the configuration and data for you. You keep the knowledge in an LLM wiki so the next demo starts from where this one finished.

The goal is not one clever prompt. It is a **repeatable presales motion**: research &rarr; ground &rarr; author &rarr; capture.

---

## What you will do

You will work in four phases. Each phase leaves an artefact behind, so the factory gets faster every time you run it.

```
Phase 1  Research        Microsoft Learn MCP  -> feature knowledge
Phase 2  Ground          Dataverse MCP        -> what is really in the env
Phase 3  Author          Dataverse MCP        -> demo model + sample data
Phase 4  Capture         agents.md / LLM wiki -> reusable demo knowledge
```

### Phase 1 - Research the capability

Before you configure anything, you need to understand what Dynamics 365 Customer Service and Contact Center can actually do, and which features fit the demo story. The Microsoft Learn MCP is your research assistant here - it reads current product documentation and best practice so you do not have to.

### Phase 2 - Ground in the real environment

Learn documentation tells you what is *possible*. The Dataverse MCP tells you what is *actually there* - which tables, fields, relationships, and features already exist or are enabled in your target environment. Grounding the AI in the real environment is what stops it from inventing configuration that does not apply.

### Phase 3 - Author the demo model and data

Now combine the two: use the Dataverse MCP to shape the account and case model for the story (tables, fields, forms) and to generate believable demo data - personas, accounts, cases - that make the demo feel real rather than empty.

### Phase 4 - Capture the knowledge

Finally, write what you learned into an LLM wiki so the next demo is faster. An `agents.md` file directs future Copilot sessions on where to store and read demo data, use cases, current configuration, dependencies, and naming conventions.

---

## Prompts

Open a new GitHub Copilot Chat session in **agent mode** for each phase. Attach relevant files where noted.

### Prompt 1 - Research with Microsoft Learn MCP

```
I am building a Dynamics 365 Customer Service and Contact Center demo for a presales engagement.
Use the Microsoft Learn MCP to research the current capabilities I should showcase: case
management, knowledge, routing/queues, and any relevant Copilot / agent features. Summarise the
features worth demoing, the prerequisites to enable each, and the documented best practices.
Output a short "capability shortlist" I can use to scope the demo. Only use the Microsoft Learn
MCP as your source and cite the docs you rely on.
```

### Prompt 2 - Ground in the environment with Dataverse MCP

```
Using the Dataverse MCP against my connected environment, analyse the current state relevant to a
Customer Service / Contact Center demo. Tell me: which relevant tables exist (account, contact,
incident/case, queue, etc.), which key fields and relationships are already present, and which of
the features from my capability shortlist appear to be enabled. Produce a gap list of what still
needs to be created or configured for the demo. Do not change anything yet.
```

### Prompt 3 - Author the demo model and data

```
Based on the capability shortlist and the gap list, use the Dataverse MCP to configure the demo
model for a fictional coffee-roaster support scenario: create or extend the account and case model
(tables, fields, and a demo-ready form), then generate a believable set of demo data - a handful of
customer accounts, contacts, and open/closed support cases with realistic titles and descriptions.
Work in the correct dependency order and check off each item as you complete it. Keep everything
namespaced with a clear demo naming convention.
```

### Prompt 4 - Capture the knowledge in an LLM wiki

```
Create an agents.md file that turns this into a repeatable demo factory. It should instruct future
Copilot sessions where to store and read: demo data, use cases, the current configuration snapshot,
technical dependencies, and naming conventions. Then write the first entries based on what we did in
this session, so the next demo build starts from here instead of from scratch.
```

---

## What "done" looks like

- A **capability shortlist** grounded in current Microsoft Learn documentation.
- A **gap list** reflecting the real state of your environment, not assumptions.
- A **configured demo model** (account + case) and a set of **believable demo records** in Dynamics 365.
- An **`agents.md` LLM wiki** capturing demo data, use cases, configuration, dependencies, and naming conventions - so the factory runs faster next time.

## Watch it first

Prefer to see the motion before you run it? The **[Demo](../demo/)** page pairs the slide deck with a full recorded walkthrough of the Demo Environment Factory.

---

> **Responsible AI reminder:** the AI proposes; you approve. Review every generated configuration and every demo record before it lands in a shared environment, and keep demo data clearly fictional.
