import { CarStatus } from "./Enum";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle{

    constructor(){
        super();
        this.status = CarStatus.STOPPED;
    }


    startEngine(): void {
        this.status = CarStatus.DRIVING;
        console.log("Engine started.");

    }


    stopEngine(): void {
        this.status = CarStatus.STOPPED;
        console.log("Engine stoped.");
    }



}