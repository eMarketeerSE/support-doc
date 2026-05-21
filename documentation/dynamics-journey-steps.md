# Dynamics - Journey Steps

Welcome to the eMarketeer and Microsoft Dynamics 365 Sales integration! Using eMarketeer Journeys, you can seamlessly send data, create records, and log activities directly into your Dynamics CRM.

**Understanding How Records Sync**

In eMarketeer, everyone in your database is simply called a “Contact.” However, Microsoft Dynamics separates people into two distinct groups: **Leads** and **Contacts**.

To bridge this gap, our Steps are designed with smart, built-in search logic. When a Journey triggers, eMarketeer will automatically search Dynamics to find the correct Lead or Contact to update, ensuring your CRM stays clean and duplicate-free.

Below is an overview of the Steps available to you.

### Create or Update Records

-   **Create/Update Lead:** This Step pushes a person from eMarketeer into Dynamics as a Lead. If a Lead with a matching email already exists, eMarketeer will simply update it. You also have an “Always create a lead” option, which lets you force the creation of a brand new Lead even if the person already exists as a Contact in Dynamics.  
    [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/create-update-lead/)
    

### Add Activities (Tasks & Phone Calls)

When you want to log a Task or Phone Call in Dynamics, you have three distinct modes to choose from depending on how strict your sales processes are:

-   **Add Activity (Smart Mode):** This is the most flexible option. Because a person might be either a Lead or a Contact in your CRM, this Step asks for your _preference_. If you prefer to target a Lead, eMarketeer will look for one first. If it can’t find a Lead, it automatically falls back and attaches the activity to their Contact record instead (and vice versa). Use this to ensure your sales activities are never lost!  
    [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/dynamics-add-activity/)
    
-   **Add Lead Activity (Strict):** Logs an activity explicitly on a **Lead** record. If eMarketeer cannot find a matching Lead, the action is skipped. It will _not_ fall back to a Contact.  
    [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-activity/)
    
-   **Add Contact Activity (Strict):** Logs an activity explicitly on a **Contact** record. If eMarketeer cannot find a matching Contact, the action is skipped. It will _not_ fall back to a Lead.  
    [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/journey-add-contact-activity/)
    

### Marketing List Actions

-   **Add Lead to Marketing List:** Automatically searches for the person’s **Lead** record in Dynamics and adds them to a specific Marketing List of your choosing.  
    [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-to-marketing-list/)
    
-   **Add Contact to Marketing List:** Automatically searches for the person’s **Contact** record in Dynamics and adds them to a specific Marketing List of your choosing.  
    [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-contact-to-marketing-list/)
