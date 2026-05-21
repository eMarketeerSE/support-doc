# Change log

This is the running record of eMarketeer releases. Each entry lists the major features, minor features, and fixes shipped in that release.

## Release 2026-04-14

### Forms

Features:

- Forms can now send confirmation emails on submission.
- Campaign fields and personalization tokens can now be used in forms.
- Additional language options have been added, and the default translations have been expanded.

Fixes:

- The "I'm not a robot" reCAPTCHA text is now translated with form language versions.
- Fixed a server error when adding large background images to forms.
- Resolved display issues with form themes.
- Fixed a duplicate email error in the form editor.
- Options now load correctly in custom contact card field dropdowns.

### Journeys

Features:

- Journeys now report status per individual step.

Fixes:

- Fixed an issue where journeys could get stuck in a loop on signal triggers.
- Improved journey conditional logic for contacts that have submitted the same form multiple times.
- Fixed a bug where if/else steps failed to save.

### Dynamics 365 / CRM Integration

Features:

- You can now choose an owner when creating a lead in Dynamics.
- Lead ID from Dynamics is now shown on the contact card.
- Activities created with journey steps can now be scheduled.
- Share to CRM — eMarketeer contacts can now be shared or created in Dynamics.
- Web panels are now created automatically as Dynamics views on integration.

Fixes:

- Fixed an issue where the listing of marketing lists was sometimes empty.
- Fixed an issue where activities sometimes failed to be created.

### Other fixes and improvements

- Fixed an issue where exporting contacts from the checklist to SuperOffice failed.
- Improved handling of SuperOffice webhooks.
- Users are now notified when an email domain check fails.
- Improvements to the Active Campaigns widget.
- Fixed an issue where campaign fields were not copied when duplicating a campaign.
- The deprecated old Zapier API endpoint has been removed.

## Release 2026-03-10

Major feature:

- **New Dashboard report: Operational Report.** Get a full view of what is going on in your campaigns account wide.
  - **Sendouts and Web Sessions.** A timeline of sendouts you've made over time (acts as an account timeline) as well as how your website sessions correlate to those sendouts.
  - **Recent Sendouts.** Shows the five most recent email and SMS sendouts with over 20 recipients, as well as upcoming scheduled sendouts. Click the component names to enter the report.
  - **Latest Form Submits.** Shows the five latest form submissions. Click component names to view the report. Click contact names to open the contact card.
  - **Active Campaigns.** Lists the campaigns that have been the most recently active (had the most recent engagement). Includes links to open the campaign.
  - **Recent Created work.** Lists the most recently created components and includes the link to open them.
  - **Active Journeys.** Lists the most recently active journeys and includes links to open them, and the latest contact that triggered the journey.

Minor feature:

- Forms (not legacy forms) are now compliant by default with the European Accessibility Act.

Fixes and other improvements:

- Fixed UI issues with the email checklist.
- Fixed an issue where journeys failed to send emails.

## Release 2026-02-23

Major feature:

- **Microsoft Dynamics integration: journey steps.** Use journeys to create leads or contacts in your Microsoft Dynamics account with six new journey steps.
  - Create/Update Lead
  - Add Activity
  - Add Lead activity
  - Add Contact activity
  - Add Lead to Marketing List
  - Add Contact to Marketing List

Minor features:

- **Email checklist contacts drilldown.** The email checklist now features a contact drilldown, complete with bulk actions and export.
- **Dashboard report contacts drilldown.** Numbers in dashboard reports are now clickable and will show the identified contacts.
- **Dashboard report export.** Dashboards can now be exported.

Fixes and other improvements:

- Further improvements to the email domain authentication process.
- Fixed an issue where bulk actions failed to update legal basis.
- Improvements to the Traffic Analyzer drilldown panels while filtered.
- Manage automations now lists up to 50 contacts per page.
- The LinkedIn integration can now be connected to organization Brand pages.
- Fixed an issue where the original traffic source sometimes was not set correctly.
- Fixed an issue where a paused SuperOffice automation did not resume after the contact had been created in SuperOffice.
- The SuperOffice integration Legal basis sync now updates the legal basis of all SuperOffice contacts with a matching email address.

## Release 2026-01-26

Major feature:

- **Drilldown reports — The Traffic Analyzer.** The Traffic Analyzer report now features detailed drilldown reports that explain the details behind the numbers. Click any segment to view more details _or_ filter the entire report based on the segment.

Minor feature:

- **Email Reputation.** The Email Health report now features the "Reputation findings" widget, which reports issues with your sending domain that may impact your deliverability.

Fixes and other improvements:

- Improvements to email domain authentication and validation. It now validates more scenarios, has additional and more rigorous checks, and is easier to restart.
- Fixed an issue where logged events were displayed with different timezones on the contact timeline and the detailed event description.
- Fixed an issue where the "Original Traffic Source" could be overwritten when the contact gained a "Created Source".

## Release 2025-12-18

Rounding off the year with our latest Dashboard report: Email Health.

Major feature:

- **Email health report.** The Email Health Dashboard gives you a clear, actionable overview of your email deliverability and sender reputation. It helps you spot problems early and protect your sender reputation over time.

Minor feature:

- **Email domain problem notifications.** Notifications will now be sent if a problem is detected with your authenticated email domains.

Fixes and other improvements:

- Journeys can no longer be saved if they contain invalid filter definitions. This prevents the creation of journeys with errors.
- Fixed an issue where links to forms in copied campaigns referred back to the original campaign. New links that are created will refer correctly when the campaign is copied.
- UI improvements to the Traffic Analyzer Dashboard report on small screens.

## Release 2025-12-04

This release focused on our latest addition to the suite of Dashboard reports: the Traffic Analyzer.

Major features:

- **Traffic Analyzer.** This report is an interactive Sankey diagram that shows the flow of website traffic starting with the source, following it all the way to the conversion point. The diagram shows you in greater detail where your traffic comes from and what is currently working.

Minor features:

- **Reworked the SuperOffice export feature.** It is now faster and is performed in the background, so you can keep working with eMarketeer for the duration. You get a notification under the bell icon when it is completed. It is also less dependent on contact data formatting, which was previously a common cause of failed exports.

Other improvements and fixes:

- Ghost clicks are now filtered out correctly from email engagement events on the contact timeline.
- Fixed an issue where Leadboard would not load correctly and the page had to be refreshed.
- The form JSON editor is now available to users without the Developer role.
- Improved the Website script page to make it easier to copy the account Tracker ID.
- Adjustments to the default lead score sets. They now make use of the new web tracker.
- Fixed an issue where rich text campaign fields were formatted incorrectly on the read-on-web version of emails.

## Release 2025-11-05

This release is a smaller update focused on improvements to Dashboard and Forms.

### November 5 update features

- **Default Sales team and Lead stream.** If your eMarketeer account did not have defined Sales teams or Lead streams, default Sales teams and Lead streams have been created.
- **Dashboard fixes and improvements**
  - AI referrals
  - General data improvements
  - Web tracker installed on all hosted forms
- **Form improvements**
  - Form language shown in spreadsheet report
  - Timestamp shown in spreadsheet report
  - Delete selected form answer in spreadsheet report
  - Share form report
  - Form spreadsheet now shows more rows

## Release October 2025

This release focused on calibrating the Marketing Performance Dashboard. Improvements to the form component have also been made.

Dashboard / Tracker:

- The dashboard widget "What's driving performance" has been reworked.
- Added tracking on eMarketeer-hosted forms and web pages.

Forms:

- Now supports multiple integrated forms rendered on the same page.
- Captcha can no longer be hidden.
- Captcha is no longer counted as a question for the form navigation progress bar.

Other fixes:

- Fixed an issue with the Facebook connection that caused the connected account token to expire after three months.

## Release August 2025

This release focused mainly on developing the Marketing dashboard to present and analyze data from the new web tracker. This feature is in early access for some accounts. Parallel work added more features and fixed bugs related to the new form component.

Major feature:

- **Marketing Performance Dashboard.** This dashboard is designed to give you clarity on what's working in your marketing. Instead of juggling different reports, you now have a single place to see:
  - Outbound activity and nurturing (emails, engagements, captured leads, nurturing, qualified leads)
  - Website traffic over time and by source (ads, SEO, social, email, and more)
  - Conversions and MQLs compared to previous periods
  - What campaigns, ads, and forms drive performance
  - The full funnel view from MQL → SQL → Opportunities → Won
  - Which new MQLs are added to your Lead Board

Minor feature:

- Support for SSO — Entra.

Other features and improvements:

- Custom contact fields for forms.
- Rewrote how automations handle contacts with an incorrect External ID.
- Occurrence and timeframe filter segmentation options have been added to Signals.
- Lead Explorer has been removed.
- The Home screen has been removed to host the new dashboards.

## Release June 2025

Forms and the web tracker are released into production. See [Product launch June 2025](product-launch-june-2025.md).

Major features:

- **New form component.** A new campaign component is launched. The old form component is renamed to "Form (Legacy)". Key features:
  - Sleek, flexible designs to match your brand
  - A user-friendly interface for seamless form building
  - New question types (20+ input types)
  - Quizzes, scored surveys, timers, and calculators
  - Enhanced respondent experience
  - Mobile friendly (auto complete, responsive)
  - Effortless website integration with automatic update
  - Multi-language forms with translations
  - GDPR-friendly reCAPTCHA
  - Built-in UTM tracking for conversion performance

- **New web tracker.** We have rebuilt our website tracking from the ground up with many improvements. Most importantly, the new tracking is completely cookieless, so you will track much more traffic than before as more browsers block cookie-based tracking. The new tracking picks up as soon as a visitor enters your site for the first time. Every time the visitor comes back, the tracking continues. When the visitor converts to a lead via your website form, all the tracking history is stored on the new lead. This tells you where the lead came from initially and helps you understand which of your traffic generation initiatives perform best. See [The web tracker](https://support.emarketeer.com/documentation/the-web-tracker/).

## Release April 2025

Most development work is being done in the background on Forms and the web tracker.

Major features:

- **UTM Parameters.** All links from eMarketeer content now automatically contain UTM parameters. Google Analytics integration has been removed from the Plugins & Integrations page.

Minor improvements and fixes:

- Changes to the login process, speeding it up.
- Added a new filtering option under the contact list segment: "Any list".

## Release March 2025

This release focused on continuing to add functionality to the not-yet-released form editor, and laying the foundations for the new web tracker which is intended to release simultaneously.

Major features:

- **Contact Sources.** Created, Original, and Latest traffic sources on contact level. UI elements on the contact card and filter capabilities have been added.

Other improvements and fixes:

- Fixed an issue with the LinkedIn integration.

> TODO: verify — original entry reads "Fixed an issue where the LinkedIn integration." with no further detail.

- Added monitor systems for the LinkedIn integration.
- Continued to improve the new matching logic for SuperOffice journey steps.

## Release February 2025

This release focused on adding functionality to the not-yet-released form editor, making sure it works with existing systems.

Other improvements:

- Added a new matching logic for SuperOffice journey steps.

## Release 2025-01-15

Since the last release, the majority of development has been spent on upcoming new features for Q1 2025.

### Main features

- **Contact enrichment.** When a new contact is created, we check CRM for missing details and populate the contact. If FullContact is enabled, data will be enriched from there after CRM.
- **Permission pass system** (double opt-in) for specific recipient domains. (For customers that have received too many complaints from certain email service providers.)

Other improvements and fixes:

- Tweaked the algorithm for non-engaged contacts.
- Implementation and fixes for the new billing system.
- Improved HTML design for the journey notifier email.
- Added more fields to be stored from Facebook (Meta) lead forms (work phone, work email, job title).
- Dates for creation and updates of contacts are now showing correctly.
- The journey step "Wait for trigger" no longer lets contacts enter multiple times.
- Email complaints now unsubscribe the contact in all scenarios.
- Facebook lead forms now trigger journeys correctly.

## Previous releases

### Release 2024-07-31

Main features:

- **SuperOffice alarm flag.** Partial release that enables the notification bell on certain activities created by eMarketeer.
- **SuperOffice "new contact created" signal.** Under SuperOffice integration settings in eMarketeer, you can now opt to enable the "New contact created" signal. When this is enabled, any new contact created in SuperOffice will automatically be created in eMarketeer and can trigger journeys. This is useful for sending welcome emails to new contacts, for example.
- **Journey: Delete lead step.** When a contact reaches this step, it is removed from all lead boards.
- **Export direct to Excel.** Exports of contacts in eMarketeer now have the option to export directly to an Excel file.
- **Contact lists show name in UI.** When clicking to view a contact list, the list name is now visible in the UI.

Various maintenance and bug fixes:

- Stabilized SMS sending further.
- Small improvements to the Dynamics 365 integration.
- Fixed a bug when copying certain components in a campaign.
- Fixed a bug in forms where hidden required questions prevented submission.

### Release 2024-07-04

Main features:

- Journey starting point: new filters available on "Dates", for example "Last email sent".
- Journeys: personalize descriptions of sales and activities with contact card fields.
- Journeys: see step settings on active journeys (editing is disabled when active).
- Lead board: filter lead board per sales user.
- Lead board: filter on unassigned leads.
- Application: language is now set under Settings → My Account.
- Application: contact engagement filter, added 6 months to the date range.
- API: list contact lists.
- API: delete contact.
- SuperOffice side panel: show active subscriptions.
- SuperOffice consent sync: now happens on schedule every 30 minutes. (Previously only when sending emails.)
- Microsoft Dynamics consent sync: now happens on schedule every 30 minutes.

Bugs solved:

- Unable to remove leads from the lead board.
- Automation Push to URL gave success even if it failed.
- Journey step: add subscription sometimes failed.
- Unsubscribe page looked bad on mobile.
- "Tell a friend" in emails did not always work.
- Generating leads on the lead board sometimes took too long.
- SuperOffice side panel social icons missing.
- Read-on-web link did not work if the email content had campaign fields.

### Release 2024-04-18

Improvements to help customers follow better email practice. Read more about [best practices here](https://support.emarketeer.com/knowledgebase/maximizing-email-marketing-success-best-practices-and-pitfalls-to-avoid/).

- Email domains via-em.com removed for new customers using a custom domain.
  - Using your own company domain increases delivery quality.
- Default sending settings are now the most GDPR-friendly method, which only sends to contacts with a positive consent. (No record of consent will block sending.) This affects new customers only.
- Improved pre-sendout email validation to reduce bounces.
- Email service redundancy implemented.
- New contact email status "Inactive email".
  - New sendout option — "Exclude inactive contacts". [Read more](https://support.emarketeer.com/documentation/exclude-inactive-recipients/).
  - New contact filter on "Deliverable but unengaged" in the delivery filter.

Other new features and changes:

- Microsoft Dynamics CRM integration phase one. ([Documentation](https://support.emarketeer.com/documentation/microsoft-dynamics-integration/))
  - Connect, import from CRM, and consent sync available.

### Release 2024-03-23

- This release was maintenance related.
  - Upgrade PHP and rewrite of several functions.
  - Rewrite of the SMS sending module for performance and stability.
- Other small fixes and adjustments to the system and UI.

### Release 2024-02-12

- Journeys
  - **Trigger journey from contact card**, lead card, and side panel in SuperOffice. Create journeys and let users in eMarketeer or CRM trigger them from the contact card on selected contacts.
  - **Compliance with Google/Yahoo email requirements.** The settings page for "Authenticate email domain" now contains and checks all DNS records required to send emails complying with Google and Yahoo's new requirements. This improves delivery and allows better DMARC alignment.
  - **Journeys: create with manual starting point** (without filter). If you create journeys only to be triggered on contact cards, you can now select "Manual trigger" when creating journeys.
  - **Journey step conditions** (skip if conditions are not met). Some steps you may want to skip if some criteria are not met (without creating a new branch). You can now do this by setting conditions on the steps.
  - **Journey: dynamic recipient on Notifier step.** Use the @ character to insert contact card fields as the recipient address. Useful if you have a sales contact email as a custom field on your contacts.
- SuperOffice side panel
  - **Create contact.** If the contact you want to show the side panel for is missing in eMarketeer, you now get the option to create it.
    - Note: for this to work you need to restart your integration so the web panels are updated.
  - **Side panel in SO requires no paid user.** The new side panel for contact and company summary requires an eMarketeer user. You can now create users that are free and only have access to these side panels.

### Release 2024-01-15

- Journey Templates
  - You can choose from a number of categorized, pre-built journeys to adapt to your needs.
- Journey step: Wait for trigger
  - This step waits until a contact performs a defined task before the journey continues.
- [SuperOffice Signals: Sale Closed](https://support.emarketeer.com/documentation/superoffice-signals/)
  - SuperOffice can tell when a sale is closed (sold or lost) and send the sale data to eMarketeer. This can be used to:
    - Move a lead to sold/lost automatically.
    - Send a welcome email to new customers.
    - Trigger any journey to react to a sale closed.

### Release 2023-12-04

- [Facebook connector](https://support.emarketeer.com/documentation/facebook-lead-forms/)
  - You can now receive Lead Form submits from Facebook Ads directly into eMarketeer for scoring, nurturing, and lead generation. Connect from your settings page.
- [Transactional email sendouts](https://support.emarketeer.com/documentation/transactional-sendouts/)
  - When sending an email, you can now opt to override consent and send to the whole list. Use with caution, only for non-marketing emails.
- [Custom Signals](https://support.emarketeer.com/documentation/custom-signals-api/)
  - Using the API, you can now send custom signals from other systems, which will show on your contacts' timeline. These can be scored, trigger journeys, and trigger leads.

### Release 2023-11-08

- [SuperOffice Consent Sync complete rebuild](https://support.emarketeer.com/upcoming-changes-to-emarketeer-superoffice-consent-sync/)
  - Now works on Online and onPremise.
  - Syncs consent when sending emails and SMS. [Read more](https://support.emarketeer.com/upcoming-changes-to-emarketeer-superoffice-consent-sync/).
- Journey improvements
  - Send email: transactional option (ignore consent).
  - IF/Else logic
    - Now uses only the latest answer in a form when checking if/else.
    - Note: this takes effect only after the maintenance scheduled for 11 nov 2023.
  - SuperOffice create activity and sale — new options
    - Add to project (adds contact and sale/activity to the project).
    - Select assigned SO sales user (use automatic or specific assignment).
  - Legal basis: optional description text when setting legal basis.
  - New triggers for starting a journey
    - Legal basis change.
    - Lead stage change.
- Contacts
  - Show tags in contact list.
- SuperOffice side panel (Contact summary)
  - Show legal basis information.
  - Show contact tags.
- Forms open/close settings
  - New editor for closed message (formatting and links).
- Bug fixes
  - When deleting a form answer, the timeline event is now also deleted.

### Release 2023-10-16

- Journey step: Start new journey — start a new journey as a step in the flow.
- Journey step: Send notifier email.
- API for tags.
- Show Tags in campaign list.
- SuperOffice Sidepanel shows what was answered in an eMarketeer form or LinkedIn Lead Gen Form.
- Lead Board: Quick share to CRM (finds best match).
- Speed up email send from journeys and Quick send.

Plus various bug fixes:

- JavaScript in form design HTML failed to save.
- Journey stats and duplicate emails.
- Various small fixes.

### Release 2023-09-12

- New API released for:
  - Contacts
  - Engagement (history/stats)
  - Tags
- Access API key and Swagger docs from your account under Settings.

### Release 2023-08-03

- LinkedIn connector for Lead Gen Forms. Automatically send submitted lead forms on LinkedIn to eMarketeer.
- Signals API — allows external systems to send contacts and events to eMarketeer.
