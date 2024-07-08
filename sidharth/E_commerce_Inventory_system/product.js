export class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
 
    applyDiscount(discount) {
        this.price -= this.price * discount / 100;
    }
 
    toString() {
        return `${this.name} [${this.category}] - $${this.price}`;
    }
}
 