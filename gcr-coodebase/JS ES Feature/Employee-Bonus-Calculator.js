"use strict";
/**
 * Question 2: Employee Bonus Calculator
 * Strict mode calculation of bonuses using type conversion, template literals, and try...catch.
 */

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "InvalidEmployee", salary: "undefined_salary", years: "3" } // Error scenario
];

const processedEmployees = [];

for (let emp of employees) {
    try {
        if (!emp.name || emp.salary === undefined || emp.years === undefined) {
            throw new Error(`Missing required properties for employee: ${JSON.stringify(emp)}`);
        }

        const numericSalary = Number(emp.salary);
        const numericYears = Number(emp.years);

        if (isNaN(numericSalary) || isNaN(numericYears)) {
            throw new Error(`Failed to convert salary '${emp.salary}' or years '${emp.years}' for ${emp.name}`);
        }

        // Bonus = (salary * 0.1) if years >= 3 else (salary * 0.05)
        const bonusRate = numericYears >= 3 ? 0.10 : 0.05;
        const bonusAmount = numericSalary * bonusRate;
        const totalCompensation = numericSalary + bonusAmount;

        const summaryText = `Employee ${emp.name} has ${numericYears} yrs service. Salary: ₹${numericSalary}, Bonus (${bonusRate * 100}%): ₹${bonusAmount}, Total: ₹${totalCompensation}`;
        
        processedEmployees.push({
            Name: emp.name,
            BaseSalary: `₹${numericSalary}`,
            Years: numericYears,
            BonusRate: `${bonusRate * 100}%`,
            BonusAmount: `₹${bonusAmount}`,
            TotalPayout: `₹${totalCompensation}`,
            Status: "SUCCESS"
        });

        console.log(summaryText);
    } catch (err) {
        console.error(`[Error Caught] ${err.message}`);
        processedEmployees.push({
            Name: emp.name || "Unknown",
            BaseSalary: "N/A",
            Years: "N/A",
            BonusRate: "N/A",
            BonusAmount: "N/A",
            TotalPayout: "N/A",
            Status: `FAILED: ${err.message}`
        });
    }
}

console.log("\n=== Final Processed Employees Summary ===");
console.table(processedEmployees);
