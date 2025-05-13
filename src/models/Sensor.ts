export class Sensor {

    detectObstacle(): boolean{
        const detected = Math.random() < 0.4;

        if(detected) {
            console.log("Obstacle detected!");

        }
        else {
            console.log("No obstacle detected!");
        }
        return detected;
    }
    
}