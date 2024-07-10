import { Product } from "./product.js";

export class Electronics extends Product
{
    constructor(name, price, brand,warrenty)
    {
        super(name, price);
        this.brand = brand;
        this.warrenty = warrenty;
    }

    getDetails()
    {
        return `${this.name} [Electronics]--${this.price}--Brand: ${this.brand}--Warrenty: ${this.warrenty} year`
    }
}