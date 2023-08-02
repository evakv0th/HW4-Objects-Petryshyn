const bankAccount = {
  _balance: 1000,
  get formattedBalance() {
    return `$${this._balance}`;
  },
  set balance(value) {
    this._balance = value;
  },
  transfer: function (anotherBankAcc, amount) {
    if (
      typeof amount === "number" &&
      typeof anotherBankAcc === "object" &&
      anotherBankAcc.hasOwnProperty("_balance")
    ) {
      this._balance -= amount;
      anotherBankAcc._balance += amount;
    }
  },
};

console.log(bankAccount.formattedBalance);
bankAccount.balance = 1700;
console.log(bankAccount.formattedBalance);
console.log(bankAccount._balance);

const bankAccount2 = {
  _balance: 2000,
  get formattedBalance() {
    return `$${this._balance}`;
  },
  set balance(value) {
    this._balance = value;
  },
};

console.log(bankAccount.formattedBalance);
console.log(bankAccount2.formattedBalance);

bankAccount.transfer(bankAccount2, 500);

console.log(bankAccount.formattedBalance);
console.log(bankAccount2.formattedBalance);
