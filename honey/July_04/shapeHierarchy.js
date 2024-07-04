class Shape {
  constructor(color) {
    this.color = color;
    this.area = 0;
  }
  setColor(color) {
    this.color = color;
  }
  calculateArea() {}
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  calculateArea() {
    this.area = this.radius * this.radius * 3.14;
  }
}

class Rectangle extends Shape {
  constructor(color, length, breadth) {
    super(color);
    this.length = length;
    this.breadth = breadth;
  }
  calculateArea() {
    this.area = this.length * this.breadth;
  }
}

let rectangleObj = new Rectangle("red", 2, 5);
let circleObj = new Circle("green", 2);
rectangleObj.calculateArea();
circleObj.calculateArea();

console.log(`The color of rectangle : ${rectangleObj.color}`);
console.log(`The color of circle : ${circleObj.color}`);

console.log(`The area of rectangle : ${rectangleObj.area}`);
console.log(`The area of circle : ${circleObj.area}`);
