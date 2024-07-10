class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        return this.products.map(product => product.getDetails()).join('\n');
    }

    searchProduct(name) {
        return this.products.filter(product => product.name.includes(name)).map(product => product.getDetails()).join('\n');
    }

    filterByCategory(category) {
        return this.products.filter(product => product.constructor.name === category).map(product => product.getDetails()).join('\n');
    }

    applyDiscountToAll(discount) {
        this.products.forEach(product => product.applyDiscount(discount));
    }
}

export default Inventory;
