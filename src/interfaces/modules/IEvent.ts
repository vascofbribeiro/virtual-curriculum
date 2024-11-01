import { Direction } from "../../types/Direction";

export interface IEvent {
    type: "walk" | "idle" | "message" | "changeMap" | "interactionBox" | "show" | "hide" | "changeCameraView" | "beer" | "sober";
    who?: string;
    direction?: Direction;
    retry?: boolean;
    time?: number;
    text?: string;
    showNote?: boolean;
    isLink?: boolean;
    map?: string;
    textLines?: Array<string>
    title?: string;
    x?: number;
    y?: number;
}
