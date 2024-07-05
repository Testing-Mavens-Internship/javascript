import {SavingsAccount} from "../Class_Folder/SavingsAccount.js ";
import {CheckingAccount} from "../Class_Folder/CheckingAccount.js";

console.log("---------------------------------------")
let arr = [new SavingsAccount(12345,100,7),new CheckingAccount(45667,100,5),new CheckingAccount(45668,150,50)]
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


// import savings1 from "../Class_Folder/SavingsAccount.js";
// import checking1 from "../Class_Folder/CheckingAccount.js";