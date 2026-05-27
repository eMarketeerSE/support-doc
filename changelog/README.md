---
description: New updates and improvements
icon: clock-rotate-left
layout:
  width: wide
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: false
  outline:
    visible: true
  pagination:
    visible: false
  metadata:
    visible: false
  tags:
    visible: true
  actions:
    visible: true
---

# Changelog

{% updates format="full" %}

{% update date="2026-04-14" tags="feature,improvement,fix" %}
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

{% update date="2026-03-10" tags="feature,improvement,fix" %}
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

{% update date="2025-12-18" tags="feature,fix" %}
## Email Health Dashboard

* **Email Health report** — a clear, actionable overview of email deliverability and sender reputation. Spot problems early and protect your sender reputation over time.
* **Email domain problem notifications** — notifications are sent when a problem is detected with your authenticated email domains.

<details>

<summary>Fixed</summary>

* Journeys can no longer be saved if they contain invalid filter definitions.
* Fixed an issue where links to forms in copied campaigns referred back to the original campaign.
* UI improvements to the Traffic Analyzer on small screens.

</details>
{% endupdate %}

{% update date="2025-12-04" tags="feature,improvement,fix" %}
## Traffic Analyzer Dashboard

* **Traffic Analyzer** — an interactive Sankey diagram showing the flow of website traffic from source to conversion point.

<details>

<summary>Improved</summary>

* **SuperOffice export reworked** — now faster, runs in the background with a notification on completion, and handles more contact data formats.
* The form JSON editor is now available to users without the Developer role.
* Improved the Website script page to make it easier to copy the Tracker ID.
* Adjustments to the default lead score sets.

</details>

<details>

<summary>Fixed</summary>

* Ghost clicks are now filtered out correctly from email engagement events on the contact timeline.
* Fixed an issue where Lead Board would not load correctly.
* Fixed an issue where rich text campaign fields were formatted incorrectly in the read-on-web version of emails.

</details>
{% endupdate %}

{% update date="2025-11-05" tags="improvement,fix" %}
## Dashboard and forms improvements

<details>

<summary>Improved</summary>

* **Default Sales team and Lead stream** — default sales teams and lead streams created for accounts that did not have them defined.
* **Dashboard** — AI referral tracking, general data improvements, web tracker installed on all hosted forms.
* **Forms** — form language shown in spreadsheet report; timestamp shown in spreadsheet report; delete selected form answer in spreadsheet report; share form report; spreadsheet now shows more rows.

</details>
{% endupdate %}

{% update date="2025-10-01" tags="feature,improvement,fix" %}
## Product launch — October 2025

The Marketing Performance Dashboard is here. Get a single view of what drives your traffic, conversions, and leads — from outbound activity and web sessions to full funnel performance.

<a href="2025/product-launch-october.md" class="button primary">Read full update</a>

<details>

<summary>Improved</summary>

* "What's driving performance" dashboard widget reworked.
* Added tracking on eMarketeer-hosted forms and web pages.

</details>

<details>

<summary>Fixed</summary>

* Multiple integrated forms can now render on the same page.
* Captcha can no longer be hidden.
* Captcha is no longer counted as a question in the form navigation progress bar.
* Fixed an issue with the Facebook connection that caused the connected account token to expire after three months.

</details>
{% endupdate %}

{% update date="2025-08-01" tags="feature,improvement" %}
## Marketing Performance Dashboard (early access) and SSO

* **Marketing Performance Dashboard** — outbound activity, website traffic by source, conversions, MQLs, and full funnel view from MQL → SQL → Opportunities → Won. In early access for selected accounts.
* **SSO — Entra** — single sign-on support via Microsoft Entra.

<details>

<summary>Improved</summary>

* Custom contact fields for forms.
* Rewrote how automations handle contacts with an incorrect External ID.
* Occurrence and timeframe filter segmentation options added to Signals.
* Lead Explorer removed.
* The Home screen replaced by the new dashboards.

</details>
{% endupdate %}

{% update date="2025-06-01" tags="feature" %}
## Product launch — June 2025

New form editor and a rebuilt, cookieless web tracker — changing how you capture leads and attribute the traffic behind them.

<a href="2025/product-launch-june.md" class="button primary">Read full update</a>
{% endupdate %}

{% update date="2025-04-01" tags="feature,improvement" %}
## UTM parameters

* **UTM Parameters** — all links from eMarketeer content now automatically include UTM parameters. The Google Analytics integration has been removed from Plugins & Integrations.

<details>

<summary>Improved</summary>

* Changes to the login process for faster authentication.
* New contact list segment filter: "Any list".

</details>
{% endupdate %}

{% update date="2025-03-01" tags="feature,improvement" %}
## Contact Sources

* **Contact Sources** — Created, Original, and Latest traffic sources now tracked at contact level, with UI elements on the contact card and filter capabilities.

<details>

<summary>Improved</summary>

* Added monitoring systems for the LinkedIn integration.
* Continued improvements to the matching logic for SuperOffice journey steps.

</details>
{% endupdate %}

{% update date="2025-02-01" tags="improvement" %}
## SuperOffice journey step improvements

<details>

<summary>Improved</summary>

* Added a new matching logic for SuperOffice journey steps.

</details>
{% endupdate %}

{% update date="2025-01-15" tags="feature,improvement,fix" %}
## Contact enrichment and permission pass

* **Contact enrichment** — when a new contact is created, CRM is checked for missing details and the contact is populated. If FullContact is enabled, data is enriched from there afterwards.
* **Permission pass system** (double opt-in) for specific recipient domains.

<details>

<summary>Fixed</summary>

* Tweaked the algorithm for non-engaged contacts.
* Billing system implementation and fixes.
* Improved HTML design for the journey notifier email.
* Added more fields from Facebook lead forms: work phone, work email, job title.
* Contact creation and update dates now display correctly.
* The journey step "Wait for trigger" no longer allows contacts to enter multiple times.
* Email complaints now unsubscribe the contact in all scenarios.
* Facebook lead forms now trigger journeys correctly.

</details>
{% endupdate %}

{% update date="2024-09-01" tags="notice" %}
## Billing system update — effective October 1, 2024

Starting October 1, 2024, eMarketeer moves to a new billing system. Key changes:

* New invoice design.
* **User licenses** — accounts are assigned a defined number of user licenses, visible on the User Administration page.
* **Monthly prepaid billing** — subscriptions billed in advance. Two invoices issued in October during the transition; the second has a 60-day payment window.

Contact [billing@emarketeer.com](mailto:billing@emarketeer.com) with any questions.
{% endupdate %}

{% update date="2024-07-31" tags="feature,fix" %}
## SuperOffice signals, Delete lead step, and Excel export

* **SuperOffice alarm flag** — notification bell enabled on activities created by eMarketeer.
* **SuperOffice "new contact created" signal** — new contacts created in SuperOffice are automatically created in eMarketeer and can trigger journeys.
* **Journey: Delete lead step** — removes a contact from all lead boards when reached.
* **Export direct to Excel** — contact exports now include a direct Excel file option.
* **Contact lists show name in UI** — the list name is now visible when viewing a contact list.

<details>

<summary>Fixed</summary>

* Stabilised SMS sending.
* Small improvements to the Dynamics 365 integration.
* Fixed a bug when copying certain components in a campaign.
* Fixed a bug in forms where hidden required questions prevented submission.

</details>
{% endupdate %}

{% update date="2024-07-04" tags="feature,fix" %}
## Journey improvements, Lead Board filters, and API additions

* Journey starting point: new date-based filters, e.g. "Last email sent".
* Journeys: personalise step descriptions with contact card fields.
* Journeys: view step settings on active journeys (editing disabled while active).
* Lead Board: filter per sales user; filter on unassigned leads.
* Application language now set under Settings → My Account.
* Contact engagement filter: added 6-month range option.
* API: list contact lists; delete contact.
* SuperOffice side panel: show active subscriptions.
* SuperOffice and Microsoft Dynamics consent sync now run on a 30-minute schedule.

<details>

<summary>Fixed</summary>

* Unable to remove leads from the lead board.
* Automation "Push to URL" returned success even when it failed.
* Journey step "Add subscription" sometimes failed.
* Unsubscribe page displayed poorly on mobile.
* "Tell a friend" in emails did not always work.
* Generating leads on the lead board sometimes took too long.
* SuperOffice side panel social icons were missing.
* Read-on-web link did not work when email content contained campaign fields.

</details>
{% endupdate %}

{% update date="2024-04-18" tags="improvement" %}
## Email deliverability improvements and Dynamics CRM integration

* Email domains via-em.com removed for new customers using a custom domain.
* Default sending settings now require positive consent (most GDPR-friendly method). Affects new customers only.
* Improved pre-sendout email validation to reduce bounces.
* Email service redundancy implemented.
* New contact email status: "Inactive email", with a new "Exclude inactive contacts" sendout option.
* Microsoft Dynamics CRM integration phase one: connect, import from CRM, and consent sync.
{% endupdate %}

{% update date="2024-03-23" tags="fix" %}
## Maintenance release

* Upgrade PHP and rewrite of several functions.
* Rewrite of the SMS sending module for performance and stability.
* Other small fixes and adjustments.
{% endupdate %}

{% update date="2024-02-12" tags="feature" %}
## Journeys, DMARC compliance, and SuperOffice side panel

### Journeys

* **Trigger journey from contact card**, lead card, and SuperOffice side panel.
* **DMARC compliance** — the "Authenticate email domain" settings page now checks all DNS records required by Google and Yahoo's email requirements.
* **Manual starting point** — create journeys triggered only from the contact card.
* **Step conditions** — skip steps when conditions are not met, without creating a new branch.
* **Dynamic recipient on Notifier step** — use the @ character to insert contact card fields as the recipient address.

### SuperOffice side panel

* **Create contact** — create a missing contact in eMarketeer directly from the side panel.
* **Side panel requires no paid user** — users only needing side panel access can be created as free users.
{% endupdate %}

{% update date="2024-01-15" tags="feature" %}
## Journey Templates, Wait for Trigger, and SuperOffice Sale Closed signal

* **Journey Templates** — choose from categorised, pre-built journeys to adapt to your needs.
* **Journey step: Wait for trigger** — pauses a contact in a journey until they perform a defined action.
* **SuperOffice Signals: Sale Closed** — when a sale is closed in SuperOffice, the data is sent to eMarketeer to move a lead, send a welcome email, or trigger any journey.
{% endupdate %}

{% update date="2024-01-01" tags="notice" %}
## Action required: Google and Yahoo email requirements (February 2024)

Google and Yahoo are introducing stricter email sender requirements in February 2024. If you send from a custom domain, two DNS entries are required to stay compliant.

Add the following records for your domain (replace `yourdomain.com`):

```
feedback.yourdomain.com  MX   10 feedback-smtp.eu-west-1.amazonses.com
feedback.yourdomain.com  TXT  "v=spf1 include:amazonses.com ~all"
```

If you send from the default via-em.com domain, no action is needed. See [How to authenticate your domain](https://support.emarketeer.com/knowledge-base/email-deliverability/authorize-email-domain) for full instructions.
{% endupdate %}

{% update date="2023-12-04" tags="feature" %}
## Facebook connector, Transactional email, and Custom Signals

* **Facebook connector** — receive Lead Form submits from Facebook Ads directly into eMarketeer for scoring, nurturing, and lead generation.
* **Transactional email sendouts** — override consent to send to your whole list. Use with caution, for non-marketing emails only.
* **Custom Signals** — send custom signals from external systems via the API. Signals appear on contact timelines, can be scored, and can trigger journeys.
{% endupdate %}

{% update date="2023-11-08" tags="improvement,fix" %}
## SuperOffice Consent Sync rebuilt

* **SuperOffice Consent Sync v2** — rebuilt from the ground up. Works for both Online and onPremise. Syncs the send list at sendout time rather than in real time, giving 100% accurate consent status for all emails sent.

<details>

<summary>Improved</summary>

* Journey "Send email" step: transactional option (ignore consent).
* IF/Else logic: now uses only the latest form answer when evaluating conditions.
* SuperOffice create activity/sale: new options for adding to a project and assigning a sales user.
* Legal basis: optional description text when setting legal basis.
* New journey triggers: legal basis change, lead stage change.
* Contacts: tags now shown in the contact list.
* SuperOffice side panel: shows legal basis and contact tags.
* Forms: new rich-text editor for the closed form message.

</details>

<details>

<summary>Fixed</summary>

* When deleting a form answer, the corresponding timeline event is now also deleted.

</details>
{% endupdate %}

{% update date="2023-10-16" tags="feature,fix" %}
## New journey steps, API tags, and Lead Board Quick Share

* Journey step: Start new journey.
* Journey step: Send notifier email.
* API for tags.
* Tags shown in the campaign list.
* SuperOffice side panel shows answers from eMarketeer forms and LinkedIn Lead Gen Forms.
* Lead Board: Quick share to CRM.
* Faster email sends from journeys and Quick Send.

<details>

<summary>Fixed</summary>

* JavaScript in form design HTML failed to save.
* Journey stats and duplicate email issues.
* Various small fixes.

</details>
{% endupdate %}

{% update date="2023-09-12" tags="feature" %}
## New API — Contacts, Engagement, and Tags

* New API released for contacts, engagement (history/stats), and tags.
* Access your API key and Swagger documentation under Settings in your account.
{% endupdate %}

{% update date="2023-08-03" tags="feature" %}
## LinkedIn Lead Gen Forms and Signals API

* **LinkedIn connector** — automatically send submitted LinkedIn Lead Gen Forms to eMarketeer.
* **Signals API** — allows external systems to send contacts and events to eMarketeer.
{% endupdate %}

{% update date="2022-11-26" tags="feature,improvement,fix" %}
## Email templates, lead score summary, and campaign fields

* **New email templates** — holiday templates built on new root code for better display across more email clients. Includes more content blocks, higher image resolution, and a new settings box for preheader, Google font, and social share preview.
* **Lead score summary** — see how each contact earned its current score. A "Score summary" tab on the contact card lists the fulfilled score rules and shows a score timeline.
* **Rich text editor in campaign fields** — format campaign field text with bold, italics, hyperlinks, and more.
* **Sort campaign fields** — reorder campaign fields with drag-and-drop and add descriptions.
* File uploads now accept more extensions, including ics and woff2.

<details>

<summary>Fixed</summary>

* SuperOffice CRM contact imports fix.
* Fixes to handling empty default fields in SuperOffice CRM.
* Fixed forms that resulted in a blank thank-you page when the "Note" field was left empty.
* Minor bug fixes in lead scoring calculations.
* The user interface language now matches the browser language.

</details>
{% endupdate %}

{% update date="2022-03-28" tags="feature" %}
## Clone block in email editor and more campaign field types

* **Clone block** — copy any content block while building an email. Hover over the block and click the duplicate icon.
* **More campaign field types** — text, text area, rich text, date and time, images, droplist. Date and time of the latest update is now available in the API.
* **Sort campaign fields** with drag-and-drop; add field descriptions to keep an overview.
{% endupdate %}

{% endupdates %}
