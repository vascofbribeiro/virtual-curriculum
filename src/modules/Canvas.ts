export default class Canvas {
    private _element: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D
    private _backgroundImage: HTMLImageElement;

    constructor(id: string) {
        this._element = document.getElementById(id) as HTMLCanvasElement;
        this._ctx = this._element.getContext("2d");

        this._backgroundImage = new Image();

        this._backgroundImage.onload = () => {
            this._ctx.drawImage(this._backgroundImage, 0, 0)
        };

        this._backgroundImage.src = '../images/backgrounds/floor16.png';
    }

    public get context() {
        return this._ctx;
    }

    public drawBackground() {
        this._ctx.drawImage(this._backgroundImage, 0, 0)
    }
}