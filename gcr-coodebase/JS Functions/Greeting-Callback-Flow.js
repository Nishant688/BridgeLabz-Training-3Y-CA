/**
 * Question 1: Greeting Callback Flow
 * Demonstrates basic higher-order functions and asynchronous-style callback execution order.
 */

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    if (typeof callback === "function") {
        callback();
    }
}

console.log("=== Greeting Callback Flow Demonstration ===");
greetUser("Nishant", showEndMessage);
