/**
 * Question 1: E-Commerce Product Manager
 * Implements Product class with discount calculation, string formatting, and array filtering.
 */

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price = Math.round(this.price - discountAmount);
        return this.price;
    }

    displayDetails() {
        return `[ID: ${this.id}] ${this.name} (${this.category}) - ₹${this.price}`;
    }
}

// Creating multiple product instances
const inventory = [
    new Product(101, "Mechanical Keyboard", 3500, "Peripherals"),
    new Product(102, "Ergonomic Mouse", 850, "Peripherals"),
    new Product(103, "UltraWide Monitor 34-inch", 28000, "Displays"),
    new Product(104, "USB-C Hub Multiport", 1450, "Accessories"),
    new Product(105, "Mouse Pad XL", 450, "Accessories")
];

console.log("=== All Inventory Products ===");
inventory.forEach(p => console.log(p.displayDetails()));

// Applying 10% promotional discount to Keyboard
console.log("\nApplying 10% discount on Mechanical Keyboard...");
inventory[0].applyDiscount(10);
console.log("Updated Details:", inventory[0].displayDetails());

// Filtering products with price > 1000
console.log("\n=== Premium Products (Price > ₹1000) ===");
const premiumProducts = inventory.filter(p => p.price > 1000);
console.table(premiumProducts.map(p => ({
    ID: p.id,
    Name: p.name,
    Category: p.category,
    Price: `₹${p.price}`
})));
