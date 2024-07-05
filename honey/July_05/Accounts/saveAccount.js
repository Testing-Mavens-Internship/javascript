import BankAccount from "./bankAccount.js";
 
export default class SavingsAccount extends BankAccount {
    constructor(balance, accountNumber, interestRate) {
      super(balance, accountNumber);
      this.interestRate = interestRate;
    }
    applyInterest() {
      const interestAmount = (this.balance * this.interestRate) / 100;
      this.balance += interestAmount;
      console.log(
        `Applied interest amount : ${interestAmount} , New balance : ${this.balance}`
      );
      console.log(`Total balance : ${this.balance}`);
      console.log(`------------------------------------------------------`);
    }
  }
