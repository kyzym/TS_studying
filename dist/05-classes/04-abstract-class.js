"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    /**
     * stop
     */
    stop() {
        console.log("stopped");
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(speed);
    }
}
