import { IEvent } from "../interfaces/modules/IEvent";

export const addActions = (action: IEvent, timesToRepeat: number) => {
    return Array(timesToRepeat).fill(action);
}