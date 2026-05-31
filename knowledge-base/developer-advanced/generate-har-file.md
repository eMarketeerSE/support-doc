---
description: >-
  How to record a HAR file in Chrome that captures all network requests while
  you reproduce a problem in eMarketeer.
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

# Generate HAR file for support

A HAR file records every network detail in your browser as you reproduce a problem in eMarketeer, which helps support diagnose the issue.

If support asks for a HAR file, open eMarketeer to the place where the problem happens, start the recording, reproduce the issue, then save and send the file.

## For Chrome

{% stepper %}
{% step %}
### Open the problem page

Open Chrome and go to the page where the issue happens.
{% endstep %}

{% step %}
### Open Developer Tools

Click the ⋮ menu and select More Tools > Developer Tools.
{% endstep %}

{% step %}
### Open the Network tab

In the panel that opens, select the Network tab. Keep the panel open while you reproduce the issue.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/SCR-20240522-jbvs.png" alt="Chrome DevTools Network tab open"></div>
{% endstep %}

{% step %}
### Clear the logs

Clear the logs before you reproduce the problem by clicking the clear button.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/SCR-20240522-jcfi.png" alt="clear network logs button in DevTools"></div>
{% endstep %}

{% step %}
### Check the record button

Look for the round record button in the upper left corner of the tab. Make sure it is red. If it is grey, click it once to start recording.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/SCR-20240522-jcqt.png" alt="red record button active in the Network tab"></div>
{% endstep %}

{% step %}
### Enable Preserve log

If it is not already recording, check the Preserve log box.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/SCR-20240522-jupc.png" alt="Preserve log checkbox in the Network tab"></div>
{% endstep %}

{% step %}
### Reproduce the issue

Reproduce the issue while network requests are recorded.
{% endstep %}

{% step %}
### Export the HAR file

Click the download button, Export HAR, and save the file to your computer as HAR with Content.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/SCR-20240522-jdas.png" alt="Export HAR option in the download menu"></div>
{% endstep %}

{% step %}
### Send the file to support

Upload the HAR file to your ticket with eMarketeer Support for further investigation.
{% endstep %}
{% endstepper %}
