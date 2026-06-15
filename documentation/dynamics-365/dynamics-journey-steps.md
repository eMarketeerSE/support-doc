---
description: >-
  Send data, create records, and log activities directly to your Dynamics CRM
  from a Journey using the Microsoft Dynamics 365 Sales integration.
---

# Dynamics - Journey Steps

## How records sync

In eMarketeer, everyone in your database is a Contact. Microsoft Dynamics splits people into two distinct entities: Leads and Contacts.

To bridge this gap, each step uses built-in search logic. When a Journey triggers a step, eMarketeer searches Dynamics to find the correct Lead or Contact to update, which keeps your CRM clean and duplicate-free.

The steps available to you are grouped below.

## Create or update records

- **Create/Update Lead:** pushes a person from eMarketeer into Dynamics as a Lead. If a Lead with a matching email already exists, eMarketeer updates it. An "Always create a lead" option forces creation of a new Lead even if the person already exists as a Contact in Dynamics. [Read more](create-update-lead.md)

## Add activities (Tasks and Phone Calls)

To log a Task or Phone Call in Dynamics, choose one of three modes depending on how strict your sales process needs to be:

- **Add Activity (smart mode):** the most flexible option. Because a person might be a Lead or a Contact in your CRM, this step asks for your preference. If you prefer to target a Lead, eMarketeer looks for one first. If it cannot find a Lead, it falls back to the Contact record (and vice versa), so sales activities are never lost. [Read more](dynamics-add-activity.md)
- **Add Lead Activity (strict):** logs an activity explicitly on a Lead record. If eMarketeer cannot find a matching Lead, the action is skipped. It does not fall back to a Contact. [Read more](dynamics-add-lead-activity.md)
- **Add Contact Activity (strict):** logs an activity explicitly on a Contact record. If eMarketeer cannot find a matching Contact, the action is skipped. It does not fall back to a Lead. [Read more](dynamics-add-contact-activity.md)

## Marketing List actions

- **Add Lead to Marketing List:** searches for the person's Lead record in Dynamics and adds them to a Marketing List of your choice. [Read more](dynamics-add-lead-to-marketing-list.md)
- **Add Contact to Marketing List:** searches for the person's Contact record in Dynamics and adds them to a Marketing List of your choice. [Read more](dynamics-add-contact-to-marketing-list.md)
