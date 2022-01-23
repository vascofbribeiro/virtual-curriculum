export default class Map {
    private _lowerImage: HTMLImageElement;
    private _upperImage: HTMLImageElement | null;

    constructor(config: {lowerImageSrc: string, UpperImageSrc?: string} ) {
        console.log(config);
        this._lowerImage = new Image();
        this._lowerImage.src = config.lowerImageSrc;
    }

    private drawLowerImage(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this._lowerImage, 0, 0)
    }

    private drawUpperImage(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this._upperImage, 0, 0)
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.drawLowerImage(ctx);
        this._upperImage && this.drawUpperImage(ctx);
    }
}