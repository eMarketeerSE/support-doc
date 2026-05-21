# Understanding eMarketeer URLs

eMarketeer uses several URL types, and knowing them helps you pick the right link for each situation. This article focuses on the URLs you encounter when working with Form components.

### Publishing URL

This is the URL eMarketeer gives you when you publish a form. Anyone with the link can reach the form at any time, as long as the Form component is live and open for answers. You can usually identify it by the `&Origin` parameter, which defaults to `&Origin=Direct`.

![Example of a direct publishing URL](../assets/understanding-em-urls/direct-URL.png)

Use the Publishing URL in almost all situations — for example, a link in a social media post or on your website — where many different people should be able to open the form.

When someone opens a form through a Publishing URL, they are redirected to a unique Session URL.

### Session URL

A Session URL is temporary and unique to each visitor. It's generated when someone opens a form and acts as an anonymous identifier if they submit it. The URL accepts a single answer and expires after 24 hours, whichever comes first. You can identify it by the `&sessid=` parameter.

![Example of a session URL](../assets/understanding-em-urls/Session-URL.png)

Don't share a Session URL as a link to the form — the 24-hour lifetime and one-answer limit make it unsuitable.

### Internal URL

Internal URLs are dynamic links between components and files inside eMarketeer. They use ID numbers rather than file paths or permanent URLs. This lets you move components without breaking links, and when you copy a campaign, the duplicated components' URLs update to point at the new copies.

![An internal eMarketeer URL](../assets/understanding-em-urls/2021-04-01-09_40_14-Window.png)

### Personalised URL

Personalised URLs are used when you send a form link to known contacts through an eMarketeer Email component. Answers from a Personalised URL are linked to the contact automatically, so the visitor doesn't need to identify themselves in the form. Personalised URLs look similar to other eMarketeer email links, so they're not always easy to spot by sight.

![Example of a personalised URL](../assets/understanding-em-urls/scramble-URL.png)

Use a Personalised URL when the form is meant for known recipients and you want submissions identified automatically — for example, an invitation to a meeting or event. Be aware that any answer submitted through the link is recorded under the original recipient's name, so forwarded emails can produce unexpected results.

### Anonymous URL

Anonymous URLs are an alternative to Personalised URLs in emails. They let multiple people answer the same form, with each answer recorded separately. An Anonymous URL behaves like a Publishing URL but is specific to emails and is "forward-friendly". Anonymous and Personalised URLs look the same, so they're difficult to tell apart by sight.
