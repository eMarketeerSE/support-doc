# Creating clickable email address links and buttons

A clickable email address opens a new message in the recipient's email client with the address already filled in.

Many email clients add this behavior automatically when they detect an address in incoming mail, but you can make it explicit on a link or button. The technique is the same as for a web link — you use a URL with the `mailto:` prefix, like this:

> mailto:support@emarketeer.com

## Clickable address in text

To turn text inside a component into an email link, follow the same steps as for a regular web link.

1. Highlight the text you want to be clickable.
2. Click the Hyperlink/Link button in the text editor.
3. In the Link URL field, write the email address with the prefix `mailto:`.
4. Apply the link.

Best practice is to avoid adding this type of link in the body of an email component. Most email clients already turn plain email addresses into clickable links, so the sender does not need to add the link manually.

![Email link applied to text in the editor](../../assets/email-address-links/image.png)

Example of an email link applied to text.

## Button linked to an email address

The approach is the same — the `mailto:` URL goes in the Link URL field, but this time on a button.

1. Select the block with the button and open the Link box that matches the button.
2. In the Link URL field, write the email address with the prefix `mailto:`.
3. Apply the link.

![Email link applied to a button](../../assets/email-address-links/image.png)

Example of an email link on a button.
