---
lang: en-US
title: Basic Array Operations
description: Get to know how to perform basic array operations in Openmadness library
---

# Basic Array Operations

This section covers basic arithmetic operations you can perform using the `openMadness` library. These basic arithmetic operations include:

1. `sum()`

2. `subtract()`

3. `multiply()`

4. `dot()`

**1. Sum()**: This method allows you to calculate the sum of all numbers in an array.

**Example**:

``` js
import { omArray, sum } from 'openmadness';
const arrayOne= omArray (15, 12, 5, 19, 25);
const arrayTwo = omArray(8, 24, 10, 5, 13);
const sumOfArray = omArray.sum(arrayOne, arrayTwo);
console.log(“Addition of an array”, sumOfArray) // Output [23, 36, 15, 24, 38]
```

**2. subtract()**: This method allows you to find the difference between two arrays.

**Example**:

```js
import { omArray, subtract } from 'openmadness';
const arrayOne= omArray (15, 12, 5, 19, 25);
const arrayTwo = omArray(8, 24, 10, 5, 13);
const subtractArray = omArray.subtract(arrayOne, arrayTwo);
console.log(“subtraction of an array”, subtractArray) // Output [7, -12, -5, 14, 12]
```

**3. multiply()**: This method allows you to multiply arrays together.

**Example**:

```js
import { omArray, multiply } from 'openmadness';
const arrayOne= omArray (15, 12, 5, 19, 25);
const arrayTwo = omArray(8, 24, 10, 5, 13);
const multiplyArray = omArray.multiply(arrayOne, arrayTwo);
console.log(“Multiplication of an array”, multiplyArray) // Output [120, 288, 50, 95, 325]
```

**4. dot()**: This method allows you to calculate the dot product of two arrays, i.e., multiplying the corresponding array elements and summing them up.

**Example**:

```js
import { omArray, dot } from 'openmadness';
const arrayOne= omArray (15, 12, 5, 19, 25);
const arrayTwo = omArray(8, 24, 10, 5, 13);
const dotArray = omArray.dot(arrayOne, arrayTwo);
console.log(“Dot of an array”, divArray);

// Explanation:

Dot = [(15*8) + (12*24) + (5*10) + (19*5) + (25*13)];

//Output: 828
```
