class BankAccount
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
 
class SavingsAccount extends BankAccount
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
 
class CheckingAccount extends BankAccount
{
    constructor(accountNumber, balance, monthlyFee)
    {
        super(accountNumber, balance);
        this.monthlyFee = monthlyFee;
    }
    deductMonthlyFee()
    {
        if (this.balance >= this.monthlyFee)
        {
            this.balance -= this.monthlyFee;
            console.log(`Deducted monthly fee of ${this.monthlyFee} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
        else
        {
            console.log("Insufficient funds to deduct monthly fee");
        }
    }
}
 
let account=[new SavingsAccount(1000,1000,2.5),new CheckingAccount(2000,2000,10)]
 
account.forEach(account => {
    account.deposit(100);
    account.withdraw(50);
 
    if (account instanceof SavingsAccount) {
        account.applyInterest();
    }
    if (account instanceof CheckingAccount) {
        account.deductMonthlyFee();
    } 
})
