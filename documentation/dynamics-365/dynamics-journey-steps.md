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

## Contact matching logic

Every step resolves the correct Dynamics record before acting. Because the same person can exist as a Lead, a Contact, or both in Dynamics, each step runs a three-stage lookup in order from most to least specific:

1. **Direct ID** — if eMarketeer has already stored a `dynamics_lead_id` or `dynamics_contact_id` on the contact, it queries Dynamics using that ID directly.
2. **Email and company** — if no ID is stored yet, eMarketeer searches by email address and company name together.
3. **Email only** — if the combined search returns no result, eMarketeer falls back to email address alone.

When a match is found, eMarketeer saves both `dynamics_lead_id` and `dynamics_contact_id` on the contact record. The next time a step runs for the same person, eMarketeer skips straight to the direct ID query — making subsequent operations faster. If a stored ID is no longer valid in Dynamics, eMarketeer falls back to the full lookup again.

Contact lookups check for converted Leads first. A person who started as a Lead and was later converted to a Contact in Dynamics is matched correctly through this path.

The flowchart below shows the full decision tree for each of the five step types.

![Flowchart showing the contact matching decision tree for each Dynamics Journey step type](../../assets/dynamics-journey-steps/dynamics_matching_logic.png)

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
