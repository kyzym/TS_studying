export class Circle {
  protected static PI: number = 3.14;

  private static calculateArea(radius: number) {
    return this.PI * radius * radius;
  }
  constructor(public radius: number) {}

  get area() {
    return Circle.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(20);
c1.radius;
c1.area;
// Circle.PI;
// Circle.calculateArea(25);

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
    Circle.PI;
  }
}
