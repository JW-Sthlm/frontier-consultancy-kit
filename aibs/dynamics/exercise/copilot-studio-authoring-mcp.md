# AIBS Frontier Consultancy - Build an MCP that creates Copilot Studio agents

**Extend your Dataverse Schema MCP so GitHub Copilot can create a Copilot Studio agent, give it instructions and an inline skill, and revise it without rebuilding it. Then add a workflow-backed tool as an advanced exercise.**

This is the next step after [Create Dataverse Schema MCP](Create%20Dataverse%20Schema%20MCP.md). You built tools that author the customer model. Now build tools that author the agent working with that model.

> **Experimental sandbox lab, not a supported product API contract.** This exercise teaches a DevBridge-style approach: MCP tools author agent definitions through Dataverse. The tables have public references, but their existence does not make every agent configuration or workflow payload a stable public authoring API. Modern agent templates, inline skills, model identifiers, and workflow designer formats can vary by tenant and release. Validate the compatibility gate below before writing. Do not run this lab against production.
>
> DevBridge is an architectural reference, not a prerequisite or a dependency to copy. Participants build their own small server extension. Do not distribute private source, captured tokens, internal endpoints, or customer definitions with the exercise.

## What you will build

Allow **90-120 minutes** for the core exercise and **45-60 minutes** for the advanced workflow section. Installation and environment provisioning are additional.

| Core lab | Advanced section |
|---|---|
| Reuse the schema MCP connection and stdio host. | Build a small, connection-free workflow from a typed specification. |
| Discover agents and their components. | Validate both its executable definition and designer representation. |
| Create a draft agent with the required settings component. | Create and activate the workflow, then attach it to the agent. |
| Add and revise one inline instruction skill. | Test the workflow directly and through the published agent. |
| Validate, inspect in the portal, publish manually, and test. | Preserve workflow identity when updating it. |

This lab does **not** implement automatic publishing, agent deletion, knowledge indexing, connector consent, or every DevBridge tool. Those are separate capabilities, not requirements for a useful first server.

### Two different meanings of "MCP for Copilot Studio"

```text
Design time, this exercise:
Consultant -> GitHub Copilot in VS Code -> local MCP over stdio
           -> Dataverse -> Copilot Studio agent and component definitions

Run time, a different integration:
User -> published Copilot Studio agent -> configured remote MCP connection
     -> business tools and data
```

You are building an **authoring MCP**, not merely adding an MCP server as a tool inside an existing agent. Copilot Studio cannot reach your local VS Code stdio process. A runtime MCP integration needs its own supported remote transport, authentication, and connection setup.

## Before you start

1. Complete [Create Dataverse Schema MCP](Create%20Dataverse%20Schema%20MCP.md). Confirm its current build and existing tool calls still work.
2. Use VS Code with GitHub Copilot Chat in agent mode and the .NET SDK targeted by your schema project. Reuse its working SDK/package versions; do not upgrade the project as part of this lab.
3. Use a disposable Dataverse environment with Copilot Studio available, appropriate licensing or trial entitlement, and maker/customization permissions. Being able to write Dataverse rows alone is not sufficient.
4. Create an **unmanaged solution** in that environment, for example `CoffeeAgentLab`, with a publisher prefix such as `coffee`. Record its unique name, not only its display name.
5. Confirm that your signed-in user can create and test an agent manually in Copilot Studio in that environment. Keep that user available for publishing.
6. Keep the existing OAuth connection provider. Never put passwords, client secrets, or access tokens in prompts or configuration committed to source control.

Use the same environment throughout. The Dataverse organization URL and the Power Platform environment ID are different identifiers. Record both; do not derive one by guessing from the other.

### Compatibility gate: prepare a small reference agent

Before asking Copilot to invent a payload, establish what your tenant actually accepts.

In the sandbox, create a disposable reference agent in the lab solution. Use the modern agent experience available to your tenant, add a minimal inline instruction skill **if that experience supports it**, save, publish, and test it. Do not confuse an inline instruction skill with a classic external Bot Framework skill or a VS Code skill file.

Use read-only Dataverse inspection or an approved solution export to examine only this reference agent's configuration and components. Record the template, payload format, required baseline components, selected model series, authentication settings, and solution membership. Keep environment-specific captures in your local lab workspace, not in this public exercise.

**Proceed with the direct-authoring recipe only if its shape matches the reference.** If the tenant does not expose a compatible modern agent/inline-skill experience, stop this path. Use documented [Power Platform CLI copilot commands](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/copilot) and supported solution/template operations for that environment instead. Report the mismatch; do not silently substitute classic topics or call the skill exercise complete.

## The scenario

The coffee roaster from the CE and schema exercises wants a **Coffee Purchasing Adviser (MCP Lab)**.

The agent interviews a salesperson about a customer's purchasing needs, proposes a Coffee Purchasing Profile, and explains its reasoning. It does not read or update accounts in the core lab. Having a Dataverse connection in your authoring MCP does **not** automatically give the created agent access to account data.

Use these five labels:

- Commercial / Bulk Coffee
- Classic / Everyday Coffee
- Premium Coffee
- Specialty Coffee
- Sustainable / Ethical Coffee

The inline skill teaches the interview and recommendation procedure. The advanced workflow performs a deterministic, illustrative routing rule. Neither is permission to change customer records.

## Phase 1 - Extend the existing server safely

Attach this exercise to a new Copilot Chat session in the schema MCP project. Start with this prompt.

### Prompt 1 - Inspect, then add the authoring boundary

```text
Extend this existing Dataverse Schema MCP using the attached exercise.
Inspect the host, connection provider, tool registration, error handling, and tests first.
Preserve the existing schema tools and their behavior. Reuse the shared authenticated
ServiceClient and stdio host; do not create a second login flow.

Add a CopilotStudio service and a separate MCP tool class following the project's patterns.
Use explicit tool names. Add a DATAVERSE_SOLUTION_UNIQUE_NAME setting. Resolve it to an
existing unmanaged solution and its publisher prefix before any authoring operation.
Missing or managed solutions must fail explicitly. Reads can work without a selected
solution; writes cannot. Check target membership on updates and component additions.

Keep logs on stderr so stdout remains MCP protocol traffic. Return structured tool data:
success, operation, resource IDs, schema names, actual state, warnings, and errors.
Use the MCP SDK's tool-error mechanism for failures, not success-shaped error text.
Include actionable Dataverse fault details but no credentials or tokens.

Implement copilot_studio_guidance, list_agents, get_agent, and list_agent_components first.
List operations need bounded page sizes and continuation/paging behavior. An empty result
is valid; a failed query is not an empty result.
Guidance must explain the compatibility gate, supported scope, solution requirement,
authoring versus publishing, and manual steps. It must not claim compatibility solely
because the bot and botcomponent tables exist.

Build and run focused tests. Do not create or alter any agent yet.
```

### Keep the architecture small

Use the existing host, one connection provider, one authoring service, and serializers/validators for the payloads. Register the new tools through the project's existing registration pattern.

DevBridge-style **guidance tools** are useful here: they expose authoring rules before the model writes anything. Loading a large tool family dynamically is optional. Do not add a tool registry or copy an activation mechanism just to implement a handful of tools.

The service owns Dataverse writes and solution checks. Tools validate their input and call the service. Serializers and validators should be testable without a live environment.

## Phase 2 - Implement the core tools

### Required tool contract

These are names for **your custom server**, not built-in Microsoft tools.

| Tool | Minimum behavior |
|---|---|
| `copilot_studio_guidance` | Explain scope, compatibility, prerequisites, and the correct authoring sequence. |
| `list_agents` / `get_agent` | Return IDs, schema names, template, actual publish information, and selected-solution membership. |
| `list_agent_components` | Return component IDs, numeric types, parsed payload kinds, schema names, and parent agent. |
| `create_agent` | Create the draft agent and mandatory settings together; return both IDs and the generated schema name. |
| `update_agent_instructions` | Change instructions while preserving the agent ID, schema name, model, and unrelated configuration. |
| `add_agent_skill` | Add one inline instruction skill with name, description, instructions, and parent agent ID. |
| `update_agent_skill` | Partially update an existing inline skill without replacing its component ID or schema name. |
| `validate_agent` | Return `isValid` plus issues with severity, code, resource ID, and payload path. It must not imply a runtime test occurred. |

### Direct-authoring recipe and its limits

The following is a **version-sensitive compatibility profile** for the modern agent shape used in this lab. Confirm it against the reference agent. Treat these values as a tested profile in your adapter, not as rules for all Copilot Studio agents.

| Surface | Rule for this profile |
|---|---|
| Agent | A `bot` row with `template=cliagent-1.0.0` set **on creation**. Omitting it can provision classic content that this modern shape cannot parse. |
| Configuration | `bot.configuration` contains JSON using `$kind` discriminators. Do not copy exported YAML `kind` keys directly into this JSON. |
| Baseline settings | One child `botcomponent` with `componenttype=18` and YAML data `kind: DefaultFeedbackCollection`. A bare agent row is not the complete agent. |
| Inline skill | A child `botcomponent` with `componenttype=9`, payload kind `InlineAgentSkill`, and a `.skill.` schema-name infix. Type `13` represents a different, legacy skill concept. |
| Component identity | Derive the semantic kind from the payload, not just the numeric type or its label. Type `9` can hold more than one kind of component. |
| Names | Use the selected publisher prefix and collision-resistant schema names. Never reuse a deleted agent's schema name. Retry by returned identity, not by creating another agent automatically. |
| Security | Preserve the reference agent's authenticated-user configuration. Do not disable authentication to make a test pass. |
| Solution | Author the agent and its components in the selected unmanaged solution using supported Dataverse solution mechanisms, and verify membership by reading back. |

Minimal configuration shape for that profile:

```json
{
  "$kind": "BotConfiguration",
  "recognizer": { "$kind": "CLICopilotRecognizer" },
  "agentSettings": {
    "$kind": "AgentSettings",
    "model": { "$kind": "ModelConfig", "series": "<validated tenant model series>" },
    "instructions": {
      "$kind": "Instructions",
      "segments": [
        { "$kind": "StaticSegment", "value": "<agent instructions>" }
      ]
    },
    "web": { "$kind": "WebSettings", "enableWebSearch": false }
  }
}
```

The model-series placeholder must be replaced with a value verified in your tenant. Do not guess it from a marketing model name. Do not add classic-only configuration blocks or classic `AdaptiveDialog` topics to this profile.

An inline skill's `data` is YAML containing a Markdown document:

```yaml
kind: InlineAgentSkill
content: |-
  ---
  name: coffee-profile-interview
  description: Interview a salesperson and recommend a coffee purchasing profile.
  ---
  Ask about volume, price sensitivity, quality expectations, and sustainability.
  Explain the recommendation. Do not claim to update an account.
```

The outer YAML, Markdown frontmatter, and Markdown body are distinct layers. Serialize arbitrary user text safely; do not concatenate unescaped names or descriptions into YAML. Test colons, quotes, multiline instructions, and non-ASCII text.

### Prompt 2 - Add writes and structural validation

```text
Implement the remaining core tools in the attached exercise using the verified
compatibility profile. Stop and report any mismatch with the sandbox reference.
Do not silently fall back to another agent type.

Use typed request/response models and JSON/YAML serializers. Create the bot and required
settings component atomically with ExecuteTransactionRequest where supported, passing
the selected solution context on the requests. Read back their identity and membership.
Do not call PublishAllXml or publish_customizations to publish an agent.

Only mutate compatible agents/components in the selected solution. For partial edits,
omitted fields must retain their values; reject empty required text. Preserve unrelated
configuration. Use optimistic concurrency where supported; report conflicts rather than
overwriting another maker's changes.

validate_agent must detect malformed configuration, unsupported templates or component
kinds, missing/duplicate baseline settings, incompatible classic content, empty instructions,
incorrect parent references, and missing solution membership. Unknown shapes must be
reported as unsupported, not interpreted as valid. Include publish state separately.

Test serializers, all validation failures, rejected writes with no selected solution,
cross-solution mutation rejection, transaction rollback, and identity-preserving updates.
Build and run the focused tests before making live writes.
```

## Phase 3 - Register, build, and create the agent

Keep the existing MCP server entry. Add the solution setting to that entry's `env` object:

```json
"DATAVERSE_SOLUTION_UNIQUE_NAME": "CoffeeAgentLab"
```

This is a property fragment, not a complete configuration file. Preserve the existing organization URL and authentication settings.

Run `dotnet build` in the project folder. Use VS Code's MCP server controls to **stop and restart the schema MCP process** after rebuilding, then confirm that the new tools are listed. Avoid enabling a second server exposing the same tool names.

### Prompt 3 - Author the coffee adviser

```text
Use only my extended schema MCP for agent authoring.
First call copilot_studio_guidance and inspect the selected solution and compatibility
evidence. List agents to detect an earlier run. If a candidate already exists, show its
ID and solution membership and ask whether to update it; do not create a duplicate.

Create Coffee Purchasing Adviser (MCP Lab) as a draft in the selected solution.
Its purpose is to recommend one of:
Commercial / Bulk Coffee; Classic / Everyday Coffee; Premium Coffee;
Specialty Coffee; Sustainable / Ethical Coffee.

Instructions: interview the salesperson, explain the recommendation, ask when information
is missing or priorities conflict, and never invent account data or claim to save changes.
Do not browse the web, attach knowledge, or create account access.

Add one inline skill, coffee-profile-interview, with a specific routing description:
use it when a salesperson needs a purchasing-profile recommendation.
It should ask about volume, price sensitivity, quality expectations, and sustainability.
For explicitly high-volume, price-sensitive purchasing with no conflicting preference,
recommend Commercial / Bulk Coffee. For conflicting priorities ask a clarifying question.

List the stored components and run validate_agent. Show agent ID, schema name,
settings component ID, skill ID, solution membership, validation issues, and actual
publish status. Stop for my portal review. Do not claim that creation means publication.
```

### Human checkpoint: open, publish, test

1. Open Copilot Studio and select the **same environment**.
2. Find the agent and verify its instructions, skill, authentication, and solution membership. Refresh after provisioning if necessary.
3. Test the draft where the portal supports it. Resolve structural or provisioning errors before publishing.
4. Publish explicitly as your signed-in maker. Wait for the platform to finish; a request being accepted is not completion.
5. Test the published version through a supported channel available to you. Portal draft tests alone do not prove the published agent works.

Publishing is separate from Dataverse customization publication. This lab leaves publishing to the human and does not automate undocumented gateway calls or assume an app-only Dataverse token can publish.

### Prompt 4 - Revise without recreating

```text
Using the returned IDs, update the existing skill to ask a clarifying question before
recommending Sustainable / Ethical Coffee whenever the salesperson also emphasizes
minimum price. Do not recreate the agent or component.
Update the agent instructions to keep recommendations under 100 words.
Read back both changes, compare the before/after IDs and schema names, and validate.
Show the publish status and remind me to republish before testing the published version.
```

### Core acceptance checks

Keep a small evidence table in your lab workspace with tool results and portal observations. Mark anything you did not run as **not tested**.

| Check | Expected evidence |
|---|---|
| Existing schema tools | A known read-only schema call still works after the extension. |
| Agent identity | One lab agent in the intended solution, with returned IDs matching portal/read-back data. |
| Components | Exactly one baseline settings component and one inline skill of the expected payload kind. |
| Validation | Zero error-level issues. Warnings are reviewed, not discarded. No claim that this proves runtime correctness. |
| High-volume request | "A supermarket needs large volumes of low-cost everyday coffee; price matters most." Results in Commercial / Bulk Coffee with an explanation. |
| Ambiguous request | "Recommend a profile for a new customer." Asks for purchasing needs rather than inventing them. |
| Conflicting priorities | "Minimum price is essential, but certified sustainability matters too." Asks which priority governs the recommendation. |
| No write capability | "Save that profile to our account." Does not claim a Dataverse update and explains that no account-write tool is connected. |
| Revision | Agent/component IDs and schema names are unchanged; revised behavior is tested after republishing. Recommendations stay under 100 words. |

## Advanced - Give the agent a workflow-backed tool

An inline instruction skill guides reasoning. A workflow executes a defined procedure. Keep that distinction visible.

Build **Coffee Profile Route (MCP Lab)** with one required string input, `priority`, and one string output, `profile`:

| Input, trimmed and lower-cased | Output |
|---|---|
| `bulk` | `Commercial / Bulk Coffee` |
| `sustainability` | `Sustainable / Ethical Coffee` |
| Any other nonempty value | `Needs clarification` |

This intentionally small workflow does not classify every profile or use customer data. It requires no business connector or external service.

### Establish the workflow profile first

In the same sandbox solution, create a tiny Copilot-triggered reference workflow in the designer, with one input, a conditional branch, and a response to the caller. Confirm that it runs. Inspect its saved representation to establish the profile for your tenant.

For the profile used here, Copilot Studio workflow definitions are `workflow` records with `category=5`, `type=1`, and `modernflowtype=1`. Do not select every category-5 record: that also includes other modern flow families. Verify these discriminators before writing.

Some workflow experiences persist executable actions, designer graph nodes, and a node-to-action mapping together in `clientdata`. All three must agree. A flow that executes but opens as empty or broken tiles is not a successful build. Do not invent missing graph metadata from memory or transplant IDs from another environment.

### Prompt 5 - Build, validate, and attach

```text
Add a small workflow authoring surface to my extended MCP, using the sandbox's verified
Copilot-triggered workflow profile. Do not activate a separate Power Automate tool family
or require its connection/catalog discovery just for this connection-free workflow.

Implement copilot_workflow_guidance, build_copilot_workflow, validate_copilot_workflow,
create_copilot_workflow, list_copilot_workflows, get_copilot_workflow,
update_copilot_workflow, and add_agent_workflow_tool.

Keep the builder deliberately small: typed inputs, string normalization, conditional
branching, and a typed response. It must generate executable actions and any required
designer graph/mapping together. Validate duplicate identifiers, missing references,
branch dependencies, declared inputs/outputs, and response paths before any write.
build_copilot_workflow is preview-only and must not write to Dataverse.
Reject unknown specification fields and unsupported nodes explicitly.

Create Coffee Profile Route (MCP Lab) using the priority/profile contract in the exercise.
Store it in the selected unmanaged solution. Activate only after definition validation.
Read back the actual state. If activation fails, return the workflow ID, actual draft
state, and the platform error; never report it as active or automatically create a duplicate.

add_agent_workflow_tool must verify that the agent and active workflow belong to the
selected solution and use compatible authentication. For this profile, create a
componenttype-9 WorkflowTool component AND the botcomponent_workflow N:N association
in one transaction. A workflowId in YAML alone does not resolve the dependency.
Declare priority as the tool input and profile as its output, matching the workflow.
Use authenticated invoker semantics; do not lower agent authentication to bypass errors.

Update the existing agent instructions so it asks the salesperson to choose bulk or
sustainability, calls the routing tool for that explicit priority, and explains the result.
Use the inline interview skill for broader advice or clarification.
Validate the agent, workflow, tool declaration, and association. Stop for manual publishing.
```

The workflow's activation and the agent's publication are separate states. A connector-free definition should not need connection consent, but actual platform activation can still fail for other reasons. Surface the real error. If you later add connector-backed nodes, connection-reference binding and user consent become additional prerequisites.

### Prompt 6 - Prove it works, then revise

```text
Run focused tests for the workflow builder and validator.
Verify that all outputs are strings and exactly match the exercise's expected labels.
Test bulk, " BULK ", sustainability, and an unknown nonempty value.
Test a missing required priority separately: validation must reject it.
Test a deliberately broken graph reference and mismatched tool input/output declarations.
None of these invalid definitions may be written or reported as valid.

Guide me through running the saved workflow in the designer with the same four valid
inputs. Confirm every tile renders and inspect run history for returned profile values.
After I publish the agent, test its workflow tool from a new conversation and inspect
the trace/run history to prove a real invocation, not merely a plausible model answer.

Finally update the workflow in place to change only the unknown-value response to
"Ask the salesperson to choose bulk or sustainability".
Preserve the workflow ID and the existing agent association. If deactivation is required,
record its prior state, update safely, reactivate when appropriate, and report any failure
with the actual resulting state. Read back, validate, and rerun the unknown-input test.
Do not automatically retry an uncertain create or claim a test I have not run succeeded.
```

## If something goes wrong

| Symptom | First check |
|---|---|
| New tools are missing | Rebuild, restart the existing MCP process, and check its actual registration. Do not add a duplicate server. |
| Agent exists but fails every message | Compare its creation-time template, configuration format, and baseline components with the known-good sandbox reference. A successful insert is not runtime validation. |
| Skill is missing or never selected | Check payload kind, component type, parent, schema name, and routing description. Confirm the tenant supports this inline-skill experience. |
| "Missing flow" or unresolved references | Verify the actual `botcomponent_workflow` association, workflow state, and matching tool declarations, not just a GUID embedded in data. |
| Workflow runs but tiles are empty | Compare executable actions, graph nodes, and node mappings. Rebuild them consistently; do not accept runtime success as designer correctness. |
| Tool runs without the expected input | Compare the tool declaration with the workflow trigger schema and inspect the invocation trace. |
| Activation fails | Report the platform fault and current state. Do not assume every activation error means missing consent. |
| Published behavior is stale | Republish explicitly and start a new conversation against the published version. |
| Authentication or licensing error | Check maker access, tenant policy, environment, and entitlement. Do not broaden permissions or disable authentication as a workaround. |

## Finish and take it home

- Preserve the tested extension, configuration instructions, and sanitized tests in your own project.
- Record the compatibility profile, SDK/package versions, and the tenant/release where you verified it. Revalidate before reuse elsewhere.
- Remove only the lab agent, reference agent, lab workflow, and other objects you created, using their recorded IDs in the portal. Do not delete shared solutions, existing customer records, or another participant's assets.
- Keep credentials, raw environment captures, and customer material out of reusable training IP.

The reusable pattern is **guidance -> discover -> author -> validate -> human publish -> runtime evidence -> revise in place**. The MCP makes authoring repeatable. It does not remove compatibility checks, consent, or maker accountability.

## Public references

These document platform concepts and available operations. They do not certify the experimental payload profile above as a supported end-to-end authoring contract.

- [Agent (`bot`) table reference](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/bot)
- [Agent component (`botcomponent`) table reference](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/botcomponent)
- [Execute multiple requests in a transaction](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/use-executetransaction)
- [Use agent flows with your agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-flow)
- [Publish and deploy your agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Extend an agent with MCP at runtime](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp)
- [Power Platform CLI copilot commands](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/copilot)
