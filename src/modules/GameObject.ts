import Sprite from "./Sprite";
import Map from "./Map";
import { Direction } from "../types/Direction";
import * as gridUtils from '../utils/grid';
import { IGameObjectConfig } from "../interfaces/IGameObject";

export default class GameObject {
    private _name: string;
    private _hasShadow: boolean;
    public objectSprite: Sprite;
    public shadowSprite: Sprite;
    public x: number;
    public y: number;
    public direction: Direction;
    public objectWidth: number;
    public objectHeight: number;
    public shadowWidth: number;
    public shadowHeight: number;
    public objectSpriteimageWidth: number;
    public objectSpriteimageHeight: number;
    public interaction: Record<string, Object>
    public walkable: boolean;
    public isInteracting: boolean;

    readonly OBJECT_WIDTH: number = 64;
    readonly OBJECT_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(config: IGameObjectConfig) {
        this._name = config.name;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.objectWidth = config.width || this.OBJECT_WIDTH;
        this.objectHeight = config.height || this.OBJECT_HEIGHT;
        // this.shadowWidth = config.shadowWidth || this.SHADOW_WIDTH;
        // this.shadowHeight = config.shadowHeight || this.SHADOW_HEIGHT;
        // this.objectSpriteimageWidth = config.objectSpriteimageWidth || 0;
        // this.objectSpriteimageHeight = config.objectSpriteimageHeight || 0;
        this.objectSprite = new Sprite({
            gameObject: this,
            ...config.sprite.object
        })
        this._hasShadow = !!config.sprite.shadow;
        this.shadowSprite = this._hasShadow && new Sprite({
            gameObject: this,
            ...config.sprite.shadow
        });

        this.direction = "down";
        this.interaction = config.interaction;
        this.walkable = config.walkable || false;
    }

    // public draw(ctx: CanvasRenderingContext2D) {
    //     this._hasShadow && this.shadowSprite.draw(ctx);
    //     this.objectSprite.draw(ctx, cameraPerson);
    // }

    public update(arrow: Direction, map: Map) {

    }
    
    public interact(map: Map) {

    }
}