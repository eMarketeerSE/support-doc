# Cloud Security Measures

## eMarketeer Cloud Security Measures

eMarketeer AB (“eMarketeer”) is a leading provider of SaaS (Software as a Service) solutions in the field of e-marketing. Our services help automate distribution of information, responses, and follow-up processes to enhance customer communication and service.

This document outlines the current security measures in place to safeguard all data within our cloud environment. As part of our Risk Management model, we continuously monitor risks and apply appropriate controls to ensure strong security.

### Data Storage

All data in eMarketeer is managed under an ISO 27001 and ISO 27018 certified Information Security Management System (ISMS). Security incidents are handled according to well-defined procedures. External consultants regularly evaluate and test our security controls. We partner with AWS Europe for data storage and processing. For further details, visit [AWS Compliance](https://aws.amazon.com/compliance/programs/).

### Personnel Security

Access to eMarketeer’s premises is restricted by a control system and monitored via video surveillance. Personnel such as system administrators and developers undergo qualification checks and training. All staff and contractors sign NDAs as part of their engagement.

### Physical and Environmental Security

Our data environments are safeguarded against physical threats such as fire, water, and dust. Access is strictly controlled to authorized individuals. AWS’s data center controls are documented [here](https://aws.amazon.com/compliance/data-center/controls/).

### Network Management

All networks are secured with redundant firewalls. Inter-site communications are encrypted via VPNs. Firewall rules follow strict change management procedures.

### Operational Procedures and Responsibilities

Users are notified at least 24 hours in advance about planned outages. System status updates are posted on the login screen and [status page](http://status.emarketeer.com/). System performance is continuously monitored, and updates are managed to minimize impact. Critical patches are applied immediately.

### Malware Protection

Antivirus tools are installed on all servers and internal machines. The system is scanned daily for vulnerabilities and is continuously updated.

### Encryption

All communications use SSL for secure data transfer. We rely on modern cryptographic protocols including SSL v3/TLS and IPSEC/AES256/SHA1-HMAC to secure all communications and data storage.

### Access Control

Access is based on user roles and responsibilities. Unique user IDs and passwords are enforced, with two-factor authentication required for critical systems. HTTPS and secure credential handling are used throughout the platform.

### Backup

All data has 30 days of point-in-time backup availability, with monthly snapshots retained for 12 months. All backups remain encrypted and within AWS infrastructure.

### Business Continuity

eMarketeer maintains a disaster recovery plan and uses redundancy to ensure high availability. Our incident and recovery procedures are designed to handle system failures effectively.

### Access to Cloud Services and Personal Information

Unauthorized access attempts are blocked automatically. SSL and user authentication ensure only authorized users access customer data. Users can view and update personal data after logging in.

### Access Management

Access rights are managed by customers, who assign user roles. Authentication is managed via username and password. Customers are responsible for enforcing internal password policies.

### Operating System Access Control

Only authorized personnel can perform OS-level operations. Patches are applied post-validation in test environments.

### Audit Trail and Systems Access

All access is logged and backed up daily. Only authorized personnel can manage logs or access-level permissions. Logs include usernames and source IP addresses.

### Secure Development

Security is embedded in every development phase. Code is tested manually and automatically. Development follows agile methodologies with mandatory code and security reviews. Penetration tests are regularly performed by Watchcom AS, our independent security advisor.

### Contact

For questions or comments, please contact our Data Protection Officer at [privacy@emarketeer.com](mailto:privacy@emarketeer.com).
