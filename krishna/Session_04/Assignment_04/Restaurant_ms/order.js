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
            throw new Error('Invalid item');
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getDescription() {
        const itemsDescription = this.items.map(item => item.getDescription()).join('\n');
        return `Customer: ${this.customer.getDescription()}\nItems:\n${itemsDescription}\nTotal: $${this.getTotal().toFixed(2)}`;
    }
}

export default Order;
