# Release notes — November 26: templates, lead score summary, campaign fields, and email report improvements

This release adds new email templates, a lead score summary on the contact card, a rich text editor in campaign fields, and improvements to filtering out false positive email clicks.

## New and updated features

### New email templates

The new email templates include holiday templates and come with more than a fresh look. They are built with new root code, so they display better in more email clients than the previous templates. You also get more content blocks, higher image resolution, and a new email settings box where you set the preheader and pick a Google font. The same settings box controls how the email link preview looks if you share the email link on social media.

These templates replace the old ones, but your saved templates are kept as-is. We recommend rebuilding them on one of the new templates to take advantage of the additional design options and better display in more email clients.

See [the email templates article](https://support.emarketeer.com/knowledgebase/email-templates/).

### Lead score summary

With the lead score summary, you can see how each contact got its current score. The summary lists the lead score rules that the contact fulfills. There is also a timeline that shows what the contact's score has looked like over time. You find the score summary when you open a contact card and click the new "Score summary" tab.

- [Video tutorial: how lead scoring works in eMarketeer](https://support.emarketeer.com/knowledgebase/how-lead-scoring-works-in-emarketeer/)
- [Video: how to know what to score on and common lead scoring mistakes](https://support.emarketeer.com/knowledgebase/how-to-set-up-your-lead-scoring-model-and-lead-scoring-mistakes/)

### Rich text editor in campaign fields

Campaign fields let you set up custom fields for your campaign, including images, headlines, and dates. A rich text editor now joins the campaign fields family. You can customize the text you use as a campaign field with font options, hyperlinks, and other formatting.

See [how to use campaign fields](https://support.emarketeer.com/knowledgebase/how-to-use-campaign-fields-in-emarketeer/).

### Improvements to filtering out false positive email clicks

False positive email clicks are clicks made by an email service to check whether the email could be spam — a test click before the email is let into an inbox to confirm it does not lead to suspicious pages. Every email marketing service has to tell those "bot clicks" apart from real clicks from your recipients. Otherwise they appear as false positive clicks in the email report.

eMarketeer already avoids showing false positives in the email report by looking at click behavior and timing. If it looks like a bot, it is not shown in the report. This update fine-tunes the algorithm further to filter out more false clicks.

### File uploads

Files now accepts more file extensions, including ics and woff2.

## Integrations

- SuperOffice CRM contact imports fix.
- Fixes to handling empty default fields in SuperOffice CRM.
- API2 migration.
- Updates to the Zapier integration.

## General bug fixes

- Fixed forms that resulted in a blank thank-you page if the "Note" field was left empty.
- Minor bug fixes in lead scoring calculations.
- The user interface language now matches the browser language.
