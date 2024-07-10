class Shape
{
    constructor(color)
    {
        this.color=color;
        this.area=0
    }

    setColor(color){
        this.color=color
    }
    getArea(){

    }
}
class Rectangle extends Shape
{
    constructor(color,l,b)
    {
       super(color)
       this.l=l
       this.b=b
    }

getarea()
{
this.area=this.l*this.b
}
}
class Circle extends Shape
{
    constructor(color,r)
    {
      super(color)
      this.r=r
    }
getarea()
{
this.area=3.14*this.r*this.r
}
}


let r=new Rectangle("Red",2,5)
r.setColor("Blue")
console.log(r.color)
r.getarea()
console.log(r.area)

// let c=new Circle("Blue",2)
// c.setColor()
// console.log(c.color)
// c.getarea()
// console.log(c.area)


