# Optional maker reference: guided Power Platform builds

**This is not the core HVE course.** Start with the [HVE orientation](../START-HERE.md) to learn how to use Squad to guide development. These recipes support an optional, separately prepared implementation extension.

The current core first decides features and schemas from client evidence. Do not attach these older example blueprints as the required answer or use their code/property drills as core assessment. Reconcile any chosen implementation example with the reviewed decision pack.

[Course](../README.md) | [Your training handoff card](training-handoff.md)

**You do not need previous Power Platform development experience for the guided path.** You do need a work account, the facilitator-prepared training resources and permission to use them. If a required resource is missing, ask the facilitator. Do not try to become a tenant administrator to finish a lab.

## What you are doing, and where

Think of this as three connected jobs:

| Job | Where you work | What you do |
|---|---|---|
| Understand and plan | **Cowork with HVE Squad** | Attach the scenario and recipe, ask the lab's prompts, inspect recommendations and make human decisions |
| Build and try | **A Power Platform browser tool**, sometimes a prepared desktop workspace | Follow the numbered recipe; create or change the training solution and run its tests |
| Review and improve | **Back in Cowork** | Attach your actual observations, ask HVE to review them and package the reusable offering |

Cowork does not automatically operate the Power Apps designer. A plan is not an app. You will switch windows; each recipe tells you when.

**An example:** Cowork recommends a field called Category. You open Power Apps, add the Category column using the recipe, save a Repair request and observe the record. You return that observation to Cowork. These are three different actions.

## Words you need before starting

| Term | In this course |
|---|---|
| Environment | A named training workspace in Power Platform. Check its name before changing anything. Not the same as your Cowork folder. |
| Solution | A package holding related tables, apps and flows so they can move together. |
| Dataverse | The service storing the app's business records. |
| Table / row / column | A collection such as Requests / one request / one field such as Category. |
| Model-driven app | An app whose screens are generated around Dataverse tables, forms and lists. |
| Canvas app | An app where you arrange the screen controls, often for a phone. |
| Form / view | A screen for one record / a list of records, possibly filtered. |
| Flow / trigger / action | An automation / what starts it / one step it performs. |
| Connection | The signed-in account a connector uses. Never paste its password into a prompt. |
| Lookup | A column linking to a row in another table, such as the request's demand. |
| Choice | A field with a fixed menu of allowed values, such as Repair or Delivery. |
| Data type / schema | What a field can contain, such as text or a whole number / the agreed list of tables, fields and their types. |
| Display name / logical name | The readable label in a screen / the internal identifier sometimes required in an expression. Copy the latter from the prepared mapping, not by guessing. |
| CSV / JSON | A text table you can open in a spreadsheet / structured text with named fields, often shown between braces. A JSON example is data, not a command to execute. |
| Unique key / replay | A database rule preventing duplicate identifiers / trying the same logical request again after a retry or interruption. |
| API or custom action | A reviewed operation another component can call, such as Create Request. Selecting it is not the same as authoring its server code. |
| Environment variable | A named configuration value supplied for a particular target, such as its training notification destination. |
| Power Query | The report's data-preparation editor. Lab 09 supplies the transformation text so you can inspect and run it without writing it from memory. |
| Publish | Make a saved app/configuration version runnable in the selected environment. It does not necessarily mean public Internet access. |
| Advanced component | A server rule, identity configuration or code starter prepared by the facilitator. You use and test it; you are not expected to invent it. |

You can return to this table whenever a term appears. Experienced participants can skip the orientation, but must still check the handoff card.

## Before you open the first prompt

1. Open [your training handoff card](training-handoff.md). Ask the facilitator for a completed copy.
2. Confirm the exact environment name and the lab resources marked **ready**. A blank URL or "we will build that later" is not ready.
3. Open [Power Apps](https://make.powerapps.com/) in a browser and sign in with the training account.
4. Use the environment selector near the top right. Choose the name on the card. If it is absent, stop and ask the facilitator.
5. Open Cowork separately. Use the installed HVE Squad plugin and select the approved OneDrive/SharePoint training folder. The [Cowork workflow](../delivery-playbook.md) explains project selection and blockers.
6. Download the scenario files linked in the lab. Put copies in your chosen project through Cowork's approved file interface. Keep the originals unchanged.
7. Attach the lab guide **and its guided build recipe**. Do not assume HVE can follow a local browser link or read a file on your laptop without attachment.

Paste in Cowork:

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / General course setup, retrieval or guidance request
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

GUIDE CONTEXT: guided-builds/README.md
# Optional maker reference: guided Power Platform builds

**This is not the core HVE course.** Start with the [HVE orientation](../START-HERE.md) to learn how to use Squad to guide development. These recipes support an optional, separately prepared implementation extension.

The current core first decides features and schemas from client evidence. Do not attach these older example blueprints as the required answer or use their code/property drills as core assessment. Reconcile any chosen implementation example with the reviewed decision pack.

[Course](../README.md) | [Your training handoff card](training-handoff.md)

**You do not need previous Power Platform development experience for the guided path.** You do need a work account, the facilitator-prepared training resources and permission to use them. If a required resource is missing, ask the facilitator. Do not try to become a tenant administrator to finish a lab.

## What you are doing, and where

Think of this as three connected jobs:

| Job | Where you work | What you do |
|---|---|---|
| Understand and plan | **Cowork with HVE Squad** | Attach the scenario and recipe, ask the lab's prompts, inspect recommendations and make human decisions |
| Build and try | **A Power Platform browser tool**, sometimes a prepared desktop workspace | Follow the numbered recipe; create or change the training solution and run its tests |
| Review and improve | **Back in Cowork** | Attach your actual observations, ask HVE to review them and package the reusable offering |

Cowork does not automatically operate the Power Apps designer. A plan is not an app. You will switch windows; each recipe tells you when.

**An example:** Cowork recommends a field called Category. You open Power Apps, add the Category column using the recipe, save a Repair request and observe the record. You return that observation to Cowork. These are three different actions.

## Words you need before starting

| Term | In this course |
|---|---|
| Environment | A named training workspace in Power Platform. Check its name before changing anything. Not the same as your Cowork folder. |
| Solution | A package holding related tables, apps and flows so they can move together. |
| Dataverse | The service storing the app's business records. |
| Table / row / column | A collection such as Requests / one request / one field such as Category. |
| Model-driven app | An app whose screens are generated around Dataverse tables, forms and lists. |
| Canvas app | An app where you arrange the screen controls, often for a phone. |
| Form / view | A screen for one record / a list of records, possibly filtered. |
| Flow / trigger / action | An automation / what starts it / one step it performs. |
| Connection | The signed-in account a connector uses. Never paste its password into a prompt. |
| Lookup | A column linking to a row in another table, such as the request's demand. |
| Choice | A field with a fixed menu of allowed values, such as Repair or Delivery. |
| Data type / schema | What a field can contain, such as text or a whole number / the agreed list of tables, fields and their types. |
| Display name / logical name | The readable label in a screen / the internal identifier sometimes required in an expression. Copy the latter from the prepared mapping, not by guessing. |
| CSV / JSON | A text table you can open in a spreadsheet / structured text with named fields, often shown between braces. A JSON example is data, not a command to execute. |
| Unique key / replay | A database rule preventing duplicate identifiers / trying the same logical request again after a retry or interruption. |
| API or custom action | A reviewed operation another component can call, such as Create Request. Selecting it is not the same as authoring its server code. |
| Environment variable | A named configuration value supplied for a particular target, such as its training notification destination. |
| Power Query | The report's data-preparation editor. Lab 09 supplies the transformation text so you can inspect and run it without writing it from memory. |
| Publish | Make a saved app/configuration version runnable in the selected environment. It does not necessarily mean public Internet access. |
| Advanced component | A server rule, identity configuration or code starter prepared by the facilitator. You use and test it; you are not expected to invent it. |

You can return to this table whenever a term appears. Experienced participants can skip the orientation, but must still check the handoff card.

## Before you open the first prompt

1. Open [your training handoff card](training-handoff.md). Ask the facilitator for a completed copy.
2. Confirm the exact environment name and the lab resources marked **ready**. A blank URL or "we will build that later" is not ready.
3. Open [Power Apps](https://make.powerapps.com/) in a browser and sign in with the training account.
4. Use the environment selector near the top right. Choose the name on the card. If it is absent, stop and ask the facilitator.
5. Open Cowork separately. Use the installed HVE Squad plugin and select the approved OneDrive/SharePoint training folder. The [Cowork workflow](../delivery-playbook.md) explains project selection and blockers.
6. Download the scenario files linked in the lab. Put copies in your chosen project through Cowork's approved file interface. Keep the originals unchanged.
7. Attach the lab guide **and its guided build recipe**. Do not assume HVE can follow a local browser link or read a file on your laptop without attachment.

Paste in Cowork:



The installed plugin handles the technical run/status protocol. You do not need to type raw MCP calls or obtain administrator privileges.

## A. Create or open a solution

The recipe states **create** or **open a prepared solution**. Do not create another if the facilitator already supplied it.

1. In Power Apps, choose **Solutions** in the left menu. If missing, choose **More** and then **Solutions**.
2. To create: choose **New solution**. Enter the exact Display name from your recipe. Select the training publisher named on the handoff card. Leave Version at `1.0.0.0` unless the recipe says otherwise. Choose **Create**.
3. To open: select the exact supplied solution name. Check the environment name again.
4. You should see a component list. It can be empty for a new solution. It is not an error that no app appears yet.

**Check before continuing:** say the difference between your Cowork project folder and this solution. If uncertain, ask Cowork to explain the two using the current lab.

## B. Create a table and its columns

Use the recipe's table, not an improvised schema generated in conversation.

1. Inside the solution choose **New > Table**. In experiences offering several creation methods, choose the manual/advanced-properties path.
2. Enter the table's Display name and plural name. Set its **primary name column** to the name given in the recipe. This is the readable label, not the row's hidden unique identifier.
3. Keep other advanced settings at their prepared defaults. Choose **Create** or **Save**.
4. Open the table. Choose **Columns > New column**. Enter the Display name and select the recipe's Data type.
5. For a Choice, choose a local choice unless the recipe supplies a shared one, then enter each label exactly. For a Lookup, choose the Related table. For Number, use Whole number or Decimal as stated.
6. Save the column. Repeat for the remaining rows in the recipe's column table.
7. Do not replace built-in **Owner**, **Status** or **Status Reason**. Recipes use distinct names such as **Service stage** and **Assigned to**. Built-in Owner is normally populated even when a business assignment is missing.

If the designer differs, do not guess a different data model. Show the screen text to the facilitator or ask Cowork for the equivalent operation, then confirm the result matches the recipe.

## C. Put columns on a form and create a list

1. Open the table's **Forms** area and its **Main** form.
2. In the form designer, locate the table-column list. Drag the recipe's columns onto the form in the listed order.
3. Choose **Save and publish**. Close the form designer.
4. Open **Views**. Open the Active view, or choose **New view** when the recipe requests a named filtered list.
5. Add the listed columns. To filter, use **Edit filters**, choose the column/operator/value from the recipe, then save and publish.
6. A field existing in the table does not mean it is already visible on the form or list. Check both.

## D. Make the model-driven app runnable

1. Inside the solution choose **New > App > Model-driven app**.
2. Enter the recipe's app name and choose **Create**.
3. Choose **Add page > Dataverse table**. Select the recipe's tables and choose **Add**. Keep **Show in navigation** enabled.
4. Choose **Save**, then **Publish**.
5. Choose **Play**, or return to **Apps**, find the app and choose Play.
6. Open a table page, choose **New**, enter a sample row from the recipe and choose **Save**.

**You should see:** the saved record in the app's list after refresh. Copy its readable reference into your receipt. Do not treat the designer preview as evidence of a successful save.

## E. Work with a flow

A recipe gives the trigger and action names. Do not choose between several architectures.

1. Open [Power Automate](https://make.powerautomate.com/) in another tab and select the same environment.
2. Open **Solutions**, select the training solution, then choose **New > Automation > Cloud flow**. Select Instant or Automated as the recipe specifies.
3. Choose the named trigger, then add actions using **+**.
4. Enter literal values exactly. When a step says **dynamic content**, use the designer's value picker to select an earlier field rather than typing the field name as text.
5. Save. Choose **Test** and follow the recipe's test input.
6. Open the run history entry. Expand the relevant action and compare its actual inputs/outputs with the recipe. Do not share tokens or personal data with Cowork.

If an expected custom action or prepared child flow is absent, stop at that step. You cannot recreate a reviewed server rule by renaming an ordinary action.

## F. Ask for help without handing over the whole tenant



If the next action needs a facilitator, Cowork should say so. That is a clear handoff, not a learner failure.

## Choose the build recipe

1. [AI CoE and first service](01-ai-coe-launch.md)
2. [Order intake](02-order-intake.md)
3. [Process mining and reminder](03-process-to-value.md)
4. [Field inspection app](04-field-inspections.md)
5. [Supplier onboarding](05-supplier-onboarding.md)
6. [Service-agent transaction](06-service-agent.md)
7. [Legacy bridge](07-legacy-bridge.md)
8. [Dispatch code app](08-dispatch-workbench.md)
9. [Commercial leakage](09-revenue-leakage.md)
10. [Second-client delivery](10-repeatable-accelerator.md)

**Reference:** [Microsoft's first model-driven app tutorial](https://learn.microsoft.com/power-apps/maker/model-driven-apps/build-first-model-driven-app). The course recipe supplies the Zava-specific basis; the product tutorial explains the underlying operation.

This is a general request, not an unspecified client-design task. If the task refers to an attached interview, selected lab, actual output, handoff or bracketed placeholder without supplying its value, ask me for that exact input first. Do not assume attachments exist or generate a client design without its evidence. The numbered exercise prompts include their full scenarios.
[END STANDALONE CONTEXT]

I am following the beginner guided path. I have no assumed Power Platform
development knowledge. Use the attached lab, recipe and source files as
the fixed training baseline. Confirm which files you can actually read.
Explain unfamiliar terms before using them. Do not silently redesign
the recipe or invent environment resources.
For each teaching step tell me whether I work in Cowork or in a named
Power Platform tool, what I should enter, and what I should observe.
Run HVE work through the installed project's normal entry point.
Do not claim that guidance changed or deployed a platform component.
```

The installed plugin handles the technical run/status protocol. You do not need to type raw MCP calls or obtain administrator privileges.

## A. Create or open a solution

The recipe states **create** or **open a prepared solution**. Do not create another if the facilitator already supplied it.

1. In Power Apps, choose **Solutions** in the left menu. If missing, choose **More** and then **Solutions**.
2. To create: choose **New solution**. Enter the exact Display name from your recipe. Select the training publisher named on the handoff card. Leave Version at `1.0.0.0` unless the recipe says otherwise. Choose **Create**.
3. To open: select the exact supplied solution name. Check the environment name again.
4. You should see a component list. It can be empty for a new solution. It is not an error that no app appears yet.

**Check before continuing:** say the difference between your Cowork project folder and this solution. If uncertain, ask Cowork to explain the two using the current lab.

## B. Create a table and its columns

Use the recipe's table, not an improvised schema generated in conversation.

1. Inside the solution choose **New > Table**. In experiences offering several creation methods, choose the manual/advanced-properties path.
2. Enter the table's Display name and plural name. Set its **primary name column** to the name given in the recipe. This is the readable label, not the row's hidden unique identifier.
3. Keep other advanced settings at their prepared defaults. Choose **Create** or **Save**.
4. Open the table. Choose **Columns > New column**. Enter the Display name and select the recipe's Data type.
5. For a Choice, choose a local choice unless the recipe supplies a shared one, then enter each label exactly. For a Lookup, choose the Related table. For Number, use Whole number or Decimal as stated.
6. Save the column. Repeat for the remaining rows in the recipe's column table.
7. Do not replace built-in **Owner**, **Status** or **Status Reason**. Recipes use distinct names such as **Service stage** and **Assigned to**. Built-in Owner is normally populated even when a business assignment is missing.

If the designer differs, do not guess a different data model. Show the screen text to the facilitator or ask Cowork for the equivalent operation, then confirm the result matches the recipe.

## C. Put columns on a form and create a list

1. Open the table's **Forms** area and its **Main** form.
2. In the form designer, locate the table-column list. Drag the recipe's columns onto the form in the listed order.
3. Choose **Save and publish**. Close the form designer.
4. Open **Views**. Open the Active view, or choose **New view** when the recipe requests a named filtered list.
5. Add the listed columns. To filter, use **Edit filters**, choose the column/operator/value from the recipe, then save and publish.
6. A field existing in the table does not mean it is already visible on the form or list. Check both.

## D. Make the model-driven app runnable

1. Inside the solution choose **New > App > Model-driven app**.
2. Enter the recipe's app name and choose **Create**.
3. Choose **Add page > Dataverse table**. Select the recipe's tables and choose **Add**. Keep **Show in navigation** enabled.
4. Choose **Save**, then **Publish**.
5. Choose **Play**, or return to **Apps**, find the app and choose Play.
6. Open a table page, choose **New**, enter a sample row from the recipe and choose **Save**.

**You should see:** the saved record in the app's list after refresh. Copy its readable reference into your receipt. Do not treat the designer preview as evidence of a successful save.

## E. Work with a flow

A recipe gives the trigger and action names. Do not choose between several architectures.

1. Open [Power Automate](https://make.powerautomate.com/) in another tab and select the same environment.
2. Open **Solutions**, select the training solution, then choose **New > Automation > Cloud flow**. Select Instant or Automated as the recipe specifies.
3. Choose the named trigger, then add actions using **+**.
4. Enter literal values exactly. When a step says **dynamic content**, use the designer's value picker to select an earlier field rather than typing the field name as text.
5. Save. Choose **Test** and follow the recipe's test input.
6. Open the run history entry. Expand the relevant action and compare its actual inputs/outputs with the recipe. Do not share tokens or personal data with Cowork.

If an expected custom action or prepared child flow is absent, stop at that step. You cannot recreate a reviewed server rule by renaming an ordinary action.

## F. Ask for help without handing over the whole tenant

```text
[BEGIN STANDALONE CONTEXT]
STANDALONE-1.0 / General course setup, retrieval or guidance request
This request includes its static teaching context below. Do not assume access to course pages, local files, attachments or earlier chat. Source filenames and DS/RULE IDs identify the included evidence, not documents you must fetch.

Use the installed HVE Squad Cowork plugin and the actual authorized selected project. Confirm project identity before creating/adopting a project or starting managed work. New managed work uses the normal squad_run entry point; the server owns routing. Follow an existing working run rather than duplicating it. Do not invent project/run/question/artifact IDs, links or approvals.

If the task depends on reviewed needs, selected features, a preferred model, a handoff, a real run or runtime observations: retrieve the actual verified originals in the selected project, showing their real provenance and the human choices. Earlier exercise content labels can help locate substantive originals through project START-HERE.md and library/deliverables.md; labels echoed in journals are not deliverables. If inputs are absent, ambiguous or unaccepted, list precisely what is missing and ask me to supply the actual original/reference or make the needed workshop decision. Pause dependent work. Do not infer selected scope from candidate proposals or invent earlier acceptance. A missing learner decision cannot be filled by static scenario data.

The current task below defines the decision step. Use interview facts and applicable rules as evidence. Candidate proposals, future changes and supplied design-review findings are fiction to inspect, not approved first-release requirements or executed tests. Unverified licensing/capability/access facts remain open. Core work is feature/schema decisions, not code or designer repairs. Optional maker work requires a separately reviewed design, prepared environment/handoff and actual observations; an example recipe is not proof those exist.

Keep the requested output label in substantive original content. Preserve server-owned canonical paths. Return verified original links and distinguish run outcome, mirror state and document acceptance. Content labels are not filenames or real IDs. Workshop choices do not release operator gates. No production writes, real recipients, ERP actions, external publication or claimed deployment are authorized.

GUIDE CONTEXT: guided-builds/README.md
# Optional maker reference: guided Power Platform builds

**This is not the core HVE course.** Start with the [HVE orientation](../START-HERE.md) to learn how to use Squad to guide development. These recipes support an optional, separately prepared implementation extension.

The current core first decides features and schemas from client evidence. Do not attach these older example blueprints as the required answer or use their code/property drills as core assessment. Reconcile any chosen implementation example with the reviewed decision pack.

[Course](../README.md) | [Your training handoff card](training-handoff.md)

**You do not need previous Power Platform development experience for the guided path.** You do need a work account, the facilitator-prepared training resources and permission to use them. If a required resource is missing, ask the facilitator. Do not try to become a tenant administrator to finish a lab.

## What you are doing, and where

Think of this as three connected jobs:

| Job | Where you work | What you do |
|---|---|---|
| Understand and plan | **Cowork with HVE Squad** | Attach the scenario and recipe, ask the lab's prompts, inspect recommendations and make human decisions |
| Build and try | **A Power Platform browser tool**, sometimes a prepared desktop workspace | Follow the numbered recipe; create or change the training solution and run its tests |
| Review and improve | **Back in Cowork** | Attach your actual observations, ask HVE to review them and package the reusable offering |

Cowork does not automatically operate the Power Apps designer. A plan is not an app. You will switch windows; each recipe tells you when.

**An example:** Cowork recommends a field called Category. You open Power Apps, add the Category column using the recipe, save a Repair request and observe the record. You return that observation to Cowork. These are three different actions.

## Words you need before starting

| Term | In this course |
|---|---|
| Environment | A named training workspace in Power Platform. Check its name before changing anything. Not the same as your Cowork folder. |
| Solution | A package holding related tables, apps and flows so they can move together. |
| Dataverse | The service storing the app's business records. |
| Table / row / column | A collection such as Requests / one request / one field such as Category. |
| Model-driven app | An app whose screens are generated around Dataverse tables, forms and lists. |
| Canvas app | An app where you arrange the screen controls, often for a phone. |
| Form / view | A screen for one record / a list of records, possibly filtered. |
| Flow / trigger / action | An automation / what starts it / one step it performs. |
| Connection | The signed-in account a connector uses. Never paste its password into a prompt. |
| Lookup | A column linking to a row in another table, such as the request's demand. |
| Choice | A field with a fixed menu of allowed values, such as Repair or Delivery. |
| Data type / schema | What a field can contain, such as text or a whole number / the agreed list of tables, fields and their types. |
| Display name / logical name | The readable label in a screen / the internal identifier sometimes required in an expression. Copy the latter from the prepared mapping, not by guessing. |
| CSV / JSON | A text table you can open in a spreadsheet / structured text with named fields, often shown between braces. A JSON example is data, not a command to execute. |
| Unique key / replay | A database rule preventing duplicate identifiers / trying the same logical request again after a retry or interruption. |
| API or custom action | A reviewed operation another component can call, such as Create Request. Selecting it is not the same as authoring its server code. |
| Environment variable | A named configuration value supplied for a particular target, such as its training notification destination. |
| Power Query | The report's data-preparation editor. Lab 09 supplies the transformation text so you can inspect and run it without writing it from memory. |
| Publish | Make a saved app/configuration version runnable in the selected environment. It does not necessarily mean public Internet access. |
| Advanced component | A server rule, identity configuration or code starter prepared by the facilitator. You use and test it; you are not expected to invent it. |

You can return to this table whenever a term appears. Experienced participants can skip the orientation, but must still check the handoff card.

## Before you open the first prompt

1. Open [your training handoff card](training-handoff.md). Ask the facilitator for a completed copy.
2. Confirm the exact environment name and the lab resources marked **ready**. A blank URL or "we will build that later" is not ready.
3. Open [Power Apps](https://make.powerapps.com/) in a browser and sign in with the training account.
4. Use the environment selector near the top right. Choose the name on the card. If it is absent, stop and ask the facilitator.
5. Open Cowork separately. Use the installed HVE Squad plugin and select the approved OneDrive/SharePoint training folder. The [Cowork workflow](../delivery-playbook.md) explains project selection and blockers.
6. Download the scenario files linked in the lab. Put copies in your chosen project through Cowork's approved file interface. Keep the originals unchanged.
7. Attach the lab guide **and its guided build recipe**. Do not assume HVE can follow a local browser link or read a file on your laptop without attachment.

Paste in Cowork:



The installed plugin handles the technical run/status protocol. You do not need to type raw MCP calls or obtain administrator privileges.

## A. Create or open a solution

The recipe states **create** or **open a prepared solution**. Do not create another if the facilitator already supplied it.

1. In Power Apps, choose **Solutions** in the left menu. If missing, choose **More** and then **Solutions**.
2. To create: choose **New solution**. Enter the exact Display name from your recipe. Select the training publisher named on the handoff card. Leave Version at `1.0.0.0` unless the recipe says otherwise. Choose **Create**.
3. To open: select the exact supplied solution name. Check the environment name again.
4. You should see a component list. It can be empty for a new solution. It is not an error that no app appears yet.

**Check before continuing:** say the difference between your Cowork project folder and this solution. If uncertain, ask Cowork to explain the two using the current lab.

## B. Create a table and its columns

Use the recipe's table, not an improvised schema generated in conversation.

1. Inside the solution choose **New > Table**. In experiences offering several creation methods, choose the manual/advanced-properties path.
2. Enter the table's Display name and plural name. Set its **primary name column** to the name given in the recipe. This is the readable label, not the row's hidden unique identifier.
3. Keep other advanced settings at their prepared defaults. Choose **Create** or **Save**.
4. Open the table. Choose **Columns > New column**. Enter the Display name and select the recipe's Data type.
5. For a Choice, choose a local choice unless the recipe supplies a shared one, then enter each label exactly. For a Lookup, choose the Related table. For Number, use Whole number or Decimal as stated.
6. Save the column. Repeat for the remaining rows in the recipe's column table.
7. Do not replace built-in **Owner**, **Status** or **Status Reason**. Recipes use distinct names such as **Service stage** and **Assigned to**. Built-in Owner is normally populated even when a business assignment is missing.

If the designer differs, do not guess a different data model. Show the screen text to the facilitator or ask Cowork for the equivalent operation, then confirm the result matches the recipe.

## C. Put columns on a form and create a list

1. Open the table's **Forms** area and its **Main** form.
2. In the form designer, locate the table-column list. Drag the recipe's columns onto the form in the listed order.
3. Choose **Save and publish**. Close the form designer.
4. Open **Views**. Open the Active view, or choose **New view** when the recipe requests a named filtered list.
5. Add the listed columns. To filter, use **Edit filters**, choose the column/operator/value from the recipe, then save and publish.
6. A field existing in the table does not mean it is already visible on the form or list. Check both.

## D. Make the model-driven app runnable

1. Inside the solution choose **New > App > Model-driven app**.
2. Enter the recipe's app name and choose **Create**.
3. Choose **Add page > Dataverse table**. Select the recipe's tables and choose **Add**. Keep **Show in navigation** enabled.
4. Choose **Save**, then **Publish**.
5. Choose **Play**, or return to **Apps**, find the app and choose Play.
6. Open a table page, choose **New**, enter a sample row from the recipe and choose **Save**.

**You should see:** the saved record in the app's list after refresh. Copy its readable reference into your receipt. Do not treat the designer preview as evidence of a successful save.

## E. Work with a flow

A recipe gives the trigger and action names. Do not choose between several architectures.

1. Open [Power Automate](https://make.powerautomate.com/) in another tab and select the same environment.
2. Open **Solutions**, select the training solution, then choose **New > Automation > Cloud flow**. Select Instant or Automated as the recipe specifies.
3. Choose the named trigger, then add actions using **+**.
4. Enter literal values exactly. When a step says **dynamic content**, use the designer's value picker to select an earlier field rather than typing the field name as text.
5. Save. Choose **Test** and follow the recipe's test input.
6. Open the run history entry. Expand the relevant action and compare its actual inputs/outputs with the recipe. Do not share tokens or personal data with Cowork.

If an expected custom action or prepared child flow is absent, stop at that step. You cannot recreate a reviewed server rule by renaming an ordinary action.

## F. Ask for help without handing over the whole tenant



If the next action needs a facilitator, Cowork should say so. That is a clear handoff, not a learner failure.

## Choose the build recipe

1. [AI CoE and first service](01-ai-coe-launch.md)
2. [Order intake](02-order-intake.md)
3. [Process mining and reminder](03-process-to-value.md)
4. [Field inspection app](04-field-inspections.md)
5. [Supplier onboarding](05-supplier-onboarding.md)
6. [Service-agent transaction](06-service-agent.md)
7. [Legacy bridge](07-legacy-bridge.md)
8. [Dispatch code app](08-dispatch-workbench.md)
9. [Commercial leakage](09-revenue-leakage.md)
10. [Second-client delivery](10-repeatable-accelerator.md)

**Reference:** [Microsoft's first model-driven app tutorial](https://learn.microsoft.com/power-apps/maker/model-driven-apps/build-first-model-driven-app). The course recipe supplies the Zava-specific basis; the product tutorial explains the underlying operation.

This is a general request, not an unspecified client-design task. If the task refers to an attached interview, selected lab, actual output, handoff or bracketed placeholder without supplying its value, ask me for that exact input first. Do not assume attachments exist or generate a client design without its evidence. The numbered exercise prompts include their full scenarios.
[END STANDALONE CONTEXT]

I am at guided recipe [lab and step]. The tool is [name].
I expected [exact screen/result]. I observe [redacted screen text/error].
The handoff card says [relevant prepared component/version].
Explain one next action at my level. Do not invent a successful run,
change the schema, widen permissions or tell me to bypass a guard.
```

If the next action needs a facilitator, Cowork should say so. That is a clear handoff, not a learner failure.

## Choose the build recipe

1. [AI CoE and first service](01-ai-coe-launch.md)
2. [Order intake](02-order-intake.md)
3. [Process mining and reminder](03-process-to-value.md)
4. [Field inspection app](04-field-inspections.md)
5. [Supplier onboarding](05-supplier-onboarding.md)
6. [Service-agent transaction](06-service-agent.md)
7. [Legacy bridge](07-legacy-bridge.md)
8. [Dispatch code app](08-dispatch-workbench.md)
9. [Commercial leakage](09-revenue-leakage.md)
10. [Second-client delivery](10-repeatable-accelerator.md)

**Reference:** [Microsoft's first model-driven app tutorial](https://learn.microsoft.com/power-apps/maker/model-driven-apps/build-first-model-driven-app). The course recipe supplies the Zava-specific basis; the product tutorial explains the underlying operation.
