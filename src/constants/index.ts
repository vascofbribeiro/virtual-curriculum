type TCoord = {
    x: number;
    y: number;  
}

type TLimits = {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}

export const canvasScale: Record<number, TCoord> = {
    1056: {
        x: 11,
        y: 6
    },

    960: {
        x: 9,
        y: 6
    },

    752: {
        x: 7.5,
        y: 11
    },
}

export const limitsOffset: Record<number, TLimits> = {
    1056: {
        xMin: 0,
        yMin: 0,
        xMax: 0,
        yMax: 0
    },
    
    960: {
        xMin: -2,
        yMin: 0,
        xMax: 0,
        yMax: 0
    },
    
    752: {
        xMin: -3,
        yMin: 5,
        xMax: -3,
        yMax: 8
    },
}