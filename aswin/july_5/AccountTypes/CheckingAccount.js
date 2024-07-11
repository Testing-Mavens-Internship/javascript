import { BankAccount } from "./BankAccount.js";
export class CheckingAccount extends BankAccount{
    constructor(accountnumber,amount,monthlyFee){
        super(accountnumber,amount)
        this.monthlyFee=monthlyFee
        
    }
    deductMonthlyFee(){
        this.balance >= this.monthlyFee
                ? (this.balance -= this.monthlyFee,
                   console.log(`Deducted monthly fee of: ${this.monthlyFee}. New balance: ${this.balance}`))
                : console.error("Insufficient funds to cover monthly fee.");
    }
    }