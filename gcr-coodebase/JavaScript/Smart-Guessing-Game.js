/**
 * Question 7: Smart Guessing Game (Number Range)
 * Generates a random number between 1-50 and checks guess proximity within +/- 3.
 */

function playGuessingGame(secretNumber, userGuess) {
    let outcome = "";

    if (userGuess === secretNumber) {
        outcome = "Correct guess!";
    } else {
        const diff = Math.abs(userGuess - secretNumber);
        if (diff <= 3) {
            outcome = "Very close!";
        } else if (userGuess > secretNumber) {
            outcome = "Too high";
        } else {
            outcome = "Too low";
        }
    }

    return {
        SecretNumber: secretNumber,
        UserGuess: userGuess,
        Result: outcome
    };
}

console.log("=== Smart Guessing Game Simulation ===");
const secret = Math.floor(Math.random() * 50) + 1;
console.log(`Generated Secret Number: ${secret}`);

console.table([
    playGuessingGame(secret, secret),        // Exact match
    playGuessingGame(secret, secret + 2),    // Very close (+2)
    playGuessingGame(secret, secret - 3),    // Very close (-3)
    playGuessingGame(secret, secret + 10),   // Too high
    playGuessingGame(secret, secret - 12)    // Too low
]);
