/**
 * Question 6: Multi-Level Prototype Chain
 * Implements a three-tier prototype hierarchy: Person -> Faculty -> Professor.
 */

// Tier 1: Person
function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function() {
    return `Hi, I am ${this.name}.`;
};

// Tier 2: Faculty
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function() {
    return `Department: ${this.department}`;
};

// Tier 3: Professor
function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getResearchArea = function() {
    return `Research Specialization: ${this.researchArea}`;
};

console.log("=== Multi-Level Prototype Chain (Person -> Faculty -> Professor) ===");
const prof = new Professor("Dr. Alan Turing", "Computer Science", "Artificial Intelligence & Cryptography");

// Accessing methods across all levels of the prototype chain
console.log("Level 1 (Person)   :", prof.introduce());
console.log("Level 2 (Faculty)  :", prof.getDepartment());
console.log("Level 3 (Professor):", prof.getResearchArea());

console.log("\nPrototype Chain Validation:");
console.log("prof instanceof Professor:", prof instanceof Professor); // true
console.log("prof instanceof Faculty  :", prof instanceof Faculty);   // true
console.log("prof instanceof Person   :", prof instanceof Person);    // true
console.log("prof instanceof Object   :", prof instanceof Object);    // true
