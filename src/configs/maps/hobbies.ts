import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const hobbies = {
    lowerImageSrc: "../images/backgrounds/room.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(11),
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
                        text: 'I like to play the piano for fun. I started to learn 1 year ago',
                    }]
                }
            ]
        })
    },
    initialInteractions: [
        { who: 'miniMe', type: 'walk', direction: 'left' },
        { type: 'message', text: 'This is the hobbies room!!'},
        { type: 'message', text: "There's something wrong with light in this room. I remember there was a switch "},
        { who: 'miniMe', type: 'walk', direction: 'right' },
    ],
    walls: {},
    actionSpaces: {
        [getGridCoord(11,4)]: [
            {
                events: [
                    { type: 'changeMap', map: 'professionalExpRoom'},
                ]
            }
        ]
    },
};