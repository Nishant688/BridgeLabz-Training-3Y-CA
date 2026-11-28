/**
 * Question 4: Academic Performance Evaluator
 * Evaluates student promotion based on marks of 5 subjects, passing criteria (>=35), and percentage tiers.
 */

function evaluatePerformance(studentName, marks) {
    const totalSubjects = marks.length;
    let totalMarks = 0;
    let hasFailedSubject = false;

    for (let mark of marks) {
        totalMarks += mark;
        // Validation: if any subject < 35 -> automatically Retained
        if (mark < 35) {
            hasFailedSubject = true;
        }
    }

    const percentage = totalMarks / totalSubjects;
    let status = "";

    if (hasFailedSubject) {
        status = "Retained (Failed in one or more subjects with score < 35)";
    } else if (percentage >= 85) {
        status = "Promoted with Distinction";
    } else if (percentage >= 50 && percentage < 85) {
        status = "Promoted";
    } else {
        status = "Retained";
    }

    return {
        Student: studentName,
        Marks: marks.join(", "),
        Percentage: `${percentage.toFixed(2)}%`,
        Outcome: status
    };
}

console.log("=== Academic Performance Evaluations ===");
console.table([
    evaluatePerformance("Aarav", [92, 88, 95, 89, 90]),    // Distinction
    evaluatePerformance("Bhavna", [72, 65, 80, 58, 69]),   // Promoted
    evaluatePerformance("Chirag", [40, 42, 38, 45, 41]),   // Retained (<50%)
    evaluatePerformance("Deepak", [95, 92, 32, 90, 88])    // Retained (<35 in sub 3)
]);
