import { Direction } from '../types/Direction'; 

export default class TouchInput {
    private _heldDirections: Array<Direction>
    private _keyMap: Record<string, Direction> 
    public shouldStartInteraction: boolean;

    constructor() {
        this._heldDirections = [];

        this._keyMap = {
            "arrow-up": "up",
            "arrow-down": "down",
            "arrow-left": "left",
            "arrow-right": "right"
        }
    }

    get direction() {
        return this._heldDirections[0];
    }

    init() {
        Object.keys(this._keyMap).forEach((buttonKey) => {
            document.getElementById(buttonKey).addEventListener('touchstart', () => {
                console.log('touch start');
                const direction = this._keyMap[buttonKey]
                if(direction && this._heldDirections.indexOf(direction) === -1) {
                    this._heldDirections.unshift(direction);
                }
            });
        });

        Object.keys(this._keyMap).forEach((buttonKey) => {
            document.getElementById(buttonKey).addEventListener('touchend', () => {
                console.log('touch end');
                const direction = this._keyMap[buttonKey] as Direction
                const index = this._heldDirections.indexOf(direction);
                index > -1 && this._heldDirections.splice(index, 1);
            });
        });
    }
}