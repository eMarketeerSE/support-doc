# On premise: Installation process

#### Requirements

In order to integrate an on premise installation of SuperOffice you need the following.

-   A SuperOffice installation version 7.5 or newer.
-   A SuperOffice user for the integration.
-   NetServer running on Internet Information Server (IIS).
-   NetServer exposed to eMarketeer over internet.

#### Actions performed during the integration setup.

Once eMarketeer has access to SuperOffice and the integration is enabled, eMarketeer installs new items to SuperOffice such as web panels, fields, types etc. [Read more about these actions](/documentation/actions-performed-during-set-up/)

#### Starting the integration

The main part of the manual integration process is to make NetServer accessible by eMarketeer. Depending on security solution chosen this normally involves restricting/enabling access with a firewall for the communication between eMarketeer and NetServer.
