export default class InteractionInput {
    private keyPressFunction: EventListener;
    private touchFunction: EventListener;
    constructor(callback: Function) {
        this.keyPressFunction = function(event: KeyboardEvent) {
            event.key === ' ' && callback();
        }

        this.touchFunction = function() {
            console.log('touch start'); 
            callback();
        }

        document.addEventListener('keypress', this.keyPressFunction);
        document.getElementById('button-a').addEventListener('touchstart', this.touchFunction)
    }

    unbind() {
        document.removeEventListener('keypress', this.keyPressFunction);
        document.getElementById('button-a').removeEventListener('touchstart', this.touchFunction)
    }
}