---
title: "Working with 2D data"
description: "Learn how to work with 2D data in Openmadness"
---

# Working with 2D data

Now that you're familiar with the basics of Openmadness, let’s explore some of the library's powerful features in more depth. This guide will help you learn how to reshape your data, understand its statistical properties, and extract the specific information you need.

You'll learn about:

* Reshaping 2D data
* Making sense of data with statistics
* Using logic and filters to extract what you need

## Reshaping Reality: Working with 2D Data

When your data grows beyond simple lists, it often makes sense to structure it as a matrix (or 2D array). Openmadness makes it easy to reshape and transform your data layout.

### Reshape a List into a Matrix

Imagine you have a list of numbers that you want to arrange into a grid, like a spreadsheet. With **omArray()**, you can create a 2D array, which is essentially a grid of rows and columns.

Let's say you have a single list of numbers:

```js
import { omArray } from 'openmadness';
const flatData = omArray(1, 2, 3, 4, 5, 6);
```

You can use the **.reshape()** operation to turn this flat list into a grid. You just tell it how many rows and columns you want. For example, to make it a 2x3 grid (2 rows, 3 columns):

```js
import { omArray, reshape } from 'openmadness';
const reshapedData = flatData.reshape(2, 3);
console.log(reshapedData);
//Output: [[1, 2, 3], [4, 5, 6]]

```

### Flatten a Matrix

What if you have a grid and you want to turn it back into a single, flat list? That's where .flatten() comes in handy!

```js
import { omArray, flatten } from 'openmadness';
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
const flattenedData = matrix.flatten();
console.log(flattenedData);
//Output: [1, 2, 3, 4, 5, 6]

```

### Transpose a Matrix

Sometimes, you might want to switch the rows and columns of your grid. This is called transposing, and Openmadness makes it simple with **.transpose()**. Think of it like rotating your data so the rows become columns and the columns become rows.

```js
import { omArray, transpose } from 'openmadness';
const originalMatrix = omArray([
  [1, 2],
  [3, 4]
]);

const transposedMatrix = originalMatrix.transpose();
console.log(transposedMatrix);
//Output: [[1, 3], [2, 4]]

```
