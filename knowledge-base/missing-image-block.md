# Missing Image Block in Email Component (Developer)

If a box with a red x or a box with a blue question mark shows up in your sent emails when reading them in Outlook then you might have a rogue image block hiding in your email component or template.

![Outlook (Win10)](../assets/missing-image-block/outlook.png)

Outlook (Windows)

![picture of the problem as presented in outlook for mac](../assets/missing-image-block/outlook-mac.png)

Outlook (Mac)

This problem is caused by a missing image file that you’ve either removed the image from your account or moved it to another folder creating a new file path for it. Both actions invalidate the image link in any Email components that use the image and most email clients and services handle this by simply hiding the content block.

![Picture is Visible](../assets/missing-image-block/1.-Before.png)

Before the Image path is broken

![Picture is not visible](../assets/missing-image-block/2.-No-Block.png)

After the Image Block is broken and it has been hidden

## How to rectify

An eMarketeer user with Developer Permissions can remove the block from the component by going into “Developer mode”.

![User with Developer Permissions](../assets/missing-image-block/3.-User.png)

Account User with Developer Permission

1.  Go into the editor for the Template or Component
2.  Enter ****Developer Mode  
    ****
    
    ![Click the button labeled Enable Developer Mode](../assets/missing-image-block/4.-dev-mode.png)
    
    The Enable Developer Mode button
    
3.  Check the names of all visible Image Blocks by selecting them and going to the settings tab.
    
    ![Select the visible image blocks and note their names](../assets/missing-image-block/5.-check-other-image-names.png)
    
    Checking the name of a visible Image Block
    
4.  Enter ****************Tree View****************.
    
    ![select tree view](../assets/missing-image-block/6.-tree-view.png)
    
    The Tree View button
    
5.  Locate all “Image Full Width” blocks in the list and match their container names with the ones that are visible until you find one that doesn’t match. In this example it would be ‘_container1 (1 Column: Image Full Width)’_ that doesn’t match a visible Image Block.
    
    ![Image Full Width blocks marked in Tree View](../assets/missing-image-block/7.-tree-view-image-full-w.png)
    
    Image Full Width blocks in Tree View
    
6.  Select the _‘Image’_ part of the Image Block we need to correct and change the Image URL by clicking the \[Choose Image\] button and selecting a new image file in the File Selection pop-up window.
    
    ![Select image in Tree View and Change Image Source Path](../assets/missing-image-block/7.-select-image-and-change-url.png)
    
    Locating the Image URL
    
    ![Image Selected in file selection popup window](../assets/missing-image-block/8.-select-new-image.png)
    
    Selecting a new Image File
    
7.  Save your change and then go back to Page View to continue editing the Component to your liking.
    
    ![Picture shows the save button since its very important to click](../assets/missing-image-block/9.-save-your-change.png)
    
    The Save button
    
    ![Picture shows the Image being visible in the email component editor](../assets/missing-image-block/10.-Result.png)
    
    Result after following this guide
    

### How to edit a Template

To edit a template you follow the following steps.

1.  Click \[Add E-Mail\] from a Campaign Page to show your templates.
2.  Click \[More Actions\] on the template you want to edit.
3.  Click \[Edit Template\] in the dropdown meny.
4.  The Template will now open in the Component editor and any changes made in the Editor will change the Template.

![Add E-Mail, then More Actions on the template, then Edit Template](../assets/missing-image-block/Edit-Template.png)

Visual Guide to Edit a Template
