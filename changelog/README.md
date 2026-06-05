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
