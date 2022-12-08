import DirectionInput from './DirectionInput';
import Map from '../modules/Map';
import { mapsConfig } from '../configs/maps.js';
import InteractionInput from './InteractionInput';

export default class Engine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _map: Map;
    private _directionInput: DirectionInput;

    constructor(id: string) { 
        this._canvas = document.getElementById(id) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d");
    }

    startGameLoop() {
        const step = () => {
            // Clear Canvas
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

            const cameraView = this._map.gameObjects.miniMe;

            // If main character is interacting stop updates
            
           
            Object.values(this._map.gameObjects).forEach(object => {
                // if(this._directionInput.shouldStartInteraction && !this._isInteracting) {
                //     this._map.gameObjects[key].interact(this._map);
                //     this._isInteracting = true
                // } else {
                //     this._isInteracting = false
                // }

                // console.log(this._map.gameObjects);
                // console.log('key', key)
                // console.log('Mapa', this._map)
                object.update({
                    arrow: this._directionInput.direction,
                    map: this._map,
                })
            })    

            this._map.drawLowerImage(this._ctx, cameraView);
            //Create upper image for the maps
            //this._map.drawUpperImage(this._ctx, cameraView);

            this._map.drawDoors(this._ctx, cameraView);

            Object.values(this._map.gameObjects).sort((gameObjectA, gameObjectB) => {
                return gameObjectA.y - gameObjectB.y
            }).forEach(gameObject => {
                gameObject.objectSprite.draw(this._ctx, cameraView);
            })
            
            requestAnimationFrame(() => {
                step();
            })
        }

        step();
    }

    public changeMap(mapName: string) {
        // TS workaround - fix later
        this._map = new Map(mapsConfig[mapName as keyof typeof mapsConfig], this)
    }

    public bindAction() {
        new InteractionInput(() => {
            !this._map.isInteracting && this._map.checkForInteraction();
        })
    }


    //Duplicated method from InteractionMessage. REFACTOR
    // private pressSpaceBar(event: KeyboardEvent) {
    //     if(event.key === ' ') {
    //         this.done();
    //     }
    // }

    public init() {
        this._map = new Map(mapsConfig.professionalExpRoom, this);
        this._map.mountObjects();

        this.bindAction();

        this._directionInput = new DirectionInput();
        this._directionInput.init();

        this.startGameLoop();

        this._map.startInteraction([
            {who: 'npc', type: 'walk', direction:'down'},
            {who: 'npc', type: 'walk', direction:'down'},
            {who: 'npc', type: 'walk', direction:'down'},
            {who: 'npc', type: 'walk', direction:'left'},
            {who: 'miniMe', type: 'idle', direction:'right', time: 500},
            {type: 'message', text: 'Hello! 👋'},
            {type: 'message', text: 'Welcome to my virtual CV. Feel free to walk around the rooms and explore'},
           
        ])
    }
}