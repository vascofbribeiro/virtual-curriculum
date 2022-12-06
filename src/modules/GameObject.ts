import Sprite from "./Sprite";
import Map from "./Map";
import { Direction } from "../types/Direction";
import * as gridUtils from '../utils/grid';
import { IGameObjectConfig } from "../interfaces/IGameObject";
import { IState } from "../interfaces/IState";
import { mapsConfig } from "../configs/maps";
import { IBehavior } from "../interfaces/IBehavior";
import GameEvent from './GameEvent';

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
    public isMounted: boolean;
    public isPlayer: boolean;
    public id: string;
    public behaviorLoop: Array<IBehavior>;
    public behaviorLoopIndex: number;
    public isIdle: boolean;

    readonly OBJECT_WIDTH: number = 64;
    readonly OBJECT_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(config: IGameObjectConfig) {
        this._name = config.name;
        this.isMounted = false;
        this.isPlayer = config.isPlayer;
        this.id = null;
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
        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;
        this.interaction = config.interaction;
        this.walkable = config.walkable || false;
    }

    public mount(map: Map) {
        console.log('is mounting');
        // Should object mount ????
        this.isMounted = true;
        map.addSpaceTaken(this.x, this.y);

        //set delay before behavior loop start
        setTimeout(() => {
            this.doBehavior(map);
        }, 10)
    }

    // public draw(ctx: CanvasRenderingContext2D) {
    //     this._hasShadow && this.shadowSprite.draw(ctx);
    //     this.objectSprite.draw(ctx, cameraPerson);
    // }

    public update(state: IState) {

    }
    
    public async doBehavior(map: Map) {
        if(map.isInteracting || this.behaviorLoop.length === 0 || this.isIdle)
            return;

        let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;

        // Create an event instance for the game object
        const eventHandler = new GameEvent({map, event: eventConfig});
        await eventHandler.init();

        this.behaviorLoopIndex = 
            this.behaviorLoopIndex + 1 === this.behaviorLoop.length ? 0 : this.behaviorLoopIndex + 1;

        this.doBehavior(map);
    }

    public interact(map: Map) {

    }

    public startBehavior(state: any, behavior: IBehavior) {

    }
}