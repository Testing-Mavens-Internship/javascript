class Shape{
    constructor(color,area){
        this.color=color;
        this.area=0;
    }
    setcolor(color){
        this.color=color;

    }

    calculatedrea(){

    }

}
class Rectangle extends Shape
{
constructor(color,length,breadth){
    super(color);
    this.length=length;
    this.breadth=breadth;
}
calculatedarea(){
    this.area=this.length*this.breadth
}
}

class circle extends Shape{
    constructor(radius){
        super();
        this.radius;
    
    }
    calculatedArea(){
        this.area=3.14*this.area*this.area;
    }
}
let rect=new Rectangle("red",5,5,);
rect.calculatedarea();
console.log(rect.area);
//rect.setcolor('blue');
console.log(rect.color);

let cir=new circle(5);
cir.calculatedArea();
console.log(cir.radius)


