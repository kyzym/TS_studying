export class Vehicle {
  drive(speed: number): void {
    console.log("Drive with speed", speed.toFixed());
    this.log(speed);
  }
  stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    console.log("speed was changed to", speed);
  }
  protected altLog(text: string) {
    console.log(text.toUpperCase);
  }
}

class Car extends Vehicle {
  changeSpeed(speed: number) {
    this.drive(speed);
    this.altLog("be");
  }
}

const car1 = new Car();
car1.drive(55);
car1.stop();
car1.changeSpeed(70);
// car1.log(33);
