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
        return this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

    async loadProducts(products) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.products = [...this.products, ...products];
                resolve(this.products);
            }, 1000);
        });
    }

    applyDiscountToAll(discountPercentage) {
        this.products.forEach(product => product.applyDiscount(discountPercentage));
    }
}
