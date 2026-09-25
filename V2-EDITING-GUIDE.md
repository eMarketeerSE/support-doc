# Working on the new support site

This guide explains how to make changes to the new version of the eMarketeer support site with Claude Code. You don't need to know Git or programming. Claude takes care of the technical steps.

## How it works

There are two versions of the support site while the new one is being built:

- **The live site** at support.emarketeer.com. Customers see this. It stays as it is until launch day.
- **The new version.** Only people in our GitBook organization can see it. This is where you work.

Everything you ask Claude to change for the new version goes to the new version only. Customers see nothing until launch day, when the new version replaces the live site.

## Before you start (one time)

You need:

1. Claude Code installed, and the `support-doc` folder on your computer. Ask a developer to set this up for you.
2. Access to our GitBook organization, so you can preview the new version. Ask Magnus to invite you.

## Start a work session

1. Open **Terminal** (on a Mac: press Cmd + Space, type "Terminal", press Enter).
2. Type `cd ~/dev/support-doc` and press Enter. If your folder is somewhere else, use that location.
3. Type `claude` and press Enter.
4. Start your first message with **"I'm working on the new version."** Claude then makes sure your changes go to the new version and not the live site.

If you use the Claude desktop app instead, open the `support-doc` folder in it and start the same way.

## Ask for changes

Write to Claude the way you would write to a colleague. Be specific about which article and what should change.

Good examples:

- "I'm working on the new version. Rewrite the article about importing contacts so it starts with the steps, not the background."
- "In the new version, add a new article about SMS consent under Contacts. Here is my draft: ..."
- "In the new version, move the dashboards articles into the Guides section."
- "In the new version, the article about forms says the button is called Save. It's called Publish now. Fix that."

You don't need to ask for a Swedish version. Claude writes or updates the Swedish article automatically every time you change an English one, and the other way around.

## What Claude does after each change

When Claude is done, it will:

1. Tell you in plain words what it changed.
2. Save the change to the new version.
3. Give you a link where you can preview it.

Claude asks you before anything that is hard to undo, like deleting or moving articles. Read the question and answer yes or no.

## Preview your changes

Open the new version in your browser about one minute after Claude says it saved the change:

- English: https://app.gitbook.com/o/1JdVdPfmES6QvXxigQJW/s/6I0qo50pR92UyLZfNHV7/
- Swedish: https://app.gitbook.com/o/1JdVdPfmES6QvXxigQJW/s/KXTjjergUfIPpDFG4Gkd/

If something looks wrong, tell Claude what you see, for example: "The image in the SMS consent article doesn't show."

## Don't edit in GitBook directly

Make all changes through Claude, not in the GitBook editor. Claude keeps the English and Swedish versions in sync and follows our writing style. Edits made directly in GitBook skip those steps.

## Fixing something on the live site

Sometimes the live site needs a fix before launch, like a wrong phone number. Tell Claude clearly:

- "This is a fix for the **live site**: the support phone number on the contact page is wrong. It should be 08-123 456 78."

Claude asks you to confirm before changing the live site, because customers see those changes within a minute. Claude also copies the fix to the new version so it isn't lost at launch.

## Launch day

Launch is done together with Magnus or a developer. When it's time, tell Claude: "We're launching the new version today." Claude then goes through the launch checklist, asks for confirmation, and switches the live site to the new version.

## If something goes wrong

- **Claude seems unsure which version you mean:** say "new version" or "live site" explicitly.
- **Claude shows an error or asks something technical you don't understand:** stop, and send a screenshot to Magnus. Don't approve things you're unsure about.
- **You changed your mind about a change:** tell Claude, for example "Undo the change you just made to the forms article." Claude can undo anything in the new version.
