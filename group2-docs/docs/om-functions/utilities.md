---
lang: en-US
title: "Utilities"
description: "Learn about the utility functions in OpenMadness"
---

# Utilities

These functions are use to perform operations that change the shape or structure of an array without altering its data. To perform transformations, you can use the following functions:

## 1. `.clone(array)`

To creates a deep copy of an array:

| Parameter |  Type |     Description     |
|:---------:|:-----:|:-------------------:|
| array     | Array | The array to copy   |
| Returns   | Array | A deep-cloned array |
| Returns   | Array | Reshaped array      |

**Example**:

```js
import { clone } from 'openmadness';

const newArray = clone([1, 2, 3]);
// Result: [1, 2, 3]
```

## 2. `.print(array)`

To prints the result to the console in a readable format:

| Parameter |  Type |    Description   |
|:---------:|:-----:|:----------------:|
| array     | Array | Array to display |
| Returns   | void  | No return value  |
| Returns   | Array | Reshaped array   |

**Example**:

```js
import { print } from 'openmadness';
const array = [[1, 2], [3, 4]]
print(array);
// Console: [ [1, 2], [3, 4] ]
```

## 3. `.omArray(madArray)`

To converts a mad array into a plain JavaScript array:

| Parameter |    Type    |         Description         |
|:---------:|:----------:|:---------------------------:|
| madArray  | Mad Object | Internal mad representation |
| Returns   | Array      | Plain JavaScript array      |

**Example**:

```js
import { omArray, zeros } from 'openmadness';

const jsArray = toArray(zeros([2, 2]));
// Result: [[0, 0], [0, 0]]
```
