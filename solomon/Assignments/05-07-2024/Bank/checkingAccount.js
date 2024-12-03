
import {BankAccount} from "./bankAccount.js";
export class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, monthlyFee) {
      super(accountNumber, balance);
      this.monthlyFee = monthlyFee;
    }
  
    deductMonthlyFee() {
      if (this.balance >= this.monthlyFee) {
        this.balance -= this.monthlyFee;
        console.log(`Deducted monthly fee of ${this.monthlyFee} from account ${this.accountNumber}. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient funds to deduct monthly fee");
      }
    }
  }
