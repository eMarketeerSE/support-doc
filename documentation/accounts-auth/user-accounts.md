# User accounts

This article explains how accounts and users work in eMarketeer, including the available roles and what each one can do.

Understanding these concepts helps you decide who needs access and which role fits their work.

## Account types

eMarketeer uses two types of accounts:

- Account — your eMarketeer subscription, which holds all your contacts, emails, files, and other resources. Think of it as a house that holds your resources but is not an individual.
- User account — an individual who logs in to the account to work in the system. Think of this as a person who has the keys to the house.

> TODO: verify — the source called the first type "Tenant account." Per voice rules, "Account" is the correct term for the eMarketeer subscription.

## User privileges

### Administrator

Administrators have full access to all parts of the system, including:

- Account settings
- User management (inviting and managing users)

### Marketing User

Marketing Users have access to most features in the system, except:

- Account settings
- User management
- Sales team membership

This role is intended for users working with marketing content such as emails, pages, and forms.

### Sales User

Sales Users have access to the Sales Board and manage incoming leads. They are typically assigned to one or more Sales Teams, each receiving tailored lead assignments based on focus or responsibilities.

This role is designed for users involved in sales activities and lead follow-up.

### Developer

The Developer role is a specialization of the Marketing User role. Developers have access to the full HTML code in:

- Emails
- Apps
- Webpages
- JSON Editor in Forms

This role suits technically advanced users who need full control over the source code.

### CRM Web Panel

Users with this role can view eMarketeer panels directly within their integrated CRM system. This role is typically assigned to CRM users who need quick access to eMarketeer data within their workflow.

## Inviting new users

An administrator can invite new users to the account. When you invite someone, eMarketeer sends an invitation email to the address you provide. The user becomes active only after they accept the invitation and complete registration.

### Multiple accounts on a single user

If you invite someone who already has access to a different account, the new user keeps the same login and gains access to both accounts.

After logging in, a user with access to multiple accounts chooses which account to use for the session. To switch accounts, the user logs out and logs back in, choosing a different account.

## Related costs per user

Depending on your pay plan, creating a new user may incur a fee. The fee is stated on the screen when you invite the user.

If the user is already paid for by another account, the invited user is not charged to your account. This is because no new user is created — the existing user is only granted access to the additional account.

## Login security

All users log in to eMarketeer with their username (email) and password. eMarketeer also offers Multi-Factor Authentication (MFA) for an additional layer of security. MFA is optional per user, but an administrator can enforce it for all users in the account.

Read more about [Multi-Factor Authentication](https://support.emarketeer.com/documentation/multi-factor-authentication/).
