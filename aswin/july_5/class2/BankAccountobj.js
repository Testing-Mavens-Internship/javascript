import { CheckingAccount } from "../AccountTypes/CheckingAccount.js"
import { SavingsAccount } from "../AccountTypes/SavingsAccount.js"

console.log("--------------------------")
let arr = [new SavingsAccount(12345,100,7), new CheckingAccount(45667,100,5), new CheckingAccount(48867,100,5)]
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





