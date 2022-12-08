import InteractionInput from "./InteractionInput";

export class InteractionMessage {
    private _text: string;
    private _onComplete: Function;
    public element: HTMLElement;
    private spacebarListener: any;
    
    constructor({ text, onComplete }: { text: string, onComplete: Function}) {
        this._text = text;
        this._onComplete = onComplete;
        this.element = null;
    }

    private createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('message');
        this.element.innerHTML = `
            <p class="message-p"> ${this._text} </p>
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
        console.log('remove');
        this.element.remove();
        this._onComplete()
    }

    public init(container: HTMLElement) {
        this.createElement()

        container.appendChild(this.element)
    }
}