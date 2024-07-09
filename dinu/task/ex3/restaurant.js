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
                    new Beverage('Coke', 50, 'Medium'),
                    new Beverage('Coffee', 20, 'Large'),
                    new Entree('Burger', 50, 700),
                    new Entree('Salad', 40, 300)
                ];
                resolve(this.menu);
            }, 2000);
        });
    }
    placeOrder(customer, items) {
        const order = new Order(customer);
        items.forEach(item => order.addItem(item));
        this.orders.push(order);
    }

    listOrders() {
        return this.orders.map(order => order.getDetails()).join('\n\n');
    }

    async processPayments() {
        for (const order of this.orders) {
            const amount = order.getTotal();
            const paymentMethod = amount > 5 ? 'Credit Card' : 'Cash';

            if (paymentMethod === 'Credit Card') {
                console.log(await PaymentProcessor.processCreditCard(amount));
            } else {
                console.log(await PaymentProcessor.processCash(amount));
            }
        }
    }
}

(async () => {
    const restaurant = new Restaurant();

    console.log('Fetching menu...');
    console.log("Menu:");
    await restaurant.fetchMenu();
    restaurant.menu.forEach(item => console.log(item.getDetails()));

    const customer1 = new Customer('John Doe', 'john.doe@example.com');
    const customer2 = new Customer('Jane Smith', 'jane.smith@example.com');

    restaurant.placeOrder(customer1, [restaurant.menu[0], restaurant.menu[1]]);
    restaurant.placeOrder(customer2, [restaurant.menu[2], restaurant.menu[3]]);

    console.log('Listing all orders:');
    console.log(restaurant.listOrders());

    console.log('Processing payments:');
    await restaurant.processPayments();
})();
