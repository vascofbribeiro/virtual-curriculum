import Sprite from "./Sprite";

export default class Character {
    private _ctx: CanvasRenderingContext2D;
    private _name: string;
    private _characterSprite: Sprite;
    private _shadowSprite: Sprite;
    private _sprite: Sprite
    private _x: number;
    private _y: number;
    private _hasShadow: boolean;

    readonly CHARACTER_WIDTH: number = 64;
    readonly CHARACTER_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(ctx: CanvasRenderingContext2D, config: { x?: number, y?: number, name: string, hasShadow?: boolean }) {
        this._ctx = ctx;
        this._name = config.name;
        this._x = config.x || 0;
        this._y = config.y || 0;
        
        this._characterSprite = new Sprite({
            characterObject: this,
            src: '../images/characters/ash.png',
            width: this.CHARACTER_WIDTH,
            height: this.CHARACTER_HEIGHT
        });

        this._hasShadow = config.hasShadow;
        this._shadowSprite = this._hasShadow && new Sprite({
            characterObject: this,
            src: '../images/characters/shadow.png',
            width: this.SHADOW_WIDTH,
            height: this.SHADOW_HEIGHT
        });
    }

    public draw() {
        this._hasShadow && this._shadowSprite.draw(this._ctx);
        this._characterSprite.draw(this._ctx);
    }

    public updatePosition(type: string) {
        type === 'ArrowDown' && this._y++;
        type === 'ArrowUp' && this._y--;
        type === 'ArrowRight' && this._x++;
        type === 'ArrowLeft' && this._x--;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public set x(pos: number) {
        this._x = pos;
    }

    public set y(pos: number) {
        this._y = pos;
    }
}