/**
 * Question 5: Frontend Rush: Avoiding Callback Hell
 * Refactors deeply nested asynchronous callback chains into clean, linear async/await workflows.
 */

// --- Part 1: Legacy Callback Hell Demonstration ---
function runLegacyPipeline() {
    console.log("--- Starting Callback Hell Demonstration ---");
    setTimeout(() => {
        console.log("[Callback Hell] 1. Design stage approved");
        setTimeout(() => {
            console.log("[Callback Hell] 2. Build assets compiled");
            setTimeout(() => {
                console.log("[Callback Hell] 3. Unit and integration tests passed");
                setTimeout(() => {
                    console.log("[Callback Hell] 4. Deployed to production cluster");
                    setTimeout(() => {
                        console.log("[Callback Hell] 5. Celebrate launch with team! 🎉");
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}

// --- Part 2: Modern Async/Await Refactored Pipeline ---
const waitStep = (stageName, delay = 500) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`[Clean Async/Await] Stage: ${stageName}`);
            resolve(stageName);
        }, delay);
    });
};

/*
Readability Comparison Commentary:
- Callback hell produces pyramid-of-doom indentation, making error bubbling and variable scoping perilous.
- async/await flattens asynchronous logic into standard sequential, synchronous-looking control flow,
  enabling standard try/catch blocks and clean maintenance.
*/
async function runModernPipeline() {
    try {
        console.log("\n--- Starting Clean Async/Await Pipeline ---");
        await waitStep("1. Design stage finalized");
        await waitStep("2. Build containers generated");
        await waitStep("3. Automated test suite green");
        await waitStep("4. Production deployment verified");
        await waitStep("5. Celebrate zero-downtime release! 🚀");
        console.log("Pipeline completed cleanly without callback nesting.");
    } catch (err) {
        console.error("Pipeline failure:", err);
    }
}

runLegacyPipeline();
setTimeout(runModernPipeline, 3000);
