import checkingAccount from '../one-export/exportcurrentAccountObject.js'
import savingsAccount from '../one-export/exportsavingsAccountObject.js'
let acc = [
    new savingsAccount(10001,1000,10),new checkingAccount(14562,2500,5)
]
acc.forEach(a=>{
    a.deposit(20);
    a.withdrawal(300);
    if(a instanceof savingsAccount)
    {
        a.applyinterest()
    }
    if(a instanceof checkingAccount)
    {
        a.deductmonthlyfee()
    }
})