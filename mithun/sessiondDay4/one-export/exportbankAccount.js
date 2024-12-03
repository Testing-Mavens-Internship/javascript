export default class BankAccount
{
    constructor(accno,bal)
    {
        this.accountnum=accno;
        this.balance=bal;
    }
    deposit(amount)
    {
        if(amount>0)
        {
        this.balance=this.balance+amount;
        process.stdout.write("Deposited: "+amount+"  ");
        process.stdout.write("New Balance: "+this.balance+"\n");
        }
        else
        {
            console.log("Invalid entry");
        }
    }
    withdrawal(amount)
    {
        if(amount>this.balance)
        {
            console.log("Invalid Entry");
        }
        else if(amount<this.balance&&amount>0)
        {
            this.balance=this.balance-amount;
            process.stdout.write ("Withdraw: "+amount+"  ");
            process.stdout.write("New Balance: "+this.balance+"\n");
        }
        else
        {
            console.log("Enter a positve number")
        }
    }
    
}