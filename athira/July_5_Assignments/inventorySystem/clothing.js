import Product from './product.js';

class Clothing extends Product {
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }

    getDetails() {
        return `${this.name} [Clothing] - $${this.price} - Size: ${this.size}, Material: ${this.material}`;
    }
}

export default Clothing;
