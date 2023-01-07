import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';
import carAnimations from '../sprites/car';

export const outside = {
    lowerImageSrc: "../images/backgrounds/exterior.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(26), //x: getGridPosition(10),
            y: getGridPosition(23), //y: getGridPosition(10),
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
                    animations: miniMeAnimations
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                    imageWidth: 64,
                    imageHeight: 64
                }
            },
            isHidden: true,
        }),
        car: new Character({
            x: getGridPosition(10), //x: getGridPosition(10),
            y: getGridPosition(23), //y: getGridPosition(10),
            isPlayer: false,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/car.png',
                    width: getGridPosition(4),
                    height: getGridPosition(3),
                    animations: carAnimations
                },
            },
            isCameraView: true,
            speedMultiplier: 2,
            // behaviorLoop: [
            //     { type: 'walk', direction: 'right' }
            // ]
        }),
        house: new GameObject({
            x: getGridPosition(48),
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
        signEduExp: new GameObject({
            x: getGridPosition(39),
            y: getGridPosition(15),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/sign-outside.png',
                    width: getGridPosition(3),
                    height: getGridPosition(3),
                },
            },
            interactions: [
                {
                    events: [{
                        type: 'message', 
                        text: `Education ←`
                    },
                    {
                        type: 'message', 
                        text: `Experience ←`
                    }]
                }
            ],
        }),
        // Education Building
        techSkillsMuseum: new GameObject({
            x: getGridPosition(28),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(8),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/museum2.png',
                    width: getGridPosition(8),
                    height: getGridPosition(6),
                },
            },
        }),
        // Education Building
        college: new GameObject({
            x: getGridPosition(27),
            y: getGridPosition(-1),
            hasShadow: false,
            width: getGridPosition(12),
            height: getGridPosition(9),
            sprite: {
                object: {
                    src: '../images/objects/college.png',
                    width: getGridPosition(13),
                    height: getGridPosition(13),
                    imageWidth: getGridPosition(26),
                    imageHeight: getGridPosition(26)
                },
            },
        }),
        //PROFESSIONAL EXPERIENCE BUILDINGS
        farfetch: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(9),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/farfetch.png',
                    width: 96,
                    height: 176
                },
            },
        }),
        farfetchInfo: new GameObject({
            x: getGridPosition(23),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            collisionOffset: {
                width: 0,
                height: getGridPosition(-1)
            },
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
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
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(6),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/dotlogic.png',
                    width: 96,
                    height: 144,
                },
            },
        }),
        blip: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(9),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/blip2.png',
                    width: 96,
                    height: 176,
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
                },
            },
        }),
        // SOCIAL BILLBOARDS
        socialGithub: new GameObject({
            x: getGridPosition(18),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/social-github.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                },
            },
        }),
        socialLinkedin: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/social-linkedin.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                },
            },
        }),
        
        //OTHERS
        // padel: new GameObject({
        //     x: getGridPosition(30),
        //     y: getGridPosition(5),
        //     hasShadow: false,
        //     width: getGridPosition(8),
        //     height: getGridPosition(4),
        //     sprite: {
        //         object: {
        //             src: '../images/objects/padel.png',
        //             width: getGridPosition(8),
        //             height: getGridPosition(4),
        //             imageWidth: getGridPosition(8),
        //             imageHeight: getGridPosition(4)
        //         },
        //     },
        // }),
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(50,6)]: [
            {
                events: [
                    { type: 'changeMap', map: 'professionalExpRoom'},
                ]
            }
        ],
        [getGridCoord(54,17)]: [
            {
                events: [
                    { type: 'changeMap', map: 'basket'},
                ]
            }
        ],
        [getGridCoord(55,17)]: [
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
        ],
        [getGridCoord(12,19)]: [
            {
                events: [
                    {type: 'message', text: 'You are not allowed to enter the building since you no longer work here'},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(11,19)]: [
            {
                events: [
                    {type: 'message', text: 'You are not allowed to enter the building since you no longer work here'},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(19,19)]: [
            {
                events: [
                    { type: 'changeMap', map: 'farfetch'},
                ]
            }
        ],
        [getGridCoord(20,19)]: [
            {
                events: [
                    { type: 'changeMap', map: 'farfetch'},
                ]
            }
        ],
        [getGridCoord(29,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'techskills'},
                ]
            }
        ],
    },
    initialInteractions: [
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'walk', who: 'car', direction: 'right'},
        {type: 'idle', who: 'car', direction: 'down', time: 200},
        {type: 'changeCameraView', who: 'miniMe'},
        {type: 'show', who: 'miniMe', direction: 'down' },
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'idle', who: 'miniMe', direction: 'down', time: 200},
        {type: 'message', text: 'Hello! 👋'},
        {type: 'message', text: 'Welcome to my virtual CV. Feel free to walk around the rooms and explore'},
    ]
};


createLinearWall({coord: 'x', x: 0, y: 3, n:25, map: outside});
createLinearWall({coord: 'x', x: 27, y: 3, n: 19, map: outside});
createLinearWall({coord: 'y', x: 46, y: 3, n: 6, map: outside});
createLinearWall({coord: 'x', x: 46, y: 8, n: 3, map: outside});
createLinearWall({coord: 'x', x: 51, y: 8, n: 3, map: outside});