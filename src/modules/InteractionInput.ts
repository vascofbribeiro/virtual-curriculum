export default class InteractionInput {
    private keyPressFunction: EventListener;
    private touchFunction: EventListener;
    private touchEndFunction: EventListener;
    constructor(callback: Function) {
        this.keyPressFunction = function(event: KeyboardEvent) {
            event.key === ' ' && callback();
        }

        this.touchFunction = function() {
            document.getElementById('button-a').style.backgroundColor = 'rgb(125, 174, 191)';
            console.log('touch start'); 
            callback();
        }

        this.touchEndFunction = function() {
            document.getElementById('button-a').style.backgroundColor = 'lightblue';
        }

        document.addEventListener('keypress', this.keyPressFunction);
        document.getElementById('button-a').addEventListener('touchstart', this.touchFunction)
        
        document.getElementById('button-a').addEventListener('touchend', this.touchEndFunction)
    }

    unbind() {
        document.removeEventListener('keypress', this.keyPressFunction);
        document.getElementById('button-a').removeEventListener('touchstart', this.touchFunction)
        document.getElementById('button-a').removeEventListener('touchend', this.touchEndFunction)
    }
}