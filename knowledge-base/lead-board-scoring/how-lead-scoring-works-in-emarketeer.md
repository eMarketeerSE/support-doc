---
description: >-
  How to set up lead score rules step by step, where to view each contact's
  score, and how to filter contacts by score.
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: false
  actions:
    visible: true
---

# How lead scoring works in eMarketeer and tutorial

Lead scoring shows how sales-ready your contacts are by awarding points based on persona fit and engagement.

In this article, you learn how to set up lead score rules step by step, where to see each contact's lead score, and how to filter contacts by their score.

## Introduction: what is lead scoring?

With lead scoring, you see how sales-ready your contacts are and identify marketing qualified leads (MQLs). You award points based on how well a contact fits your buyer persona and how engaged they are with your marketing. You decide which criteria matter and set up score rules around them. The higher the score, the more sales-ready the contact, and the more confidently you can hand them to sales.

With lead scoring you can:

* Set up rules based on marketing engagement, contact card fields, and contact lists.
* See each contact's lead score on every contact list and on the contact card.
* Filter contacts by score — for example, all contacts above 50.
* Export contacts as a file and hand them off to sales.

## Key terminology

* **Lead score:** the number of points a contact has.
* **Score rules:** the criteria a contact must fulfill to gain or lose points.
* **Score set:** a container for one or more score rules. Use score sets to group rules — for example, one set for engagement rules and one for buyer persona criteria. If you sell more than one product, you can use a score set per product.
* **Explicit scoring:** rules based on persona attributes, such as demographics or company profile.
* **Implicit scoring:** rules based on behavior, such as clicks.

## How to use lead scoring in eMarketeer

Before you head into eMarketeer, decide on your lead scoring model. eMarketeer ships with some default score rules to give you a head start, but no model fits every business. Tailor the rules to your sales process, and build the model together with your sales team.

[Guide: how to build a lead scoring model and common lead scoring mistakes](how-to-set-up-your-lead-scoring-model-and-lead-scoring-mistakes.md)

### You can score on the following in eMarketeer

Marketing engagement:

* Any engagement
* Email — opened or clicked a link
* Form — visited, submitted, or answered in a specific way
* Landing page — visited or clicked a link
* SMS — clicked
* Web Tracker — visits. To score web visits, [install the web tracker script on your website](../../documentation/web-tracker/installing-the-web-tracker-script-on-your-website.md).

Information on the contact card:

* Any field on the contact card. You can score on whether the field has any value or matches a specific value — for example, job title is set or job title equals CEO.

Contact lists:

* Whether the contact is in a specific contact list.

## How to set up score rules in eMarketeer

### Set up score rules step by step

{% stepper %}
{% step %}
### Open lead scoring

Click the settings icon at the top right, choose "Account Settings", and then "Lead Scoring" in the left-hand menu. This view shows all your score sets and their active status.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-lead-scoring-score-sets.png" alt="Lead Scoring in Account Settings, listing score sets and their status."></div>
{% endstep %}

{% step %}
### Add a score set

To add your own rules, click "Add Score Set." Name the score set after the kind of rules it contains — for example one set per product, or a set for engagement rules. You can also add an optional description.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-new-score-set-name.png" alt="New Score Set page with name and description filled in."></div>
{% endstep %}

{% step %}
### Add a rule

Click "Add New Rule" and give the rule a clear name in the Rule Name field.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-new-score-rule-name.png" alt="New Score Rule dialog with a rule name and the list of condition categories."></div>
{% endstep %}

{% step %}
### Build the rule criteria

Rules are built the same way as filters in eMarketeer. Under "Add condition", choose a category — for example engagement, contact fields, or contact list membership.

For a webinar registration, choose Engagement and set Engagement type to Form.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-score-rule-engagement-types.png" alt="Engagement type drop-down with Form, E-mail, SMS, Landing Page and other types."></div>

Under Selection, pick the specific form, and set Condition to Submitted.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-score-rule-form-submitted.png" alt="Add condition dialog for a submitted webinar form."></div>

Next, consider occurrence — how many times the contact must do the action to get the points: at least, at most, or exactly a number of times. Then consider time frame — for example, only the last 30 days. Click "Add condition."

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-score-rule-occurrence.png" alt="Occurrence options At least, At most and Exactly."></div> <div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-score-rule-time-frame.png" alt="Time frame options Any time, Last X days and Between."></div>

To narrow a rule further, add another condition. For example, the contact signed up for the webinar AND visited a landing page three times. Choose a category again and repeat the steps for the second condition. The conditions are combined with AND. Click the AND chip to change it to OR.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-score-rule-combine-conditions.png" alt="Score rule with two conditions combined with AND."></div>
{% endstep %}

{% step %}
### Apply the rule

Click "Apply."
{% endstep %}

{% step %}
### Set the point value

Next to the rule, set how many points the rule is worth. Choose "Remove" instead of "Add" to remove points. Use negative points for behavior that is unlikely to lead to a sale — for example, "student" as job title, a visit to your careers page, or a country you cannot ship to.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-score-rule-points.png" alt="Score rules with Add or Remove and a point value."></div>
{% endstep %}

{% step %}
### Activate the score set

When the score set has all the rules you want, switch it to Active and click "Save Changes." Scores are calculated for each contact. After adding or editing a rule, there can be a short delay before scores update — usually a few minutes, depending on database size.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-new-score-set-activate.png" alt="New Score Set switched to Active with the Save Changes button."></div>
{% endstep %}
{% endstepper %}

### See each contact's lead score and score breakdown

Contacts are scored when they fulfill any of your rules. You see the score on every contact list and on the contact card. On the contact card, the "Lead" tab shows how the contact earned their points. The "Lead score over time" graph shows the score over time. Below the graph, a breakdown lists every fulfilled rule with its points and score set.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-contact-card-lead-score.png" alt="The Lead tab on a contact card, showing the lead score over time and the rules the contact fulfilled with their points."></div>

### Filter out your MQLs and hand them to sales

To find contacts that reached a specific score — say 80 or higher — use filters. Go to Contacts, click "Filter", and choose "Score" under Add condition. Set the condition to "Greater Than" and enter your threshold, for example 80. You can then list contacts above or below your sales threshold.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-filter-contacts-by-score.png" alt="Filter contacts dialog with a Score condition set to Greater Than 80."></div>

When you select contacts, the "Export" and "Bulk actions" buttons appear at the top of the list. Use bulk actions to update the selection — for example, add the contacts to a list. Use "Export" to download the contacts as a file ("Export as file") or send them to a selection or project in SuperOffice ("Export to CRM"). For SuperOffice export, the contacts must already be known in SuperOffice.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/how-lead-scoring-works-in-emarketeer-contacts-selection-export-bulk-actions.png" alt="Export and Bulk actions buttons above a contact list with three contacts selected."></div>
