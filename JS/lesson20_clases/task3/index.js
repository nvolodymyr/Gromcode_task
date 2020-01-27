export class Wallet {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(sum) {
        this.balance += sum;
    }

    withdraw(sum) {
        if (sum > this.balance) {
            console.log(`No enough funds`);
            return;
        }
        this.balance -= sum;
    }
};