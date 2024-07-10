import SavingsAccount from "../exercise_5_july/current.js"
import CheckingAccount from "../exercise_5_july/savings.js"

let account=[new SavingsAccount(1000,1000,2.5),new CheckingAccount(2000,2000,10)]
 
account.forEach(account => {
    account.deposit(100);
    account.withdraw(50);
 
    if (account instanceof SavingsAccount) {
        account.applyInterest();
    }
    if (account instanceof CheckingAccount) {
        account.deductMonthlyFee();
    }
})