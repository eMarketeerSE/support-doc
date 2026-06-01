# On premise: installation process

This article outlines the requirements and high-level steps for integrating an on-premise SuperOffice installation with eMarketeer.

## Requirements

To integrate an on-premise SuperOffice installation, you need the following:

- A SuperOffice installation version 7.5 or newer.
- A SuperOffice user dedicated to the integration.
- NetServer running on Internet Information Services (IIS).
- NetServer exposed to eMarketeer over the internet.

## Actions performed during setup

Once eMarketeer has access to SuperOffice and the integration is enabled, eMarketeer installs new items in SuperOffice such as web panels, fields, and types. [Read more about these actions](actions-performed-during-set-up.md).

## Starting the integration

The main manual step is making NetServer accessible to eMarketeer. Depending on your chosen security solution, this usually involves opening firewall rules for the communication between eMarketeer and NetServer.
