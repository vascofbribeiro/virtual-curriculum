import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
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
                    events: [{type: 'message', text: 'Javascript'}]
                }
            ],
            label: 'Javascript'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'NodeJS'}
                    ]
                }
            ],
            label: 'NodeJS'
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
                        {type: 'message', text: `Git - Version Control System`},
                    ]
                }
            ],
            label: 'Git'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Docker'}
                    ]
                }
            ],
            label: 'Docker'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'React'}
                    ]
                }
            ],
            label: 'React'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Chrome DevTools'}
                    ]
                }
            ],
            label: 'Dev Tools'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'CSS'}
                    ]
                }
            ],
            label: 'CSS'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Typescript'}
                    ]
                }
            ],
            label: 'Typescript'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Webpack'}
                    ]
                }
            ],
            label: 'Webpack'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Jest - Unit Tests'}
                    ]
                }
            ],
            label: 'Jest'
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
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Website Performance'}
                    ]
                }
            ],
            label: 'Performance'
        }),
    },
    limits: {
        xMin: getGridPosition(6),
        yMin: getGridPosition(4),
        xMax: getGridPosition(6),
        yMax: getGridPosition(12) 
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

createLinearWall({coord: 'y', x: 0, y: -1, n: 17, map: techskills});
createLinearWall({coord: 'y', x: 13, y: -1, n: 17, map: techskills});
createLinearWall({coord: 'x', x: 0, y: 16, n: 13, map: techskills});
createLinearWall({coord: 'x', x: 0, y: 17, n: 13, map: techskills});
createLinearWall({coord: 'x', x: 0, y: 1, n: 13, map: techskills});


createLinearWall({coord: 'x', x: 1, y: 5, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 5, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 1, y: 7, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 7, n: 5, map: techskills});

createLinearWall({coord: 'x', x: 1, y: 11, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 11, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 1, y: 13, n: 5, map: techskills});
createLinearWall({coord: 'x', x: 8, y: 13, n: 5, map: techskills});

