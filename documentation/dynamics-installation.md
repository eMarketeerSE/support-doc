# Dynamics - Installation Process

### Manual Prerequisites Before UI Integration

Before completing the integration via the eMarketeer UI, a few manual steps are required.

#### Step 1: Create an App User in the Customer’s Power Platform Environment

As a **System Administrator**, follow these steps:

1.  Navigate to a consent URL and add the app:  
    https://login.microsoftonline.com/_**<your tenant id>**_/adminconsent?client\_id=a2a5e177-5102-4792-b0eb-52f4539f3cf7
2.  Navigate to the **Power Platform Admin Center** (https://admin.powerplatform.microsoft.com).
3.  Go to **Manage >** **Environments** and select the environment you’re configuring.
4.  Open **Settings → Users + permissions → Application users**.
5.  Click **“+ New app user”**.
6.  In the app selection screen, choose **“eMarketeer Marketing Cloud”**.
    -   If it’s not visible, search using the App ID: `a2a5e177-5102-4792-b0eb-52f4539f3cf7`.
7.  Assign the following **security roles** to the app user: System Administrator
8.  Click **Save**.

#### Step 2: Enable Auditing for Consent Sync

To ensure consent data syncs correctly, auditing must be enabled for the **Contact** table.

1.  Go to **Power Apps** (https://make.powerapps.com).
2.  Navigate to **Tables → Contact**.
3.  Click **“Properties”**, then **“Advanced options”**.
4.  Scroll down and check the option: **“Audit changes to its data”**.
5.  Click **Save**.

![](../assets/dynamics-installation/audit.png)

### Step 3: Enable the integration in eMarketeer

This action requires the Administrator role.

In eMarketeer, go to: [Account -> Plugins & Integration -> Microsoft Dynamics 365](https://app.emarketeer.com/corporate/gui/account/integrations/dynamics.php)

Click “Connect to Dynamics 365”.

[![](../assets/dynamics-installation/dynamics_1-1024x388.png)](https://support.emarketeer.com/wp-content/uploads/2026/02/dynamics_1.png)

You will be prompted to log in to a Microsoft account.  
Log in with a User that has access to the Dynamics Environment that you wish to integrate with.

[![](../assets/dynamics-installation/dynamics_2-1024x442.png)](https://support.emarketeer.com/wp-content/uploads/2026/02/dynamics_2.png)

Choose the organization (environment) that you wish to integrate towards and click continue.
