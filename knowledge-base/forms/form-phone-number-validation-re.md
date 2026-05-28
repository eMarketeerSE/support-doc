---
description: >-
  Advanced guide to requiring a country code in a form's phone number field
  when reCAPTCHA is enabled.
---

# Form Phone Number Validation when using reCAPTCHA (Advanced)

This guide shows how to require a country code in the mobile number field of a form when reCAPTCHA is active.

You add code to the form's HTML and, if needed, adjust the regular expression that validates the string. If you used validation before activating reCAPTCHA, switch to the "submit captcha" version of the code in step 2.

***

### 1. Add this snippet at the top of the CSS textbox on the Colors & Fonts -> HTML page

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
