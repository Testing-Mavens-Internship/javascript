export class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercentage) {
        this.price -= this.price * (discountPercentage / 100);
    }

    toString() {
        return `${this.name} [${this.category}] - $${this.price}`;
    }
}