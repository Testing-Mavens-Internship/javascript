import { Product } from "./product.js";

export class Electronic extends Product {
    constructor(name, price, brand, warranty) {
        super(name, price, 'Electronic');
        this.brand = brand;
        this.warranty = warranty;
    }

    toString() {
        return `${super.toString()} - Brand: ${this.brand}, Warranty: ${this.warranty} years`;
    }
}


