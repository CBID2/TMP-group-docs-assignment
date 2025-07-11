---
lang: en-US
title: "Statistics"
description: "Learn about the statistical operation with OpenMadness functions"
---
# Statistics

To perform statistical operations, you can use the following functions:

### 1. `.sum(array)`

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

### 2. `.mean(array)`

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

### 3. `.std(array)`

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

### 4. `.median(array)`

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

### 5. `.variance(array)`

To calculates the variance of the array:

| Parameter |  Type  |   Description   |
|:---------:|:------:|:---------------:|
| array     | Array  | Input array     |
| Returns   | number | Variance value  |

**Example**:

```js
import { variance } from 'openmadness';

variance([1, 2, 3]);
// Result: 0.67 (sample-dependent)
```

### 6. `.min(array)`

To finds the minimum value:

| Parameter |  Type  |  Description |
|:---------:|:------:|:------------:|
| array     | Array  | Input array  |
| Returns   | number | Minimum value |

**Example**:

```js
import { min } from 'openmadness';

min([1, 2, 3]);
// Result: 1
```

### 7. `.max(array)`

To finds the maximum value:

| Parameter |  Type  |  Description |
|:---------:|:------:|:------------:|
| array     | Array  | Input array  |
| Returns   | number | Maximum value |

**Example**:

```js
import { max } from 'openmadness';

max([1, 2, 3]);
// Result: 3
```
