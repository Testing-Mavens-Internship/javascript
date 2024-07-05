class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    set Name(name) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }

    set Price(price) {
        this.price = price;
    }

    get Price() {
        return this.price;
    }

    set Quantity(quantity) {

        this.quantity = quantity;
    //     if (this.quantity >= 0) {
    //         this.quantity = quantity;
    //     } else {
    //         console.log("Error : Quantity can't be negative!");
    //     }
     }

    get Quantity() {
        return this.quantity;
    }
}

class Inventory  {
    constructor() {
       
        this.ProductArray = [];
    }

    addProduct(product) { //obj get passed to this parameter 'product' - if u print it , you get object, so use product.Name, product.Quantity
        this.ProductArray.push(product);
        console.log(`The Product ${product.name} is added  to the inventory!`);
    }

    removeProduct(name) {
        let index = this.ProductArray.findIndex(item => item.name === name);
        if (index !== -1) {
            this.ProductArray.splice(index, 1);//how many element we want to remove from the specific index that we had fetch
            console.log(`The Product  '${name}' is removed from the inventory.`);
        } else {
            console.log(`The Product '${name}' is not found in inventory.`);
        }
    }

    updateProduct(name, new_price, new_quantity) {
        let product = this.ProductArray.find(item => item.name === name);
        if (product) {
            product.price = new_price;
            product.quantity = new_quantity;
            console.log(`The Product '${name}' details are updated in the inventory.`);
        } else {
            console.log(`The Product '${name}' is not found in inventory.`);
        }
    }

    searchProduct(name) {
        let SearchedProduct = this.ProductArray.find(item => item.name === name);
        if (SearchedProduct) {
            console.log(`${SearchedProduct.name} - Price: ${SearchedProduct.price}, Quantity: ${SearchedProduct.quantity}`);
        } else {
            console.log(`The Product '${name}' is not found in inventory.`);
        }
    }
}

let prod1 = new Product('Book', 10, 1);
let prod2 = new Product('Pen', 20, 50);
let prod3 = new Product('Crayons', 50, 50);
let inventory_obj = new Inventory();

console.log("-------------------------------------------------------------------");
inventory_obj.addProduct(prod1);
inventory_obj.addProduct(prod2);
inventory_obj.addProduct(prod3);
console.log("-------------------------------------------------------------------");

inventory_obj.searchProduct('Book');
inventory_obj.updateProduct('Book', 25, 55);
inventory_obj.searchProduct('Book');
inventory_obj.updateProduct('Scissors', 25, 55);
console.log("-------------------------------------------------------------------");

inventory_obj.searchProduct('Pen');
console.log("-------------------------------------------------------------------");

inventory_obj.removeProduct('Book');
inventory_obj.removeProduct('Pencil');

console.log("\n-----------------------------------------------------------------\n");
