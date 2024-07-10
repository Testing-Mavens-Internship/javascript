// Exercise 1: E-Commerce Inventory System
// Create an E-Commerce Inventory System where you can add, list, search, and filter products. Implement classes for Product, Electronic, Clothing, and Inventory. Use inheritance and polymorphism to extend functionalities. Utilize async/await to simulate asynchronous data fetching and updating.
 
// Following files should be there:
// product.js
// clothing.js
// electronic.js
// inventory.js
// main.js

import Clothing from './clothing.js';
import Electronic from './electronic.js';
import Inventory from './inventory.js';

(async function main() {
    const inventory = new Inventory();

    const loadProducts = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    new Electronic('Smartphone', 800, 'Samsung', 1),
                    new Clothing('Jeans', 50, 'L', 'Denim'),
                    new Electronic('Inception', 1200, 'Dell', 2),
                    new Clothing('The Godfather', 20, 'M', 'Cotton')
                ]);
            }, 1000);
        });
    };

    const products = await loadProducts();
    products.forEach(product => inventory.addProduct(product));

    console.log('List of all products in the inventory:');
    console.log(inventory.listProducts());

    console.log('\nSearching for \'Jeans\':');
    console.log(inventory.searchProduct('Jeans'));

    console.log('\nFiltering by category \'Electronic\':');
    console.log(inventory.filterByCategory('Electronic'));

    console.log('\nApplying discount to all products:');
    inventory.applyDiscountToAll(0.1); // 10% discount
    console.log(inventory.listProducts());
})();
