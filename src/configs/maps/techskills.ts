import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const techskills = {
    lowerImageSrc: "../images/backgrounds/techskills.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(0),
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
        computer: new GameObject({
            x: getGridPosition(2),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/computer.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [{
                        type: 'interactionBox',
                        title: 'Tech Skills',
                        textLines: [
                            "Javascript - 6 years",
                            "NodeJS - 3 years",
                            "Git - 6 years",
                            "React - 6 years",
                            "Docker - 3 years",
                            "CSS - 6 years",
                            "HTML - 6 years"
                        ] 
                    }]
                }
            ],
        }),
        avatarjs: new GameObject({
            x: getGridPosition(5),
            y: getGridPosition(0),
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
        avatarnode: new GameObject({
            x: getGridPosition(9),
            y: getGridPosition(0),
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
        avatargit: new GameObject({
            x: getGridPosition(13),
            y: getGridPosition(0),
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
            interactionIcon: {
                nearby: '../images/objects/6years.png'
            },
        }),
        avatarreact: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(0),
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
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(0,4)]: [
            {
                events: [
                    { type: 'changeMap', map: 'professionalExpRoom'},
                ]
            }
        ]
    },
};