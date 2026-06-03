---
description: >-
  Advanced guide to capping the number of selectable options on a checkbox
  question in a form using a custom JavaScript snippet.
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

# Set max number of answers for a form checkbox question (legacy, advanced)

{% hint style="warning" %}
This article applies to **Form (Legacy)**. For the current form editor, see [Forms](README.md).
{% endhint %}

This advanced guide shows how to cap the number of options a respondent can select for a checkbox question in a form.

To set the limit, add a script to the HTML Head section for the form, found under the Edit Fonts & Colors options.

The example below covers two checkbox questions. Question query_2004686 allows up to 3 selected answers, and question query_2005423 allows up to 2.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
var jq = $.noConflict();

jq(document).on('change', 'input[name^="query_2004686"]', function (e) {
    if (jq('input[name^="query_2004686"]:checked').length > 3) {
        jq(this).prop('checked', false);
        alert("Only 3 Checked Answers Allowed");
    }
});

jq(document).on('change', 'input[name^="query_2005423"]', function (e) {
    if (jq('input[name^="query_2005423"]:checked').length > 2) {
        jq(this).prop('checked', false);
        alert("Only 2 Checked Answers Allowed");
    }
});

</script>
```

## Step by step

1. Copy the code above and adjust it so there is one `jq(document).on('change')` block per question you want to cap. The example covers two questions.
2. Open the form's Publish page and the Website Integration code page so you can see the question Names used in the code.
3. From the integration code, get the Name selector for each checkbox question (for example, "query_2004686" from "query_2004686_2_0_0[]"). Replace the names in the example so each block uses the right one.
4. Change the length number in each block to the maximum number of allowed selections for that question. Update the alert text for the same question to reflect the new number.
5. Add the code to the HTML Head section of the form under the Edit Fonts & Colors options.
