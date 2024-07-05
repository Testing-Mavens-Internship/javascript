import BankAccount from "./bank.js";

export default class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, monthlyFee) {
      super(accountNumber, balance);
      this.monthlyFee = monthlyFee;
    }
  
    deductMonthlyFee() {
      if (this.balance >= this.monthlyFee) {
        this.balance -= this.monthlyFee;
        console.log("Deducted monthly fee of "+this.monthlyFee+". New balance:" +this.balance);
      } else {
        console.error("Insufficient funds to cover monthly fee.");
      }
    }
  }
  
  
