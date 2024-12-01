import { Direction } from "../../types/Direction";

type SpriteObj = {
    [key: string]: number[][];
}

export interface IEvent {
    type: "walk" | "idle" | "message" | "changeMap" | "interactionBox" | "show" | "hide" | "changeCameraView" | "beer" | "sober" | "surf" | "changeSprite";
    who?: string;
    direction?: Direction;
    retry?: boolean;
    time?: number;
    text?: string;
    showNote?: boolean;
    isLink?: boolean;
    map?: string;
    textLines?: Array<string>
    spriteObj?: SpriteObj;
    ignoreWall?: boolean;
    title?: string;
    x?: number;
    y?: number;
}
