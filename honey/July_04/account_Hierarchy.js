class BankAccount {
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
class SavingsAccount extends BankAccount {
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

class CheckingAccount extends BankAccount {
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

let instance = [
  new SavingsAccount(10000, 735454, 8),
  new CheckingAccount(11000, 898778, 700),
];
instance.forEach((item) => {
  item.accountDetails();
  item.depositFund(1000);
  item.withdrawFund(200);

  if (item instanceof SavingsAccount) {
    item.applyInterest();
  }
  if (item instanceof CheckingAccount) {
    item.deductMonthlyFee();
  }
});
