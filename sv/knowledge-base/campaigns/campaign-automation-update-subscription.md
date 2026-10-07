---
hidden: true
description: >-
  Kampanjautomatisering som lägger till eller tar bort prenumerationen för den kontakt som utlöste den på en av dina prenumerationer.
---

# Update subscription-automation

Automatiseringen Update subscription är en [kampanjautomatisering](campaign-automations.md) som lägger till eller tar bort prenumerationen för den kontakt som utlöste den på en av dina [prenumerationer](../account-admin/subscriptions.md). Om du vill göra samma sak i en Journey, se steget [Update Subscription](../../documentation/journeys/journey-step-update-subscription.md).

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/campaign-automation-update-subscription-settings.png" alt="Inställningarna för automatiseringen Update subscription med namn, prenumeration, statusen Unsubscribed och Do only once per contact"></div>

## Inställningar

* **Name** — ett namn för automatiseringen, som visas i kampanjens lista **Automation rules**.
* **Choose subscription** — välj prenumerationen.
* **Choose status to set** — den status som kontakten får. Standard är **Unsubscribed**.
* **Do only once per contact** — valt som standard, så att automatiseringen körs högst en gång för varje kontakt.

## Utlösare

Välj den komponent och händelse som kör automatiseringen under **When this happens**. Se [Välj utlösare](campaign-automations.md#välj-utlösare).
