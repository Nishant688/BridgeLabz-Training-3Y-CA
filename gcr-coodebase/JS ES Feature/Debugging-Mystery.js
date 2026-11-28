"use strict";
/**
 * Question 4: Debugging Mystery
 * Identifies why undeclared variables fail in strict mode and demonstrates proper declaration and call stack observation.
 */

/*
Problem Analysis:
In standard non-strict JavaScript, assigning to an undeclared variable creates an implicit global property on 'window' (or 'global').
Under "use strict", assigning to an undeclared variable throws:
ReferenceError: greeting is not defined
This prevents silent bugs and global namespace pollution.
*/

function showMessageFixed() {
    // Declared with local 'let' scope
    let greeting = "Welcome to Modern JavaScript Development!";
    console.log("[Call Stack Observation: inside showMessageFixed()]");
    console.log("Greeting:", greeting);
    return greeting;
}

console.log("=== Debugging Mystery Resolution ===");
console.log("1. Root Cause: Under 'use strict', assignments to undeclared identifiers throw ReferenceError.");
console.log("2. Scope Resolution: Declaring with 'let' binds the identifier explicitly to the function block scope.");
showMessageFixed();
