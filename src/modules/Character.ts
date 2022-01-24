import Sprite from "./Sprite";
import GameObject from './GameObject';
import Map from "./Map";
import { nextPosition } from "../utils/grid";

type Direction = {
    axis: string;
    change: number;
}

export default class Character extends GameObject {
    private _movingProgressRemaining: number;
    private _directionUpdate: {
        up: Direction,
        down: Direction,
        left: Direction,
        right: Direction
    };
    private _isPlayer: boolean;

    readonly CHARACTER_WIDTH: number = 64;
    readonly CHARACTER_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(config: { x?: number, y?: number, name: string, hasShadow?: boolean, objectSpriteSrc: string, shadowSpriteSrc: string, isPlayer: boolean }) {
        super(config);
        this._movingProgressRemaining = 0;

        this._isPlayer = config.isPlayer

        this._directionUpdate = {
            up: {
                axis: "y",
                change: -1
            },
            down: {
                axis: "y",
                change: 1
            },
            left: {
                axis: "x",
                change: -1
            },
            right: {
                axis: "x",
                change: 1
            },
        }
    }

    // FIX FUNCTION NOT GETTING CORRECT POSITION!!!!

    public update(arrow: "up" | "down" | "left" | "right" | undefined, map: Map) {
        this.updatePosition();
        this.updateSprite(arrow);
        if(this._isPlayer && this._movingProgressRemaining === 0 && arrow) {
            console.log(arrow);
            console.log(nextPosition(this.x, this.y, this.direction))
            console.log(this.x,this.y)
            this.direction = arrow;
            this._movingProgressRemaining = 16;
        }
    }

    public updatePosition() {
        if(this._movingProgressRemaining > 0) {
            // Typescript workaround
            if(this.direction === 'up' || this.direction === 'down') {
                this.y += this._directionUpdate[this.direction].change
            }
            else if(this.direction === 'left' || this.direction === 'right'){
                this.x += this._directionUpdate[this.direction].change
            }

            this._movingProgressRemaining--
        }
    }

    public updateSprite(arrow: "up" | "down" | "left" | "right" | undefined) {
        if(this._isPlayer && this._movingProgressRemaining === 0 && !arrow) {  
            this.objectSprite.setAnimation(`idle-${this.direction}`);
            return;
        }

        if(this._movingProgressRemaining > 0)  
            this.objectSprite.setAnimation(`walk-${this.direction}`);
        
    }
}