/**
 * Question 10: Departmental Employee Evaluator
 * Evaluates department performance metrics from nested arrays using comparison operators and conditionals.
 */

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

function evaluateDepartments(data) {
    const evaluationSummary = [];

    for (let i = 0; i < data.length; i++) {
        const deptName = data[i][0];
        const score = data[i][1];
        let tier = "";

        if (score >= 90) {
            tier = "Excellent";
        } else if (score >= 75 && score <= 89) {
            tier = "Good";
        } else if (score >= 60 && score <= 74) {
            tier = "Average";
        } else {
            tier = "Needs Improvement";
        }

        evaluationSummary.push({
            Department: deptName,
            Score: score,
            Rating: tier
        });
    }

    return evaluationSummary;
}

console.log("=== Departmental Performance Evaluator ===");
console.table(evaluateDepartments(departments));
