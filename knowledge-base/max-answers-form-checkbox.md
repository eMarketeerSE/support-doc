# Set max number of answers for a Form Checkbox question (Legacy – Advanced)

To set the max number of answers that can be selected in a checkbox type form question you need to add a script to the HTML Head section for the Form found in the \[Edit Fonts & Colors\] options.

Bellow is an example of the code for two checkbox questions in a form. Question query\_2004686 that should only allow 3 selected answers and Question query\_2005423 that should only allow 2 selected answers.

* * *

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
var jq = $.noConflict();

jq(document).on('change', 'input\[name^="query\_2004686"\]', function (e) {
    if (jq('input\[name^="query\_2004686"\]:checked').length > 3) {
        jq(this).prop('checked', false);
        alert("Only 3 Checked Answers Allowed");
    }
});

jq(document).on('change', 'input\[name^="query\_2005423"\]', function (e) {
    if (jq('input\[name^="query\_2005423"\]:checked').length > 2) {
        jq(this).prop('checked', false);
        alert("Only 2 Checked Answers Allowed");
    }
});

</script>

* * *

### Step by step

1.  Copy the code shown above and adjust it to have as many “jq(document).on(‘change’)” sections as the number of questions you want to set the max number of selected answers for, the example above is for 2 questions.
2.  Go to the Form’s Publish page and open the Website Integration code page so that you can see the question Names that are used for the code.
3.  Get the Name selectors from the Integration code, specifically the start of the Name for each of the checkboxes you want to set a max number of selected answers for (ex. “query\_2004686” from “query\_2004686\_2\_0\_0\[\]”). Change the example code sections so that they use the Names you got from your Form’s integration code, use one Name for each section in the code.
4.  Change the “length” number for each question in the code to be the max number of allowed selected answers you want for that question. Change the Alert for the same question to write out the same number.
5.  Add the code to the HTML Head section of the Form found in the \[Edit Fonts & Colors\] options.
