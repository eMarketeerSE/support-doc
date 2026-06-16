---
description: >-
  The Traffic Analyzer visualises your full marketing flow, from first touch to
  qualified lead.
---

# Traffic Analyzer

The Traffic Analyzer visualises your full marketing flow, from first touch to qualified lead. It shows how visitors move through your marketing in one connected view, instead of as separate numbers in separate reports.

Use it to understand which sources drive high-quality traffic, see which campaigns and content contribute to conversions, and spot where prospects drop off along the way.

## What you can use it for

* Identify the sources that generate the most leads, not just the most traffic.
* See which campaigns and content move people toward conversion.
* Find the drop-off points where prospects fall out of the flow.
* Trace which efforts ultimately produce marketing qualified leads.

## Reading the flow

The dashboard draws your marketing as a flow that reads left to right. Each stage feeds the next, and the width of each path reflects how much volume moves through it.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/traffic_analyzer_overview.png" alt="The Traffic Analyzer flow, reading left to right from traffic source to qualified lead."></div>

The stages are:

1. **Traffic Source** — where the visit originated.
2. **Marketing source** — the channel or medium behind that traffic.
3. **Campaign** — the specific campaign tied to the visit, read from the `utm_campaign` parameter. eMarketeer adds UTM parameters to its own links automatically (for example, links in emails), using the eMarketeer Campaign name as `utm_campaign`. For the best traceability, tag your other links consistently too.
4. **Conversion** — the conversion the visit produced. This tracks submissions of eMarketeer forms embedded on your site.
5. **Contact Type** — the kind of contact that converted: new or existing.
6. **Marketing Qualified Lead** — whether the contact became an MQL during the selected period.

Following a path from left to right shows you the full journey: which source, through which campaign, led to which conversions, and ultimately to qualified leads.

## Controls

A set of controls lets you shape the view:

* **Show/Hide Values** — toggle the numeric labels on each path.
* **Top 5 / Top 10 / Top 15** — limit the view to the strongest paths so the flow stays readable.
* **Readable** vs. **True Scale** — switch between a balanced layout and one where widths reflect exact proportions.
* **Date range** — focus the flow on a custom period.

## Node options

Click any node in the flow to open two options: **Drill down** and **Filter**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/NodeOptions.png" alt="The Drill down and Filter options shown when a node is clicked."></div>

### Drill down into a node

This is where it gets interesting. The drill-down report shows how a single node relates to the rest of your traffic — the sessions, conversions, and leads behind it.

A few examples:

* **Paid Social** — drill down to see how your paid social channels perform over the period: how many sessions they created, how many conversions, and how many leads (MQLs) came from that source.
* **Campaign** — drill down on a specific campaign to see how it performs in numbers: which traffic and marketing sources drove the most traffic to it, and how well it converts and generates leads.
* **MQL** — to see what drives new leads, drill down on the MQL node. It ranks the traffic sources, marketing sources, campaigns, and conversion points at each stage, so you can see which performs best. To start working with leads, see [Lead management](../lead-board-scoring/).

### Filter

Choose **Filter** to narrow the whole report to only the traffic that passed through the selected node. It is another way to see what the drill-down report describes, shown in the flow itself.

## Requirements

The Traffic Analyzer requires the Web Tracker installed on your website. Without it, the flow has no traffic data to draw from.

## What to do next

For a higher-level view of campaigns, conversions, and leads, open the [Marketing Performance](marketing-performance.md) dashboard.
