import Product from './product.js';

class Electronic extends Product {
    constructor(name, price, brand, warranty) {
        super(name, price);
        this.brand = brand;
        this.warranty = warranty;
    }

    getDetails() {
        return `${this.name} [Electronic] - $${this.price} - Brand: ${this.brand}, Warranty: ${this.warranty} years`;
    }
}

export default Electronic;
