/**
 * Question 7: Banking Application
 * BankAccount class with private field #balance, deposit, withdrawal validation, and error handling.
 */

class BankAccount {
    // Private field encapsulates balance from direct external mutation
    #balance;

    constructor(accountHolder, initialDeposit = 0) {
        this.accountHolder = accountHolder;
        this.#balance = initialDeposit >= 0 ? initialDeposit : 0;
    }

    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Deposit amount must be a positive number.");
        }
        this.#balance += amount;
        console.log(`[Deposit] ₹${amount} credited. Current Balance: ₹${this.#balance}`);
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error(`Insufficient balance! Requested: ₹${amount}, Available: ₹${this.#balance}`);
        }
        this.#balance -= amount;
        console.log(`[Withdrawal] ₹${amount} debited. Remaining Balance: ₹${this.#balance}`);
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

console.log("=== Banking Application Account Tests ===");
const account = new BankAccount("Nishant Prajapati", 15000);

// Valid operations
account.deposit(5000);
account.withdraw(4000);

// Invalid withdrawal handled via try/catch
try {
    console.log("Attempting overdraft of ₹50,000...");
    account.withdraw(50000);
} catch (e) {
    console.warn(`[Error Handled] ${e.message}`);
}

console.log(`Final Verified Balance: ₹${account.getBalance()}`);
