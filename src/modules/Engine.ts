import Canvas from '../modules/Canvas';
import Character from '../modules/Character';
import Map from '../modules/Map';
const mapsConfig = require('../configs/maps.json');

export default class Engine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _map: Map;
    private _miniMe: Character;
    private _characters: Array<Character>;

    constructor(id: string) { 
        this._canvas = document.getElementById(id) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d");
    }

    startGameLoop() {
        const step = () => {
            //Clear Canvas
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

            this._map.draw(this._ctx);
            this._miniMe.draw();

            requestAnimationFrame(() => {
                step();
            })
        }

        step();
    }

    public init() {
        this._map = new Map(mapsConfig.professionalExpRoom);
        this._miniMe = new Character(this._ctx, {x: 0, y: 0, name: 'Vasco', hasShadow: true});
                
        this.startGameLoop();
        // setTimeout(() => {
        //     map.draw(this._ctx);
        //     vasco.draw();
        //     vasco2.draw();
        // }, 200);

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            this._miniMe.updatePosition(keyName);
        });

    }
}