"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Vehicle = void 0;
class Vehicle {
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    drive(speed) {
        console.log("Drive with speed", speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log("Stopped");
    }
    log(speed) {
        console.log("speed was changed to", speed, this.createdAt);
    }
    altLog(text) {
        console.log(text.toUpperCase);
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    //   public color: string;
    //   public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed, this.createdAt);
    }
}
exports.Car = Car;
const car1 = new Car("red", 200);
