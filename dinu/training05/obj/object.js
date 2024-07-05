import SavingsAccount from"../import/savings.js";
import CheckingAccount from"../import/checking.js";

const accounts = [
    new  SavingsAccount(80996, 500, 5),
     new CheckingAccount(57775, 1000, 2),
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
   