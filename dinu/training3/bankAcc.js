// Create a base class BankAccount with properties like accountNumber, balance, and methods for 
//depositing and withdrawing funds (implementing basic checks for insufficient funds).
// Create subclasses SavingsAccount and CheckingAccount that inherit from BankAccount.
// Define an additional property interestRate for SavingsAccount and introduce an applyInterest()
// method to calculate and add interest to the balance.
// Implement a monthly fee for CheckingAccount with a deductMonthlyFee() method.
// Use polymorphism to create an array of BankAccount references that hold instances of both 
//SavingsAccount and CheckingAccount.
// Loop through the array, calling deposit, withdraw, applyInterest() (for SavingsAccount), 
// //and deductMonthlyFee() (for CheckingAccount) methods to demonstrate polymorphic behavior. 
// //Print account details after each operation.




 class BankAccount {
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
  
  class SavingsAccount extends BankAccount {
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
  
  class CheckingAccount extends BankAccount {
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
  

  const accounts = [
    new SavingsAccount(57775, 1000, 2), 
    new CheckingAccount(80996, 500, 5), 
  ];
  
  for (const account of accounts) {
    console.log("-----");
    console.log("Account:" +account.accountNumber);
    console.log("Balance:"+account.balance);
  
    account.deposit(1010);
    account.withdraw(500);

    if (account instanceof SavingsAccount) {
      account.applyInterest();
    }
  
    if (account instanceof CheckingAccount) {
      account.deductMonthlyFee();
    }
  
    console.log("New Balance:"+account.balance);
  }
   