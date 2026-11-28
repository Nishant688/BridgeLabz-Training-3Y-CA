/**
 * Question 5: Hoisting Lab: The Sequence Trap
 * Analyzes hoisting differences between 'var', 'let', and function declarations vs arrow functions.
 */

/*
Memory State Analysis During Creation Phase:
1. 'var score': hoisted and initialized to 'undefined'.
2. 'function announce()': hoisted with its complete function definition.
3. 'let status': hoisted into the Temporal Dead Zone (TDZ); accessing before initialization throws ReferenceError.
4. 'function startGame()': hoisted with its complete definition.
*/

console.log("=== Original Hoisting Behavior ===");
var score = 50;
let statusVal = "ready";

function announce() {
    console.log("Game started! (Function Declaration Hoisted)");
}

function startGame() {
    console.log("Status check:", statusVal);
}

// Clean Execution Order
announce();
console.log("Initial Score:", score);
startGame();

console.log("\n=== Arrow Function Comparison (No Declaration Hoisting) ===");
// Arrow functions assigned to const/let behave like variables (TDZ applies)
const announceArrow = () => console.log("Arrow Announce: Game Active");
const startGameArrow = () => console.log("Arrow StartGame: Status is", statusVal);

announceArrow();
startGameArrow();
