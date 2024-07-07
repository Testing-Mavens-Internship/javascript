
export class Inventory {
  constructor() {
    this.products = [];
  }

  async addProduct(product) {
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  searchProduct(searchTerm) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filterByCategory(category) {
    return this.products.filter((product) => product.category === category);
  }

  async applyDiscount(discount) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.products.forEach((product) => {
      product.price *= (100 - discount) / 100;
    });
  }
}


