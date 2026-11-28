/**
 * Question 5: Weather Activity Planner
 * Advises user on outdoor activity based on temperature, rain status, and wind speed.
 */

function adviseActivity(temperature, isRaining, windSpeed) {
    let advice = "";

    // Combining logical operators (&&, ||) smartly
    if (isRaining) {
        advice = "Stay indoors with hot coffee.";
    } else if (temperature > 35) {
        advice = "Go swimming.";
    } else if (temperature < 15 && windSpeed > 20) {
        advice = "Too cold and windy — stay home.";
    } else {
        advice = "Perfect day for a walk.";
    }

    return {
        Temperature: `${temperature}°C`,
        Raining: isRaining ? "Yes" : "No",
        WindSpeed: `${windSpeed} km/h`,
        Recommendation: advice
    };
}

console.log("=== Weather Activity Planner Scenarios ===");
console.table([
    adviseActivity(22, true, 10),   // Raining
    adviseActivity(38, false, 8),   // Hot
    adviseActivity(10, false, 25),  // Cold and windy
    adviseActivity(24, false, 12)   // Mild, clear
]);
