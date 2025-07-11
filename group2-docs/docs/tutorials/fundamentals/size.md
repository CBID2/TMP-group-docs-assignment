---
title: "Size"
description: "Learn how to find the size of an array in OpenMadness"
---

# Finding the Size of an Array

The size of an OM array is simply the total number of elements it contains.
It's the grand count of all the individual numbers, regardless of how they're organized into dimensions. You can find the size using the `size` function.

```js
import { omArray, size, shape } from 'openmadness';

const temperatures = omArray([25, 28, 22, 27, 26]);
console. log("Temperatures:", temperatures.data);
console.log("Shape of temperatures:", temperatures.shape); // Output: [5]
console.log("Size of temperatures:", temperatures.size); // Output: 5
```

Or for a 2D array:

```js
import { omArray, size, shape } from 'openmadness';

const productMatrix = omArray([
    [10, 20],
    [30, 40],
    [50, 60]
]);
console.log("\nProduct Matrix:\n", productMatrix.data);
console.log("Shape of Product Matrix:", productMatrix.shape); // Output: [3, 2] (3 rows, 2 columns)
console.log("Size of Product Matrix:", productMatrix.size); // Output: 6 (3 * 2 = 6 total elements)
```
