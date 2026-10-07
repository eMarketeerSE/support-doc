---
icon: circle-question
description: >-
  Short answers to common questions about eMarketeer, including features
  eMarketeer doesn't have and what to do instead.
---

# FAQ and troubleshooting

Short answers to common questions, with links to the full guides. Click a question to see the answer.

## Contacts

<details>

<summary>Does eMarketeer delete contacts automatically?</summary>

No. eMarketeer never deletes contacts on its own, and no Journey step or automation can delete them. A contact is only deleted when a user deletes it, for example with the [bulk actions tool](knowledge-base/contacts-lists/bulk-actions-tool.md), or when an integration your organisation has built deletes it through the [eMarketeer API](documentation/apis-developer/api-endpoints-overview.md). Deleted contacts can't be restored from within eMarketeer. If you've deleted contacts by mistake, contact support.

If a contact seems to be missing, it usually still exists but isn't where you're looking:

* Search for the contact's email address in the **Contacts** section.
* Check whether the contact was removed from a contact list, for example by a Journey's [Contact List](documentation/journeys/journey-step-contact-list.md) step or a bulk action. Removing a contact from a list doesn't delete it.
* If you're looking in a contact filter, check whether the contact still matches its conditions.

If the contact exists but didn't receive your email, see [Identifying why an email was not received](knowledge-base/email-deliverability/identify-email-not-recieved.md).

</details>

<details>

<summary>Can I find contacts with an invalid email address?</summary>

No. There's no filter for contacts with an [invalid email address](glossary.md#invalid-email-address). To find them, export your contacts and check the addresses in an external tool, such as a spreadsheet.

</details>

<details>

<summary>Can I create companies in eMarketeer?</summary>

No. Companies aren't records of their own in eMarketeer, so you can't create them or search for them. Instead, eMarketeer builds a company profile automatically from the domain of a contact's email address, as part of enriching the contact.

To see a contact's company profile, open the contact card, go to the **Overview** tab and click **View company**. See [The company card](knowledge-base/lead-board-scoring/the-lead-board.md#the-company-card).

</details>

## Leads

<details>

<summary>Can I add a contact to the lead board manually?</summary>

Yes. Open the contact card, go to the **Lead** tab and make the contact a lead. You choose the lead stream to add the lead to. See [The lead board](knowledge-base/lead-board-scoring/the-lead-board.md).

</details>

<details>

<summary>Can I move a lead to another sales team's lead board?</summary>

Not directly. A lead board shows the leads from the [lead streams](knowledge-base/lead-board-scoring/lead-streams.md) that deliver to its sales team. To send a lead to another team, change the lead stream instead.

For example, a contact fills in your English form and matches a lead stream for your English sales team, but the contact is clearly French. On the **Lead** tab of the contact card, remove the contact from the lead board, so it's no longer a lead. Then make the contact a lead again from the same tab, and choose the lead stream that delivers to your French sales team. The lead then appears on that team's lead board.

</details>

## Journeys

<details>

<summary>Can I test a Journey?</summary>

No. The Journey builder has no test mode. To try a Journey on a single contact, turn on **Make Journey available on Contact Card** in the [Journey settings](documentation/journeys/creating-your-first-journey.md#make-journey-available-on-contact-card). You can then start the Journey for one contact from their contact card, without the contact having to match the starting point conditions.

The steps run for real, so use a test contact with your own email address.

</details>

## Emails

<details>

<summary>How do I set the height of an image in an email?</summary>

You can't set it directly. Each image block in the email editor shows a recommended width, and the height follows from that width and the image's proportions. To make an image taller, crop its sides so the image has the proportions you want at the recommended width. See [Upload an image](knowledge-base/getting-started/basics-creating-email.md#upload-an-image).

</details>

<details>

<summary>Can I attach a file to an email?</summary>

No. eMarketeer doesn't support email attachments. Instead, upload the file to **Files** in eMarketeer and link to it from the email with the **Link to file** option in the link menu. See [Add a button with a link](knowledge-base/getting-started/basics-creating-email.md#add-a-button-with-a-link).

</details>
