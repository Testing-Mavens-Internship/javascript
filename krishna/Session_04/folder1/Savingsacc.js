//import BankAccount from "./Bankacc.js";
//export 
class SavingsAccount extends BankAccount{
    constructor(accountnumber,amount,interest){
        super(accountnumber,amount)
        this.interest= interest
    }
    export default applyInterest(){
        let interestEq=(this.balance/100)*this.interest
        this.balance +=interestEq
        console.log("Applied: "+interestEq+" New balance: "+this.balance)
    }
}
