# When is an email registered as opened?

In short, an email is registered as opened either when images are loaded in the recipient email message, or when a link is clicked by the recipient.

![](../assets/email-open/2021-04-27_11-57-42.png)

Email report graph, number of opened emails highlighted

When you analyze your email report you may think that an email Open is an event that occurs when a recipient opens the email, and you would be wrong (technically). The reason for this is that an “email open” event is not something that is communicated from the recipient back to the sender of the email. Think about this example; If you send an email to your friend or colleague, you will have no idea if that email has been opened and read. This is because there’s no built in functionality to the recipient email program that would tell you if such a thing occured.

eMarketeer (and most other email service providers) solves this problem by including a tracker pixel (a very small transparent image) in the email with a unique name. When this image has been loaded eMarketeer will know that the recipient corresponding to the image with the unique name has opened the email.

This method works well, because when the recipient of the email actually opens the email all images will be loaded from the eMarketeer web server and be presented in the email. Do note that some email clients will explicitly prevent this from happening and block all images if the sender does not exist in the recipient address book. If an email is opened with images blocked it will not register as Opened as no measurable interaction has been made, that is of course until either the recipient decides to show the images (this is a user choice) or clicks a link in the email. Since an email cannot have the status “Clicked” without the status “Opened” the email is automatically assigned an Opened status when it has been clicked.
