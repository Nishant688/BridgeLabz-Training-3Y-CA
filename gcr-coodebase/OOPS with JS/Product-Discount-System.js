/**
 * Question 3: Product Discount System (Prototypes & Abstraction)
 * Constructor function with prototype applyDiscount() demonstrating abstraction of pricing operations.
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Adding prototype method: abstracts the internal discount calculation logic away from consumers
Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const discountedPrice = Math.round(this.price - discountAmount);
    return {
        product: this.name,
        originalPrice: `₹${this.price}`,
        discount: `${percent}%`,
        finalPrice: `₹${discountedPrice}`
    };
};

console.log("=== Product Discount System (Abstraction via Prototype) ===");
const p1 = new Product("Noise Cancelling Headphones", 8000);
const p2 = new Product("Ergonomic Desk Chair", 12500);
const p3 = new Product("Mechanical Gaming Keyboard", 4500);

console.table([
    p1.applyDiscount(15), // 15% off
    p2.applyDiscount(20), // 20% off
    p3.applyDiscount(10)  // 10% off
]);
