---
description: Connect ChatGPT to your eMarketeer account in about two minutes.
---

# Connect ChatGPT to eMarketeer

Connect ChatGPT to your eMarketeer account in about two minutes.

ChatGPT calls a connection like this a plugin. You add it once, and it works in all your chats.

## Before you start

- You log in to eMarketeer with your email address and password. Logins with Microsoft or SuperOffice don't work with the connector.
- Your ChatGPT plan allows custom MCP servers. In a company workspace, an admin may need to allow them first.
- You have the connector address:

```
https://mcp.emarketeer.com/mcp
```

## Connect

1. In ChatGPT, select **Plugins** in the sidebar.
2. Select **Add**, then **Add custom MCP server**.
3. Enter **eMarketeer** as the **Name** and paste the connector address as the **Server URL**.
4. Leave **Authentication** set to **OAuth**. ChatGPT finds the rest of the settings by itself.
5. Tick **I understand and want to continue**, then select **Create as a plugin**.
6. Select **Continue to eMarketeer**. The eMarketeer login page opens.
7. Log in with your eMarketeer email address and password. If you use multi-factor login, complete it.
8. On the **Authorize App** page, check that the domain is chatgpt.com and select **Accept**.

## Check that it works

Start a new chat and ask:

> Using the eMarketeer plugin, which eMarketeer accounts do I have access to?

ChatGPT lists the accounts you belong to.

## If you have several accounts

Name the account in your request, for example: "For the Acme Nordic account, how did our emails perform last month?"

## Disconnect

1. In ChatGPT, open **Settings** and select **Plugins**.
2. Select eMarketeer, then **Uninstall**.

ChatGPT can no longer use your eMarketeer account.

## What to do next

- Try the [example requests](README.md#examples).
- Something not working? See [AI assistants: troubleshooting](troubleshooting.md).
