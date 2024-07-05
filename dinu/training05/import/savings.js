import BankAccount from "./bank.js";
export default class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    applyInterest() {
      let value=(this.balance*this.interestRate)/100;
      this.balance+=value
      console.log("Applied:"+ value+" interest. New balance:" +this.balance);
    }
  }