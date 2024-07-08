export class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    listProducts() {
      return this.products.map(product => product.getDetails());
    }
  
    searchProduct(name) {
      return this.products.filter(product => product.name.includes(name));
    }
  
    filterProductsByType(type) {
      return this.products.filter(product => product instanceof type);
    }
  
    async fetchProducts() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.listProducts());
        }, 1000);
      });
    }
  }