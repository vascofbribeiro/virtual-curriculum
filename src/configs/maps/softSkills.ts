import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimation from '../sprites/miniMe';
import statues from '../sprites/statues';

export const softSkills = {
    lowerImageSrc: "../images/backgrounds/soft-skills.png",
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
                                `- Creative`,
                                `- Problem solver`,
                                `- Teamwork`,
                                `- Adaptability`,
                                `- Curiosity`
                            ],
                        },
                    ]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
        }),
        statues: new GameObject({
            x: getGridPosition(1.5),
            y: getGridPosition(1),
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/statues.png',
                    width: getGridPosition(8),
                    height: getGridPosition(3),
                    animations: statues
                }
            },
        })        
    },
    limits: {
        xMin: 5 * 16,
        yMin: 4 * 16,
        xMax: 5 * 16,
        yMax: 6 * 16 // don't forget getGridPosition
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

createLinearWall({coord: 'x', x: 0, y: 4, n: 10, map: softSkills});
createLinearWall({coord: 'y', x: 0, y: -1, n: 10, map: softSkills});
createLinearWall({coord: 'x', x: 0, y: 8, n: 10, map: softSkills});
createLinearWall({coord: 'x', x: 0, y: 9, n: 10, map: softSkills});
createLinearWall({coord: 'y', x: 10, y: -1, n: 10, map: softSkills});