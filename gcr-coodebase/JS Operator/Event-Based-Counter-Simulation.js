/**
 * Question 6: Event-Based Counter Simulation
 * Simulates interactive click events modifying state through scoped functions.
 */

function createCounter(initialValue = 0) {
    let count = initialValue;

    // Inner nested helper function demonstrating function scope access
    function logState(action) {
        console.log(`[Action: ${action.padEnd(9)}] Current Count = ${count}`);
    }

    function increment() {
        count++;
        logState("INCREMENT");
        return count;
    }

    function decrement() {
        count--;
        logState("DECREMENT");
        return count;
    }

    function getCount() {
        return count;
    }

    return { increment, decrement, getCount };
}

console.log("=== Event-Based Counter Simulation ===");
const counter = createCounter(0);

// Simulating multiple user click interactions
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.increment();
counter.decrement();
console.log("Final Counter Value:", counter.getCount());
