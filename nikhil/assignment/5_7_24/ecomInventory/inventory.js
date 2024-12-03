import { Clothing } from "./clothing.js";
import { Electronics } from "./electronics.js";

export class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    return this.products;
  }

  searchProduct(name) {
    return this.products.filter((product) => product.name === name);
  }

  productCatagory(catagory) {
    return this.products.filter(
      (product) => product.constructor.name.toLowerCase() === catagory.toLowerCase()
    );
  }

  applyDiscount(discount) {
    this.products.forEach(
      (product) =>
        (product.price = product.price - (product.price * discount) / 100)
    );
  }
}
