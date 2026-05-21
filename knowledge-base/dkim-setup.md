# DKIM is missing or incorrectly configured

DKIM is a key part of email authentication and deliverability, and it should be in place in your DNS whenever you authorize a sending domain in eMarketeer.

If eMarketeer reports that DKIM is not working for your domain, the required records may have been removed from your DNS.

## To troubleshoot

1. Open [Email Domain settings](https://app.emarketeer.com/corporate/gui/account/customize/domain/new.php) in your eMarketeer account. Administrator privileges are required.
2. Click "Authorize" on the domain you want to investigate.
3. The dialog shows every record your DNS must contain for the domain.
4. In your DNS, confirm the same records are present.

## Helpful tip

If you do not manage DNS yourself, use the email feature in the dialog to send the required DNS information to whoever does.

For the full email domain setup, see the [custom email domain guide](https://support.emarketeer.com/documentation/custom-email-domain/).

If you need assistance, contact [support@emarketeer.com](mailto:support@emarketeer.com).
