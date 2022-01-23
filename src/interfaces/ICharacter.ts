import { ISprite } from './ISprite';

export interface ICharacter {
    _ctx: CanvasRenderingContext2D;
    _name: string;
    _characterSprite: ISprite;
    _shadowSprite: ISprite;
    _sprite: ISprite
    _x: number;
    _y: number;
}