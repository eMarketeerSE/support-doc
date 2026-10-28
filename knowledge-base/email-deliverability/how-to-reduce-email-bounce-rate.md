---
description: >-
  Practical ways to keep your email bounce rate low: how to collect, check and
  maintain addresses, and which eMarketeer tools help you do it.
---

# How to reduce your email bounce rate

This guide covers practical ways to keep your bounce rate low, both in general and with the tools in eMarketeer.

A low bounce rate protects your sender reputation, so more of your emails reach the inbox. If your average bounce rate goes above 5%, eMarketeer pauses your sending for review. To learn what a bounce is, see [About email bounces and complaints](about-email-bounces.md).

## Where bounces come from

Most bounces have one of these causes:

* **Addresses that never worked.** Typos at sign-up, made-up addresses, and addresses entered by bots.
* **Addresses that stopped working.** People change jobs, companies change domains, and old mailboxes are closed. A B2B list goes out of date faster than most people expect.
* **Temporary problems.** A full mailbox or a mail server that doesn't respond. These soft bounces often clear up by themselves.
* **Emails the receiving server refuses.** A server can reject email from a sender it doesn't trust, for example when the sending domain isn't authenticated.

## What eMarketeer already does for you

eMarketeer leaves out addresses it knows are bad. An address is marked undeliverable after one hard bounce or three soft bounces, and eMarketeer doesn't send to it again. Addresses with invalid syntax are blocked when you import from a file or a CRM.

What eMarketeer can't know is whether a new address works. Every practice below is about keeping bad addresses from reaching your send-outs in the first place.

## Collect addresses with consent, through your own forms

The safest addresses are the ones people give you themselves. Collect them with an eMarketeer form on your website, and ask for consent to send email.

Never buy or rent a contact list. Purchased lists are full of outdated addresses and spam traps, which are old addresses that mailbox providers use to catch careless senders. A single send to a bought list can push you over the pause threshold.

## Confirm new addresses with double opt-in

With [double opt-in](../gdpr-consent/double-opt-in.md), a new contact confirms their address by clicking a link in a confirmation email. Typos and fake addresses never make it onto your list, because nobody clicks the link.

## Send a welcome email right away

Send a welcome email as soon as someone signs up. If the address is wrong, it bounces at once, and eMarketeer marks it undeliverable before your next campaign. A contact who just signed up is also more likely to open the email, which helps your reputation.

## Check old lists before you import them

A list that hasn't been emailed in a year or more is the most common reason for a sudden spike in bounces.

Before you import contacts from another tool or an old spreadsheet:

* Leave out addresses that bounced or unsubscribed in the old tool. eMarketeer doesn't know about them.
* If you don't know where the list came from or how old it is, run it through an email verification service first.
* Send to the most recently active contacts first. Check the bounce rate before you send to the rest.

## Keep your CRM data up to date

If you sync contacts from a CRM, the CRM decides who ends up in your send-outs. When a person leaves a company, update or remove them in the CRM so that the old address doesn't keep coming back.

## Stop sending to contacts who don't engage

Addresses that never open your emails are often abandoned mailboxes. Over time they turn into hard bounces or spam traps.

* In Step 2 of the send-out, use [Exclude inactive recipients](../../documentation/email-sms/exclude-inactive-recipients.md) to leave out contacts who haven't opened or clicked in 12 months.
* Build a Journey that sends inactive contacts a re-engagement email. If they still don't respond, move them to another list or unsubscribe them.

## Authenticate your sending domain

Receiving servers trust email from an authenticated domain. [Add your email domain](authorize-email-domain.md) and set up [SPF](spf-setup.md), [DKIM](dkim-setup.md) and [DMARC](dmarc-setup.md), so that your emails aren't rejected as untrusted.

## Follow up after every send-out

Make a habit of checking bounces after each send-out, while the cause is still easy to find.

1. Open the email report and check the bounce rate.
2. Click the **Bounced** count to see which contacts bounced. Click a contact to read the bounce message on the contact card. See [Identifying why an email was not received](identify-email-not-recieved.md).
3. Look for patterns: many bounces on one domain, a company domain that no longer exists, or misspelled domains such as `gmial.com`. Correct the addresses you know are wrong.

To follow the trend over time, use the Domains table in the [Email Health Dashboard](emailhealthdashboard.md). To remove undeliverable contacts, see [How to clean up your contacts](../contacts-lists/clean-up-contacts.md).

