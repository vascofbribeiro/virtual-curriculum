import { ISpriteConfig } from '../interfaces/ISpriteConfig';
import { ICharacter } from '../interfaces/ICharacter';

export default class Sprite {
    private _animations: object;
    private _currentAnimation: string;
    private _currentAnimationFrame: 0;
    private _image: HTMLImageElement;
    private _width: number;
    private _height: number;
    private _isLoaded: boolean;
    private _characterObject: {
        x: number;
        y: number
    };

    constructor(config?: ISpriteConfig) {
        // Sould be received from config
        this._characterObject = config.characterObject;
        this._image = new Image();
        this._image.src = config.src;
        this._image.onload = () => {
            this._isLoaded = true;
        }

        this._width = config.width;
        this._height = config.height;

        // These animations can be configurable, add it later
        this._animations = {
            idleDown: [
                [0,0]
            ],
            walkDown: [
                [0,0], [0,1], [0,2], [0,3]
            ],
        }

        this._currentAnimation = 'idleDown';
        this._currentAnimationFrame = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this._characterObject.x * 16 - 8;
        const y = this._characterObject.y * 16;

        this._isLoaded && ctx.drawImage(
            this._image, 
            0, //left cut
            0,  //top cut
            this._width,
            this._height,
            x,
            y,
            32,
            32
        )
    }

    public get isLoaded() {
        return this._isLoaded;
    }
}