# On premise: enabling the integration

This is the final step of the SuperOffice on-premise integration. Your NetServer must already be reachable from eMarketeer and you need a SuperOffice user dedicated to the integration.

If you have not completed these prerequisites, [follow these instructions](../on-premise-netserver-url-and-user-creation/).

## Enable the integration

Once SuperOffice is ready, complete the rest of the setup in eMarketeer.

1. Sign in to eMarketeer and go to **Account** > **Plugins and integrations**.
2. Click **Super Office** to open the integration settings page.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/onpremisesettings.png" alt="SuperOffice on-premise integration settings"></div>

3. Select the **On premise** radio button.
4. Fill out the form with the username, password, and WSDL base URL pointing to your NetServer SVC-file directory.
5. Click **Apply changes** to start the integration.

During the integration process, eMarketeer installs items in your SuperOffice instance. [Read more about those actions](https://help.emarketeer.com/hc/en-us/articles/205695665).

When the integration completes successfully, both systems are ready to use.
