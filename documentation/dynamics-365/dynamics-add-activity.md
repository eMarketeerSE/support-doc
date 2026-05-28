# Dynamics - Add activity

The Add Activity step creates a Task or Phone Call in your Microsoft Dynamics CRM. Because a person might exist as either a Lead or a Contact in Dynamics, this step asks for your preference and uses a built-in fallback to make sure the activity is logged.

![Add Activity step configuration with Prefer Contact or Lead setting](../../../.gitbook/assets/add_activity-982x1024.png)

### Step configuration

When you add this step to a Journey, configure the following fields:

* **Subject (required):** Sets the title of the activity in Dynamics (for example, "Follow-up Call" or "Send Pricing Guide").
* **Description:** Provides additional details or notes for the person completing the task.
* **Activity Type:** Choose whether to log the activity as a **Task** or a **Phone Call**.
* **Owner (required):** Select the Dynamics user who will be assigned the activity.
* **Schedule:** Optionally set a delay for the activity (for example, "Schedule to start in 2 days").

### The "Prefer Contact or Lead" setting

This setting controls which record type eMarketeer prioritizes when searching Dynamics. If the preferred record type is not found, eMarketeer automatically searches for the alternative so the activity is not lost.

**If you select "Prefer Lead"**

* eMarketeer first searches Dynamics for a matching Lead.
* If a Lead is found, the activity is attached to the Lead.
* **Fallback:** If no active Lead is found, eMarketeer automatically searches for a matching Contact. If found, the activity is attached to the Contact.

**If you select "Prefer Contact"**

* eMarketeer first searches Dynamics for a matching Contact.
* If a Contact is found, the activity is attached to the Contact.
* **Fallback:** If no Contact is found, eMarketeer automatically searches for a matching Lead. If found, the activity is attached to the Lead.

_Note: If eMarketeer cannot find either a Lead or a Contact in Dynamics, the step is skipped and no activity is created._
