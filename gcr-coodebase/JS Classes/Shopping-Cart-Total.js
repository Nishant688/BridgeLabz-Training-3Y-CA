/**
 * Question 9: Shopping Cart Total with Coupon Validation
 * Calculates cart total and validates coupon codes (SAVE20, DISC10) using RegExp.
 */

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity, itemTotal: price * quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.itemTotal, 0);
    }

    applyCoupon(couponCode) {
        const subtotal = this.getTotal();
        // Coupon format regex: (SAVE|DISC) followed by 2 digits percentage
        const couponPattern = /^(SAVE|DISC)(\d{2})$/i;
        const match = couponCode.trim().match(couponPattern);

        if (!match) {
            console.log(`[Coupon Error] '${couponCode}' is not a valid coupon code format (e.g., SAVE20, DISC10).`);
            return {
                valid: false,
                subtotal,
                discountPercent: 0,
                finalTotal: subtotal
            };
        }

        const discountPercent = parseInt(match[2], 10);
        const discountAmount = (subtotal * discountPercent) / 100;
        const finalTotal = subtotal - discountAmount;

        console.log(`[Coupon Applied] ${match[0].toUpperCase()} gives ${discountPercent}% off!`);
        return {
            valid: true,
            coupon: match[0].toUpperCase(),
            subtotal,
            discountPercent,
            discountAmount,
            finalTotal
        };
    }
}

console.log("=== Shopping Cart System Demonstration ===");
const cart = new Cart();
cart.addItem("Mechanical Keyboard", 3500, 1);
cart.addItem("Gaming Headset", 2400, 2);
cart.addItem("USB-C Cable", 300, 3);

console.log("Cart Items:");
console.table(cart.items);
console.log("Subtotal:", `₹${cart.getTotal()}`);

console.log("\nApplying coupon 'SAVE20'...");
console.log(cart.applyCoupon("SAVE20"));

console.log("\nApplying coupon 'DISC10'...");
console.log(cart.applyCoupon("DISC10"));

console.log("\nApplying invalid coupon 'FREE100'...");
console.log(cart.applyCoupon("FREE100"));
