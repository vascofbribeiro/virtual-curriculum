import Map from "../../modules/Map";
import { Direction } from "../../types/Direction";

export interface IState {
    arrow?: Direction;
    map: Map
}