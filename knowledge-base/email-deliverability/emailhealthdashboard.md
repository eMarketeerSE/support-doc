---
description: >-
  An actionable view of your email deliverability and sender reputation, so you
  can catch problems before they affect inbox placement.
---

# Email Health Dashboard

High-level KPIs, trend charts, and detailed tables let you spot where issues occur and drill down to the exact domains or accounts that need attention.

## What you can do with the Email Health Dashboard

* Protect your sender reputation by monitoring bounces, complaints, and delivery rates.
* Detect deliverability risks early by spotting negative trends before they turn into blocks or deferrals.
* Track performance over time, not just per sendout.
* Drill down by receiving domain or sending account to find the root cause of issues.

## Date range

All data on the dashboard is calculated from the selected date range.

Click the date range button at the top right of the Email Health tab and choose one of:

* A predefined period — Last 7 days, Last 30 days, Last 90 days, Since yesterday, This week, This month, or Last month.
* Custom — pick a start and end date manually. To view a single day, set the same start and end date.

The selected range applies to the overview cards, the time series charts, and the Domain and Account tables.

## Overview cards

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/emailhealthdashboard-email-health-overview-cards.png" alt="The Sending Status bar and six overview cards showing send volume, delivery rate, open rate, click rate, complaints and bounces"></div>

The overview cards give you a quick snapshot of your most important email health metrics:

* Total send volume — total number of emails sent.
* Delivery rate — delivered emails as a percentage of total sent.
* Open rate — opens as a percentage of delivered emails.
* Click Rate — clicks as a percentage of delivered emails.
* Complaints — spam complaints as a percentage of delivered emails.
* Bounces — bounces as a percentage of total sent.

Each card also shows the change compared to the previous date range, so you can quickly spot improvements or negative trends.

## Metrics charts

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/emailhealthdashboard-email-health-metrics-charts.png" alt="The Metrics card with Volume and Rate charts and the Select Metrics checklist open"></div>

The Metrics section visualizes how your email health develops over time. Two time series charts are shown:

* Volume — sent, delivered, opens, clicks, complaints, and bounces.
* Rate — percentage-based metrics such as delivery, open, click, bounce, and complaint rates.

### Interacting with the charts

* Hover over any date to see exact values for that day.
* Click Select Metrics and tick the metrics you want to display.
* Compare multiple metrics to spot correlations — for example, increased volume followed by higher bounce rates.

These charts are useful for catching gradual changes that can signal future deliverability problems.

## Domains table

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/emailhealthdashboard-email-health-domains-table.png" alt="The Email Performance card with the Domains tab selected, listing sending domains and their rates"></div>

The Domains table shows how your emails perform for each receiving domain during the selected date range. For each domain, you can see:

* Send volume
* Delivered emails (%)
* Bounces (%)
* Complaints (%)
* Opens (%)
* Clicks (%)

### How to use the Domains table

* Sort columns to identify domains with high bounce or complaint rates.
* Compare engagement metrics across domains.
* Spot specific receiving domains where reputation issues may be developing.

Only domains with at least 10 sent emails in the selected date range appear in the table.

## Account table

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/emailhealthdashboard-email-health-account-table.png" alt="The Email Performance card with the Account tab selected, listing metrics with volume, rate and difference"></div>

In the Email Performance card, switch from Domains to the Account tab to view email health statistics for the whole account. The table shows volume and rate for:

* Sent
* Delivered
* Complaints
* Bounces
* Opens
* Clicks

It also shows the difference (%) compared to the previous date range.

## Understanding bounces and complaints

### Bounces

A bounce occurs when an email cannot be delivered.

* Permanent bounces happen when there is a permanent issue, such as a non-existent address or a receiving server blocking your domain or IP.
* Transient bounces occur because of temporary issues, such as a full inbox or a temporary server problem.

High bounce rates signal poor list quality and can hurt your sender reputation.

### Complaints

A complaint occurs when a recipient marks your email as spam in their email client.

Complaints are a strong negative signal to mailbox providers and can damage your sender reputation quickly if they rise.

## Best practices

To maintain good email health:

* Review bounce and complaint trends regularly.
* Remove inactive or invalid recipients from your lists.
* Watch domains with declining delivery or engagement.
* Act early when you see negative changes — small issues can escalate fast.

The Email Health Dashboard helps you act before deliverability issues affect your results.
