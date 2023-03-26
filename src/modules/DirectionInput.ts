import { Direction } from '../types/Direction'; 

export default class DirectionInput {
    private _heldDirections: Array<Direction>
    private _keyMap: Record<string, Direction>
    private _isDragging: boolean
    public shouldStartInteraction: boolean;

    constructor() {
        this._isDragging = false;
        this._heldDirections = [];

        this._keyMap = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right"
        }
    }

    get direction() {
        return this._heldDirections[0];
    }

    init() {
        const joystick = document.getElementById('joystick');
        const innerCircle = document.getElementById('inner-circle');

        document.addEventListener('keydown', (event) => {
            const direction = this._keyMap[event.key] as Direction
            if(direction && this._heldDirections.indexOf(direction) === -1) {
                this._heldDirections.unshift(direction);
            }
        });

        document.addEventListener('keyup', (event) => {
            const direction = this._keyMap[event.key] as Direction
            const index = this._heldDirections.indexOf(direction);
            index > -1 && this._heldDirections.splice(index, 1);
        });

        // Smartphone touch inputs
        joystick.addEventListener('touchstart', (e) => {
            this._isDragging = true;
            detectMoves(e);    
            e.preventDefault();
        },  { passive: false });

        document.addEventListener('touchend', () => {
            this._heldDirections.pop();
            this._isDragging = false;
            const rect = joystick.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            innerCircle.style.left = `${centerX}px`;
            innerCircle.style.top = `${centerY}px`;
        });

        document.addEventListener('touchmove', (e) => {
            if (this._isDragging) {
                detectMoves(e);
                
            }
          });

          const detectMoves = (e: TouchEvent) => {
                const x = e.touches[0].clientX;
                const y = e.touches[0].clientY;
                const rect = joystick.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = x - centerX;
                const deltaY = y - centerY;
                const angle = Math.atan2(deltaY, deltaX);
                const distance = Math.min(Math.hypot(deltaX, deltaY), rect.width / 2);
                const innerCircleX = centerX + distance * Math.cos(angle);
                const innerCircleY = centerY + distance * Math.sin(angle);
                innerCircle.style.left = `${innerCircleX - rect.left}px`;
                innerCircle.style.top = `${innerCircleY - rect.top}px`;
                const directions = {
                    x: deltaX >= 0 ? Math.min(deltaX, rect.width/2) : Math.max(deltaX, -rect.width/2),
                    y: deltaY >= 0 ? Math.min(deltaY, rect.height/2) : Math.max(deltaY, -rect.height/2)
                }

                // If distance is not enough dont walk
                if(Math.abs(directions.x) < rect.width/8 && Math.abs(directions.y) < rect.height/8) {
                    return this._heldDirections.pop();
                }

                const orientation = Math.abs(directions.x) > Math.abs(directions.y) ? 'x' : 'y';
                const finalDirection = directions[orientation] > 0 ? 
                    orientation === 'x' ? 'right' : 'down' : 
                    orientation === 'x' ? 'left' : 'up';
                
                if(this._heldDirections.indexOf(finalDirection) === -1) {
                    this._heldDirections.pop();
                    this._heldDirections.unshift(finalDirection);
                }
                
          }
    }
}