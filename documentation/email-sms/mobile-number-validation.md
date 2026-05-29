---
description: >-
  How eMarketeer validates mobile numbers before sending SMS — country code
  requirements, character stripping rules, and examples of valid and invalid formats.
---

# Mobile number validation

Before eMarketeer sends an SMS, it validates the mobile number in the contact's Mobile field. This article explains the rules and shows what counts as a valid number.

## How numbers are processed

Before validation, eMarketeer strips every character that is not a digit (`0–9`) or a `+` sign. Spaces, hyphens, parentheses, and any other characters are removed automatically. The number that remains after stripping must be a valid mobile number.

{% hint style="warning" %}
Avoid the `+46(0)` notation. The parentheses are stripped, leaving a `0` between the country code and the subscriber number — this invalidates the number. Use `+46` or `0046` instead.
{% endhint %}

## Country code requirement

Every mobile number must include a country code. eMarketeer accepts two international prefix formats:

- A leading `+` followed by the country code — for example, `+46733123123`
- A leading `00` followed by the country code — for example, `0046733123123`

**Swedish numbers:** Numbers starting with `0` are treated as Swedish numbers and do not require an explicit country code. For example, `0733123123` is valid.

## Valid formats

| Input | After stripping | Valid |
|---|---|---|
| `0046733123123` | `0046733123123` | Yes |
| `+46 733 123 123` | `+46733123123` | Yes |
| `0046 733-123 123` | `0046733123123` | Yes |
| `0733123123` | `0733123123` | Yes — Swedish trunk prefix |

## Invalid formats

| Input | After stripping | Why it fails |
|---|---|---|
| `46733123123` | `46733123123` | Missing `+` or `00` prefix |
| `+46(0)733123123` | `+460733123123` | Stripped parentheses leave a `0` after the country code |
| `733123123` | `733123123` | No country code, and no leading `0` for Swedish numbers |
