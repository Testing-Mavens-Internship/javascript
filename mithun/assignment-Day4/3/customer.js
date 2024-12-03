// customer.js
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    getInfo() {
      return `${this.name} (${this.email})`;
    }
  }
  
  export default Customer;
  