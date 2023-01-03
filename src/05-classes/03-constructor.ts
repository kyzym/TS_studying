export class Vehicle {
  constructor(protected createdAt: Date) {}

  drive(speed: number): void {
    console.log("Drive with speed", speed.toFixed());
    this.log(speed);
  }
  stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    console.log("speed was changed to", speed, this.createdAt);
  }
  altLog(text: string) {
    console.log(text.toUpperCase);
  }
}

export class Car extends Vehicle {
  //   public color: string;
  //   public maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
  }
  getInfo() {
    console.log(this.color, this.maxSpeed, this.createdAt);
  }
}

const car1 = new Car("red", 200);
