import GameObject from "./GameObject";
import { getGridPosition, nextPosition } from "../utils/grid";
import { Direction } from "../types/Direction";

export default class Map {
    private _lowerImage: HTMLImageElement;
    private _upperImage: HTMLImageElement | null;
    private _walls: Record<string, boolean>
    public gameObjects: Record<string, GameObject>;

    constructor(config: {lowerImageSrc: string, upperImageSrc?: string, gameObjects: Record<string, GameObject>, walls: Record<string, boolean>} ) {
        console.log(config);
        this._lowerImage = new Image();
        this._lowerImage.src = config.lowerImageSrc;
        this._walls = config.walls;
        this.gameObjects = config.gameObjects;
        console.log('Walls', config.walls)
    }

    public isSpaceTaken(currentX: number, currentY: number, direction: Direction) {
        const {x,y} = nextPosition(currentX, currentY, direction);
        const gameObjectsKeys = Object.keys(this.gameObjects);
        // Calculate gameObjects size to be blocked when in its area

        for(let i = 0; i < gameObjectsKeys.length; i++) {
            const key = gameObjectsKeys[i];
            if(key !== 'miniMe') {
                const gameObjectX = this.gameObjects[key].x;
                const gameObjectY = this.gameObjects[key].y;
                console.log('x', x);
                console.log('y', y);
                console.log('gameObjectX', gameObjectX);
                console.log('gameObjectY', gameObjectY);
                if(x === gameObjectX && y === gameObjectY) {console.log(key); return true; }
                const objectHeight = this.gameObjects[key].objectHeight;
                const objectWidth = this.gameObjects[key].objectWidth;
                console.log('limit x', gameObjectX, gameObjectX + objectWidth);
                console.log('limit y', gameObjectY, gameObjectY + objectHeight);
                if(
                    x > gameObjectX &&
                    x < gameObjectX + objectWidth &&
                    y > gameObjectY && 
                    y < gameObjectY + objectHeight
                ) {
                    console.log(key);
                    return true
                }
            }
        }
        return this._walls[`${x},${y}`]
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
}