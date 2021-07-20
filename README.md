# What is this?

Hello, there is my mini library for grouping your sprites into one storage.

# What problem it solves?

If you need to group your sprites into readable objects, that library is for you. You can define your own sprite chunks
and get their data as:

- Top/Bottom Left/Right Positions
- Width
- Height

I think, that can improve your developing experience when you provide simple project

# NPM Install

`npm i spritejs --save`

# Basic Usage Example

```ts
import { SpriteCollection, SpriteStore } from 'sprite-collection';

// Init collection namespace and data
enum Heroes {
    ORC = 'ORC',
    MAGE = 'MAGE',
    WARRIOR = 'WARRIOR'
}

const collection: SpriteCollection<Heroes> = {
    [Heroes.MAGE]: {
        x: 0,
        y: 0,
        width: 10,
        height: 20
    },
    ...
};

// Create store
const spriteStore = new SpriteStore(collection);

// Get from store, what you need
const mageSprite = spriteStore.getByName(Heroes.MAGE);
console.log(mageSprite);

// -> SpriteElement { name: 'MAGE', x: 0, y: 0, width: 10, height: 20 }

// Get name
console.log(mageSprite.getName());

// -> 'MAGE'

// Get coords
console.log(mageSprite.getLeftTop());
console.log(mageSprite.getRightTop());
console.log(mageSprite.getLeftBottom());
console.log(mageSprite.getRightBottom());

// -> SpriteCoordinate { x: 0, y: 0 }
// -> SpriteCoordinate { x: 20, y: 0 }
// -> SpriteCoordinate { x: 0, y: 10 }
// -> SpriteCoordinate { x: 20, y: 10 }

// Get width/height
console.log(mageSprite.getWidth());
console.log(mageSprite.getHeight());
// -> 10
// -> 20

// Add new sprite to store
spriteStore.add(Heroes.ORC, { x: 10, y: 0, width: 30, height: 20 });

console.log(spriteStore.getByName(Heroes.ORC));

// -> SpriteElement { name: 'ORC', x: 10, y: 0, width: 30, height: 20 }

```



