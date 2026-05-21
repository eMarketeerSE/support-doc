# Double opt-in subscription

Double opt-in is a sign-up process where the contact confirms their subscription in two steps, verifying that the address belongs to the person who submitted the form.

To build this in eMarketeer, first decide where to store verified contacts. Common choices include adding them to a campaign, adding them to a contact list, or ticking a checkbox on the contact card.

![doubleoptin](../assets/double-opt-in/doubleoptin.png)

## How the process works

The double opt-in consists of three components:

- The sign-up form, placed on your website.
- The confirmation email, sent after the form is submitted. It contains a link such as "Click to verify your email."
- The landing page, which confirms the click with a message like "Thank you. You are now subscribed to our newsletter."

## Create the double opt-in

1. Create the components:
   - The sign-up form to publish on your website.
   - The confirmation email that thanks the contact and links to the confirmation landing page.
   - The confirmation landing page that confirms the sign-up is complete.
2. Create the automations:
   - Send Email — sends the confirmation email when the sign-up form is submitted.
   - Add to contact list — triggers when any link in the confirmation email is clicked. You can swap this for Add to campaign, Update contact card, or another action that fits your setup.

When the form is submitted, the confirmation email goes out. When the contact clicks the link, they land on the confirmation page and the automation adds them to your contact list.
