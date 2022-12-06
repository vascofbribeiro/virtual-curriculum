import { IBehavior } from "../interfaces/IBehavior";
import { InteractionMessage } from "./InteractionMessage";
import Map from "./Map";

export default class GameEvent {
    private map: Map;
    private event: IBehavior;

    constructor({map, event}: {map: Map, event: IBehavior}) {
        this.map = map;
        this.event = event;
    }

    private idle(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(
            {
                map: this.map
            }, 
            {
                type: 'idle',
                direction: this.event.direction,
                time: this.event.time
            }
        )

        const completeHandler = (event: any) => {
            if(event.detail.whoId === this.event.who) {
                document.removeEventListener('CharacterIdleComplete', completeHandler);
                resolve();
            }
        }

        document.addEventListener('CharacterIdleComplete', completeHandler);
    }

    private walk(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(
            {
                map: this.map
            }, 
            {
                type: 'walk',
                direction: this.event.direction,
                retry: true
            }
        )

        const completeHandler = (event: any) => {
            if(event.detail.whoId === this.event.who) {
                document.removeEventListener('CharacterWalkComplete', completeHandler);
                resolve();
            }
        }

        document.addEventListener('CharacterWalkComplete', completeHandler);
    }

    private message(resolve: Function) {
        this.map.isInteracting = true;
        const message = new InteractionMessage({
            text: this.event.text,
            onComplete: () => {
                this.map.isInteracting = false;
                console.log('free interaction');
                resolve();
            }
        })

        message.init(document.querySelector('.game-container'))
    }

    private interaction(resolve: any) {

    }

    public init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}