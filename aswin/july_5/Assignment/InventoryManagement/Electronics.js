import { Product } from "./product.js";

export class Electronic extends Product {
  constructor(name, price, category, brand, warranty) {
    super(name, price, category);
    this.brand = brand;
    this.warranty = warranty;
  }

  getInfo() {
    return super.getInfo() + ' - Brand: ' + this.brand + ', Warranty: ' + this.warranty + ' years';
  }
}


