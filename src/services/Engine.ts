import { IEngine } from "../interfaces/IEngine";

export class Engine implements IEngine {

    private engineOn: boolean;

    constructor(){
        this.engineOn = false;
    }



    public startEngine(): void {
       if(this.engineOn) {
            console.log("Engine already started.");
       }
       else {
        this.engineOn = true;
        console.log("Engine started.");
       }
    }



    public stopEngine(): void {
        if(!this.engineOn) {
            console.log("Engine already stopped.");
       }
       else {
        this.engineOn = false;
        console.log("Engine stopped.");
       }
    }

    public isDriving():boolean {
        return this.engineOn;
    }

}