"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    drive(speed) {
        console.log("Drive with speed", speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log("Stopped");
    }
    log(speed) {
        console.log("speed was changed to", speed);
    }
    altLog(text) {
        console.log(text.toUpperCase);
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.altLog("be");
    }
}
const car1 = new Car();
car1.drive(55);
car1.stop();
car1.changeSpeed(70);
// car1.log(33);
