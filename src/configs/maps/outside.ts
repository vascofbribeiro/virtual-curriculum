import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const outside = {
    lowerImageSrc: "../images/backgrounds/exterior.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(10), //x: getGridPosition(46),
            y: getGridPosition(10), //y: getGridPosition(6),
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
        house: new GameObject({
            x: getGridPosition(44),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/house.png',
                    width: getGridPosition(4),
                    height: getGridPosition(5),
                    imageWidth: 128,
                    imageHeight: 160
                },
            },
        }),
        farfetch: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/farfetch.png',
                    width: 96,
                    height: 176,
                    imageWidth: 196,
                    imageHeight: 352
                },
            },
        }),
        farfetchInfo: new GameObject({
            x: getGridPosition(23),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32
                },
            },
            interactions: [
                {
                    events: [
                        // {type: 'message', text: `I'm currently working at Farfetch since 2017. My job here is to create tools and features to maximize website performance and to help developers experience`}
                        {
                            type: 'interactionBox',
                            title: 'Farfetch',
                            textLines: [
                                `I'm currently working at Farfetch since 2017. My job here is to create tools and features to maximize website performance and to help developers experience`
                            ] 
                        }
                    ]
                }
            ],
        }), 
        dotlogic: new GameObject({
            x: getGridPosition(9),
            y: getGridPosition(14),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/dotlogic.png',
                    width: 96,
                    height: 136,
                    imageWidth: 192,
                    imageHeight: 272
                },
            },
        }),
        blip: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(3),
            sprite: {
                object: {
                    src: '../images/objects/blip.png',
                    width: 96,
                    height: 176,
                    imageWidth: 196,
                    imageHeight: 352
                },
            },
        })
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(46,6)]: [
            {
                events: [
                    { type: 'changeMap', map: 'professionalExpRoom'},
                ]
            }
        ],
        [getGridCoord(50,10)]: [
            {
                events: [
                    { type: 'changeMap', map: 'basket'},
                ]
            }
        ]
    },
};