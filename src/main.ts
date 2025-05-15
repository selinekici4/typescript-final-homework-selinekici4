import {Car} from "./models/Car";
import { Engine } from "./services/Engine";
import { Sensor } from "./models/Sensor";
import { Navigator } from "./services/Navigator";


const car = new Car();
const engine = new Engine();
const navigator = new Navigator();
const sensor = new Sensor();


console.log("Simulation started!!");

engine.startEngine();
car.startEngine();


const destination = "Moon Park Sitesi";
navigator.setDestination(destination);



let route = navigator.calculateRoute();


const obstacleDetected = sensor.detectObstacle();


if(obstacleDetected) {
    navigator.updateRoute();
    route = navigator.getRoute();
}


for(let i = 0; i < route.length; i++) {
    const step = route[i];
    console.log(`move to: ${step}`);
    car.accelerate();
}



car.brake();
car.stopEngine();
engine.stopEngine();

console.log("Finished...");



