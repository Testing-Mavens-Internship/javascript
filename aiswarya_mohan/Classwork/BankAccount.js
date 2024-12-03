class BankAccount
{
    constructor(accountno,amount)
    {
        this.accountno=accountno
        this.balance=0
        this.amount=amount
    }
    deposit()
    {
        this.balance+=this.amount
        console.log(`Deposited ${this.amount} to ${this.accountno}`)
        console.log(`Balance: ${this.balance}`)
    }
    withdraw()
    {
        this.balance-=this.amount
        if(this.balance>=this.amount)
        {
            console.log(`Withdrawn ${this.amount} from ${this.accountno}`)
            console.log(`Balance: ${this.balance}`)
        }
        else
        {
            console.log("Insufficient fund")
        }

    }
}
// class SavingsAccount extends BankAccount
// {
// constructor(interestRate)
// {
//     super(accountno,amount)
//     this.interestRate=interestRate
// }
// applyInterest()
// {
// this.balance+= this.balance*(this.interestRate/100)
// }
// }

// class CheckingAccount extends BankAccount
// {
// constructor(monthlyfee)
// {
//     super(accountno,amount)
//     this.monthlyfee=monthlyfee
// }
// deductMonthlyFee()
// {
// this.balance-=this.monthlyfee
// }
// }
let obj=new BankAccount(113314432346,500)
obj.deposit()