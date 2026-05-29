# Dynamics - Installation Process

Set up the Microsoft Dynamics 365 Sales integration. A few manual steps are required before you complete the configuration in the eMarketeer UI.

## Manual prerequisites

### Step 1: Create an app user in the customer's Power Platform environment

As a **System Administrator**, follow these steps:

1. Navigate to a consent URL and add the app: `https://login.microsoftonline.com/<your tenant id>/adminconsent?client_id=a2a5e177-5102-4792-b0eb-52f4539f3cf7`
2. Open the **Power Platform Admin Center** at `https://admin.powerplatform.microsoft.com`.
3. Go to **Manage > Environments** and select the environment you are configuring.
4. Open **Settings → Users + permissions → Application users**.
5. Click **+ New app user**.
6. In the app selection screen, choose **eMarketeer Marketing Cloud**. If it is not visible, search using the App ID `a2a5e177-5102-4792-b0eb-52f4539f3cf7`.
7. Assign the security role **System Administrator** to the app user.
8. Click **Save**.

### Step 2: Enable auditing for consent sync

To ensure consent data syncs correctly, enable auditing for the Contact table.

1. Go to Power Apps at `https://make.powerapps.com`.
2. Navigate to **Tables → Contact**.
3. Click **Properties**, then **Advanced options**.
4. Check **Audit changes to its data**.
5. Click **Save**.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/audit.png" alt="Advanced options for the Contact table with audit changes enabled"></div>

## Step 3: Enable the integration in eMarketeer

This action requires the Administrator role.

In eMarketeer, go to [Account → Plugins & Integration → Microsoft Dynamics 365](https://app.emarketeer.com/corporate/gui/account/integrations/dynamics.php).

Click **Connect to Dynamics 365**.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/dynamics_1-1024x388.png" alt="Microsoft Dynamics 365 integration page in eMarketeer with the Connect button"></div>

Log in with a Microsoft account that has access to the Dynamics environment you want to integrate.

[<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/dynamics_2-1024x442.png" alt="Microsoft sign-in prompt for connecting Dynamics"></div>

Choose the organization (environment) you want to integrate with and click **Continue**.
