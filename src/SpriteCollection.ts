import { SpriteOptions } from 'src/SpriteOptions';

export type SpriteCollection<T extends string> = { [key in T]?: SpriteOptions };
