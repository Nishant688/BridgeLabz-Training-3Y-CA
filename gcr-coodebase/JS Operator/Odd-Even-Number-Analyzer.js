/**
 * Question 9: Odd-Even Number Analyzer
 * Classifies numbers from 1 to 30 into FizzBuzz, Even, or Odd using loops, modulus (%), and push().
 */

function analyzeNumberRange(limit = 30) {
    const rawNumbers = [];
    const classificationResults = [];

    // Accept numbers 1-30 in an array using a loop
    for (let i = 1; i <= limit; i++) {
        rawNumbers.push(i);
    }

    // Classify each number
    for (let num of rawNumbers) {
        let label = "";
        if (num % 3 === 0 && num % 5 === 0) {
            label = "FizzBuzz";
        } else if (num % 2 === 0) {
            label = "Even";
        } else {
            label = "Odd";
        }
        classificationResults.push({ Number: num, Type: label });
    }

    return classificationResults;
}

console.log("=== Odd-Even Number Analyzer (1 to 30) ===");
const results = analyzeNumberRange(30);
console.table(results.slice(0, 15)); // Show sample first 15
console.log("Full classification completed for all 30 elements.");
