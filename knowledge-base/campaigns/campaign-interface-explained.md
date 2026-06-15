---
description: >-
  A tour of the campaign interface, covering the components view, the
  add-component menu, and links for contact management and automations.
---

# Campaign Interface explained

This article describes the campaign interface, with a focus on the Components view.

The left side of the screen holds the Add components menu and quick links for contact management and automations. The right side holds the different views of the campaign.

Components make up the content of your campaign. There are four component types: [Emails](../getting-started/basics-creating-email.md), [Forms](../getting-started/basics-creating-form-new.md), [SMS](../getting-started/basics-creating-sms.md), and [Webpages](../developer-advanced/creating-first-webpage.md), plus one sub-component, Mobile apps.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/campaign-UI-numbers.png" alt="Campaign UI"></div>

## 1. Campaign views

Below the campaign path, name, and description sit several tabs. Each tab is a separate view of the campaign:

* **Dashboard** — Build campaign-specific reports using reporting widgets. See [campaign reports](../reports/how-to-use-emarketeer-campaign-reports.md).
* **Components** — The default view. Organize and view the campaign's components. The number in parentheses shows how many components the campaign has.
* **Contacts** — Lists contacts added to the campaign, either imported directly or added automatically through interaction. The number in parentheses shows how many contacts are currently related to the campaign. [Read more](campaign-contacts.md).
* **Event history** — Shows events for sent emails or SMS. Review when a component was sent, and review or abort upcoming scheduled sends. The number in parentheses shows scheduled sendouts currently waiting in this campaign.
* **Automation** — Add automated actions to the campaign. Automations trigger from a contact interacting with a component, so the campaign must contain at least one component. The number in parentheses shows how many automations exist in the campaign.
* **Fields** — Define fields unique to this campaign that can be merged into component content as variables. Editing a field value replaces the variable in every component that uses it. [Read more about campaign fields](how-to-use-campaign-fields-in-emarketeer.md).

## 2. View-specific area

The area with the white background shows the interface for the active view. The screenshot above shows the Components view.

## 3. Components view

In the Components view, components appear as either thumbnails or as a list. Switch between them using List or Icons in the top right corner. This guide uses the default Icons setting.

Thumbnails are not displayed in a particular order, but you can rearrange them by drag and drop. Double-click a thumbnail to open the component editor.

Under each thumbnail is a menu with Edit, Send/Publish, and Reports. These are the main sections of each component:

* **Edit** — Opens the component editor where you change the content of the component.
* **Send** — Opens the Send options page. Send or schedule a component. Available for email and SMS only.
* **Publish** — Opens the Publish options page. Shows the direct URL of the component and other publishing options. Available for forms and webpages only.
* **Reports** — Opens the component report. Each component type has its own report with different metrics.

Below the main component menu is an area with extra information about the component, such as its type and usage metrics. Below that is the More actions menu.

### More actions menu

This menu provides options for managing the component:

* **Delete** — Deletes the component from the campaign. Deleting a component removes its report and connected statistics. Contact interactions with the component are removed from the contact's Engagement timeline.
* **Rename** — Renames the component. The name is visible only to eMarketeer users, not to contacts.
* **Copy** — Creates a copy in the campaign named "Copy of \[component name]". The copy has a clean report but is otherwise identical to the original.
* **Move** — Moves the component to another campaign. A component can't exist outside a campaign, so you move it to another campaign, never to a folder. Internal links to components in the source campaign may break in the new one.
* **Make template** — Creates a copy of the component as a template, available in the Add components menu under My templates. My templates lists all saved templates on your account.
