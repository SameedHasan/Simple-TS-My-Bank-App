#!/usr/bin/env node
import inquirer from "inquirer";
import { Customer } from "./customer.js";
import { BankAccount } from "./bankAccount.js";

function validateAmount(input: string): boolean {
  return (
    Number(input) >= 500 && Number(input) <= 25000 && Number(input) % 500 === 0
  );
}

async function promptForAmount(str: string): Promise<number> {
  const { amount } = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: `Enter amount to ${str}:`,
      validate: function (input) {
        if (validateAmount(input)) {
          return true;
        } else {
          return "Please enter amount between 500-25000 & multiple of 500.";
        }
      },
    },
  ]);

  return amount;
}

async function main() {
  const myAccount = new BankAccount();
  const customer = new Customer(
    "Sameed",
    "Hasan",
    "Male",
    24,
    "03355520338",
    myAccount
  );

  while (true) {
    const answer = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: ["Debit", "Credit", "View Balance", "Quit"],
    });

    if (answer.action === "Debit") {
      const amount = await promptForAmount(answer.action);
      customer.bankAccount.debit(amount);
    } else if (answer.action === "Credit") {
      const amount = await promptForAmount(answer.action);
      customer.bankAccount.credit(amount);
    } else if (answer.action === "View Balance") {
      console.log(
        `Your current account balance: `,
        customer.getCustomerInfo().accountBalance
      );
    } else if (answer.action === "Quit") {
      console.log("Exiting...");
      break;
    }
  }
}
// Start the application
main().catch(console.error);
