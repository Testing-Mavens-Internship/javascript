export class Product 
{
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }

    getDetails()
    {
        return `Product name is ${this.name} : ${this.price}`
    }

}