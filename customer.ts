import { IBankAccount } from "./iBankAccount.js";

export class Customer {
  public firstName: string;
  public lastName: string;
  public gender: string;
  public age: number;
  public mobileNumber: string;
  public bankAccount: IBankAccount;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    mobileNumber: string,
    bankAccount: IBankAccount
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.bankAccount = bankAccount;
  }

  public getCustomerInfo(): any {
    return {
      name: this.firstName + this.lastName,
      gender: this.gender,
      age: this.age,
      mobile: this.mobileNumber,
      accountBalance: this.bankAccount.accountBalance,
    };
  }
}
