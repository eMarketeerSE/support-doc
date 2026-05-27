# Dynamics - Add Lead to Marketing List

The **Add Lead to Marketing List** step adds a person to a designated Marketing List in Microsoft Dynamics 365 Sales. It targets Lead records specifically.

[![Add Lead to Marketing List step configuration in Dynamics](../../../.gitbook/assets/add_lead_marketing_list-1024x407.png)](https://support.emarketeer.com/wp-content/uploads/2026/02/add_lead_marketing_list.png)

## Step configuration

When you add this step to a Journey, you only need to configure one field:

* **Marketing List (required):** select the Dynamics Marketing List you want to add the Lead to.

## Strict Lead matching

Because this step is designed for Leads, eMarketeer uses a strict search process:

* eMarketeer searches Dynamics exclusively for a matching Lead.
* If a Lead is found, they are added to the selected Marketing List.
* If no Lead is found, the step is skipped and the person is not added to the list. eMarketeer does not attempt to find or add a Contact record.
