import { IBehavior } from '../interfaces/IBehavior';
import { ICharacter } from '../interfaces/ICharacter';
import { IState } from '../interfaces/IState';
import { emitEvent } from '../utils/events';
import { nextPosition } from '../utils/grid';
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
    public isInteracting: boolean;

    private DIRECTION_UPDATE = {
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
        }
    }

    constructor(config: ICharacter) {
        super(config);
        this._movingProgressRemaining = 0;

        this._isPlayer = config.isPlayer;
        this._hasMapChanged = false;
        this.isInteracting = false;
    }

    public update(state: IState) {
        if(this._movingProgressRemaining > 0) {
            this.updatePosition(state.map);
        } else {

            // Only when is ready to walk. Ex: during cutscenes or other things its not possible to move
            if(!state.map.isInteracting && this._isPlayer && state.arrow) {
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                });
            }
            this.updateSprite();
        }

        // this._isPlayer && key === "interaction" && this.canInteract(map);

        // if(this._isPlayer && this._movingProgressRemaining === 0) {
        //     this._hasMapChanged = false;
        // }
        
    }

    public startBehavior(state: any, behavior: IBehavior) {
        this.direction = behavior.direction;
        
        if(behavior.type === 'walk') {
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                behavior.retry && setTimeout(() => {
                    this.startBehavior(state, behavior);
                }, 100);
                
                return;
            }
            
            // Ready to walk if space is not taken


            // Move space for walking character
            state.map.moveSpaceTaken(this.x, this.y, this.direction);
            this._movingProgressRemaining = 16;
            
            this.updateSprite();
        }

        if(behavior.type === 'idle') {
            setTimeout(() => {
                emitEvent('CharacterIdleComplete', {
                    whoId: this.id
                })
            }, behavior.time)
            
            this.updateSprite();
        }
        
    }

    public interact(map: Map) {
         if(this._isPlayer) {
            const interaction = map.getInteractionOnSquare(this.x, this.y);
            if(interaction) {
                console.log('Interaction', interaction)
                alert(interaction.message);
                this.isInteracting = true;
            }
        }
    }

    public updatePosition(map: Map) {
        // Define walking for character based on direction input
        // Typescript workaround
        const axis = this.DIRECTION_UPDATE[this.direction].axis as 'x' | 'y';
        const change = this.DIRECTION_UPDATE[this.direction].change;
        this[axis] += change; 

        // const nextMap = map.nextMap(this.x, this.y);
        // if(nextMap) {
        //     !this._hasMapChanged && map.changeMap(nextMap);
        //     this._hasMapChanged = true;
        // }

        this._movingProgressRemaining--

        if(this._movingProgressRemaining === 0) {
            emitEvent('CharacterWalkComplete', {
                whoId: this.id
            })
            
        }
    }

    public updateSprite() {
        // if(arrow !== "interaction") {
            if(this._movingProgressRemaining === 0) {  
                this.objectSprite.setAnimation(`idle-${this.direction}`);
            } else {
                this.objectSprite.setAnimation(`walk-${this.direction}`);
            }
        // }
    }
}