import { ICharacter } from './ICharacter';

export interface ISpriteConfig {
    characterObject: {
        x: number,
        y: number
    };
    src?: string;
    animations?: object;
    width?: number;
    height?: number;
}