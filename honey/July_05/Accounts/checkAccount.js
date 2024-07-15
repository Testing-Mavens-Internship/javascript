import BankAccount from "./bankAccount.js";

export default class CheckingAccount extends BankAccount {
    constructor(balance, accountNumber, monthlyFee) {
      super(balance, accountNumber);
      this.monthlyFee = monthlyFee;
    }
    deductMonthlyFee() {
      this.balance >= this.monthlyFee
        ? (this.balance -= this.monthlyFee)
        : console.log(`Insufficient balance to deduct monthly fee`);
  
      console.log(
        `Deducted monthly fee : ${this.monthlyFee}, New balance : ${this.balance}`
      );
      console.log(`Total balance : ${this.balance}`);
      console.log(`------------------------------------------------------`);
    }
  }