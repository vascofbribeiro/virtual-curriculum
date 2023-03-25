import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';

export const room = {
    lowerImageSrc: "../images/backgrounds/room.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(10),
            y: getGridPosition(4),
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
        piano: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/animated_wall_piano_4_32x32.gif',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                    imageWidth: 64,
                    imageHeight: 64
                },
            },
            interactions: [
                {
                    events: [{
                        type:'message',
                        text: 'I like to play the piano for fun!',
                    }]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png'
            }
        }),
        trophy: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/trophy.png',
                    width: getGridPosition(1),
                    height: getGridPosition(2),
                },
            },
            interactions: [
                {
                    events: [{
                        type:'message',
                        text: '1st Place in Porto Summer of Code 2017',
                    }]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png'
            }
        }),
        desk: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/desk.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                },
            },
        }),
        bed: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(2),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/bed.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                },
            },
        })
    },
    walls: {
        [getGridCoord(10,3)]: true,
        [getGridCoord(11,4)]: true
    },
    actionSpaces: {
        [getGridCoord(10,4)]: [
            {
                events: [
                    { type: 'changeMap', map: 'house'},
                ]
            }
        ]
    },
};

createLinearWall({coord: 'x', x: 0, y: 5, n: 11, map: room});
createLinearWall({coord: 'y', x: 0, y: 0, n: 5, map: room});
createLinearWall({coord: 'x', x: 0, y: 0, n: 11, map: room});
createLinearWall({coord: 'y', x: 9, y: 0, n: 4, map: room});