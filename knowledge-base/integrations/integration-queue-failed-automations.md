---
description: >-
  The known reasons a SuperOffice automation event fails, and how to resolve
  each one before re-enqueuing it in the Integration Queue.
---

# Why did the SuperOffice automation fail?

Failed SuperOffice automation events are listed in the Integration Queue at [https://app.emarketeer.com/corporate/gui/account/integrations/integration_queue.php](https://app.emarketeer.com/corporate/gui/account/integrations/integration_queue.php) (login required).

From there you can review failed events and re-enqueue them to retry. Below are the known reasons a SuperOffice automation event fails, along with the suggested resolution for each.

## Missing mandatory information

If the contact is missing mandatory contact information, the automation fails and a yellow warning triangle is shown. The mandatory fields are:

- Email
- First name
- Last name
- Company (only applicable in older SuperOffice installations)

Add the missing information to the contact, then re-enqueue.

## Bad External ID

When a contact triggers a SuperOffice automation, eMarketeer checks the contact's External ID field. If the field has a value, eMarketeer attempts the SuperOffice task using that value as the SuperOffice contact id. If no SuperOffice contact matches the value, the automation fails.

Remove the bad External ID from the contact, then re-enqueue.

## Automation refers to old SuperOffice resources

Older automations may reference SuperOffice resources that have since been deleted, such as projects, selections, or interest codes. If the referenced resource no longer exists, the automation fails.

Edit the automation to reference existing SuperOffice resources, then re-enqueue.

## No connection to server or throttled network

If you use your own SuperOffice server and the server is down, the network is down, or anything else prevents eMarketeer from communicating with the server, the automation fails. When a large volume of automations or feed activities is generated, the SuperOffice server may also throttle communication and prevent the task from running.

Wait until SuperOffice can be reached, then re-enqueue.

## SuperOffice Online service overloaded

On rare occasions, SuperOffice Online is under heavy load and the service is disrupted. Automations fail while the service is unreachable.

Wait until SuperOffice can be reached, then re-enqueue.
