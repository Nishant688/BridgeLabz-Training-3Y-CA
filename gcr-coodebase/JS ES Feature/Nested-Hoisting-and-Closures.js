/**
 * Question 10: Nested Hoisting and Closures
 * Explores nested scope variable hoisting, closure behavior, and arrow function contrast.
 */

console.log("=== Original Snippet Output Prediction ===");
console.log("Prediction: outer() logs 'undefined', then inner() logs 'undefined'.");
console.log("Reason: 'var count' inside outer is hoisted to the top of outer(), initialized to undefined.");
console.log("Similarly, 'var count' inside inner is hoisted to the top of inner(), shadowing outer's count with undefined.");

function originalDemo() {
    function outer() {
        console.log("Inside outer before assignment:", count); // undefined
        var count = 5;
        function inner() {
            console.log("Inside inner before assignment:", count); // undefined (shadowed)
            var count = 10;
        }
        inner();
    }
    outer();
}

originalDemo();

console.log("\n=== Arrow Function Closure Demonstration ===");
function modernClosureDemo() {
    let outerCount = 5;
    // Arrow function creates lexical closure capturing 'outerCount'
    const innerArrow = () => {
        console.log("Arrow function accessing outer lexical scope:", outerCount); // 5
    };
    innerArrow();
}

modernClosureDemo();
