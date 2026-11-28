/**
 * Question 3: Bug Tracker: Callback to Promise Migration
 * Refactors legacy callback APIs into modern Promises with error simulation and table formatting.
 */

// Modernized Promise-based Bug Fetcher
function getBugs(shouldSimulateFailure = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSimulateFailure) {
                reject(new Error("Database connection timed out while fetching bugs."));
            } else {
                const bugs = [
                    { id: "BUG-101", title: "UI button misaligned on mobile viewport", severity: "Low", status: "Open" },
                    { id: "BUG-102", title: "Auth token refresh triggers API timeout", severity: "Critical", status: "In-Progress" },
                    { id: "BUG-103", title: "OAuth Google login failure on Safari 17", severity: "High", status: "Resolved" }
                ];
                resolve(bugs);
            }
        }, 1000);
    });
}

console.log("=== Fetching Bugs via Promise API ===");
getBugs(false)
    .then(bugs => {
        console.log("Bugs Retrieved Successfully:");
        console.table(bugs);
    })
    .catch(err => {
        console.error("Error fetching bugs:", err.message);
    });
