import { Electronic } from './electronic.js';
import { Clothing } from './clothing.js';
import { Inventory } from './inventory.js';

(async () => {
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
    new Electronic('Inception', 1200, 'Dell', 2),
    new Clothing('The Godfather', 20, 'M', 'Cotton')
  ];
  await inventory.loadProductsAsync(additionalProducts);

  console.log('\nLoading products asynchronously:');
  inventory.listProducts().forEach(product => console.log(product.toString()));

  inventory.applyDiscountToAll(10);
  console.log('\nApplying discount to all products:');
  inventory.listProducts().forEach(product => console.log(product.toString()));
})();
