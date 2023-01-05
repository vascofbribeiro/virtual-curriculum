import { professionalExpRoom } from './maps/professionalExpRoom';
import { hobbies } from './maps/hobbies';
import { outside } from './maps/outside';
import { techskills } from './maps/techskills';
import { basket } from './maps/basket';
import { beach } from './maps/beach';
import { bar } from './maps/bar';
import { farfetch } from './maps/farfetch';

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
    hobbies,
    outside,
    techskills,
    basket,
    beach,
    bar,
    farfetch
}


//createDoor({x: 10, y: 1, map: mapsConfig.outside, nextMap: 'professionalExpRoom'});

// function createDoor({x, y, map, nextMap}) {
//     map.doors[`${getGridCoord(x,y)}`] = nextMap
//     console.log(map.doors);
// }
