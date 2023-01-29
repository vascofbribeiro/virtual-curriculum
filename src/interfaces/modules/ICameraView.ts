import GameObject from "../../modules/GameObject";

export interface ICameraView {
    gameObject: GameObject;
    limits?: {
        xMin: number,
        yMin: number,
        xMax: number,
        yMax: number
    }
}