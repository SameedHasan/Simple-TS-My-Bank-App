function generateAccountBalance() {
    return Math.floor(10000 + Math.random() * 9000);
}
export class BankAccount {
    accountBalance;
    constructor() {
        this.accountBalance = generateAccountBalance();
    }
    credit(amount) {
        this.accountBalance += amount;
        console.log(`Your account has been credited successfully!`);
    }
    debit(amount) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            console.log(`Transaction successful! New account balance is ${this.accountBalance}`);
        }
        else {
            console.log("Sorry, you have insufficient balance!");
        }
    }
}
