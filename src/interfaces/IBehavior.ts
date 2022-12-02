import { Direction } from "../types/Direction";

export interface IBehavior {
    direction: Direction;
    type: "walk" | "interaction" | "idle";
    who?: string;
    time?: number;
    retry?: boolean;
}