import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
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
                            text: 'I finally found my surfboard! I love to surf 🏄'
                        },
                    ]
                }
            ],
        })
        
    },
    limits: {
        xMin: getGridPosition(11),
        yMin: getGridPosition(6),
        xMax: getGridPosition(11),
        yMax: getGridPosition(8)
    },
    walls: {
        [getGridCoord(12, 12)]: true,
        [getGridCoord(14, 12)]: true,
        [getGridCoord(12, 13)]: true,
        [getGridCoord(14, 13)]: true
    },
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

createLinearWall({coord: 'y', x: 0, y: -1, n: 15, map: beach});
createLinearWall({coord: 'y', x: 22, y: -1, n: 15, map: beach});
createLinearWall({coord: 'x', x: 0, y: 5, n: 22, map: beach});
createLinearWall({coord: 'x', x: 0, y: 11, n: 13, map: beach});
createLinearWall({coord: 'x', x: 14, y: 11, n: 8, map: beach});
createLinearWall({coord: 'x', x: 0, y: 14, n: 22, map: beach});