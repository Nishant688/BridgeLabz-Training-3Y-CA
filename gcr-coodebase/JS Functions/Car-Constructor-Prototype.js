/**
 * Question 4: Car Constructor Prototype
 * Demonstrates constructor functions and shared method resolution via prototype chain.
 */

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to Car.prototype so all instances share one function reference in memory
Car.prototype.getDetails = function() {
    return `Car: ${this.brand} ${this.model}`;
};

const car1 = new Car("Toyota", "Supra MK4");
const car2 = new Car("BMW", "M3 Competition");

console.log("=== Car Constructor Prototype Demonstration ===");
console.log("Car 1 Details:", car1.getDetails());
console.log("Car 2 Details:", car2.getDetails());

// Verifying method sharing via prototype equality
console.log("Are both instances sharing the exact same method reference?", car1.getDetails === car2.getDetails); // true
