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

export const CANVAS_SCALE: Record<string, number> = {
    '1056': 3,
    '960': 3,
    '752': 4,
}

export const CANVAS_POSITION: Record<string, TCoord> = {
    '1056': {
        x: 11,
        y: 6
    },
    '960': {
        x: 9,
        y: 6
    },
    '752': {
        x: 6,
        y: 9
    },
}

export const LIMITS_OFFSET: Record<string, TLimits> = {
    '1056': {
        xMin: 0,
        yMin: 0,
        xMax: 0,
        yMax: 0
    },
    '960': {
        xMin: -2,
        yMin: 0,
        xMax: 0,
        yMax: 0
    },
    '752': {
        xMin: -5,
        yMin: 3,
        xMax: -5,
        yMax: 4
    },
}

export const MAX_WIDTH_MOBILE = 991;