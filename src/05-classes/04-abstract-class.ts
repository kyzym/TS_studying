export {};

abstract class Vehicle {
  abstract color: string;
  abstract drive(speed: number): void;
  /**
   * stop
   */
  public stop() {
    console.log("stopped");
  }
}

class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }
  drive(speed: number) {
    console.log(speed);
  }
}
