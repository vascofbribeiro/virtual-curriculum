import Sprite from "./Sprite";
import Map from "./Map";
import { Direction } from "../types/Direction";
import { IGameObjectConfig } from "../interfaces/configs/IGameObjectConfig";
import { IState } from "../interfaces/modules/IState";
import { IEvent } from "../interfaces/modules/IEvent";
import GameEvent from './GameEvent';
import Door from './Door';

export default class GameObject {
    private _hasShadow: boolean;
    public objectSprite: Sprite;
    public shadowSprite: Sprite;
    public x: number;
    public y: number;
    public direction: Direction;
    public objectWidth: number;
    public collisionOffset: {
        width: number;
        height: number;
    }
    public objectHeight: number;
    public shadowWidth: number;
    public shadowHeight: number;
    public objectSpriteimageWidth: number;
    public objectSpriteimageHeight: number;
    public interactions: Array<any>;
    public label: string;
    public walkable: boolean;
    public isInteracting: boolean;
    public isMounted: boolean;
    public isPlayer: boolean;
    public id: string;
    public behaviorLoop: Array<IEvent>;
    public behaviorLoopIndex: number;
    public isIdle: boolean;
    public interactionBox: any;
    public interactionIcon?: {
        far?: string;
        nearby?: string;
    } | undefined;
    public door: Door | null;
    public isHidden: boolean;
    public isCameraView: boolean;
    public hasInteracted: boolean;

    readonly OBJECT_WIDTH: number = 64;
    readonly OBJECT_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(config: IGameObjectConfig) {
        this.isHidden = config.isHidden;
        this.isMounted = false;
        this.isPlayer = config.isPlayer;
        this.id = null;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.objectWidth = config.width || this.OBJECT_WIDTH;
        this.objectHeight = config.height || this.OBJECT_HEIGHT;
        this.collisionOffset = {
            width: (config.collisionOffset && config.collisionOffset.width) || 0,
            height: (config.collisionOffset && config.collisionOffset.height) || 0
        }
        this.interactionIcon = config.interactionIcon;
        this.objectSprite = new Sprite(this, config.sprite.object);
        this._hasShadow = !!config.sprite.shadow;
        this.shadowSprite = this._hasShadow && new Sprite(this, config.sprite.shadow);

        this.door = config.door ? new Door(this, config.door) : null;

        this.direction = "down";
        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;
        this.walkable = config.walkable || false;
        this.interactions = config.interactions;
        this.label = config.label;
        this.isCameraView = config.isCameraView;
        this.hasInteracted = false;
    }

    public mount(map: Map) {
        this.isMounted = true;
        map.addSpaceTaken(this.x + this.collisionOffset.width, this.y + this.collisionOffset.height);

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

    // Only for extension purposes
    public drawInteractionBox() {

    }
}