# About email bounces and complaints

### **What is a bounce?** 

When an email bounces, it means that it’s not able to reach the recipient’s mailbox. This could be due to a few different reasons and therefore, bounces can be divided into two different types; soft bounces or hard bounces. 

**Soft bounces:** the email wasn’t delivered due to a temporary issue. For example, the recipient’s mailbox was full or their email server was unresponsive.

**Hard bounce:** an email will never be reached to this address. Either it could be due to that the email address or the email domain doesn’t exist. 

The bounce rate is calculated by dividing the number of failed email addresses that weren’t delivered with the number of addressed emails. 

### **Why you must have a low bounce rate**

To avoid fraudulent emails, Internet Service Providers (ISPs) puts a sender score on email send-outs. The score is based on several factors (for example, user engagement and spam complaints), one of them is the bounce rate. The higher the bounce rate, the worse is the sender reputation. A sender with a bad sender reputation risks being blocked from sending emails at all. 

An acceptable bounce rate lies around 1-3%. If it’s higher than that, your send-out routines should be updated or changed. 

### **How eMarketeer handles bad addresses in an email send-out**

If eMarketeer knows an email address is bad, it’s filtered out from the send out. An email address counts as faulty when:

-   it has a faulty email syntax. For example, there’s not @ in the address. 
-   it was a hard bounce in a previous send-out
-   it was reported as a soft bounces in 3 prior send-outs

Even though bad email addresses are filtered out, eMarketeer is not to be used to clean up your email lists. If you import email address that previously bounced, are old or invalid in some other way, those email addresses aren’t blocked right away. This means that the send out ends up with a high bounce rate, spam complaints and/or your contacts unsubscribing. 

### **How to keep track of your bounce rate?** 

You can see the status of your bounce rate in the email report. You need to make sure your average bounce rate stays under 5% or your sending will be paused for audit.

![](../assets/about-email-bounces/Ska_CC_88rmavbild-2020-04-20-kl.-12.44.38.png)

### What happens if my bounce rate is too high?

Since eMarketeer is doing the send-out for you and even though we have top email security in place (for example, your [authenticated domain](https://support.emarketeer.com/knowledgebase/why-authorize-email-domain/)), we also rely on the fact that you handle your email addresses and send-outs with care. If your bounce rate is too high (>5%), your account might be paused in order to uphold our email security standards.

### How do I keep a low bounce rate?

-   **Use opt-in forms**  
    The best way to ensure that your email list contains valid email addresses is to collect them via opt-in forms. That means that the recipients give you their permission to email them. You could use an eMarketeer form on your website where they can sign up to receive your emails. Even better if you use a double-opt in, which means that to be added to your email campaign, the recipient needs to confirm their email address by clicking a link in a confirmation email.
-   **Work with your email list continuously  
    **Keep an eye on your recipients’ email engagement regularly. If a recipient bounced or hasn’t opened your last couple send-outs, a re-engagement campaign could be an option. This is where you could discover the the contacts that still want to be on your list.
-   **Be relevant  
    **The key is to have as engaged recipients as possible; user engagement has a big impact on your sender reputation. Your emails need to have content that your recipients want to take part of in order for you get more opens and clicks and avoid bounces and spam complaints. That sends a signal to the ISPs that you do valuable email marketing and will reflect that on your sender score.

If want to learn more about email bounces rate, this blog post talks about [5 ways to reduce email bounce rate](https://www.emarketeer.com/blog/reduce-email-bounce-rate/).

### What is a complaint?

A complaint is when a recipient receives the email to the inbox, but then clicks the “This is spam” button. Complaints are only registered from the large web based email providers such as gmail, yahoo, hotmail etc.

When a recipients press the “this is spam” button and if this event is reported to eMarketeer, that recipient is automatically unsubscribed from further send outs. All complaints are however not fed back to eMarketeer, and are in those cases only registered at the provider level. The complaint rate per domain can however be monitored through the [email health dashboard.](https://support.emarketeer.com/knowledgebase/email_health_dashboard/)

Your eMarketeer account is only allowed to have an average complaint rate of 0,3% before we have to pause your account for audit.
