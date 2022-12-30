import { Direction } from '../types/Direction'; 

export default class DirectionInput {
    private _heldDirections: Array<Direction>
    private _keyMap: Record<string, Direction>
    private _touchKeyMap: Record<string, Direction>
    public shouldStartInteraction: boolean;

    constructor() {
        this._heldDirections = [];

        this._keyMap = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right"
        }

        this._touchKeyMap = {
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

        // Smartphone touch inputs
        Object.keys(this._touchKeyMap).forEach((buttonKey) => {
            document.getElementById(buttonKey).addEventListener('touchstart', () => {
                console.log('touch start');
                const direction = this._touchKeyMap[buttonKey]
                if(direction && this._heldDirections.indexOf(direction) === -1) {
                    this._heldDirections.unshift(direction);
                }
            });
        });

        Object.keys(this._touchKeyMap).forEach((buttonKey) => {
            document.getElementById(buttonKey).addEventListener('touchend', () => {
                console.log('touch end');
                const direction = this._touchKeyMap[buttonKey] as Direction
                const index = this._heldDirections.indexOf(direction);
                index > -1 && this._heldDirections.splice(index, 1);
            });
        });
    }
}