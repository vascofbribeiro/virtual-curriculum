import GameObject from "./GameObject";
import { getGridPosition, nextPosition } from "../utils/grid";
import { Direction } from "../types/Direction";
import Engine from "./Engine";
import { getGridCoord } from "../utils/grid";
import { IEvent } from "../interfaces/modules/IEvent";
import GameEvent from "./GameEvent";
import { IMapConfig } from "../interfaces/configs/IMapConfig";

export default class Map {
    private _lowerImage: HTMLImageElement;
    private _upperImage: HTMLImageElement | null;
    private _walls: Record<string, boolean>
    public engine: Engine;
    public gameObjects: Record<string, GameObject>;
    public interactablePlaces: Record<string, any>;
    public spacesTaken: Record<string, any>;
    public isInteracting: boolean;
    public actionSpaces: Record<string, any> //Fix types later
    public initialInteractions: Array<IEvent>;
    private _hasTakenInitialInteractions: boolean;

    constructor(config: IMapConfig) {
        this._lowerImage = new Image();
        this._upperImage = new Image();
        this._lowerImage.src = config.lowerImageSrc;
        this._upperImage.src = config.upperImageSrc || '';
        this._walls = config.walls;
        this.gameObjects = config.gameObjects;
        this.engine = null;
        this.actionSpaces = config.actionSpaces;
        this.spacesTaken = this.getSpacesTaken();
        this.isInteracting = false;
        this.initialInteractions = config.initialInteractions;
        this._hasTakenInitialInteractions = false;
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
    }

    public getInteractionOnSquare(x: number, y: number) {
        return this.interactablePlaces[`${x},${y}`];
    }

    public drawLowerImage(ctx: CanvasRenderingContext2D, cameraView: GameObject) {
        ctx.drawImage(
            this._lowerImage, 
            getGridPosition(10.5) - cameraView.x,
            getGridPosition(6) - cameraView.y
        )
    }

    public drawUpperImage(ctx: CanvasRenderingContext2D, cameraView: GameObject) {
        this._upperImage && ctx.drawImage(
            this._upperImage, 
            getGridPosition(10.5) - cameraView.x,
            getGridPosition(6) - cameraView.y
        )
    }

    public getSpacesTaken() {
        const spacesTaken: Record<string, boolean> = {}
        const gameObjects = Object.values(this.gameObjects);

        gameObjects.forEach(object => {
            const {x, y, objectHeight, objectWidth} = object;

            //FIX Colisions for objects with 16 by 16
            const xMin = x;
            const xMax = x + objectWidth;
            const yMin = y;
            const yMax = y + objectHeight;

            for(let i = xMin / 16; i < xMax / 16 ; i++) {
                for(let j = yMin / 16; j < yMax / 16 ; j++) {
                    spacesTaken[getGridCoord(i,j)] = true;
                }
            }
        });

        return { 
            ...spacesTaken,
            ...this._walls
        };
    }

    public addSpaceTaken(x: number, y: number) {
        this.spacesTaken[`${x},${y}`] = true;
    }

    public removeSpaceTaken(x: number, y: number) {
        delete this.spacesTaken[`${x},${y}`];
    }

    public moveSpaceTaken(wasX: number, wasY: number, direction: Direction) {
        this.removeSpaceTaken(wasX, wasY);
        const {x, y} = nextPosition(wasX, wasY, direction);
        this.addSpaceTaken(x,y);
    }

    public checkActionForPosition() {
        if(this.actionSpaces) {
            const match = this.actionSpaces[`${this.gameObjects.miniMe.x},${this.gameObjects.miniMe.y}`];

            if(!this.isInteracting && match) {
                this.startInteraction(match[0].events);
            }
        }
    }

    public checkForInteraction() {
        const miniMe = this.gameObjects.miniMe;
        const nextCoords = nextPosition(miniMe.x, miniMe.y, miniMe.direction);
        const match = Object.values(this.gameObjects).find(gameObject => {
            const interactXMin = gameObject.x;
            const interactXMax = gameObject.x + gameObject.objectWidth - 16;
            const interactYMin = gameObject.y;
            const interactYMax = gameObject.y + gameObject.objectHeight -16;

            const isInteractable = nextCoords.x >= interactXMin && nextCoords.x <= interactXMax &&
                nextCoords.y >= interactYMin && nextCoords.y <= interactYMax
            
            return isInteractable;
        })

        if (match && match.interactions && match.interactions.length) {
            this.isInteracting = true;
            this.startInteraction(match.interactions[0].events);
            if(match.interactionIcon) match.interactionIcon.far = '';
        }
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
}