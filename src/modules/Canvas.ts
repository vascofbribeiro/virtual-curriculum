export default class Canvas {
    private _element: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D

    constructor(id: string) {
        this._element = document.getElementById(id) as HTMLCanvasElement;
        this._ctx = this._element.getContext("2d");
    }

    public get context() {
        return this._ctx;
    }
}