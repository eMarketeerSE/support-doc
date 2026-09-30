---
description: >-
  How to submit answers to an eMarketeer form programmatically from your own
  website or an external system.
tags:
  - legacy
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# How to post data to a form

{% hint style="warning" %}
This article applies to **Form (Legacy)**. For the current form editor, see [Forms](README.md).
{% endhint %}

This guide shows how to post answers to an eMarketeer form from your own website or from another system.

The hosted version of a form covers many cases, but sometimes you need to embed the form on your website or trigger automations from another system. A form is a flexible target for posting data from outside eMarketeer.

## Before you start

You always need to create the form in eMarketeer first. The form defines which questions you want answered. Once it exists, you can post answers to it in several ways:

* Get the direct URL and let visitors answer the hosted form (not covered here).
* Iframe the hosted form onto your site (not covered here).
* Put the HTML of the form on your website.
* Use a script to post data to the form programmatically.

Every form has two important properties:

* A URL to post the data to.
* Input fields with a name and a value.

If you POST (or GET) the answers to that URL with the right name/value pairs, your answers are saved in eMarketeer.

## 1. Create the form

In eMarketeer, create a form with a contact registration and any other questions you need.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-form-editor-sample.png" alt="A newsletter sign-up form with first name, last name and email fields in the form editor."></div>

## 2. Get the form HTML code

Open the **Edit Form** menu at the top of the form editor and click **Publish Form...**.

The Publish Form page opens. Scroll to **Website Integration**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-publish-website-integration.png" alt="The Publish Form page with an arrow pointing at the Website Integration heading."></div>

Under **FORM**, click **Get Code** to show the form code. If reCAPTCHA is active on your account, enter the domain of your website in the field next to the button first.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-publish-form-domain-get-code.png" alt="The FORM section with the domain field highlighted and an arrow pointing at the Get Code button."></div>

The form code appears below the button.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-publish-form-generated-code.png" alt="The generated form code with the post URL and the hidden m input at the top."></div>

You can paste this code directly on your website. It posts the answers to eMarketeer and then shows the thank-you page.

You can restyle and rearrange the code as much as you want — as long as you keep the action URL and the input names intact. There is also a hidden input named "m" with a value that identifies which form to post to. Keep it.

## cURL and other methods to post

Once you have the URL and the input fields, any method that posts to that URL works. Instead of using a browser, you can use cURL or a similar tool to post programmatically. Keep the input names intact. GET is also valid — pass the parameters in the query string.

## Custom thank-you page

If you embed the form on your site, you may want to send visitors to your own thank-you page instead of the eMarketeer-hosted one. To change the redirect, edit the form in eMarketeer and click **Thank You Page** under **System Pages** in the left-hand menu. Choose **Use Custom URL**, enter the URL to redirect to and click **Update**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-thank-you-page-custom-url.png" alt="The Thank You Page settings with Use Custom URL selected and a web address entered."></div>
