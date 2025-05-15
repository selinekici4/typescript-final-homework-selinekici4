import { CarStatus } from "./Enum";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {

    constructor(){
        super();
        this.status = CarStatus.STOPPED;
    }


    public startEngine(): void {
        if (this.status === CarStatus.DRIVING) {
            console.log("Car already runing.");
            return;
        }
        this.status = CarStatus.DRIVING;
        console.log("Car started.");

    }


    public stopEngine(): void {
        if (this.status === CarStatus.STOPPED) {
            console.log("Car already stopped.");
            return;
        }
        this.status = CarStatus.STOPPED;
        console.log("Car stoped.");
    }



}