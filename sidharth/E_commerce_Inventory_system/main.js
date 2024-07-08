import { Product } from './product.js';
import { Electronic } from './electronic.js';
import { Clothing } from './clothing.js';
import { Inventory } from './inventory.js';
 
async function main() {
    const inventory = new Inventory();
 
    const smartphone = new Electronic('Smartphone', 800, 'Samsung', 1);
    const jeans = new Clothing('Jeans', 50, 'L', 'Denim');
   
    await inventory.loadProducts([smartphone, jeans]);
 
    console.log('List of all products in the inventory:\n');
    console.log(inventory.listProducts());
 
    console.log('\nSearching for \'Jeans\':\n');
    const searchResult = inventory.searchProduct('Jeans');
    console.log(searchResult.map(product => product.toString()).join('\n'));
 
    console.log('\nFiltering by category \'Electronic\':\n');
    const filteredProducts = inventory.filterByCategory('Electronic');
    console.log(filteredProducts.map(product => product.toString()).join('\n'));
 
    console.log('\nLoading more products asynchronously:\n');
    const moreProducts = [
        new Electronic('Inception', 1200, 'Dell', 2),
        new Clothing('The Godfather', 20, 'M', 'Cotton')
    ];
    await inventory.loadProducts(moreProducts);
    console.log(inventory.listProducts());
 
    console.log('\nApplying discount to all products:\n');
    inventory.applyDiscountToAll(10);
    console.log(inventory.listProducts());
}
 
main();
 