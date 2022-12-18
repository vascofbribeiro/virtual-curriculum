import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const outside = {
    lowerImageSrc: "../images/backgrounds/exterior.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(46), //x: getGridPosition(10),
            y: getGridPosition(6), //y: getGridPosition(10),
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
        //PROFESSIONAL EXPERIENCE BUILDINGS
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
            y: getGridPosition(13),
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
        }),
        // BAR BUILDING
        bar: new GameObject({
            x: getGridPosition(5),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(9),
            sprite: {
                object: {
                    src: '../images/objects/bar.png',
                    width: 96,
                    height: 160,
                    imageWidth: 96,
                    imageHeight: 160
                },
            },
        }),
        // SOCIAL BILLBOARDS
        socialGithub: new GameObject({
            x: getGridPosition(18),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/social-github.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                    imageWidth: getGridPosition(5),
                    imageHeight: getGridPosition(6)
                },
            },
        }),
        //OTHERS
        padel: new GameObject({
            x: getGridPosition(30),
            y: getGridPosition(5),
            hasShadow: false,
            width: getGridPosition(8),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/padel.png',
                    width: getGridPosition(8),
                    height: getGridPosition(4),
                    imageWidth: getGridPosition(8),
                    imageHeight: getGridPosition(4)
                },
            },
        }),
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
        ],
        [getGridCoord(25,-1)]: [
            {
                events: [
                    { type: 'changeMap', map: 'beach'},
                ]
            }
        ],
        [getGridCoord(26,-1)]: [
            {
                events: [
                    { type: 'changeMap', map: 'beach'},
                ]
            }
        ],
        [getGridCoord(6,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'bar'},
                ]
            }
        ]
    },
};