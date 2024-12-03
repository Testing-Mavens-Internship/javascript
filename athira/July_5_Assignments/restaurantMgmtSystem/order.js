class Order {
    constructor(customer, items = []) {
        this.customer = customer;
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
    }

    getOrderSummary() {
        const itemDescriptions = this.items.map(item => item.getDescription()).join('\n');
        return `${this.customer.getDetails()}\nItems:\n${itemDescriptions}\nTotal: $${this.getTotal()}`;
    }
}

export default Order;
