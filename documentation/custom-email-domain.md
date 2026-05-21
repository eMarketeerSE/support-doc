# Using your own Email Domain with eMarketeer

## 3 simple steps to use your own email domain

**Not only is sending emails using your own domain important to get the best deliverability, trust and response from your recipients, it is required in order to send emails with eMarketeer at all. To do this you need to add records in your DNS that give “proof” that it’s authorized by your company and not a fraudulent email. eMarketeer allows you to get full validation of the emails sent that will pass SPF, DKIM and DMARC checks by the receiving email servers.**

When you authenticate a domain to be used with eMarketeer you will be able to use this domain as from address in your emails. This will also use your domain as return-path which will align with your DMARC.

**Too technical? Don’t worry, follow these steps and we have prepared an email that you can forward to your IT department.**

### 1\. Go to email domains settings

Go to your [email domain settings](https://app.emarketeer.com/corporate/gui/account/customize/domain/new.php), you need to be logged in to eMarketeer as administrator for the link to work. You can also get to your email domain settings by going to “account settings” -> “email domains” in eMarketeer.

### 2\. Add domain

Click “add a domain” and type the domain you’d like to use, for example, yourcompany.com. Click “add.” Note that you don’t have to add ‘www’ before the domain name.

### ![](../assets/custom-email-domain/Skarmavbild-2024-03-21-kl.-09.58.27.png)

### 3\. Update your DNS records

You now see a list of records that needs to be added to your DNS. When the records are added to the DNS, click “Authenticate.”

**![](../assets/custom-email-domain/Skarmavbild-2024-03-21-kl.-09.58.42.png)**

### Ask your IT department

If you don’t have access or knowledge about your DNS, click the “generate email” link in the bottom of the dialog. A pre-written email with the records will pop up and you can send it to the person that’s in charge of the domains at your company. Usually, it’s someone in the IT department.When the records have been added correctly to the DNS, they are marked green when clicking the “authenticate” button. Please note that DNS changes often update rather quickly but it might take up to 48 hours. You can now send emails from your domain!

**![](../assets/custom-email-domain/SCR-20240321-jgsz.png)**

**Mandatory and optional fields**

The mandatory fields are DKIM and SPF. Without these the emails will fail checks by spam filters.

The optional fields are DMARC and Email From. This protects your emails even more and makes sure DMARC will pass. The Email From will use your own domain also in the return path of the email (but received by eMarketeer).
