import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';

export const bar = {
    lowerImageSrc: "../images/backgrounds/hobbies.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(5),
            y: getGridPosition(8),
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
                    animations: miniMeAnimation
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
        altar: new GameObject({
            x: getGridPosition(5),
            y: getGridPosition(5),
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/altar.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32
                }
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Soft Skills',
                            textLines:  [
                                `- Creativity`,
                                `- Teamwork`,
                                `- Problem solver`,
                                `- Adaptability`,
                            ],
                        },
                    ]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
        })        
    },
    limits: {
        xMin: 5 * 16,
        yMin: 5 * 16,
        xMax: 5 * 16,
        yMax: 5 * 16 // don't forget getGridPosition
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(5,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
    },
};