import { getGridPosition, getGridCoord } from '../utils/grid';

import { professionalExpRoom } from './maps/professionalExpRoom';
import { hobbies } from './maps/hobbies';

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
    professionalExpRoom,
    hobbies
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

//createDoor({x: 10, y: 1, map: mapsConfig.outside, nextMap: 'professionalExpRoom'});

// function createDoor({x, y, map, nextMap}) {
//     map.doors[`${getGridCoord(x,y)}`] = nextMap
//     console.log(map.doors);
// }
