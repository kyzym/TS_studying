"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    static calculateArea(radius) {
        return this.PI * radius * radius;
    }
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Circle.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
Circle.PI = 3.14;
const c1 = new Circle(20);
c1.radius;
c1.area;
// Circle.PI;
// Circle.calculateArea(25);
class Ellipse extends Circle {
    constructor(radius) {
        super(radius);
        this.radius = radius;
        Circle.PI;
    }
}
