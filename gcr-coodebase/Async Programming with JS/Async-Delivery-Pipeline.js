/**
 * Question 10: The Final Delivery: Async Pipeline Debugger
 * Simulates a 5-step food delivery pipeline with asynchronous delays and error recovery.
 */

const createPipelineStep = (stepNumber, stepName, failureProbability = 0.05) => {
    return () => new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 600) + 400; // 400ms - 1000ms
        setTimeout(() => {
            if (Math.random() < failureProbability) {
                reject(new Error(`Fault during Step ${stepNumber}: ${stepName}`));
            } else {
                console.log(`Step ${stepNumber}: ${stepName} (completed in ${delay}ms)`);
                resolve(stepName);
            }
        }, delay);
    });
};

const takeOrder = createPipelineStep(1, "Order taken");
const prepareFood = createPipelineStep(2, "Food prepared");
const packMeal = createPipelineStep(3, "Package ready");
const dispatchCourier = createPipelineStep(4, "Out for delivery");
const finalizeDelivery = createPipelineStep(5, "Delivery completed!");

async function runPipeline() {
    console.log("=== Start Food Delivery Pipeline ===");
    try {
        await takeOrder();
        await prepareFood();
        await packMeal();
        await dispatchCourier();
        await finalizeDelivery();
        console.log("✔ Full Delivery Pipeline Completed Successfully!");
    } catch (error) {
        console.error(`✖ Pipeline failed! Reason: ${error.message}`);
    }
}

runPipeline();
