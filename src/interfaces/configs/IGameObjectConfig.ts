import { IEvent } from "../modules/IEvent";
import { ISpriteConfig } from "../modules/ISpriteConfig";

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
    walkable?: boolean;
    isPlayer?: boolean;
    behaviorLoop?: Array<IEvent>
    interactions?: Array<Record<'events', Array<IEvent>>>
    interactionIcon?: {
        far?: string;
        nearby?: string;
    }
    isHidden?: boolean;
    isCameraView?: boolean;
    speedMultiplier?: number;
}