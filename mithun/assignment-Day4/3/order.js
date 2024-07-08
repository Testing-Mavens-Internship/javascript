// order.js
import Customer from './customer.js';
import { MenuItem } from './menuItems.js';

class Order {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
  }

  addItem(item) {
    if (item instanceof MenuItem) {
      this.items.push(item);
    } else {
      throw new Error('Invalid menu item');
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  getOrderInfo() {
    const itemsInfo = this.items.map(item => item.getInfo()).join('\n');
    return `Customer: ${this.customer.getInfo()}\nItems:\n${itemsInfo}\nTotal: $${this.getTotal()}`;
  }
}

export default Order;
