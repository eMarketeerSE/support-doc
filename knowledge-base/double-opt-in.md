# Double opt-in subscription

Double opt in is a process where the subscriber verifies his sign up to a newsletter in multiple steps. This also verifies that the subscriber is actually the same person who filled out the form.

To build this process in eMarketeer you first need to decide on where/how to store the verified contacts. A few examples:

All verified contacts should:

-   be added to a campaign
-   be added to a contact list
-   have a checkbox checked on their contact card

This is the process you build for the double opt in.

![doubleoptin](../assets/double-opt-in/doubleoptin.png)

The process consists of:

-   The sign up form, placed on your web site
-   The confirmation email. Sent after filling out the form. This is where the user needs to take action by clicking on a link “Click to verify your email”.
-   Landing page. This page confirms the click and says “Thank you! You are now subscribing to our newsletter”.

Create the double opt in

1.  Create the components
    -   The signup form, to be put on your web site
    -   The confirmation email – thanking for the sign up and providing a link to the confirmation landing page.
        -   The link should point to the confirmation landing page below.
    -   The confirmation landing page – confirming message that the sign up is finished.
2.  Create the automations
    -   Send Email – Automate the confirmation email to be send out on submitting the signup form
    -   Add to contact list – when clicking any link in the confirmation email.
        -   (or, add to campaign, update contact card or what ever you decide to use)

Now, when the form is submitted, the confirmation email will be sent. When the link in the email is clicked the subscriber will be redirected to the confirmation landing page. The automation will add the contact to your contact list when clicking.
