import BankAccount from "./bankAccount.js";

export default class SavingsAccount extends BankAccount
{
    constructor(accountNumber, balance, interestRate)
    {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
 
    applyInterest()
    {
        const interest = this.balance * ((this.interestRate)/100);
        this.balance += interest;
        console.log(`Applied interest of ${interest} to account ${this.accountNumber}. New balance: ${this.balance}`);
    }
}

//export default new SavingsAccount(1000,1000,2.5)