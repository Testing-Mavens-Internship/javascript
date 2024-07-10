import BankAccount from "./exportbankAccount.js";
export default class savingsAccount extends BankAccount
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
// export default new savingsAccount(34526,2500,10)