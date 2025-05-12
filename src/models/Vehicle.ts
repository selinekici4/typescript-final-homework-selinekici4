import { CarStatus, Direction } from "./Enum";

export class Vehicle {
    speed: number;
    direction: Direction;
    status: CarStatus;
    

    constructor() {
        this.speed = 0;
        this.direction = Direction.WEST;
        this.status = CarStatus.STOPPED;
    }
    
    brake(): void {
        this.speed = 0;
        console.log("Vehicle stopped.");
    }

    accelerate(): void {
        this.speed += 5;
        console.log(`Speed increased by ${this.speed} km/h`);
    }

    changeDirection(newDirection: Direction):void {
        this.direction = newDirection;
        console.log(`Direction chaned to ${this.direction}`)
    }








}