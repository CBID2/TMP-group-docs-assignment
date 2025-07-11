---
title: "Axes"
description: "Learn how axes work in OpenMadness for array operations"
---

# Understanding Axes

Axes refer to the different dimensions along which you can perform operations in your data. Understanding axes is crucial for working effectively with multi-dimensional arrays in OpenMadness.

In a 2D array (like a grid or matrix), you have two main axes:
- **Axis 0**: Runs vertically, down the rows
- **Axis 1**: Runs horizontally, across the columns

Many OpenMadness functions (like `average()` or `sum()`) allow you to specify an axis parameter to operate on that particular dimension, rather than on the entire dataset.

## Examples

Let's see axes in action with a practical example:

```js
import { omArray } from 'openmadness';

const examScores = omArray([
    [80, 85, 90], // Student 1 scores (Math, Science, History)
    [75, 90, 88]  // Student 2 scores
]);
console.log("Exam Scores:\n", examScores.data);
```

- Sum of all scores (no axis specified)

```bash
import { sum } from 'openmadness';
console.log("Total sum of all scores:", examScores.sum()); // Output: 508
```

- Sum along axis 0 (down the columns) - sum for each subject

```js
import { sum } from 'openmadness';
const subjectTotals = examScores.sum(0);
console.log("Sum per Subject (Axis 0):", subjectTotals.data); // Output: [155, 175, 178]
// (80+75), (85+90), (90+88)
```

- Sum along axis 1 (across the rows) - sum for each student

```js
import { sum } from 'openmadness';
const studentTotals = examScores.sum(1);
console.log("Sum per Student (Axis 1):", studentTotals.data); // Output: [255, 253]
// (80+85+90), (75+90+88)
```

## Visualizing Axes

To help visualize how axes work:

- **Axis 0 operations** combine values vertically (column-wise)
- **Axis 1 operations** combine values horizontally (row-wise)

## Common Operations with Axes

Here are some common operations you can perform with axes:

- `sum(axis)`: Sum values along the specified axis
- `mean(axis)`: Calculate the average along the specified axis
- `max(axis)`: Find maximum values along the specified axis
- `min(axis)`: Find minimum values along the specified axis
