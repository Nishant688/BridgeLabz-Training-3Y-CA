/**
 * Question 4: DevOps Delay: Async Timeout Race
 * Tracks concurrent server responses using Promise.all() and fastest responder via Promise.race().
 */

function deployToServerA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) reject(new Error("Server A kernel panic"));
            else resolve({ server: "Server A (US-East)", latency: "2000ms", status: "Deployed" });
        }, 2000);
    });
}

function deployToServerB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) reject(new Error("Server B memory exhaustion"));
            else resolve({ server: "Server B (EU-West)", latency: "3000ms", status: "Deployed" });
        }, 3000);
    });
}

console.log("=== DevOps Server Deployment Orchestrator ===");

// 1. Promise.race() to identify the fastest responder
Promise.race([deployToServerA(), deployToServerB()])
    .then(fastest => {
        console.log(`Fastest response: ${fastest.server} completed first in ${fastest.latency}`);
    })
    .catch(err => {
        console.error("Race error:", err.message);
    });

// 2. Promise.all() to confirm deployment across all instances
Promise.all([deployToServerA(), deployToServerB()])
    .then(results => {
        console.log("Deployment completed for all servers:");
        console.table(results);
    })
    .catch(err => {
        console.error("Deployment failed on at least one server:", err.message);
    });
