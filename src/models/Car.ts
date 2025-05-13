import { CarStatus } from "./Enum";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {

    constructor(){
        super();
        this.status = CarStatus.STOPPED;
    }


    public startEngine(): void {
        if (this.status === CarStatus.DRIVING) {
            console.log("Engine already runing.");
            return;
        }
        this.status = CarStatus.DRIVING;
        console.log("Engine started.");

    }


    public stopEngine(): void {
        if (this.status === CarStatus.STOPPED) {
            console.log("Engine already stopped.");
            return;
        }
        this.status = CarStatus.STOPPED;
        console.log("Engine stoped.");
    }



}