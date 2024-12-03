import { Product } from './product.js';
import { Electronic } from './electronic.js';
import { Clothing } from './clothing.js';
import { Inventory } from './inventory.js';

async function main() {
    const inventory = new Inventory();

    const smartphone = new Electronic('Smartphone', 800, 'Samsung', 1);
    const jeans = new Clothing('Jeans', 50, 'L', 'Denim');

    inventory.addProduct(smartphone);
    inventory.addProduct(jeans);

    console.log('List of all products in the inventory:');
    inventory.listProducts().forEach(product => console.log(product.toString()));

    console.log('\nSearching for \'Jeans\':');
    inventory.searchProduct('Jeans').forEach(product => console.log(product.toString()));

    console.log('\nFiltering by category \'Electronic\':');
    inventory.filterByCategory('Electronic').forEach(product => console.log(product.toString()));

    const additionalProducts = [
        new Electronic('Laptop', 1200, 'Dell', 2),
        new Clothing('T-Shirt', 20, 'M', 'Cotton')
    ];

    console.log('\nLoading products asynchronously:');
    await inventory.loadProducts(additionalProducts);
    inventory.listProducts().forEach(product => console.log(product.toString()));

    console.log('\nApplying discount to all products:');
    inventory.applyDiscountToAll(10);
    inventory.listProducts().forEach(product => console.log(product.toString()));
}

main();
