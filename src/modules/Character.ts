import { IEvent } from '../interfaces/modules/IEvent';
import { ICharacter } from '../interfaces/modules/ICharacter';
import { IState } from '../interfaces/modules/IState';
import { emitEvent } from '../utils/events';
import GameObject from './GameObject';

type Direction = {
    axis: string;
    change: number;
}

export default class Character extends GameObject {
    private _movingProgressRemaining: number;
    private _isPlayer: boolean;
    private _speedMultiplier: number;
    public isInteracting: boolean;
    public isIdle: boolean;

    private directionUpdate: Record<string, Direction>;

    constructor(config: ICharacter) {
        super(config);
        this._movingProgressRemaining = 0;

        this._isPlayer = config.isPlayer;
        this._speedMultiplier = config.speedMultiplier ?? 1;
        this.isInteracting = true;
        this.isIdle = false;
        this.directionUpdate = {
            up: {
                axis: "y",
                change: -this._speedMultiplier
            },
            down: {
                axis: "y",
                change: this._speedMultiplier
            },
            left: {
                axis: "x",
                change: -this._speedMultiplier
            },
            right: {
                axis: "x",
                change: this._speedMultiplier
            }
        }
    }

    public update(state: IState) {
        if (this._movingProgressRemaining > 0) {
            this.updatePosition();
        } else {
            // Only when is ready to walk. Ex: during cutscenes or other things its not possible to move
            if (!state.map.isInteracting && this._isPlayer && state.arrow) {
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                });
            }
            this.updateSprite();
        }
    }

    public startBehavior(state: IState, behavior: IEvent) {
        this.direction = behavior.direction;

        if (behavior.type === 'walk') {
            emitEvent('CharacterTryWalk', {
                whoId: this.id
            });

            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                behavior.retry && setTimeout(() => {
                    this.startBehavior(state, behavior);
                }, 100);

                return;
            }
            // Move space for walking character
            state.map.moveSpaceTaken(this.x, this.y, this.direction);
            this._movingProgressRemaining = 16;

            this.updateSprite();
        }

        if (behavior.type === 'idle') {
            this.isIdle = true;
            setTimeout(() => {
                emitEvent('CharacterIdleComplete', {
                    whoId: this.id
                });
                this.isIdle = false;
            }, behavior.time)

            this.updateSprite();
        }

        if (behavior.type === 'show') {
            this.isHidden = false;
            setTimeout(() => {
                emitEvent('CharacterShowCompleted', {
                    whoId: this.id,
                });
            }, 100)

            this.updateSprite();
        }

    }

    public updatePosition() {
        // Define walking for character based on direction input
        const axis = this.directionUpdate[this.direction].axis as 'x' | 'y';
        const change = this.directionUpdate[this.direction].change;
        this[axis] += change;

        this._movingProgressRemaining--

        if (this._movingProgressRemaining === 0) {
            emitEvent('CharacterWalkComplete', {
                whoId: this.id
            })

        }
    }

    public updateSprite() {
        if (this._movingProgressRemaining === 0) {
            this.objectSprite.setAnimation(`idle-${this.direction}`);
        } else {
            this.objectSprite.setAnimation(`walk-${this.direction}`);
        }
    }
}