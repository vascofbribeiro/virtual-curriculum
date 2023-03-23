type TypewriterConfig = {
    element: HTMLElement;
    text: string;
    speed?: number;
}

type CharacterSpan = {
    span: HTMLElement;
    delayAfter: number;
}

export class Typewriter {
    private element: HTMLElement;
    private text: string;
    private speed: number;
    private timeout: NodeJS.Timeout;
    public isDone: boolean;

    constructor(config: TypewriterConfig) {
        this.element = config.element;
        this.text = config.text;
        this.speed = config.speed || 20;
        this.timeout = null;
        this.isDone = false;
    }

    public revealCharacter(characters: Array<CharacterSpan>) {
        const nextChar = characters.shift();
        nextChar.span.classList.add('revealed');

        if(characters.length > 0) {
            this.timeout = setTimeout(() => {
                this.revealCharacter(characters)
            }, nextChar.delayAfter)
        } else {
            this.isDone = true;
        }
    }

    public warpToDone() {
        clearTimeout(this.timeout);
        this.isDone = true;
        this.element.querySelectorAll('span').forEach((span) => {
            span.classList.add('revealed');
        })
    }

    public init() {
        let characters: Array<CharacterSpan> = [];

        this.text.split('').forEach( character => {

            let span = document.createElement('span');
            span.textContent = character;
            this.element.appendChild(span);

            characters.push({
                span,
                delayAfter: character === '' ? 0 : this.speed
            })
        })

        this.revealCharacter(characters);
    }
}