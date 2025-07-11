---
lang: en-US
title: "Average"
description: "Learn how to work with averages in OpenMadness"
---

# Average

Beyond simple arithmetic mean, Openmadness provides sophisticated averaging techniques for statistical analysis, signal processing, and weighted data aggregation. Below is a comprehensive guide to these advanced methods.

## What is the Average?

The average (or mean) is the sum of all elements divided by the number of elements. It represents the central value of a dataset.

## Core Average Methods

### 1. Basic Arithmetic Mean

```js
import { omArray, mean } from "Openmadness";
const data = omArray([2, 4, 6, 8]);
data.mean(); // 5
```

- Axis Support for ND Arrays:

```js
import { omArray, mean } from "Openmadness";
const matrix = omArray([
  [1, 5],
  [3, 7],
]);
matrix.mean(0); // [2, 6] (column-wise)
matrix.mean(1); // [3, 5] (row-wise)
```

### 2. Weighted Average

- Apply weights to values:

```js
import { omArray } from "Openmadness";
const values = omArray([10, 20, 30]);
const weights = omArray([0.2, 0.3, 0.5]);

values.weightedAverage(weights); // (10*0.2 + 20*0.3 + 30*0.5) = 23
```

### 3. Moving Average (Rolling Mean)

- Smooth time-series data with window size:

```js
import { omArray } from "Openmadness";
const stockPrices = omArray([102, 104, 103, 106, 105]);
stockPrices.movingAverage(3); // [null, 103, 104.33, 104.67, 105]
```

Options:

- `padding: 'wrap'|'reflect'|'clamp'`
- `align: 'left'|'center'|'right'`

## Specialized Averages

### 1. Exponential Moving Average (EMA)

- Prioritize recent data with decay factor (α):

```js
import { omArray } from "Openmadness";
const sensorData = omArray([22, 24, 23, 25]);
sensorData.ema(0.5); // [22, 23, 23, 24]
```

Formula:
`EMAₜ = α * current + (1-α) * EMAₜ₋₁`

### 2. Mode & Median

```js
import { omArray, median, mode } from "Openmadness";
omArray([1, 3, 3, 6]).median(); // 3
omArray([1, 2, 2, 3]).mode(); // [2] (multi-modal returns array)
```

### 3. Truncated Mean

- Exclude outliers:

```js
import { omArray, trimmedMean } from "Openmadness";
const examScores = omArray([40, 55, 80, 85, 90, 95]);
examScores.trimmedMean(0.1); // Discard lowest/highest 10% → [55,80,85,90] → 77.5
```

## Multi-Dimensional Averaging

### 1. Layer-wise Averages (3D Arrays)

```js
import { omArray } from "Openmadness";
const tensor = omArray([
  [
    [1, 2],
    [3, 4],
  ], // Layer 0
  [
    [5, 6],
    [7, 8],
  ], // Layer 1
]);

tensor.mean(0); // Per-voxel across layers: [[3,4],[5,6]]
```

### 2. Pooling (Image/Data Reduction)

```js
import { omArray } from "Openmadness";
const image = omArray([
  [10, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 110, 120],
]);

// 2x2 max pooling
image.pool(2, 2, "max"); // [[60, 80], [110, 120]]
```

- Pool Types: `'mean', 'min', 'max'`

### 3. Segmented Averages

- Group data via labels:

```js
import { omArray } from "Openmadness";
const values = omArray([10, 20, 30, 40]);
const labels = omArray(["A", "B", "A", "B"]);

values.groupAverage(labels);
// { A: (10+30)/2=20, B: (20+40)/2=30 }
```

## Advanced Use Cases

### 1. Time-Series Smoothing

- Combine EMA and moving averages:

```js
import { omArray } from "Openmadness";
const rawData = omArray([...]); // Noisy sensor readings (e.g., time-series)
const smoothed = rawData
  .movingAverage(5, { padding: 'reflect' })
  .ema(0.3);

```

### 2. Weighted Spatial Averaging

- Blur image with kernel weights:

```js
import { omArray, convolve } from "Openmadness";
const kernel = omArray([
  [0.05, 0.1, 0.05],
  [0.1, 0.4, 0.1],
  [0.05, 0.1, 0.05],
]);

image.convolve(kernel); // Weighted average per pixel
```

### 3. Statistical Rollups

- Analyze 3D climate data:

```js
import { omArray } from "Openmadness";
const temperatureCube = omArray([...]); // [days×lat×lon]

// Daily global averages
const dailyMeans = temperatureCube.mean([1,2]);

// Monthly zonal averages (axis1=latitude)
const monthlyZones = temperatureCube
  .reshape(12, 30, 180, 360) // Group into months
  .mean([2,3]);

```

## Performance & Best Practices

1. Lazy Chaining:

```js
import { omArray } from "Openmadness";
largeTensor.slice(...).flatten().mean(); // Minimal intermediates
```

2. Precomputed Weights: Cache weight arrays for repeated calculations.
3. Typed Arrays: Use `Float32Array` for large datasets.

## Edge Cases

1. Empty Inputs: `.mean()` returns `NaN` for empty arrays.
2. All-NaN Segments: Omitted from calculations with warning.
3. Uniform Weights: `weightedAverage()` defaults to arithmetic mean if weights sum to 0.

