# Emarketeer specific functions

Emarketeer has several functions which are not part of “core” DCL. These includes getting data from the contact card , your user account and so on.

### Link

To be able to track a link in Emarketeer you have to use the link function, your html may use a normal <a href=”url”>Link</a>, it will work but it will not be tracked. The link command looks like this.

<% link url="url-to-link" caption="Label to link" \[attrib="htmlattributes"\]
\[html="true"\] %>

The url argument is where you put the url. It should be urlencoded as this is not done for you automatically. The caption argument is the Label of the link, this may be pure text or it may be HTML code. If it’s HTML code you give the link function the html=”true” argument. The attrib argument is atrributes for the resulting “A” tag in the rendered html.

### Contact

The contact function fetches or prints values from the contact cards its form are.

<% contact field="fieldname" %>

Fieldname is one of these.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td valign="top">firstname</td><td valign="top">Firstname of contact</td></tr><tr><td valign="top">lastname</td><td valign="top">Lastname of contact</td></tr><tr><td valign="top">salutation</td><td valign="top">How to salute this contact. For example “Mr”, “Mrs”</td></tr><tr><td valign="top">company</td><td valign="top">This contacts work company</td></tr><tr><td valign="top">email</td><td valign="top">Email address of contact</td></tr><tr><td valign="top">title</td><td valign="top">Work title</td></tr><tr><td valign="top">telephone</td><td valign="top">Contacts telephone number</td></tr><tr><td valign="top">fax</td><td valign="top">Contacts fax number</td></tr><tr><td valign="top">mobile</td><td valign="top">Contact mobile telephone number</td></tr><tr><td valign="top">address1</td><td valign="top">First line in contacts address</td></tr><tr><td valign="top">address2</td><td valign="top">Second line in contacts address</td></tr><tr><td valign="top">city</td><td valign="top">City of contact</td></tr><tr><td valign="top">state</td><td valign="top">State of contact</td></tr><tr><td valign="top">zip</td><td valign="top">Zip or postal code of contact</td></tr><tr><td valign="top">country</td><td valign="top">Country of contact</td></tr><tr><td valign="top">external_id</td><td valign="top">Id in users CMS</td></tr><tr><td valign="top">note</td><td valign="top">Your note of this contact</td></tr></tbody></table>

Note: Custom contact fields are added with the syntax

<% contact field="fieldname" type="custom" %>

If you are unsure, go in to an e-mail and use the built in personalization button in any text to bring up the proper code for each field.

### User

The user function fetches or prints information about your user account.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td valign="top">logo</td><td valign="top">The url to your companys logo in emarketeer takes a second argument “version” which can be “light” or “dark”. The light background logo is the default</td></tr><tr><td valign="top">company</td><td valign="top">Company name</td></tr><tr><td valign="top">address1</td><td valign="top">First address line of company</td></tr><tr><td valign="top">address2</td><td valign="top">Second address line of company</td></tr><tr><td valign="top">city</td><td valign="top">City of company</td></tr><tr><td valign="top">zip</td><td valign="top">Zip or postal code of company</td></tr><tr><td valign="top">state</td><td valign="top">State of company</td></tr><tr><td valign="top">country</td><td valign="top">Country of company</td></tr><tr><td valign="top">webpage</td><td valign="top">Homepage of company, optional argument “protocol” may be set to true to include protocol in adress (Normaly <a class="external free" href="http:" rel="nofollow">https://</a>)</td></tr><tr><td valign="top">url</td><td valign="top">Url this user uses to access emarkeeter.</td></tr><tr><td valign="top">telephone</td><td valign="top">Tehephone number of company</td></tr></tbody></table>

### Scamble

The scramble code is generated when sending an email. It is used internaly in emarkeeter to know which contact is for example clicking the email.

### Block

The block function fetches specific data from a block in emarketeer. The different block types have different fields that may be fetched. Note that this fetches the literal string typed into the block. It does not returned evaluated code.

<% block name="text1" field="text" %>

The name argument is a relative path to the block you are looking for. It starts at the node in the tree you are, nodes are separated by a “.”. The keyword parent is reserved and goes up one in the block tree. Consider this.

<% block name="parent.block1.text2" field="text" %>

This name parameter goes from current up one to the parent container block, then to “block1” container block and last to the “text2” text block. If the name argument starts with “.” We are beginning at the root node. Consider this.

<% block name=".block1.text2" field="text" %>

Here it doesn’t matter in which block we start, we are always looking from the root and down the tree.

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
