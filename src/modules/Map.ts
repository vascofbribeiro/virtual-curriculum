import GameObject from "./GameObject";
import { getGridPosition, nextPosition } from "../utils/grid";
import { Direction } from "../types/Direction";
import Engine from "./Engine";
import { getGridCoord } from "../utils/grid";
import { IBehavior } from "../interfaces/IBehavior";
import GameEvent from "./GameEvent";

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
    public initialInteractions: Array<IBehavior>

    constructor(config: {lowerImageSrc: string, upperImageSrc?: string, gameObjects: Record<string, GameObject>, walls?: Record<string, boolean>, actionSpaces?: Record<string, any>, initialInteractions: Array<IBehavior>}) {
        this._lowerImage = new Image();
        this._lowerImage.src = config.lowerImageSrc;
        this._walls = config.walls;
        this.gameObjects = config.gameObjects;
        this.engine = null;
        this.actionSpaces = config.actionSpaces;
        this.spacesTaken = this.getSpacesTaken();
        this.isInteracting = false;
        this.initialInteractions = config.initialInteractions;
    }

    public isSpaceTaken(currentX: number, currentY: number, direction: Direction) {
        const {x,y} = nextPosition(currentX, currentY, direction);
        return this.spacesTaken[`${x},${y}`]
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

    // public drawDoors(ctx: CanvasRenderingContext2D, cameraView: GameObject) {
    //     const doorCoords = this._doors && Object.keys(this._doors);
    //     doorCoords.forEach((doorCoord) =>{
    //         const x = parseInt(getPointsFromCoord(doorCoord)[0]);
    //         const y = parseInt(getPointsFromCoord(doorCoord)[1]);
    //         const doorImage = new Image();
    //         doorImage.src = "../images/objects/door.png",
    //         doorImage && ctx.drawImage(
    //             doorImage, 
    //             0, //left cut
    //             0,  //top cut
    //             16,
    //             32,
    //             x + getGridPosition(10.5) - cameraView.x,
    //             y + getGridPosition(6) - cameraView.y,
    //             16,
    //             32
                
    //         )
    //     })
        
    // }

    // private getInteractablePlaces() {
    //     const interactablePlaces: Record<string, Object> = {};
    //     const gameObjectsKeys = Object.keys(this.gameObjects);

    //     for(let i = 0; i < gameObjectsKeys.length; i++) {
    //         const key = gameObjectsKeys[i];

    //         const interaction = this.gameObjects[key].interactions;

    //         if(interaction) {
    //             const surroundedSquares = this.getSurroundedSquares(this.gameObjects[key]);
                
    //             surroundedSquares.forEach(square => {
    //                 interactablePlaces[square] = interaction;
    //             });
    //         }
    //     }
    //     return interactablePlaces;
    // }

    // public getSurroundedSquares(gameObject: GameObject) {
    //     const surroundedSquares = []
    //     const interactXMin = gameObject.x - gameObject.objectWidth;
    //     const interactXMax = gameObject.x + gameObject.objectWidth;
    //     const interactYMin = gameObject.y - gameObject.objectHeight;
    //     const interactYMax = gameObject.y + gameObject.objectHeight;

    //     for(let i = interactXMin / 16; i <= interactXMax / 16 ; i++) {
    //         for(let j = interactYMin / 16; j <= interactYMax / 16 ; j++) {
    //             // remove corner squares from interactivity
    //             if(i === interactXMin/16 && j === interactYMin/16)
    //                 continue
    //             if(i === interactXMin/16 && j === interactYMax/16)
    //                 continue 
    //             if(i === interactXMax/16 && j === interactYMin/16)
    //                 continue
    //             if(i === interactXMax/16 && j === interactYMax/16)
    //                 continue
    //             surroundedSquares.push(getGridCoord(i,j))
    //         }
    //     }
    //     return surroundedSquares;
    // }

    public getSpacesTaken() {
        const spacesTaken: Record<string, boolean> = {}
        const gameObjects = Object.values(this.gameObjects);

        gameObjects.forEach(object => {
            const {x, y, objectHeight, objectWidth} = object;

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
        
        console.log('SPACES TAKEN', { 
            ...spacesTaken,
            ...this._walls
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
        console.log('change position')
        if(this.actionSpaces) {
            const match = this.actionSpaces[`${this.gameObjects.miniMe.x},${this.gameObjects.miniMe.y}`];

            console.log(match);

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

        console.log(match);

        if (match && match.interactions && match.interactions.length) {
            this.isInteracting = true;
            this.startInteraction(match.interactions[0].events)
        } 
    }

    public async startInteraction(events: Array<IBehavior>) {
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