import { Product } from "./product.js";
 
export class Clothing extends Product {
    constructor(name, price, size, material) {
        super(name, price, 'Clothing');
        this.size = size;
        this.material = material;
    }
 
    toString() {
        return `${super.toString()} - Size: ${this.size}, Material: ${this.material}`;
    }
}