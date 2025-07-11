---
title: "Making sense of Data"
description: "Learn how to work with averages, variance, and making sense of data in Openmadness"
---

# Averages, Variance, and Making Sense of Data
Numbers are just numbers until you make sense of them. Openmadness helps you understand your data through built-in statistics.

### Example: Sum
Let's start with getting the **sum** of all your numbers. It's as straightforward as calling .sum():

```js
import { omArray, sum } from 'openmadness';

const numbers = omArray(10, 20, 30, 40);
const totalSum = numbers.sum();
console.log(totalSum); //Output: 100

```
### Example: Mean (Average)
The mean is simply the average of your numbers. It gives you a single value that represents the "center" of your data. To find the mean, you use **.mean()**:

```js
import { omArray, mean } from 'openmadness';
const sample = omArray(10, 20, 30);
console.log(sample.mean()); //Output: 20

```

### Example: Max and Min

Sometimes you need to find the **highest** or **lowest** value in your data. Openmadness provides .max() and .min() for this purpose:

```js
import { omArray, max, min } from 'openmadness';
const scores = omArray(85, 92, 78, 95, 88);
const highestScore = scores.max();
const lowestScore = scores.min();

console.log(`Highest score: ${highestScore}`); //Output: Highest score: 95
console.log(`Lowest score: ${lowestScore}`);   //Output: Lowest score: 78

```

These operations help you quickly grasp the essence of your numerical data, whether you're looking for totals, averages, or the extremes.
