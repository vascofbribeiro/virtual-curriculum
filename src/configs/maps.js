import Character from '../modules/Character';
import GameObject from '../modules/GameObject';
import { getGridPosition, getGridCoord } from '../utils/grid';

export const mapsConfig = {
    professionalExpRoom: {
        lowerImageSrc: "../images/backgrounds/floor16.png",
        gameObjects: {
            miniMe: new Character({
                x: getGridPosition(0),
                y: getGridPosition(0),
                name: 'Vasco',
                isPlayer: true,
                hasShadow: true,
                width: getGridPosition(1),
                height: getGridPosition(1),
                sprite: {
                    object: {
                        src: '../images/characters/ash.png',
                        width: 32,
                        height: 32,
                        imageWidth: 64,
                        imageHeight: 64
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
                x: getGridPosition(5),
                y: getGridPosition(2),
                name: 'NPC',
                hasShadow: true,
                width: getGridPosition(1),
                height: getGridPosition(1),
                sprite: {
                    object: {
                        src: '../images/characters/ash.png',
                        width: 32,
                        height: 32,
                        imageWidth: 64,
                        imageHeight: 64
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
            statue: new GameObject({
                x: getGridPosition(7),
                y: getGridPosition(2),
                name: "Statue",
                hasShadow: false,
                width: getGridPosition(1),
                height: getGridPosition(3),
                sprite: {
                    object: {
                        src: '../images/objects/statue.png',
                        width: getGridPosition(2),
                        height: getGridPosition(3),
                        imageWidth: 500,
                        imageHeight: 800
                    },
                },
                interaction: {
                    side: ["up", "down"],
                }
            })
        },
        /*interactions: {
            statue: {

            }
        },*/
        walls: {}
    },
    // outside: {
    //     lowerImageSrc: "../images/backgrounds/grass.png",
    //     gameObjects: {
    //         miniMe: new Character({
    //             x: getGridPosition(1),
    //             y: getGridPosition(1),
    //             name: 'Vasco',
    //             hasShadow: true,
    //             objectSpriteSrc: '../images/characters/ash.png',
    //             shadowSpriteSrc: '../images/characters/shadow.png',
    //             isPlayer: true,
    //         }),
    //         npc: new Character({
    //             x: getGridPosition(5),
    //             y: getGridPosition(2),
    //             name: 'Vasco',
    //             hasShadow: true,
    //             objectSpriteSrc: '../images/characters/ash.png',
    //             shadowSpriteSrc: '../images/characters/shadow.png',
    //         })
    //     }
    // }
}

createLinearWall({coord: 'x', x: 0, y: -2, n:20, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'y', x: -1, y: -2, n:11, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'x', x: 0, y: 9, n:20, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'y', x: 20, y: -2, n:11, map: mapsConfig.professionalExpRoom});

function createLinearWall(config) {
    for(let i=config[config.coord]; i < config[config.coord] + config.n; i++) {
        if(config.coord==='x') {
            config.map.walls[getGridCoord(i, config.y)] = true;
        } else if(config.coord==='y') {
            config.map.walls[getGridCoord(config.x, i)] = true;
        }
    }
}