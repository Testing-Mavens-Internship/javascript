class Shape {
    constructor(color)
     {
        this.color = color;
        this.area = 0;
    }

    setColor(color) 
    {
        this.color = color;
    }

    calcArea() 
    {

    }
}

class Rectangle extends Shape {
    constructor(color, length, breadth) {
        super(color); 
        this.length = length;
        this.breadth = breadth;
    }

    calcArea() {
        this.area = this.length * this.breadth;
    }
}
class circle extends Shape {
    constructor(color, r) {
        super(color); 
        this.radius = r;
    }

    calcArea() {
        this.area = 3.14 * this.radius*this.radius;
    }
}
let r = new Rectangle("blue", 5, 3);
r.calcArea();
console.log(r.area)
console.log(r.color)
 let c=new circle("yellow",10);
 c.calcArea();
 console.log(c.area);
 console.log(c.color);

