import { SpriteCollection, SpriteStore } from 'src';

enum AllHeroes {
    ORC = 'ORC',
    MAGE = 'MAGE',
    WARRIOR = 'WARRIOR'
}

const collection: SpriteCollection<AllHeroes> = {
    [AllHeroes.MAGE]: {
        x: 0,
        y: 0,
        width: 10,
        height: 20
    }
};

const spriteStore = new SpriteStore(collection);

spriteStore.add(AllHeroes.ORC, { x: 10, y: 0, width: 30, height: 20 });
spriteStore.add(AllHeroes.WARRIOR, { x: 30, y: 0, width: 40, height: 20 });

const mageSprite = spriteStore.getByName(AllHeroes.MAGE);

console.log(mageSprite.getName());
console.log(mageSprite.getLeftTop());
console.log(mageSprite.getRightTop());
console.log(mageSprite.getRightBottom());
console.log(mageSprite.getLeftBottom());
console.log(mageSprite.getWidth());
console.log(mageSprite.getHeight());
