import GameObject from "./GameObject";
import { getGridPosition, nextPosition } from "../utils/grid";
import { Direction } from "../types/Direction";
import Engine from "./Engine";
import { getGridCoord } from "../utils/grid";
import { IEvent } from "../interfaces/modules/IEvent";
import GameEvent from "./GameEvent";
import { IMapConfig } from "../interfaces/configs/IMapConfig";
import CameraView from "./CameraView";
import Character from "./Character";

export default class Map {
    private _lowerImage: HTMLImageElement;
    private _upperImage: HTMLImageElement | null;
    public walls: Record<string, boolean>
    public engine: Engine;
    public gameObjects: Record<string, GameObject | Character>;
    public interactablePlaces: Record<string, any>;
    public spacesTaken: Record<string, any>;
    public doors: Record<string, any>;
    public isInteracting: boolean;
    public actionSpaces: Record<string, any> //Fix types later
    public initialInteractions: Array<IEvent>;
    public keepInitialInteractions: boolean;
    public isImageLoaded: boolean;
    public limits?: {
        xMin: number,
        yMin: number,
        xMax: number,
        yMax: number
    }

    constructor(config: IMapConfig) {
        this.isImageLoaded = false;
        this._lowerImage = new Image();
        this._upperImage = new Image();
        this._lowerImage.src = config.lowerImageSrc;
        this._upperImage.src = config.upperImageSrc || '';
        this._lowerImage.onload = () => {
            this.isImageLoaded = true;
            const imageLoadedEvent = new CustomEvent('mapImageLoaded');
            document.dispatchEvent(imageLoadedEvent)
        }
        this.walls = config.walls;
        this.gameObjects = config.gameObjects;
        this.engine = null;
        this.actionSpaces = config.actionSpaces;
        this.spacesTaken = this.getSpacesTaken();
        this.isInteracting = false;
        this.initialInteractions = config.initialInteractions;
        this.keepInitialInteractions = config.keepInitialInteractions;
        this.limits = config.limits;
    }

    public isSpaceTaken(currentX: number, currentY: number, direction: Direction) {
        const {x,y} = nextPosition(currentX, currentY, direction);
        return this.spacesTaken[`${x},${y}`] && !this.actionSpaces[`${x},${y}`]
    }

    public mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {
            const gameObject = this.gameObjects[key];
            gameObject.id = key;
            gameObject.mount(this);
        })
        
        this.doors = this.getDoors();
    }

    public getInteractionOnSquare(x: number, y: number) {
        return this.interactablePlaces[`${x},${y}`];
    }

    public drawLowerImage(ctx: CanvasRenderingContext2D, cameraView: CameraView) {
        ctx.drawImage(
            this._lowerImage, 
            getGridPosition(window.canvasMultiplier.x) - cameraView.getXView(),
            getGridPosition(window.canvasMultiplier.y) - cameraView.getYView()
        )
    }

    public drawUpperImage(ctx: CanvasRenderingContext2D, cameraView: CameraView) {
        this._upperImage && ctx.drawImage(
            this._upperImage, 
            getGridPosition(window.canvasMultiplier.x) - cameraView.getXView(),
            getGridPosition(window.canvasMultiplier.y) - cameraView.getYView()
        )
    }

    public getSpacesTaken() {
        const spacesTaken: Record<string, boolean> = {}
        const gameObjects = Object.values(this.gameObjects);

        gameObjects.forEach(object => {
            const {x, y, objectHeight, objectWidth} = object;

            //FIX Colisions for objects with 16 by 16
            const xMin = x + object.collisionOffset.width;
            const xMax = xMin + objectWidth;
            const yMin = y + object.collisionOffset.height;
            const yMax = yMin + objectHeight;

            for(let i = xMin / 16; i < xMax / 16 ; i++) {
                for(let j = yMin / 16; j < yMax / 16 ; j++) {
                    spacesTaken[getGridCoord(i,j)] = true;
                }
            }
        });

        return { 
            ...spacesTaken,
            ...this.walls
        };
    }

    public addSpaceTaken(x: number, y: number) {
        this.spacesTaken[`${x},${y}`] = true;
    }

    public removeSpaceTaken(x: number, y: number) {
        delete this.spacesTaken[`${x},${y}`];
    }

    public moveSpaceTaken(wasX: number, wasY: number, direction: Direction, ignoreWall?: boolean) {
        // If it is wall the space shouldn't be removed in the map
        !ignoreWall && this.removeSpaceTaken(wasX, wasY);
        const {x, y} = nextPosition(wasX, wasY, direction);
        
        if(window.location.search.includes('debug')) {
            console.log(x/16, y/16)
        }
        
        this.addSpaceTaken(x,y);
    }

    public getDoors() {
        const doors: Record<string, string> = {}
        const gameObjects = Object.values(this.gameObjects);

        gameObjects.forEach(object => {
            if(!object.door) return;

            // Round to multiple of 16
            const x = Math.floor(object.door.offsetX/16)*16 + object.x;
            const y = Math.floor(object.door.offsetY/16)*16 + object.y;

            const xMax = x + object.door.width;

            //Open door on the square below
            const yMax = y + object.door.height - 16;

            for(let i = x / 16; i < xMax / 16 ; i++) {
                    doors[getGridCoord(i, yMax/16)] = object.id;
                    //Open door for the same square as the door
                    doors[getGridCoord(i, (yMax/16 - 1))] = object.id;
                    //Open door for two squares from door
                    doors[getGridCoord(i, (yMax/16 + 1))] = object.id;
            }
        });

        return { 
            ...doors
        };
    }

    public checkActionForPosition() {
        if(this.actionSpaces) {
            const match = this.actionSpaces[`${this.gameObjects.miniMe.x},${this.gameObjects.miniMe.y}`];

            if(!this.isInteracting && match) {
                const randomInteractionIndex = Math.floor(Math.random() * match.length);
                this.startInteraction(match[randomInteractionIndex].events);
                
                // If shouldn't repeat, remove event from actionSpace
                if(match[randomInteractionIndex].triggerOnce){
                    this.actionSpaces[`${this.gameObjects.miniMe.x},${this.gameObjects.miniMe.y}`][randomInteractionIndex].events = [];
                } 
            }
        }
    }

    public tryInteraction() {
        const objectToInteract = this.checkForInteraction(); 
        const isBench = objectToInteract?.type === "bench";

        if ((objectToInteract && (!(this.gameObjects.miniMe as Character).isDrunk) || isBench)) {
            this.isInteracting = true;
            const interactionNumber = this.gameObjects[objectToInteract.id].interactionNumber;
            this.startInteraction(objectToInteract.interactions[interactionNumber].events);
            if(objectToInteract.interactionIcon) objectToInteract.interactionIcon.far = '';
            this.gameObjects[objectToInteract.id].hasInteracted = true;
            const nextInteractionNumber = interactionNumber + 1 >= this.gameObjects[objectToInteract.id].interactions.length ? 0 : interactionNumber + 1;
            this.gameObjects[objectToInteract.id].interactionNumber = nextInteractionNumber;
        }

        if(objectToInteract && (this.gameObjects.miniMe as Character).isDrunk) {
            this.startInteraction([{type: "message", text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sem facilisis, eleifend massa non, molestie enim.'}]);
        }
    }

    public checkForInteraction() {
        const miniMe = this.gameObjects.miniMe;
        const nextCoords = nextPosition(miniMe.x, miniMe.y, miniMe.direction);
        const match = Object.values(this.gameObjects).find(gameObject => {
            const interactXMin = gameObject.x + gameObject.collisionOffset.width;
            const interactXMax = interactXMin + gameObject.objectWidth - 16;
            const interactYMin = gameObject.y + gameObject.collisionOffset.height;
            const interactYMax = interactYMin + gameObject.objectHeight - 16;

            const isInteractable = nextCoords.x >= interactXMin && nextCoords.x <= interactXMax &&
                nextCoords.y >= interactYMin && nextCoords.y <= interactYMax
            
            return isInteractable;
        })

        if (match && match.interactions && match.interactions.length && !match.isHidden) {
            return match
        }

        return null;
    }

    public async startInteraction(events: Array<IEvent>) {
        if(events) {
            this.isInteracting = true;

            for(let i = 0; i < events.length; i++) {
                const eventHandler = new GameEvent({
                    event: events[i],
                    map: this
                })

                await eventHandler.init()
            }

            this.isInteracting = false;
        
            Object.values(this.gameObjects).forEach(gameObject => gameObject.doBehavior(this))
        }
    } 
    
    public checkForDoors() {
        if(this.doors) {
            const match = this.doors[`${this.gameObjects.miniMe.x},${this.gameObjects.miniMe.y}`];
            if(match) {
                this.gameObjects[match].door.open();
            } else {
                Object.values(this.gameObjects).forEach(object => object.door && object.door.close());
            }
        }
    }
}