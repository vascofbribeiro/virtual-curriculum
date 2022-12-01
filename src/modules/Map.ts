import GameObject from "./GameObject";
import { getGridPosition, getPointsFromCoord, nextPosition } from "../utils/grid";
import { Direction } from "../types/Direction";
import Engine from "./Engine";
import { getGridCoord } from "../utils/grid";

export default class Map {
    private _lowerImage: HTMLImageElement;
    private _upperImage: HTMLImageElement | null;
    private _walls: Record<string, boolean>
    private _doors: Record<string, string>
    private _engine: Engine;
    public gameObjects: Record<string, GameObject>;
    public interactablePlaces: Record<string, any>;
    public spacesTaken: Record<string, any>;

    constructor(config: {lowerImageSrc: string, upperImageSrc?: string, gameObjects: Record<string, GameObject>, walls: Record<string, boolean>, doors: Record<string, string>}, engine: Engine) {
        this._lowerImage = new Image();
        this._lowerImage.src = config.lowerImageSrc;
        this._walls = config.walls;
        this._doors = config.doors;
        this.gameObjects = config.gameObjects;
        this._engine = engine;
        this.interactablePlaces = this.getInteractablePlaces();
        this.spacesTaken = this.getSpacesTaken();
    }

    public isSpaceTaken(currentX: number, currentY: number, direction: Direction) {
        const {x,y} = nextPosition(currentX, currentY, direction);
        return  !this._doors[`${x},${y}`] && (this._walls[`${x},${y}`] || this.spacesTaken[`${x},${y}`])
    }

    public getInteractionOnSquare(x: number, y: number) {
        return this.interactablePlaces[`${x},${y}`];
    }

    public nextMap(x: number, y: number) {
        return this._doors[`${x},${y}`];
    }

    public changeMap(mapName: string) {
        this._engine.changeMap(mapName)
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

    public drawDoors(ctx: CanvasRenderingContext2D, cameraView: GameObject) {
        const doorCoords = this._doors && Object.keys(this._doors);
        doorCoords.forEach((doorCoord) =>{
            const x = parseInt(getPointsFromCoord(doorCoord)[0]);
            const y = parseInt(getPointsFromCoord(doorCoord)[1]);
            const doorImage = new Image();
            doorImage.src = "../images/objects/door.png",
            doorImage && ctx.drawImage(
                doorImage, 
                0, //left cut
                0,  //top cut
                16,
                32,
                x + getGridPosition(10.5) - cameraView.x,
                y + getGridPosition(6) - cameraView.y,
                16,
                32
                
            )
        })
        
    }

    private getInteractablePlaces() {
        const interactablePlaces: Record<string, Object> = {};
        const gameObjectsKeys = Object.keys(this.gameObjects);

        for(let i = 0; i < gameObjectsKeys.length; i++) {
            const key = gameObjectsKeys[i];

            const interaction = this.gameObjects[key].interaction;

            if(interaction) {
                const surroundedSquares = this.getSurroundedSquares(this.gameObjects[key]);
                
                surroundedSquares.forEach(square => {
                    interactablePlaces[square] = interaction;
                });
            }
        }
        return interactablePlaces;
    }

    public getSurroundedSquares(gameObject: GameObject) {
        const surroundedSquares = []
        const interactXMin = gameObject.x - gameObject.objectWidth;
        const interactXMax = gameObject.x + gameObject.objectWidth;
        const interactYMin = gameObject.y - gameObject.objectHeight;
        const interactYMax = gameObject.y + gameObject.objectHeight;

        for(let i = interactXMin / 16; i <= interactXMax / 16 ; i++) {
            for(let j = interactYMin / 16; j <= interactYMax / 16 ; j++) {
                // remove corner squares from interactivity
                if(i === interactXMin/16 && j === interactYMin/16)
                    continue
                if(i === interactXMin/16 && j === interactYMax/16)
                    continue 
                if(i === interactXMax/16 && j === interactYMin/16)
                    continue
                if(i === interactXMax/16 && j === interactYMax/16)
                    continue
                surroundedSquares.push(getGridCoord(i,j))
            }
        }
        return surroundedSquares;
    }

    public getSpacesTaken() {
        const spacesTaken: Record<string, boolean> = {}
        const gameObjectsKeys = Object.keys(this.gameObjects);

        for(let i = 0; i < gameObjectsKeys.length; i++) {
            const key = gameObjectsKeys[i];
            if(key !== 'miniMe' || this.gameObjects[key].walkable) {
                const {x, y, objectHeight, objectWidth} = this.gameObjects[key];
                
                const xMin = x;
                const xMax = x + objectWidth;
                const yMin = y;
                const yMax = y + objectHeight;

                for(let i = xMin / 16; i < xMax / 16 ; i++) {
                    for(let j = yMin / 16; j < yMax / 16 ; j++) {
                        spacesTaken[getGridCoord(i,j)] = true;
                    }
                }
            }
        }

        console.log(spacesTaken);

        return spacesTaken;
    }
}