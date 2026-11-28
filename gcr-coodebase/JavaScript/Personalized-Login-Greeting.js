/**
 * Question 1: Personalized Login Greeting
 * Greet users with dynamic time-based messages using template literals.
 */

function getGreeting(userName, testHour = null) {
    // Determine the hour: use testHour if provided, otherwise fetch system hour
    const currentHour = (testHour !== null) ? testHour : new Date().getHours();
    let greetingMessage = "";

    // Time-based condition evaluation
    if (currentHour < 12) {
        greetingMessage = `Good Morning ${userName}!`;
    } else if (currentHour >= 12 && currentHour <= 17) {
        greetingMessage = `Good Afternoon ${userName}!`;
    } else {
        greetingMessage = `Good Evening ${userName}!`;
    }

    return { hour: currentHour, message: greetingMessage };
}

// Test scenarios across different periods of the day
console.log("=== Personalized Login Greeting Tests ===");
const user = "Nishant";
console.log("Current System Time Greeting:", getGreeting(user).message);
console.log("Morning Test (09:00):", getGreeting(user, 9).message);
console.log("Afternoon Test (14:00):", getGreeting(user, 14).message);
console.log("Evening Test (20:00):", getGreeting(user, 20).message);
