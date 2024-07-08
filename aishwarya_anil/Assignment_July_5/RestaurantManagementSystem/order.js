import { Customer } from "./customer.js";

export class Order {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getDescription() {
    const itemDescriptions = this.items.map(item => item.getDescription()).join('\n');
    return `Customer: ${this.customer.name} (${this.customer.email})\nItems:\n${itemDescriptions}\nTotal: $${this.getTotal().toFixed(2)}`;
  }
}


