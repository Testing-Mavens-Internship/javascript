class Shape{
    constructor(color){
        this.color=color;
        this.area=0;
    }
    setShape(color){
         this.color=color;
    }
    setColor(){

    }
}
class Rectangle extends Shape{
    constructor(color,length,width){
        super(color);
        this.length=length;
        this.width=width;
    }
    calculateArea(){
      this.area= this.length*this.width;
    }
}
class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius=radius;
        
    }
    calculateArea(){
     this.area= 3.14*this.radius*this.radius;
    
    }
}
let obj1 = new Shape("Green")
console.log(obj1.color);

let obj2 = new Rectangle("Pink",5,3)
console.log(obj2.color);
obj2.calculateArea();
console.log(obj2.area);

let obj3 = new Circle("Yellow",2);
console.log(obj3.color);
obj3.calculateArea();
console.log(obj3.area);