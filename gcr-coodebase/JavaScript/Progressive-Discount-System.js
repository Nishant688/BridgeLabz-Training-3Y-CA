/**
 * Question 6: Progressive Discount System
 * Applies dynamic tiered discounts based on cart purchase total and uses Math.round() for rounding.
 */

function calculateDiscount(purchaseTotal) {
    let discountPercent = 0;

    if (purchaseTotal >= 10000) {
        discountPercent = 25;
    } else if (purchaseTotal >= 5000) {
        discountPercent = 15;
    } else if (purchaseTotal >= 2000) {
        discountPercent = 5;
    } else {
        discountPercent = 0;
    }

    const discountAmount = (purchaseTotal * discountPercent) / 100;
    const finalPrice = Math.round(purchaseTotal - discountAmount);

    return {
        OriginalTotal: `₹${purchaseTotal}`,
        DiscountRate: `${discountPercent}%`,
        DiscountAmount: `₹${Math.round(discountAmount)}`,
        FinalPrice: `₹${finalPrice}`
    };
}

console.log("=== Progressive Discount System Tiers ===");
console.table([
    calculateDiscount(14500), // Tier 1: 25%
    calculateDiscount(7200),  // Tier 2: 15%
    calculateDiscount(3500),  // Tier 3: 5%
    calculateDiscount(1200)   // No discount
]);
