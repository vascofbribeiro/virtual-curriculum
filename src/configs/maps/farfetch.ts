import Character from '../../modules/Character';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';
import GameObject from '../../modules/GameObject';

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
        desks1: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(3),
            hasShadow: true,
            width: getGridPosition(6),
            height: getGridPosition(3),
            sprite: {
                object: {
                    src: '../images/objects/work-desks.png',
                    width: getGridPosition(6),
                    height: getGridPosition(4),
                },
            }
        }),
        receptionist: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(7),
            hasShadow: true,
            width: getGridPosition(3),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/receptionist.png',
                    width: getGridPosition(3),
                    height: getGridPosition(2),
                },
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

createLinearWall({coord: 'x', x: 0, y: 1, n: 11, map: farfetch});
createLinearWall({coord: 'y', x: 0, y: 0, n: 8, map: farfetch});
createLinearWall({coord: 'x', x: 0, y: 8, n: 11, map: farfetch});
createLinearWall({coord: 'x', x: 0, y: 9, n: 11, map: farfetch});
createLinearWall({coord: 'y', x: 11, y: 1, n: 8, map: farfetch});