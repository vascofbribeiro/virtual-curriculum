import DirectionInput from './DirectionInput';
import Map from '../modules/Map';
import { mapsConfig } from '../configs/maps';
import InteractionInput from './InteractionInput';
import { canvasScale } from '../constants/';
import GameObject from './GameObject';

declare global {
    interface Window {
        mapsConfig: any;
        canvasMultiplier: {
            x: number;
            y: number;
        };
    }
}


export default class Engine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _maps: Record<string, Map>;
    private _activeMap: Map;
    private _directionInput: DirectionInput;
    private _cameraView: GameObject | null;
    private _isLoadFinished: boolean;

    constructor(id: string) { 
        if (typeof window) {
            window.mapsConfig = mapsConfig;
        }
        this._maps = {};
        this._canvas = document.getElementById(id) as HTMLCanvasElement;
        this.resizeCanvas();
        addEventListener('resize', () => this.resizeCanvas());
        this._ctx = this._canvas.getContext("2d");
    }

    startGameLoop() {
        // Define 60 frames per second in order to prevent request animation frame
        // to be called more times on 120Hz displays

        const fpsInterval = 1000 / 70;
        let then = Date.now();
        let now;
        const step = () => {
            if(this._activeMap.isImageLoaded) {
                now = Date.now();
                const elapsed = now - then;

                // if enough time has elapsed, draw the next frame
                if (elapsed >= fpsInterval) {

                    then = now - (elapsed % fpsInterval);

                    // Clear Canvas before paint
                    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

                    const cameraView = this._cameraView;
                
                    Object.values(this._activeMap.gameObjects).forEach(object => {
                        object.update({
                            arrow: this._directionInput.direction,
                            map: this._activeMap,
                        })
                    });

                    this._activeMap.drawLowerImage(this._ctx, cameraView);
                                    
                    Object.values(this._activeMap.gameObjects).sort((gameObjectA, gameObjectB) => {
                        return gameObjectA.y - gameObjectB.y
                    }).forEach(gameObject => {
                        !gameObject.isHidden && gameObject.objectSprite.draw(this._ctx, cameraView, this._activeMap.gameObjects.miniMe);
                        gameObject.door && gameObject.door.draw(this._ctx, cameraView, this._activeMap.gameObjects.miniMe);
                    })

                    //Create upper image for the maps
                    this._activeMap.drawUpperImage(this._ctx, cameraView);
                }
            }

            requestAnimationFrame(() => {
                step();
            })
        }
        
        step();
    }

    public bindAction() {
        new InteractionInput(() => {
            !this._activeMap.isInteracting && this._activeMap.checkForInteraction();
        })
    }

    public bindCheckCharacterPosition() {
        document.addEventListener('CharacterWalkComplete', (event: CustomEvent) => {
            const characterId = event.detail.whoId;
            if(characterId === 'miniMe') {
                this._activeMap.checkActionForPosition();
                this._activeMap.checkForDoors();
            }
        });
    }

    public startMap(mapName: string /* FIX THIS TYPES LATER FOR IMapConfig */) {
        //@ts-ignore
        this._activeMap = this._maps[mapName] || new Map(window.mapsConfig[mapName]);
        this._activeMap.engine = this;
        this._activeMap.mountObjects();
        console.log(this._activeMap);
        const cameraView = Object.values(this._activeMap.gameObjects).find(gameObject => gameObject.isCameraView)
        console.log('Camera View', cameraView)
        this.setCameraView(cameraView || this._activeMap.gameObjects.miniMe)
        this._activeMap.startInteraction(this._activeMap.initialInteractions);
        this._activeMap.initialInteractions = [];
    }

    public loadAllMaps() {
        Object.keys(window.mapsConfig).forEach((mapName) => {
            this._maps[mapName] = new Map(window.mapsConfig[mapName]);
            this._maps
        })
    }

    public setCameraView(gameObject: GameObject) {
        console.log('gameObject', gameObject);
        this._cameraView = gameObject;
        gameObject.isCameraView = false;
    }

    public init() {
        this.loadAllMaps();

        document.addEventListener('mapImageLoaded', () => {
            const numberMapsLoaded = Object.values(this._maps).filter((map) => map.isImageLoaded).length
            const totalNumberMaps = Object.keys(this._maps).length
            const progressBarPercentage = numberMapsLoaded / totalNumberMaps * 100
            document.getElementById('progress').style.width = `${progressBarPercentage}%`

            if (numberMapsLoaded === totalNumberMaps) {
                document.getElementById('loading').style.display = 'none';
                //this.setCameraView()
                this.startMap('outside');

                this.bindAction();
                this.bindCheckCharacterPosition();
        
                this._directionInput = new DirectionInput();
                this._directionInput.init();
        
                this.startGameLoop();
            }
        })
        
    }

    public resizeCanvas() {
        console.log('resize');
        const gameContainer = document.getElementById('canvas-container');
        console.log(gameContainer.clientWidth, gameContainer.clientHeight, this._canvas.style.scale);
        this._canvas.width = gameContainer.clientWidth;
        this._canvas.height = gameContainer.clientHeight;
        window.canvasMultiplier = canvasScale[this._canvas.width];
    }
}