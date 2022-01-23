import Character from './Character';
import DirectionInput from './DirectionInput';
import Map from '../modules/Map';
import { getGridPosition } from '../utils/grid';
const mapsConfig = require('../configs/maps.json');

export default class Engine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _map: Map;
    private _miniMe: Character;
    private _characters: Array<Character>;
    private _directionInput: DirectionInput;

    constructor(id: string) { 
        this._canvas = document.getElementById(id) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d");
    }

    startGameLoop() {
        const step = () => {
            //Clear Canvas
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

            this._map.draw(this._ctx);
            this._miniMe.update(this._directionInput.direction);
            this._miniMe.draw(this._ctx);

            requestAnimationFrame(() => {
                step();
            })
        }

        step();
    }

    public init() {
        this._map = new Map(mapsConfig.professionalExpRoom);
        this._miniMe = new Character({
            x: getGridPosition(2),
            y: getGridPosition(3),
            name: 'Vasco',
            hasShadow: true,
            objectSpriteSrc: '../images/characters/ash.png',
            shadowSpriteSrc: '../images/characters/shadow.png'
        });

        this._directionInput = new DirectionInput();
        this._directionInput.init();

        this.startGameLoop();
    }
}