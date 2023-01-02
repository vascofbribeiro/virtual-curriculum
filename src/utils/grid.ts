import { Direction } from "../types/Direction";

export const getGridPosition = (n: number): number => {
    return n * 16;
}

export const getGridCoord = (x: number, y: number): string => {
    return `${x*16},${y*16}`
}

export const getPointsFromCoord = (coord: string) => {
    const x = coord.split(',')[0];
    const y = coord.split(',')[1];
    return [x, y];
}

export const nextPosition = (initialX: number, initialY: number, direction: Direction) => {
    let x = initialX;
    let y = initialY;
    const size = 16;

    if(direction === 'right') {
        x += size;
    } else if(direction === 'left') {
        x -= size;
    } else if(direction === 'up') {
        y -=size
    } else if(direction === 'down') {
        y += size
    }

    return {x,y}
}

export const createLinearWall = (config: any) => {
    for(let i=config[config.coord]; i < config[config.coord] + config.n; i++) {
        if(config.coord==='x') {
            config.map.walls[getGridCoord(i, config.y)] = true;
        } else if(config.coord==='y') {
            config.map.walls[getGridCoord(config.x, i)] = true;
        }
    }
}