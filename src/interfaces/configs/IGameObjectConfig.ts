import { IEvent } from "../modules/IEvent";
import { ISpriteConfig } from "../modules/ISpriteConfig";

export interface IGameObjectConfig {
    x?: number;
    y?: number;
    hasShadow?: boolean;
    width: number;
    height: number;
    sprite: ISpriteConfig
    walkable?: boolean;
    isPlayer?: boolean;
    behaviorLoop?: Array<IEvent>
    interactions?: Array<Record<'events', Array<IEvent>>>
}