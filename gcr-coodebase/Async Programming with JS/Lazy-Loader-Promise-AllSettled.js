/**
 * Question 7: The Lazy Loader: Promise Combinator Practice
 * Employs Promise.allSettled() to concurrently evaluate heterogeneous asynchronous requests.
 */

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly reject
            if (Math.random() < 0.3) reject(new Error("Profile service down"));
            else resolve("User Profile Loaded");
        }, 1500);
    });
}

function loadPosts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Feed Posts Loaded (25 items)"), 1200);
    });
}

function loadMessages() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Chat Messages Loaded (4 unread)"), 800);
    });
}

async function runDashboardLoader() {
    console.log("=== Lazy Loader: Orchestrating Dashboard Components ===");
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const totalDuration = Date.now() - startTime;
    console.log(`All component calls settled in ${totalDuration}ms:\n`);

    results.forEach((res, idx) => {
        const modules = ["User Profile", "Feed Posts", "Chat Messages"];
        if (res.status === "fulfilled") {
            console.log(`✔ [${modules[idx]}] Succeeded: ${res.value}`);
        } else {
            console.log(`✖ [${modules[idx]}] Failed   : ${res.reason.message}`);
        }
    });
}

runDashboardLoader();
