export default class BankAccount {
    constructor(balance, accountNumber) {
      this.balance = balance;
      this.accountNumber = accountNumber;
    }
    accountDetails() {
      console.log(
        `Account number: ${this.accountNumber} , Initial balance : ${this.balance}`
      );
    }
    depositFund(deposit) {
      this.balance += deposit;
      console.log(
        `Deposited amount : ${deposit} , New balance : ${this.balance}`
      );
    }
    withdrawFund(fund) {
      this.balance > fund
        ? (this.balance -= fund)
        : console.log("Insufficient balance");
      console.log(`Withdrew fund : ${fund} , New balance : ${this.balance}`);
    }
  }