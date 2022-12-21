import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';

export const professionalExpRoom = {
    lowerImageSrc: "../images/backgrounds/generic.png",
    upperImageSrc: "../images/backgrounds/generic-upper.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(9),
            y: getGridPosition(5),
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
        // npc: new Character({
        //     x: getGridPosition(9),
        //     y: getGridPosition(2),
        //     name: 'NPC',
        //     hasShadow: true,
        //     width: getGridPosition(1),
        //     height: getGridPosition(1),
        //     sprite: {
        //         object: {
        //             src: '../images/characters/sprite-vasco.png',
        //             width: 16,
        //             height: 32,
        //             imageWidth: 16,
        //             imageHeight: 32
        //         },
        //         shadow: {
        //             src: '../images/characters/shadow.png',
        //             width: 32,
        //             height: 32,
        //             imageWidth: 64,
        //             imageHeight: 64
        //         }
        //     },
        //     interactions: [
        //         {
        //             events: [{type: 'message', text: 'Feel free to walk around the rooms and explore'}]
        //         }
        //     ],
        //     behaviorLoop: [
        //         {type: 'idle', direction: 'up', time: 1000},
        //         {type: 'idle', direction: 'right', time: 1000},
        //         {type: 'idle', direction: 'down', time: 1000},
        //         {type: 'idle', direction: 'left', time: 1000},
        //     ]
        // }),
        mirror: new GameObject({
            x: getGridPosition(6),
            y: getGridPosition(0),
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
            interactions: [
                {
                    events: [{
                        type: 'interactionBox',
                        title: 'About Me',
                        textLines: [
                            "My name is Vasco and I'm currently a Front-End Developer at Farfetch.",
                            "I've been working for Farfech since September 2017 developing components and features for the website but since 2020 I moved to a more techincal team that develops tools to maximize the performance of the website and improves our developers experience",
                        ] 
                    },
                    {
                        type: 'interactionBox',
                        title: 'About Me',
                        textLines: [
                            "I studied Computer Science at FCUP (Faculdade de Ciências da Universidade do Porto)",
                            "I consider myself a creative, dedicated and curious person",
                            "I love to travel, surf and meet new people"
                        ] 
                    }]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png'
            }
        }),
    },
    actionSpaces: {
        // [getGridCoord(8,1)] : [
        //     {
        //         events: [
        //             { who: 'npc', type: 'walk', direction: 'up'},
        //             { who: 'npc', type: 'idle', direction: 'left'},
        //             { type: 'message', text: 'Dont walk there!!'},
        //         ]
        //     }
        // ],
        [getGridCoord(0,4)]: [
            {
                events: [
                    { type: 'changeMap', map: 'hobbies'},
                ]
            }
        ],
        [getGridCoord(17,4)]: [
            {
                events: [
                    { type: 'changeMap', map: 'techskills'},
                ]
            }
        ],
        [getGridCoord(9,12)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
    initialInteractions: [
        {type: 'message', text: 'Hello! 👋'},
        {type: 'message', text: 'Welcome to my virtual CV. Feel free to walk around the rooms and explore'},
    ],
    walls: {}
};