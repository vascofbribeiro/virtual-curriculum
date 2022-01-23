import Canvas from './modules/Canvas';
import Character from './modules/Character';

const gameCanvas = new Canvas('game-canvas');

gameCanvas.drawBackground();

const vasco = new Character(gameCanvas.context, {x: 0, y: 0, name: 'Vasco', hasShadow: true});
const vasco2 = new Character(gameCanvas.context, {x: 4, y: 2, name: 'Vasco 2', hasShadow: true});

setTimeout(() => {
    vasco.draw();
    vasco2.draw();
}, 200);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    vasco.updatePosition(keyName);
    gameCanvas.drawBackground();
    vasco.draw();
    vasco2.draw();
});
