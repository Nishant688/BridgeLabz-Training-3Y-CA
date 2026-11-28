/**
 * Question 3: Monthly Expense Tracker
 * Calculates total and average monthly expenses across 5 categories and applies an 18% tax.
 */

// Expenses array for 5 categories: food, travel, rent, bills, leisure
const expenses = [
    { category: "Food", amount: 4500.50 },
    { category: "Travel", amount: 1800.75 },
    { category: "Rent", amount: 12000.00 },
    { category: "Bills", amount: 2350.25 },
    { category: "Leisure", amount: 1950.00 }
];

// Summing total expenses using arithmetic operators
let subtotal = 0;
for (let i = 0; i < expenses.length; i++) {
    subtotal += expenses[i].amount;
}

const categoryCount = expenses.length;
const averageExpense = subtotal / categoryCount;

// Adding 18% tax using compound assignment operator
const taxRate = 0.18;
let finalTotalWithTax = subtotal;
finalTotalWithTax += (subtotal * taxRate);

console.log("=== Monthly Expense Tracker Report ===");
console.table(expenses);
console.log(`Subtotal Expenses: ₹${subtotal.toFixed(2)}`);
console.log(`Average per Category: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (18% GST): ₹${(subtotal * taxRate).toFixed(2)}`);
console.log(`Final Amount Payable: ₹${finalTotalWithTax.toFixed(2)}`);
