# Editing the support site

This guide explains how to change the eMarketeer support site with Claude Code. You don't need to know Git or programming. Claude takes care of the technical steps.

## How it works

Every change you ask Claude for goes to the live support site at support.emarketeer.com. Customers see it about one minute after it is published.

Because of that, Claude always shows you what it changed and asks before it publishes. Nothing goes live until you say yes.

## Before you start (one time)

You need Claude Code installed, and the `support-doc` folder on your computer. Ask a developer to set this up for you.

## Start a work session

1. Open **Terminal** (on a Mac: press Cmd + Space, type "Terminal", press Enter).
2. Type `cd ~/dev/support-doc` and press Enter. If your folder is somewhere else, use that location.
3. Type `claude` and press Enter.
4. Start your first message with **"I'm editing the support site."**

If you use the Claude desktop app instead, open the `support-doc` folder in it and start the same way.

## Ask for changes

Write to Claude the way you would write to a colleague. Be specific about which article and what should change.

Good examples:

- "Rewrite the article about importing contacts so it starts with the steps, not the background."
- "Add a new article about SMS consent under Contacts. Here is my draft: ..."
- "The article about forms says the button is called Save. It's called Publish now. Fix that."

You don't need to ask for a Swedish version. Claude writes or updates the Swedish article automatically every time you change an English one, and the other way around.

## What Claude does after each change

When Claude is done, it will:

1. Tell you in plain words what it changed.
2. Ask if it can publish the change. Read the summary and answer yes or no.
3. After you say yes, publish it and give you a link to the support site.

Claude also asks you before anything that is hard to undo, like deleting or moving articles.

## Check your changes

Open the support site in your browser about one minute after Claude says it published the change. Use the language picker to switch between English and Swedish.

If something looks wrong, tell Claude what you see, for example: "The image in the SMS consent article doesn't show." Claude fixes it and asks you again before publishing the fix.

## Don't edit in GitBook directly

Make all changes through Claude, not in the GitBook editor. Claude keeps the English and Swedish versions in sync and follows our writing style. Edits made directly in GitBook skip those steps.

## If something goes wrong

- **Claude shows an error or asks something technical you don't understand:** stop, and send a screenshot to Magnus. Don't approve things you're unsure about.
- **You changed your mind about a published change:** tell Claude, for example "Undo the change you just made to the forms article." Claude undoes it and asks before publishing the undo.
