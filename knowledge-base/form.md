# Embed Forms on your Website

**Embedding eMarketeer forms on you website has never been simpler. But before you place your first form on your webpage you need to make sure you have installed the Form Base Script.**

## Fully dynamic

Below you find a guide to embed eMarketeer forms on your website. Once you have embedded a form on your site, **any future changes to the form are made from the eMarketeer application**. Any changes you make in eMarketeer will automatically update the form on your website.

## Install the Base Script

To install the Base Form Script you need to make sure the following script is put on all pages on your website or on those pages that will have eMarketeer Forms. You only need to do this once for your website to make it enabled for eMarketeer forms.

<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/forms.js"></script>

The easiest way to do install is to make sure it’s loaded in the header of your website on all pages or using Google Tag Manager.

When the script is in place, you are ready to embed any of the eMarketeer forms that you have created on your website.

Note: Placing this script on your site does not affect your Privacy Policy.

## Embed a Form on your Website

To embed a form on your website you need to get the code-snippet for your form in eMarketeer.

1.  Navigate to your form in eMarketeer
2.  Click “Publish” to reveal the code snippet
3.  Place the code in the location on your website where you want the form to appear.

To place the form code you can use a HTML-block or similar depending on which CMS you are using.

## Translations

If your form has multiple language versions you can set which language to display by appending “locale” to your script.

<script>em\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });</script>

## Prepopulate fields

If you have visible or hidden question fields in your form, you can populate them with your own information by adding the following code.

<script>
   em\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });
   em\_cta.setValue('question1', 'My value');
   em\_cta.setValue('toggle1', 'true');
   em\_cta.setValue('checkboxes1', \['Item 1', 'Item 2'\])
</script>

## Styling the Form

The Form theme builder allows the user to easily change common elements of the form but it does not allow for full customization. If you want to have a very specific look on your form you have two options:

#### Injecting styling

By default the form will be placed in a ShadowDOM, meaning that the form cannot be targeted by your website CSS. You may however inject styling either by referencing a stylesheet (em\_cta.injectExternalStyle) or by using selectors and styling directly in your script (em\_cta.injectInlineStyle):

em\_cta.injectInlineStyle(':host, :host \* { color: red !important; font-family: "Comic Sans MS", "Comic Sans", cursive !important; } .sd-btn { background-color: black !important; } .sd-element--with-frame { border-radius: 30px; }')

em\_cta.injectExternalStyle('https://yourdomain.com/example.css')

#### Disable the ShadowDom

You may turn off the ShadowDOM feature so that the form is not rendered in its own separate DOM. This will increase the chances that the form will clash with something on your website, but it also allows you to style the form directly with styles from your website CSS. To do so, append “useShadowDom: false” to your script:

<script>em\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en", useShadowDom: false});</script>

#### Trigger you own scripts on form submit

If you have your own scripts that you want to run when a visitor answers the form, use the script below.

<script>
 em\_cta.getSurvey().then(survey => {
   survey.onComplete.add(() => {
     console.log('Survey completed');
   })
 })
</script>

## Forms and web tracking

If you have the [eMarketeer Web Tracker](https://support.emarketeer.com/documentation/the-web-tracker/) installed on your website (and consent is given), submitting a form will also identify the contact for future tracking and save the historic visit history on your website.
