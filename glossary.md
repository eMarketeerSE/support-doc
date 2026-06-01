# Glossary

Terms used throughout the eMarketeer documentation, with definitions specific to how eMarketeer uses them.

<!--
FORMATTING GUIDE FOR THIS GLOSSARY
───────────────────────────────────
Structure per letter group:
  ## A              ← H2 letter heading — shows up in "On this page" widget
                      Add one per starting letter. Skip letters with no entries.

  <details>
  <summary>Term name</summary>

  Definition here. 1–3 sentences, present tense, active voice.

  </details>

All terms within a letter group must be in strict alphabetical order.

To add a new term:
  1. Find the correct letter group in this file and sv/glossary.md.
     Add a new ## heading if the letter does not yet exist.
  2. Insert the term in alphabetical order within that group.
  3. Use this template:

     <details>
     <summary>Term name</summary>

     Definition goes here.

     </details>

  4. Mirror the entry in sv/glossary.md with a Swedish definition.
     Use the Swedish term as the summary title where a Swedish equivalent
     exists (see sv/CLAUDE.md glossary table). Keep the English title for
     UI labels, product names, and technical acronyms.
-->

## A

<details>
<summary>Account</summary>

The user's eMarketeer subscription. "Account" refers to the top-level organization that holds all contacts, campaigns, and settings. Other tools may call this a workspace, organization, or tenant.

</details>

<details>
<summary>Adapter</summary>

In the Signals API, the name of the signal source. The adapter field identifies which system sent the signal, for example "Sleeknote" or "Salesforce". It appears on the contact timeline alongside the signal category and lets you filter engagements by source.

</details>

## B

<details>
<summary>Bounce</summary>

An email that could not be delivered to the recipient's address. Bounces are split into hard bounces (permanent failures) and soft bounces (temporary failures). See also: Hard bounce, Soft bounce.

</details>

## C

<details>
<summary>Campaign</summary>

A container in eMarketeer that groups related email sends, SMS, forms, and webpages. A campaign is not a single send — it is the organizing unit that holds components and tracks results across all of them.

</details>

<details>
<summary>Campaign Contacts</summary>

The tab on a campaign that lists all contacts who have interacted with that campaign. A contact appears here when they receive an email or SMS, submit a form, or visit a webpage within the campaign, or are imported directly. Use this tab to review activity or remove test contacts.

</details>

<details>
<summary>Category (Signals)</summary>

In the Signals API, a field that describes the type of engagement being recorded. Examples include "Newsletter signup" and "Sale closed". The category appears on the contact timeline alongside the adapter name.

</details>

<details>
<summary>Component</summary>

An individual email, SMS, form, or webpage inside a campaign. Each component has its own settings, send configuration, and report. The term is used throughout the eMarketeer interface to refer to these individual pieces within a campaign.

</details>

<details>
<summary>Consent</summary>

A contact's explicit agreement to receive communication from you. eMarketeer stores a consent record per contact, including the consent text shown and the timestamp. Required under GDPR for marketing communication.

</details>

<details>
<summary>Contact</summary>

A person stored in eMarketeer's database. eMarketeer uses "contact" consistently where other tools may say subscriber, lead, recipient, or user.

</details>

<details>
<summary>Contact field</summary>

A data attribute on a contact record, such as first name, email address, or a custom field you define. Contact fields are used in personalization, filtering, and segmentation.

</details>

<details>
<summary>Contact timeline</summary>

The chronological record of a contact's interactions, visible on the contact card. The timeline shows email opens, clicks, form submissions, web visits, and custom signals, each as a timestamped engagement entry.

</details>

## D

<details>
<summary>DCL</summary>

Dynamic Content Language. eMarketeer's templating language for adding conditional logic and dynamic content to emails and forms. DCL expressions are written inside code blocks in the email editor.

</details>

<details>
<summary>Delivery</summary>

An email being accepted by the recipient's mail server. A delivered email is not necessarily opened or seen — delivery confirms only that the server did not bounce it.

</details>

<details>
<summary>DKIM</summary>

DomainKeys Identified Mail. An email authentication standard that attaches a digital signature to outgoing messages. eMarketeer signs outbound emails with DKIM to help receiving servers verify the messages are from your domain.

</details>

<details>
<summary>DMARC</summary>

Domain-based Message Authentication, Reporting and Conformance. A policy that tells receiving mail servers what to do when SPF or DKIM checks fail. DMARC works alongside SPF and DKIM to protect your domain from spoofing.

</details>

## E

<details>
<summary>Engagement</summary>

A recorded interaction between a contact and a piece of content. Engagements appear on the contact timeline and include opens, clicks, form submissions, web visits, and custom signals. In eMarketeer, the term refers specifically to these timeline records.

</details>

<details>
<summary>Event data</summary>

The structured payload sent with a custom signal via the Signals API. Event data can include any information about the event, such as product details or CRM values. It is stored on the engagement record and visible on the contact timeline.

</details>

## F

<details>
<summary>Feedback loop</summary>

A mechanism where email clients such as Outlook or Yahoo forward spam complaints back to the sending platform. eMarketeer processes feedback loop reports to suppress contacts who mark messages as spam.

</details>

<details>
<summary>Filter</summary>

A saved set of contact criteria used to segment contacts for reporting or sending. Filters are dynamic — they re-evaluate each time they are used and always reflect the current state of your contacts.

</details>

<details>
<summary>Form</summary>

A contact data capture page built with eMarketeer's form editor. A form can collect new contacts, update existing contact fields, and record consent. Forms can be embedded on a website or linked to from an email.

</details>

## H

<details>
<summary>Hard bounce</summary>

A permanent email delivery failure, typically because the email address does not exist or the domain is invalid. eMarketeer marks contacts with hard bounces to prevent future sends to those addresses.

</details>

## J

<details>
<summary>Journey</summary>

eMarketeer's term for an automated sequence that sends messages or performs actions based on triggers and conditions. Journeys process contacts continuously as they meet the entry criteria. Do not confuse with Campaign — a Journey is an automated workflow, not a container for sends.

</details>

## L

<details>
<summary>Lead</summary>

A contact that has met the qualification criteria you define. Lead qualification is not limited to lead scoring — any contact filter criteria can be used. Contacts that qualify appear on the Lead Board via a Lead Stream.

</details>

<details>
<summary>Lead Board</summary>

The interface where qualified leads are displayed and managed. Leads appear on the Lead Board when they meet the criteria of a Lead Stream. Sales teams use the Lead Board to follow up with high-scoring contacts.

</details>

<details>
<summary>Lead Score</summary>

A numeric value assigned to a contact based on their profile data and behavior. Lead scores are calculated by Score Sets and their Score Rules. A higher score typically indicates greater purchase intent or profile fit.

</details>

<details>
<summary>Lead Stream</summary>

An automated rule set that monitors contacts and delivers qualifying ones to the Lead Board. Contacts can also be added to a Lead Stream directly from a Journey using the Create Lead step.

</details>

<details>
<summary>Legal basis</summary>

The GDPR-defined reason for processing a contact's personal data. eMarketeer stores a legal basis per contact and per data type. Common legal bases include consent and legitimate interest.

</details>

<details>
<summary>Local storage</summary>

Browser-based storage used by the eMarketeer Web Tracker to recognize returning visitors across sessions. eMarketeer uses local storage rather than cookies for tracking, which affects how tracking is disclosed in cookie policies.

</details>

## M

<details>
<summary>MQL</summary>

Marketing Qualified Lead. An industry-standard term for a contact that marketing has evaluated as ready to hand off to sales. In eMarketeer, a contact typically becomes an MQL when they reach a lead score threshold and appear on the Lead Board.

</details>

## O

<details>
<summary>Open</summary>

A recorded instance of a contact loading an email. Opens are tracked via a 1×1 pixel image embedded in the email and registered when the recipient's email client loads images. Pre-fetching or image-blocking by some email clients can affect open tracking accuracy.

</details>

## P

<details>
<summary>Personal data</summary>

Under GDPR, any information that can be used to identify a natural person. In eMarketeer, personal data includes contact fields such as name, email address, phone number, and IP address. You are responsible for handling personal data in compliance with applicable law.

</details>

<details>
<summary>Preheader</summary>

The short text that appears after the subject line in many email clients and mobile inbox previews. Also called preview text. If no preheader is set, some clients display the first visible text in the email body instead.

</details>

<details>
<summary>Processor</summary>

Under GDPR, an organization that processes personal data on behalf of a data controller. eMarketeer acts as a data processor for its customers, who are the data controllers.

</details>

## R

<details>
<summary>Recipient Source</summary>

The option you select when addressing an email or SMS send. Common options include a contact filter, a list, a specific segment, or "All contacts in this campaign." The recipient source determines which contacts receive the send.

</details>

## S

<details>
<summary>Score rule</summary>

A single criterion within a Score Set that adds or subtracts points from a contact's lead score. Each rule targets a specific behavior or profile attribute, such as "email opened: +5 points."

</details>

<details>
<summary>Score set</summary>

A container that groups related Score Rules and produces a single lead score value for a contact. A contact can have scores from multiple Score Sets. The Score Set defines what is being measured and the Score Rules define how points are earned.

</details>

<details>
<summary>Sender ID</summary>

The name or number shown as the sender of an SMS message. An alphanumeric Sender ID displays a text name such as your company name; a numeric Sender ID is a phone number. Sender ID support and character limits vary by country.

</details>

<details>
<summary>Signals</summary>

eMarketeer's engagement event system. A signal is a structured interaction event pushed to a contact's timeline via the Signals API, representing activity that occurred in an external system. Signals can carry custom event data and trigger Journeys. See also: Adapter, Category (Signals).

</details>

<details>
<summary>Soft bounce</summary>

A temporary email delivery failure, typically because the recipient's mailbox is full or the mail server is temporarily unavailable. eMarketeer tracks soft bounce counts and suppresses contacts that soft-bounce repeatedly.

</details>

<details>
<summary>Subscription category</summary>

A grouping of consent or communication preferences in eMarketeer. Contacts can be opted in or out of individual subscription categories, allowing granular consent management across different content types such as newsletters, product updates, and event invitations.

</details>

## T

<details>
<summary>Tag</summary>

A label applied to a contact or campaign for segmentation and organization purposes. Tags are free-form and can be added or removed at any time. Multiple tags can be applied to the same contact or campaign.

</details>

<details>
<summary>Template</summary>

A saved component design that can be reused as the starting point for new sends or forms. Templates store layout, styles, and placeholder content. Changes to a template do not affect components that are already using it.

</details>

## U

<details>
<summary>UTM parameter</summary>

A query string tag appended to a URL to track traffic in analytics tools such as Google Analytics. eMarketeer can automatically append UTM parameters to email links. Standard parameters are utm_source, utm_medium, utm_campaign, utm_content, and utm_term.

</details>

## W

<details>
<summary>Web Tracker</summary>

A JavaScript snippet provided by eMarketeer for installation on your website. Once installed, it records page visits as engagement events on identified contacts' timelines and supports retrospective tracking for visitors identified later.

</details>

<details>
<summary>Webhook</summary>

An HTTP callback that sends data from one system to another when an event occurs. You can use a webhook to push contact data or engagement events into eMarketeer — for example from a form tool or CRM. See the Zapier integration guide for a worked example.

</details>
