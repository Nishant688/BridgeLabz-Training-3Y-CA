/**
 * Question 9: Debugging the Event Loop
 * Predicts and demonstrates exact microtask and macrotask execution sequence.
 */

/*
Prediction Before Execution:
1. "Script start"        -> Executes synchronously on main thread.
2. "Script end"          -> Executes synchronously on main thread.
3. "Promise callback"    -> Microtask queue drains immediately upon synchronous code completion.
4. "Timeout callback"    -> Macrotask queue executes only after microtasks have completely resolved.

Actual Comparison:
As predicted, microtasks take absolute precedence over macrotask timers even when delay is 0ms.
*/

console.log("=== Debugging the Event Loop Execution Order ===");
console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback (Macrotask Queue)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (Microtask Queue)");
});

console.log("Script end");
