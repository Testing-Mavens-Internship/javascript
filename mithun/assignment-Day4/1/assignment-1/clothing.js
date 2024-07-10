import Products from "./products.js";
export default class clothing extends Products
{
    constructor(id,name,type,item,price)
    {
        super(id,name,type);
        this.item=item;
        this.price=price;
    }
    display()
    {
        return "${super.display()} Item: ${this.item}  Price: ${this.price}"
    }
}