/**
 * Question 8: Order Processing Flow: Async Retry Mechanism
 * Implements exponential/linear retries on transient API failures using a loop and await.
 */

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 50% random failure rate
            if (Math.random() < 0.5) {
                reject(new Error("Payment gateway connection timeout"));
            } else {
                resolve({ orderId: "ORD-" + Math.floor(Math.random() * 90000 + 10000), status: "CONFIRMED" });
            }
        }, 600);
    });
}

async function processOrderWithRetries(maxRetries = 3) {
    console.log(`=== Order Processing Attempt (Max Retries: ${maxRetries}) ===`);

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Submitting order...`);
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success! Order ${result.orderId} confirmed.`);
            return result;
        } catch (err) {
            console.warn(`Attempt ${attempt}: Failed (${err.message})`);
            if (attempt === maxRetries) {
                throw new Error("Order could not be processed after maximum retry limit reached.");
            }
        }
    }
}

// Graceful caller wrapper
processOrderWithRetries(3)
    .then(order => console.log("Final Resolution: Order Processed Successfully!"))
    .catch(err => console.error("Final Resolution Error:", err.message));
