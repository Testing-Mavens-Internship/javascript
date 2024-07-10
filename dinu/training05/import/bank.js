
export default class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log("Deposited: "+amount+". New balance:"+this.balance);
      } else {
        console.error("Invalid deposit amount. Please enter a positive value.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log("Withdrew:"+amount+". New balance:" +this.balance);
      } else {
        console.error("Insufficient funds or invalid withdrawal amount.");
      }
    }
  }
  