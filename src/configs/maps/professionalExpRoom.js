import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const professionalExpRoom = {
    lowerImageSrc: "../images/backgrounds/main-room2.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(7),
            y: getGridPosition(5),
            name: 'Vasco',
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
        npc: new Character({
            x: getGridPosition(9),
            y: getGridPosition(2),
            name: 'NPC',
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
            },
            interactions: [
                {
                    events: [{type: 'message', text: 'Feel free to walk around the rooms and explore'}]
                }
            ],
            behaviorLoop: [
                {type: 'idle', direction: 'up', time: 1000},
                {type: 'idle', direction: 'right', time: 1000},
                {type: 'idle', direction: 'down', time: 1000},
                {type: 'idle', direction: 'left', time: 1000},
            ]
        }),
        mirror: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(0),
            name: "Statue",
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/aniamted_haunted_mirror.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32
                },
            },
            interaction: {
                title: 'Title',
                message: 'Message',
                side: ["up", "down"],
            }
        }),
        avatarjs: new GameObject({
            x: getGridPosition(25),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/js-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                    imageWidth: 32,
                    imageHeight: 32
                },
            },
            interactions: [
                {
                    events: [{type: 'message', text: 'I have working with JS for 6 years'}]
                }
            ]
        }),
        avatarnode: new GameObject({
            x: getGridPosition(28),
            y: getGridPosition(0),
            name: "Piano",
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/node-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                    imageWidth: 32,
                    imageHeight: 32
                },
            },
            interaction: {
                side: ["up", "down"],
            }
        }),
        avatargit: new GameObject({
            x: getGridPosition(31),
            y: getGridPosition(0),
            name: "Piano",
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/git-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                    imageWidth: 32,
                    imageHeight: 32
                },
            },
            interaction: {
                side: ["up", "down"],
            }
        }),
        sign: new GameObject({
            x: getGridPosition(6),
            y: getGridPosition(2),
            name: "sign",
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/sign-all.png',
                    width: getGridPosition(3),
                    height: getGridPosition(3),
                    imageWidth: 48,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [{
                        type: 'message', 
                        text: `Tech Skills →`
                    },
                    {
                        type: 'message', 
                        text: `Hobbies ←`
                    },
                    {
                        type: 'message', 
                        text: `Education ↑`
                    }]
                }
            ],
        }),
    },
    actionSpaces: {
        [getGridCoord(8,1)] : [
            {
                events: [
                    { who: 'npc', type: 'walk', direction: 'up'},
                    { who: 'npc', type: 'idle', direction: 'left'},
                    { type: 'message', text: 'Dont walk there!!'},
                ]
            }
        ],
        [getGridCoord(1,1)]: [
            {
                events: [
                    { type: 'changeMap', map: 'hobbies'},
                ]
            }
        ]
    },
    initialInteractions: [
        {who: 'npc', type: 'walk', direction:'down'},
        {who: 'npc', type: 'walk', direction:'down'},
        {who: 'npc', type: 'walk', direction:'down'},
        {who: 'npc', type: 'walk', direction:'left'},
        {who: 'miniMe', type: 'idle', direction:'right', time: 500},
        {type: 'message', text: 'Hello! 👋'},
        {type: 'message', text: 'Welcome to my virtual CV. Feel free to walk around the rooms and explore'},
    ],
    /*interactions: {
        statue: {

        }
    },*/
    walls: {}
};