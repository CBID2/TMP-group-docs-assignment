---
title: "Logic and Filters"
description: "Learn how to work with logic and filters in Openmadness"
---

# Logic and Filters: Extracting What You Need
Sometimes, you only want part of your data, such as a slice, a condition, or a masked result. Openmadness is designed to make this intuitive.

### Example: Filter Values
Let’s find all values greater than 15:

```js
import { omArray, filter, toArray } from 'openmadness';
const data = omArray([10, 20, 30]);
const filtered = data.filter((val) => val > 15);
console.log(filtered.toArray()); 
//Output: [20, 30]

```
