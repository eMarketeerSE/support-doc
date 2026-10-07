---
hidden: true
description: >-
  Campaign automation that sends a notification about the contact who triggered it, by email, SMS or both.
---

# Send notification automation

The Send notification automation is a [campaign automation](campaign-automations.md) that sends a notification about the contact who triggered it, by email, SMS or both. Use it to alert a colleague, for example when a contact submits a form.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/campaign-automation-send-notification-settings.png" alt="Send notification automation settings with the name, email addresses, mobile phone numbers and Do only once per contact"></div>

## Settings

* **Name** — a name for the automation, shown in the campaign's **Automation rules** list.
* **...to these e-mail addresses** — the email addresses to notify.
* **...and these mobile phone numbers (incl. country code)** — the mobile numbers to notify by SMS, including the country code, for example +46701234567.
* **Do only once per contact** — selected by default, so the automation runs at most once for each contact.

## Trigger

Choose the component and event that run the automation under **When this happens**. See [Choose the trigger](campaign-automations.md#choose-the-trigger).

**Related Journey step:** [Notify stakeholder](../../documentation/journeys/journey-step-notify-stakeholder.md), which is similar but sends email only.
