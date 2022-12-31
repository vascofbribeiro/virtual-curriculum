export class SceneTransition {
    private element: HTMLElement;

    constructor() {
        this.element = null;
    }

    public createElement() {
        this.element = document.createElement('div');
        this.element.classList.add("scene-transition");
    }

    public fadeOut() {
        this.element.classList.add('fade-out')

        this.element.addEventListener('animationend', () => {
            this.element.remove();
        }, { once: true })
    }

    public init(container: HTMLElement, callback: Function) {
        this.createElement();
        container.appendChild(this.element);

        this.element.addEventListener('animationend', () => {
            callback();
        }, { once: true })
    }
}