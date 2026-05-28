# Whitelisting Email Servers

This article explains when and how to whitelist eMarketeer's email servers to keep internal emails from being filtered as spam.

If your sending domain is correctly [authenticated](../../knowledge-base/email-deliverability/authorize-email-domain.md) but emails to internal recipients that share the same domain are still filtered as spam, whitelisting eMarketeer's email servers helps ensure delivery. Company spam filters often flag emails that use an internal From address but originate from an external IP, such as eMarketeer or other email service providers, because of the higher risk of fraud.

## eMarketeer email servers

Whitelist these IP addresses on your company spam filter:

- 69.169.229.149
- 69.169.229.150
- 69.169.229.151
- 69.169.229.152
- 69.169.229.153
