/**
 * Question 4: Array Performance Analyzer
 * Evaluates student scores using map(), filter(), reduce(), Math.max(), and Math.min().
 */

function analyzePerformance(scores) {
    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);

    // Summing scores using reduce()
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    const averageScore = (sum / scores.length).toFixed(2);

    // Filtering passing scores (>= 50)
    const passingScores = scores.filter(score => score >= 50);
    const passCount = passingScores.length;

    // Formatting grade status using map()
    const formattedGrades = scores.map(score => `${score} (${score >= 50 ? 'PASS' : 'FAIL'})`);

    return {
        SampleScores: scores.join(", "),
        Highest: highestScore,
        Lowest: lowestScore,
        Average: averageScore,
        PassingCount: `${passCount} / ${scores.length}`,
        GradeBreakdown: formattedGrades.join(" | ")
    };
}

console.log("=== Array Performance Analyzer Report ===");
// Generating 8 scores between 30 and 100
const testScores = [42, 88, 75, 33, 91, 64, 52, 98];
console.table([analyzePerformance(testScores)]);
