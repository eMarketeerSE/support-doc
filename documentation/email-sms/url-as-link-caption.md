---
description: Using a URL as link text in an email can trigger phishing filters. Here is why it happens and what to use instead.
---

# Why you shouldn't use a URL as link text

Using a URL as the visible text of a link — for example, writing `www.company.com` as the caption — can cause your email to be flagged as phishing by security filters.

## How link tracking works

eMarketeer replaces every link in your email with a tracking URL before the email is sent. This lets eMarketeer record which contacts clicked a link and when. The recipient's browser is redirected through the tracking URL to your intended destination.

The tracking URL lives on eMarketeer's domain, not yours.

## Why the mismatch is a problem

When you write a link like this:

```
[www.company.com](https://www.company.com)
```

the recipient sees `www.company.com` as the link text. But the actual destination — after tracking wraps it — is on the eMarketeer domain.

Email clients and security tools inspect links for exactly this pattern: a URL displayed as text that does not match the real destination domain. It is the defining signature of a phishing email, where an attacker shows a trusted URL while pointing to a malicious site.

Security filters cannot tell whether the mismatch is intentional or accidental. When in doubt, they block or quarantine the email.

## What to use instead

Use descriptive link text that does not make a domain promise:

| Instead of | Use |
|---|---|
| `[www.company.com](https://www.company.com)` | `[Visit our website](https://www.company.com)` |
| `[https://register.event.com/signup](https://register.event.com/signup)` | `[Register for the event](https://register.event.com/signup)` |
| `[support@company.com](mailto:support@company.com)` | `[Contact support](mailto:support@company.com)` |

Descriptive text describes the action, not the destination domain. There is no mismatch for filters to flag.
