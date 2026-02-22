interface IAccount {
  Date_of_opening: Date;
  addCustomer(): void;
  removeCustomer(): void;
}

class Account {
  Acc_no: string;
  Balance: number;

  constructor(acc_no: string, initialBalance: number = 0) {
    this.Acc_no = acc_no;
    this.Balance = initialBalance;
  }

  debitAmount(amount: number): void {
    if (amount > 0 && this.Balance >= amount) {
      this.Balance -= amount;
    } else {
      console.log("Invalid debit amount or insufficient funds.");
    }
  }

  creditAmount(amount: number): void {
    if (amount > 0) {
      this.Balance += amount;
    } else {
      console.log("Invalid credit amount.");
    }
  }

  getBalance(): number {
    return this.Balance;
  }
}

class Saving_Account extends Account implements IAccount {
  Min_Balance: number;
  Date_of_opening: Date;

  constructor(
    acc_no: string,
    initialBalance: number,
    min_balance: number,
    date_of_opening: Date,
  ) {
    super(acc_no, initialBalance);
    this.Min_Balance = min_balance;
    this.Date_of_opening = date_of_opening;
  }

  // i dunno what actual functionality to be added here.
  // so, here is console log instead
  addCustomer(): void {
    console.log(`Customer added to Savings Account: ${this.Acc_no}`);
  }

  removeCustomer(): void {
    console.log(`Customer removed from Savings Account: ${this.Acc_no}`);
  }
}

class Current_Account extends Account implements IAccount {
  Interest_rate: number;
  Date_of_opening: Date;

  constructor(
    acc_no: string,
    initialBalance: number,
    interest_rate: number,
    date_of_opening: Date,
  ) {
    super(acc_no, initialBalance);
    this.Interest_rate = interest_rate;
    this.Date_of_opening = date_of_opening;
  }

  addCustomer(): void {
    console.log(`Customer added to Current Account: ${this.Acc_no}`);
  }

  removeCustomer(): void {
    console.log(`Customer removed from Current Account: ${this.Acc_no}`);
  }
}
