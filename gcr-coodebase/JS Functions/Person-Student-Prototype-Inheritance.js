/**
 * Question 5: Person-Student Prototype Inheritance
 * Implements classical prototypal inheritance using constructor functions and Object.create().
 */

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Person Name: ${this.name}`);
};

function Student(name, branch) {
    // Call super constructor
    Person.call(this, name);
    this.branch = branch;
}

// Establish prototype chain: Student.prototype inherits from Person.prototype
Student.prototype = Object.create(Person.prototype);
// Restore constructor reference
Student.prototype.constructor = Student;

Student.prototype.printBranch = function() {
    console.log(`Enrolled Branch: ${this.branch}`);
};

Student.prototype.printFullProfile = function() {
    console.log(`Student Profile: ${this.name} (${this.branch})`);
};

console.log("=== Prototype Chain Inheritance Demonstration ===");
const student1 = new Student("Aarav Sharma", "Computer Science Engineering");
student1.printName();        // Inherited from Person.prototype
student1.printBranch();      // Defined on Student.prototype
student1.printFullProfile(); // Defined on Student.prototype

console.log("student1 instanceof Student:", student1 instanceof Student); // true
console.log("student1 instanceof Person :", student1 instanceof Person);  // true
