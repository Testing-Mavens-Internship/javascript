import { Clothing } from "./clothing.js";
import { Electronic } from "./Electronics.js";
import { Inventory } from "./inventory.js";

const inventory = new Inventory();

async function main() {

  await inventory.addProduct(
    new Electronic("Smartphone", 800, "Electronic", "Samsung", 1)
  );
  await inventory.addProduct(
    new Clothing("Jeans", 50, "Clothing", "L", "Denim")
  );


  console.log("List of all products in the inventory:");
  inventory.getProducts().forEach((product) => console.log(product.getInfo()));


  console.log("\nSearching for 'Jeans':");
  const searchResults = inventory.searchProduct("Jeans");
  searchResults.forEach((product) => console.log(product.getInfo()));


  console.log("\nFiltering by category 'Electronic':");
  const filteredProducts = inventory.filterByCategory("Electronic");
  filteredProducts.forEach((product) => console.log(product.getInfo()));
  console.log("\nLoading products asynchronously:");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  inventory.getProducts().forEach((product) => console.log(product.getInfo()));

  console.log("\nApplying discount to all products:");
  await inventory.applyDiscount(10);
  inventory.getProducts().forEach((product) => console.log(product.getInfo()));
}

main();
