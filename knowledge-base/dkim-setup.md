# DKIM is missing or incorrectly configured

DKIM is a key part of email authentication and deliverability. It should be set up in your DNS when you authorize your sending domain in eMarketeer.

If you receive a message that DKIM is not working properly in eMarketeer for your domain, you need to verify that the appropriate records have not been removed in your DNS.

To troubleshoot:

1.  Go to [Email Domain settings](https://app.emarketeer.com/corporate/gui/account/customize/domain/new.php) in your eMarketeer account (requires administrator privileges).
2.  Click to “Authorize” the domain you want to investigate.
3.  The dialog will show you all the records you are required to have in your DNS for the domain.
4.  In your DNS for the domain, check that the same records are present.

**Helpful tip:**

If you don’t manage DNS yourself, you can use the email feature in the dialog to send all required DNS info to someone who does.

For the full email domain setup, [please refer to this guide](https://support.emarketeer.com/documentation/custom-email-domain/).

If you need assistance, please contact [support@emarketeer.com](mailto:support@emarketeer.com)
