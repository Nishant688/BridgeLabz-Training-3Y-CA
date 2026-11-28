/**
 * Question 2: Apply Operation Callback
 * Higher-order function applyOperation executing transformation callbacks over array items.
 */

function applyOperation(numbers, operation) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        results.push(operation(numbers[i]));
    }
    return results;
}

// Callback functions
const doubleNumber = (num) => num * 2;
const squareNumber = (num) => num * num;

const inputNumbers = [1, 2, 3, 4];

console.log("=== Apply Operation Callback Results ===");
console.log("Original Numbers:  ", inputNumbers);
console.log("Doubled Operation: ", applyOperation(inputNumbers, doubleNumber)); // [2, 4, 6, 8]
console.log("Squared Operation: ", applyOperation(inputNumbers, squareNumber)); // [1, 4, 9, 16]
