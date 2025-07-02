---
title: "Shapes"
description: "This page will guide you on how to install openmadness"
---

# Shape


The shape of an Openmadness array describes its dimensions or structure. Think of it as how your data is organized – like the rows and columns of a spreadsheet.
* A simple list of numbers has one dimension.
* A table of numbers has two dimensions (rows and columns).
The shape property returns an array indicating the size of each dimension.

```js
import om from 'openmadness';
// A 1-dimensional array (like a single list)
const dailyVisitors = om.array([1000, 1200, 950, 1300]);
console.log("Daily Visitors data:", dailyVisitors.data);
console.log("Shape of Daily Visitors:", dailyVisitors.shape); // Output: [4]
// It has 4 elements in its single dimension.

// A 2-dimensional array (like a grid or table)
const quarterlySales = om.array([
    [100, 120, 90],  // Q1 sales for 3 regions
    [110, 130, 95],  // Q2 sales for 3 regions
    [105, 125, 100]  // Q3 sales for 3 regions
]);
console.log("\nQuarterly Sales data:\n", quarterlySales.data);
console.log("Shape of Quarterly Sales:", quarterlySales.shape); // Output: [3, 3]
// This means 3 rows and 3 columns.

```
Understanding shape is crucial because many operations require arrays to have compatible shapes.
