---
description: >-
  Journey step that pauses the contact for a set amount of time before the next step.
---

# Wait

The Wait step pauses the contact for a set amount of time. When the time has passed, the contact moves on to the next step.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/journey-step-wait-settings.png" alt="Wait dialog with Delay for set to 3 days"></div>

## Settings

* **Delay for** — enter a number and choose a unit, such as days.

Click **Apply** to save the step.

A Wait step is often placed before an [If / Else](journey-step-if-else.md) step, to give the contact time to act before the condition is checked.

{% hint style="info" %}
Always add a wait step before an If / Else step, or it will be evaluated immediately. This is especially important when you evaluate interactions from a previous step, such as an email open.
{% endhint %}
