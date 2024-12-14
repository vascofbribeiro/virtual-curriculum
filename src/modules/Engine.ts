import DirectionInput from './DirectionInput';
import Map from '../modules/Map';
import { mapsConfig } from '../configs/maps';
import InteractionInput from './InteractionInput';
import { CANVAS_POSITION, CANVAS_SCALE } from '../constants/';
import GameObject from './GameObject';
import CameraView from './CameraView';
import { SceneTransition } from './SceneTransition';
import Canvas from './Canvas';

declare global {
    interface Window {
        mapsConfig: any;
        canvasMultiplier: {
            x: number;
            y: number;
        };
        isMobile: boolean;
    }
}

export default class Engine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _maps: Record<string, Map>;
    private _activeMap: Map;
    private _directionInput: DirectionInput;
    private _cameraView: CameraView;
    private _gameContainer: HTMLElement;
    private _helper: HTMLElement;
    private _helperText: HTMLElement;

    constructor(id: string) { 
        if (typeof window) {
            const gameContainer = document.getElementById('canvas-container');
            window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
            window.mapsConfig = mapsConfig;
        }
        this._maps = {};
        this._cameraView = new CameraView();
        this._canvas = document.getElementById(id) as HTMLCanvasElement;
        this._gameContainer = document.getElementById('canvas-container');
        this._helper = document.getElementById('helper');
        this._helperText = document.getElementById('helper-text');
        this.resizeCanvas();
        addEventListener('resize', () => this.resizeCanvas());
        this._ctx = this._canvas.getContext("2d");

        if(window.location.search.includes('debug')) {
            this._canvas.addEventListener('mousedown', function(e) {
                const xPos = Math.floor(e.clientX/16);
                const yPos = Math.floor(e.clientY/16);
                console.log(`x: ${xPos} y: ${yPos}`);
            })
        }
    }

    startGameLoop() {
        // Define 70 frames per second in order to prevent request animation frame
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

                
                    Object.values(this._activeMap.gameObjects).forEach(object => {
                        object.update({
                            arrow: this._directionInput.direction,
                            map: this._activeMap,
                        })
                    });

                    this._activeMap.drawLowerImage(this._ctx, this._cameraView);
                                    
                    Object.values(this._activeMap.gameObjects).sort((gameObjectA, gameObjectB) => {
                        return gameObjectA.y - gameObjectB.y
                    }).forEach(gameObject => {
                        !gameObject.isHidden && gameObject.objectSprite.draw(this._ctx, this._cameraView, this._activeMap.gameObjects.miniMe);
                        gameObject.door && gameObject.door.draw(this._ctx, this._cameraView, this._activeMap.gameObjects.miniMe);
                    })

                    //Create upper image for the maps
                    this._activeMap.drawUpperImage(this._ctx, this._cameraView);

                    if(window.location.search.includes('debug')) {
                        this.drawWallsDebug();
                        this.drawActionSpacesDebug();
                    }

                }
            }

            requestAnimationFrame(() => {
                step();
            })
        }
        
        step();
    }

    private drawWallsDebug() {
        Object.keys(this._activeMap.walls).forEach(wallKey => {
            const [x,y] = wallKey.split(',');
            this._ctx.fillStyle = "red";
            this._ctx.globalAlpha = 0.4;
            this._ctx.fillRect(parseInt(x), parseInt(y), 16, 16);
            this._ctx.globalAlpha = 1;
        })
    }

    private drawActionSpacesDebug() {
        Object.keys(this._activeMap.actionSpaces).forEach(wallKey => {
            const [x,y] = wallKey.split(',');
            this._ctx.fillStyle = "green";
            this._ctx.globalAlpha = 0.4;
            this._ctx.fillRect(parseInt(x), parseInt(y), 16, 16);
            this._ctx.globalAlpha = 1;
        })
    }

    public bindAction() {
        new InteractionInput(() => {
            !this._activeMap.isInteracting && this._activeMap.tryInteraction();
            this._hideHelper();
        })
    }

    public bindCheckCharacterPosition() {
        document.addEventListener('CharacterWalkComplete', (event: CustomEvent) => {
            const characterId = event.detail.whoId;
            if(!this._activeMap.isInteracting && this._activeMap.checkForInteraction()) {
                this._showHelper();
            } else {
                this._hideHelper();
            }
            if(characterId === 'miniMe') {
                this._activeMap.checkActionForPosition();
                this._activeMap.checkForDoors();
            }
        });

        document.addEventListener('CharacterTryWalk', () => {
            if(!this._activeMap.isInteracting && this._activeMap.checkForInteraction()) {
                this._showHelper();
            } else {
                this._hideHelper();
            }
        });

        document.addEventListener('CharacterDrunk', () => {
            this._activeMap.startInteraction([{type: 'message', text: `But something feels... off. It seems like you need a rest`}])
            this._directionInput.keyMap = {
                "ArrowUp": "left",
                "ArrowDown": "up",
                "ArrowLeft": "right",
                "ArrowRight": "down"
            }
        });

        document.addEventListener('CharacterSober', () => {
            this._activeMap.startInteraction([{type: 'message', text: `You take a short rest, and the world finally stops spinning – back to normal!`}])
            this._directionInput.keyMap = {
                "ArrowUp": "up",
                "ArrowDown": "down",
                "ArrowLeft": "left",
                "ArrowRight": "right"
            }
            
            const sceneTransition = new SceneTransition();
            this._activeMap.isInteracting = true;
            sceneTransition.init(document.querySelector('.game-container'), () => {
                sceneTransition.rest();
                this._activeMap.isInteracting = true;
            }); 
        });
    }

    public startMap(mapName: string) {
        this._activeMap = this._maps[mapName] || new Map(window.mapsConfig[mapName]);
        this._activeMap.engine = this;
        this._activeMap.mountObjects();
       
        const cameraViewObject = 
            Object.values(this._activeMap.gameObjects)
                .find(gameObject => gameObject.isCameraView)
            || this._activeMap.gameObjects.miniMe;
        
        this.setCameraView(cameraViewObject);
        this._activeMap.startInteraction(this._activeMap.initialInteractions);
        if(!this._activeMap.keepInitialInteractions) {
            this._activeMap.initialInteractions = [];
        }
    }

    public loadAllMaps() {
        Object.keys(window.mapsConfig).forEach((mapName) => {
            this._maps[mapName] = new Map(window.mapsConfig[mapName]);
            this._maps
        })
    }

    public setCameraView(gameObject: GameObject) {
        this._cameraView.setObject(gameObject);  
        // Exception for the first map where the initial camera view is the Car
        gameObject.isCameraView = false;
        
        this._cameraView.setLimits(this._activeMap.limits);
    }

    // public setCameraViewLimits(limits: {xMin: number, yMin: number, xMax: number, yMax: number}) {
    //     limits && this._cameraView.setLimits(limits)
    // }

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
        const devicePixelRatio = window.devicePixelRatio || 1;
        const scale = window.location.search.includes('debug') ? 0.9 :  CANVAS_SCALE[this._gameContainer.clientWidth] ;

        const context = this._canvas.getContext('2d');

        this._canvas.width = this._gameContainer.clientWidth*devicePixelRatio;
        this._canvas.height = this._gameContainer.clientHeight*devicePixelRatio;


        this._canvas.style.width = `${this._gameContainer.clientWidth}px`;
        this._canvas.style.height = `${this._gameContainer.clientHeight}px`;

        context.imageSmoothingEnabled = false;

        context.scale(devicePixelRatio*scale,devicePixelRatio*scale);

        window.canvasMultiplier = CANVAS_POSITION[this._gameContainer.clientWidth] ?? { x: 1, y: 1 };
        
        this._helperText.textContent = `Press ${window.isMobile ? 'A' : 'spacebar'} to interact`;
        this._cameraView.setLimitsOffset(this._gameContainer.clientWidth);
        this._activeMap && this._cameraView.setLimits(this._activeMap.limits);
    }

    private _showHelper() {
        this._helper.style.display = 'block'
    }

    private _hideHelper() {
        this._helper.style.display = 'none'
    }
}