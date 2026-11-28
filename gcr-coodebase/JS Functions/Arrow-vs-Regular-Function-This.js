/**
 * Question 3: Arrow vs Regular Function 'this' Binding
 * Analyzes why arrow functions do not bind their own 'this' and demonstrates the regular function fix.
 */

/*
Explanation:
Arrow functions do NOT have their own 'this' context. Instead, they lexically inherit 'this'
from their enclosing outer scope. When 'showNameArrow' is declared on an object literal in global/module
scope, 'this' refers to the global object (or undefined in strict mode / empty object in Node module wrapper),
making 'this.name' undefined.
A regular function method binds 'this' dynamically to the calling object instance at call time.
*/

console.log("=== Arrow Function Issue Demonstration ===");
const userArrow = {
    name: "Nishant Prajapati",
    showName: () => {
        console.log("Arrow Method this.name:", this?.name); // undefined
    }
};
userArrow.showName();

console.log("\n=== Fixed Regular Function Demonstration ===");
const userFixed = {
    name: "Nishant Prajapati",
    showName: function() {
        console.log("Regular Method this.name:", this.name); // "Nishant Prajapati"
    }
};
userFixed.showName();
