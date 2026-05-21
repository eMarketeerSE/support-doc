# Change log – eMarketeer Support

### Release - 2026-04-14

##### **Forms**

-   **Features**

-   -   Forms can now send confirmation emails on submission.
    -   Campaign fields and personalization tokens can now be used in forms.
    -   Additional language options added for forms and the default translations have been expanded.

-   **Fixes**

-   -   "I'm not a robot" recaptcha text is now translated with form language versions.
    -   Fixed server error when adding large background images to forms.
    -   Resolved display issues with form themes.
    -   Fixed duplicate email error in form editor.
    -   Options now load correctly in custom contact card field dropdowns.

##### **Journeys**

-   **Features**

-   -   Journeys now report status per individual step.

-   **Fixes**

-   -   Fixed an issue where journeys could get stuck in a loop on signal triggers.
    -   Improved journey conditional logic for contacts that have submitted the same form multiple times.
    -   Fixed a bug where if/else steps failed to save.

##### **Dynamics 365 / CRM Integration**

-   **Features**

-   -   It is now possible to choose an owner when creating a lead in Dynamics.
    -   Lead ID from Dynamics is now shown on the contact card.
    -   Activities created with Journey steps can now be scheduled.
    -   Share to CRM – eMarketeer contacts can now be shared/created in Dynamics.
    -   Web panels are now created automatically as Dynamics views on integration.

-   **Fixes**

-   -   Fixed an issue where the listing of marketing lists sometimes were empty.
    -   Fixed an issue where activities sometimes failed to be created.

##### **Other fixes and improvements**

-   Fixed an issue where exporting contacts from the checklist to SuperOffice failed.
-   Improved handling of SuperOffice webhooks.
-   Users are now notified when email domain check fails.
-   Made improvements to the Active Campaigns widget.
-   Fixed an issue where campaign fields weren't copied when duplicating a campaign.
-   Deprecated old Zapier API endpoint has been removed

### Release 2026-03-10

**Major feature**

-   **New Dashboard report: Operational Report -** Get a full view of what is going on in your campaigns account wide.
    -   **Sendouts and Web Sessions -** A timeline of sendouts you’ve made over time (acts as an account timeline) as well as how your website sessions correlate to those sendouts.
    -   **Recent Sendouts** - Shows the five most recent email and sms sendouts with over 20 recipients, as well as upcoming scheduled sendouts . Click the component names to enter the report.
    -   **Latest Form Submits** - Shows the 5 latest form submissions. Click component names to view the report. Click contact names to open the contact card.
    -   **Active Campaigns** - Lists the campaigns that have been the most recently active (had the most recent engagement). Includes links to open the campaign.
    -   **Recent Created work** - Lists the most recently created components and includes the link to open them.
    -   **Active Journeys** - Lists the most recently active Journeys and includes links to open them, and the latest contact that triggered the Journey.

**Minor feature**

-   Forms (not legacy forms) are now by default compliant with the European Accessibility Act.

**Fixes and other improvements**

-   Fixed UI issues with the email checklist.
-   Fixed an issue where Journeys failed to send emails.

### Release 2026-02-23

**Major feature**

-   **Microsoft Dynamics integration: Journey Steps -** Use Journeys to create Leads or Contacts in your Microsoft Dynamics account with 6 new Journey steps.
    -   Create/Update Lead
    -   Add Activity
    -   Add Lead activity
    -   Add Contact activity
    -   Add Lead to Marketing List
    -   Add Contact to Marketing List

**Minor features**

-   **Email checklist contacts drilldown -** The email checklist now features a contact drilldown, complete with bulk actions and export.
-   **Dashboard report contacts drilldown** - Numbers in dashboard reports are now clickable and will show the identified contacts.
-   **Dashboard report export** \- Dashboards can now be exported.

**Fixes and other improvements**

-   Made further improvements to the email domain authentication process.
-   Fixed an issue where bulk actions failed to update legal basis.
-   Made improvements to the Traffic Analyzer drilldown panels while filtered.
-   Manage automations now list up to 50 contacts per page.
-   LinkedIn integration can now be integrated to organizationBrand pages.
-   Fixed an issue where the original traffic source sometimes was not set correctly.
-   Fixed an issue where a paused SuperOffice automation didn’t resume after the contact had been created in SuperOffice.
-   The SuperOffice integration Legal basis sync now updates the Legal basis of all SuperOffice contacts with a matching email address.

### Release 2026-01-26

**Major feature**

-   **Drilldown reports - The Traffic Analyzer:** The Traffic Analyzer report now features detailed drilldown reports to really explain the details behind the numbers. Click on any segment to view more details _or_ filter the entire report based on the segment.

**Minor feature**

-   **Email Reputation -** The Email Health report now features the “Reputation findings” widget that will report issues with your sending domain that may impact your deliverability.

**Fixes and other improvements**

-   Made improvements to the email domain authentication and validation. Now it validates more scenarios, has additional and more rigorous checks and is easier to restart.
-   Fixed an issue where events logged were displayed with different timezones on the contact timeline and the detailed event description.
-   Fixed an issue where the “Original Traffic Source” could be overwritten, when the contact gained a “Created Source”.

### Release 2025-12-18

Rounding off the year with our latest Dashboard report: Email Health.

**Major feature**

-   **Email health report.** The Email Health Dashboard gives you a clear, actionable overview of your email deliverability and sender reputation. It helps you spot problems early and protect your sender reputation over time.

**Minor feature**

-   **Email domain problem notifications.** Notifications will now be sent if a problem is detected with your authenticated email domains. 

**Fixes and other improvements**

-   Journeys can no longer be saved if they contain invalid filter definitions. This is to prevent the creation of Journeys with errors.
-   Fixed an issue where links to forms in copied campaigns referred back to the original campaign. New links that are created will refer correctly when the campaign is copied.
-   Made UI improvements to the Traffic Analyzer Dashboard report on small screens.

### Release 2025-12-04

This release has been focused on our latest addition to our suite of Dashboard reports, namely the Traffic Analyzer.

**Major features**

-   **Traffic Analyzer.** This report is an interactive Sankey diagram that shows the flow of website traffic starting with the source, following it all the way to the conversion point. The diagram aims to show you in greater detail where your traffic comes from and what is currently working.

**Minor features**

-   **Reworked the SuperOffice export feature.** It is now faster and is performed in the background allowing you to work with eMarketeer for the duration, giving you a notification under the bell icon when it is completed. It is also less dependent on contact data formatting which previously was a common cause for failed exports.

**Other improvements and fixes**

-   Ghost clicks are now filtered out correctly from email engagements events on the Contact Timeline.
-   Fixed an issue where Leadboard wouldn’t load correctly and the page had to be refreshed.
-   Form JSON editor is now available to users without the Developer role.
-   Improved the Website script page, to make it easier to copy the account Tracker ID.
-   Made adjustments to our default leadscore sets. Now they make use of the new web tracker.
-   Fixed an issue where rich text campaign fields were formatted incorrectly on the read on web version of emails.

### Release 2025-11-05

This release is a smaller update with the focus to add improvements to Dashboard and Forms.

##### **November 5 update features** 

-   **Default Sales team & Lead stream.** If your eMarketeer account did not have defined Sales teams or Lead streams, then default Sales teams and Lead streams have been created.
-   **Dashboard fixes and improvements**
    -   AI referals
    -   General data improvements
    -   Webtracker installed on all hosted forms
-   **Form improvements**
    -   Form language shown in spreadsheet report
    -   Timestamp shown in spreadsheet report
    -   Delete selected form answer in spreadsheet report
    -   Share form report
    -   Form spreadsheet now shows more rows

### Release October 2025

This release has been focused on calibrating the Marketing Performance Dashboard. Improvements to the Form component have also been made.

**Dashboard / Tracker**

-   Dashboard widget: What’s driving performance has been reworked.
-   Added tracking on eMarketeer hosted forms and web pages.

**Forms**

-   Now supports multiple integrated forms to render on the same page.
-   Captcha can no longer be hidden.
-   Captcha is no longer counted as a question for the form navigation progress bar.

**Other fixes** 

-   Fixed an issue with the Facebook connection that caused the connected account token to expire after 3 months.

### Release August 2025

The work has been mainly focused on developing the Marketing dashboard to present and analyze the data of the new web tracker. This feature is in early access for some accounts. Parallel work has been done to add more features and solve bugs relating to the new form component.

**Major Feature**

-   **Marketing Performance Dashboard.** This dashboard is designed to give you clarity on what’s working in your marketing. Instead of juggling different reports, you now have a single place to see:
    -   Outbound activity and nurturing (emails, engagements, captured leads, nurturing, qualified leads)
    -   Website traffic over time and by source (ads, SEO, social, email, and more)
    -   Conversions and MQLs compared to previous periods
    -   What campaigns, ads, and forms drive performance
    -   The full funnel view from MQL → SQL → Opportunities → Won
    -   Which new MQLs are added to your Lead Board

**Minor Feature**

-   Support for SSO - Entra. 

**Other features and improvements**

-   Custom contact fields for Forms.
-   Rewrote how automations handles contacts with an incorrect External ID.
-   Occurrence and timeframe filter segmentation options have been added to Signals.
-   Lead Explorer has been removed.
-   Home screen has been removed to host the new dashboards.

### Release June 2025

Forms and webracker is released into production. https://support.emarketeer.com/product-launch-june-2025/

**Major features**

-   **New form component.** A new campaign component is launched. The old form component is renamed to “Form (Legacy)”. _Key features:_
    -   Sleek, flexible designs to match your brand
    -   A user-friendly interface for seamless form building
    -   New question types (20+ input types)
    -   Quizzes, scored surveys, timers and calculators
    -   Enhanced respondent experience
    -   Mobile friendly (auto complete, responsive)
    -   Effortless website integration with automatic update
    -   Multi language forms with translations
    -   GDPR-friendly reCAPTCHA for peace of mind
    -   Built-in UTM tracking for conversion performance

-   **New Web tracker.** We have rebuilt our website tracking from the ground up with a lot of improvements. Most importantly the new tracking is completely cookieless, meaning that you will track a lot more traffic than before as more and more browsers are blocking cookie based tracking. In addition to being cookieless, the new tracking picks up as soon as a visitor enters your site for the first time. Every time the visitor comes back, the tracking continues and finally, when the visitor converts to a lead via your website form, all the tracking history will be stored on the new lead. This tells you where the lead came from initially and helps you understand which of your traffic generation initiatives performs best. Find out more in our support documentation: [https://support.emarketeer.com/documentation/the-web-tracker/](https://support.emarketeer.com/documentation/the-web-tracker/)

### Release April 2025

Most of the development work is being done in the background on Forms and Webtracker.

**Major features**

-   **UTM Parameters.** All links from eMarketeer content now automatically contain UTM parameters. Google analytics integration has been removed from the Plugins & Integrations page.

**Minor improvements and fixes**

-   Made changes to the login process, speeding it up.
-   Added a new filtering option for under the Contact list segment: “Any list”.

### Release March 2025

This release’s focus was to continue adding functionality to the not yet released form editor, and laying the foundations for the new web tracker which is intended to release simultaneously. 

**Major features**

-   **Contact Sources.** Created, Original, and Latest traffic sources on contact level. UI elements on the contact card and filter capabilities have been added.

**Other improvements and fixes**

-   Fixed an issue where the LinkedIn integration.
-   Added monitor systems for the LinkedIn integration.
-   Continued to improve the new matching logic for SuperOffice Journey steps.

### Release February 2025

This release focussed on adding functionality to the not yet released form editor, making sure it works with existing systems.

**Other improvements**

-   Added a new matching logic for SuperOffice Journey steps.

### Release 2025-01-15

Since last release the majority of development has been spent on upcoming new features for Q1 2025.

##### **Main features**

-   **Contact enrichment.** When a new contact is created we check CRM for missing details and populate the contact. If FullContact is enabled data will be enriched from there after CRM.
-   **Permission pass system** (double opt in) for specific recipient domains. (For customers that has received too many complaints och certain email service providers).

**Other improvements and fixes**

-   Tweaked algoritm for non-engaged contacts.
-   Implementation and fixes for new billing system
-   Improved HTML design for Journey notifier email
-   Added more fields to be stored from Facebook (Meta) lead forms (work phone, work email, job title)
-   Dates for creation and updates och contacts are now showing correctly.
-   Journey step "Wait for trigger" solved problem with contacts entering multiple times
-   Email complaints now unsubscribe contact in all scenarios.
-   Facebook lead forms did not trigger journeys. This is solved.

## Previous releases

### Release 2024-07-31

**Main features**

-   **SuperOffice alarm flag** - Partial release which aims to enable the notification bell on certain activities created by eMarketeer.
-   **SuperOffice "new contact created" signal** - Under Super Office integration settings in eMarketeer you can now opt to enable "New contact created" signal. When this is enabled, any new contact created in SuperOffice will automatically be created in eMarketeer and can triggerJourneys. This is ex. useful for sending welcome emails to new contacts.
-   **Journey: Delete lead step** - When a contact reaches this step it is removed from all lead boards.
-   **Export direct to Excel** - Exports of contacts in eMarketeer now has the option to export directly to an Excel file.
-   **Contact lists shows name in UI** - When clicking to view a contact list, the list name is now visible in the UI.

Various maintenance and bug fixes

-   Stabilized SMS sending further
-   Small improvements of Dynamics365 integration
-   Fixed bug when copying certain components in a campaign
-   Fixed bug in Forms where hidden required questions prevented submission

### Release 2024-07-04

**Main features**

-   Journey starting point: New filters available on "Dates". Ex. "Last email sent"
-   Journeys: Personalize descriptions of sales and activities with contact card fields
-   Journeys: See step settings on active Journeys (Editing is disabled when active)
-   Lead board: filter lead board per sales user
-   Lead board: filter on unsassigned leads
-   Application: language is now set under "settings" -> "My Account"
-   Application: Contact engagement filter, added 6 months to date range
-   API: List contact lists
-   API: Delete contact
-   SuperOffice side panel: Show active subscriptions
-   SuperOffice consent sync: Now happens on schedule every 30 minutes. (Previously ly when sending emails)
-   Microsoft Dynamics consent sync: Now happens on schedule every 30 minutes.

**Bugs solved:**

-   Unable to remove leads from the lead board
-   Automation Push to URL gave success even if it failed
-   Journey step: add subscription sometimes failed
-   Unsubscribe page looked bad on mobile
-   "Tell a friend" in emails did not always work
-   Generating leads on lead board sometimes took too long
-   SO side panel social icons missing
-   Read on web link did not work if the email content had campaign fields

### Release 2024-04-18

Improvements to help customers use a better email practice are implemented. Read more about [best practices here](https://support.emarketeer.com/knowledgebase/maximizing-email-marketing-success-best-practices-and-pitfalls-to-avoid/).

-   Email domains via-em.com removed for new customers using custom domain.
    -   Using your own company domain increases delivery quality.
-   Default sending settings are now the most GDPR friendly method which only sends to contacts having a positive consent. (No record of consent will block sending). This affects new customers only.
-   Improved pre-sendout email validation to reduce bounces.
-   Email service redundancy implemented
-   New contact email status "Inactive email".
    -   New sendout option - "Exclude inactive contacts". [Read more](https://support.emarketeer.com/documentation/exclude-inactive-recipients/)
    -   New contact filter on "Deliverable but unengaged" in the delivery filter.

Other new features and changes

-   Microsoft Dynamics CRM integration phase one. ([Documentation](https://support.emarketeer.com/documentation/microsoft-dynamics-integration/))
    -   Connect, import from CRM and consent sync available

### Release 2024-03-23

-   This release was maintenance related.
    -   Upgrade PHP and rewrite of several functions
    -   Re-write of SMS sending module for performance and stability
-   Other small fixes and adjustments to the system and UI

### Release 2024-02-12

-   Journeys
    -   **Trigger Journey from contact card**/lead card and side panel in SuperOffice. Create Journeys and let users in eMarketeer or CRM trigger them from the contact card on selected contacts.
    -   **Compliance with Google/Yahoo email requirements** The settings page for "Authenticate email domain" now contains and checks all DNS records required to send emails complying to Google and Yahoo's new requirements. This improves delivery also to all email deliveries and allows better Dmarc alignment.
    -   **Journeys, create with manual starting point** (without filter) If you create Journeys only to be triggered on Contact cards you can now select "Manual trigger" when cresting Journeys.
    -   **Journey step conditions** (skip if conditions are not met) Some steps you may want to skip if some criteria is not met (without creating a new branch). You can now do this by setting conditions on the steps.
    -   **Journey: Dynamic recipient on Notifier step** Use @ character to insert contact card fields as recipient address. Useful if you have sales contact email as custom field on your contacts.
-   SuperOffice Side panel
    -   **Create contact** If the contact you want to show the side panel for is missing in eMarketeer, you now get the option to create it.
        -   Note: For this to work you need to restart your integration so the web panels get updated..
    -   **Side panel in SO requires no paid user** The new side panel for contact and company summary requires an eMarketeer user. You can now create users that are free, and only have access to these side panels.

### Release 2024-01-15

-   Journey Templates
    -   You will be able to choose from a number of categorized, pre-built Journeys to adapt to your needs.
-   Journey Step: Wait for trigger
    -   This step waits until a contact performs a defined task before the Journey continues.
-   [SuperOffice Signals: Sale Closed](https://support.emarketeer.com/documentation/superoffice-signals/)
    -   SuperOffice can tell when a sale is closed (sold or lost) and send the sale data to eMarketeer. This can be used to:
        -   Move a lead to sold/lost automatically
        -   Send a welcome email to new customers
        -   Trigger any Journey to react on a sale closed

### Release 2023-12-04

-   [Facebook connector](https://support.emarketeer.com/documentation/facebook-lead-forms/)
    -   Now you can receive Lead Form submits from Facebook Ads directly into eMarketeer for scoring, nurturing and lead generation. Connect from your settings page.
-   [Transactional email sendouts](https://support.emarketeer.com/documentation/transactional-sendouts/)
    -   When sending an email you can now opt to override consent and send to the whole list. Use with caution, only for non-marketing emails.
-   [Custom Signals](https://support.emarketeer.com/documentation/custom-signals-api/)
    -   Using the API you can now send custom signals from other systems which will show on your contacts timeline. These can be scored, trigger journeys and leads.

### Release 2023-11-08

-   [SuperOffice Consent Sync complete rebuild](https://support.emarketeer.com/upcoming-changes-to-emarketeer-superoffice-consent-sync/)
    -   Now works on Online and onPremise
    -   Syncs consent when sending emails and SMS. [Read more](https://support.emarketeer.com/upcoming-changes-to-emarketeer-superoffice-consent-sync/)
-   Journey improvements
    -   Send email: Transactional option (ignore consent)
    -   IF/Else logic
        -   Now it uses only the latest answer in a form when checking if/else.
        -   Note: This takes effect only after the maintenance scheduled for 11 nov 2023.
    -   SuperOffice create activity and sale - new options
        -   Add to project (adds contact and sale/activity to the project)
        -   Select assigned SO sales user (use automatic or specific assigment)
    -   Legal basis, optional description text when setting legal basis.
    -   New triggers for starting a journey
        -   Legal basis change
        -   Lead stage change
-   Contacts
    -   Show tags in contact list
-   SuperOffice side panel (Contact summary)
    -   Show legal basis information
    -   Show contact tags
-   Forms open/close settings
    -   New editor for closed message (formatting and links)
-   Bug fixes
    -   When deleting a form answer, the timeline event should also be deleted.

### Release 2023-10-16

-   Journey step: start new Journey - start a new Journey as a step in the flow
-   Journey Step: Send notifier email
-   API for tags
-   Show Tags in campaign list
-   SuperOffice Sidepanel shows what was answered in a eMarketeer form or Linkedin Lead Gen Form
-   Lead Board: Quick share to CRM (Finds best match)
-   Speed up email send from Journeys and Quick send

plus various bug fixes

-   javascript in Form design html failed to save
-   Journeys stats and duplicate emails etc
-   various small fixes

### Release 2023-09-12

-   New API released for
    -   Contacts
    -   Engagement (history/stats)
    -   Tags
-   Access API key and Swagger docs from your account under "Settings"

### Release 2023-08-03

-   LinkedIn connector for Lead Gen Forms. Automatically send submitted lead forms on LinkedIn to eMarketeer.
-   Signals API - allows external systems to send contacts and events to eMarketeer.
