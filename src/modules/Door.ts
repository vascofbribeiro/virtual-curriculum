import { getGridPosition } from '../utils/grid';
import GameObject from './GameObject';
import defaultAnimations from '../configs/sprites/defaults';
import { IDoorConfig } from '../interfaces/configs/IDoorConfig';

export default class Door {
    private _currentAnimation: number;
    private _currentAnimationFrame: number;
    private _image: HTMLImageElement;
    private _interactionImages: Record<string, HTMLImageElement | null>;
    public offsetX: number;
    public offsetY: number;
    public width: number;
    public height: number;
    private _isLoaded: boolean;
    private _framesToChange: number;
    private _framesToChangeProgress: number;
    private _imageWidth: number;
    private _imageHeight: number;
    private _gameObject: GameObject;
    private _shouldOpen: boolean;
    
    constructor(gameObject: GameObject, config: IDoorConfig) {
        this._gameObject = gameObject;
        this._image = new Image();
        this._image.src = config.src;

        this._image.onload = () => {
            this._isLoaded = true;
        }

        this.offsetX = config.offsetX;
        this.offsetY = config.offsetY;
        this.width = config.width;
        this.height = config.height;
        this._imageWidth = config.imageWidth || config.width;
        this._imageHeight = config.imageHeight || config.height;

        this._framesToChange = 4;
        this._framesToChangeProgress = this._framesToChange;
        
        this._currentAnimationFrame = 2;
        this._shouldOpen = false;
    }

    updateAnimationProgress() {
        if(this._framesToChangeProgress > 0) { 
            this._framesToChangeProgress--;
        }
        else {
            this._currentAnimationFrame++
            this._framesToChangeProgress = this._framesToChange;

            if(this._shouldOpen) {
                this._currentAnimationFrame = this._currentAnimationFrame <= 5 ? this._currentAnimationFrame : 5;
            } else {
                this._currentAnimationFrame = 0
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D, cameraView: GameObject, miniMe: GameObject) {
        const x = this._gameObject.x + this.offsetX + getGridPosition(window.canvasMultiplier.x) - cameraView.x;
        const y = this._gameObject.y + this.offsetY + getGridPosition(window.canvasMultiplier.y) - cameraView.y;

        // const [frameX, frameY] = this.frame;
        // console.log('DRAW DOOR', this._gameObject.x, x);
        // console.log('DRAW DOOR', this._gameObject.y, y);
        this._isLoaded && ctx.drawImage(
            this._image,
            this._currentAnimationFrame * this._imageWidth, //left cut //FIX THIS FOR OTHER GAME OBJECTS
            0,  //top cut
            this._imageWidth,
            this._imageHeight,
            x,
            y,
            this.width,
            this.height
        )
      
        this.updateAnimationProgress();
    }

    public open() {
        this._shouldOpen = true;
    }

    public close() {
        this._shouldOpen = false;
    }

    public get isLoaded() {
        return this._isLoaded;
    }
}