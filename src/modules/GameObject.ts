import Sprite from "./Sprite";

export default class GameObject {
    private _name: string;
    private _objectSprite: Sprite;
    private _shadowSprite: Sprite;
    private _hasShadow: boolean;
    public x: number;
    public y: number;
    public direction: "up" | "down" | "left" | "right";

    readonly OBJECT_WIDTH: number = 64;
    readonly OBJECT_HEIGHT: number = 64;
    readonly SHADOW_WIDTH: number = 32;
    readonly SHADOW_HEIGHT: number = 32;

    constructor(config: { x?: number, y?: number, name: string, hasShadow?: boolean, objectSpriteSrc: string, shadowSpriteSrc: string }) {
        this._name = config.name;
        this.x = config.x || 0;
        this.y = config.y || 0;
        
        this._objectSprite = new Sprite({
            characterObject: this,
            src: config.objectSpriteSrc,
            width: this.OBJECT_WIDTH,
            height: this.OBJECT_HEIGHT
        });

        this._hasShadow = config.hasShadow;
        this._shadowSprite = this._hasShadow && new Sprite({
            characterObject: this,
            src: config.shadowSpriteSrc,
            width: this.SHADOW_WIDTH,
            height: this.SHADOW_HEIGHT
        });

        this.direction = 'down';
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this._hasShadow && this._shadowSprite.draw(ctx);
        this._objectSprite.draw(ctx);
    }

    public update(arrow: "up" | "down" | "left" | "right" | undefined) {

    }
}