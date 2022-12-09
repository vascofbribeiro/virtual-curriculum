export default class InteractionInput {
    private keyPressFunction: EventListener;
    constructor(callback: Function) {
        this.keyPressFunction = function(event: KeyboardEvent) {
            console.log('KEY', event.key);
            event.key === ' ' && callback();
        }

        document.addEventListener('keypress', this.keyPressFunction);
    }

    unbind() {
        document.removeEventListener('keypress', this.keyPressFunction);
    }
}