# Dynamics - Create/Update Lead

The Create/Update Lead step pushes contacts from eMarketeer into your Microsoft Dynamics CRM as Leads. It includes built-in logic to update existing records and prevent duplicates.

![Create/Update Lead step configuration with Always create a lead checkbox](../../../.gitbook/assets/create-update-lead-1024x695.png)

### Step configuration

When you add this step to a Journey, configure the following fields:

* **Subject (required):** Sets the main title for the Lead record in Dynamics (for example, "Webinar Attendee" or "Contact Us Form").
* **Description:** Passes additional notes, campaign details, or context to your sales team.

### The "Always create a lead" setting

This checkbox controls how eMarketeer searches your CRM and handles existing records.

**If unchecked (default)**

This option protects your CRM from creating Leads for people who have already progressed in your sales cycle.

* eMarketeer first checks Dynamics to see if the person already exists as a Contact.
* **If they are a Contact:** The step stops completely. No Lead is created.
* **If they are not a Contact:** eMarketeer updates an existing Lead. If no Lead is found, it creates a new one.

**If checked**

This option forces the step to process the Lead, regardless of whether the person already exists as a Contact in your CRM.

* eMarketeer bypasses the initial Contact check and attempts to update an existing Lead.
* If no existing Lead is found, it creates a new Lead.
* **Smart linking:** If it creates a new Lead _and_ the person already exists as a Contact in Dynamics, eMarketeer automatically links the new Lead to their existing Contact and Account records.
