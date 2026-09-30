---
description: >-
  The simplest path to sending an email in eMarketeer, from a finished email
  component to a delivered send-out.
layout:
  width: default
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
    visible: true
  tags:
    visible: false
  actions:
    visible: true
tags:
  - email
---

# How to send an email

This article walks through the simplest path to send an email in eMarketeer — from a finished email component to a list of contacts.

We skip the more advanced features here and focus on a straight-up send.

{% hint style="info" %}
Before you start, you need a finished email component. See [Creating your first email](basics-creating-email.md) if you do not have one yet.
{% endhint %}

{% stepper %}
{% step %}
### Start the send-out

Go to the campaign that contains the email and click **Send**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-campaign-components-send.png" alt="Campaign components with the Send icon highlighted on an email card"></div>
{% endstep %}

{% step %}
### Choose Send Now

This guide covers sending immediately. You also have the option to schedule the email for a later time.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-send-start-options.png" alt="Send E-mail page with the Send Now!, Scheduled Send and Automate Send options"></div>
{% endstep %}

{% step %}
### Send a test email or send to your contacts

**Option A — Send a test email to yourself (optional)**

To preview the email in your own email client, send yourself a quick test. Type your email address in the **Quick send** field and click **Send now**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-quick-send-field.png" alt="Quick send panel with an email address typed in and the Send now button"></div>

**Option B — Send the email to your contact list**

If you do not have a contact list yet, see:

* [How to create a new contact list](new-contact-list.md)
* [Importing contacts from Excel or a spreadsheet](../contacts-lists/import-contacts-from-excel.md)

First, select **eMarketeer Contact Database**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-recipient-source-database.png" alt="Recipient Source step with eMarketeer Contact Database highlighted"></div>

Second, select **Contact List**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-recipient-source-contact-list.png" alt="Selection types with Contact List highlighted"></div>

Third, choose your contact list in the dropdown and click **Add this List**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-contact-list-dropdown-add.png" alt="Contact list dropdown with a list chosen and the Add this List button"></div>

The list now shows as added to the send-out. To send to more lists, choose another list and click **Add this List** again. When you have added all the lists you want, click **Next**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-contact-list-add-more.png" alt="A list marked as already added to the send-out, with the dropdown ready for another list"></div>
{% endstep %}

{% step %}
### Continue to the checklist

The next page, **2. Send Options**, shows the chosen list of recipients and offers options for more complex send-outs. For a simple send, you can skip the details here.

Click **Next** to proceed.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-send-options.png" alt="Send Options step with the chosen list, exclusions, consent options and the Next button"></div>
{% endstep %}

{% step %}
### Review the checklist and launch

The checklist shows whether any contacts from your list will be excluded from the send. eMarketeer automatically blocks contacts who are unsubscribed or otherwise should not receive the email. You do not usually need to worry about the numbers here — they are handled for you.

If you want the details, see [Understanding the email checklist](../reports/checklist-explained.md).

Click **Launch E-mail** to address and send the email to the contacts in the list.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-checklist-launch-email.png" alt="Checklist step with the Recipients panel and the Launch E-mail button"></div>
{% endstep %}

{% step %}
### The send-out is complete

After launch, the email is handed to the email servers, which usually finish addressing and sending within a few minutes.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/basics-send-email-send-confirmation.png" alt="Email launched confirmation with the Back to Campaign button"></div>
{% endstep %}
{% endstepper %}

### What to do next

You can track the send-out and see detailed stats in the email report. See [Email report explained](../reports/email-report-explained.md).
