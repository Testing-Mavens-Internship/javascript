export default class BankAccount
{
    constructor(accountNumber, balance = 0.0)
    {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
 
    deposit(amount)
    {
        if (amount > 0)
        {
            this.balance += amount;
            console.log(`Deposited amount ${amount}. New balance: ${this.balance}`);
        }
        else
        {
            console.log("Deposit amount must be positive");
        }
    }
 
    withdraw(amount)
    {
        if (amount > 0)
        {
            if (this.balance >= amount)
            {
                this.balance -= amount;
                console.log(`Withdrew amount ${amount}. New balance: ${this.balance}`);
            }
            else
            {
                console.log("Insufficient funds");
            }
        }
        else
        {
            console.log("Withdraw amount must be positive");
        }
    }
}
