// Create a base class Shape with properties like color and area (which can be initially set to 0).
// Define methods in Shape for setting the color and calculating the area (which might be abstract in the base class).
// Create subclasses Rectangle and Circle that inherit from Shape.
// Define specific area calculation methods for Rectangle (based on length and width) and Circle (based on radius using Math.PI).
// Create instances of Rectangle and Circle, set their colors, and calculate their areas, printing the results.
class Shape{
    constructor(color){
        this.color = color;
        this.area=5;
    }
    setcolor(color){
        this.color =color;
    }
    findArea(){}
}
class Rectangle extends Shape{
    constructor(color,length,breadth){
        super(color);
        this.l = length;
        this.b = breadth;
        this.findArea();
    }
    findArea(){
        super.area =  this.l*this.b
     }

}
// class Circle extends Shape{
//     constructor(){
//         super(color);
//         this.r = radius
//     }
//     findArea(){
//        super.area =  2*Math.PI*radius
//        console.log(super.area)
//     }
// }
// let obj = new Shape()
let rectobject = new Rectangle("red",5,5)
console.log(rectobject.area)
// rectobject.findArea(5,10);
// let circleobject = new Circle()
// circleobject.findArea(14.6);