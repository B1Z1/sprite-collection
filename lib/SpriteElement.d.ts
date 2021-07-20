import { SpriteCoordinate } from 'src/SpriteCoordinate';
export declare class SpriteElement<T> {
    private readonly name;
    private readonly x;
    private readonly y;
    private readonly width;
    private readonly height;
    constructor(name: T, x: number, y: number, width: number, height: any);
    getName(): T;
    getLeftTop(): SpriteCoordinate;
    getRightTop(): SpriteCoordinate;
    getLeftBottom(): SpriteCoordinate;
    getRightBottom(): SpriteCoordinate;
    getWidth(): number;
    getHeight(): number;
}
