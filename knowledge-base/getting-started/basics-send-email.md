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

<div data-with-frame="true"><img src="../../.gitbook/assets/se1-2.png" alt="Send button on the campaign page"></div>
{% endstep %}

{% step %}
### Choose Send Now

This guide covers sending immediately. You also have the option to schedule the email for a later time.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-27-at-13.05.07.png" alt="Send Now option in the send-out dialog"></div>
{% endstep %}

{% step %}
### Send a test email or send to your contacts

**Option A — Send a test email to yourself (optional)**

To preview the email in your own email client, send yourself a quick test. Type your email address in the address field and click **Quick Send**.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-28-at-13.37.12.png" alt="Quick Send field for sending a test email to yourself"></div>

**Option B — Send the email to your contact list**

This step has three pages.

If you do not have a contact list yet, see:

* [How to create a new contact list](new-contact-list.md)
* [Importing contacts from Excel or a spreadsheet](../contacts-lists/import-contacts-from-excel.md)

First, select **eMarketeer Contact Database**.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-27-at-13.06.57.png" alt="Selecting eMarketeer Contact Database as the recipient source"></div>

Second, select **Contact List**.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-27-at-13.07.43.png" alt="Selecting Contact List as the recipient type"></div>

Third, choose your contact list in the dropdown and click **Add This List**. The example below uses a list called "Example List" with 15 contacts.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-27-at-13.08.20.png" alt="Contact list dropdown with Add This List button"></div>
{% endstep %}

{% step %}
### Continue to the checklist

The next page, **2. Send Options**, shows the chosen list of recipients and offers options for more complex send-outs. For a simple send, you can skip the details here.

Click **Continue To Checklist** to proceed.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-27-at-13.09.42.png" alt="Send Options page with Continue To Checklist button"></div>
{% endstep %}

{% step %}
### Review the checklist and launch

The checklist shows whether any contacts from your list will be excluded from the send. eMarketeer automatically blocks contacts who are unsubscribed or otherwise should not receive the email. You do not usually need to worry about the numbers here — they are handled for you.

If you want the details, see [Understanding the email checklist](../reports/checklist-explained.md).

Click **Launch Email** to address and send the email to the contacts in the list.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-28-at-11.46.51.png" alt="Checklist page showing excluded contacts and Launch Email button"></div>
{% endstep %}

{% step %}
### The send-out is complete

After launch, the email is handed to the email servers, which usually finish addressing and sending within a few minutes.

<div data-with-frame="true"><img src="../../.gitbook/assets/CleanShot-2022-04-27-at-13.16.52.png" alt="Send-out confirmation screen after launch"></div>
{% endstep %}
{% endstepper %}

### What to do next

You can track the send-out and see detailed stats in the email report. See [Email report explained](../reports/email-report-explained.md).
