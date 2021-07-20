import { SpriteCollection } from 'src/SpriteCollection';
import { SpriteOptions } from 'src/SpriteOptions';
import { SpriteElement } from 'src/SpriteElement';
export declare class SpriteStore<T extends string> {
    private readonly spriteCollectionMap;
    constructor(spriteCollection: SpriteCollection<T>);
    add(key: T, options: SpriteOptions): void;
    getByName(name: T): SpriteElement<T>;
    private setMap;
    private convertOptionsToElement;
}
