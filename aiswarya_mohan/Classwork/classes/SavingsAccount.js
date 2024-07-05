import {BankAccount} from "./BankAccount.js";
export class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    applyInterest() {
      const interest = this.balance * this.interestRate;
      this.balance += interest;
      console.log(`Applied ${interest.toFixed(2)} interest. New balance: ${this.balance.toFixed(2)}`);
    }
  }
// export default new SavingsAccount()