// restaurant.js
import { Beverage, Entree } from './menuItems.js';
import Customer from './customer.js';
import Order from './order.js';
import PaymentProcessor from './paymentProcessor.js';

class Restaurant {
  constructor() {
    this.menu = [];
    this.orders = [];
  }

  async fetchMenu() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.menu = [
          new Beverage('Coke', 1.99, 'Medium'),
          new Beverage('Coffee', 2.99, 'Large'),
          new Entree('Burger', 5.99, 700),
          new Entree('Salad', 4.99, 300)
        ];
        resolve();
      }, 1000);
    });
  }

  listMenu() {
    return this.menu.map(item => item.getInfo()).join('\n');
  }

  addOrder(order) {
    if (order instanceof Order) {
      this.orders.push(order);
    } else {
      throw new Error('Invalid order');
    }
  }

  listOrders() {
    return this.orders.map(order => order.getOrderInfo()).join('\n\n');
  }

  async processPayments() {
    for (let order of this.orders) {
      const total = order.getTotal();
      const paymentMethod = Math.random() > 0.5 ? 'CreditCard' : 'Cash';
      let paymentResult;

      if (paymentMethod === 'CreditCard') {
        paymentResult = await PaymentProcessor.processCreditCard(total);
      } else {
        paymentResult = await PaymentProcessor.processCash(total);
      }

      console.log(paymentResult);
    }
  }
}

(async () => {
  const restaurant = new Restaurant();

  console.log('Fetching menu...');
  await restaurant.fetchMenu();
  console.log('\nMenu:');
  console.log(restaurant.listMenu());

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

  console.log('\nListing all orders:');
  console.log(restaurant.listOrders());

  console.log('\nProcessing payments:');
  await restaurant.processPayments();
})();
