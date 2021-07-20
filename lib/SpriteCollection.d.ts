import { SpriteOptions } from 'src/SpriteOptions';
export declare type SpriteCollection<T extends string> = {
    [key in T]?: SpriteOptions;
};
