import GameObject from './GameObject';
import { limitsOffset } from '../constants';

export default class CameraView {
    public gameObject: GameObject;
    public limits?: {
        xMin: number;
        xMax: number;
        yMin: number;
        yMax: number
    };
    public limitsOffset?: {
        xMin: number;
        yMin: number;
        xMax: number;
        yMax: number
    }
    private DEFAULT_SCALE = 352

    constructor() {
        this.gameObject = null;
        this.limits = null;
        this.limitsOffset = {
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
            this.limits = {
                xMin: limits.xMin + this.limitsOffset.xMin,
                yMin: limits.yMin + this.limitsOffset.yMin,
                xMax: limits.xMax - this.limitsOffset.xMax,
                yMax: limits.yMax - this.limitsOffset.yMax
            }
        }
        console.log('LIMITS', this.limits)
    }

    public getXView() {
        if(!this.limits) {
            return this.gameObject.x;
        }
        if(this.gameObject.x < this.limits.xMin) {
            return this.limits.xMin;
        }
        if(this.gameObject.x > this.limits.xMax) {
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
        if(this.gameObject.y > this.limits.yMax) {
            return this.limits.yMax;
        }
        
        return this.gameObject.y;
    }

    public setLimitsOffset(width: number) {
        this.limitsOffset = {
            xMin: limitsOffset[width].xMin * 16,
            yMin: limitsOffset[width].yMin * 16,
            xMax: limitsOffset[width].xMax * 16,
            yMax: limitsOffset[width].yMax * 16,
        }
    }
}