export interface IBankAccount {
  accountBalance: number;

  credit(amount: number): void;
  debit(amount: number): void;
}
