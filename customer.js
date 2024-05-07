export class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    getCustomerInfo() {
        return {
            name: this.firstName + this.lastName,
            gender: this.gender,
            age: this.age,
            mobile: this.mobileNumber,
            accountBalance: this.bankAccount.accountBalance,
        };
    }
}
