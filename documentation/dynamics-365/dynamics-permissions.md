---
description: >-
  Every Dataverse permission the eMarketeer integration needs, with the
  recommended least-privilege security role and a full use-case breakdown.
---

# Dynamics - Required permissions

This article lists every permission the eMarketeer integration needs inside your Microsoft Dynamics 365 / Dataverse environment: which tables it touches, what kind of access it needs to each, and the exact security privileges behind that access. It is intended for Dynamics administrators and security reviewers who want to grant the integration a least-privilege security role instead of the System Administrator role.

## How the integration connects

eMarketeer accesses your environment through an application user using the standard Dataverse Web API (`api/data/v9.2`). Authentication is server-to-server OAuth (client credentials) against Microsoft Entra ID, scoped to your Dataverse environment URL. No Microsoft Graph permissions are used or requested. The only scope the integration asks for is `https://<yourenvironment>.crm.dynamics.com/.default`.

During the initial connection, the integration makes one call to the Dynamics global discovery service (`globaldisco.crm.dynamics.com`) with the connecting administrator's own signed-in token, to find the environment being connected. After that, only the application user is used.

The integration reads and writes records regardless of who owns them, so privileges must be granted with **Organization scope**. A narrower scope (own records only, or one business unit) would hide records owned by other users and break syncs and exports.

## What the integration does not do

- It never deletes your Contacts, Leads, Accounts, activities, or marketing lists.
- The only field it ever changes on your Contacts outside of an explicit export is `donotbulkemail` (email consent), described in the [Consent sync](#6-consent-sync) use case.
- It creates no records in your environment except the ones described in the use cases below.

## All permissions at a glance

The table below is the complete set: the integration's security role needs these privileges and no others. Entries marked *connect/disconnect only* are used only while installing, upgrading, or removing the integration, but they stay in the same role so no role juggling is needed around those events.

| Table / component | Access needed | Privileges |
|---|---|---|
| Contact (`contact`) | Read, Create, Write, Append, Append To | `prvReadContact`, `prvCreateContact`, `prvWriteContact`, `prvAppendContact`, `prvAppendToContact`, `prvAssignContact` (for setting record owners) |
| Lead (`lead`) | Read, Create, Write, Append, Append To | `prvReadLead`, `prvCreateLead`, `prvWriteLead`, `prvAppendLead`, `prvAppendToLead` |
| Account (`account`) | Read, Create, Append To | `prvReadAccount`, `prvCreateAccount`, `prvAppendToAccount` |
| Marketing List (`list`) | Read, Write, Append To | `prvReadList`, `prvWriteList`, `prvAppendToList` |
| Activities (Task, Phone Call) | Create, Append | `prvCreateActivity`, `prvAppendActivity` |
| User (`systemuser`) | Read, Append To | `prvReadUser`, `prvAppendToUser` |
| Security Role (`role`) | Read | `prvReadRole` |
| Auditing (`audit`) | Read audit log | `prvReadRecordAuditHistory`, `prvReadAuditSummary` (corresponds to the "View Audit History" and "View Audit Summary" UI checkboxes) |
| eMarketeer Subscriptions (`em_subscriptions`, custom) | Read, Create, Write, Delete, Append, Append To | `prvReadem_subscriptions`, `prvCreateem_subscriptions`, `prvWriteem_subscriptions`, `prvDeleteem_subscriptions`, `prvAppendem_subscriptions`, `prvAppendToem_subscriptions` |
| eMarketeer Subscription Categories (`em_subscriptioncategories`, custom) | Read, Create, Write, Delete, Append To | `prvReadem_subscriptioncategories`, `prvCreateem_subscriptioncategories`, `prvWriteem_subscriptioncategories`, `prvDeleteem_subscriptioncategories`, `prvAppendToem_subscriptioncategories` |
| Act on Behalf of Another User | Execute | `prvActOnBehalfOfAnotherUser` (used only to stamp activities with the chosen Dynamics user as creator) |
| Publisher (`publisher`) — *connect/disconnect only* | Read, Create | `prvReadPublisher`, `prvCreatePublisher` |
| Table definitions (metadata) — *connect/disconnect only* | Read, Create, Delete | `prvReadEntity`, `prvCreateEntity`, `prvDeleteEntity`, `prvCreateAttribute` |
| Alternate keys (metadata) — *connect/disconnect only* | Read, Create | `prvReadEntityKey`, `prvCreateEntityKey` |
| Table relationships (metadata) — *connect/disconnect only* | Read, Create | `prvReadRelationship`, `prvCreateRelationship` |
| System views (`savedqueries`) — *connect/disconnect only* | Read, Create | `prvReadCustomization`, `prvWriteCustomization` (Dataverse has no dedicated savedquery privilege) |
| Forms (`systemforms`) — *connect/disconnect only* | Read, Write | `prvReadSystemForm`, `prvWriteSystemForm` |
| Web resources (`webresourceset`) — *connect/disconnect only* | Read, Create, Write, Delete | `prvReadWebResource`, `prvCreateWebResource`, `prvWriteWebResource`, `prvDeleteWebResource` |
| Webhook endpoints (`serviceendpoints`) — *connect/disconnect only* | Read, Create, Delete | `prvReadServiceEndpoint`, `prvCreateServiceEndpoint`, `prvDeleteServiceEndpoint` |
| Webhook registration steps (`sdkmessageprocessingsteps`, `sdkmessages`) — *connect/disconnect only* | Read, Create, Delete | `prvReadSdkMessage`, `prvReadSdkMessageProcessingStep`, `prvCreateSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep` |
| Publish customizations — *connect/disconnect only* | Execute | `prvPublishCustomization` |

One requirement besides privileges: auditing must be enabled on the Contact table, or consent sync cannot detect consent changes made in Dynamics.

## Recommended security role

Replace the System Administrator assignment with one custom role — for example "eMarketeer Integration" — assigned to the eMarketeer application user and containing exactly the privileges in the table above at Organization scope. No built-in Dynamics role matches this permission set without granting far more than the integration needs, so building the role from the table is the cleanest option.

In the security-role editor, the privileges are found here:

| Editor location | Privileges to set |
|---|---|
| Core Records tab: Contact, Lead, Account, Marketing List, Activity | The Read/Create/Write/Append/Append To/Assign cells from the table above |
| Core Records tab, miscellaneous privileges | View Audit History, View Audit Summary |
| Business Management tab: User, Security Role | Read on both; Append To on User |
| Business Management tab, miscellaneous privileges | Act on Behalf of Another User |
| Customization tab: Entity, Field, Entity Key, Relationship, System Form, Web Resource, Customizations | The metadata, form, view, and web resource entries from the table above, plus Publish Customizations |
| Customization tab: Sdk Message, Sdk Message Processing Step, Service Endpoint; Business Management tab: Publisher | The webhook and publisher entries from the table above |
| Custom Entities tab: eMarketeer Subscriptions, eMarketeer Subscription Categories | The full sets from the table above |

**Ordering note:** the two eMarketeer custom tables (`em_subscriptions`, `em_subscriptioncategories`) only exist after the first connection, so their privileges can be added to the role only after use case 1 has run. The practical sequence is: create the role without the custom-table rows, connect, then add those privileges.

We advise against approximating this with built-in roles such as Salesperson, Marketing Professional, or System Customizer. They include broad rights (deleting records, sharing, bulk operations, unrestricted customization) that the integration never exercises, which defeats the purpose of moving away from System Administrator.

After assigning the role, run the connection test in eMarketeer. It verifies the application user can reach the required tables. Dataverse names the missing privilege in the error whenever a call is denied, so any gap that surfaces later is straightforward to trace back to a specific role entry.

## Permissions by feature

This section describes what the integration does with those permissions, feature by feature. If you do not use a feature, its permissions can be left out of the role.

Each use case states whether it is user-initiated (someone in eMarketeer or Dynamics triggers it, directly or through an automation they configured) or automatic (a recurring background sync). The two automatic flows — consent sync and subscription sync — only touch contacts that already exist in both systems; they never pull new records into either side on their own.

### 1. Connecting and installing

Runs once, when your administrator connects Dynamics 365 to eMarketeer. The integration verifies the application user works, then installs its components: an "eMarketeer" publisher, two custom tables for subscription sync (`em_subscriptions`, `em_subscriptioncategories`) with keys and relationships, a system view and a section on the Contact form showing subscriptions, webhooks that notify eMarketeer when Contacts are created or updated, and the eMarketeer contact-card panel (an HTML web resource).

**Trigger:** user-initiated. Runs only when your administrator connects the integration.

**Tables accessed:** publisher, system forms, web resources, service endpoints, SDK message registrations, table/key/relationship definitions (metadata), saved queries.

**Privileges required:** the entries marked *connect/disconnect only* in "All permissions at a glance". Install-time only.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Verify the application user is set up (`WhoAmI`) | — | Read | none |
| Check the required tables are visible | — | Read | none |
| Check auditing is enabled on Contact | metadata | Read | `prvReadEntity` |
| Create the "eMarketeer" publisher (prefix `em`) | publisher | Read + Create | `prvReadPublisher`, `prvCreatePublisher` |
| Create the two custom subscription tables | metadata | Read + Create | `prvReadEntity`, `prvCreateEntity`, `prvCreateAttribute` |
| Create alternate keys on those tables | metadata | Read + Create | `prvReadEntityKey`, `prvCreateEntityKey` |
| Create relationships to Contact | metadata | Read + Create | `prvReadRelationship`, `prvCreateRelationship` |
| Create the subscriptions view | savedquery | Read + Create | `prvReadCustomization`, `prvWriteCustomization` |
| Add a subscriptions section to the Contact form | systemform | Read + Write | `prvReadSystemForm`, `prvWriteSystemForm` |
| Publish the customizations | — | Execute | `prvPublishCustomization` |
| Register the eMarketeer webhook endpoint | serviceendpoint | Read + Create | `prvReadServiceEndpoint`, `prvCreateServiceEndpoint` |
| Register webhook steps on Contact create/update | sdkmessage, sdkmessageprocessingstep | Read + Create | `prvReadSdkMessage`, `prvReadSdkMessageProcessingStep`, `prvCreateSdkMessageProcessingStep` |
| Install the contact-card panel | webresource | Read + Create + Write | `prvReadWebResource`, `prvCreateWebResource`, `prvWriteWebResource` |

### 2. Disconnecting and uninstalling

Runs once, if you disconnect the integration. Removes everything use case 1 installed.

**Trigger:** user-initiated. Runs only when your administrator disconnects the integration.

**Tables accessed:** service endpoints, SDK message registrations, table definitions (metadata), web resources.

**Privileges required:** `prvReadSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep`; `prvReadServiceEndpoint`, `prvDeleteServiceEndpoint`; `prvReadWebResource`, `prvDeleteWebResource`; `prvReadEntity`, `prvDeleteEntity`. Uninstall-time only.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Remove the webhook registrations | sdkmessageprocessingstep, serviceendpoint | Read + Delete | `prvReadSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep`, `prvReadServiceEndpoint`, `prvDeleteServiceEndpoint` |
| Remove the two custom subscription tables | metadata | Read + Delete | `prvReadEntity`, `prvDeleteEntity` |
| Remove the contact-card panel | webresource | Read + Delete | `prvReadWebResource`, `prvDeleteWebResource` |

### 3. Exporting contacts and leads to Dynamics

This is the core outbound flow: eMarketeer automations and the manual "share to Dynamics" feature create or update Leads and Contacts in your environment. Before creating anything, the integration looks up existing records by email, phone, or company to avoid duplicates. It links new Leads to a matching Contact or Account, can create the Account when a contact is shared with a new company, and lists your Dynamics users so an owner can be chosen for new records.

**Trigger:** user-initiated. Either someone manually shares a contact to Dynamics, or a contact reaches an export step in an automation your team built. Nothing is exported without such a step.

**Tables accessed:** contact, lead, account, systemuser, role.

**Privileges required:** contact Read/Create/Append; lead Read/Create/Write/Append; account Read/Create/Append To; systemuser Read/Append To; role Read.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Look up existing Contacts (by email, id, company, originating lead) | contact (+ account) | Read | `prvReadContact`, `prvReadAccount` |
| Look up existing Leads (by email, company, id) | lead | Read | `prvReadLead` |
| Create a Lead (optionally linked to owner / parent Contact / Account) | lead | Create | `prvCreateLead`, `prvAppendLead`, `prvAppendToUser`, `prvAppendToContact`, `prvAppendToAccount` |
| Update an existing Lead | lead | Update | `prvWriteLead` |
| Create a Contact (optionally linked to Account / owner) | contact | Create | `prvCreateContact`, `prvAppendContact`, `prvAppendToAccount`, `prvAppendToUser`, `prvAssignContact` |
| Search / read Accounts | account | Read | `prvReadAccount` |
| Create an Account (when sharing with a new company) | account | Create | `prvCreateAccount` |
| List users for the owner dropdown | systemuser, role | Read | `prvReadUser`, `prvReadRole` |

### 4. Logging marketing activities

eMarketeer automation steps write Tasks and Phone Calls onto the matching Lead or Contact, so your sales team sees the marketing history in Dynamics. When a step specifies an owner, the activity is created on behalf of that Dynamics user, so it appears with the right creator.

**Trigger:** user-initiated. Runs only when a contact reaches an activity step in an automation your team built.

**Tables accessed:** task, phone call, activity party, contact, lead, systemuser.

**Privileges required:** Activity Create/Append; contact and lead Read/Append To; systemuser Read/Append To; Act on Behalf of Another User.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Find the Lead/Contact to attach the activity to | contact, lead | Read | `prvReadContact`, `prvReadLead` |
| Create a Task on the record | task | Create | `prvCreateActivity`, `prvAppendActivity`, `prvAppendToLead` / `prvAppendToContact` |
| Create a Phone Call on the record | phonecall, activityparty | Create | same as Task, plus `prvAppendToUser` |
| Read the owner's Entra ID object id (for attribution) | systemuser | Read | `prvReadUser` |
| Create the activity as the chosen user | — | — | `prvActOnBehalfOfAnotherUser` |

### 5. Marketing lists

This works in two directions. eMarketeer can import the members of a Dynamics marketing list (static or dynamic) as eMarketeer contacts, including their company names, and automation steps can add the Leads and Contacts they created to an existing Dynamics marketing list. The integration never creates or deletes marketing lists in your environment.

**Trigger:** user-initiated. Imports are started by an eMarketeer user picking a list; adding members happens only through an automation step your team built.

**Tables accessed:** list, contact, lead, account.

**Privileges required:** list Read/Write/Append To; contact and lead Read/Append; account Read.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| List and read marketing lists | list | Read | `prvReadList` |
| Read static list members | list, contact, lead | Read | `prvReadList`, `prvReadContact`, `prvReadLead` |
| Read dynamic list members (runs the list's own query) | contact | Read | `prvReadContact` |
| Read member details and their companies | contact, account | Read | `prvReadContact`, `prvReadAccount` |
| Add members to a list (association) | list, contact, lead | Update | `prvWriteList`, `prvAppendToList`, `prvAppendContact` / `prvAppendLead` |

### 6. Consent sync

Keeps email consent aligned in both directions, using one field: `donotbulkemail`.

Dynamics → eMarketeer: the integration reads the Dataverse audit log for changes to that field and applies them to the matching eMarketeer contacts, so an opt-out made in Dynamics blocks marketing email in eMarketeer.

eMarketeer → Dynamics: when a contact unsubscribes in eMarketeer, the integration sets `donotbulkemail` on the matching Dynamics Contact. No other Contact field is ever modified by this flow.

**Trigger:** automatic. Runs as a recurring background sync. It only affects contacts that exist in both systems (matched by email or an established link) and never creates records on either side.

**Tables accessed:** contact, audit, attribute definitions (metadata).

**Privileges required:** contact Read/Write; View Audit History and View Audit Summary; auditing enabled on the Contact table.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Find the column number of `donotbulkemail` | metadata | Read | `prvReadEntity`, `prvReadAttribute` |
| Read audit entries for consent changes on Contacts | audit | Read | `prvReadRecordAuditHistory`, `prvReadAuditSummary` |
| Resolve the audited Contacts | contact | Read | `prvReadContact` |
| Write `donotbulkemail` on Contacts | contact | Update | `prvWriteContact` |

### 7. Subscription sync

Mirrors eMarketeer's subscription categories and each contact's subscription choices into the two custom tables the integration installed (`em_subscriptions`, `em_subscriptioncategories`), and reads changes made in Dynamics (via the subscriptions section on the Contact form) back into eMarketeer. All writes in this flow go to the integration's own custom tables; your Contacts are only read.

**Trigger:** automatic. Runs in the background when subscription data changes on either side (in Dynamics, via the webhooks installed at connect time). Like consent sync, it only applies to contacts that exist in both systems.

**Tables accessed:** em_subscriptions (custom), em_subscriptioncategories (custom), contact.

**Privileges required:** Read, Create, Write, Delete, Append, and Append To on the two custom tables; contact Read and Append To.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Read subscription categories | em_subscriptioncategories | Read | `prvReadem_subscriptioncategories` |
| Create / rename categories | em_subscriptioncategories | Create + Update | `prvCreateem_subscriptioncategories`, `prvWriteem_subscriptioncategories` |
| Remove categories deleted in eMarketeer | em_subscriptioncategories | Delete | `prvDeleteem_subscriptioncategories` |
| Read subscription states | em_subscriptions | Read | `prvReadem_subscriptions` |
| Save subscription states (linked to Contact + category) | em_subscriptions | Create + Update | `prvCreateem_subscriptions`, `prvWriteem_subscriptions`, `prvAppendem_subscriptions`, `prvAppendToContact`, `prvAppendToem_subscriptioncategories` |
| Remove stale subscription rows | em_subscriptions | Delete | `prvDeleteem_subscriptions` |
| Read Contacts (matching by email, initial sync) | contact | Read | `prvReadContact` |

### 8. Contact card and adding Dynamics records to eMarketeer

The contact-card panel installed on your Contact and Lead forms shows eMarketeer's marketing history for the record being viewed. From there (or automatically via the contact-created webhook), a Dynamics Contact or Lead can be added to eMarketeer: the integration reads the record and its parent Account and creates a matching contact in eMarketeer. This flow is read-only in your environment.

**Trigger:** user-initiated. A Dynamics user views a record in the panel or adds it to eMarketeer from there. When the contact-created webhook is enabled, newly created Dynamics Contacts are announced to eMarketeer automatically, but a record only enters eMarketeer's marketing database through the flows described here.

**Tables accessed:** contact, lead, account.

**Privileges required:** contact, lead, and account Read only.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Panel reads the contact/lead open record's email (runs in the viewing user's browser, under that user's own permissions) | — | Read | none for the application user |
| Read the Contact or Lead being added | contact, lead | Read | `prvReadContact`, `prvReadLead` |
| Read the parent Account (company name) | account | Read | `prvReadAccount` |

## Data exchanged

This section lists all data that passes between the two systems, for data-protection review. No information categories or personal data beyond what is listed here are exchanged. The integration transfers the same categories of personal data as the previously approved consent integration (standard business contact details, consent status, and subscription choices) and adds no new ones. It performs no enrichment, scoring, or inference: every value written to either system was entered by a user in one of the two systems.

### Dynamics 365 → eMarketeer

| Data | Fields | When |
|---|---|---|
| Contact / Lead business card details | first name, last name, email address, phone, mobile phone, job title, salutation, company name, record id, created date | Importing marketing list members; adding a record to eMarketeer from the contact card; matching before an export |
| Account (company) details | company name, address (street, city, state/province, postal code, country) | Shown when picking a company during export; imported as the contact's company name |
| Consent status | `donotbulkemail` flag and the audit timestamp of its change | Consent sync |
| Subscription choices | category and subscribed yes/no per contact (from the integration's own `em_subscriptions` table) | Subscription sync |
| Dynamics user directory entries | first name, last name, work email address, and (for the selected owner) the Entra ID object id | Populating the "record owner" dropdown in eMarketeer; attributing activities to the chosen user |

### eMarketeer → Dynamics 365

| Data | Fields | When |
|---|---|---|
| Contact details written to Leads/Contacts | first name, last name, email address, phone, mobile phone, job title, salutation, company name, address (street, city, state/province, postal code, country) | Exporting a contact or lead (use case 3) |
| New Account details | company name and, optionally, the contact's address | Sharing a contact with a new company |
| Marketing activity records | subject and description text (campaign/message names and outcomes as configured in the automation), dates, the owning user | Logging activities (use case 4) |
| Consent status | the `donotbulkemail` flag only | Consent sync, when a contact unsubscribes in eMarketeer |
| Subscription data | category names; per contact, a subscribed yes/no linked to the Contact record (the custom tables row key is derived from the contact's email address and category) | Subscription sync, written to the integration's own custom tables |

Data subjects are limited to the contacts and leads your team chooses to manage in both systems, plus the names and work emails of your own Dynamics users as described above. No special categories of personal data (Article 9 of the GDPR) are ever read or written by the integration itself. Free-text fields it transfers, such as activity descriptions, contain only what your team configures in eMarketeer.

## Complete API call reference

This table lists every Dataverse Web API call the integration makes. Calls marked *connect only* or *disconnect only* run only during use cases 1 and 2.

| HTTP call | Table | Access | Privilege required |
|---|---|---|---|
| `GET /contacts?$filter=emailaddress1 eq ...` | contact | Read | `prvReadContact` |
| `GET /contacts?$filter=contactid eq ...&$select=...` | contact | Read | `prvReadContact` |
| `GET /contacts?$filter=...&$expand=parentcustomerid_account` | contact, account | Read | `prvReadContact` + `prvReadAccount` |
| `GET /contacts?$filter=companyname eq ...` | contact | Read | `prvReadContact` |
| `GET /contacts?$filter=_originatingleadid_value eq ...` | contact | Read | `prvReadContact` |
| `GET /contacts?$top=1000&$orderby=...&$filter=...` | contact | Read | `prvReadContact` |
| `POST /contacts` | contact | Create | `prvCreateContact`; `prvAppendContact` + `prvAppendToAccount` / `prvAppendToUser` when linking Account / owner; `prvAssignContact` |
| `POST /contacts/Microsoft.Dynamics.CRM.UpdateMultiple` (field: `donotbulkemail`) | contact | Update | `prvWriteContact` |
| `GET /leads?$filter=emailaddress1 eq ...` | lead | Read | `prvReadLead` |
| `GET /leads?$filter=...` (company, active-lead filters) | lead | Read | `prvReadLead` |
| `GET /leads(id)` | lead | Read | `prvReadLead` |
| `POST /leads` | lead | Create | `prvCreateLead`; `prvAppendLead` + `prvAppendToUser` / `prvAppendToContact` / `prvAppendToAccount` when linking owner / Contact / Account |
| `PATCH /leads(id)` | lead | Update | `prvWriteLead` |
| `GET /accounts?$filter=accountid eq ...` | account | Read | `prvReadAccount` |
| `GET /accounts?$filter=...` (name search) | account | Read | `prvReadAccount` |
| `POST /accounts` | account | Create | `prvCreateAccount` |
| `GET /lists?$filter=...` | list | Read | `prvReadList` |
| `GET /lists(id)` | list | Read | `prvReadList` |
| `GET /lists(id)?$expand=listcontact_association / listlead_association` | list, contact, lead | Read | `prvReadList` + `prvReadContact` / `prvReadLead` |
| `GET /contacts?fetchXml=...` (runs a dynamic list's stored query) | contact | Read | `prvReadContact` |
| `POST /AddListMembersList` | list, contact, lead | Update (association) | `prvWriteList` + `prvAppendToList` + `prvAppendContact` / `prvAppendLead` |
| `POST /tasks` | task | Create | `prvCreateActivity` + `prvAppendActivity` + `prvAppendToLead` / `prvAppendToContact` |
| `POST /phonecalls` | phonecall, activityparty | Create | same as tasks + `prvAppendToUser` |
| `CallerObjectId` header on `POST /tasks` / `/phonecalls` | — | — | `prvActOnBehalfOfAnotherUser` |
| `GET /systemusers?$select=...&$filter=...` | systemuser | Read | `prvReadUser` |
| `GET /systemusers(id)?$select=azureactivedirectoryobjectid` | systemuser | Read | `prvReadUser` |
| `GET /privileges?$filter=...`; `GET /roles?$filter=...` | privilege, role | Read | `prvReadRole` (the privilege table has no dedicated read privilege) |
| `GET /audits?$select=...&$filter=objecttypecode eq 'contact' and ...` | audit | Read | `prvReadRecordAuditHistory` + `prvReadAuditSummary` |
| `GET /RetrieveAvailableLanguages()` | — | Read | none |
| `GET /EntityDefinitions(LogicalName='contact')/Attributes?$select=...` | metadata | Read | `prvReadEntity` + `prvReadAttribute` |
| `GET /em_subscriptioncategorieseses` | em_subscriptioncategories | Read | `prvReadem_subscriptioncategories` |
| `GET /em_subscriptionses?$filter=...` | em_subscriptions | Read | `prvReadem_subscriptions` |
| `POST /em_subscriptioncategorieseses/Microsoft.Dynamics.CRM.UpsertMultiple` | em_subscriptioncategories | Create + Update | `prvCreateem_subscriptioncategories` + `prvWriteem_subscriptioncategories` |
| `POST /em_subscriptionses/Microsoft.Dynamics.CRM.UpsertMultiple` | em_subscriptions | Create + Update | `prvCreateem_subscriptions` + `prvWriteem_subscriptions` + `prvAppendem_subscriptions`; `prvAppendToContact` + `prvAppendToem_subscriptioncategories` |
| `GET` + `DELETE /em_subscriptionses(id)` / `/em_subscriptioncategorieseses(id)` | em_subscriptions, em_subscriptioncategories | Delete | `prvDeleteem_subscriptions` + `prvDeleteem_subscriptioncategories` |
| `GET` / `POST /publishers` — *connect only* | publisher | Read + Create | `prvReadPublisher`, `prvCreatePublisher` |
| `GET` / `POST /EntityDefinitions` — *connect only* | metadata | Read + Create | `prvReadEntity` + `prvCreateEntity` + `prvCreateAttribute` |
| `GET` / `POST /EntityDefinitions(...)/Keys` — *connect only* | metadata | Read + Create | `prvReadEntityKey` + `prvCreateEntityKey` |
| `GET` / `POST /RelationshipDefinitions` — *connect only* | metadata | Read + Create | `prvReadRelationship` + `prvCreateRelationship` |
| `GET /EntityDefinitions`; `DELETE /EntityDefinitions(id)` — *disconnect only* | metadata | Read + Delete | `prvReadEntity` + `prvDeleteEntity` |
| `GET` / `POST /savedqueries` — *connect only* | savedquery | Read + Create | `prvReadCustomization` / `prvWriteCustomization` |
| `GET /systemforms?$filter=...`; `PATCH /systemforms(id)` — *connect only* | systemform | Read + Update | `prvReadSystemForm` / `prvWriteSystemForm` |
| `POST /PublishXml` — *connect only* | — | Execute | `prvPublishCustomization` |
| `GET /customcontrols` — *connect only* | customcontrol | Read | none dedicated (no `prvReadCustomControl` exists) |
| `GET` / `POST /serviceendpoints` — *connect only* | serviceendpoint | Read + Create | `prvReadServiceEndpoint` / `prvCreateServiceEndpoint` |
| `GET /sdkmessages`; `GET /sdkmessagefilters` — *connect only* | sdkmessage, sdkmessagefilter | Read | `prvReadSdkMessage` |
| `GET` / `POST /sdkmessageprocessingsteps` — *connect only* | sdkmessageprocessingstep | Read + Create | `prvReadSdkMessageProcessingStep` + `prvCreateSdkMessageProcessingStep` |
| `GET` + `DELETE /sdkmessageprocessingsteps(id)`; `GET` + `DELETE /serviceendpoints(id)` — *disconnect only* | sdkmessageprocessingstep, serviceendpoint | Read + Delete | `prvReadSdkMessageProcessingStep` + `prvDeleteSdkMessageProcessingStep`; `prvReadServiceEndpoint` + `prvDeleteServiceEndpoint` |
| `GET /webresourceset?$filter=...` — *connect/disconnect only* | webresource | Read | `prvReadWebResource` |
| `POST` / `PATCH /webresourceset(id)` — *connect only* | webresource | Create + Update | `prvCreateWebResource` / `prvWriteWebResource` |
| `DELETE /webresourceset(id)` — *disconnect only* | webresource | Delete | `prvDeleteWebResource` |
| `GET /WhoAmI()` — *connect only* | — | Read | none |
| `GET /api/data/v9.2/` (service document) — *connect only* | — | Read | none |
| `GET /EntityDefinitions(LogicalName='contact')?$select=IsAuditEnabled` — *connect only* | metadata | Read | `prvReadEntity` |

## Authentication endpoints

These are the identity-related calls the integration makes outside your Dataverse environment:

| Call | Endpoint | Purpose |
|---|---|---|
| Token request | `POST https://login.microsoftonline.com/{yourtenant}/oauth2/v2.0/token` with `grant_type=client_credentials` and `scope=https://<yourenvironment>/.default` | Obtains the application user's access token. No user context, no Microsoft Graph scopes. |
| Environment discovery | `GET https://globaldisco.crm.dynamics.com/api/discovery/v2.0/Instances`, using the connecting administrator's own token, during initial connection only | Finds the Dynamics environment to connect. |
