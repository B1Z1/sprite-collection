import { SpriteCoordinate } from 'src/SpriteCoordinate';

export class SpriteElement<T> {
    constructor(
        private readonly name: T,
        private readonly x: number,
        private readonly y: number,
        private readonly width: number,
        private readonly height
    ) {
    }

    getName(): T {
        return this.name;
    }

    getLeftTop(): SpriteCoordinate {
        return new SpriteCoordinate(this.x, this.y);
    }

    getRightTop(): SpriteCoordinate {
        return new SpriteCoordinate(this.x + this.width, this.y);
    }

    getLeftBottom(): SpriteCoordinate {
        return new SpriteCoordinate(this.x, this.y + this.height);
    }

    getRightBottom(): SpriteCoordinate {
        return new SpriteCoordinate(this.x + this.width, this.y + this.height);
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}
