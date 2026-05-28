# Dynamics - Add contact activity

The Add Contact Activity step creates a Task or Phone Call on a Contact record in your Microsoft Dynamics CRM.

Unlike the generic Add Activity step, this action does not fall back to a Lead when a Contact is missing. Use it when the activity must be tied to a Dynamics Contact specifically.

## Step configuration

When you add this step to your journey, you configure the following fields:

* Subject (required): the title of the activity in Dynamics.
* Description: additional details or notes for the person completing the task.
* Activity Type: log the activity as a Task or a Phone Call.
* Owner (required): the Dynamics user assigned to the activity.
* Schedule: optionally set a delay for the activity (for example, "Schedule to start in 2 days").

## Strict contact matching

Because this step is designed for Contacts, eMarketeer uses a strict search:

* eMarketeer searches Dynamics exclusively for a matching Contact.
* If a Contact is found, the activity is created and attached to that Contact.
* If no Contact is found, the step is skipped and no activity is created. eMarketeer does not attempt to find or update a Lead.
