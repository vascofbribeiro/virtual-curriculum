import Character from '../modules/Character';
import { getGridPosition, getGridCoord } from '../utils/grid';

export const mapsConfig = {
    professionalExpRoom: {
        lowerImageSrc: "../images/backgrounds/floor16.png",
        gameObjects: {
            miniMe: new Character({
                x: getGridPosition(0),
                y: getGridPosition(0),
                name: 'Vasco',
                hasShadow: true,
                objectSpriteSrc: '../images/characters/ash.png',
                shadowSpriteSrc: '../images/characters/shadow.png',
                isPlayer: true,
            }),
            npc: new Character({
                x: getGridPosition(5),
                y: getGridPosition(2),
                name: 'NPC',
                hasShadow: true,
                objectSpriteSrc: '../images/characters/ash.png',
                shadowSpriteSrc: '../images/characters/shadow.png',
            })
        },
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

createLinearWall({coord: 'x', x: 0, y: 0, n:10, map: mapsConfig.professionalExpRoom});

function createLinearWall(config) {
    for(let i=config[config.coord]; i < config[config.coord] + config.n; i++) {
        if(config.coord==='x') {
            config.map.walls[getGridCoord(i, config.y)] = true;
        } else if(config.coord==='y') {
            config.map.walls[getGridCoord(config.x, i)] = true;
        }
    }
}