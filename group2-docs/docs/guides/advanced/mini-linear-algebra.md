---
lang: en-US
title: "Mini Linear Algebra"
description: "Learn how to work with mini linear algebra in OpenMadness"
---

# Mini Linear Algebra with Openmadness

Linear algebra is a branch of mathematics that helps us work with vectors, matrices, and other multi-dimensional data. Openmadness provides some key operations that let you explore this world without needing a deep math background.

### Dot Product

The **dot product** is a fundamental operation in linear algebra. It's a way to multiply two vectors or matrices and get a single number. You'll often see it in machine learning and data science. In Openmadness, you can use `.dot()` to calculate it.

#### Dot product of two vectors

```js
import { omArray, dot } from "openmadness";

const vectorA = omArray([1, 2, 3]);
const vectorB = omArray([4, 5, 6]);

const dotProduct = vectorA.dot(vectorB);
console.log(dotProduct); //Output: (1*4 + 2*5 + 3*6) = 4 + 10 + 18 = 32
```

### Matrix multiplication

The dot product is also essential for matrix multiplication. If you have two matrices, you can use `.dot()` to multiply them.

```js
import { omArray, dot } from "openmadness";

const matrixA = omArray([
  [1, 2],
  [3, 4],
]);

const matrixB = omArray([
  [5, 6],
  [7, 8],
]);

const productMatrix = matrixA.dot(matrixB);
console.log(productMatrix);
//Output: [[19, 22], [43, 50]]
```

As you can see, Openmadness gives you a simple, chainable way to perform these powerful linear algebra calculations.

### Multiply a matrix by a scalar

```js
import { omArray, multiply } from "openmadness";

const M = omArray([
  [1, 2],
  [3, 4],
]);

const result = M.multiply(10);
console.log(result.toArray());
//Output: [[10, 20], [30, 40]]
```

This scales every element of the matrix. It is perfect for normalizing or transforming data.
