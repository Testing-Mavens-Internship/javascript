class Shape
{
    constructor()
    {
        this.area=0;
        this.color="";
    }

    setColor(color)
    {
        this.color=color
    }

    // calculateArea()
    // {
        
    // }
}

class Circle extends Shape
{
    constructor(radius)
    {
        super()
        this.radius=radius
        
    }

    calculateArea()
    {
        this.area=3.14*this.radius* this.radius
    }
}

class Rectangle extends Shape
{
    constructor(length,breadth)
    {
        super()
        this.length=length
        this.breadth=breadth
        
    }

    calculateArea()
    {
        this.area=this.length*this.breadth
    }
}

const rect1=new Rectangle(10,20)
rect1.calculateArea()
rect1.setColor("red")

const rect2=new Rectangle(10,20)
rect2.calculateArea()
rect2.setColor("blue")

const circle1=new Circle(10)
circle1.calculateArea()
circle1.setColor("green")

const circle2=new Circle(10)
circle2.calculateArea()
circle2.setColor("yellow")

console.log(`Rectangle (area:${rect1.area}) color:${rect1.color}`)
console.log(`Rectangle (area:${rect2.area}) color:${rect2.color}`)
console.log(`Circle (area:${circle1.area}) color:${circle1.color}`)
console.log(`Circle (area:${circle2.area}) color:${circle2.color}`)