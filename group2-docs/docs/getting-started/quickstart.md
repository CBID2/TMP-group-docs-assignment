---
lang: en-US
title: "Quickstart"
description: "Get to know how to use Openmadness library"
---

# Quick Start

This quickstart tutorial is intended for users new to **OpenMadness**. It introduces the core concepts of the library and demonstrates how to perform basic operations. Whether you're building a game, creating a simulation, or experimenting with procedural generation, this guide will help you get started quickly.

## Creating Your First Simulation

You will learn how to create a simple simulation that moves randomly using Openmadness. This will introduce you to the basic structure of an Openmadness program.


```js
import { Engine, World, Entity, RandomMover } from 'openmadness';

// Step 1: Create a simple 5x5 world with open terrain (represented by 0s)
const terrain = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const world = new World(terrain);

// Step 2: Create an entity with a simple random movement behavior
const player = new Entity({
  name: 'Player',
  x: 2,
  y: 2,
  behavior: new RandomMover()
});

// Step 3: Add the entity to the world
world.addEntity(player);

// Step 4: Create an engine and run the simulation for a few turns
const engine = new Engine(world);

for (let i = 0; i < 5; i++) {
  engine.update();
  console.log(`Turn ${i + 1}: Player is at (${player.x}, ${player.y})`);
}
```

In this example, you:

* Defined a **5x5 grid** of walkable terrain (where `0` might represent a floor tile).

* Placed an entity at the center with a `RandomMover` behavior, which means it will move randomly to adjacent tiles each turn.

* Ran the simulation for 5 turns using `engine.update()`, printing the entity's position after each move.

## **Next Steps**

Congratulations! You just created your first simulation! 👍 Now that you have gotten the basics down, consider picking the following:

* [Guides](/guides/fundamentals/array-elements.md)  
* [Tutorials](/tutorials/fundamentals/basic-arithmetics.md)

::: tip
Got any ideas to improve the guide, check out our CONTRIBUTING guide on [GitHub](https://github.com/Dev-Liz/Product-docs-cohort-1).

:::
