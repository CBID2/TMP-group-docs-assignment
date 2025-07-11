---
title: "Logical Operations"
description: "Learn how to perform logical comparisons and boolean operations in OpenMadness"
---

# Logical Operations

OpenMadness provides powerful comparison methods that let you evaluate conditions across your data. These operations create boolean arrays (arrays of true/false values) that you can use for filtering, masking, or further analysis.

## Comparison Operations

### Greater Than and Less Than

Compare each element against a threshold value:

```js
import { omArray, greaterThan, lessThan } from 'openmadness';

const temperatures = omArray([68, 75, 62, 83, 71]);
console.log("Temperatures:", temperatures.data);
// Output: [68, 75, 62, 83, 71]

// Check which temperatures are above 70°F
const isHot = temperatures.greaterThan(70);
console.log("Above 70°F:", isHot.data);
// Output: [false, true, false, true, true]

// Check which temperatures are below 65°F
const isCool = temperatures.lessThan(65);
console.log("Below 65°F:", isCool.data);
// Output: [false, false, true, false, false]
```

### Equal and Not Equal

Test for exact matches or differences:

```js
import { omArray, equal, notEqual } from 'openmadness';

const statusCodes = omArray([200, 404, 200, 500, 200]);
console.log("Status Codes:", statusCodes.data);
// Output: [200, 404, 200, 500, 200]

// Find all successful responses (code 200)
const isSuccess = statusCodes.equal(200);
console.log("Success responses:", isSuccess.data);
// Output: [true, false, true, false, true]

// Find all error responses (not 200)
const isError = statusCodes.notEqual(200);
console.log("Error responses:", isError.data);
// Output: [false, true, false, true, false]
```

### Greater/Less Than or Equal

Include the threshold value in your comparison:

```js
import { omArray, greaterThanOrEqual, lessThanOrEqual } from 'openmadness';

const scores = omArray([85, 90, 70, 95, 60]);
console.log("Test Scores:", scores.data);
// Output: [85, 90, 70, 95, 60]

// Check which scores are at least 70 (passing)
const isPassing = scores.greaterThanOrEqual(70);
console.log("Passing scores:", isPassing.data);
// Output: [true, true, true, true, false]

// Check which scores are at most 85 (need improvement)
const needsImprovement = scores.lessThanOrEqual(85);
console.log("Scores needing improvement:", needsImprovement.data);
// Output: [true, false, true, false, true]
```

## Combining Logical Operations

You can chain logical operations to create complex conditions:

```js
import { omArray, and, greaterThan, lessThan } from 'openmadness';

const values = omArray([15, 25, 35, 45, 55]);
console.log("Values:", values.data);
// Output: [15, 25, 35, 45, 55]

// Find values between 20 and 50
const greaterThan20 = values.greaterThan(20);
const lessThan50 = values.lessThan(50);
const between20And50 = greaterThan20.and(lessThan50);
console.log("Between 20 and 50:", between20And50.data);
// Output: [false, true, true, true, false]
```

## Using Logical Results

### Counting True Values

Count how many elements meet your condition:

```js
import { omArray, greaterThanOrEqual } from 'openmadness';

const ages = omArray([17, 22, 16, 25, 19, 30]);
const isAdult = ages.greaterThanOrEqual(18);
console.log("Is adult:", isAdult.data);
// Output: [false, true, false, true, true, true]

const adultCount = isAdult.sum();
console.log("Number of adults:", adultCount);
// Output: 4
```

### Filtering with Logical Arrays

Use logical arrays to extract matching elements:

```js
import { omArray, lessThan, filter } from 'openmadness';

const prices = omArray([12.99, 8.50, 15.75, 9.99, 22.50]);
const isBudget = prices.lessThan(10);
console.log("Budget items:", isBudget.data);
// Output: [false, true, false, true, false]

const budgetPrices = prices.filter(isBudget);
console.log("Budget prices:", budgetPrices.data);
// Output: [8.50, 9.99]
```
