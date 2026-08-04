---
description: >-
  How to embed an eMarketeer form on your website using the Form Base Script and
  configure its behavior after submission.
---

# Embed forms on your website

This article shows you how to embed an eMarketeer form on your website and customise how it behaves.

Once a form is embedded, any future changes you make in eMarketeer update the form on your site automatically.

## Install the base script

Before embedding your first form, install the Form Base Script. Add it to every page that will host an eMarketeer form, or to all pages on your site. You only need to do this once per website.

```
<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/forms.js"></script>
```

The simplest approach is to load it in your site header on every page, or via Google Tag Manager.

Placing this script on your site does not affect your privacy policy.

## Embed a form on your website

To embed a form, get the code snippet from eMarketeer:

1. Open your form in eMarketeer.
2. Click **Publish** to reveal the code snippet.
3. Paste the code into the location on your website where the form should appear.

You can place the code inside an HTML block or equivalent, depending on your CMS.

## Translations

If your form has multiple language versions, set the display language by appending `locale` to your script.

```
<script>em_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });</script>
```

For the full list of available locale codes, see [Form locales](../../knowledge-base/forms/form-locales.md).

## Prepopulate fields

To prefill visible or hidden question fields, add the following code:

```
<script>
   em_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });
   em_cta.setValue('question1', 'My value');
   em_cta.setValue('toggle1', 'true');
   em_cta.setValue('checkboxes1', ['Item 1', 'Item 2'])
</script>
```

## Style the form

The form theme builder covers common elements but does not allow full customisation. For more control, you have two options.

### Inject styling

By default the form renders inside a ShadowDOM, so your site CSS cannot target it. You can inject styling either by referencing a stylesheet or by passing selectors directly:

```
em_cta.injectInlineStyle(':host, :host * { color: red !important; font-family: "Comic Sans MS", "Comic Sans", cursive !important; } .sd-btn { background-color: black !important; } .sd-element--with-frame { border-radius: 30px; }')

em_cta.injectExternalStyle('https://yourdomain.com/example.css')
```

### Disable the ShadowDOM

You can turn off the ShadowDOM so the form is not rendered in its own DOM. This raises the risk of style clashes with your site, but lets you style the form using your existing site CSS. To do so, append `useShadowDom: false` to your script:

```
<script>em_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en", useShadowDom: false});</script>
```

### Trigger your own scripts on submit

To run your own code when a visitor submits the form, use the snippet below.

```
<script>
 em_cta.getSurvey().then(survey => {
   survey.onComplete.add(() => {
     console.log('Survey completed');
   })
 })
</script>
```

## Forms and web tracking

If you have the [eMarketeer Web Tracker](../web-tracker/) installed on your website and consent is given, submitting a form also identifies the contact for future tracking and saves their historical visit history.
