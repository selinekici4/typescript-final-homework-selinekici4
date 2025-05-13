import { CarStatus, Direction } from "./Enum";

export class Vehicle {
    protected speed: number;
    protected direction: Direction;
    protected status: CarStatus;
    

    constructor() {
        this.speed = 0;
        this.direction = Direction.WEST;
        this.status = CarStatus.STOPPED;
    }
    
    public brake(): void {
        this.speed = 0;
        console.log("Vehicle stopped.");
    }

    public accelerate(): void {
        this.speed += 5;
        console.log(`Speed increased by ${this.speed} km/h`);
    }

    public changeDirection(newDirection: Direction):void {
        this.direction = newDirection;
        console.log(`Direction chaned to ${this.direction}`)
    }


    public getStatus(): CarStatus {
        return this.status;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getDirection(): Direction {
        return this.direction;
    }

    
}