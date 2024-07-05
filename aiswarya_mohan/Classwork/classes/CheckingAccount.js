import {BankAccount} from "./BankAccount.js";
export class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, monthlyFee) {
      super(accountNumber, balance);
      this.monthlyFee = monthlyFee;
    }
  
    deductMonthlyFee() {
      if (this.balance >= this.monthlyFee) {
        this.balance -= this.monthlyFee;
        console.log(`Deducted monthly fee of ${this.monthlyFee}. New balance: ${this.balance}`);
      } else {
        console.error("Insufficient funds to cover monthly fee.");
      }
    }
  }
  // export default new CheckingAccount() : exporting as object
  // export default class : exporting as class