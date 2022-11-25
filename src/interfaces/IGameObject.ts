import { ISpriteConfig } from "./ISpriteConfig";

export interface IGameObjectConfig {
    x?: number;
    y?: number;
    name: string;
    hasShadow?: boolean;
    width: number;
    height: number;
    sprite: ISpriteConfig
    interaction: Record<string, Object>;
    walkable?: boolean;
}