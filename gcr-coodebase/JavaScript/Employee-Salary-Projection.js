/**
 * Question 8: Employee Salary Projection
 * Calculates 5-year compound salary progression with annual increment rate.
 */

function projectSalary(startingSalary, incrementRatePercent) {
    const projection = [];
    let currentSalary = startingSalary;

    for (let year = 1; year <= 5; year++) {
        const incrementAmount = (currentSalary * incrementRatePercent) / 100;
        currentSalary += incrementAmount;
        projection.push({
            Year: `Year ${year}`,
            IncrementApplied: `₹${Math.round(incrementAmount)}`,
            ProjectedSalary: `₹${Math.round(currentSalary)}`
        });
    }

    return projection;
}

console.log("=== 5-Year Salary Projection (Base: ₹50,000, Increment: 10%) ===");
console.table(projectSalary(50000, 10));
