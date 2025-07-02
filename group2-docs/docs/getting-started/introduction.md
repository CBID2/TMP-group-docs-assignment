---
lang: en-US
title: "Introduction"
description: "This guide will introduce you to the fundamentals of openmadness"
---


# 👋 Introduction

![openmadness-banner](../assets/openmadness-banner.png)

[[toc]]


## Overview

Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress. It was built for learners, tinkerers, and developers who enjoy working with data in a simple way.

In this guide, you’ll learn what Openmadness is, who it’s for, and how it can make working with numbers in JavaScript feel smooth and even fun.

## What You’ll Learn

- What Openmadness is and why it exists

- Who the tool is built for

- What you can expect to do with it

- Where to go next after this guide



## Who Should Use This Guide

This guide is for:

- New developers learning JavaScript

- People working with arrays or numbers who want easier tools

- Anyone looking for a lightweight library with a “NumPy feel” for JavaScript


::: important Before You Begin

To follow along with Openmadness, you should:

- Know a little bit of JavaScript (basic functions and arrays)

- Have Node.js installed (for Option 1 in the install guide)

- Be ready to explore and test some simple code
:::


## What Is Openmadness?

Openmadness is not a copy of NumPy, but it was inspired by it. It gives you tools like .sum(), .mean(), .transpose(), and .flatten() in a simple and easy way, using JavaScript.

It helps you do things like:

```js
const matrix = omArray([
  [1, 2],
  [3, 4]
]);

const result = matrix.transpose().sum();

```

The code above transposes a matrix and adds up all the numbers.

Want to try it out for yourself? 

Head over to the Quickstart Guide to run your first example.
