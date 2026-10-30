# RFP exercise - Before the workshop

This is the prep page for the **RFP processing exercise in Copilot Cowork**. Allow about 20 minutes on your own machine the day before. If all checks pass, you walk in and start working. The exercise uses the **FC RFP Processing Cowork plugin**, a shared OneDrive or SharePoint folder, the Microsoft Learn MCP connector bundled with the plugin, and the Zava sample RFP.

> Looking for the original Microsoft Scout setup? Use [rfp-scout-setup.md](https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/aibs/dynamics/exercise/rfp-setup-overview.md) in the Dynamics lane.

[Exercise](rfp-exercise.md) | [Scenario navigator](../../m365-copilot-frontier-scenarios-app.html)

## New to Copilot Cowork?

Skim these current Microsoft guides first:

1. **[Use Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/use-cowork)** - conversations, files, cloud folders, and skills.
2. **[Use plugins with Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-plugins)** - acquire, enable, and use plugins.
3. **[Customize Copilot Cowork](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-customize)** - upload and share a custom plugin package.

Custom Cowork plugins are not supported on mobile. Use the desktop or web experience.

## What you need

- Access to **Microsoft Copilot Cowork** with a Microsoft 365 Copilot license.
- Permission from your tenant administrator to upload or use custom Cowork plugins.
- The **FC RFP Processing** Cowork plugin package from [`cowork-plugin/`](cowork-plugin/).
- A shared **SharePoint folder** for the RFP wiki, recommended for a review team, or a OneDrive folder shared with every reviewer.
- The **Zava RFP source pack** from [`test-pack/`](test-pack/).
- Every review member added to both the shared wiki folder and the Cowork plugin.

***

## The six checks

### 1. Cowork is available

Open [Microsoft Copilot](https://copilot.cloud.microsoft), select **Cowork**, and start a test conversation. If Cowork is missing, confirm your license and tenant rollout with your administrator.

### 2. Download the plugin package

Download the ready-to-install [`fc-rfp-processing-cowork.zip`](cowork-plugin/fc-rfp-processing-cowork.zip) from the plugin folder and continue to Check 3.

The package source is retained in [`cowork-plugin/appPackage/`](cowork-plugin/appPackage/). Use the supplied ZIP for the workshop; a build script is not bundled in this scenario folder.

The package contains the `rfp-processing` skill and the public Microsoft Learn MCP connector at `https://learn.microsoft.com/api/mcp`. No API key or separate connector installation is required.

### 3. Install the Cowork plugin

1. Open **Cowork**.
2. Select **+ > Customize**.
3. Open the **Plugins** tab.
4. Select **Upload plugin**.
5. Choose `fc-rfp-processing-cowork.zip`.
6. In the share dialog, choose **Only you** for a personal test or **Specific users in your organization** for the RFP review team.
7. Select **Apply**.
8. Start a new Cowork conversation, open **Sources & Skills**, and enable **FC RFP Processing**.

> **How to check:** open the plugin details. You should see the `rfp-processing` skill and the **Microsoft Learn** connector. Start a new conversation and ask, "Use FC RFP Processing to prepare an RFP." The skill should ask where the shared wiki must be created before it writes files.

If **Upload plugin** is unavailable or the package is rejected by policy, ask your Microsoft 365 administrator to upload or deploy the package. Admin deployment can target the whole organization or a specific group.

### 4. Prepare the shared wiki location

Create an empty folder for the exercise:

- **Recommended:** a SharePoint document-library folder, for example `RFPs/Zava D365 Commerce 2026`.
- **Alternative:** a OneDrive folder shared with every review member with edit access.

Copy the folder link. In Cowork you will attach it with **Add attachments > Attach cloud files and folders**, or reference it with `/` in the compose box.

> **How to check:** ask one other review member to open the folder and create or edit a harmless test file. Remove the test file after both people confirm access.

Do not use Cowork's private output folder for the exercise wiki. The team needs one live location with normal OneDrive or SharePoint permissions and version history.

### 5. Confirm the Zava source pack

The exercise reuses these four files from [`test-pack/`](test-pack/):

- `Zava - RFP D365 Commerce - Cover Document.docx`
- `Zava - RFP D365 Commerce - Appendix A.docx`
- `Zava - RFP D365 Commerce - Appendix B.docx`
- `Zava - RFP D365 Commerce - Response Form.xlsx`

Keep the originals unchanged. During the exercise you will upload copies into the shared RFP folder's `input/` directory.

### 6. Confirm the review team

Every participant who reviews the RFP needs:

1. edit access to the selected SharePoint or OneDrive folder;
2. the **FC RFP Processing** plugin available and enabled in Cowork;
3. agreement on who owns, reviews, and approves each question batch.

The skill records those assignments in `wiki/review-board.md` and the working agreement in `wiki/collaboration.md`.

***

## What if a check fails?

| Check failed | Action |
|---|---|
| Cowork is not available | Confirm the Microsoft 365 Copilot license and Cowork tenant rollout with your administrator. |
| Plugin download fails | Open [`cowork-plugin/`](cowork-plugin/) and download `fc-rfp-processing-cowork.zip` directly, or ask the facilitator. |
| Upload plugin is missing | Custom plugin upload is blocked or not enabled. Ask the tenant administrator to deploy the package. |
| Plugin is installed but does not activate | Start a new conversation, enable it in **Sources & Skills**, and use a clear RFP-processing prompt. |
| Microsoft Learn tools are unavailable | Open the plugin details and confirm the Microsoft Learn connector is enabled. Reinstall or ask the administrator to redeploy the plugin. |
| A reviewer cannot edit the wiki | Fix the SharePoint or OneDrive permissions before processing. Do not create a separate copy. |
| Zava files are missing | Download the four files from [`test-pack/`](test-pack/), or ask the facilitator. |

***

## On the day

Bring the account and machine you used for these checks. Have the shared folder link and reviewer names ready.

Open [rfp-exercise.md](rfp-exercise.md) and begin. The original Scout exercise remains available in the [Dynamics lane](https://github.com/JW-Sthlm/frontier-consultancy-kit/blob/main/aibs/dynamics/exercise/rfp-exercise.md).
