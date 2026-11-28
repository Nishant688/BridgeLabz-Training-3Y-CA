"use strict";
/**
 * Question 6: Pyramid Pattern Generator
 * Demonstrates loop scoping ('let' block scope vs 'var' function scope) and generates an ASCII pyramid.
 */

function generatePyramid(rows = 5) {
    console.log(`=== Generating Pyramid Pattern (Rows: ${rows}) ===`);

    // Using 'let' ensures loop counter variables 'i' and 'j' exist only within their block scope
    for (let i = 1; i <= rows; i++) {
        let line = "";
        // Leading spaces
        for (let s = 1; s <= rows - i; s++) {
            line += " ";
        }
        // Asterisks
        for (let j = 1; j <= i; j++) {
            line += "* ";
        }
        console.log(line);
    }
}

generatePyramid(5);

console.log("\nScoping Comparison Note:");
console.log("- With 'let': 'i', 's', and 'j' cannot leak outside the loop body.");
console.log("- With 'var': Loop counters leak into outer function scope and risk unexpected mutations in asynchronous loops.");
