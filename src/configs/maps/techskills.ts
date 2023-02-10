import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';

export const techskills = {
    lowerImageSrc: "../images/backgrounds/museum.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(6),
            y: getGridPosition(16),
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
            }
        }),
        avatarJs: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/js-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [{type: 'message', text: 'I have been working with JS for 6 years'}]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/6years.png'
            }
        }),
        avatarNode: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/node-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I have been working with NodeJS for the last 3 years'},
                        {type: 'message', text: "The projects I'm working with right now envolves xpto"}
                    ]
                }
            ],
        }),
        avatarGit: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/git-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [
                        {type: 'message', text: `I've been using Git for 5 years at Farfetch and on my personal projects`},
                    ]
                }
            ],
            interactionIcon: {
                nearby: '../images/objects/6years.png'
            },
        }),
        avatarDocker: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/docker-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarReact: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/react-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarDevtools: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/chromedev-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarCss: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/css-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarTypescript: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/typescript-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarWebpack: new GameObject({
            x: getGridPosition(2),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/webpack-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarJest: new GameObject({
            x: getGridPosition(6),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/jest-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
        avatarPerformance: new GameObject({
            x: getGridPosition(10),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/performance-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
                nearby: '../images/objects/3years.png'
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'I worked with React on a daily basis for 3 years but now I use more VanillaJS'}
                    ]
                }
            ],
        }),
    },
    limits: {
        xMin: 6 * 16,
        yMin: 4 * 16,
        xMax: 6 * 16,
        yMax: 12 * 16 // don't forget getGridPosition
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(6,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
        [getGridCoord(7,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
};