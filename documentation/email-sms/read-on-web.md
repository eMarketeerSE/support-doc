---
description: >-
  Read on web generates a personal browser link for each email recipient.
  Use it to let contacts view the email online — sometimes called a
  "view in browser" link.
---

# Read on web

Read on web is a personal URL that opens a contact's version of the email in a browser. You typically insert it as a text link near the top of the email, and each recipient gets their own unique address.

## How it works

The URL is generated per recipient, per email component. It always renders the latest version of that specific contact's email — including any personalised content and their own unsubscribe link.

If the same contact receives the email more than once, their read on web URL does not change. It continues to point to the most recent version of their email.

The link remains valid as long as:

* the contact exists in the contact database,
* the contact's data is still present in the component report, and
* the email component itself has not been deleted.

Removing the contact from eMarketeer or deleting the email component will break the link.

## URL structure

The read on web URL uses two merge tags:

```
<% user field="url" %>a/plink/row/<% scramble %>.html
```

* `<% user field="url" %>` — the base URL for eMarketeer-hosted content. This is the account's custom domain, or `https://app.emarketeer.com/` if no custom domain is configured.
* `<% scramble %>` — a unique token that identifies both the recipient and the email component.

You do not need to construct this URL manually. Use the Insert Link dialog to add it.

## How to insert a read on web link

{% hint style="info" %}
Many content blocks include a read on web link by default. Header blocks in particular typically come with one already inserted — check before adding a new one manually.
{% endhint %}

1. In the email editor, select the text you want to link.
2. Open **Insert Link**.
3. Choose **System link → Read on web**.

eMarketeer inserts the full URL template. The merge tags resolve to the recipient's personal link when the email is sent.

## Sharing or archiving an email online

Because each read on web URL is a live, publicly accessible page, some senders use it creatively as a way to link to an email from outside the send — for example, posting it on a website, referencing it in documentation, or keeping an archive of past sends.

This is not a purpose-built sharing tool. Keep in mind that the page shows the personalised version for that specific contact, including their unsubscribe link, and the page will stop working if the contact or email component is removed.
