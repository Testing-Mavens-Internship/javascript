import SavingsAccount from '../js_session4/saving.js'
import CheckingAccount from '../js_session4/checking.js'
console.log("--------------------------")
let arr = [new SavingsAccount(12345,100,7), new CheckingAccount(45667,100,5)]
for(let user of arr){
console.log("Account: "+user.accountnumber)
console.log("Balance: "+ user.balance)
user.deposit();
if (user instanceof SavingsAccount) {
    user.applyInterest();
}
user.withdrawFund(50);
if (user instanceof CheckingAccount) {
    user.deductMonthlyFee();
}
console.log("--------------------------")
}
