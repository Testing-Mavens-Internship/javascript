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

    removeProduct(productName) {
        const index = this.products.findIndex(product => product.getName() === productName);
        index > -1
            ? (this.products.splice(index, 1), console.log(`Removed product: ${productName}`))
            : console.error(`Product ${productName} not found.`);
    }

    updateProduct(productName, newDetails) {
        const product = this.products.find(product => product.getName() === productName);
        product
            ? (newDetails.name !== undefined && product.setName(newDetails.name),
               newDetails.price !== undefined && product.setPrice(newDetails.price),
               newDetails.quantity !== undefined && product.setQuantity(newDetails.quantity),
               console.log(`Updated product: ${productName}`))
            : console.error(`Product ${productName} not found.`);
    }

    searchProduct(productName) {
        const product = this.products.find(product => product.getName() === productName);
        product
            ? (console.log(`Found product: ${product.getName()} - Price: ${product.getPrice()} - Quantity: ${product.getQuantity()}`),
               product)
            : (console.error(`Product ${productName} not found.`), null);
    }
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1000, 10);
const product2 = new Product("Smartphone", 700, 20);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.searchProduct("Laptop");

inventory.updateProduct("Laptop", { price: 950, quantity: 8 });

inventory.removeProduct("Smartphone");

inventory.searchProduct("Smartphone");
