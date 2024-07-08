import {Product} from './product.js'
export class Electronic extends Product {
  constructor(name,price,quantity,brand, warranty) {
    super(name,price,quantity);
    this.brand = brand;
    this.warranty = warranty;
  }

  getDetails() {
    //return this.name,this.price,this.quantity, this.brand, this.warranty;
    return `${this.name} - $${this.price} - Quantity: ${this.quantity} - Brand: ${this.brand} - Warranty: ${this.warranty} years`;
  }
}

