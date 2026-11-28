"use strict";
/**
 * Question 7: Smart Calculator
 * Handles arithmetic operations via switch with custom error classes for divide-by-zero and negative square root.
 */

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`InvalidOperationError: The operation '${operation}' is not supported.`);
        this.name = "InvalidOperationError";
    }
}

function calculate(op, num1, num2 = null) {
    switch (op.toLowerCase()) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "power":
            return Math.pow(num1, num2);
        case "divide":
            if (num2 === 0) {
                throw new Error("DivisionByZeroError: Cannot divide by zero.");
            }
            return num1 / num2;
        case "root":
            if (num1 < 0) {
                throw new Error("NegativeRootError: Square root of a negative number is undefined in real numbers.");
            }
            return Math.sqrt(num1);
        default:
            throw new InvalidOperationError(op);
    }
}

const operationsList = [
    { op: "add", n1: 25, n2: 15 },
    { op: "divide", n1: 25, n2: 0 },   // Divide by zero error
    { op: "power", n1: 2, n2: 8 },
    { op: "root", n1: -16, n2: null }, // Negative root error
    { op: "root", n1: 49, n2: null },
    { op: "modulus", n1: 10, n2: 3 }   // InvalidOperationError
];

console.log("=== Smart Calculator Execution Summary ===");
const results = operationsList.map(item => {
    try {
        const val = calculate(item.op, item.n1, item.n2);
        return { Operation: item.op, Inputs: `${item.n1}, ${item.n2 ?? ''}`, Result: val, Status: "SUCCESS" };
    } catch (err) {
        return { Operation: item.op, Inputs: `${item.n1}, ${item.n2 ?? ''}`, Result: err.message, Status: "FAILED" };
    }
});

console.table(results);
