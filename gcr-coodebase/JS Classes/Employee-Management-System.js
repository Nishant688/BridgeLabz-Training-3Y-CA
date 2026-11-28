/**
 * Question 6: Employee Management System
 * Employee class with getAnnualSalary(), applyBonus(), and total company payout using reduce().
 */

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        const bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
        return this.salary;
    }
}

// 5 employee objects
const employeesList = [
    new Employee(1, "Rohan Verma", "Engineering", 65000),
    new Employee(2, "Meera Patel", "Marketing", 48000),
    new Employee(3, "Vikram Sen", "Engineering", 72000),
    new Employee(4, "Sneha Kapoor", "HR", 45000),
    new Employee(5, "Arjun Reddy", "Finance", 58000)
];

console.log("=== Annual Salary Breakdown ===");
const breakdown = employeesList.map(emp => ({
    ID: emp.id,
    Name: emp.name,
    Department: emp.department,
    MonthlySalary: `₹${emp.salary}`,
    AnnualSalary: `₹${emp.getAnnualSalary()}`
}));
console.table(breakdown);

// Calculate total annual payout using reduce()
const totalCompanyPayout = employeesList.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log(`Total Annual Company Payout: ₹${totalCompanyPayout.toLocaleString("en-IN")}`);
