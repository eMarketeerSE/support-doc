# Why did the SuperOffice automation fail?

SuperOffice automation events that have been listed as failed are all listed in the Integration Queue: [https://app.emarketeer.com/corporate/gui/account/integrations/integration\_queue.php](https://app.emarketeer.com/corporate/gui/account/integrations/integration_queue.php) (need to be logged in)

This feature offers a way to review all failed automation events and to re-enqueue them; retrying to launch the failed automation event. Below is a list of known reasons as to why a SuperOffice automation event failed and the suggested resolution.

### Missing mandatory information

If the contact is missing mandatory contact information it will fail, and a yellow warning triangle will be shown. Below is a list of mandatory information.

-   Email
-   First name
-   Last name
-   Company (only applicable in older SuperOffice installations)

_Make sure the contact does not miss mandatory information. Then re-enqueue._

### Bad External ID

When a contact triggers a SuperOffice automation eMarketeer will check the “External ID” field of the contact. If the field has a defined value (not empty), eMarketeer will attempt to perform the SuperOffice task using the specified value as an id of SuperOffice contact. If no contact in SuperOffice matches the value the automation will fail. 

_Remove the bad External ID from the contact. Then re-enqueue._

### Automation refer to old SuperOffice resources

Older automations may refer to SuperOffice resources that have since been deleted. E.g. if specific projects, selections or interest codes that are deleted are referred to the automation will fail.

_Edit the automation and update it to contain existing SuperOffice resources. Then re-enqueue._

### No connection to server / throttled network (request limits) 

If you are using your own SuperOffice server and this server is down, the network is down or if anything else prevents eMarketeer from communicating with your server the automation will fail. In some cases when a large amount of automations or feed activities are generated, communication may be throttled by the SuperOffice server preventing the automation from perfoming the task.

_Wait until SuperOffice can be reached. Then re-enqueue._

### SuperOffice online service overloaded

On rare occasions SuperOffice Online is under too much load and their service is disrupted, preventing the service from being reached. During this time automations will fail.

_Wait until SuperOffice can be reached. Then re-enqueue._
