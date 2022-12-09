import { Direction } from "../types/Direction";

export interface IBehavior {
    direction?: Direction;
    type: "walk" | "interaction" | "idle" | "message" | "changeMap";
    who?: string;
    time?: number;
    retry?: boolean;
    text?: string;
    map?: any //FIX THIS LATER
}