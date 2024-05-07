import { IBankAccount } from "./iBankAccount.js";

function generateAccountBalance(): number {
  return Math.floor(10000 + Math.random() * 9000);
}

export class BankAccount implements IBankAccount {
  accountBalance: number;

  constructor() {
    this.accountBalance = generateAccountBalance();
  }

  credit(amount: number): void {
    this.accountBalance += amount;
    console.log(`Your account has been credited successfully!`);
  }

  debit(amount: number): void {
    if (this.accountBalance >= amount) {
      this.accountBalance -= amount;
      console.log(
        `Transaction successful! New account balance is ${this.accountBalance}`
      );
    } else {
      console.log("Sorry, you have insufficient balance!");
    }
  }

  // checkBalance(): void {
  //   console.log(`Your Current balance: ${this.accountBalance}`);
  // }
}
