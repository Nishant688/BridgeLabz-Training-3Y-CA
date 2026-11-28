/**
 * Question 6: E-Commerce Inventory System (Array Methods)
 * Employs filter(), sort(), and reduce() for inventory tracking and category grouping.
 */

const products = [
    { id: 1, name: "Mechanical Keyboard", category: "Electronics", price: 3500, stock: 4 },
    { id: 2, name: "Wireless Mouse", category: "Electronics", price: 950, stock: 15 },
    { id: 3, name: "Desk Mat Large", category: "Accessories", price: 600, stock: 2 },
    { id: 4, name: "Ergonomic Chair", category: "Furniture", price: 14000, stock: 8 },
    { id: 5, name: "Cable Organizer", category: "Accessories", price: 250, stock: 25 },
    { id: 6, name: "Monitor Arm Dual", category: "Furniture", price: 4200, stock: 3 }
];

// 1. Get low stock products (< 5) using filter()
function getLowStockProducts(items) {
    return items.filter(p => p.stock < 5);
}

// 2. Sort products by price ascending using sort()
function sortProductsByPrice(items) {
    return [...items].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory valuation using reduce()
function calculateTotalInventoryValue(items) {
    return items.reduce((acc, p) => acc + (p.price * p.stock), 0);
}

// 4. Group by category using reduce()
function groupByCategory(items) {
    return items.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p.name);
        return acc;
    }, {});
}

console.log("=== Low Stock Products (Stock < 5) ===");
console.table(getLowStockProducts(products));

console.log("\n=== Products Sorted by Price ===");
console.table(sortProductsByPrice(products));

console.log(`\nTotal Inventory Valuation: ₹${calculateTotalInventoryValue(products).toLocaleString("en-IN")}`);

console.log("\n=== Grouped by Category ===");
console.log(groupByCategory(products));
