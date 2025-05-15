import { INavigator } from "../interfaces/INavigator";

export class Navigator implements INavigator{

    private destination: string = "";
    private route: string[] = [];


    setDestination(destination: string): void {
        this.destination = destination;
        console.log(`Destination: ${destination}`);
    }
    calculateRoute(): string[] {
        this.route = ["Start", "Street X", "Street Y", this.destination];
        console.log(`Route calculated: ${this.route.join(" - ")}`);
        return this.route;
    }
    updateRoute(): void {
        console.log("Obstacle detected!! New route is loading...");
        this.route = ["Start" , "Street a", "Street Y", this.destination];
        console.log(`Updated route: ${this.route.join(" - ")}`);
    }
    
    getRoute(): string[] {
        return this.route;
    }

}