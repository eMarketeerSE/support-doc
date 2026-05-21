# Form Phone Number Validation when using reCAPTCHA (Advanced)

This guide shows how to require a country code in the mobile number field of a form when reCAPTCHA is active.

You add code to the form's HTML and, if needed, adjust the regular expression that validates the string. If you used validation before activating reCAPTCHA, switch to the "submit captcha" version of the code in step 2.

* * *

### 1. Add this snippet at the top of the CSS textbox on the Colors & Fonts -> HTML page

* * *

</style>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$J = jQuery.noConflict();
</script>
<style>

* * *

### 2. Add this script at the end of Design Header HTML on the Colors & Fonts -> HTML page

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
