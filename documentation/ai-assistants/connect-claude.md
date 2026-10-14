---
description: Connect Claude to your eMarketeer account in about two minutes.
---

# Connect Claude to eMarketeer

Connect Claude to your eMarketeer account in about two minutes.

You connect once on claude.ai. The Claude desktop app uses the same connectors, so it works there too.

## Before you start

- You log in to eMarketeer with your email address and password. Logins with Microsoft or SuperOffice don't work with the connector.
- Your Claude plan allows custom connectors.
- You have the connector address:

```
https://mcp.emarketeer.com/mcp
```

If your company manages Claude for you, follow Connect through your organization below. If Claude says "Organization owner must add this for the team", that's you. Otherwise, follow Connect on your own.

## Connect on your own

1. In Claude, open **Customize** and select **Connectors**.
2. Select **+ Add**, then **Add custom connector**.
3. Enter **eMarketeer** as the name and paste the connector address as the **MCP server URL**. Select **Continue**.
4. If Claude shows sign-in options, choose **Register automatically**.
5. Select **Add**.
6. Under **Yours**, select eMarketeer and choose **Connect**. The eMarketeer login page opens.
7. Log in with your eMarketeer email address and password. If you use multi-factor login, complete it.
8. Allow Claude to access your eMarketeer account.

## Connect through your organization

An owner of your company's Claude organization adds the connector once. Everyone else then connects to it.

If you are the owner:

1. In Claude, open **Organization settings** and select **Connectors**.
2. Select **+ Add** and add a custom web connector.
3. Enter **eMarketeer** as the name and paste the connector address. Select **Continue**.
4. If Claude shows sign-in options, choose **Register automatically**.
5. Select **Add**.

To connect, as the owner or any other member:

1. In Claude, open **Customize** and select **Connectors**.
2. Select **Yours**, then select eMarketeer.
3. Choose **Connect**. The eMarketeer login page opens.
4. Log in with your eMarketeer email address and password. If you use multi-factor login, complete it.
5. Allow Claude to access your eMarketeer account.

Don't add your own copy of the connector. Claude doesn't allow the same address twice in one organization.

## Check that it works

Start a new chat and ask:

> Which eMarketeer accounts do I have access to?

Claude lists the accounts you belong to. If it doesn't use eMarketeer, select **+** in the message box, then **Connectors**, and make sure eMarketeer is switched on.

## If you have several accounts

Name the account in your request, for example: "For the Acme Nordic account, how did our emails perform last month?"

## Disconnect

1. In Claude, open **Customize** and select **Connectors**.
2. Select **Yours**, then select eMarketeer.
3. Choose **Disconnect**.

Claude can no longer use your eMarketeer account.

## What to do next

- Try the [example requests](README.md#examples).
- Something not working? See [AI assistants: troubleshooting](troubleshooting.md).
