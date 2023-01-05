import { getGridPosition } from '../utils/grid';
import GameObject from './GameObject';

export default class SpriteCharacter {
    private _animations: {
        [key: string]: Array<Array<number>> 
    };
    private _currentAnimation: string;
    private _currentAnimationFrame: number;
    private _image: HTMLImageElement;
    private _interactionImages: Record<string, HTMLImageElement | null>;
    private _width: number;
    private _height: number;
    private _isLoaded: boolean;
    private _framesToChange: number;
    private _framesToChangeProgress: number;
    private _imageWidth: number;
    private _imageHeight: number;
    private _gameObject: GameObject;

    constructor(config: { gameObject: GameObject, src: string, width: number, height: number, imageWidth?: number, imageHeight?: number }) {
        // Sould be received from config
        this._gameObject = config.gameObject;
        this._image = new Image();
        this._image.src = config.src;

        if(this._gameObject.interactionIcon) {
            this._interactionImages = {};
            this._interactionImages.far = new Image();
            this._interactionImages.nearby = new Image();
            this._interactionImages.far.src = config.gameObject.interactionIcon.far || config.gameObject.interactionIcon.nearby;
            this._interactionImages.nearby.src = config.gameObject.interactionIcon.nearby || '';
        }

        this._image.onload = () => {
            this._isLoaded = true;
        }

        this._width = config.width;
        this._height = config.height;
        this._imageWidth = config.imageWidth || config.width;
        this._imageHeight = config.imageHeight || config.height;

        // These animations can be configurable, add it later
        this._animations = this._gameObject.isPlayer ? {
            'idle-down': [ [0,0] ],
            'idle-left': [ [2,0] ],
            'idle-right': [ [0,1] ],
            'idle-up': [ [1,0] ],
            'walk-down': [ [18,2], [19,2], [20,2], [21,2], [22,2], [23,2] ],
            'walk-left': [ [12,2], [13,2], [14,2], [15,2], [16,2], [17,2] ],
            'walk-right': [ [0,2], [1,2], [2,2], [3,2], [4,2], [5,2] ],
            'walk-up': [ [6,2], [7,2], [8,2], [9,2], [10,2], [11,2] ],
        } : {
            'idle-down': [ [0,0] ],
            'idle-left': [ [0,0] ],
            'idle-right': [ [0,0] ],
            'idle-up': [ [0,0] ],
            'walk-down': [ [0,0] ],
            'walk-left': [ [0,0] ],
            'walk-right': [ [0,0] ],
            'walk-up': [ [0,0] ],
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

    draw(ctx: CanvasRenderingContext2D, cameraView: GameObject, miniMe: GameObject) {
        const x = this._gameObject.x + getGridPosition(window.canvasMultiplier.x) - cameraView.x;
        const y = this._gameObject.y + getGridPosition(window.canvasMultiplier.y) - cameraView.y;

        const [frameX, frameY] = this.frame;

        this._isLoaded && ctx.drawImage(
            this._image,
            frameX * 16, //left cut //FIX THIS FOR OTHER GAME OBJECTS
            frameY * 32,  //top cut
            this._imageWidth,
            this._imageHeight,
            x,
            y,
            this._width,
            this._height
        )


        // Draw interaction item at the top
        if(this._isLoaded && this._interactionImages) {
            if(miniMe.x >= this._gameObject.x && miniMe.x < this._gameObject.x + this._gameObject.objectWidth &&
                miniMe.y <= this._gameObject.y + 80 /* 5 squares down. Change for a value that makes sense*/) {
                this._interactionImages.show = this._interactionImages.nearby || this._interactionImages.far || null;
            } else {
                this._interactionImages.show = this._interactionImages.far || null
            }
            //console.log('COORD', miniMe.x, this._gameObject.x)
            
            ctx.drawImage(
                this._interactionImages.show,
                0,
                0,
                32,
                32,
                x + (this._gameObject.objectWidth/2) - (this._interactionImages.show.width/2),
                y - 16,
                32,
                32
            );

            // ctx.font = "8px Comic Sans MS"
            // ctx.fillText('6 years', x, y);
        }
        this.updateAnimationProgress();
    }

    public get isLoaded() {
        return this._isLoaded;
    }
}