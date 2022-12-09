import { Direction } from "../../types/Direction";

export interface IEvent {
    type: "walk" | "idle" | "message" | "changeMap";
    who?: string;
    direction?: Direction;
    retry?: boolean;
    time?: number;
    text?: string;
    map?: string;
}
