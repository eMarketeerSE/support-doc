---
description: Connect Claude to your eMarketeer account in about two minutes.
---

# Connect Claude to eMarketeer

Connect Claude to your eMarketeer account in about two minutes.

You connect once on claude.ai. The Claude desktop app uses the same connectors, so it works there too.

## Before you start

- You log in to eMarketeer with your email address and password. Logins with Microsoft or SuperOffice don't work with the connector yet.
- Your Claude plan allows custom connectors. On a Team or Enterprise plan, an owner adds the connector for your organisation first. You then only connect.
- You have the connector address:

```
https://mcp.emarketeer.com/mcp
```

## Connect

1. In Claude, open **Settings** and select **Connectors**.
2. Select **Add custom connector**.
3. Enter **eMarketeer** as the name and paste the connector address.
4. Select **Add**.
5. Select **Connect** next to eMarketeer. The eMarketeer login page opens.
6. Log in with your eMarketeer email address and password. If you use multi-factor login, complete it.
7. Allow Claude to access your eMarketeer account.

## Check that it works

Start a new chat and ask:

> Which eMarketeer accounts do I have access to?

Claude lists the accounts you belong to. If it doesn't use eMarketeer, open the tools menu in the chat and make sure eMarketeer is switched on.

## If you have several accounts

Name the account in your request, for example: "For the Acme Nordic account, how did our emails perform last month?"

## Disconnect

1. In Claude, open **Settings** and select **Connectors**.
2. Select eMarketeer and choose **Disconnect**, or remove the connector.

Claude can no longer use your eMarketeer account.

## What to do next

- Try the [example requests](README.md#examples).
- Something not working? See [AI assistants: troubleshooting](troubleshooting.md).
