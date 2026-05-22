# Creating your first Journey

This article walks through building your first Journey, from starting point to activation.

A Journey is an automated sequence that runs a series of steps for each contact who enters it. The Journey builder lets you combine triggers, waits, branches, and actions.

### Accessing the Journey builder

Click "Journeys" in the top navigation bar. Then click "Create new Journey" to create your first Journey.

### Adding a starting point or trigger

![Journey starting point filter dialog](../assets/creating-your-first-journey/Skarmavbild-2023-05-25-kl.-08.03.25-300x282.png)

When you create a new Journey, the first task is to set the starting point.

A starting point is a set of filter rules. Any contact that matches the filter starts the Journey.

**Note:** The starting point only triggers for contacts that match the filter from the time of activation. It does not include contacts that matched the filter historically.

Once your starting point is set, click "Apply" to enter the Journey editor.

The Journey does not start until you activate it.

For now this is all you need to know about starting points. For a deeper dive, see [this detailed overview on Journey triggering events](https://support.emarketeer.com/documentation/journeys/journeys-triggering-events/), which explains exactly when starting points are evaluated.

### Build your Journey

![Journey builder canvas with step nodes](../assets/creating-your-first-journey/2023-05-25_08-38-56-300x209.png)

After you set the starting point, you enter the Journey builder. This is where you add the steps (actions) you want to execute for each contact that enters the Journey.

Click the black dots to add steps in sequence.

### Setting up wait conditions

![wait step followed by an If/Else branch split](../assets/creating-your-first-journey/Skarmavbild-2023-05-25-kl.-08.58.56-300x239.png)

The Journey builder lets you split the Journey into branches based on criteria you choose.

For example, your Journey can send an email, wait for a day, and then perform different actions depending on whether the email was opened.

Add the wait step first, then add the If/Else step to split the path into branches.

> Always add a wait step before an If/Else step, or it will be evaluated immediately.

The If/Else step is also a filter where you can set any criteria. Once you add the If/Else step, the branch splits into two: one for contacts who meet the criteria, and one for those who do not. Adding a wait step before the If/Else step is especially important when evaluating interactions from a previous step.

You can now continue building each of the two branches.

### Sending emails and SMS

Journey steps include sending emails and text messages (SMS). To use them in a Journey, first create them in a campaign.

Reports for the sent components are also located in the campaign where you built them. You can go directly to the report for an email or SMS by opening the settings menu for the step.

### Save your Journey

Any changes to a Journey must be saved before they take effect. Press the "Save" button in the top right corner to save your Journey.

### Activating a Journey

When your first Journey is created (by clicking "Save"), it is paused. While paused, the Journey is inactive and no contacts enter it.

![paused Journey with activation toggle off](../assets/creating-your-first-journey/Skarmavbild-2023-05-25-kl.-09.28.11.png)

When you are ready to activate your Journey, click the toggle button in the top right corner.

![active Journey with activation toggle on](../assets/creating-your-first-journey/Skarmavbild-2023-05-25-kl.-09.28.41.png)

When the Journey is active, any new contacts matching the starting point filter enter the Journey.

### Editing a Journey

You can edit a Journey at any time. However, the Journey must be paused before you can make any changes.

When editing is done, save the changes and activate the Journey again.

## Journey settings

### Re-enter Journey

By default, a contact can only enter a Journey once. If a contact matches the starting point again after entering, they are skipped.

To allow a contact to enter a Journey multiple times, check the option "Contact can re-enter Journey".

> TODO: verify — the source ends "When checked and saved," with no continuation.

## Monitoring and analytics

### Tracking Journey performance

Contacts in a Journey can have three statuses:

- Contacts started – the number of contacts that matched the starting point filter and entered the Journey.
- Contacts in progress – any contact that started the Journey but has not completed it. Without wait steps, contacts pass through the in-progress status briefly. With wait steps, many contacts can remain in progress at once.
- Completed Journeys – the number of contacts who completed all steps in the Journey.

### Step counter

Each step in the Journey has a step counter that shows how many contacts have reached that step.

Click the number to bring up a list of the contacts for that step. From there you can export or bulk update them.

The wait step has an additional counter showing how many contacts are currently waiting in that step.

## Journeys and SuperOffice

The steps collection contains several actions that perform tasks in SuperOffice. All tasks relate to contacts in SuperOffice.

### Contact matching

When a task is performed in SuperOffice, eMarketeer first checks whether the contact exists there. This is done by matching the external-id and email address of the contact.

If no matching contact is found, the Journey step is skipped by default.

### Creating missing contacts in SuperOffice

![SuperOffice step settings panel in the sidebar](../assets/creating-your-first-journey/Skarmavbild-2023-05-25-kl.-12.27.46.png)

When you add a Journey step involving SuperOffice, a settings panel appears in the left sidebar.

By default, contacts that are not found in SuperOffice are skipped. You can also configure the step to automatically create the missing contacts in SuperOffice.

To create the contacts in SuperOffice, you must also provide a responsible sales person and a category for the new contacts and companies.

When creating contacts and companies automatically, eMarketeer tries to find an existing company suitable for the new contact, or creates the contact without a company if allowed.

The contact-creation setting applies to all SuperOffice steps in the Journey.

For a flow chart describing the logic, [click here](https://support.emarketeer.com/wp-content/uploads/2023/05/Skarmavbild-2023-05-25-kl.-12.31.12.png).

**Tip:** When you enable automatic contact creation, it is good practice to also add the new contacts to a selection in SuperOffice. That way you can easily find them later.
