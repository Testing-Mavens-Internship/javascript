import {SavingsAccount} from "../folder1/Savingsacc.js";
import {CheckingAccount} from "../folder1/Checkingacc.js";
let arr = [new SavingsAccount(12345,100,7),new CheckingAccount(45667,100,5)]
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
}}
