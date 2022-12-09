import Sprite from "./Sprite";
import Map from "./Map";
import { Direction } from "../types/Direction";
import { IGameObjectConfig } from "../interfaces/configs/IGameObjectConfig";
import { IState } from "../interfaces/modules/IState";
import { IEvent } from "../interfaces/modules/IEvent";
import GameEvent from './GameEvent';

export default class GameObject {
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
    public interactions: Array<any>
    public walkable: boolean;
    public isInteracting: boolean;
    public isMounted: boolean;
    public isPlayer: boolean;
    public id: string;
    public behaviorLoop: Array<IEvent>;
    public behaviorLoopIndex: number;
    public isIdle: boolean;

    readonly OBJECT_WIDTH: number = 64;
    readonly OBJECT_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(config: IGameObjectConfig) {
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
        this.walkable = config.walkable || false;
        this.interactions = config.interactions;
    }

    public mount(map: Map) {
        console.log('is mounting');
        // Should object mount ????
        this.isMounted = true;
        map.addSpaceTaken(this.x, this.y);

        //set delay before behavior loop start to avoid bugs
        setTimeout(() => {
            this.doBehavior(map);
        }, 10)
    }

    // Only for extension purposes
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
    
    // Only for extension purposes
    public interact(map: Map) {

    }
    
    // Only for extension purposes
    public startBehavior(state: IState, behavior: IEvent) {

    }
}