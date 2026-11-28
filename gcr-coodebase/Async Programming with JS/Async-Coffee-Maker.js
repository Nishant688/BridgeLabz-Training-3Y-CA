/**
 * Question 1: The Startup Morning: Async Coffee Maker
 * Implements asynchronous coffee preparation pipeline using Promise chaining and .catch() error handling.
 */

function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("[Step 1] Boiling fresh filtered water...");
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Water heater element tripped circuit breaker!"));
            } else {
                resolve("Hot boiling water ready (95°C)");
            }
        }, 1200);
    });
}

function brewCoffee(waterStatus) {
    return new Promise((resolve, reject) => {
        console.log(`[Step 2] Infusing roasted beans with ${waterStatus}...`);
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Espresso grinder clogged!"));
            } else {
                resolve("Aromatic dark roast extraction complete");
            }
        }, 1200);
    });
}

function pourIntoCup(brewStatus) {
    return new Promise((resolve, reject) => {
        console.log(`[Step 3] ${brewStatus} -> Pouring into artisanal ceramic mug...`);
        setTimeout(() => {
            resolve("Freshly brewed espresso ready");
        }, 800);
    });
}

console.log("=== Starting Coffee Maker Automation ===");
boilWater()
    .then(brewCoffee)
    .then(pourIntoCup)
    .then(result => {
        console.log(`\u2714 ${result}`);
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.error(`\u2716 Coffee Maker Failure: ${error.message}`);
    });
