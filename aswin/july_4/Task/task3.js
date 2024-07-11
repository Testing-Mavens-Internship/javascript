class Product {
    constructor(name, price, quantity) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getPrice() {
        return this._price;
    }
    setPrice(price) {
        price >= 0 ? this._price = price : console.error("Price must be non-negative.");
    }
    getQuantity() {
        return this._quantity;
    }
    setQuantity(quantity) {
        quantity >= 0 ? this._quantity = quantity : console.error("Quantity must be non-negative.");
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Added product: ${product.getName()}`);
    }

}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1000, 10);
const product2 = new Product("Smartphone", 700, 20);

inventory.addProduct(product1);
inventory.addProduct(product2);

