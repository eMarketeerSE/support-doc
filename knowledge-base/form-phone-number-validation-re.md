# Form Phone Number Validation when using reCAPTCHA (Advanced)

It is possible to specify that you need to fill in the country code in the field for mobile number in a Form, and this is done by adding code to the HTML Form. You will need to do the following steps and depending on your use case also change the Regular Expression used for the string validation part of the code covered in step 3.

If you have used validation before activating reCAPTCHA then you will need to change it to use the ‘submit captcha’ part of the code shown in step 2.

* * *

### 1\. Start by adding this snippet at the top of the “CSS” textbox located on the “Colors & Fonts -> HTML” page:

* * *

</style>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$J = jQuery.noConflict();
</script>
<style>

* * *

### 2\. After that you can put this script at the end of “Design Header HTML” which you will also find on the page “Colors & Fonts -> HTML”:

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
