# Identifying why a Form is Unavailable (Legacy)

If you encounter something unusual when trying to access an eMarketeer Form or have a Form link that doesn’t seem to work and want to know what the cause could be then this guide is for you.

However, even if your problem seems to be one of the scenarios in this guide, always start by opening a Private or Incognito window in your browser and try to access the Form from it. If one can access the form from a Private/Incognito window, then the problem is most likely caused by faulty historical data stored in the affected browser and a cleanup of this data from the browser’s settings page should solve the problem.

This page refers frequently to the different types of eMarketeer URLs, more information about these can be found on the following page.

[Understanding eMarketeer URLs](https://support.emarketeer.com/knowledgebase/understanding-em-urls/)

## The form cannot be displayed at this time

![The form cannot be displayed at this time](../assets/form-unavailable/form_closed_limit.png)

The form cannot be displayed at this time error message

This situation is most commonly caused by the emarketeer account having reached it’s contact limit and can not accept any new registrations until the limit is raised or the contact amount on the account is decreased.

To increase the contact limit send a request to [customerservice@emarketeer.com](mailto:customerservice@emarketeer.com)

## White Webpage

![Image of a blank page](../assets/form-unavailable/blank-page.png)

An Empty Webpage

This situation is most commonly caused by a faulty URL that the system expects to work, such as an URL with a few characters changed in a dynamic part of the URL. If you see this then go back and verify that the link you used is the correct one, preferably the [Direct URL](https://support.emarketeer.com/knowledgebase/understanding-em-urls/).

Another reason for this error could be that the Form has been moved to another campaign. This error can only occur when using an eMarketeer [Internal URL](https://support.emarketeer.com/knowledgebase/understanding-em-urls/). This is because when using an internal URL the link becomes dependant on the target component location relative to the location of the component where the link is rendered. E.g. if you link from an email component to a form component that exists within the same campaign, both components need to exist in the same campaign for the link to remain functional. Moving the form (or the email) to a different campaign will in this scenario break the link. This problem can easily be fixed by moving the components back to the original configuration of when the link was created. You can also redo the linking process.

## No such session

![Webpage that shows a message saying "No such session"](../assets/form-unavailable/no-such-session.png)

A Webpage showing the message “No such session”

This situation is most commonly caused by trying to access a Form through a [Session URL](https://support.emarketeer.com/knowledgebase/understanding-em-urls/) that has expired. Session URLs have a lifetime of 24 hours and only allow one Form answer to be submitted before expiring. It can also happen if an Answer has been deleted from the Form Components Report as this also deletes the Session the Session URL links to.

The solution to this is to use the Direct URL to the Form instead.

## Answer Already Registered

![Picture of screen showing a message saying that an answer already has been registrerd](../assets/form-unavailable/already-answered-on-this-session.png)

Answer has already been registered

This message is shown if a Form is configured to only allow one answer per person after someone has answered using the Session or [Personalised URL](https://support.emarketeer.com/knowledgebase/understanding-em-urls/) you are trying to access the From through, or if you are the person that answered and are trying to reach the Form again using a Direct URL. This might show up unexpected for people who has forwarded, or received a forward of an email with a Personalised URL to the Form as only one person is allowed to answer.

This message is rarely seen in error, but if it is then you should make sure that the correct link was used and that the Form Visitor Settings allow more than one answer.

## Form Component has been Deleted

![Picture of message saying that the Form URL is Incorrect](../assets/form-unavailable/form-component-deleted.png)

Direct URL message for a Deleted Form Component

![Picture showing message stating that the form is no longer available](../assets/form-unavailable/form-deleted-session.png)

Session URL message for a Deleted Form Component

These messages usually mean that the Form Component has been deleted on eMarketeer, but in a few cases the “Incorrect Form URL” message can mean that someone has changed the URL by mistake. If the form still exist on eMarketeer then the solution is to make sure the URL used to reach the form is correct.

## Form Component is Closed

![Picture of message saying that the form is closed](../assets/form-unavailable/survey-closed.png)

The Default Message for a Closed Form

This message is shown if the Form Component Open/Close setting is set to closed and is done manually or automatically when a condition is met. You might see this unexpectedly if the Form you are trying to access is a copy of another Form Component that was closed or had a close condition set at the time of duplication.

The solution is to change the Form’s Open/Close setting so that the Form is Open to receive new Answers.

## Anonymous not allowed

![Picture of message saying that anonymous is not allowed](../assets/form-unavailable/formanon.png)

Message for a missing Form

This message can be shown if the Form Component doesn’t exist or otherwise cannot be found with the URL that was used.

The solution is to get the correct URL from the Form.
