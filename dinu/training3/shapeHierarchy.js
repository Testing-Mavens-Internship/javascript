// Create a base class Shape with properties like color and area (which can be initially set to 0).
// Define methods in Shape for setting the color and calculating the area (which might be abstract in the base class).
// Create subclasses Rectangle and Circle that inherit from Shape.
// Define specific area calculation methods for Rectangle (based on length and width) and Circle (based on radius using Math.PI).
// Create instances of Rectangle and Circle, set their colors, and calculate their areas, printing the results.





class Shape{
    constructor(color){
        this.color=color;
        this.area=0;
    }
     setColor(color){
        this.color=color;   
     }
     calculateArea(){
     };
}
class Rectangle extends Shape{
    constructor(color,l,b){
        super(color);
        this.length=l;
        this.breadth=b;
    }
    
    calculateArea(){
        this.area=this.length*this.breadth;
    }
}
class Circle extends Shape{
    constructor(color,r){
        super(color)
        this.radius=r;
    }
    calculateArea(){
        this.area=3.14*this.radius^2;
    }
}
let crcl=new Circle("blue",4);
let rect=new Rectangle("red",2,5);
rect.calculateArea();
crcl.calculateArea();

console.log(`The color of rectangle : ${rect.color}`);
console.log(`The color of circle : ${crcl.color}`);
 
console.log(`The area of rectangle : ${rect.area}`);
console.log(`The area of circle : ${crcl.area}`);
