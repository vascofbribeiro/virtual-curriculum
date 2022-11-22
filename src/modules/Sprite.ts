import { getGridPosition } from '../utils/grid';
import GameObject from './GameObject';

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
    private _imageWidth: number;
    private _imageHeight: number;
    private _gameObject: {
        x: number;
        y: number
    };

    constructor(config: { gameObject: GameObject, src: string, width: number, height: number, imageWidth: number, imageHeight: number }) {
        // Sould be received from config
        this._gameObject = config.gameObject;
        this._image = new Image();
        this._image.src = config.src;
        this._image.onload = () => {
            this._isLoaded = true;
        }

        this._width = config.width;
        this._height = config.height;
        this._imageWidth = config.imageWidth;
        this._imageHeight = config.imageHeight;

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

        this._currentAnimation = 'idle-down';
        this._currentAnimationFrame = 0;
    }

    get frame() {
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
        if(this._currentAnimation !== key && !key.includes("interaction")) {
            this._currentAnimation = key;
            this._currentAnimationFrame = 0;
            this._framesToChangeProgress = this._framesToChange;
        }
    }

    draw(ctx: CanvasRenderingContext2D, cameraView: GameObject) {
        const x = this._gameObject.x - getGridPosition(0.5) + getGridPosition(10.5) - cameraView.x;
        const y = this._gameObject.y + getGridPosition(6) - cameraView.y;

        const [frameX, frameY] = this.frame;

        this._isLoaded && ctx.drawImage(
            this._image, 
            frameX * 64, //left cut
            frameY * 64,  //top cut
            this._imageWidth,
            this._imageHeight,
            x,
            y,
            this._width,
            this._height
        )

        this.updateAnimationProgress();
    }

    public get isLoaded() {
        return this._isLoaded;
    }
}