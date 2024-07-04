class Shape
{
    constructor(colour)
    {
        this.colour=colour
        this.area=0
    }

    settingColour(colour)
    {
        this.color=colour
        console.log(this.color)
    }
    
    calculateArea()
    {

    }
}

class Rectangle extends Shape
{
    constructor(length, width, colour)
    {
        super(colour)
        this.length=length
        this.width=width
    }

    calculateArea() 
    {
        this.area = this.length * this.width;
        console.log("Area of rectangle:" +this.area)
      }
}

class Circle extends Shape
{
    constructor(radius, colour)
    {
        super(colour)
        this.radius=radius
    }

    calculateArea()
    {
        this.area=(3.14*this.radius*this.radius)
        console.log("Area of circle:" +this.area)
    }
}

let rect1= new Rectangle(5, 10, 'blue');
rect1.settingColour("yellow") //method
rect1.calculateArea()

let cir1=new Circle(2, "red")
cir1.settingColour("green") //method
cir1.calculateArea()

