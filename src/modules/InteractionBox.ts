import InteractionInput from "./InteractionInput";

export class InteractionBox {
    private _title: string;
    private _textLines: Array<string>;
    private _onComplete: Function;
    public element: HTMLElement;
    private spacebarListener: InteractionInput;
    
    constructor({ title, textLines, onComplete }: { title: string, textLines: Array<string>, onComplete: Function}) {
        this._title = title;
        this._textLines = textLines;
        this._onComplete = onComplete;
        this.element = null;
    }

    private createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('interaction-box');

        //Use join after map since template literal will use a comma to join the elements
        const textLines = this._textLines.map((textLine) => {
            return `<p class="interaction-box-text">${textLine}</p>`
        }).join('');

        this.element.innerHTML = `
            <p class="interaction-box-title"> ${this._title} </p>
            <div class="interaction-box-container">
                ${textLines}
            </div>
            <button class="message-button">X</button>
        `

        this.element.querySelector('.message-button').addEventListener('click', () => {
            this.done();
        });

        this.spacebarListener = new InteractionInput(() => {
            this.spacebarListener.unbind();
            this.done()
        });
    }

    public done() {
        this.element.remove();
        this._onComplete()
    }

    public init(container: HTMLElement) {
        this.createElement()

        container.appendChild(this.element)
    }
}