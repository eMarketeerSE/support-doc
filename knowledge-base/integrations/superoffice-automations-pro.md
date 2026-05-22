# SuperOffice automations (PRO)

This article describes the SuperOffice automations available in eMarketeer and how they appear in the leads report.

The leads report collects contacts that trigger SuperOffice automations so your sales team can act on them. The automations themselves cover sales, tasks, notifications, interests, projects, and selections.

## Lead reports

All contacts that trigger any of the following automations are added to the leads report:

- Create Sale
- Create Task
- Create Notification
- Set/unset interest(s)

If the contact is known to SuperOffice — it has an external ID or a matching email address — it is added to the "Assigned leads" section. If the contact is unknown to SuperOffice (no external ID and no matching email), it is added to the "Leads without owners" section.

The leads report is accessible from within SuperOffice — click the leads button and a web panel opens. If your leads button and web panel are missing, [here](https://support.emarketeer.com/documentation/actions-performed-during-set-up/) is how to get them.

### Leads without owners

In this report you pick the lead you want to import to SuperOffice. You can add the unknown contact to an existing company, merge it with one, or create a new company and assign an owner.

When the contact has been added to SuperOffice, it moves from the Leads List to Assigned leads.

If a lead is removed from any of the lists, the contact is removed from the list — not from the campaign, component, or any other part of the system.

Leads without owners remain in the leads report for 60 days, after which they expire from the list. The leads and contacts remain in eMarketeer.

#### Most interesting lead right now

The lead with the highest accumulated sale value has its own place in the report.

#### Current lead age

Shows the age and activity type of the leads in the report. This gives a quick overview of your sales team's lead response time. Click the activity types in the chart legend to single out specific types in the chart.

#### Leads list

A list of leads and information about the automation each unknown contact triggered.

### Assigned leads

This list shows the sales, task, and notification automations on contacts already known in SuperOffice (matched by contact ID or email). Assigned leads remain in the list for 60 days, after which they expire. The leads and contacts remain in eMarketeer.

### Leads over time

The graphs and statistics show all leads created over time and the distribution of lead types since the SuperOffice and eMarketeer integration was activated.

## Automations

### Create new sale

A sale entry is created in SuperOffice and assigned to the person. eMarketeer sets the source, rating, and description properties. You can optionally add the person to a selection or project when the sale is created.

If the triggering contact is unknown to SuperOffice, the automation is put on hold and added to the leads report.

### Create a task

Creates a task (activity) in SuperOffice of a kind you specify when creating the automation. You can add a description. Tasks are always marked as not completed.

If the triggering contact is unknown to SuperOffice, the automation is put on hold and added to the leads report.

### Notify sales rep

Creates an activity in SuperOffice of a kind you specify when creating the automation. You can add a description. Notify sales rep activities are always marked as completed.

If the triggering contact is unknown to SuperOffice, the automation is put on hold and added to the leads report.

### Set interest

Check the interests you want to set. If the eMarketeer contact has a SuperOffice ID, the SuperOffice interest is changed.

If the triggering contact is unknown to SuperOffice, the automation is put on hold but the lead does not appear in the leads report.

The contact must trigger a Sale, Task, or Notification automation before you can take ownership of the contact.

### Unset interest

Check the interests you want to unset. If the eMarketeer contact has a SuperOffice ID, the SuperOffice interest is changed.

If the triggering contact is unknown to SuperOffice, the automation is put on hold but the lead does not appear in the leads report.

The contact must trigger a Sale, Task, or Notification automation before you can take ownership of the contact.

### Add to project

Adds the triggering contact to a project specified when creating the automation. If the person is unknown to SuperOffice, the automation fails.

### Remove from project

Removes the triggering contact from a project specified when creating the automation. If the person is unknown to SuperOffice, the automation fails.

### Add to selection

Adds the triggering contact to a static selection specified when creating the automation. Static selections can contain duplicate entries.

If the person is unknown to SuperOffice, the automation fails.

### Remove from selection

Removes the triggering contact from a static selection specified when creating the automation.

> TODO: verify — the source ends "removes the triggering contact from a static selection specified when creating the" mid-sentence.

If the person is unknown to SuperOffice, the automation fails.
