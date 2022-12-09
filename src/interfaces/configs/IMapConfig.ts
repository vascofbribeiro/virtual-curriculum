import GameObject from "../../modules/GameObject";
import { IEvent } from "../modules/IEvent";
import { ISpriteConfig } from "../modules/ISpriteConfig";

export interface IMapConfig {
    lowerImageSrc: string;
    upperImageSrc?: string;
    gameObjects: Record<string, GameObject>;
    actionSpaces?: Record<string, Array<Record<'events', IEvent>>>
    initialInteractions?: Array<IEvent>,
    walls?: Record<string, boolean>
}