import Character from '../modules/Character';
import { getGridPosition } from '../utils/grid';
import miniMeAnimation from './sprites/miniMe';

const miniMe = new Character({
    x: getGridPosition(26), //x: getGridPosition(10),
    y: getGridPosition(23), //y: getGridPosition(10),
    isPlayer: true,
    hasShadow: true,
    width: getGridPosition(1),
    height: getGridPosition(1),
    sprite: {
        object: {
            src: '../images/characters/sprite-vasco.png',
            width: 16,
            height: 32,
            imageWidth: 16,
            imageHeight: 32,
            animations: miniMeAnimation
        },
        shadow: {
            src: '../images/characters/shadow.png',
            width: 32,
            height: 32,
            imageWidth: 64,
            imageHeight: 64
        }
    }
})

export default miniMe;