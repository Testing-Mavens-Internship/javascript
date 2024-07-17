class Shape {
    constructor(color) {
        this.color=color;
        this.area=0;
      }
    
      setColor(color) {
      this.color=color;
    }
    calculateArea(){}
}

class Rectangle extends Shape {
    constructor(length, width,color) {
    
        super(color);
        this.length=length;
        this.width=width;
    }

    calculateArea(length,width) 
    {
        this.area=this.length*this.width;
        
    }  
}

let obj = new Rectangle(5,4,"red")
obj.calculateArea();
//obj.setColor('blue'); --- if u want to set color as blue
console.log(obj.area);
console.log(obj.color);
