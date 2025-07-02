---
title: "Data Types"
description: "This page will guide you on how to install openmadness"
---

# Data Types

In Openmadness, we primarily work with numbers. These can be whole numbers (such as 10, 500) or numbers with decimal points (such as 3.14, 0.5).
While JavaScript has other data types (like strings for text or booleans for true/false values), Openmadness functions are designed for numerical calculations. If you try to include non-numbers, Openmadness might convert them to NaN (Not a Number) if it can't understand them.

```js
import om from 'openmadness';

// An array of numbers - perfect for Openmadness!
const prices = om.array([24.99, 12.50, 5.00]);
console.log("Numeric prices:", prices.data);

// What happens if we try to include a string?
const mixedItems = om.array([10, 'apple', 20]);
console.log("Mixed data:", mixedItems.data); // Output: [10, NaN, 20]
// 'apple' can't be converted to a number, so it becomes NaN.
```
::: note
 For reliable results, always provide numbers to Openmadness arrays.
:::