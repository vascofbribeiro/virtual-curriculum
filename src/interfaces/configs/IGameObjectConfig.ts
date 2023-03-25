import { IEvent } from "../modules/IEvent";
import { ISpriteConfig } from "./ISpriteConfig";
import { IDoorConfig } from "./IDoorConfig";

export interface IGameObjectConfig {
    x?: number;
    y?: number;
    hasShadow?: boolean;
    width: number;
    height: number;
    collisionOffset?: {
        width: number;
        height: number;
    }
    sprite: {
        object: ISpriteConfig,
        shadow?: ISpriteConfig
    }
    door?: IDoorConfig
    walkable?: boolean;
    isPlayer?: boolean;
    behaviorLoop?: Array<IEvent>
    interactions?: Array<Record<'events', Array<IEvent>>>
    interactionIcon?: {
        far?: string;
        nearby?: string;
    }
    label?: string;
    isHidden?: boolean;
    isCameraView?: boolean;
    speedMultiplier?: number;
}