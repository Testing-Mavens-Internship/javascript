class BankAccount{
    constructor(accountnumber,amount){
        this.accountnumber=accountnumber
        this.balance=0
        this.amountt = amount
        
    }
    deposit(){
        this.balance+=this.amountt;
        console.log("Deposited: "+this.amountt+" New balance: "+this.balance)

    }
    withdrawFund(draw){
        this.balance>=draw?this.balance-=draw:console.log("Insufficient Balance")
        
        console.log("Withdraw: "+draw+" New balance: "+this.balance)
    }
}
class SavingsAccount extends BankAccount{
    constructor(accountnumber,amount,interest){
        super(accountnumber,amount)
        this.interest= interest
    }
    applyInterest(){
        let interestEq=(this.balance/100)*this.interest
        this.balance +=interestEq
        console.log("Applied: "+interestEq+" New balance: "+this.balance)
    }
}
class CheckingAccount extends BankAccount{
constructor(accountnumber,amount,monthlyFee){
    super(accountnumber,amount)
    this.monthlyFee=monthlyFee
    
}
deductMonthlyFee(){
    this.balance >= this.monthlyFee? (this.balance -= this.monthlyFee,console.log("Deducted monthly fee of: ${this.monthlyFee}. New balance: ${this.balance}")) : console.error("Insufficient funds to cover monthly fee.");
}
}
console.log("---------------------------------------")
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