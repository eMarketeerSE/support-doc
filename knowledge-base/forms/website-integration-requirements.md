---
description: >-
  The technical requirements a web page must meet to host an embedded
  eMarketeer form.
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

# Form: Website integration requirements

You can embed an eMarketeer form on your own site by pasting generated HTML into the page source. This article lists the environment requirements the page must meet for the form to work.

The HTML eMarketeer generates is stripped of design and validation so you can apply your own styles and validation scripts. The form submits via JavaScript for two reasons:

1. It's easy to add your own validation inside the existing function.
2. Spam bots that fill in forms with junk are filtered out, because they usually can't run JavaScript.

### Environment requirements

Paste the code into your site's source. Make sure the following requirements are met.

#### Nested forms

Make sure no other `<form>` tags conflict with the embed. Nested form tags do not work.

#### Unicode only

Make sure the page uses a Unicode charset. This keeps posted data stored correctly in eMarketeer regardless of input language. You can do this in a few ways.

#### Web server level

Configure the web server to use Unicode for all pages by default.

#### Client level

Make sure the HTML on the page includes this meta tag:

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

#### Server script

If you use server-side scripts, set the charset per page.

PHP:

```php
<?php header('Content-Type: text/html; charset=utf-8'); ?>
```

ASP:

```asp
<% Response.charset="utf-8" %>
```
