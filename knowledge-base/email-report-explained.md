# Email Report Explained

In this article you will find explanations for the event tags found in eMarketeer email reports and the numbers that are associated with them as well as how the widget calculations are made.

![Example of an email report page](../assets/email-report-explained/Email-Report-Page.png)

Email Report Page Example

## Email Events

Each event tag has two numbers beside it in this manner: “Event **10 (20)**“. The number before the parenthesis is the number of unique contacts/recipients that are counted for the event, while the number within the parenthesis is the total number and may include duplicates. For example: a duplicate “Sent” event is counted if an email has been sent to a contact multiple times, and a “Click” event duplicate is counted when a recipient has clicked a specific link multiple times.

**Addressed:**

The number of recipient email addresses that was included in the sendout after the checklist stage and then sent to the email servers to be addressed for the sendout.

**Sent:**

The number of recipient email addresses that the Email Component was sent to after the email server checked the sender and recipient addresses for known issues.

**Rejected:**

The email service found a problem with the sender address or recipient address during its last check before sendout. A recipient is usually Rejected because of a known issue with the specific recipient address or domain, such as a domain that doesn’t exists. However, if all of your recipients are counted as “Rejected” then the problem is most likely the sender address or reply-to address of the Email Component being an invalid email address.

**Bounced:**

The recipients email service has replied to eMarketeer that it has received the email but found a problem which stopped it from delivering it to the recipients email inbox. Usually this is because the recipients email address no longer exists or because the email address is misspelled. Sometimes it can indicate that the email was caught in a spam filter or stopped by a mail service security software.  
_For more information about Bounced emails and bounce rates [please read this article](https://support.emarketeer.com/knowledgebase/about-email-bounces/)._

**Complaints:**

The recipient has clicked on the “Report this email and Unsubscribe” button in their email client and the client has reported this back to the eMarketeer email service. This also unsubscribes the contact from future sendouts by changing the Marketing Sendouts Legal Basis to _Withdrawn_ which you can see on their contact card’s ‘Legal Basis’ tab.  
Your eMarketeer account is only allowed to have an average complaint rate of 0,3% before we have to pause your account for audit.

**Delivered:**

The recipients email service has replied to eMarketeer that it received the email, that the recipient email address existed and that it will deliver it to the recipient inbox. Do note that even though an email has been accepted by the recipient email server it can be filtered as spam before reaching the recipient inbox. Should this occur it is usually not communicated.

**Opened/Not Opened:**

The number of recipients that have opened the email, or not opened the email.  
_For more information about how an open event is registered [please read this article](https://support.emarketeer.com/knowledgebase/email-open/)._

**Unsubscribed:**

The recipient has clicked the Unsubscribe link in the email and then unsubscribed manually via the eMarketeer Subscription Center webpage. A contact is not counted here if they only click the link but then don’t unsubscribe on the webpage the link leads to.

**Clicked:**

The number of recipients that have followed any URL in the email. This is usually because they have clicked a link in the email, but even copying the URL into their web browser manually is also counted as a click.

## Widget Percentage Calculations

The values are calculated from how many of the of contacts the email was Delivered to that interacted in specific ways. In the example the Email Component has been Sent and Delivered to 25 Contacts, 10 have opened it, and 3 have clicked a link.

![Example image of the email report widgets](../assets/email-report-explained/EmailReportWidgets.png)

Example of Email Report Widget Values

_Note that it is the unique contacts that are used in the calculations of the different rates (and not the total number of events). Example: If a single contact has received the same email four times but only opened this email once, this unique contact counts as Opened for the sake of reporting the Opened event as well as the calculation of the Open Rate. The fact that the contact did not open three out of the four emails does not matter._

**Open Rate:**

% of Delivered that has Opened the Email.

In the Example: 10 Contacts of the 25 that it was Delivered to has Opened the Email, this is 40%.

**Click Through Rate:**

% of Delivered that has Clicked on a Link in the Email.

In the Example: 3 Contacts of the 25 that it was Delivered to has Clicked on a link in the Email, this is 12%.

**Click to Open Rate:**

% of those who have Opened the Email that also have Clicked on a link in the Email.

In the Example: 3 Contacts of the 10 that has Opened the Email has also Clicked on a link in the Email, this is 30%.

**Unsubscribed:**

% of Delivered that has Clicked the Unsubscribe link in the Email and unsubscribed using the Subscription Center.

In the Example: 0 Contacts of the 25 that the email was Delivered to has unsubscribed, this is  less than 1%.

## Sendout Health Widget

![screenshot of a sendout health widget](../assets/email-report-explained/Ska_CC_88rmavbild-2020-04-20-kl.-12.44.38.png)

Sendout Health Widget Example

This widget gives you a quick overview of the Bounce Rate and Complaint Rate for the email component.  
The limits are an indicator of what percentage of bounces or complaints service providers might accept before flagging all your sendouts as fraudulent.  
So to uphold our email security standards your account might be paused for audit if a limit is reached.

_For more information about Bounce Rate, Complaint Rate, and how to keep a low bounce rate [please read this article](https://support.emarketeer.com/knowledgebase/about-email-bounces/)._
