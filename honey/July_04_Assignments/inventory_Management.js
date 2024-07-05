// hallenge A: Inventory Management with Encapsulation

// Create a class Product with properties like name, price, and quantity (encapsulated using private or protected access modifiers in ES6 or getter/setter methods).
// Provide methods for getting and setting product details (with validation for quantity to be non-negative).
// Create a class Inventory that manages a collection of Product objects.
// Implement methods in Inventory to add, remove, update, and search for products.
// Consider using a data structure like an array or object to store products in the inventory.
// Optionally, demonstrate error handling when adding or removing products that might exceed or fall below stock levels.
// These challenges progressively introduce key concepts:

class Product {
  constructor(name, price, quantity) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }
  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
  setPrice(price) {
    this._price = price;
  }
  getPrice() {
    return this._price;
  }
  setQuantity(quantity) {
    quantity > 0
      ? (this._quantity = quantity)
      : console.log(
          `${quantity} is a negative number,Quantity can't be negative number.`
        );
  }
  getQuantity() {
    return this._quantity;
  }
}

class Inventory {
  constructor() {
    this.products = [];
  }
  addProduct(prods) {
    this.products.push(prods);
  }
  searchProduct(prodName) {
    return this.products.find((data) => data.getName() === prodName);
  }

  updateProduct() {}
  removeProduct() {}
}

let prod1 = new Product("Phone", 9999, 2);
let prod2 = new Product("Watch", 9887, 2);

let items = new Inventory();

items.addProduct(prod1);
items.addProduct(prod2);
console.log(items.searchProduct("Phone"));
console.log(items.searchProduct("Watch"));
