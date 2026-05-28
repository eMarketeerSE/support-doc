---
description: >-
  How to embed an eMarketeer form on your website by installing the Form Base
  Script and pasting the generated snippet.
---

# Embed Forms on your Website

Embed an eMarketeer form on your website by installing the Form Base Script and pasting the form's snippet where you want it to appear.

Once a form is embedded, any future changes you make in eMarketeer update automatically on your site.

## Install the Base Script

Add the following script to every page on your website, or at least to those pages that will host eMarketeer forms. You only need to do this once.

The easiest path is to load the script in the header of your site on all pages, or to deploy it through Google Tag Manager.

Once the script is in place, you can embed any eMarketeer form you have created.

Note: Adding this script does not affect your Privacy Policy.

## Embed a form on your website

To embed a form, get its code snippet from eMarketeer.

1. Open the form in eMarketeer.
2. Click Publish to reveal the code snippet.
3. Paste the code where you want the form to appear on your website.

Use an HTML block or whatever your CMS provides for raw markup.

## Translations

If your form has multiple language versions, set the language by appending `locale` to the script.

em\\\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });

## Prepopulate fields

To populate visible or hidden question fields with your own data, add the following code.

\
&#x20;  em\\\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });\
&#x20;  em\\\_cta.setValue('question1', 'My value');\
&#x20;  em\\\_cta.setValue('toggle1', 'true');\
&#x20;  em\\\_cta.setValue('checkboxes1', \\\['Item 1', 'Item 2'\\])

## Styling the form

The form theme builder covers common style changes, but not every detail. For full control, you have two options.

#### Inject styling

By default, the form renders inside a ShadowDOM, so your site's CSS cannot target it. Inject styling either by referencing a stylesheet (`em_cta.injectExternalStyle`) or by passing selectors directly (`em_cta.injectInlineStyle`):

em\_cta.injectInlineStyle(':host, :host \* { color: red !important; font-family: "Comic Sans MS", "Comic Sans", cursive !important; } .sd-btn { background-color: black !important; } .sd-element--with-frame { border-radius: 30px; }')

em\_cta.injectExternalStyle('https://yourdomain.com/example.css')

#### Disable the ShadowDOM

You can turn off the ShadowDOM so the form is not rendered in its own separate DOM. This increases the chance of clashes with your site's styles, but lets your CSS target the form directly. Append `useShadowDom: false` to the script:

em\\\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en", useShadowDom: false});

#### Trigger your own scripts on form submit

To run your own code when a visitor answers the form, use this snippet.

\
&#x20;em\\\_cta.getSurvey().then(survey => {\
&#x20;  survey.onComplete.add(() => {\
&#x20;    console.log('Survey completed');\
&#x20;  })\
&#x20;})

## Forms and web tracking

If the [eMarketeer Web Tracker](../../documentation/web-tracker/the-web-tracker.md) is installed on your site and consent is given, submitting a form identifies the contact for future tracking and records the historic visit history.
