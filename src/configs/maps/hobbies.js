import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition } from '../../utils/grid';

export const hobbies = {
    lowerImageSrc: "../images/backgrounds/hobbies.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(1),
            y: getGridPosition(1),
            name: 'Vasco',
            isPlayer: true,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/sprite-vasco.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                    imageWidth: 64,
                    imageHeight: 64
                }
            }
        }),
        piano: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(2),
            name: "Piano",
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/piano.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                    imageWidth: 96,
                    imageHeight: 96
                },
            },
            interaction: {
                side: ["up", "down"],
            }
        })
    },
    initialInteractions: [
        { type: 'message', text: 'This is the hobbies room!!'},
    ],
    /*interactions: {
        statue: {

        }
    },*/
    walls: {},
};