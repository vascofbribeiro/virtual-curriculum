import { ICharacter } from '../interfaces/ICharacter';
import GameObject from './GameObject';
import Map from "./Map";

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
    private _hasMapChanged: boolean;
    private _hasInterected: boolean;

    constructor(config: ICharacter) {
        super(config);
        this._movingProgressRemaining = 0;

        this._isPlayer = config.isPlayer;
        this._hasMapChanged = false;
        this._hasInterected = false;
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

    public update(key: "up" | "down" | "left" | "right" | "interaction" | undefined, map: Map) {
        this.updatePosition(map);

        this.updateSprite(key);
        // this._isPlayer && key === "interaction" && this.canInteract(map);

        if(this._isPlayer && this._movingProgressRemaining === 0) {
            this._hasMapChanged = false;
        }
        if(this._isPlayer && this._movingProgressRemaining === 0 && key && key !== 'interaction') {
            console.log(this.x, this.y)
            this.direction = key;
            this._movingProgressRemaining = 16;
        }
    }

    public interact(map: Map) {
         if(this._isPlayer && !this._hasInterected) {
            const interaction = map.getInteractionOnSquare(this.x, this.y);
            if(interaction) {
                console.log('Interaction', interaction)
                alert(interaction.message);
                this._hasInterected = true;
            }
        }
    }

    public updatePosition(map: Map) {
        if(this._movingProgressRemaining > 0) {
            // Typescript workaround
            // Only walk if space is not taken: walls or other characters
            if(!map.isSpaceTaken(this.x, this.y, this.direction)) {
                if(this.direction === 'up' || this.direction === 'down') {
                    this.y += this._directionUpdate[this.direction].change
                }
                else if(this.direction === 'left' || this.direction === 'right'){
                    this.x += this._directionUpdate[this.direction].change
                }
            }
            const nextMap = map.nextMap(this.x, this.y);
            if(nextMap) {
                !this._hasMapChanged && map.changeMap(nextMap);
                this._hasMapChanged = true;
            }

            this._movingProgressRemaining--
        }
    }

    public updateSprite(arrow: "up" | "down" | "left" | "right" | "interaction" | undefined) {
        if(arrow !== "interaction") {
            if(this._isPlayer && this._movingProgressRemaining === 0 && !arrow) {  
                this.objectSprite.setAnimation(`idle-${this.direction}`);
                return;
            }

            if(this._movingProgressRemaining > 0)  
                this.objectSprite.setAnimation(`walk-${this.direction}`);
        }
    }
}