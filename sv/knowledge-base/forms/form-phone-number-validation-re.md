---
description: >-
  Avancerad guide för att kräva landskod i ett formulärs telefonnummerfält när
  reCAPTCHA är aktiverat.
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
tags:
  - legacy
---

# Validering av telefonnummer i formulär när reCAPTCHA används (avancerat)

Den här guiden visar hur du kräver en landskod i fältet för mobilnummer i ett formulär när reCAPTCHA är aktivt.

Du lägger till kod i formulärets HTML och justerar vid behov det reguljära uttryck som validerar strängen. Om du använde validering innan du aktiverade reCAPTCHA, byt till "submit captcha"-versionen av koden i steg 2.

***

### 1. Lägg till det här utdraget högst upp i CSS-textrutan på sidan Colors & Fonts -> HTML

***

\
$J = jQuery.noConflict();

***

\
submitForm = function(){\
&#x20; var jval = jValidate($('formen'),true);\
&#x20; if(!jval){\
&#x20;   return false;\
&#x20; }\
&#x20; var regEx = /^\\\\+\\\[1-9\\]\\\[0-9\\]{7,14}$/;\
&#x20; var val = $J('input\\\[type=tel\\]').val();\
\
&#x20; if (!val || val.match(regEx)) {\
&#x20;   const siteKey = window.\\\_\\\_RECAPTCHA\\\_SITE\\\_KEY\\\_\\\_;\
&#x20;   submitCaptchaOK(siteKey);\
&#x20; } else {\
&#x20;   alert('Enter the mobile number with country code');\
&#x20;   $J('input\\\[type=tel\\]').focus();\
&#x20;   return false;\
&#x20; }\
}

***
