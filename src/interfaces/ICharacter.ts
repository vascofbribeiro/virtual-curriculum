import { IGameObjectConfig } from './IGameObject';

export interface ICharacter extends IGameObjectConfig{
    isPlayer: boolean
}