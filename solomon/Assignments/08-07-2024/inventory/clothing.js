import { Product } from './product.js';

export class Clothing extends Product {
  constructor(name, price, size, material) {
    super(name, price);
    this.size = size;
    this.material = material;
  }

  toString() {
    return `${this.name} [Clothing] - $${this.price} - Size: ${this.size}, Material: ${this.material}`;
  }
}
