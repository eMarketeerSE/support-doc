# Transactional sendouts

eMarketeer has a built in consent management system that keeps track on who you can send marketing emails to. If a recipient has withdrawn consent for marketing emails the email will be stopped and not sent.

In some cases however the email you want to send is **not a marketing email** and you want to make sure the recipients get this email regardless of their consent settings. Here are some examples:

-   Important service information to customers
-   Confirmation emails
-   Delivery of requested information

In order to send an email which overrides the consent settings, you will mark the send out as a “transactional email”.

Caution: Sending **marketing emails** without consent is illegal. Make sure you use this setting only if the recipient truly needs this information or is waiting for it.

### Sending an email manually from a campaign

You will see this setting when addressing your email in the standard send out screen like below.

![](../assets/transactional-sendouts/Skarmavbild-2023-12-13-kl.-12.14.25-1024x310.png)

### Sending an email in a Journey

When adding a Journey step “Send email” you will also have the option to ignore consent by choosing “transactional email”.

When should you use transactional email in a Journey?  
Ask yourself “Is the recipient expecting or waiting for this email?”. If “yes”, you can use transactional emails.

Common scenarios are

-   Delivery of a requested material ex. e-book download.
-   Confirmation of subscription or registration
-   “Thank you”-emails

When **not** to use transactional email.

-   Drip campaigns that sends x emails over time
-   Nurture campaigns
-   Typical marketing emails that are unsolicited
