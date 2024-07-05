export   class BankAccount{
    constructor(accountnumber,amount){
        this.accountnumber=accountnumber
        this.balance= 0;
        this.amountt = amount;
        
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