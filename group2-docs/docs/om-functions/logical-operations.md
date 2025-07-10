---
lang: en-US
title: "Logical Operations"
description: "This page will guide you on how to install openmadness"
---

# Logical Operations

To perform logical operations in OpenMadness, you can use the following functions:

## 1. `.equal(a, b)`

Checks element-wise equality:

| Parameter |  Type |          Description         |
|:---------:|:-----:|:----------------------------:|
| a, b      | Array | Arrays of the same shape     |
| Returns   | Array | Boolean array of comparisons |

**Example**:

```js
import { equal } from 'openmadness';

equal([1, 2], [1, 3]);
// Result: [true, false]
```

## 2. `.greater(a, b)`

Checks if elements in `a` are greater than corresponding elements in `b`:

| Parameter |  Type |        Description       |
|:---------:|:-----:|:------------------------:|
| a, b      | Array | Arrays of the same shape |
| Returns   | Array | Boolean array            |

**Example**:

```js
import { greater } from 'openmadness';

greater([4, 2], [3, 3]);
// Result: [true, false]
```

## 3. `.where(condition, a, b)`

Returns elements from `a` where the condition is true, otherwise from `b`:

| Parameter |  Type |          Description         |
|:---------:|:-----:|:----------------------------:|
| condition | Array | Boolean mask                 |
| a, b      | Array | Arrays of values             |
| Returns   | Array | Resulting values from `a` or `b` |

**Example**:

```js
import { where } from 'openmadness';

where([true, false], [1, 2], [3, 4]);
// Result: [1, 4]
```