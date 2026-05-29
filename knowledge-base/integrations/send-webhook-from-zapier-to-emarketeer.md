# Send a webhook from Zapier to eMarketeer

Set up a Zap that sends contact data to eMarketeer as a custom signal.

This is useful when you want to capture form submissions, CRM updates, or other engagement data from any source. The signal will create or update the contact in eMarketeer and record the engagement.

### Step 1: Create a new Zap

1. Log in to Zapier and click "Create Zap".
2. Name the Zap for easy reference.

### Step 2: Set up the trigger

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/zap.png" alt="Zap setup view"></div>

1. Choose a trigger app that holds the contact data you want to send. In this example, a Sleeknote form submission.
2. Select the specific event that triggers the Zap, for example "New Form Submission".
3. Connect your account and test the trigger to confirm the data is being captured.

### Step 3: Add the webhook action

1. Click "+ Add Action" and select "Webhooks by Zapier" as the action app.
2. Choose "Custom Request" as the action event so you can send a custom API call to eMarketeer.

### Step 4: Configure the webhook

In the webhook setup dialog, enter:

* **Method:** POST
* **URL:** the Signals API endpoint — `https://connect.emarketeer.com/engagements-api/v1/signals`
* **Headers:**
  * Content-Type: `application/json`
  * Authorization: `Bearer YOUR_API_KEY` (replace `YOUR_API_KEY` with your actual API key)
* **Payload Type:** JSON

In the **Data** section, enter the data you want to send in JSON. Example template:

`{ "adapter": "Sleeknote", "category": "Newsletter signup", "contact": { "firstName": "{{trigger_data_first_name}}", "lastName": "{{trigger_data_last_name}}", "email": "{{trigger_data_email}}", "mobilePhone": "{{trigger_data_phone}}" }, "eventTime": "{{zap_meta_utc_iso}}", "consent": { "marketing": { "allowed": true, "text": "Consents to marketing sendouts" } } }`

Replace the placeholder values (e.g. `{{trigger_data_first_name}}`) with the matching fields from your trigger data.

### Step 5: Test the webhook action

1. Click "Test & Review" to send a test payload to eMarketeer.
2. Check eMarketeer to confirm the contact was created or updated and that the custom signal was recorded.

### Step 6: Turn on your Zap

1. Once the test passes, click "Turn on Zap" to activate it.
2. The Zap will now send contact data to eMarketeer whenever the trigger fires.

### Additional information

* **Adapter:** the name of the signal source, such as the tool you're using (Sleeknote, CRM, and so on).
* **Category:** the type of data or action, for example "Newsletter signup" or "Sale closed".
* **Event Time:** use `{{zap_meta_utc_iso}}` to capture the exact time the event occurred.

### Recommended use cases

Use this setup to send engagement data such as form submissions, contact updates, or CRM activity. For form submissions, the Signals API shown above is the recommended approach.

For more details on the Signals API, see the [eMarketeer API documentation](https://api-doc.emarketeer.com/?urls.primaryName=Engagement#/Signals/post_signals).
