import Character from '../../modules/Character';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';

export const farfetch = {
    lowerImageSrc: "../images/backgrounds/work.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(6),
            y: getGridPosition(8),
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
        }),
        
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(6,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
        [getGridCoord(5,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
    },
};
