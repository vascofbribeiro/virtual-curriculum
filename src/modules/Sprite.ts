import { ISpriteConfig } from '../interfaces/ISpriteConfig';
import { ICharacter } from '../interfaces/ICharacter';
import { getGridPosition } from '../utils/grid';

export default class Sprite {
    private _animations: {
        [key: string]: Array<Array<number>> 
    };
    private _currentAnimation: string;
    private _currentAnimationFrame: number;
    private _image: HTMLImageElement;
    private _width: number;
    private _height: number;
    private _isLoaded: boolean;
    private _framesToChange: number;
    private _framesToChangeProgress: number;
    private _gameObject: {
        x: number;
        y: number
    };

    constructor(config?: ISpriteConfig) {
        // Sould be received from config
        this._gameObject = config.characterObject;
        this._image = new Image();
        this._image.src = config.src;
        this._image.onload = () => {
            this._isLoaded = true;
        }

        this._width = config.width;
        this._height = config.height;

        // These animations can be configurable, add it later
        this._animations = {
            'idle-down': [ [0,0] ],
            'idle-left': [ [0,1] ],
            'idle-right': [ [0,2] ],
            'idle-up': [ [0,3] ],
            'walk-down': [ [1,0], [2,0], [3,0], [2,0] ],
            'walk-left': [ [1,1], [2,1], [3,1], [2,1] ],
            'walk-right': [ [1,2], [2,2], [3,2], [2,2] ],
            'walk-up': [ [1,3], [2,3], [3,3], [2,3] ],

        }

        this._framesToChange = 8;
        this._framesToChangeProgress = this._framesToChange;

        this._currentAnimation = 'walk-right';
        this._currentAnimationFrame = 0;
    }

    get frame() {
        console.log(this._currentAnimation);
        return this._animations[this._currentAnimation][this._currentAnimationFrame]
    }

    updateAnimationProgress() {
        if(this._framesToChangeProgress > 0) { 
            this._framesToChangeProgress--;
        }
        else {
            this._currentAnimationFrame++
            this._framesToChangeProgress = this._framesToChange;

            this._currentAnimationFrame = this._animations[this._currentAnimation][this._currentAnimationFrame] ? this._currentAnimationFrame : 0;
        }
    }

    setAnimation(key: string) {
        if(this._currentAnimation !== key) {
            this._currentAnimation = key;
            this._currentAnimationFrame = 0;
            this._framesToChangeProgress = this._framesToChange;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        const x = this._gameObject.x - 8;
        const y = this._gameObject.y;

        const [frameX, frameY] = this.frame;

        this._isLoaded && ctx.drawImage(
            this._image, 
            frameX * 64, //left cut
            frameY * 64,  //top cut
            this._width,
            this._height,
            x,
            y,
            32,
            32
        )

        this.updateAnimationProgress();
    }

    public get isLoaded() {
        return this._isLoaded;
    }
}