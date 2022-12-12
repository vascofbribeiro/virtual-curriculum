import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const hobbies = {
    lowerImageSrc: "../images/backgrounds/roomjp.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(0),
            y: getGridPosition(7),
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
            x: getGridPosition(7.5),
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
        { who: 'miniMe', type: 'walk', direction: 'right' },
        { type: 'message', text: 'This is the hobbies room!!'},
        { type: 'message', text: 'I like to play the piano'},
    ],
    walls: {},
    actionSpaces: {
        [getGridCoord(0,7)]: [
            {
                events: [
                    { type: 'changeMap', map: 'professionalExpRoom'},
                ]
            }
        ]
    },
};