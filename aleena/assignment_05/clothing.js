import {Product} from './product.js'
export class Clothing extends Product {
  constructor(name,price,quantity,size,material) {
    super(name,price,quantity);
    this.size = size;
    this.material = material;
  }

  getDetails() {
   // return this.name,this.price,this.quantity,this.size, this.material;
   return `${this.name} - $${this.price} - Quantity: ${this.quantity} - Size: ${this.size} - Material: ${this.material}`;
  }
}
