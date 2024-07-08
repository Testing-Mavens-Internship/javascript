export class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    applyDiscount(discount) {
      this.price = this.price * (1 - discount / 100);
    }
  
    toString() {
      return `${this.name} - $${this.price}`;
    }
  }
  