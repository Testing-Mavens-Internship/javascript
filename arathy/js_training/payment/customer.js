class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDescription() {
        return `${this.name} (${this.email})`;
    }
}

export default Customer;
