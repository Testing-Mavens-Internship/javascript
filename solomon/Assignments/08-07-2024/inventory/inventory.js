export class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    listProducts() {
      return this.products;
    }
  
    searchProduct(name) {
      return this.products.filter(product => product.name.toLowerCase() === name.toLowerCase());
    }
  
    filterByCategory(category) {
      return this.products.filter(product => product.constructor.name.toLowerCase() === category.toLowerCase());
    }
  
    applyDiscountToAll(discount) {
      this.products.forEach(product => product.applyDiscount(discount));
    }
  
    async loadProductsAsync(products) {
      return new Promise(resolve => {
        setTimeout(() => {
          products.forEach(product => this.addProduct(product));
          resolve();
        }, 1000);
      });
    }
  }
  