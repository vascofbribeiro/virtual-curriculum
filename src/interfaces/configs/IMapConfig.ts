import GameObject from "../../modules/GameObject";
import { IEvent } from "../modules/IEvent";

export interface IMapConfig {
    lowerImageSrc: string;
    upperImageSrc?: string;
    gameObjects: Record<string, GameObject>;
    actionSpaces?: Record<string, Array<Record<'events', IEvent>>>;
    initialInteractions?: Array<IEvent>;
    keepInitialInteractions?: boolean;
    walls?: Record<string, boolean>;
    limits?: {
        xMin: number,
        yMin: number,
        xMax: number,
        yMax: number
    }
}