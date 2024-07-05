//Challenge 1: Shape Hierarchy (Easy)
 //Create a base class Shape with properties like color and area (which can be initially set to 0).
//Define methods in Shape for setting the color and calculating the area (which might be abstract in the base class).
//Create subclasses Rectangle and Circle that inherit from Shape.
//Define specific area calculation methods for Rectangle (based on length and width) and Circle (based on radius using Math.PI).
//Create instances of Rectangle and Circle, set their colors, and calculate their areas, printing the results.

class Shape{
    constructor(color){
        this.color=color;
        this.area=0;
    }

 setcolor(){
    this.color=color;
 }
 getarea(){}
}
class Rectangle extends Shape{
    constructor(color,l,b){
        super(color)
        this.length=l;
        this.breadth=b;
    }
    getarea()
    {
        this.area=this.l*this.b;
    }}
    let rect=new Rectangle("red",5,2)
    console.log(this.color)
    console.log(this.area)
    
    
class Circle extends Shape{
    constructor(color,r){
        super(color)
        this.radius=r;
        
    }
    getarea(radius)
    {
        this.area=this.r*r*Math.pi;
    }
}
let circ=new Circle("blue",5)
console.log(this.color)
console.log(this.area)i
