import BankAccount from "./exportbankAccount.js";
export default class checkingAccount extends BankAccount
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
    }}}
    // export default new checkingAccount(1123,1000,50);