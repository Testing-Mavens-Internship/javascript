export class Inventory {
  constructor() {
      this.products = [];
  }

  addProduct(product) {
      this.products.push(product);
  }

  listProducts() {
      return this.products.map(product => product.toString()).join('\n');
  }

  searchProduct(name) {
      return this.products.filter(product => product.name.toLowerCase() === name.toLowerCase());
  }

  filterByCategory(category) {
      return this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
  }

  async loadProducts(products) {
      return new Promise((resolve) => {
          setTimeout(() => {
              products.forEach(product => this.addProduct(product));
              resolve();
          }, 1000);
      });
  }

  applyDiscountToAll(discount) {
      this.products.forEach(product => product.applyDiscount(discount));
  }
}
