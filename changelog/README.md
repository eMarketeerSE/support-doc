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
{% update date="2026-11-16" tags="new-release,feature,improvement,fix" %}
## November release: folders, favorites and SuperOffice project functions

This release makes campaigns and folders easier to work with, adds new SuperOffice options, and includes many fixes. It also covers fixes released since the October 15 post.

### Campaigns and navigation

* Move a whole folder to another folder, or to the top level, in Campaigns, Contacts and Journeys.
* The browser address now includes the folder, so you can bookmark a folder or share the link with a colleague.
* Open your favorite campaigns from the star icon next to the breadcrumbs.
* The sort order you choose in the Contacts, Campaigns and Journeys lists is remembered.
* When you hover over a campaign's name, an edit icon and **Rename campaign** appear, so it is clear how to rename it.
* Browser tabs show which page you are on, instead of only "eMarketeer".
* The email, landing page and SMS editors, and the legacy form editor, now match the new interface.

### SuperOffice

* **Add to project** can set the project member's function, such as Invited, Registered or Attended. If the contact is already in the project, the function is updated. This works in campaign automations and Journeys.
* The SuperOffice **Create Activity** Journey step has a title field, to match the activity in SuperOffice. A long description no longer spills into the title.
* Contact imports take the postal address from the company, unless **Use as postal address** is ticked on the contact in SuperOffice.
* Consent is set in SuperOffice when you share or import a contact, and kept in sync afterwards.

### Forms

* The captcha is added to the last page of a form automatically. You no longer add it in the editor.
* The text of a consent question can contain links, for example to your privacy policy.
* The email address question can be optional, so people can answer without giving their email address.

### Email

* When you schedule an email, the checklist shows the scheduled date and time.

### SMS

* The SMS editor has an emoji menu, and newer emoji are supported.

### Journeys

* Journey steps and If/Else conditions can use **Outbound email** conditions, like segments.

### API

* Contacts API v2 has consistent ids, working pagination and the lists each contact belongs to. Version 1 still works but is deprecated.
* When you send an email through the Messages API, you can skip contacts who already got it, like the **Exclude recipients who previously got this e-mail** send option. You can also send to a contact list by its ID.

### Notable fixes

* Contacts saved from a form or through the API no longer lose their custom field values when the email address contains a capital letter.
* The contact card no longer shows another contact's custom field values after you switch contacts.
* Genuine email clicks are no longer discarded as bot clicks when a mail scanner checks the links at the same time.
* The Journeys page loads even when one Journey has a step with a problem.
* Some UK mobile numbers saved without a country code are no longer treated as Swedish numbers.
* SMS short links now use https.

<details>
<summary>Contacts and imports</summary>

* The contact list keeps your search and filter when you reload the page.
* The contacts view refreshes by itself when an import finishes.
* XLS imports have the **First row is header** option, like CSV imports.
* Imports add the contacts to the list you choose.
* Lead score is included again when you export contacts.
* When you pick a component in an engagement filter, the newest components are listed first.
* Segment filters with "is not" conditions and a time frame are much faster on large accounts.
* The contact card says **Saved** only when a change is saved, and tells you when a save fails.
* Custom date fields in older formats are shown on the contact card instead of an empty field.
* Contact field groups show their fields again.
* A lead's stage and its stage history agree, and adding a lead no longer creates duplicate history entries.
* Contacts removed from a Journey on the contact card are no longer listed in the Journey.
* **More information** on the timeline works for all form answers, and form previews on the timeline open the form.

</details>

<details>
<summary>Email and SMS</summary>

* The email checklist counts contacts who are in more than one recipient source as duplicates.
* Email health names the exact subdomain that needs an SPF record.
* If consent can't be checked when an email is sent, the sendout stops instead of risking a send to contacts who withdrew consent.
* The SMS checklist leaves out contacts excluded by consent, the same way the sendout does.
* The new email dialog shows long names and domains in full.
* Creating an email with a subject line that is too long shows a message instead of doing nothing.
* The image picker in the email editor opens and loads images faster.
* Fixed an issue where form links in some emails showed an error instead of the form.

</details>

<details>
<summary>Forms</summary>

* Dragging fields in **Edit Contact Registration** reorders them again.
* A shared form report stays open until the end of its expiry day.
* A form answer delete that fails is shown as failed.

</details>

<details>
<summary>SuperOffice and CRM</summary>

* The SuperOffice web panel no longer keeps asking you to log in.
* The SuperOffice Create Activity Journey step works for contacts with an apostrophe in their email address.
* SuperOffice Create Task automations no longer skip every contact as "limited to once per contact".
* When SuperOffice automations can't run because the account is over its contact limit, the automation log shows the reason.
* The CRM timeline panel in SuperOffice and Dynamics no longer shows an error for some contacts.
* Creating a contact from the CRM panel explains why it failed when the CRM contact has no email address, and shows when it worked.
* You are told when a CRM import fails.
* Component reports can export contacts to CRM again.

</details>

<details>
<summary>Account and notifications</summary>

* Links in the notification inbox open the right page.
* Notifications and notification settings are shown in your language.
* Turning on MFA in your profile explains the next step, and the switch always matches whether MFA is enforced.
* Saving account settings no longer overwrites the account's mobile number with the Office fax field.

</details>
{% endupdate %}

{% update date="2026-10-23" tags="api,feature" %}
## New Campaigns API

The new Campaigns API lets your own systems work with campaign components. You can copy, rename and move emails, SMS, forms and landing pages, fill in the content of emails and landing pages, and send an email to a contact list, right away or at a scheduled time.

A typical use is to copy a template email, fill in its content blocks, and send the copy to a contact list. The Campaigns API uses the same API key as the other eMarketeer APIs.

See [API endpoints overview](https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/references/apis-developer/api-endpoints-overview) for the endpoints, and the [Campaigns definition](https://api-doc.emarketeer.com/?urls.primaryName=Campaigns) in the API portal to browse and test the calls.
{% endupdate %}

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
