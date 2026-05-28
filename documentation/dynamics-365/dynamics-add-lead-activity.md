# Dynamics - Add Lead activity

The **Add Lead Activity** step creates a Task or Phone Call on a Lead record in Microsoft Dynamics 365 Sales. Unlike the generic Add Activity step, this one does not fall back to a Contact if no Lead is found.

![Add Lead Activity step configuration in Dynamics](../../../.gitbook/assets/add_lead_activity-1024x907.png)

## Step configuration

When you add this step to a Journey, configure the following fields:

* **Subject (required):** the title of the activity in Dynamics, for example "Follow-up Call" or "Send Pricing Guide".
* **Description:** additional details or notes for the person completing the task.
* **Activity Type:** log the activity as either a Task or a Phone Call.
* **Owner (required):** the Dynamics user assigned to the activity.
* **Schedule:** an optional delay before the activity starts, for example "Schedule to start in 2 days".

## Strict Lead matching

Because this step is designed for Leads, eMarketeer uses a strict search process:

* eMarketeer searches Dynamics exclusively for a matching Lead.
* If a Lead is found, the activity is created and attached to that Lead record.
* If no Lead is found, the step is skipped and no activity is created. eMarketeer does not attempt to find or update a Contact record.
