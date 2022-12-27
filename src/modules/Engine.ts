import DirectionInput from './DirectionInput';
import Map from '../modules/Map';
import { mapsConfig } from '../configs/maps';
import InteractionInput from './InteractionInput';

declare global {
    interface Window { mapsConfig: any; }
}


export default class Engine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _map: Map;
    private _directionInput: DirectionInput;

    constructor(id: string) { 
        this._canvas = document.getElementById(id) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d");
        if (typeof window) window.mapsConfig = mapsConfig;
    }

    startGameLoop() {
        // Define 60 frames per second in order to prevent request animation frame
        // to be called more times on 120Hz displays
        const fpsInterval = 1000 / 62;
        let then = Date.now();
        let now;
        const step = () => {
            now = Date.now();
            const elapsed = now - then;

            // if enough time has elapsed, draw the next frame
            if (elapsed >= fpsInterval) {

                // Get ready for next frame by setting then=now, but also adjust for
                // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                then = now - (elapsed % fpsInterval);

                // Clear Canvas
                this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

                const cameraView = this._map.gameObjects.miniMe;
            
                Object.values(this._map.gameObjects).forEach(object => {
                    object.update({
                        arrow: this._directionInput.direction,
                        map: this._map,
                    })
                });

                this._map.drawLowerImage(this._ctx, cameraView);
                                
                Object.values(this._map.gameObjects).sort((gameObjectA, gameObjectB) => {
                    return gameObjectA.y - gameObjectB.y
                }).forEach(gameObject => {
                    gameObject.objectSprite.draw(this._ctx, cameraView, this._map.gameObjects.miniMe);
                })

                //Create upper image for the maps
                this._map.drawUpperImage(this._ctx, cameraView);
            }

            requestAnimationFrame(() => {
                step();
            })
        }
        
        step();
    }

    public bindAction() {
        new InteractionInput(() => {
            !this._map.isInteracting && this._map.checkForInteraction();
        })
    }

    public bindCheckCharacterPosition() {
        document.addEventListener('CharacterWalkComplete', (event: CustomEvent) => {
            const characterId = event.detail.whoId;
            if(characterId === 'miniMe') {
                this._map.checkActionForPosition();
            }
        });
    }

    public startMap(mapName: string /* FIX THIS TYPES LATER FOR IMapConfig */) {
        //@ts-ignore
        this._map = new Map(window.mapsConfig[mapName]);
        this._map.engine = this;
        this._map.mountObjects();
        this._map.startInteraction(this._map.initialInteractions);
        window.mapsConfig[mapName].initialInteractions = [];
    }

    public init() {
        this.startMap('professionalExpRoom');
        
        this.bindAction();
        this.bindCheckCharacterPosition();

        this._directionInput = new DirectionInput();
        this._directionInput.init();

        this.startGameLoop();
    }
}