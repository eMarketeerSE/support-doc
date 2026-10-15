---
description: New updates and improvements
layout:
  width: wide
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: false
  tags:
    visible: true
  actions:
    visible: true
---

# Product updates

{% updates format="full" %}
{% update date="2026-10-15" tags="fix,improvement" %}
## Fixes and improvements since the October 2 release

Fixes and improvements released after the October 2 release. All of them are live.

### Notable fixes

* Submitting a legacy form with blank fields, such as name or mobile number, no longer removes that data from the contact card.
* Campaign automations can be opened and edited again.
* Fixed an issue where a Wait step with a decimal value, such as 1.5 hours, stopped the Journeys list from loading for the whole account.
* Excel exports of form answers now open correctly in Excel.
* **Select all** in campaign contacts now selects every contact, not only the first page. Bulk actions and exports now cover the full list.

<details>

<summary>Forms</summary>

* Rules on legacy forms now save correctly.
* The **Close form on date** setting now saves, whatever your date format or language.
* Fixed a captcha error that could stop legacy forms from being submitted.
* Fixed embedded forms that didn't load on some websites.
* The forms script loads faster on your website, which improves page speed scores.
* Legacy form reports: columns are clickable again and show the contacts who gave each answer. Questions with many options can be scrolled sideways again, and the campaign field is shown again.
* Form confirmation emails: font and colour settings now apply to the answers section. A new line in the text no longer causes an error.
* Form notifications now show question titles instead of internal question names.

</details>

<details>

<summary>Email</summary>

* The **Save** button in the email editor is no longer hidden at some window sizes or zoom levels.
* The **Preview email** button is back on the send page, so you can step through recipients before sending.
* Mail reports show correct unique counts while a sendout is still in progress.
* Fixed an issue where some users were logged out while editing certain emails.

</details>

<details>

<summary>Campaign automations</summary>

* Notifications addressed to several email addresses now work.
* The email screenshot in notifications is now a thumbnail and no longer covers the rest of the message.
* SuperOffice automations: the project and selection fields search for matches as you type. Create Sale, Create Task and Notify Salesperson now include the optional **Add to project/selection** field.

</details>

<details>

<summary>Journeys</summary>

* In a copied Journey, the SuperOffice **Add to project** and **Add to selection** steps can now be changed.

</details>

<details>

<summary>Contacts and imports</summary>

* A notification is now sent when a contact upload fails because the account has reached its contact limit.
* **View report** now works on notifications that arrive while the page is open.
* Segments saved before the update now work with export and bulk actions.
* SuperOffice on-premise imports show the selection name again instead of "SuperOffice7".
* Bulk actions and export on component reports now work the same way as in Contacts.

</details>

<details>

<summary>Other</summary>

* Several wording fixes in the interface.

</details>
{% endupdate %}

{% update date="2026-10-14" tags="new-release,feature" %}
## Connect Claude or ChatGPT to eMarketeer

You can now connect Claude or ChatGPT to your eMarketeer account and ask about your marketing in plain language. The assistant reads your reports, contacts, journeys, campaigns and forms. Marketing Users and Administrators can also ask it to make changes, such as creating a campaign or closing a form.

See [AI assistants](https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/integrations/ai-assistants) to get started.
{% endupdate %}

{% update date="2026-10-02" tags="new-release,feature,improvement,fix" %}
## The new eMarketeer

eMarketeer has been rebuilt with a new interface across the whole app. This is our biggest update since eMarketeer first launched, so this post covers the highlights rather than every change.

### Interface and language

* New interface and navigation across the app.
* The app is now fully available in Swedish, Norwegian, Danish and Finnish.
* Improved performance: pages and lists load faster.

### Help assistant

* A help assistant is now available inside the app. Ask questions in plain language and get answers from the documentation without leaving the page.

### Campaigns

* Redesigned and simplified campaign view.
* Improved folder management.
* Filter campaigns by creator, tags and latest activity.
* Search across campaigns and their components.

### Contacts

* New contact card with an overview of contact details at the top.
* Notes can now be added to contacts.
* New Journeys tab showing the current step for each journey the contact has not yet completed.
* The Lead tab is now always available, so a lead can be created from any contact card.
* The contact list now shows the newest contacts first by default.

<details>

<summary>Moved and renamed</summary>

* Saved filters are now called **Segments**.
* **Lead Scoring** and **Lead Streams** have moved to **Account Settings**.

</details>

<details>

<summary>Improved</summary>

* Tags can be created by typing directly on contacts and campaigns, with no need to set them up first.
* Files can be uploaded by drag and drop, and sorted and searched.
* Journeys can be organized into folders, with new filter and sort options.
* Columns on all four dashboards can now be sorted, pinned, removed and filtered.
* The default form language can now be set when you create a form.

</details>

<details>

<summary>Fixed</summary>

* Fixed an issue where SuperOffice activities created by campaign automations on new forms showed "Details not available" in the activity web panel.
* SuperOffice journey steps no longer match company records when looking up a contact by email.
* The "Create sale" journey step now fills in the sale text in SuperOffice.
* Failed journey steps now show a readable error message explaining the cause.
* Fixed an issue where the Telephone and Mobile number fields in forms showed a placeholder that could not be removed.
* Fixed an issue where hidden form questions with values were not saved.
* Fixed an issue where recently saved consents could be missed by the consent sync.

</details>
{% endupdate %}

{% update date="2026-04-14" tags="feature,improvement,fix,form,journey,integrations" %}
## Forms, Journeys, and Dynamics 365

### Forms

* Forms can now send confirmation emails on submission.
* Campaign fields and personalization tokens can now be used in forms.
* Additional language options added; default translations expanded.

### Journeys

* Journeys now report status per individual step.

### Dynamics 365

* Choose an owner when creating a lead in Dynamics.
* Lead ID from Dynamics is now shown on the contact card.
* Activities created with journey steps can now be scheduled.
* Share to CRM — eMarketeer contacts can now be shared or created in Dynamics.
* Web panels are now created automatically as Dynamics views on integration.

<details>

<summary>Fixed</summary>

* Fixed an issue where the "I'm not a robot" reCAPTCHA text was not translated with form language versions.
* Fixed a server error when adding large background images to forms.
* Resolved display issues with form themes.
* Fixed a duplicate email error in the form editor.
* Options now load correctly in custom contact card field dropdowns.
* Fixed an issue where journeys could get stuck in a loop on signal triggers.
* Improved journey conditional logic for contacts that have submitted the same form multiple times.
* Fixed a bug where if/else steps failed to save.
* Fixed an issue where the listing of Dynamics marketing lists was sometimes empty.
* Fixed an issue where Dynamics activities sometimes failed to be created.
* Fixed an issue where exporting contacts from the checklist to SuperOffice failed.
* Fixed an issue where campaign fields were not copied when duplicating a campaign.
* The deprecated old Zapier API endpoint has been removed.

</details>
{% endupdate %}

{% update date="2026-03-10" tags="feature,improvement,fix,new-release" %}
## Operational Report dashboard

A new Dashboard report gives you a full account-wide view of campaign activity.

* **Sendouts and Web Sessions** — a timeline of sendouts over time alongside website session data.
* **Recent Sendouts** — the five most recent email and SMS sendouts, plus upcoming scheduled sendouts.
* **Latest Form Submits** — the five latest form submissions with links to contacts.
* **Active Campaigns** — most recently active campaigns with links.
* **Recent Created work** — most recently created components.
* **Active Journeys** — most recently active journeys with links.

<details>

<summary>Improved</summary>

* Forms (not legacy) are now compliant by default with the European Accessibility Act.

</details>

<details>

<summary>Fixed</summary>

* Fixed UI issues with the email checklist.
* Fixed an issue where journeys failed to send emails.

</details>
{% endupdate %}

{% update date="2026-02-23" tags="feature,improvement,fix" %}
## Dynamics 365 journey steps, drilldown reports, and dashboard exports

### Dynamics 365 integration: six new journey steps

* Create/Update Lead
* Add Activity
* Add Lead activity
* Add Contact activity
* Add Lead to Marketing List
* Add Contact to Marketing List

### Reports

* **Email checklist contacts drilldown** — bulk actions and export directly from the checklist.
* **Dashboard report contacts drilldown** — click any number to see the identified contacts.
* **Dashboard report export** — export dashboard data.

<details>

<summary>Fixed</summary>

* Further improvements to the email domain authentication process.
* Fixed an issue where bulk actions failed to update legal basis.
* Improvements to the Traffic Analyzer drilldown panels while filtered.
* Manage automations now lists up to 50 contacts per page.
* The LinkedIn integration can now be connected to organisation Brand pages.
* Fixed an issue where the original traffic source was sometimes not set correctly.
* Fixed an issue where a paused SuperOffice automation did not resume after a contact was created in SuperOffice.
* The SuperOffice Legal basis sync now updates all SuperOffice contacts with a matching email address.

</details>
{% endupdate %}

{% update date="2026-01-26" tags="feature,improvement,fix" %}
## Traffic Analyzer drilldown and Email Reputation

* **Traffic Analyzer drilldown** — click any segment to view details or filter the entire report by that segment.
* **Email Reputation** — the Email Health report now includes a "Reputation findings" widget, reporting domain issues that may affect deliverability.

<details>

<summary>Improved</summary>

* Improvements to email domain authentication and validation — more scenarios covered, additional checks, and easier to restart.

</details>

<details>

<summary>Fixed</summary>

* Fixed a timezone mismatch between the contact timeline and the detailed event description.
* Fixed an issue where "Original Traffic Source" could be overwritten when a contact gained a "Created Source".

</details>
{% endupdate %}
{% endupdates %}
