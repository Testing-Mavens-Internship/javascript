
import { MenuItem } from './menuItems.js';
import { Beverage } from './menuItems.js';
import { Entree } from './menuItems.js';
import { Customer } from './customer.js';
import { Order } from './order.js';
import { PaymentProcessor } from './paymentProcessor.js';


class Restaurant {
  constructor() {
    this.menu = [];
    this.orders = [];
  }

  async fetchMenu() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.menu = [
          new Beverage('Coke', 1.99, 'Medium'),
          new Beverage('Coffee', 2.99, 'Large'),
          new Entree('Burger', 5.99, 700),
          new Entree('Salad', 4.99, 300)
        ];
        resolve(this.menu);
      }, 1000);
    });
  }

  listMenu() {
    console.log('Menu:');
    this.menu.forEach(item => console.log(item.getDescription()));
  }

  addOrder(order) {
    this.orders.push(order);
  }

  listOrders() {
    console.log('Listing all orders:');
    this.orders.forEach(order => console.log(order.getDescription()));
  }

  async processPayments() {
    console.log('Processing payments:');
    for (const order of this.orders) {
      const amount = order.getTotal();
      const paymentMethod = amount > 5 ? 'CreditCard' : 'Cash';
      const result = await PaymentProcessor[`process${paymentMethod}`](amount);
      console.log(result);
    }
  }
}

async function main() {
  const restaurant = new Restaurant();

  console.log('Fetching menu...');
  await restaurant.fetchMenu();
  restaurant.listMenu();

  const customer1 = new Customer('John Doe', 'john.doe@example.com');
  const order1 = new Order(customer1);
  order1.addItem(restaurant.menu[0]);
  order1.addItem(restaurant.menu[1]);
  restaurant.addOrder(order1);

  const customer2 = new Customer('Jane Smith', 'jane.smith@example.com');
  const order2 = new Order(customer2);
  order2.addItem(restaurant.menu[2]);
  order2.addItem(restaurant.menu[3]);
  restaurant.addOrder(order2);

  restaurant.listOrders();
  await restaurant.processPayments();
}

main();
