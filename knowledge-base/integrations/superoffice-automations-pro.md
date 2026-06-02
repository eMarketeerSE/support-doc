# SuperOffice automations

SuperOffice automations let you trigger actions in SuperOffice when a contact interacts with an eMarketeer campaign — for example, by clicking a link or submitting a form. Each automation runs on the contact that triggered it and creates the corresponding object — sale, task, notification, interest update, project membership, or selection membership — directly in SuperOffice.

## Setting up an automation

1. Open a campaign in eMarketeer.
2. Go to the **Automations** tab.
3. Click **Create new automation**.
4. Choose the automation type, configure its settings, and save.

The automation runs each time a contact triggers the campaign event it is attached to.

## How unmatched contacts are handled

Each automation requires the contact to have an external ID that links it to a SuperOffice contact. If no external ID exists, eMarketeer cannot deliver the action. The automation is paused and the contact is added to the Manage Automations Queue.

To access the queue, click the SuperOffice logo in the top left corner of SuperOffice, then go to the **Manage Automations Queue** tab. From there, a sales rep can match the contact to an existing SuperOffice contact. The automation resumes once the match is made.

{% hint style="info" %}
SuperOffice automations are not the same as SuperOffice Journey steps. Journey steps use a different matching logic. This article covers campaign-level automations only.
{% endhint %}

## Automation types

For all types: if the contact has no external ID, the automation is paused and the contact is added to the Manage Automations Queue (see above).

### Create new sale

Creates a sale entry in SuperOffice and assigns it to the contact. eMarketeer sets the source, rating, and description. You can optionally add the contact to a selection or project when the sale is created.

### Create a task

Creates a task (activity) in SuperOffice of the kind you specify. You can add a description. Tasks are always marked as not completed.

### Notify sales rep

Creates an activity in SuperOffice of the kind you specify. You can add a description. Notify sales rep activities are always marked as completed.

### Set interest

Check the interests you want to set. If the contact has an external ID, the interest is updated in SuperOffice.

### Unset interest

Check the interests you want to unset. If the contact has an external ID, the interest is updated in SuperOffice.

### Add to project

Adds the contact to a project you specify when setting up the automation.

### Remove from project

Removes the contact from a project you specify when setting up the automation.

### Add to selection

Adds the contact to a static selection you specify when setting up the automation. Static selections can contain duplicate entries.

### Remove from selection

Removes the contact from a static selection you specify when setting up the automation.
