class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `${this.name} - $${this.price}`;
    }

    applyDiscount(discount) {
        this.price = this.price * (1 - discount);
    }
}

export default Product;
