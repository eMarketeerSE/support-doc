# SuperOffice automations (PRO)

## Lead reports

All contacts that trigger the following automation will be added to the leads report

-   Create Sale
-   Create Task
-   Create Notification
-   Set/unset interest(s)

If the contact is known to SuperOffice (has an external ID or matching email address) it will be added to the “Assigned leads” section of the lead report.

If the contact is unknown to SuperOffice (external ID is unset and no matching email address is found) the contact will be added to the “Leads without owners” section of the lead report

The leads report is accessible from within SuperOffice, click on the leads button and a web-panel will be shown.  
if your leads button and web-panel is missing **[here](https://support.emarketeer.com/documentation/actions-performed-during-set-up/)** is how you get it.

### Leads without owners

In this report you pick the lead you want to import to SuperOffice. You have the opportunity to add the unknown contact to a company and create or merge it with an existing one, or create a new company and assign an owner.

When the contact has been added to SuperOffice it is moved from Leads List to Assigned leads.

If a lead is removed from any of the lists, the contact will be removed from the list not from the campaign / component or any other part of the system.

Leads without owners will remain in the Leads report for sixty (60) days after which they will expire from the list. The leads and contacts will still remain in eMarketeer.

#### Most interesting lead right now

The Lead that has the highest accumulated sale value has a own place in the report.

#### Current Lead Age

Shows the age and activity type of the leads in the leads report. This enables you to get a quick overview of your sales team’s lead response time. You can click the activity types in the chart legend to single out specific types of leads in the chart.

#### Leads List

A list of leads and information about the automation the unknown contact triggered.

### Assigned leads

This list shows the Sales, Task and notification automations on contacts that were already known in SuperOffice (based on contact ID or matching email address). Assigned leads will remain in the list for sixty (60) days after which they will expire from the list. The leads and contacts will still remain in eMarketeer.

### Leads Over Time

The graphs and statistics shows all the leads created over time and the distribution of lead types since the SuperOffice and eMarketeer integration was activated.

## Automations

### Create new sale

A Sale entry is created in SuperOffice and it is assigned to the person. The sale properties set by eMarketeer is Source, Rating, Description It is also possible to add the person to a Selection or Project (optional) when the sale is created.

If the contact triggering the automation is unknown to SuperOffice the automation will be put on hold and added to the leads report.

### Create a task

The creates a task in SuperOffice creates a activity in in SuperOffice of a kind specified when creating the automation. In addition to type a description can be added. Task are always marked as not completed.

If the contact triggering the automation is unknown to SuperOffice the automation will be put on hold and added to the leads report.

### Notify sales rep.

The notify sales rep. in SuperOffice creates a activity in in SuperOffice of a kind specified when creating the automation. In addition to type a description can be added. Notify sales rep. are always marked as completed.

If the contact triggering the automation is unknown to SuperOffice the automation will be put on hold and added to the leads report.

### Set Interest

Check the interests that you want to set. If the eMarketeer contact has a SuperOffice ID set then the SuperOffice interest will be changed.

If the contact triggering the automation is unknown to SuperOffice the automation be put on hold, but the lead will not be visible in the leads report.

The contact must trigger a Sale, Task or Notification automation if you want to be able to take ownership of the contact.

### Unset Interest

Check the interests that you want to unset. If the eMarketeer contact has a SuperOffice ID set then the SuperOffice interest will be changed.

If the contact triggering the automation is unknown to SuperOffice the automation be put on hold, but the lead will not be visible in the leads report.

The contact must trigger a Sale, Task or Notification automation if you want to be able to take ownership of the contact.

### Add to Project

The add to project adds the triggering contact to a project specified when creating the automation. If the person is unknown to SuperOffice the automation will fail.

### Remove from Project

The remove from project removes the triggering contact from a project specified when creating the automation. If the person is unknown to SuperOffice the automation will fail.

### Add to Selection

The add to selection adds the triggering contact to a static selection specified when creating the automation. Note that it is possible to create duplicate entries in static selections.

If the person is unknown to SuperOffice the automation will fail.

### Remove from Selection

The remove from selection removes the triggering contact from a static selection specified when creating the

If the person is unknown to SuperOffice the automation will fail.
