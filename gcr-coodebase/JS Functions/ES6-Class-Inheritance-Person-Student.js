/**
 * Question 9: ES6 Class Inheritance (Person -> Student)
 * Implements inheritance using ES6 'class', 'extends', and 'super()', proving parity with prototype chains.
 */

class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`[ES6 Class Person] Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // Call superclass constructor
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`[ES6 Class Student] Branch: ${this.branch}`);
    }

    printFullProfile() {
        console.log(`[ES6 Class Student Profile] ${this.name} studying ${this.branch}`);
    }
}

console.log("=== ES6 Class Inheritance Demonstration ===");
const es6Student = new Student("Nishant Prajapati", "Software Engineering");
es6Student.printName();        // Inherited method
es6Student.printBranch();      // Derived class method
es6Student.printFullProfile(); // Composite method

console.log("\nInheritance Parity Verification:");
console.log("es6Student instanceof Student:", es6Student instanceof Student); // true
console.log("es6Student instanceof Person :", es6Student instanceof Person);  // true
console.log("ES6 syntactic sugar compiles directly over JavaScript's underlying prototype chain.");
