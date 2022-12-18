import Character from '../../modules/Character';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const bar = {
    lowerImageSrc: "../images/backgrounds/bar.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(12),
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
                    imageHeight: 32
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
        [getGridCoord(12,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
    },
};