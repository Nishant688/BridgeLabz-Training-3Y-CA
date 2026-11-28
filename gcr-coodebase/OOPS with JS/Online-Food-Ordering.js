/**
 * Question 2: Online Food Ordering (map + error handling + reduce)
 * Calculates customer bill using map() and reduce(), validating menu items via try-catch.
 */

const menu = {
    "Burger": 180,
    "Pizza": 350,
    "Fries": 90,
    "Pasta": 240,
    "Coke": 60
};

function calculateBill(orderItems) {
    try {
        console.log("Processing Order Items:", orderItems);
        // Map to get price list with validation
        const priceList = orderItems.map(item => {
            if (!(item in menu)) {
                throw new Error(`Invalid item '${item}' ordered! Not available on current menu.`);
            }
            return { item, price: menu[item] };
        });

        // Reduce to calculate the total
        const subtotal = priceList.reduce((acc, curr) => acc + curr.price, 0);
        const gst = subtotal * 0.05; // 5% GST
        const finalBill = subtotal + gst;

        console.log("Order Breakdown:");
        console.table(priceList);
        console.log(`Subtotal: ₹${subtotal} | 5% GST: ₹${gst.toFixed(2)} | Total Bill: ₹${finalBill.toFixed(2)}`);
        return finalBill;
    } catch (err) {
        console.error(`[Order Error] ${err.message}`);
        return null;
    }
}

console.log("=== Order 1: Valid Order ===");
calculateBill(["Burger", "Fries", "Coke"]);

console.log("\n=== Order 2: Invalid Item Error Handling ===");
calculateBill(["Pizza", "Pasta", "Sushi"]); // Sushi not on menu
