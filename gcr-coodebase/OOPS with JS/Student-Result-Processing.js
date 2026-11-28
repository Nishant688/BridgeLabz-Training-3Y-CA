/**
 * Question 1: Student Result Processing (reduce + classes)
 * Implements Student class with calculateAverage() using reduce() and grade resolution.
 */

class Student {
    constructor(name, marks = []) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (!this.marks.length) return 0;
        const total = this.marks.reduce((acc, curr) => acc + curr, 0);
        return parseFloat((total / this.marks.length).toFixed(2));
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 85) return 'A';
        if (avg >= 70) return 'B';
        if (avg >= 50) return 'C';
        return 'F';
    }

    getSummary() {
        return {
            Name: this.name,
            Marks: this.marks.join(", "),
            Average: this.calculateAverage(),
            Grade: this.getGrade()
        };
    }
}

console.log("=== Student Result Processing Tests ===");
const students = [
    new Student("Aarav Sharma", [88, 92, 79, 95, 84]),  // Grade A
    new Student("Bhavna Rao", [72, 68, 75, 71, 74]),     // Grade B
    new Student("Chetan Mehta", [42, 38, 51, 49, 44])    // Grade F
];

console.table(students.map(s => s.getSummary()));
