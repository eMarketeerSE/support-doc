# Second release in GDPR roadmap

**With the second and last release of the consent features, eMarketeer is ready to handle your contacts in a GDPR compliant way.** 

You use eMarketeer to store contacts and send emails to them. For these two purposes, you need to set legal bases (with what right you have to store contacts and send emails to these contacts). In this release you now have the tools to set these legal bases and keep them up-to-date.

There are three states of legal base that you need to consider for both storing data and sending emails:  
1\. “none” – this means you do not have anything set at all. It lacks information and you need to update this so there’s a valid legal base.  
2\. “withdrawn” – this means the contact explicitly withdrew the consent and you are not allowed to send marketing emails to this person. This is the new “unsubscribed”.  
3\. All other legal bases are just different positive ways of saying it’s okay to email them.

You can update the legal bases for your contacts at your own pace before GDPR is in effect (May 25th, 2018). The easiest way is to do this with a bulk update.

**With this release,** these are the functions that can help you set consent and legal bases:

-   Filters according to date
-   Automations – set and remove consent
-   New block: consent in forms
-   Consent tab on contact card
-   New “unsubscriptions”
-   Send outs respect the consent on contacts

## New Functions and Recommended Actions

### Recommended Actions

-   If you have forms published which allows visitors to opt in to send outs, it would be a good idea to get these consents set automatically from now on. You can do this by adding the new consent block to your form(s).
-   Update your current web forms so they all have the consent checkbox. If you already have a checkbox with this in your current forms, we suggest that you update them with the new consent checkbox.
-   Update consent for all of your existing contacts’ – this is done with a bulk update, choose the purpose “Store” and the consent type “Legitimate interest.”
-   Set marketing consent to “Legitimate interest” for all contacts that have received emails the last 1-2 years.
-   Set marketing consent to “Consent” for contacts that opted in through forms or other means. This is only in regards to forms were the contacts have opted in, not when they have only filled out a survey or evaluation.
-   Consider discarding contacts that have not been engaged in a long time or where you have no consent on record.

Please note that these recommendations are not legal advice and eMarketeer is not to be held responsible. Please check with your legal advisor.

### Unsubscriptions

As mentioned above, unsubscribing from send outs is treated as withdrawing consent for marketing emails.

So what’s different? Instead of the previous link you saw on the contact card (see image 1 and 2 below), you will see a “slider” displaying consent for marketing send outs. If turned on, it’s green meaning that there’s consent for this contact to receive marketing send outs (see image 3 below). If turned off, consent is withdrawn from this contact.  
Keep in mind:

-   The contacts you already have that are globally “unsubscribed,” will automatically be set to ‘consent withdrawn’ from all marketing send outs after this release.
-   The contacts you have that are just unsubscribed from a certain campaign(s) will still be unsubscribed from the campaign(s) in question. If however they unsubscribe again after this release, they’re consent will be withdrawn from all marketing send outs.
-   From now on, contacts that do any type of unsubscribing will have their ‘consent withdrawn’ from all marketing send outs and emails will not dispatch to the contact.

[![](../assets/gdpr-release/Screen-Shot-2018-03-27-at-14.24.34.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-27-at-14.24.34.png)

[![](../assets/gdpr-release/Screen-Shot-2018-03-27-at-14.24.17.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-27-at-14.24.17.png)

[![](../assets/gdpr-release/Screen-Shot-2018-03-27-at-14.48.19.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-27-at-14.48.19.png)

### Bulk Update of Consent and Unsubscriptions

Depending on the number of contacts you wish to bulk update – this action might take a few minutes before all contacts are updated. But don’t worry! You’re notified about this and the estimated time in the bulk actions dialogue.

[![](../assets/gdpr-release/gdpr_consent2.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/gdpr_consent2.png)

[![](../assets/gdpr-release/gdpr_consent3.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/gdpr_consent3.png)

### Send Outs and Bulk Update

The send outs will now look at what the consent is for each contact, and it’s the consent that’s set at the time of the send out that’s valid. This means that if you bulk update consent and then _immediately after_ want to do a send out, there is a risk that the bulk process is not completed. This might result in the send out not respecting the updates you wanted. This is also something that you will be informed about in the send out options. We do recommend that you wait with the send out until the update is completed.

[![](../assets/gdpr-release/gdpr_sendout_bulkupdate.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/gdpr_sendout_bulkupdate.png)

For more information about upcoming functions and features, please see [GDPR roadmap](https://support.emarketeer.com/knowledgebase/gdpr-and-what-it-means-for-emarketeer-users/) or visit our [GDPR center](https://support.emarketeer.com/knowledgebase/gdpr-general-data-protection-regulation/). If you have another further questions, shoot us an email at support@emarketeer.com.
