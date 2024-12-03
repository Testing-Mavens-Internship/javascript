class BankAccount
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
class savingsAccount extends BankAccount
{
    constructor(accno,bal,intr)
    {
        super(accno,bal);
        this.intrest=intr;
    }
    applyinterest(i)
    {
        this.applied=(this.balance*this.intrest)/100;
        this.balance=this.balance+this.applied;
        process.stdout.write("Applied: "+this.applied+" interest.  ");
        process.stdout.write("New Balance: "+this.balance+"\n");
    }
}
class checkingAccount extends BankAccount
{
    constructor(accno,bal,mnthlyamt)
    {
        super(accno,bal);
        this.monthlyamount=mnthlyamt;
    }
    deductmonthlyfee()
    {
        if(this.monthlyamount<this.balance&&this.monthlyamount>0)
        {
        this.balance=this.balance-this.monthlyamount;
        process.stdout.write("Deducted Monthly fee of: "+this.monthlyamount+".  ");
        process.stdout.write("New Balance: "+this.balance+"\n");
    }}
}
// let s = new savingsAccount(2222,2000,10);
// let c = new checkingAccount(1111,1000,10);
// console.log("Account"+":"+s.accountnum);
// console.log("Balance"+":"+s.balance);
let account=[new savingsAccount(1000,1000,2.5),new checkingAccount(2000,2000,10)]
 
account.forEach(account => {
    account.deposit(100);
    account.withdrawal(50);
 
    if (account instanceof savingsAccount) {
        account.applyinterest();
    }
    if (account instanceof checkingAccount) {
        account.deductmonthlyfee();
    }})
 
// s.deposit(500);
// s.withdrawal(50);
// s.applyinterest(10);
// console.log("New Balance"+":"+s.balance);

// console.log("Account"+":"+c.accountnum);
// console.log("Balance"+":"+c.balance);
// c.deposit(500);
// c.withdrawal(50);
// c.deductmonthlyfee(50);
// console.log("New Balance"+":"+c.balance);
// let accounts=[new savingsAccount(2222,2000,10),
//     new checkingAccount(1111,1000,10)]
//     for(let i in accounts)
//     {
//         console.log("Account"+":"+i.accountnum);
//         console.log("Balance"+":"+i.balance);
//         i.deposit(500);
//         i.withdrawal(50);
//         i.applyinterest(10);
//         console.log("New Balance"+":"+i.balance);
//     }
