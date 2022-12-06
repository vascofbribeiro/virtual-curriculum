import Character from '../modules/Character';
import GameObject from '../modules/GameObject';
import { getGridPosition, getGridCoord } from '../utils/grid';

// var canvas = document.querySelector('#game-canvas');
// fitToContainer(canvas);

// function fitToContainer(canvas){
//   // Make it visually fill the positioned parent
//   canvas.style.width ='100%';
//   canvas.style.height='100%';
//   // ...then set the internal size to match
//   canvas.width  = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// }

export const mapsConfig = {
    professionalExpRoom: {
        lowerImageSrc: "../images/backgrounds/generic.png",
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
                interaction: {
                    title: 'coiso',
                    message: 'cenas'
                },
                behaviorLoop: [
                    {type: 'walk', direction: 'right'},
                    {type: 'walk', direction: 'right'},
                    {type: 'idle', direction: 'up', time: 1000},
                    {type: 'idle', direction: 'right', time: 1000},
                    {type: 'idle', direction: 'down', time: 1000},
                    {type: 'idle', direction: 'left', time: 1000},
                    {type: 'walk', direction: 'left'},
                    {type: 'walk', direction: 'left'}
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
            // piano: new GameObject({
            //     x: getGridPosition(7),
            //     y: getGridPosition(4),
            //     name: "Piano",
            //     hasShadow: false,
            //     width: getGridPosition(2),
            //     height: getGridPosition(2),
            //     sprite: {
            //         object: {
            //             src: '../images/objects/piano.png',
            //             width: getGridPosition(2),
            //             height: getGridPosition(2),
            //             imageWidth: 96,
            //             imageHeight: 96
            //         },
            //     },
            //     interaction: {
            //         side: ["up", "down"],
            //     }
            // }),
            avatarjs: new GameObject({
                x: getGridPosition(25),
                y: getGridPosition(0.5),
                name: "Piano",
                hasShadow: false,
                width: getGridPosition(2),
                height: getGridPosition(2),
                sprite: {
                    object: {
                        src: '../images/objects/js-avatar.png',
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
            avatarnode: new GameObject({
                x: getGridPosition(28),
                y: getGridPosition(0.5),
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
                y: getGridPosition(0.5),
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
            piano: new GameObject({
                x: getGridPosition(7),
                y: getGridPosition(2),
                name: "Piano",
                hasShadow: false,
                width: getGridPosition(2),
                height: getGridPosition(1),
                sprite: {
                    object: {
                        src: '../images/objects/piano.png',
                        width: getGridPosition(2),
                        height: getGridPosition(2),
                        imageWidth: 96,
                        imageHeight: 96
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
createLinearWall({coord: 'x', x: 0, y: 50, n:20, map: mapsConfig.professionalExpRoom});
createLinearWall({coord: 'y', x: 100, y: 0, n:11, map: mapsConfig.professionalExpRoom});

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
