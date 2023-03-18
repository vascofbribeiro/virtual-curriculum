import { ISpriteConfig } from '../interfaces/configs/ISpriteConfig';
import { getGridPosition } from '../utils/grid';
import GameObject from './GameObject';
import defaultAnimations from '../configs/sprites/defaults';
import CameraView from './CameraView';

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
    private _verticalMove: number;
    private _imageWidth: number;
    private _imageHeight: number;
    private _gameObject: GameObject;

    constructor(gameObject: GameObject, config: ISpriteConfig) {
        this._gameObject = gameObject;
        this._image = new Image();
        this._image.src = config.src;

        if(this._gameObject.interactionIcon) {
            this._interactionImages = {};
            this._interactionImages.far = new Image();
            this._interactionImages.nearby = new Image();
            this._interactionImages.far.src = gameObject.interactionIcon.far || gameObject.interactionIcon.nearby;
            this._interactionImages.nearby.src = gameObject.interactionIcon.nearby || '';
        }

        this._image.onload = () => {
            this._isLoaded = true;
        }

        this._width = config.width;
        this._height = config.height;
        this._imageWidth = config.imageWidth || config.width;
        this._imageHeight = config.imageHeight || config.height;
        this._animations = config.animations || defaultAnimations;

        this._framesToChange = 8;
        this._verticalMove = 0;
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
            this._verticalMove = this._verticalMove === 5 ? 0 : this._verticalMove+1;

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

    draw(ctx: CanvasRenderingContext2D, cameraView: CameraView, miniMe: GameObject) {
        const x = this._gameObject.x + getGridPosition(window.canvasMultiplier.x) - cameraView.getXView();
        const y = this._gameObject.y + getGridPosition(window.canvasMultiplier.y) - cameraView.getYView();

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
            // if(miniMe.x >= this._gameObject.x && miniMe.x < this._gameObject.x + this._gameObject.objectWidth &&
            //     miniMe.y <= this._gameObject.y + 80 && miniMe.y > this._gameObject.y /* 5 squares down. Change for a value that makes sense*/) {
            //         this._interactionImages.show = (this._interactionImages.nearby || this._interactionImages.far || null);

            //         ctx.drawImage(
            //             this._interactionImages.show,
            //             0,
            //             0,
            //             32,
            //             32,
            //             x + (this._gameObject.objectWidth/2) - (this._interactionImages.show.width/2),
            //             y - 16,
            //             32,
            //             32
            //         );
            // } else {
                this._interactionImages.show = this._interactionImages.far || null;
                
                !this._gameObject.hasInteracted && ctx.drawImage(
                    this._interactionImages.show,
                    0,
                    0,
                    32,
                    32,
                    x + (this._gameObject.objectWidth/2) - (this._interactionImages.show.width/2),
                    y - 14  + this._verticalMove,
                    32,
                    32
                );
            //}
        }
        this.updateAnimationProgress();
    }

    public get isLoaded() {
        return this._isLoaded;
    }
}