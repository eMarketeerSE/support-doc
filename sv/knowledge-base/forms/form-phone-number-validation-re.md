---
description: >-
  Avancerad guide för att kräva landskod i ett formulärs telefonnummerfält när
  reCAPTCHA är aktiverat.
---

# Validering av telefonnummer i formulär när reCAPTCHA används (avancerat)

Den här guiden visar hur du kräver en landskod i fältet för mobilnummer i ett formulär när reCAPTCHA är aktivt.

Du lägger till kod i formulärets HTML och justerar vid behov det reguljära uttryck som validerar strängen. Om du använde validering innan du aktiverade reCAPTCHA, byt till "submit captcha"-versionen av koden i steg 2.

* * *

### 1. Lägg till det här utdraget högst upp i CSS-textrutan på sidan Colors & Fonts -> HTML

* * *

</style>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$J = jQuery.noConflict();
</script>
<style>

* * *

### 2. Lägg till det här skriptet i slutet av Design Header HTML på sidan Colors & Fonts -> HTML

* * *

<script type="text/javascript">
submitForm = function(){
  var jval = jValidate($('formen'),true);
  if(!jval){
    return false;
  }
  var regEx = /^\\+\[1-9\]\[0-9\]{7,14}$/;
  var val = $J('input\[type=tel\]').val();

  if (!val || val.match(regEx)) {
    const siteKey = window.\_\_RECAPTCHA\_SITE\_KEY\_\_;
    submitCaptchaOK(siteKey);
  } else {
    alert('Enter the mobile number with country code');
    $J('input\[type=tel\]').focus();
    return false;
  }
}
</script>

* * *
