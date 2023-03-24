import GameObject from './GameObject';
import { LIMITS_OFFSET } from '../constants';
import { getGridPosition } from '../utils/grid';

export default class CameraView {
    public gameObject: GameObject;
    public limits?: {
        xMin: number;
        xMax: number;
        yMin: number;
        yMax: number
    };
    public LIMITS_OFFSET?: {
        xMin: number;
        yMin: number;
        xMax: number;
        yMax: number
    }

    constructor() {
        this.gameObject = null;
        this.limits = null;
        this.LIMITS_OFFSET = {
            xMin: 0,
            yMin: 0,
            xMax: 0,
            yMax: 0,
        }
    }

    public setObject(gameObject: GameObject) {
        this.gameObject = gameObject;
    }

    public setLimits(limits: { 
        xMin: number,
        yMin: number,
        xMax: number,
        yMax: number
    }) {
        if(!limits) {
            this.limits = null;
        } else {
            // Prevent camera limits to change map location
            const xMin = limits.xMin + this.LIMITS_OFFSET.xMin;
            const yMin = limits.yMin + this.LIMITS_OFFSET.yMin;
            const xMax = limits.xMax - this.LIMITS_OFFSET.xMax;
            const yMax = limits.yMax - this.LIMITS_OFFSET.yMax;
            
            this.limits = {
                xMin: xMin > xMax ? xMax : xMin,
                yMin: yMin > yMax ? yMax : yMin,
                xMax,
                yMax
            }
        }
    }

    public getXView() {
        if(!this.limits) {
            return this.gameObject.x;
        }
        if(this.gameObject.x < this.limits.xMin) {
            return this.limits.xMin;
        }
        if(this.gameObject.x > this.limits.xMax) {
            return this.limits.xMax;
        }

        return this.gameObject.x;
    }

    public getYView() {
        if(!this.limits) {
            return this.gameObject.y;
        }
        if(this.gameObject.y < this.limits.yMin) {
            return this.limits.yMin;
        }
        if(this.gameObject.y > this.limits.yMax) {
            return this.limits.yMax;
        }
        
        return this.gameObject.y;
    }

    public setLimitsOffset(width: number) {
        this.LIMITS_OFFSET = {
            xMin: getGridPosition(LIMITS_OFFSET[width].xMin),
            yMin: getGridPosition(LIMITS_OFFSET[width].yMin),
            xMax: getGridPosition(LIMITS_OFFSET[width].xMax),
            yMax: getGridPosition(LIMITS_OFFSET[width].yMax),
        }
    }
}