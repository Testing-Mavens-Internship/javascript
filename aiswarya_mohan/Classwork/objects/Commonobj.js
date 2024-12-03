import {SavingsAccount} from "../classes/SavingsAccount.js"
import {CheckingAccount} from "../classes/CheckingAccount.js"

let accounts = [
new SavingsAccount(16547873,1000,12),
new CheckingAccount(10465374,5000,5)
  ];
  
  for (const account of accounts) {
    console.log("-------------------------");
    console.log(`Account: ${account.accountNumber}`);
    console.log(`Balance: ${account.balance}`);
  
    account.deposit(100);
    account.withdraw(50);
  
    if (account instanceof SavingsAccount) {
      account.applyInterest();
    }
  
    if (account instanceof CheckingAccount) {
      account.deductMonthlyFee();
    }
  
    console.log(`New Balance: ${account.balance}`);
  }