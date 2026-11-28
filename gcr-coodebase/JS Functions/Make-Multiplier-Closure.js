/**
 * Question 7: Make Multiplier Closure
 * Demonstrates closure scoping where the inner function retains access to the outer multiplier parameter.
 */

/*
Closure Explanation:
When 'makeMultiplier(multiplier)' executes, a new execution context is created with 'multiplier' in its scope.
Even after 'makeMultiplier' finishes and returns, the returned inner function retains a reference to 'multiplier'
via its lexical environment (closure).
*/

function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

console.log("=== Make Multiplier Closure Demonstration ===");
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const tenTimes = makeMultiplier(10);

console.log("Triple 5    (5 * 3)  :", triple(5));     // 15
console.log("Double 8    (8 * 2)  :", double(8));     // 16
console.log("TenTimes 12 (12 * 10):", tenTimes(12)); // 120
