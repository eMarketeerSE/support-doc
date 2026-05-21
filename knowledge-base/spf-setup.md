# SPF setup

This article explains what to check when eMarketeer detects an SPF issue for one of your domains and how to set it up correctly.

**SPF** (Sender Policy Framework) is an email authentication protocol that lets domain owners specify which mail servers are authorized to send email on behalf of their domain. It works by publishing a **TXT record in DNS** that lists authorized sending hosts or services.

When SPF is missing or incorrectly configured, receiving mail servers cannot verify whether the email came from an authorized source — which can lead to mail being marked as spam or rejected. Proper SPF setup helps improve email deliverability and protects your domain from unauthorized use.

### **Why it matters**

-   Helps receiving mail servers confirm your mail is coming from allowed senders.
    
-   Reduces the chance of your domain being used for spoofed emails.
    
-   Can improve inbox placement and overall deliverability.
    
-   When SPF fails or is missing, many receiving servers downgrade or reject the mail.
    

### **How to troubleshoot & set it up**

1.  Go to **Email Domain settings** in your eMarketeer account (admin access required).
    
2.  Click **Authorize** for the domain you’re checking.
    
3.  The domain setup dialog shows all required DNS records — including the SPF record you should publish.
    
4.  In your DNS provider’s control panel, verify that an **SPF TXT record exists** for your domain and matches the value shown in eMarketeer.
    
    -   An SPF record typically starts with v=spf1 and includes all servers/services authorized to send mail for your domain.
        
    -   Example (generic):
        
        -   v=spf1 include:spf.emarketeer.com ~all
            
5.  Save the DNS changes and wait for them to propagate (may take up to 48 hours).
    
6.  Use an SPF checking tool if you want to confirm it’s published and correct.
    

**Helpful tip:**

If you don’t manage DNS yourself, you can use the email feature in the dialog to send all required DNS info to someone who does.

For the full email domain setup, [please refer to this guide](https://support.emarketeer.com/documentation/custom-email-domain/).

If you need assistance, please contact [support@emarketeer.com](mailto:support@emarketeer.com)
