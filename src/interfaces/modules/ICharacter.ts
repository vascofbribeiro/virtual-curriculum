import { IGameObjectConfig } from '../configs/IGameObjectConfig';

export interface ICharacter extends IGameObjectConfig{
    isPlayer: boolean,
    speedMultiplier?: number
}