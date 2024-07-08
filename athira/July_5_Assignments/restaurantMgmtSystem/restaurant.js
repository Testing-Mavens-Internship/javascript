// Exercise 3: Restaurant Management System 
// Scenario: Create a comprehensive restaurant management system that handles menus, orders, customers, and payments, utilizing class-based object-oriented programming and asynchronous operations for simulated database interactions. Implement export/import mechanisms for code organization.

// Classes: Encapsulate menu items, orders, customers, and payment processing logic.
// Inheritance: Create a base MenuItem class and subclasses for different types of items (e.g., Beverage, Entree).
// Static Methods: Implement static methods within the PaymentProcessor class for handling different payment types.
// Abstraction: The PaymentProcessor class represents the concept of payment processing without revealing implementation details.
// Polymorphism: The placeOrder method in the Restaurant class can handle different types of orders (e.g., dine-in, takeout) with appropriate behavior.
// Async/Await: Simulate asynchronous database interactions (using setTimeout) for fetching menu items, placing orders, and processing payments.
// Export/Import: Organize code into separate modules using export and import for modularity and reusability.

// Following files should be there:
// menuItems.js (export file)
// customer.js (export file)
// order.js (export file)
// paymentProcessor.js (export file)
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
        return new Promise(resolve => {
            setTimeout(() => {
                this.menu = [
                    new Beverage('Coke', 1.99, 'Medium'),
                    new Beverage('Coffee', 2.99, 'Large'),
                    new Entree('Burger', 5.99, 700),
                    new Entree('Salad', 4.99, 300),
                ];
                resolve(this.menu);
            }, 1000);
        });
    }

    listMenu() {
        return this.menu.map(item => item.getDescription()).join('\n');
    }

    placeOrder(customer, items) {
        const order = new Order(customer, items);
        this.orders.push(order);
        return order;
    }

    listOrders() {
        return this.orders.map(order => order.getOrderSummary()).join('\n\n');
    }

    async processPayments() {
        const results = [];
        for (const order of this.orders) {
            const amount = order.getTotal();
            const paymentMethod = Math.random() > 0.5 ? 'credit card' : 'cash';
            const result = await PaymentProcessor.processPayment(amount, paymentMethod);
            results.push(result);
        }
        return results.join('\n');
    }
}

// Main simulation
(async function main() {
    const restaurant = new Restaurant();

    console.log('Fetching menu...');
    await restaurant.fetchMenu();
    console.log('Menu:');
    console.log(restaurant.listMenu());

    const customer1 = new Customer('John Doe', 'john.doe@example.com');
    const order1 = restaurant.placeOrder(customer1, [restaurant.menu[0], restaurant.menu[1]]);

    const customer2 = new Customer('Jane Smith', 'jane.smith@example.com');
    const order2 = restaurant.placeOrder(customer2, [restaurant.menu[2], restaurant.menu[3]]);

    console.log('\nListing all orders:');
    console.log(restaurant.listOrders());

    console.log('\nProcessing payments:');
    console.log(await restaurant.processPayments());
})();
