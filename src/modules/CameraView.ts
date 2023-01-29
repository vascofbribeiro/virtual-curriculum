import GameObject from './GameObject';
import { limitsOffset } from '../constants';

export default class CameraView {
    public gameObject: GameObject;
    public limits?: {
        xMin: number,
        yMin: number,
        xMax: number,
        yMax: number
    };
    public limitsOffset?: {
        x: number;
        y: number;
    }
    private DEFAULT_SCALE = 352

    constructor() {
        this.gameObject = null;
        this.limits = null;
        this.limitsOffset = {
            x: 0,
            y: 0
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
                xMin: limits.xMin + this.limitsOffset.x,
                yMin: limits.yMin + this.limitsOffset.y,
                xMax: limits.xMax - this.limitsOffset.x,
                yMax: limits.yMax - this.limitsOffset.y
            }
        }
        console.log('LIMITS', this.limits)
    }

    public getXView() {
        if(!this.limits) {
            return this.gameObject.x;
        }
        if(this.gameObject.x < this.limits.xMin) {
            console.log('x min')
            return this.limits.xMin;
        }
        if(this.gameObject.x > this.limits.xMax) {
            console.log('x max')
            return this.limits.xMax;
        }
        
        return this.gameObject.x;
    }

    public getYView() {
        if(!this.limits) {
            return this.gameObject.y;
        }
        if(this.gameObject.y < this.limits.yMin) {
            console.log('y min')
            return this.limits.yMin;
        }
        if(this.gameObject.y > this.limits.yMax) {

            console.log('y max')
            return this.limits.yMax;
        }
        
        return this.gameObject.y;
    }

    public setLimitsOffset(width: number) {
        this.limitsOffset = {
            x: limitsOffset[width].x * 16,
            y: limitsOffset[width].y * 16
        }
    }
}