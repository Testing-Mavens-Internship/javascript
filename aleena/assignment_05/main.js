import { Clothing } from "./clothing";
import { Electronic } from "./electronic";
import { Inventory } from "./inventory";

(async () => {
  const inventory = new Inventory();

  const shirt = new Clothing('T-Shirt', 19.99, 100, 'L', 'Cotton');
  const laptop = new Electronic('Laptop', 999.99, 50, 'BrandX', 2);

  inventory.addProduct(shirt);
  inventory.addProduct(laptop);

  console.log('Listing all products:');
  console.log(inventory.listProducts());

  console.log('\nSearching for products with "shirt" in the name:');
  console.log(inventory.searchProduct('shirt'));

  console.log('\nFiltering products by type Clothing:');
  console.log(inventory.filterProductsByType(Clothing));

  console.log('\nFetching products asynchronously:');
  const products = await inventory.fetchProducts();
  console.log(products);
})();