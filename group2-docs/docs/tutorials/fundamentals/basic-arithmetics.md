---
title: "Basic Arithmetics"
description: "This page will guide you on how to install openmadness"
---

# Basic Arithmetics

Openmadness makes performing common math operations on lists of numbers (which we call arrays) super easy. Instead of performing calculations one by one, Openmadness lets you apply operations to entire arrays at once.

When you use an arithmetic method like add() or multiply() on an Openmadness array, it applies that operation to every corresponding number in the array. If you add a single number (a scalar), it's added to every element in the array.


```js
import om from 'openmadness';

// Create Openmadness arrays
const dailySales = om.array([100, 150, 200]);
const marketingSpend = om.array([10, 25, 40]);

console.log("Daily Sales:", dailySales.data);
console.log("Marketing Spend:", marketingSpend.data);

// --- Addition (+) ---
// Add two arrays (element-wise)
const totalRevenue = dailySales.add(marketingSpend);
console.log("Total Revenue (Sales + Spend):", totalRevenue.data); // Output: [110, 175, 240]

// Add a scalar to an array
const salesIncrease = dailySales.add(50);
console.log("Sales after $50 increase:", salesIncrease.data); // Output: [150, 200, 250]

// --- Subtraction (-) ---
const netSales = dailySales.subtract(marketingSpend);
console.log("Net Sales (Sales - Spend):", netSales.data); // Output: [90, 125, 160]

// --- Multiplication (*) ---
const doubledSales = dailySales.multiply(2);
console.log("Doubled Sales:", doubledSales.data); // Output: [200, 300, 400]

// --- Division (/) ---
const salesRatio = dailySales.divide(marketingSpend);
console.log("Sales Ratio (Sales / Spend):", salesRatio.data); // Output: [10, 6, 5]

```