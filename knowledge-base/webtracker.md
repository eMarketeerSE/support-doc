# Automatic UTM links

eMarketeer adds UTM parameters to the links in your emails and landing pages, so the eMarketeer Web Tracker and tools like Google Analytics can attribute the traffic.

These are the UTM parameters added to your links:

- `utm_source` — always "eMarketeer", to indicate which platform the visit came from.
- `utm_campaign` — the name of the eMarketeer campaign that contains the email or landing page.
- `utm_medium`
  - "email" for emails.
  - "referral" for landing pages.
- `utm_content`
  - The subject line for emails.
  - The page title for landing pages.
- `utm_em_source` — specific to eMarketeer: the ID of the component used.
