---
description: >-
  Which edits are safe on a form that already has answers, and which changes can
  affect existing reports.
tags:
  - legacy
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
    visible: true
  actions:
    visible: true
---

# Editing a live form

Editing a form that already has answers can change what those answers mean, so it pays to know which edits are safe and which are not.

A form is "live" once answers are registered to it and reports are tied to those answers. Reports are linked to the questions in the form, so any change in the form editor is reflected in the report.

## How answers are stored

Take a question like this:

What's your favorite pet?

- Dog
- Cat
- Fish
- Rat

If someone answers "Cat," eMarketeer does not store the text "Cat." It stores "option number 2."

This means editing a question on a live form can change what "option number 2" means. Removing a question removes it from the report along with the related answers.

## Edits that affect existing reports

- Editing the text of an option or rearranging options changes the meaning of answers already registered.
- Removing an option behaves like rearranging — it shifts the option numbers.
- Deleting a question also removes the answers to it.
- Cutting and pasting a question is the same as deleting it and creating a new one.

## Edits that do not affect reports

- Changing the order of entire questions (not options).
- Editing non-question items such as rich text.
- Editing rules, thank-you pages, or confirmation pages.
- Editing layout.
