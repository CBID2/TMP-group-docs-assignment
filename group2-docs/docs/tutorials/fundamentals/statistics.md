---
title: "Statistical Operations"
description: "Learn how to perform statistical operations in OpenMadness"
---

# Statistical Operations

OpenMadness provides powerful statistical functions to analyze your data efficiently. This guide covers the essential statistical operations available in the library.

## Basic Statistics

### Minimum and Maximum

Find the extreme values in your dataset with `min()` and `max()`:

```js
import { omArray, min, max } from 'openmadness';

const stockPrices = omArray([120.50, 122.10, 119.80, 125.00, 121.75]);
console.log("Stock Prices:", stockPrices.data);
// Output: [120.5, 122.1, 119.8, 125, 121.75]

// Find the lowest price
const lowestPrice = stockPrices.min();
console.log("Lowest price:", lowestPrice); 
// Output: 119.8

// Find the highest price
const highestPrice = stockPrices.max();
console.log("Highest price:", highestPrice); 
// Output: 125
```

### Sum

Calculate the total of all values in your array:

```js
import { omArray, sum } from 'openmadness';

const monthlyExpenses = omArray([300, 150, 75, 200, 120]);
console.log("Monthly Expenses:", monthlyExpenses.data);
// Output: [300, 150, 75, 200, 120]

const totalExpenses = monthlyExpenses.sum();
console.log("Total Monthly Expenses:", totalExpenses); 
// Output: 845
```

## Central Tendency

### Mean (Average)

Calculate the arithmetic mean of your data:

```js
import { omArray, mean } from 'openmadness';

const testScores = omArray([85, 90, 78, 92, 88]);
const averageScore = testScores.mean();
console.log("Average Score:", averageScore);
// Output: 86.6
```

### Median

Find the middle value of your sorted data:

```js
import { omArray, median } from 'openmadness';

const salaries = omArray([45000, 50000, 60000, 48000, 120000]);
const medianSalary = salaries.median();
console.log("Median Salary:", medianSalary);
// Output: 50000
```

## Dispersion Statistics

### Variance

Measure how spread out your data is:

```js
import { omArray, variance } from 'openmadness';

const temperatures = omArray([68, 71, 72, 69, 70]);
const tempVariance = temperatures.variance();
console.log("Temperature Variance:", tempVariance);
// Output: 2.5
```

### Standard Deviation

Calculate the square root of variance to get a measure of dispersion in the same units as your data:

```js
import { omArray, std } from 'openmadness';

const temperatures = omArray([68, 71, 72, 69, 70]);
const tempStdDev = temperatures.std();
console.log("Temperature Standard Deviation:", tempStdDev);
// Output: 1.58
```

## Multi-dimensional Statistics

You can apply statistical operations along specific axes in multi-dimensional arrays:

```js
import { omArray, mean } from 'openmadness';

// Sales data: [Region, Product]
const salesData = omArray([
  [100, 150, 200],  // Region 1 sales for 3 products
  [120, 110, 180],  // Region 2 sales for 3 products
  [90, 160, 210]    // Region 3 sales for 3 products
]);

// Average sales per product (across regions)
const avgPerProduct = salesData.mean(0);
console.log("Average sales per product:", avgPerProduct.data);
// Output: [103.33, 140, 196.67]

// Average sales per region (across products)
const avgPerRegion = salesData.mean(1);
console.log("Average sales per region:", avgPerRegion.data);
// Output: [150, 136.67, 153.33]
```
