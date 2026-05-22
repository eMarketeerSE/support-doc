# Missing Image Block in Email Component (Developer)

If a red-x box or a blue question-mark box appears in your sent emails when viewed in Outlook, a missing image block is probably hiding in the email component or template.

![Red-x box appearing in Outlook on Windows where an image should render](../../assets/missing-image-block/outlook.png)

Outlook (Windows)

![Blue question-mark box appearing in Outlook on Mac where an image should render](../../assets/missing-image-block/outlook-mac.png)

Outlook (Mac)

This happens when the underlying image was removed from your account or moved to a different folder, creating a new file path. Either action invalidates the image link in any email components that use it, and most email clients respond by hiding the block.

![Email content with the image visible before the path is broken](../../assets/missing-image-block/1.-Before.png)

Before the image path is broken.

![Email content with the image block hidden after the path is broken](../../assets/missing-image-block/2.-No-Block.png)

After the image block is broken and hidden.

## How to fix it

An eMarketeer user with developer permission can remove or fix the block from the component by entering developer mode.

![User account showing the developer permission enabled](../../assets/missing-image-block/3.-User.png)

Account user with developer permission.

1. Open the editor for the template or component.
2. Enter developer mode.

   ![Enable Developer Mode button in the editor toolbar](../../assets/missing-image-block/4.-dev-mode.png)

   The Enable Developer Mode button.

3. Check the names of all visible image blocks by selecting each and opening the settings tab.

   ![Settings tab showing the name of a selected image block](../../assets/missing-image-block/5.-check-other-image-names.png)

   Checking the name of a visible image block.

4. Enter Tree View.

   ![Tree View button in the developer mode toolbar](../../assets/missing-image-block/6.-tree-view.png)

   The Tree View button.

5. Locate all Image Full Width blocks in the list and match their container names with the visible ones until you find one that doesn't match. In this example, _container1 (1 Column: Image Full Width)_ does not match a visible image block.

   ![Tree View listing Image Full Width container blocks](../../assets/missing-image-block/7.-tree-view-image-full-w.png)

   Image Full Width blocks in Tree View.

6. Select the Image part of the block and change the image URL by clicking the Choose Image button, then pick a new image file in the file selection window.

   ![Image block selected in Tree View with the image URL field highlighted](../../assets/missing-image-block/7.-select-image-and-change-url.png)

   Locating the image URL.

   ![File selection popup with a new image selected](../../assets/missing-image-block/8.-select-new-image.png)

   Selecting a new image file.

7. Save the change, then return to Page View to continue editing the component.

   ![Save button highlighted in the editor toolbar](../../assets/missing-image-block/9.-save-your-change.png)

   The Save button.

   ![Email component editor now displaying the restored image](../../assets/missing-image-block/10.-Result.png)

   The result after following this guide.

## How to edit a template

1. Click Add E-Mail from a campaign page to show your templates.
2. Click More Actions on the template you want to edit.
3. Click Edit Template in the dropdown menu.
4. The template opens in the component editor. Any change saved here updates the template.

![Sequence showing Add E-Mail, More Actions, then Edit Template](../../assets/missing-image-block/Edit-Template.png)

Visual guide to editing a template.
