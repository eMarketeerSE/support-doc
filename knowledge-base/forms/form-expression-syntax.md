---
description: >-
  The complete reference for writing expressions in the eMarketeer form editor —
  value references, operators, and functions.
---

# Form expression syntax

An expression is a formula or logical statement that eMarketeer evaluates while someone fills in your form. Expressions power the conditional rules behind branching logic, and they can also calculate values, validate answers, and control whether a field is read-only.

You can build an expression with the visual editor (the magic wand icon) or type it directly into the **Expression** field. This article describes the syntax for writing expressions by hand.

## Where you use expressions

* **Branching logic** — show or hide a question, skip ahead, or complete the form early. See [Form branching logic](form-branching-logic.md).
* **Calculated values** — derive a value from other answers.
* **Validation** — enforce a constraint, such as a start date that must fall before an end date.
* **Read-only states** — make a field editable only when a condition is met.

## Referencing values

Expressions read values from the form by name, wrapped in curly braces.

### Question values

| What you reference | Syntax | Example |
| --- | --- | --- |
| Most question types | `{questionName}` | `{email}` |
| Checkboxes, image picker, ranking (by position, zero-based) | `{questionName[index]}` | `{q1[0]}` |
| Multiple textboxes | `{questionName.itemName}` | `{q1.item1}` |

### Matrix cell values

| What you reference | Syntax | Example |
| --- | --- | --- |
| Cell in the same row | `{row.columnName}` | `{row.column1}` |
| Cell in the previous row | `{prevRow.columnName}` | `{prevRow.column1}` |
| Cell in the next row | `{nextRow.columnName}` | `{nextRow.column1}` |
| Row index, all rows (starts at 1) | `{rowIndex}` | `{rowIndex}` |
| Row index, visible rows (starts at 1) | `{visibleRowIndex}` | `{visibleRowIndex}` |
| Row name or value | `{rowName}` | `iif({rowName} = 'test', 'Yes', 'No')` |
| Row title | `{rowTitle}` | `Title: {rowTitle}` |
| Cell in a single-select matrix | `{matrixName.rowName}` | `{matrix1.row1}` |
| Cell in a multi-select matrix | `{matrixName.rowName.columnName}` | `{matrix1.row1.column1}` |
| Cell in a dynamic matrix (by row index) | `{matrixName[rowIndex].columnName}` | `{dmatrix1[0].column1}` |
| Cell in a preceding row (offset) | `{matrixName[-1].columnName}` | `{matrix1[-1].column1}` |
| Total-row cell, same matrix | `{totalRow.columnName}` | `{totalRow.column1}` |
| Total-row cell, from another question | `{matrixName-total.columnName}` | `{matrix1-total.column1}` |

### Dynamic panel values

| What you reference | Syntax | Example |
| --- | --- | --- |
| Question in the same panel | `{panel.questionName}` | `{panel.q1}` |
| Question in the previous panel | `{prevPanel.questionName}` | `{prevPanel.q1}` |
| Question in the next panel | `{nextPanel.questionName}` | `{nextPanel.q1}` |
| Question in the parent panel | `{parentPanel.questionName}` | `{parentPanel.q1}` |
| Question in a specific panel (by index) | `{panelName[index].questionName}` | `{dpanel1[0].q1}` |
| Question in the last panel | `{panelName[-1].questionName}` | `{dpanel1[-1].q1}` |

### Custom variables

Custom variables store dynamically calculated values. Reference them exactly like questions, by name in curly braces: `{variableName}`.

### Function results

Functions return values you can use as operands. For example, `dateDiff()` returns a number you can compare in a validation rule.

## Operators

### Comparison operators

Comparisons are case-sensitive.

| Operator | Aliases | Description | Example |
| --- | --- | --- | --- |
| `empty` | | Value is empty (undefined or null) | `{q1} empty` |
| `notempty` | | Value is not empty | `{q1} notempty` |
| `=` | `==`, `equal` | Equal (ignores type) | `{q1} = 10` |
| `!=` | `<>`, `notequal` | Not equal | `{q1} != 10` |
| `<` | `less` | Less than | `{q1} < 10` |
| `>` | `greater` | Greater than | `{q1} > 10` |
| `<=` | `lessorequal` | Less than or equal to | `{q1} <= 10` |
| `>=` | `greaterorequal` | Greater than or equal to | `{q1} >= 10` |
| `contains` | `*=`, `contain` | Value or array contains the operand | `{q1} contains 'abc'` |
| `notcontains` | `notcontain` | Value or array does not contain the operand | `{q1} notcontains 'abc'` |
| `anyof` | | Value is any of the listed values | `{q1} anyof ['a', 'b']` |
| `noneof` | | Value is none of the listed values | `{q1} noneof ['a', 'b']` |
| `allof` | | Value includes all of the listed values | `{q1} allof ['a', 'b']` |

### Logical operators

| Operator | Aliases | Description | Example |
| --- | --- | --- | --- |
| `!` | `negate` | Inverts a boolean result | `!{q1}` |
| `&&` | `and` | True when all conditions are true | `{q1} empty and {q2} empty` |
| `\|\|` | `or` | True when any condition is true | `{q1} empty or {q2} empty` |

### Arithmetic operators

| Operator | Description | Example |
| --- | --- | --- |
| `+` | Addition | `{q1} + {q2}` |
| `-` | Subtraction | `{q1} - {q2}` |
| `*` | Multiplication | `{q1} * {q2}` |
| `/` | Division | `{q1} / {q2}` |
| `%` | Remainder (modulo) | `{q1} % {q2}` |
| `^` | Exponentiation (alias `power`) | `{q1} ^ {q2}` |

## Functions

### Logical functions

`iif(condition, valueIfTrue, valueIfFalse)` returns one of two values depending on whether the condition is true.

```
iif({q1} > 20, 'High', 'Low')
```

### Date functions

| Function | Returns | Example |
| --- | --- | --- |
| `age(date)` | Age in years from a birthdate | `age('2000-01-01')` |
| `currentDate()` | Current date and time | `currentDate()` |
| `today(offset)` | Today's date, optionally offset by a number of days | `today(-1)` (yesterday) |
| `year(date)` | Year | `year('2000-01-01')` returns `2000` |
| `month(date)` | Month, 1–12 | `month('2000-01-01')` returns `1` |
| `day(date)` | Day of the month, 1–31 | `day('2000-01-30')` returns `30` |
| `weekday(date)` | Day of the week, 0 (Sunday) to 6 (Saturday) | `weekday('2000-01-01')` returns `6` |
| `dateDiff(date1, date2, unit)` | Difference between two dates in `days`, `hours`, `minutes`, `seconds`, `months`, or `years` | `dateDiff('2000-01-01', '2000-02-01', 'days')` returns `31` |
| `dateAdd(date, amount, unit)` | Date with time added or subtracted, in the same units as `dateDiff` | `dateAdd('2000-01-01', 10, 'days')` |

### Aggregation functions

| Function | Returns | Example |
| --- | --- | --- |
| `sum(...)` | Sum of the values | `sum(10, 20, 30, 40)` returns `100` |
| `min(...)` | Smallest value | `min(10, 20, 30, 40)` returns `10` |
| `max(...)` | Largest value | `max(10, 20, 30, 40)` returns `40` |
| `avg(...)` | Average of the values | `avg(10, 20, 30, 40)` returns `25` |
| `sumInArray(matrix, column, condition)` | Sum of a matrix column, with an optional filter | `sumInArray({matrix}, 'total', {categoryId} = 1)` |
| `minInArray(matrix, column, condition)` | Smallest value in a matrix column, with an optional filter | `minInArray({matrix}, 'quantity', {quantity} > 0)` |
| `maxInArray(matrix, column, condition)` | Largest value in a matrix column, with an optional filter | `maxInArray({matrix}, 'quantity', {quantity} < 100)` |
| `avgInArray(matrix, column, condition)` | Average of a matrix column, with an optional filter | `avgInArray({matrix}, 'quantity', {quantity} > 0)` |
| `countInArray(matrix, column, condition)` | Count of non-empty cells in a matrix column, with an optional filter | `countInArray({matrix}, 'quantity', {quantity} > 0)` |

## What to do next

Put expressions to work in [Form branching logic](form-branching-logic.md) to show, hide, skip, or complete a form based on what respondents answer.
