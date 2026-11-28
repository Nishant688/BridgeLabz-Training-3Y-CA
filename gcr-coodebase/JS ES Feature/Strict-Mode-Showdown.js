/**
 * Question 8: Strict Mode Showdown
 * Contrasts behavior with and without 'use strict' regarding duplicate parameters, undeclared variables, and delete.
 */

console.log("=== Strict Mode Restrictions Summary ===");
console.log("1. Duplicate Parameters: In non-strict mode, function demo(a, a) shadows the first parameter. Under 'use strict', it throws a SyntaxError.");
console.log("2. Undeclared Variables: Under non-strict, assigning to 'total = 10' creates a global variable. Under 'use strict', it throws ReferenceError.");
console.log("3. Deleting Identifiers: 'delete total' on a plain variable is illegal in strict mode and throws SyntaxError.");

// Modern clean ES6 compliant version
function demoCorrect(param1, param2) {
    "use strict";
    const total = param1 + param2;
    console.log(`Correct ES6 Execution: param1 = ${param1}, param2 = ${param2}, total = ${total}`);
    return total;
}

demoCorrect(5, 10);
