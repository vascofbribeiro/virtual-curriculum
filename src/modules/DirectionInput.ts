import { Direction } from '../types/Direction'; 

export default class DirectionInput {
    private _heldDirections: Array<Direction>
    private _keyMap: Record<string, Direction> 
    public shouldStartInteraction: boolean;

    constructor() {
        this._heldDirections = [];

        this._keyMap = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right"
        }
    }

    get direction() {
        return this._heldDirections[0];
    }

    init() {
        document.addEventListener('keydown', (event) => {
            const direction = this._keyMap[event.key] as Direction
            if(direction && this._heldDirections.indexOf(direction) === -1) {
                this._heldDirections.unshift(direction);
            }
        });

        document.addEventListener('keyup', (event) => {
            const direction = this._keyMap[event.key] as Direction
            const index = this._heldDirections.indexOf(direction);
            index > -1 && this._heldDirections.splice(index, 1);
        });
    }
}