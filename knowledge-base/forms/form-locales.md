---
description: >-
  The languages available for eMarketeer forms and the locale codes used to
  display each one.
---

# Form locales

A reference list of the languages eMarketeer forms support, with the locale code (shortcode) used to select each one.

## What a locale is

A locale sets the language a form is displayed in. Each locale has a short code — for example `en` for English or `sv` for Swedish — that you pass to the form to choose its language.

## Setting the locale

There are two ways to set a form's locale:

* **Hosted form URL** — append the `locale` parameter to the form's URL, for example `&locale=en`.
* **Embedded form** — set the `locale` option in the form's render script. See [Embed forms on your website](../../documentation/forms/publish-a-form.md) for how to configure it.

## Available locales

| Language | Locale code |
| --- | --- |
| English | `en` |
| Norwegian | `no` |
| French | `fr` |
| Finnish | `fi` |
| Swedish | `sv` |
| Danish | `da` |
| German | `de` |
| Dutch | `nl` |
| Polish | `pl` |
| Spanish | `es` |
| Italian | `it` |

{% hint style="info" %}
A locale only works if that language version exists for the form. Create each language you want to offer in the form's translation options first — otherwise the locale has nothing to display.
{% endhint %}
