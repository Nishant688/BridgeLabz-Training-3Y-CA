/**
 * Question 2: Task Scheduler: Micro vs Macro Challenge
 * Visualizes JavaScript Event Loop prioritization between synchronous execution, microtasks, and macrotasks.
 */

/*
Event Loop Prioritization Explanation:
1. Synchronous Code: Executes immediately on the Main Call Stack until stack is empty.
2. Microtask Queue (Promise.then, MutationObserver, queueMicrotask):
   - Checked immediately after each call stack frame empties, BEFORE any macrotask runs.
   - The engine drains the ENTIRE microtask queue before giving up control.
3. Macrotask Queue (setTimeout, setInterval, setImmediate, I/O):
   - Only executed after the call stack and all pending microtasks have completely drained.
*/

console.log("=== Micro vs Macro Task Scheduler ===");
console.log("1. Start");

// Macrotask: Enqueued into the Timer Macrotask queue
setTimeout(() => {
    console.log("4. setTimeout Callback (Macrotask)");
}, 0);

// Microtask: Enqueued into the High-Priority Microtask queue
Promise.resolve().then(() => {
    console.log("3. Promise.then Callback (Microtask)");
});

// Synchronous execution
console.log("2. Synchronous Intermediate Log");
console.log("5. End");
