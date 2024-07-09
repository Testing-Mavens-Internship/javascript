export default class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getDetails(){
        return `${this.name} (${this.email})`;
    }
}