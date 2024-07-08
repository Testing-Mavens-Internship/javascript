import { Product } from './product.js';

export class Electronic extends Product {
  constructor(name, price, brand, warranty) {
    super(name, price);
    this.brand = brand;
    this.warranty = warranty;
  }

  toString() {
    return `${this.name} [Electronic] - $${this.price} - Brand: ${this.brand}, Warranty: ${this.warranty} years`;
  }
}
