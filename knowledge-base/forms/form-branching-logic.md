---
description: >-
  How to use skip logic, show/hide conditions, and complete-survey triggers to
  create adaptive forms in eMarketeer.
---

# Form branching logic

Branching logic lets you design forms that adapt based on each respondent's answers. Instead of showing every question to every respondent, you direct people along different paths — skipping irrelevant sections, revealing follow-up questions, or sending them to the thank-you page early.

The form editor supports three types of branching logic:

* **Skip logic** — jump to a specific question when a condition is met.
* **Show/hide logic** — reveal or hide a question, panel, or page based on an answer.
* **Complete survey logic** — end the form early and show the thank-you page when a condition is met.

All branching rules can be configured through the **Conditions** section of the Property Grid, or reviewed and managed together in the **Logic** tab. When you write conditions by hand instead of using the visual editor, see [Form expression syntax](form-expression-syntax.md) for the full operator and function reference.

## Skip logic

Skip logic jumps respondents ahead to a specific question when an expression evaluates to true. Use it when you want to bypass a block of questions based on what someone answered earlier.

Skip logic is configured using **triggers** at the survey level.

### Set up skip logic

1. In the Property Grid, click **Survey** at the top to open survey-level settings.
2. Switch to the **Conditions** category.
3. Under **Triggers**, click the **+** icon to add a new trigger.
4. Select **Skip to question** from the trigger type dropdown.
5. Click the pen icon to expand the trigger settings.
6. Set the expression that should trigger the skip. Type it directly into the **Expression** field, or click the magic wand icon to build the expression using the visual editor. Click **Apply** when done.
7. In the **Question to skip to** dropdown, select the destination question.

## Show/hide logic

Show/hide logic (also called display logic) reveals or hides a question, panel, or page based on a condition. It is the most flexible form of branching and works well for individual follow-up questions, related groups of questions in a panel, or entire pages.

You can set show/hide conditions on any question, panel, or page through its **Conditions** settings in the Property Grid.

### Set up show/hide logic

1. Select the question, panel, or page you want to conditionally show or hide.
2. In the Property Grid, switch to the **Conditions** category.
3. Locate the **Make the question/panel/page visible if** field.
4. Click the magic wand icon to open the visual expression editor.
5. Select the question whose answer should control visibility.
6. Choose a condition operator: **Empty**, **Not empty**, **Equals**, **Does not equal**, **Any of**, **Greater than**, **Less than**, **Greater than or equal to**, or **Less than or equal to**.
7. Enter or select the answer value that should trigger the condition.
8. Click **Apply**.

The element stays hidden until the condition is met. If the respondent goes back and changes their answer so the condition is no longer true, the element is hidden again.

{% hint style="info" %}
A question that is hidden by display logic cannot be required at the same time. If a required question is hidden, the required setting is ignored.
{% endhint %}

## Complete survey logic

Complete survey logic ends the form early and takes the respondent to the thank-you page when a specific condition is met. Use it when certain answers mean there is nothing more for a respondent to fill in.

Like skip logic, this is configured using triggers at the survey level.

### Set up complete survey logic

1. In the Property Grid, click **Survey** at the top to open survey-level settings.
2. Switch to the **Conditions** category.
3. Under **Triggers**, click the **+** icon to add a new trigger.
4. Select **Complete survey** from the trigger type dropdown.
5. Click the pen icon to expand the trigger settings.
6. Set the expression that should complete the survey. Type it directly into the **Expression** field, or click the magic wand icon to build the expression using the visual editor. Click **Apply** when done.

## Managing all branching rules in the Logic tab

The **Logic** tab gives you a single view of every conditional rule in your form. All rules defined in individual Conditions sections — skip triggers, show/hide conditions, and complete-survey triggers — are listed here.

Use the Logic tab to:

* Review all branching rules in one place.
* Edit or delete individual rules without navigating to each element.
* Add new rules directly without opening a specific question's settings.

To open the Logic tab, click **Logic** in the editor's top tab bar.
