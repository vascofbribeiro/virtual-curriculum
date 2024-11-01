import { IEvent } from "../interfaces/modules/IEvent";
import { InteractionMessage } from "./InteractionMessage";
import { InteractionBox } from "./InteractionBox";
import Map from "./Map";
import { SceneTransition } from "./SceneTransition";
import Character from "./Character";

export default class GameEvent {
    private map: Map;
    private event: IEvent;

    constructor({map, event}: {map: Map, event: IEvent}) {
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

        const completeHandler = (event: CustomEvent) => {
            if(event.detail.whoId === this.event.who) {
                document.removeEventListener('CharacterIdleComplete', completeHandler);
                resolve();
            }
        }

        document.addEventListener('CharacterIdleComplete', completeHandler);
    }

    private beer(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(
            {
                map: this.map
            }, 
            {
                type: 'beer'
            }
        )
    }

    
    private sober(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        who.isInteracting = true;
        who.startBehavior(
            {
                map: this.map
            }, 
            {
                type: 'sober'
            }
        )
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

        const completeHandler = (event: CustomEvent) => {
            if(event.detail.whoId === this.event.who) {
                document.removeEventListener('CharacterWalkComplete', completeHandler);
                resolve();
            }
        }

        document.addEventListener('CharacterWalkComplete', completeHandler);
    }

    private show(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(
            {
                map: this.map
            }, 
            {
                type: 'show',
                direction: this.event.direction,
            }
        )

        const completeHandler = (event: CustomEvent) => {
            if(event.detail.whoId === this.event.who) {
                document.removeEventListener('CharacterShowCompleted', completeHandler);
                resolve();
            }
        }

        document.addEventListener('CharacterShowCompleted', completeHandler);
    }

    private hide(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior(
            {
                map: this.map
            }, 
            {
                type: 'hide',
                direction: this.event.direction,
            }
        )

        const completeHandler = (event: CustomEvent) => {
            if(event.detail.whoId === this.event.who) {
                document.removeEventListener('CharacterHideCompleted', completeHandler);
                resolve();
            }
        }

        document.addEventListener('CharacterHideCompleted', completeHandler);
    }

    private message(resolve: Function) {
        //ADD logic so npc faces character
        this.map.isInteracting = true;
        const message = new InteractionMessage({
            showNote: this.event.showNote,
            isLink: this.event.isLink,
            text: this.event.text,
            onComplete: () => {
                this.map.isInteracting = false;
                resolve();
            }
        })

        message.init(document.querySelector('.game-container'))
    }

    private interactionBox(resolve: Function) {
        this.map.isInteracting = true;
        const message = new InteractionBox({
            title: this.event.title,
            textLines: this.event.textLines,
            onComplete: () => {
                this.map.isInteracting = false;
                resolve();
            }
        })

        message.init(document.querySelector('.game-container'))
    }

    private changeMap(resolve: Function) {
        const miniMe = this.map.gameObjects['miniMe'];
        if((miniMe as Character).isDrunk) {
            this.map.isInteracting = true;
            const message = new InteractionMessage({
                showNote: true,
                isLink: false,
                text: `You can't go anywhere like this. Try to take a rest first`,
                onComplete: () => {
                    this.map.isInteracting = false;
                    resolve();
                }
            })
            
            message.init(document.querySelector('.game-container'))
    
        } else {
            const sceneTransition = new SceneTransition();
            sceneTransition.init(document.querySelector('.game-container'), () => {
                this.map.engine.startMap(this.event.map)
                resolve();

                sceneTransition.fadeOut();
            }); 
        }
    }

    private changeCameraView(resolve: Function) {
        const who = this.map.gameObjects[this.event.who];
        this.map.engine.setCameraView(who);
        resolve();
    }

    public init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}