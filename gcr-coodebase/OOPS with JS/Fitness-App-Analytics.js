/**
 * Question 9: Fitness App Analytics
 * Analyzes workout datasets using class methods with filter(), reduce(), and map().
 */

class FitnessAnalytics {
    constructor(workoutData) {
        if (!Array.isArray(workoutData) || workoutData.length === 0) {
            throw new Error("InvalidDatasetError: Workout dataset must be a non-empty array.");
        }
        this.data = workoutData;
    }

    getActiveUsers() {
        // Users with steps > 7000
        return this.data.filter(entry => entry.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce((acc, curr) => acc + curr.calories, 0);
        return parseFloat((total / this.data.length).toFixed(2));
    }

    getUserSummary() {
        return this.data.map(u => `User ${u.user}: ${u.steps} steps (${u.calories} kcal burned)`);
    }
}

console.log("=== Fitness App Analytics Execution ===");
const rawWorkouts = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 5000, calories: 200 }
];

const analytics = new FitnessAnalytics(rawWorkouts);

console.log("1. Active Users (Steps > 7000):");
console.table(analytics.getActiveUsers());

console.log(`2. Average Calories Burned: ${analytics.getAverageCalories()} kcal`);

console.log("3. User Summaries:");
analytics.getUserSummary().forEach(msg => console.log("  •", msg));

// Error handling test with empty dataset
try {
    new FitnessAnalytics([]);
} catch (e) {
    console.warn("\n[Empty Dataset Check]", e.message);
}
