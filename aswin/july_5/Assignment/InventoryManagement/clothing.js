import { Product } from "./product.js";

export class Clothing extends Product {
  constructor(name, price, category, size, material) {
    super(name, price, category);
    this.size = size;
    this.material = material;
  }

  getInfo() {
    return super.getInfo() + ' - Size: ' + this.size + ', Material: ' + this.material;
  }
}
