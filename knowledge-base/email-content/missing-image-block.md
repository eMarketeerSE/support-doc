---
description: >-
  How to find and remove hidden empty image blocks that cause broken-image boxes
  in Outlook (requires Developer permission).
---

# Missing Image Block in Email Component (Developer)

If a red-x box or a blue question-mark box appears in your sent emails when viewed in Outlook, a missing image block is probably hiding in the email component or template.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/outlook.png" alt="Red-x box appearing in Outlook on Windows where an image should render"></div>

Outlook (Windows)

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/outlook-mac.png" alt="Blue question-mark box appearing in Outlook on Mac where an image should render"></div>

Outlook (Mac)

This happens when the underlying image was removed from your account or moved to a different folder, creating a new file path. Either action invalidates the image link in any email components that use it, and most email clients respond by hiding the block.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/1.-Before.png" alt="Email content with the image visible before the path is broken"></div>

Before the image path is broken.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/2.-No-Block.png" alt="Email content with the image block hidden after the path is broken"></div>

After the image block is broken and hidden.

## How to fix it

An eMarketeer user with developer permission can remove or fix the block from the component by entering developer mode.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/3.-User.png" alt="User account showing the developer permission enabled"></div>

Account user with developer permission.

1. Open the editor for the template or component.
2.  Enter developer mode.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/4.-dev-mode.png" alt="Enable Developer Mode button in the editor toolbar"></div>

    The Enable Developer Mode button.
3.  Check the names of all visible image blocks by selecting each and opening the settings tab.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/5.-check-other-image-names.png" alt="Settings tab showing the name of a selected image block"></div>

    Checking the name of a visible image block.
4.  Enter Tree View.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/6.-tree-view.png" alt="Tree View button in the developer mode toolbar"></div>

    The Tree View button.
5.  Locate all Image Full Width blocks in the list and match their container names with the visible ones until you find one that doesn't match. In this example, _container1 (1 Column: Image Full Width)_ does not match a visible image block.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/7.-tree-view-image-full-w.png" alt="Tree View listing Image Full Width container blocks"></div>

    Image Full Width blocks in Tree View.
6.  Select the Image part of the block and change the image URL by clicking the Choose Image button, then pick a new image file in the file selection window.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/7.-select-image-and-change-url.png" alt="Image block selected in Tree View with the image URL field highlighted"></div>

    Locating the image URL.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/8.-select-new-image.png" alt="File selection popup with a new image selected"></div>

    Selecting a new image file.
7.  Save the change, then return to Page View to continue editing the component.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/9.-save-your-change.png" alt="Save button highlighted in the editor toolbar"></div>

    The Save button.

    <div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/10.-Result.png" alt="Email component editor now displaying the restored image"></div>

    The result after following this guide.

## How to edit a template

1. Click Add E-Mail from a campaign page to show your templates.
2. Click More Actions on the template you want to edit.
3. Click Edit Template in the dropdown menu.
4. The template opens in the component editor. Any change saved here updates the template.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/Edit-Template.png" alt="Sequence showing Add E-Mail, More Actions, then Edit Template"></div>

Visual guide to editing a template.
