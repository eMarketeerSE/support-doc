---
description: >-
  How to target contacts who did not open or respond to a previous send-out with
  a follow-up email.
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
---

# How to send reminders

Set up a follow-up campaign that automatically skips contacts who already engaged with the original send.

eMarketeer's reminder pattern uses a dynamic Selection of contacts based on engagement with a previous component, such as an email or form. The Selection updates over time, so you can build the reminder before the original campaign goes out and trust it to target only the contacts who still need a nudge.

This guide covers two common scenarios: reminding contacts to read an email they haven't opened, and reminding contacts to register through a form they haven't submitted.

{% stepper %}
{% step %}
### Create an email component to use as the reminder

If you have not built the reminder email yet, see the guide on [creating an email](../getting-started/basics-send-email.md).
{% endstep %}

{% step %}
### Start the send process and add the original recipients

Choose the same group of contacts you used for the original campaign as your first Recipient Source. If you want to send the reminder later, pick **Scheduled Send** as the sendout type in the first step.
{% endstep %}

{% step %}
### On Step 2, Send Options, click + Add recipients

Use this button to add the Selection of contacts you want to block from the reminder.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-send-options-add-recipients.png" alt="Send Options step with the + Add recipients link highlighted"></div>
{% endstep %}

{% step %}
### Choose "Selection" for the second Recipient Source

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-recipient-source-selection.png" alt="Recipient Source step with Selection highlighted"></div>
{% endstep %}

{% step %}
### Pick the Selection that matches your reminder

The Selection you pick depends on what the reminder is about. The two examples below cover an email open and a form submission, but other event types are available.

* **Example 1:** To remind contacts to read a previous email, build a Selection of contacts who have opened that email. Those contacts are the ones you will block.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-selection-email-opened.png" alt="Selection with the campaign, an email component and the event Opened E-mail chosen"></div>

* **Example 2:** To remind contacts to register through a form, build a Selection of contacts who have submitted that form. Those contacts are the ones you will block.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-selection-form-submitted.png" alt="Selection with the campaign, a form component and the event Submitted chosen"></div>
{% endstep %}

{% step %}
### Set the Selection's Type to "Block"

The Recipients list now shows both your original group and the new Selection. Change the Type dropdown for the Selection from "Send to" to "Block".

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-send-options-type-block.png" alt="Send Options with two recipient sources, the second set to Block"></div>

A contact in a blocked recipient list is excluded from the send, even if another recipient list would have included them.

For a scheduled email, the Selection re-evaluates over time. Even if it contains zero contacts when you set up the send, it will block the right people at the moment the email goes out.
{% endstep %}

{% step %}
### Continue to the Checklist and send or schedule

Finish the sendout flow to send the reminder now or schedule it for later.
{% endstep %}
{% endstepper %}

If you still have questions, contact support via the channels listed on the [contact page](https://app.emarketeer.com/corporate/gui/help/contact.php) when logged in to your account.
