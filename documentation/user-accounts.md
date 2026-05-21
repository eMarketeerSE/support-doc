# User accounts

## Account types

There are two types of accounts in eMarketeer:

-   Tenant account – this is your eMarketeer service which holds all your contacts, emails, files and other resources. Think of this as a “house”. It holds your resources, but is not an individual.
-   User account – User accounts are individuals that log in to the tenant to work in the system. Think of this as an individual who has the keys to access the house.

## User privileges

### Administrator

Administrators have full access to all parts of the system, including:

-   Account settings
-   User management (inviting and managing users)

### Marketing User

Marketing Users have access to most features in the system, except:

-   Account settings
-   User management
-   Sales team membership

This role is intended for users working with marketing content such as emails, pages, and forms.

### Sales User

Sales Users have access to the Sales Board and can manage incoming Leads. They are typically assigned to one or more Sales Teams, each receiving tailored lead assignments based on their focus or responsibilities.

This role is designed for users involved in sales activities and lead follow-up.

### Developer

The Developer role is a specialization of the Marketing User role. Developers have access to the full HTML code in:

-   Emails
-   Apps
-   Webpages
-   JSON Editor in Forms

This role is ideal for technically advanced users who need full control over the source code.

### CRM Web Panel

Users with this role can view eMarketeer panels directly within their integrated CRM system. This role is typically assigned to CRM users who need quick access to eMarketeer data within their workflow.

## Inviting new users

If a user has administrator privileges, he/she can invite new users to the tenant. When a new user is invited, an invitation email is sent to the given email address. If the recipient accepts the invitation and creates the user account, it is given access to the tenant account which invited him/her.  
Only after completing the registration of the new user it is considered “created”.

**Multiple tenants on a single user**

If a user is invited, that already has access to a different tenant, the new user will have access to multiple accounts using the same login.  
After logging in, a user with multiple tenant access will get the option to choose which tenant to log in to in this session.  
To change tenant, the user will have to log out and log in again choosing a different tenant.

## Related costs per user

Depending on payplan, a new created user may invoke a fee per new user created. This is stated on the screen when inviting the user.  
**Note!** If the user is already paid for by another tenant, the invited user will not be charged the new tenant.  
This is because a new user is not created, it would then only be given access to the new tenant.

## Login security

All users log in to eMarketeer with their username (email) and password. Additionally eMarketeer offers Multi Factor Authentication, which adds an additional layer of security. MFA is optional per user, but can also be enforced on all users in the tenant account by an admin.  
Read more about [Multi Factor Authentication](https://support.emarketeer.com/documentation/multi-factor-authentication/).
