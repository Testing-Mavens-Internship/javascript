import Clothing  from "./clothing.js";
import  Electronics  from "./electronics.js";
import Inventory from "./inventory.js";

async function newProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        new Electronics("Laptop", 50000, "Dell", 1),
        new Clothing("Shirt", 1000, "XL", "Cotton"),
        new Electronics("Mobile", 20000, "Apple", 1),
        new Clothing("T-Shirt", 500, "S", "Cotton"),
        new Electronics("Headphone", 1500, "JBL", 1),
      ];
      resolve(products);
    }, 2000);
  });
}

(async () => {
  const inventory = new Inventory();

  console.log("Adding products to inventory");
  inventory.addProduct(new Electronics("Laptop", 50000, "Apple", 1));
  inventory.addProduct(new Clothing("Shirt", 1000, "XL", "Cotton"));

  console.log("List of products in inventory");
  inventory.listProducts().forEach((product) => console.log(product.getDetails()));

  console.log("\nSearching for 'Jeans' in inventory");
  const searchedProducts = inventory.searchProduct("Jeans");
  if (searchedProducts.length > 0) {
    searchedProducts.forEach((product) => console.log(product.getDetails()));
  } else {
    console.log("No products found matching the search term.");
  }

  console.log("\nSearching for 'Electronics' in inventory");
  const electronicProducts = inventory.productCatagory("Electronics");
  if (electronicProducts.length > 0) {
    electronicProducts.forEach((product) => console.log(product.getDetails()));
  } else {
    console.log("No products found in the specified category.");
  }

  console.log("\nSearching for 'Clothing' in inventory");
  const clothingProducts = inventory.productCatagory("Clothing");
  if (clothingProducts.length > 0) {
    clothingProducts.forEach((product) => console.log(product.getDetails()));
  } else {
    console.log("No products found in the specified category.");
  }

  console.log("\nLoading new products asynchronously");
  const products = await newProducts();
  products.forEach((product) => inventory.addProduct(product));
  inventory.listProducts().forEach((product) => console.log(product.getDetails()));

  console.log("\nApplying 25% discount");
  inventory.applyDiscount(25);
  inventory.listProducts().forEach((product) => console.log(product.getDetails()));
})();