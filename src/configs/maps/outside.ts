import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';
import carAnimations from '../sprites/car';
import billboard from '../sprites/billboard';

export const outside = {
    lowerImageSrc: "../images/backgrounds/exterior.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(26), //x: getGridPosition(10),
            y: getGridPosition(24), //y: getGridPosition(10),
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
            y: getGridPosition(24), //y: getGridPosition(10),
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
        // doorHouse: new GameObject({
        //     x: getGridPosition(50),
        //     y: getGridPosition(6),
        //     hasShadow: false,
        //     width: getGridPosition(1),
        //     height: getGridPosition(1),
        //     sprite: {
        //         object: {
        //             src: '../images/doors/door-house.png',
        //             width: getGridPosition(1),
        //             height: getGridPosition(2),
        //         },
        //     },
        // }),
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
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(3),
                src: '../images/doors/door-house.png',
                width: getGridPosition(1),
                height: getGridPosition(2),
            }
        }),
        // signEduExp: new GameObject({
        //     x: getGridPosition(39),
        //     y: getGridPosition(15),
        //     hasShadow: false,
        //     width: getGridPosition(3),
        //     height: getGridPosition(2),
        //     sprite: {
        //         object: {
        //             src: '../images/objects/sign-outside.png',
        //             width: getGridPosition(3),
        //             height: getGridPosition(3),
        //         },
        //     },
        //     interactions: [
        //         {
        //             events: [{
        //                 type: 'message', 
        //                 text: `Education ←`
        //             },
        //             {
        //                 type: 'message', 
        //                 text: `Experience ←`
        //             }]
        //         }
        //     ],
        // }),
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
            door: {
                offsetX: getGridPosition(0),
                offsetY: getGridPosition(4),
                src: '../images/doors/door-techskills.png',
                width: getGridPosition(3),
                height: getGridPosition(2),
            }
        }),
        signEduExp: new GameObject({
            x: getGridPosition(28),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(3),
            sprite: {
                object: {
                    src: '../images/objects/sign-outside.png',
                    width: getGridPosition(3),
                    height: getGridPosition(3),
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
        signCollege: new GameObject({
            x: getGridPosition(29.5),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/sign-college.png',
                    width: getGridPosition(8),
                    height: getGridPosition(3),
                },
            },
        }),
        //PROFESSIONAL EXPERIENCE BUILDINGS
        farfetch: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
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
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(8.5),
                width: getGridPosition(2),
                height: getGridPosition(2),
                src: '../images/doors/door-building.png',
            }
        }),
        farfetchInfo: new GameObject({
            x: getGridPosition(23),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        // {type: 'message', text: `I'm currently working at Farfetch since 2017. My job here is to create tools and features to maximize website performance and to help developers experience`}
                        {
                            type: 'interactionBox',
                            title: 'Farfetch (Sep 2017 - Present)',
                            textLines: [
                                `I have been working as a Front-End Developer for Farfetch since 2017. My daily routine involves using Javascript/Typescript, NodeJS, React and Docker to develop and maintain the website. `,
                                `In 2020, I moved to a more technical team where we focus on improving the development experience for other front-end contributors to farfetch.com.`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'Farfetch (Sep 2017 - Present)',
                            textLines:  [
                                `In addition to this, I also contribute to the Front-End architecture of Farfetch.`,
                                `This has allowed me to expand my technical skills and have a greater impact on the overall development process at the company. I take pride in being able to play a part in shaping the direction of our codebase.`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'Farfetch (Sep 2017 - Present)',
                            textLines:  [
                                `I am excited to be a part of this team and contribute to the growth and success of Farfetch.`
                            ],
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
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(6.5),
                src: '../images/doors/door-building.png',
                width: getGridPosition(2),
                height: getGridPosition(2),
            }
        }),
        dotlogicInfo: new GameObject({
            x: getGridPosition(15),
            y: getGridPosition(18),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        // {type: 'message', text: `I'm currently working at Farfetch since 2017. My job here is to create tools and features to maximize website performance and to help developers experience`}
                        {
                            type: 'interactionBox',
                            title: 'DotLogic (Sep 2016 - Sep 2017)',
                            textLines: [
                                `At Dotlogic, I worked as a developer for a year in 2016. The company specializes in developing medical software for hospitals, with a focus on cardiology.`,
                                `I began my time at Dotlogic as a professional intern, where I had the opportunity to create a tool using Javascript and Canvas to read and display ECG data on the page`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'DotLogic (Sep 2016 - Sep 2017)',
                            textLines:  [
                                `After my internship, I was offered a full-time position at the company and continued to help improve various web tools.`,
                                `Working at Dotlogic provided me with valuable experience in the healthcare industry and solidified my skills in Javascript and web development.`
                            ],
                        },
                    ]
                }
            ],
        }), 
        blip: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
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
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(8.5),
                src: '../images/doors/door-building.png',
                width: getGridPosition(2),
                height: getGridPosition(2),
            }
        }),
        blipInfo: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Blip (Summer internship - 3 months)',
                            textLines:  [
                                `During my 3 months summer internship at Blip, I had the opportunity to work on a project to dynamically structure the front-end community documentation using JSDoc3`,
                                `This project allowed me to get some knowledge on Front End tools while working with Scrum for the first time`
                            ],
                        },
                    ]
                }
            ],
        }), 
        // BAR BUILDING
        bar: new GameObject({
            x: getGridPosition(7),
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
        socialBillboard: new GameObject({
            x: getGridPosition(16),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/billboard-social.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                    animations: billboard
                },
            },
            interactions: [
                {
                    events: [{
                        type: 'message', 
                        text: `https://github.com/vascofbribeiro`
                    }],
                }
            ],
        }),
        earth: new GameObject({
            x: getGridPosition(40),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(7),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/earth.png',
                    width: getGridPosition(7),
                    height: getGridPosition(6),
                },
            },
        }),
        suitcase: new GameObject({
            x: getGridPosition(47),
            y: getGridPosition(16),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/suitcase.png',
                    width: getGridPosition(1),
                    height: getGridPosition(2),
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
                            text:'I love to travel and discover new places 🌍'
                        },
                    ]
                }
            ],
        }),
        volunteer: new GameObject({
            x: getGridPosition(41),
            y: getGridPosition(5),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(3),
            collisionOffset: {
                height: getGridPosition(1),
                width: 0
            },
            sprite: {
                object: {
                    src: '../images/objects/volunteer.png',
                    width: getGridPosition(4),
                    height: getGridPosition(5),
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'ESN Porto (2015-1018)',
                            textLines:  [
                                `As a volunteer for ESN - Erasmus Student Network I was responsible for integrating ERASMUS students into the city of Porto.`,
                                `This was accomplished by organizing trips and activities in partnership with several companies and instituions`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'ESN Porto (2015-1018)',
                            textLines:  [
                                `My work helped to create a welcoming and inclusive environment for international students, and allowed them to fully experience and enjoy their time in Porto`,
                            ],
                        },
                    ],
                }
            ],
        }),
        padel: new GameObject({
            x: getGridPosition(0),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
            collisionOffset: {
                height: getGridPosition(1),
                width: 0
            },
            sprite: {
                object: {
                    src: '../images/objects/padel.png',
                    width: getGridPosition(6),
                    height: getGridPosition(10),
                },
            },
        }),
        // balloon: new GameObject({
        //     x: getGridPosition(39),
        //     y: getGridPosition(10),
        //     hasShadow: true,
        //     width: getGridPosition(3),
        //     height: getGridPosition(6),
        //     sprite: {
        //         object: {
        //             src: '../images/objects/balloon.png',
        //             width: getGridPosition(3),
        //             height: getGridPosition(6),
        //         },
        //     },
        // }),

        //TREES
        tree1: new GameObject({
            x: getGridPosition(31),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/tree.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                },
            },
        }),
        tree2: new GameObject({
            x: getGridPosition(35),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/tree.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                },
            },
        }),
        tree3: new GameObject({
            x: getGridPosition(33),
            y: getGridPosition(21),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/tree.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
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
    limits: {
        xMin: 11 * 16,
        yMin: 7 * 16,
        xMax: 42 * 16,
        yMax: 23 * 16 // don't forget getGridPosition
    },
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
        [getGridCoord(8,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'bar'},
                ]
            }
        ],
        [getGridCoord(12,18)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(11,18)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(3,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(4,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
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
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'idle', who: 'miniMe', direction: 'down', time: 200},
        {type: 'message', text: 'Hello! 👋 Welcome to my CV'},
        {type: 'message', text: `My name is Vasco and I'm a Front-end Developer`},
        {type: 'message', text: `Feel free to explore the rooms around!`},
    ]
};


createLinearWall({coord: 'x', x: 0, y: 3, n:25, map: outside});
createLinearWall({coord: 'x', x: 27, y: 3, n: 19, map: outside});
createLinearWall({coord: 'y', x: 46, y: 3, n: 6, map: outside});
createLinearWall({coord: 'x', x: 46, y: 8, n: 3, map: outside});
createLinearWall({coord: 'x', x: 51, y: 8, n: 3, map: outside});