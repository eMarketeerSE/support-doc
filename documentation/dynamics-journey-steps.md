# Dynamics - Journey Steps

With the eMarketeer and Microsoft Dynamics 365 Sales integration, you can send data, create records, and log activities directly to your Dynamics CRM from a Journey.

## How records sync

In eMarketeer, everyone in your database is a Contact. Microsoft Dynamics splits people into two distinct entities: Leads and Contacts.

To bridge this gap, each step uses built-in search logic. When a Journey triggers a step, eMarketeer searches Dynamics to find the correct Lead or Contact to update, which keeps your CRM clean and duplicate-free.

The steps available to you are grouped below.

## Create or update records

- **Create/Update Lead:** pushes a person from eMarketeer into Dynamics as a Lead. If a Lead with a matching email already exists, eMarketeer updates it. An "Always create a lead" option forces creation of a new Lead even if the person already exists as a Contact in Dynamics. [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/create-update-lead/)

## Add activities (Tasks and Phone Calls)

To log a Task or Phone Call in Dynamics, choose one of three modes depending on how strict your sales process needs to be:

- **Add Activity (smart mode):** the most flexible option. Because a person might be a Lead or a Contact in your CRM, this step asks for your preference. If you prefer to target a Lead, eMarketeer looks for one first. If it cannot find a Lead, it falls back to the Contact record (and vice versa), so sales activities are never lost. [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/dynamics-add-activity/)
- **Add Lead Activity (strict):** logs an activity explicitly on a Lead record. If eMarketeer cannot find a matching Lead, the action is skipped. It does not fall back to a Contact. [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-activity/)
- **Add Contact Activity (strict):** logs an activity explicitly on a Contact record. If eMarketeer cannot find a matching Contact, the action is skipped. It does not fall back to a Lead. [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/journey-add-contact-activity/)

## Marketing List actions

- **Add Lead to Marketing List:** searches for the person's Lead record in Dynamics and adds them to a Marketing List of your choice. [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-to-marketing-list/)
- **Add Contact to Marketing List:** searches for the person's Contact record in Dynamics and adds them to a Marketing List of your choice. [Read more](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-contact-to-marketing-list/)
