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
                    events: [{type: 'interactionBox', text: 'TECH SKILLS'}]
                }
            ]
        }),
        avatarjs: new GameObject({
            x: getGridPosition(4),
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
                nearby: '../images/objects/message-box.png'
            }
        }),
        avatarnode: new GameObject({
            x: getGridPosition(8),
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
            }
        }),
        avatargit: new GameObject({
            x: getGridPosition(12),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/git-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                    imageWidth: 32,
                    imageHeight: 32
                },
            }
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