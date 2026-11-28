/**
 * Question 1: Scope Conflict Resolver
 * Demonstrates proper variable scoping, global vs local variables, and conditional bonus additions.
 */

// Global variable representing company-wide default bonus
let bonus = 5000;

function calculateSalary(employeeName, isPermanent) {
    // Local variable scoped strictly within calculateSalary()
    const baseSalary = 40000;
    let totalSalary = baseSalary;

    // Adding bonus only if employee is verified as permanent
    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Employee: ${employeeName} | Base: ₹${baseSalary} | Permanent: ${isPermanent} | Total: ₹${totalSalary}`);
    return totalSalary;
}

console.log("=== Scope Conflict Resolver Tests ===");
console.log("Global Default Bonus:", bonus);

// Permanent employee receives base + global bonus
calculateSalary("Aman Sharma", true);

// Contract employee receives only base salary
calculateSalary("Pooja Nair", false);

// Demonstrating that global bonus remains unaltered by local operations
console.log("Global Bonus Unchanged:", bonus);
