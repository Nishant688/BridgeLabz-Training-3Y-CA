/**
 * Question 8: Dynamic Discount Evaluator
 * Evaluates cart discounts based on product categories and overall total thresholds using reduce().
 */

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 700 }
];

function evaluateCartDiscounts(items) {
    // Step 1: Calculate discounted price for each item based on category
    const itemsWithCategoryDiscount = items.map(product => {
        let categoryDiscountRate = 0;
        if (product.category === "electronics") {
            categoryDiscountRate = 0.10; // 10%
        } else if (product.category === "fashion") {
            categoryDiscountRate = 0.05; // 5%
        }
        const discountedPrice = product.price - (product.price * categoryDiscountRate);
        return {
            ...product,
            discountRate: `${categoryDiscountRate * 100}%`,
            discountedPrice: discountedPrice
        };
    });

    // Step 2: Sum intermediate total using reduce()
    const intermediateTotal = itemsWithCategoryDiscount.reduce((acc, curr) => acc + curr.discountedPrice, 0);

    // Step 3: Check if original total cart value > 50000 to apply extra 5% overall discount
    const originalTotal = items.reduce((acc, curr) => acc + curr.price, 0);
    let finalTotal = intermediateTotal;
    let extraDiscountApplied = false;

    if (originalTotal > 50000) {
        finalTotal = intermediateTotal * 0.95; // extra 5% discount
        extraDiscountApplied = true;
    }

    console.log("=== Category-wise Discounted Items ===");
    console.table(itemsWithCategoryDiscount);
    console.log(`Original Total Cart Value : ₹${originalTotal.toFixed(2)}`);
    console.log(`Intermediate Subtotal     : ₹${intermediateTotal.toFixed(2)}`);
    console.log(`Extra 5% Overall Applied  : ${extraDiscountApplied ? 'YES (Original > ₹50,000)' : 'NO'}`);
    console.log(`Final Total Amount Payable: ₹${finalTotal.toFixed(2)}`);

    return finalTotal;
}

evaluateCartDiscounts(cart);
