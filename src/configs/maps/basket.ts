import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';

export const basket = {
    lowerImageSrc: "../images/backgrounds/basket.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(0),
            y: getGridPosition(3),
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
        baskethoop: new GameObject({
            x: getGridPosition(5),
            y: getGridPosition(-1),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(3),
            sprite: {
                object: {
                    src: '../images/objects/hoop.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 48,
                    imageHeight: 64
                },
            },
        }),
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(0,3)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
    initialInteractions: [
        {type: 'walk', who: 'miniMe', direction: 'right'},
        {type: 'message', text: 'I played basketball for 6 years'},
        {type: 'walk', who: 'miniMe', direction: 'left'},
    ],
    keepInitialInteractions: true
};