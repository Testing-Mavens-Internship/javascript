import Clothing from "./clothing.js"
import Electronic from "./electronic.js"
import Inventory from "./inventory.js"

(async()=>{
    let inventory = new Inventory();

    let electronic1=new Electronic("Smartphone",800,"Samsung",1);
    let cloth1= new Clothing("Jeans","L",50,"Denim");

    await inventory.addProduct(electronic1);
    await inventory.addProduct(cloth1);

    console.log(`\nList of all products in the inventory:`);
    console.log(inventory.listProducts());

    console.log(`\nSearching for 'jeans' :`);
    console.log(inventory.searchProducts("Jeans"));

    console.log(`\nFiltering by category 'Electronic':`);
    console.log(inventory.filterProductsByCategory("Electronic"));

    let electronic2=new Electronic("Inception",1200,"Dell",2);
    let cloth2= new Clothing("The Godfather","M",20,"Cotton");

    await inventory.addProduct(electronic2);
    await inventory.addProduct(cloth2);

    console.log(`\nLoading products asynchronously:`);
    console.log(inventory.listProducts());

   inventory.applyDiscount(10);

   console.log(`\nApplying discount to all products:`);
   console.log(inventory.listProducts());
})();