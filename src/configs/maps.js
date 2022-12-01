import Character from '../modules/Character';
import GameObject from '../modules/GameObject';
import { getGridPosition, getGridCoord } from '../utils/grid';

export const mapsConfig = {
    professionalExpRoom: {
        lowerImageSrc: "../images/backgrounds/roomjp.png",
        gameObjects: {
            miniMe: new Character({
                x: getGridPosition(3),
                y: getGridPosition(1),
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
                x: getGridPosition(8),
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
                interaction: {
                    title: 'coiso',
                    message: 'cenas'
                }
            }),
            statue: new GameObject({
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
            })
        },
        /*interactions: {
            statue: {

            }
        },*/
        walls: {},
        doors: {
            '16,0': 'outside',
            '80,0': 'hobbies'
        }
    },
    outside: {
        lowerImageSrc: "../images/backgrounds/floor16.png",
        gameObjects: {
            miniMe: new Character({
                x: getGridPosition(9),
                y: getGridPosition(1),
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
        walls: {},
        doors: {}
    },
    hobbies: {
        lowerImageSrc: "../images/backgrounds/hobbies.png",
        gameObjects: {
            miniMe: new Character({
                x: getGridPosition(1),
                y: getGridPosition(1),
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
        walls: {},
        doors: {}
    }
}

createLinearWall({coord: 'x', x: 0, y: 0, n:20, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'y', x: 0, y: 0, n:11, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'x', x: 0, y: 9, n:20, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'y', x: 20, y: 0, n:11, map: mapsConfig.professionalExpRoom});

function createLinearWall(config) {
    for(let i=config[config.coord]; i < config[config.coord] + config.n; i++) {
        if(config.coord==='x') {
            config.map.walls[getGridCoord(i, config.y)] = true;
        } else if(config.coord==='y') {
            config.map.walls[getGridCoord(config.x, i)] = true;
        }
    }
}

createDoor({x: 10, y: 1, map: mapsConfig.outside, nextMap: 'professionalExpRoom'});

function createDoor({x, y, map, nextMap}) {
    map.doors[`${getGridCoord(x,y)}`] = nextMap
    console.log(map.doors);
}
