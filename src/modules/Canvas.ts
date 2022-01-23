export default class Canvas {
    private _element: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D

    constructor(id: string) {
        this._element = document.getElementById("game-canvas") as HTMLCanvasElement;
        this._ctx = this._element.getContext("2d");    
    }

    public get context() {
        return this._ctx;
    }

    public drawBackground(type: string) {
        const image = new Image();

        image.onload = () => {
            this._ctx.drawImage(image, 0, 0)
        };

        image.src = '../images/backgrounds/room.png';
        image.width = 100
    }
}