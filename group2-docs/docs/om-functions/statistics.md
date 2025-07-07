---
lang: en-US
title: "Statistics"
description: "Learn about the statistical operation with OpenMadness functions"
---
# Statistics

To perform statistical operations, you can use the following functions:

## 1. `mad.sum(array)`

To returns the sum of all elements:

| Parameter |  Type  |      Description      |
|:---------:|:------:|:---------------------:|
| array     | Array  | Input array           |
| Returns   | number | Total sum of elements |

**Example**:

```js
import { sum } from 'openmadness';

sum([1, 2, 3]);
// Result: 6
```

### 2. `mad.mean(array)`

To calculates the mean (average) of elements:

| Parameter |  Type  |     Description     |
|:---------:|:------:|:-------------------:|
| array     | Array  | Input array         |
| Returns   | number | Average of elements |

**Example**:

```js
import { mean } from 'openmadness';

mean([1, 2, 3]);
// Result: 2
```

### 3. `mad.std(array)`

To computes the standard deviation of the array:

| Parameter |  Type  |     Description    |
|:---------:|:------:|:------------------:|
| array     | Array  | Input array        |
| Returns   | number | Standard deviation |

**Example**:

```js
import { std } from 'openmadness';

std([1, 2, 3]);
// Result: ~0.82 (sample-dependent)
```

### 4. `mad.median(array)`

To finds the median value:

| Parameter |  Type  |  Description |
|:---------:|:------:|:------------:|
| array     | Array  | Input array  |
| Returns   | number | Middle value |

**Example**:

```js
import { median } from 'openmadness';

median([1, 3, 2]);
// Result: 2
```
