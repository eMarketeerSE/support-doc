# Emarketeer specific functions

eMarketeer has several DCL functions that are not part of "core" DCL. They fetch data from the contact card, your user account, and other product-specific sources.

## Link

To track a link in eMarketeer, use the `link` function. A normal `<a href="url">Link</a>` still renders, but it is not tracked. The `link` command looks like this:

```
<% link url="url-to-link" caption="Label to link" [attrib="htmlattributes"] [html="true"] %>
```

- `url`: the URL to link to. It must be URL-encoded; eMarketeer does not encode it for you.
- `caption`: the label of the link, as plain text or HTML. If it is HTML, pass `html="true"`.
- `attrib`: attributes added to the resulting `<a>` tag in the rendered HTML.

## Contact

The `contact` function fetches or prints values from the contact card the form is attached to.

```
<% contact field="fieldname" %>
```

`fieldname` is one of these:

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td valign="top">firstname</td><td valign="top">Firstname of contact</td></tr><tr><td valign="top">lastname</td><td valign="top">Lastname of contact</td></tr><tr><td valign="top">salutation</td><td valign="top">How to salute this contact. For example "Mr", "Mrs"</td></tr><tr><td valign="top">company</td><td valign="top">This contacts work company</td></tr><tr><td valign="top">email</td><td valign="top">Email address of contact</td></tr><tr><td valign="top">title</td><td valign="top">Work title</td></tr><tr><td valign="top">telephone</td><td valign="top">Contacts telephone number</td></tr><tr><td valign="top">fax</td><td valign="top">Contacts fax number</td></tr><tr><td valign="top">mobile</td><td valign="top">Contact mobile telephone number</td></tr><tr><td valign="top">address1</td><td valign="top">First line in contacts address</td></tr><tr><td valign="top">address2</td><td valign="top">Second line in contacts address</td></tr><tr><td valign="top">city</td><td valign="top">City of contact</td></tr><tr><td valign="top">state</td><td valign="top">State of contact</td></tr><tr><td valign="top">zip</td><td valign="top">Zip or postal code of contact</td></tr><tr><td valign="top">country</td><td valign="top">Country of contact</td></tr><tr><td valign="top">external_id</td><td valign="top">Id in users CMS</td></tr><tr><td valign="top">note</td><td valign="top">Your note of this contact</td></tr></tbody></table>

Custom contact fields use this syntax:

```
<% contact field="fieldname" type="custom" %>
```

If you are unsure of the right field code, open an email and use the built-in personalization button in any text. It surfaces the proper code for each field.

## User

The `user` function fetches or prints information about your user account.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td valign="top">logo</td><td valign="top">The url to your companys logo in emarketeer takes a second argument "version" which can be "light" or "dark". The light background logo is the default</td></tr><tr><td valign="top">company</td><td valign="top">Company name</td></tr><tr><td valign="top">address1</td><td valign="top">First address line of company</td></tr><tr><td valign="top">address2</td><td valign="top">Second address line of company</td></tr><tr><td valign="top">city</td><td valign="top">City of company</td></tr><tr><td valign="top">zip</td><td valign="top">Zip or postal code of company</td></tr><tr><td valign="top">state</td><td valign="top">State of company</td></tr><tr><td valign="top">country</td><td valign="top">Country of company</td></tr><tr><td valign="top">webpage</td><td valign="top">Homepage of company, optional argument "protocol" may be set to true to include protocol in adress (Normaly <a class="external free" href="http:" rel="nofollow">https://</a>)</td></tr><tr><td valign="top">url</td><td valign="top">Url this user uses to access emarkeeter.</td></tr><tr><td valign="top">telephone</td><td valign="top">Tehephone number of company</td></tr></tbody></table>

## Scramble

> TODO: verify
The scramble code is generated when sending an email. eMarketeer uses it internally to identify which contact is clicking the email.

## Block

The `block` function fetches specific data from a block in eMarketeer. Different block types expose different fields. The function returns the literal string typed into the block, not evaluated code.

```
<% block name="text1" field="text" %>
```

The `name` argument is a relative path to the block you want, starting at the current node in the tree. Nodes are separated by `.`. The keyword `parent` is reserved and moves up one level. For example:

```
<% block name="parent.block1.text2" field="text" %>
```

This path goes from the current node up to the parent container block, then into `block1`, then into the `text2` text block.

If the `name` argument starts with `.`, the lookup begins at the root. For example:

```
<% block name=".block1.text2" field="text" %>
```

This path always resolves from the root, regardless of where you start.

**Text Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>text</td><td>The text entered into the text block</td></tr></tbody></table>

**Image Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>url</td><td>the url of the image</td></tr></tbody></table>

**Link Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>url</td><td>the url of the link</td></tr><tr><td>caption</td><td>the link caption</td></tr></tbody></table>

**Container Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>text</td><td>Returns the HTML source code of the block</td></tr></tbody></table>

**Option Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>value</td><td>Current value of the option block</td></tr></tbody></table>
