class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        return `Customer: ${this.name} (${this.email})`;
    }
}

export default Customer;
