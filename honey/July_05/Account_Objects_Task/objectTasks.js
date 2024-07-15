import SavingsAccount from '../Accounts/saveAccount.js'
import CheckingAccount from '../Accounts/checkAccount.js'

let instance = [
    new SavingsAccount(10000,5365365,8),
    new CheckingAccount(11000,6456476,200)
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
