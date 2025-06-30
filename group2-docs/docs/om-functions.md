---
lang: en-US
title: Openmadness Function
description: Learn about the main functions in Openmadness 
---
## OM-Functions

The main functions in the OpenMadness JavaScript library are used for:

1. Array creation and manipulation
2. Arithmetic Operation
3. Logic
4. Statistics
5. Transformations
6. Utilities

## Array Operations

These functions are available for creating or manipulating arrays:

### 1. `mad.ones(shape)`

This creates an array filled with ones:

| Parameter |  Type |                Description                |
|:---------:|:-----:|:-----------------------------------------:|
| shape     | Array | Shape of the new array, e.g., [2, 3] or 2 |
| Returns   | Array | A new array filled with ones              |

**Example**:

```js
// Create a 3x1 array of ones
import { ones } from 'openmadness';

const onesColumn = ones([3, 1]);
// Result: [[1], [1], [1]]
```

### 2. `mad.zeros(shape)`

This creates an array filled with zeros: 

| Parameter |  Type |                Description                |
|:---------:|:-----:|:-----------------------------------------:|
| shape     | Array | Shape of the new array, e.g., [2, 3] or 2 |
| Returns   | Array | A new array filled with zeros             |

**Example**:

```js
// Create a 2x2 array of zeroes
import { zeros } from 'openmadness';

const zeroMatrix = zeros([2, 2]);
// Result: [[0, 0], [0, 0]]
```

### 3. `mad.range(start, end, step)`

This generates an array containing a sequence of numbers:

| Parameter |  Type  |            Description            |
|:---------:|:------:|:---------------------------------:|
| start     | number | Start of the range                |
| end       | number | End of the range                  |
| step      | number | Step increment. Default is 1      |
| Returns   | Array  | A new array with the number range |

**Example**:

```js
import { range } from 'openmadness';

const sequence = range(0, 10, 2);
// Result: [0, 2, 4, 6, 8]
```

### 4. `mad.random(shape)`

Generates an array of the given shape with random values between 0 and 1:

| Parameter |  Type |              Description              |
|:---------:|:-----:|:-------------------------------------:|
| shape     | Array | Shape of the new array                |
| Returns   | Array | A new array filled with random values |

**Example**:

```js
import { random } from 'openmadness';

const randomArray = random([2, 2]);
// Example output: [[0.13, 0.85], [0.42, 0.67]]
```

## Arthimetric Operations

These functions are used to perform arithmetic operations on arrays.

### 1. `mad.add(a, b)`

Adds two arrays element-wise:

| Parameter |  Type |           Description          |
|:---------:|:-----:|:------------------------------:|
| a, b      | Array | Arrays of the same shape       |
| Returns   | Array | Resulting array after addition |

**Example**:

```js
import { add } from 'openmadness';

add([1, 2], [3, 4]);
// Result: [4, 6]
```

### 2. `mad.subtract(a, b)`

Subtracts the second array from the first, element-wise:

| Parameter |  Type |            Description            |
|:---------:|:-----:|:---------------------------------:|
| a, b      | Array | Arrays of the same shape          |
| Returns   | Array | Resulting array after subtraction |

**Example**:

```js
import { subtract } from 'openmadness';

subtract([5, 6], [2, 3]);
// Result: [3, 3]
```

### 3. `mad.multiply(a, b)`

Multiplies two arrays element-wise:

| Parameter |  Type |              Description             |
|:---------:|:-----:|:------------------------------------:|
| a, b      | Array | Arrays of the same shape             |
| Returns   | Array | Resulting array after multiplication |

**Example**:

```js
import { multiply } from 'openmadness';

multiply([2, 3], [4, 5]);
// Result: [8, 15]
```

### 4. `mad.divide(a, b)`

Divides the first array by the second, element-wise:

| Parameter |  Type |           Description          |
|:---------:|:-----:|:------------------------------:|
| a, b      | Array | Arrays of the same shape       |
| Returns   | Array | Resulting array after division |

**Example**:

```js
import { divide } from 'openmadness';

divide([10, 20], [2, 5]);
// Result: [5, 4]
```

### 5. `mad.pow(a, b)`

Raises each element in a to the power of the corresponding element or scalar `b`:

| Parameter |       Type      |          Description          |
|:---------:|:---------------:|:-----------------------------:|
| a         | Array           | Base values                   |
| b         | Array or number | Exponents                     |
| Returns   | Array           | Array of exponentiated values |

**Example**:

```js
import { pow } from 'openmadness';

pow([2, 3], 2);
// Result: [4, 9]
```

## Logical Operations

These functions allow you to perform element-wise logical comparisons:

### 1. `mad.equal(a, b)`

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

### 2. `mad.greater(a, b)`

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

### 3. `mad.where(condition, a, b)`

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

## Statistics

These functions help calculate statistical measures from arrays:

### 1. `mad.sum(array)`

Returns the sum of all elements:

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

Calculates the mean (average) of elements:

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

Computes the standard deviation of the array:

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

Finds the median value:

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

## Transformations

These functions are used to reshape or reformat arrays:

### 1. `mad.reshape(array, newShape)`

Reshapes an array to the specified shape:

| Parameter |  Type |       Description       |
|:---------:|:-----:|:-----------------------:|
| array     | Array | The original array      |
| newShape  | Array | New shape, e.g., [2, 2] |
| Returns   | Array | Reshaped array          |

**Example**:

```js
import { reshape } from 'openmadness';

reshape([1, 2, 3, 4], [2, 2]);
// Result: [[1, 2], [3, 4]]
```

### 2. `mad.flatten(array)`

Flattens a nested array into a 1D array:

| Parameter |  Type |     Description    |
|:---------:|:-----:|:------------------:|
| array     | Array | A nested array     |
| Returns   | Array | Flattened 1D array |
| Returns   | Array | Reshaped array     |

**Example**:

```js
import { flatten } from 'openmadness';

flatten([[1, 2], [3, 4]]);
// Result: [1, 2, 3, 4]
```

### 3. `mad.transpose(array)`

Transposes a 2D array (rows become columns):

| Parameter |   Type   |     Description    |
|:---------:|:--------:|:------------------:|
| array     | 2D Array | The matrix to flip |
| Returns   | Array    | Transposed matrix  |
| Returns   | Array    | Reshaped array     |

**Example**:

```js
import { transpose } from 'openmadness';

transpose([[1, 2], [3, 4]]);
// Result: [[1, 3], [2, 4]]
```

## Utilities

These functions assist with array handling and display tasks:

### 1. `mad.clone(array)`

Creates a deep copy of an array:

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

### 2. `mad.print(array)`

Prints the array to the console in a readable format:

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

### 3. `mad.toArray(madArray)`

Converts a mad array into a plain JavaScript array:

| Parameter |    Type    |         Description         |
|:---------:|:----------:|:---------------------------:|
| madArray  | Mad Object | Internal mad representation |
| Returns   | Array      | Plain JavaScript array      |

**Example**:

```js
import { toArray, zeros } from 'openmadness';

const jsArray = toArray(zeros([2, 2]));
// Result: [[0, 0], [0, 0]]
```

