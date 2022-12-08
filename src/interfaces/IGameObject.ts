import { IBehavior } from "./IBehavior";
import { ISpriteConfig } from "./ISpriteConfig";

export interface IGameObjectConfig {
    x?: number;
    y?: number;
    name: string;
    hasShadow?: boolean;
    width: number;
    height: number;
    sprite: ISpriteConfig
    interactions: Array<any>;
    walkable?: boolean;
    isPlayer?: boolean;
    behaviorLoop?: Array<IBehavior>
}