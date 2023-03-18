import { limitsOffset } from './../../constants/index';
import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';
import boatAnimation from '../sprites/boat';

export const beach = {
    lowerImageSrc: "../images/backgrounds/beach.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(13),
            y: getGridPosition(13),
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
        boat: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(3),
            width: getGridPosition(5),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/boat.png',
                    width: getGridPosition(5),
                    height: getGridPosition(2),
                    animations: boatAnimation
                },
            }
        }),
        chair: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(8),
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/beach-chair.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2)
                },
            }
        }),
        umbrella: new GameObject({
            x: getGridPosition(5),
            y: getGridPosition(6),
            width: getGridPosition(3),
            height: getGridPosition(2),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/beach-umbrella.png',
                    width: getGridPosition(3),
                    height: getGridPosition(4)
                },
            }
        }),
        surfboard: new GameObject({
            x: getGridPosition(16),
            y: getGridPosition(8),
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/surfboard.png',
                    width: getGridPosition(1),
                    height: getGridPosition(2)
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:'Surf Addicted :D'
                        },
                    ]
                }
            ],
        })
        
    },
    limits: {
        xMin: 11 * 16,
        yMin: 6 * 16,
        xMax: 11 * 16,
        yMax: 8 * 16 // don't forget getGridPosition
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(13,13)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
};