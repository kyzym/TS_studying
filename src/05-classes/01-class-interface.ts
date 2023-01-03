export {};
interface ICar {
  go(speed: number): void;
}

export class Car implements ICar {
  go(speed: number): void {
    console.log("go!");
  }
  stop() {
    console.log("stop");
  }
}

const car = new Car();
