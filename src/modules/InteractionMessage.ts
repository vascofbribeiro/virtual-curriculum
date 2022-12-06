export class InteractionMessage {
    private _text: string;
    private _onComplete: Function;
    public element: HTMLElement;
    private actionListener: any;
    
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

        document.addEventListener('keypress', event => this.pressSpaceBar(event))
    }

    public done() {
        this.element.remove();
        this._onComplete()
        document.removeEventListener('keypress', this.pressSpaceBar);
    }

    private pressSpaceBar(event: KeyboardEvent) {
        if(event.key === ' ') {
            this.done();
        }
    }

    public init(container: HTMLElement) {
        this.createElement()

        container.appendChild(this.element)
    }
}