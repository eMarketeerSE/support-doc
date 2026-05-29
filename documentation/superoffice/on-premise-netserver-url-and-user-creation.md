# On premise: NetServer URL and user creation

This article covers the prerequisites for the SuperOffice on-premise integration: exposing NetServer to eMarketeer, locating the correct WSDL URL, and creating a user for the integration.

## Requirements

For the integration to work, the following must be true:

* NetServer is installed on your server and reachable from eMarketeer over HTTP (port 80, 8080, or 443).
* The exposed NetServer version is `/services84`.
* A SuperOffice user exists for the integration, and is either a licensed user with a Sales or Complete licence, or an "Other user".
* The SuperOffice REST API allows GET, POST, PATCH, and DELETE operations.

## REST and SOAP API

The integration is built on the SuperOffice REST API. The `/services84` endpoint still needs to be available because it is used for authentication.

## Allowing eMarketeer to access your server

Unless your NetServer is publicly exposed, you need to make sure eMarketeer can reach it. Security measures typically include restricting access by firewall.

### Firewall

All traffic comes from a single eMarketeer server, so you can set firewall rules accordingly.

| IP address    | Host name | Ports         |
| ------------- | --------- | ------------- |
| 54.155.30.167 | n/a       | 80, 8080, 443 |

The IP address does not respond to ping.

## Retrieve the WSDL URL from IIS

eMarketeer needs a URL pointing to the directory where the NetServer web service functions are located. To find it:

1. Open IIS on your server.
2. In the left panel, open the **Sites** tree and locate the site that holds your NetServer.
3. Among the subfolders, find one called **Services84** (the exact name depends on version).
4. The folder contains `.svc` files. Click **Content view** to confirm.
5. Right-click **Contact.svc** and select **Browse** to open it in your browser.
6. The browser shows the complete path to the directory.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/IIS.png" alt="IIS NetServer services directory"></div>

The path (excluding the filename) is the WSDL URL to use in eMarketeer.

Example: `https://www.yourcompany.se/SuperOffice/Remote/Services84/`

If the domain in your URL is `localhost`, replace it with the correct public domain name.

Save this URL for the next step.

## Create the integration user

eMarketeer needs to sign in to NetServer as a SuperOffice user. You have two options:

* Create an "Other" user.
* Use a licensed user.

The recommended option is an "Other" user because it does not consume a user licence. Note that "Other" users can only be created from the desktop admin, not the web admin.

To create an "Other" user, open SuperOffice Admin and go to user management. On the **Other** tab, create a new user with a username and password.

You can also use a licensed user. Create a new SuperOffice user (not a Windows user) and set its user level to 0 (zero).

Save the username and password.

## What to do next

With the URL and user credentials ready, you can [enable the integration](../on-premise-enabling-the-integration/).
