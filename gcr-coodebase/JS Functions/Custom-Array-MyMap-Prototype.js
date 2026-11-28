/**
 * Question 8: Custom Array myMap Prototype
 * Extends Array.prototype with custom myMap() replicating standard map() functionality.
 */

Array.prototype.myMap = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const transformedArray = [];
    // 'this' refers to the array calling myMap
    for (let i = 0; i < this.length; i++) {
        // Skip unassigned slots (sparse arrays)
        if (i in this) {
            transformedArray.push(callback(this[i], i, this));
        }
    }
    return transformedArray;
};

console.log("=== Custom Array.prototype.myMap Demonstration ===");
const sample = [1, 2, 3, 4, 5];

const doubled = sample.myMap(num => num * 2);
console.log("Doubled with myMap:", doubled); // [2, 4, 6, 8, 10]

const indexed = sample.myMap((val, idx) => `Item at ${idx}: ${val * 10}`);
console.log("Indexed transformation with myMap:");
console.table(indexed);
