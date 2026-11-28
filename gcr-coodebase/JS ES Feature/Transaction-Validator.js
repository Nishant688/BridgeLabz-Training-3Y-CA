"use strict";
/**
 * Question 3: Transaction Validator
 * Loops through transactions, throwing custom errors for negative amounts, missing properties, or null values.
 */

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 4, amount: 1500 }
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
    const txn = transactions[i];

    try {
        if (txn === null || txn === undefined) {
            throw new Error("Null or undefined transaction object detected.");
        }
        if (txn.id === undefined) {
            throw new Error("Missing transaction ID attribute.");
        }
        if (txn.amount === undefined) {
            throw new Error(`Transaction (ID ${txn.id}) has missing amount.`);
        }
        if (typeof txn.amount !== "number" || isNaN(txn.amount)) {
            throw new Error(`Transaction (ID ${txn.id}) amount is not a valid number.`);
        }
        if (txn.amount < 0) {
            throw new Error(`Negative amount (₹${txn.amount}) is not permitted on ID ${txn.id}.`);
        }

        // Transaction is valid
        validTransactions.push({
            TxnIndex: i,
            Id: txn.id,
            Amount: `₹${txn.amount}`,
            Status: "VALID"
        });
    } catch (error) {
        invalidTransactions.push({
            TxnIndex: i,
            Record: JSON.stringify(txn),
            ErrorReason: error.message
        });
    }
}

console.log("=== Valid Transactions Report ===");
console.table(validTransactions);

console.log("\n=== Invalid Transactions Logged ===");
console.table(invalidTransactions);

console.log(`\nAudit Summary: Successful Transactions = ${validTransactions.length} | Failed Transactions = ${invalidTransactions.length}`);
