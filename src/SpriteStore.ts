import { SpriteCollection } from 'src/SpriteCollection';
import { SpriteOptions } from 'src/SpriteOptions';
import { SpriteElement } from 'src/SpriteElement';

export class SpriteStore<T extends string> {
    private readonly spriteCollectionMap: Map<T, SpriteElement<T>> = new Map<T, SpriteElement<T>>();

    constructor(
        spriteCollection: SpriteCollection<T>
    ) {
        this.setMap(spriteCollection);
    }

    add(key: T, options: SpriteOptions): void {
        const element = this.convertOptionsToElement(key, options);

        this.spriteCollectionMap.set(key, element);
    }

    getByName(name: T): SpriteElement<T> {
        return this.spriteCollectionMap.get(name);
    }

    private setMap(spriteCollection: SpriteCollection<T>): void {
        for (const key of Object.keys(spriteCollection)) {
            const options: SpriteOptions = spriteCollection[key];
            const element = this.convertOptionsToElement(key as T, options);

            this.spriteCollectionMap.set(key as T, element);
        }
    }

    private convertOptionsToElement(key: T, options: SpriteOptions): SpriteElement<T> {
        return new SpriteElement<T>(
            key,
            options.x,
            options.y,
            options.width,
            options.height
        );
    }
}
