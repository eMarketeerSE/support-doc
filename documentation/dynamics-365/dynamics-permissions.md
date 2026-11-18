---
description: >-
  Every Dataverse permission the eMarketeer integration needs, with the
  recommended least-privilege security role and a full use-case breakdown.
---

# Dynamics - Required permissions

This article lists every permission the eMarketeer integration needs inside your Microsoft Dynamics 365 / Dataverse environment: which tables it touches, what kind of access it needs to each, and the exact security privileges behind that access. It is intended for Dynamics administrators and security reviewers who want to grant the integration a least-privilege security role instead of the System Administrator role.

## How the integration connects

eMarketeer accesses your environment through an application user using the standard Dataverse Web API (`api/data/v9.2`). Authentication is server-to-server OAuth (client credentials) against Microsoft Entra ID, scoped to your Dataverse environment URL. The application user's token request asks for one scope: `<your environment URL>/.default`. It asks for no Microsoft Graph scope.

Each time you connect, the administrator's browser and eMarketeer's backend each call the Dynamics global discovery service (`globaldisco.crm.dynamics.com`) once, with the administrator's own signed-in token, to find the environment. After that, only the application user is used.

The integration reads and writes records regardless of who owns them, so privileges must be granted with **Organization scope**. A narrower scope (own records only, or one business unit) would hide records owned by other users and break syncs and exports.

## What the integration does not do

- No feature of the integration deletes your Contacts, Leads, Accounts, activities, or marketing lists. The recommended role has no Delete privilege on these tables.
- The only field it ever changes on your Contacts outside of an explicit export is `donotbulkemail` (email consent), described in the [Consent sync](#6-consent-sync) use case.
- It creates no records in your environment except the ones described in the use cases below.

## All permissions at a glance

The table below is the complete set: the integration's security role needs these privileges. Entries marked *connect/disconnect only* are used only while installing, upgrading, or removing the integration, and you can [remove them after connecting](#remove-the-install-time-privileges-after-connecting-optional).

| Table / component | Access needed | Privileges |
|---|---|---|
| Contact (`contact`) | Read, Create, Write, Append, Append To | `prvReadContact`, `prvCreateContact`, `prvWriteContact`, `prvAppendContact`, `prvAppendToContact`, `prvAssignContact` (for setting record owners) |
| Lead (`lead`) | Read, Create, Write, Append, Append To | `prvReadLead`, `prvCreateLead`, `prvWriteLead`, `prvAppendLead`, `prvAppendToLead` |
| Account (`account`) | Read, Create, Append To, Assign | `prvReadAccount`, `prvCreateAccount`, `prvAppendToAccount`, `prvAssignAccount` (for setting record owners) |
| Marketing List (`list`) | Read, Write, Append To | `prvReadList`, `prvWriteList`, `prvAppendToList` |
| Activities (Task, Phone Call) | Create, Append, Assign | `prvCreateActivity`, `prvAppendActivity`, `prvAssignActivity` (for setting the activity owner when impersonation is not granted) |
| User (`systemuser`) | Read, Append To | `prvReadUser`, `prvAppendToUser` |
| User settings (`usersettings`) | Read | `prvReadUserSettings` (to read the time zone for activity due dates) |
| Security Role (`role`) | Read | `prvReadRole` |
| Auditing (`audit`) | Read audit log | `prvReadRecordAuditHistory`, `prvReadAuditSummary` (corresponds to the "View Audit History" and "View Audit Summary" UI checkboxes) |
| eMarketeer Subscriptions (`em_subscriptions`, custom) | Read, Create, Write, Delete, Append, Append To | `prvReadem_subscriptions`, `prvCreateem_subscriptions`, `prvWriteem_subscriptions`, `prvDeleteem_subscriptions`, `prvAppendem_subscriptions`, `prvAppendToem_subscriptions` |
| eMarketeer Subscription Categories (`em_subscriptioncategories`, custom) | Read, Create, Write, Delete, Append To | `prvReadem_subscriptioncategories`, `prvCreateem_subscriptioncategories`, `prvWriteem_subscriptioncategories`, `prvDeleteem_subscriptioncategories`, `prvAppendToem_subscriptioncategories` |
| Act on Behalf of Another User — *optional* | Execute | `prvActOnBehalfOfAnotherUser`. Leave it out unless you want activities to show the chosen user as creator. See [Impersonation](#impersonation). |
| Publisher (`publisher`) — *connect/disconnect only* | Read, Create | `prvReadPublisher`, `prvCreatePublisher` |
| Table definitions (metadata) | Read | `prvReadEntity`, `prvReadAttribute` (consent sync reads the Contact table definition on every run) |
| Table definitions (metadata) — *connect/disconnect only* | Create | `prvCreateEntity`, `prvCreateAttribute` |
| Alternate keys (metadata) — *connect/disconnect only* | Read, Create | `prvReadEntityKey`, `prvCreateEntityKey` |
| Table relationships (metadata) — *connect/disconnect only* | Read, Create | `prvReadRelationship`, `prvCreateRelationship` |
| System views (`savedqueries`) — *connect/disconnect only* | Read, Create | `prvReadCustomization`, `prvWriteCustomization` (Dataverse has no dedicated savedquery privilege) |
| Forms (`systemforms`) — *connect/disconnect only* | Read, Write | `prvReadSystemForm`, `prvWriteSystemForm` |
| Web resources (`webresourceset`) — *connect/disconnect only* | Read, Create, Write | `prvReadWebResource`, `prvCreateWebResource`, `prvWriteWebResource` |
| Webhook endpoints (`serviceendpoints`) — *connect/disconnect only* | Read, Create, Write, Delete | `prvReadServiceEndpoint`, `prvCreateServiceEndpoint`, `prvWriteServiceEndpoint` (to set the webhook key on reconnect), `prvDeleteServiceEndpoint` |
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
| Business Management tab, miscellaneous privileges | Act on Behalf of Another User (optional) |
| Customization tab: Entity, Field, Entity Key, Relationship, System Form, Web Resource, Customizations | The metadata, form, view, and web resource entries from the table above, plus Publish Customizations |
| Customization tab: Sdk Message, Sdk Message Processing Step, Service Endpoint; Business Management tab: Publisher | The webhook and publisher entries from the table above |
| Custom Entities tab: eMarketeer Subscriptions, eMarketeer Subscription Categories | The full sets from the table above |

**Ordering note:** the two eMarketeer custom tables (`em_subscriptions`, `em_subscriptioncategories`) only exist after the first connection, so their privileges can be added to the role only after use case 1 has run. The practical sequence is: create the role without the custom-table rows, connect, then add those privileges.

We advise against approximating this with built-in roles such as Salesperson, Marketing Professional, or System Customizer. They include broad rights (deleting records, sharing, bulk operations, unrestricted customization) that the integration never exercises, which defeats the purpose of moving away from System Administrator.

After assigning the role, connect in eMarketeer. The connection checks that the application user exists and can see the Contact, Account and User tables. It does not check each privilege. Dataverse names the missing privilege in the error whenever a call is denied, so any gap that surfaces later is straightforward to trace back to a specific role entry.

### Remove the install-time privileges after connecting (optional)

The entries marked *connect/disconnect only* are used only by use cases 1 and 2. They include the right to change the contact card panel. That panel is a web resource, and its script runs in the browser session of each Dynamics user who opens it. While the application user holds these privileges, the eMarketeer credentials can change that script.

If you want the smallest standing access, split the privileges into two roles:

1. Create the "eMarketeer Integration" role without the *connect/disconnect only* entries.
2. Create a second role, for example "eMarketeer Installer", with only those entries.
3. Assign both roles to the application user.
4. Connect the integration in eMarketeer.
5. Wait until the subscriptions section and the contact card panel show in Dynamics. The installation runs in the background after you connect.
6. Remove the "eMarketeer Installer" role from the application user.

Assign the installer role again before you reconnect, upgrade, or disconnect the integration. Day-to-day use (use cases 3 to 8) needs only the first role.

## Security controls

This section describes how the access is identified, protected, and audited, and how you revoke it.

### Identity and authorization

| Step | Identity | Authorization |
|---|---|---|
| Finding the environment, during connection only | Your administrator, signed in with their own Microsoft account | Their own Dynamics access |
| Every other call | The eMarketeer application user in your environment | The security role you assign to it, and nothing else, unless you grant the optional impersonation privilege |

- The administrator's sign-in token is valid only for the Dynamics discovery service. It cannot read data in your environment, and eMarketeer does not store it.
- The application user's token is scoped to your Dataverse environment URL only. It grants no access to Microsoft Graph, Exchange, SharePoint, or any other environment.

### Impersonation

`prvActOnBehalfOfAnotherUser` is optional. Grant it only if you need it.

- If you grant it, activities show the selected Dynamics user as "Created By". eMarketeer sends the `CallerObjectId` header only on `POST /tasks` and `POST /phonecalls`.
- Dataverse runs an impersonated call with the privileges of the impersonated user, not with the privileges of the eMarketeer role. While the role holds this privilege, the eMarketeer credentials can act as any user in the environment, including an administrator.
- If you leave it out, eMarketeer creates activities as the application user and sets the selected user as "Owner". The integration checks the role before each activity, so you can add or remove the privilege at any time without reconnecting.

### Credentials and tokens

You choose which app registration the application user belongs to:

| Option | App registration | Who holds the client secret | What a leaked secret exposes |
|---|---|---|---|
| Default | eMarketeer's multi-tenant app | eMarketeer | Every environment that consented to that app |
| Your own app registration | An app you register in your own Microsoft Entra tenant | You create it; eMarketeer stores a copy for your account only | Only what you granted that app |

To use your own app registration:

1. Register a single-tenant app in Microsoft Entra ID.
2. Create a client secret for it.
3. Create an application user for that app in your Dynamics environment, with the security role above.
4. Enter the app's client ID and client secret when you connect Dynamics 365 in eMarketeer.

You own the expiry and rotation of that secret. To rotate it, create a new secret, then reconnect in eMarketeer with it.

For both options:

- eMarketeer sends the secret only to Microsoft Entra ID, to request tokens. eMarketeer never sends it back to a browser.
- eMarketeer encrypts the stored copy of your client secret and the cached access tokens at rest with a dedicated AWS KMS key.
- Access tokens come from Microsoft Entra ID and expire after about one hour.
- Certificate-based credentials are not supported.

### Transport

- All calls go over HTTPS to `login.microsoftonline.com`, `globaldisco.crm.dynamics.com`, and your Dataverse environment URL.
- The integration validates the server certificate on every call.
- All calls to your environment come from a small, fixed set of IP addresses. Ask eMarketeer support for them if you want to restrict the application user by IP, for example with the Power Platform IP firewall.
- Your environment calls eMarketeer back only through the webhook registered in use case 1. Each environment gets its own webhook key.
- The integration service runs in the AWS region `eu-west-1` (Ireland).

### Audit

| Where | What you can see |
|---|---|
| Dataverse auditing | Every create and update made by the application user, or by the impersonated user if you grant impersonation, if auditing is on for the environment and the table |
| Microsoft Entra sign-in logs (service principal sign-ins) | Every token request made by the app registration |
| eMarketeer | Every Dataverse API call made after you connect, with endpoint and time and no query string. For a failed call, also the full URL, the request body and the error response. Available from eMarketeer support on request. |

eMarketeer keeps its call log and error log for 180 days and deletes them within a few days after that. Application logs, which can contain request URLs, error responses from Dataverse and contact email addresses, are kept for 30 days.

### Revoke access

You can stop all access at any time, without contacting eMarketeer. Do one of these:

- Disable the eMarketeer application user in the Power Platform admin center.
- Remove its security roles.
- Delete the eMarketeer enterprise application in Microsoft Entra ID.
- If you use your own app registration, delete its client secret.

If you disable the application user or remove its roles, Dataverse rejects the next call. If you delete the enterprise application or the client secret, eMarketeer cannot get a new token. The current token works until it expires, at most about 90 minutes later.

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
| Register the eMarketeer webhook endpoint, or set its key on reconnect | serviceendpoint | Read + Create + Write | `prvReadServiceEndpoint`, `prvCreateServiceEndpoint`, `prvWriteServiceEndpoint` |
| Register webhook steps on Contact create/update | sdkmessage, sdkmessageprocessingstep | Read + Create | `prvReadSdkMessage`, `prvReadSdkMessageProcessingStep`, `prvCreateSdkMessageProcessingStep` |
| Install the contact-card panel | webresource | Read + Create + Write | `prvReadWebResource`, `prvCreateWebResource`, `prvWriteWebResource` |

### 2. Disconnecting and uninstalling

Runs once, if you disconnect the integration. Removes the webhook registrations. The two custom tables, the contact card panel, the subscriptions view and the form section stay in your environment. Remove them yourself if you no longer want them.

**Trigger:** user-initiated. Runs only when your administrator disconnects the integration.

**Tables accessed:** service endpoints, SDK message registrations.

**Privileges required:** `prvReadSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep`; `prvReadServiceEndpoint`, `prvDeleteServiceEndpoint`. Uninstall-time only.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Remove the webhook registrations | sdkmessageprocessingstep, serviceendpoint | Read + Delete | `prvReadSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep`, `prvReadServiceEndpoint`, `prvDeleteServiceEndpoint` |

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
| Create an Account (when sharing with a new company, optionally linked to an owner) | account | Create, Assign | `prvCreateAccount`, `prvAppendToUser`, `prvAssignAccount` |
| List users for the owner dropdown | systemuser, role | Read | `prvReadUser`, `prvReadRole` |

### 4. Logging marketing activities

eMarketeer automation steps write Tasks and Phone Calls onto the matching Lead or Contact, so your sales team sees the marketing history in Dynamics. When a step specifies an owner, the activity is owned by that Dynamics user. If you grant the optional impersonation privilege, the activity also shows that user as creator.

**Trigger:** user-initiated. Runs only when a contact reaches an activity step in an automation your team built.

**Tables accessed:** task, phone call, activity party, contact, lead, systemuser.

**Privileges required:** Activity Create/Append; contact and lead Read/Append To; systemuser Read/Append To; Activity Assign, or the optional Act on Behalf of Another User.

| What happens | Table | Access | Privilege |
|---|---|---|---|
| Find the Lead/Contact to attach the activity to | contact, lead | Read | `prvReadContact`, `prvReadLead` |
| Create a Task on the record | task | Create | `prvCreateActivity`, `prvAppendActivity`, `prvAppendToLead` / `prvAppendToContact` |
| Create a Phone Call on the record | phonecall, activityparty | Create | same as Task, plus `prvAppendToUser` |
| Read the owner's Entra ID object id (for attribution) | systemuser | Read | `prvReadUser` |
| Read the application user's time zone, to set due dates | usersettings, timezonedefinition | Read | `prvReadUserSettings` |
| Check whether impersonation is granted | systemuser | Read | `prvReadUser`, `prvReadRole` |
| Without impersonation: set the chosen user as owner | task, phonecall | Assign | `prvAssignActivity` |
| With impersonation: create the activity as the chosen user | — | — | `prvActOnBehalfOfAnotherUser` (optional) |

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

This table lists the Dataverse Web API calls the integration makes. Calls marked *connect only* or *disconnect only* run only during use cases 1 and 2.

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
| `POST /accounts` | account | Create, Assign | `prvCreateAccount`; `prvAppendToUser` and `prvAssignAccount` when setting `ownerid` |
| `GET /lists?$filter=...` | list | Read | `prvReadList` |
| `GET /lists(id)` | list | Read | `prvReadList` |
| `GET /lists(id)?$expand=listcontact_association / listlead_association` | list, contact, lead | Read | `prvReadList` + `prvReadContact` / `prvReadLead` |
| `GET /contacts?fetchXml=...` (runs a dynamic list's stored query) | contact | Read | `prvReadContact` |
| `GET /leads?fetchXml=...` (runs a dynamic lead list's stored query) | lead | Read | `prvReadLead` |
| `POST /AddListMembersList` | list, contact, lead | Update (association) | `prvWriteList` + `prvAppendToList` + `prvAppendContact` / `prvAppendLead` |
| `POST /tasks` | task | Create | `prvCreateActivity` + `prvAppendActivity` + `prvAppendToLead` / `prvAppendToContact` |
| `POST /phonecalls` | phonecall, activityparty | Create | same as tasks + `prvAppendToUser` |
| `GET /WhoAmI()`; `GET /systemusers(id)/Microsoft.Dynamics.CRM.RetrieveUserPrivilegeByPrivilegeName(…)` | systemuser | Read | `prvReadUser`, `prvReadRole` |
| `CallerObjectId` header on `POST /tasks` / `/phonecalls`, only if granted | — | — | `prvActOnBehalfOfAnotherUser` (optional) |
| `GET /systemusers?$select=...&$filter=...` | systemuser | Read | `prvReadUser` |
| `GET /systemusers(id)?$select=azureactivedirectoryobjectid` | systemuser | Read | `prvReadUser` |
| `GET /usersettingscollection(id)?$select=timezonecode` | usersettings | Read | `prvReadUserSettings` |
| `GET /timezonedefinitions?$filter=...` | timezonedefinition | Read | none |
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
| `GET` / `POST /savedqueries` — *connect only* | savedquery | Read + Create | `prvReadCustomization` / `prvWriteCustomization` |
| `GET /systemforms?$filter=...`; `PATCH /systemforms(id)` — *connect only* | systemform | Read + Update | `prvReadSystemForm` / `prvWriteSystemForm` |
| `POST /PublishXml` — *connect only* | — | Execute | `prvPublishCustomization` |
| `GET /customcontrols` — *connect only* | customcontrol | Read | none dedicated (no `prvReadCustomControl` exists) |
| `GET` / `POST /serviceendpoints`; `PATCH /serviceendpoints(id)` — *connect only* | serviceendpoint | Read + Create + Write | `prvReadServiceEndpoint` / `prvCreateServiceEndpoint` / `prvWriteServiceEndpoint` |
| `GET /sdkmessages`; `GET /sdkmessagefilters` — *connect only* | sdkmessage, sdkmessagefilter | Read | `prvReadSdkMessage` |
| `GET` / `POST /sdkmessageprocessingsteps` — *connect only* | sdkmessageprocessingstep | Read + Create | `prvReadSdkMessageProcessingStep` + `prvCreateSdkMessageProcessingStep` |
| `GET` + `DELETE /sdkmessageprocessingsteps(id)`; `GET` + `DELETE /serviceendpoints(id)` — *disconnect only* | sdkmessageprocessingstep, serviceendpoint | Read + Delete | `prvReadSdkMessageProcessingStep` + `prvDeleteSdkMessageProcessingStep`; `prvReadServiceEndpoint` + `prvDeleteServiceEndpoint` |
| `GET /webresourceset?$filter=...` — *connect only* | webresource | Read | `prvReadWebResource` |
| `POST` / `PATCH /webresourceset(id)` — *connect only* | webresource | Create + Update | `prvCreateWebResource` / `prvWriteWebResource` |
| `GET /WhoAmI()` — *connect only* | — | Read | none |
| `GET /api/data/v9.2/` (service document) — *connect only* | — | Read | none |
| `GET /EntityDefinitions(LogicalName='contact')?$select=IsAuditEnabled` — *connect only* | metadata | Read | `prvReadEntity` |

## Authentication endpoints

These are the identity-related calls the integration makes outside your Dataverse environment:

| Call | Endpoint | Purpose |
|---|---|---|
| Token request | `POST https://login.microsoftonline.com/{yourtenant}/oauth2/v2.0/token` with `grant_type=client_credentials` and `scope=https://<yourenvironment>/.default` | Obtains the application user's access token. No user context, no Microsoft Graph scopes. |
| Environment discovery | `GET https://globaldisco.crm.dynamics.com/api/discovery/v2.0/Instances`, using the connecting administrator's own token, during initial connection only | Finds the Dynamics environment to connect. |
