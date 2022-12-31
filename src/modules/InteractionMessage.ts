import InteractionInput from "./InteractionInput";
import { Typewriter } from "./Typewriter";

export class InteractionMessage {
    private _text: string;
    private _onComplete: Function;
    public element: HTMLElement;
    private interactionListener: InteractionInput;
    private typewriter: Typewriter;
    
    constructor({ text, onComplete }: { text: string, onComplete: Function}) {
        this._text = text;
        this._onComplete = onComplete;
        this.element = null;
    }

    private createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('message');
        this.element.innerHTML = `
            <p class="message-p"></p>
            <button class="message-button">X</button>
        `

        // Typewriter effect
        this.typewriter = new Typewriter({
            element: this.element.querySelector('.message-p'),
            text: this._text,

        });

        this.element.querySelector('.message-button').addEventListener('click', () => {
            this.done();
        });

        this.interactionListener = new InteractionInput(() => {
            this.done()
        });
    }

    public done() {
        if (this.typewriter.isDone) { 
            this.element.remove();
            this.interactionListener.unbind();
            this._onComplete()
        } else {
            this.typewriter.warpToDone();
        }
    }

    public init(container: HTMLElement) {
        this.createElement()
        container.appendChild(this.element)

        this.typewriter.init()
    }
}