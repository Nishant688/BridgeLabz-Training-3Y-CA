/**
 * Question 10: Citizen Eligibility Validator
 * Evaluates voting, driving, and passport eligibility based on age and citizenship.
 */

function validateCitizenEligibility(age, isCitizen) {
    let status = "";

    // Nested if-else and logical operator evaluation
    if (isCitizen) {
        if (age >= 21) {
            status = "Eligible for all services.";
        } else if (age >= 18 && age <= 20) {
            status = "Eligible to vote only.";
        } else {
            status = "Not eligible yet.";
        }
    } else {
        if (age >= 18) {
            status = "Only age criteria met.";
        } else {
            status = "Not eligible yet.";
        }
    }

    return {
        Age: age,
        IsCitizen: isCitizen ? "Yes" : "No",
        EligibilityStatus: status
    };
}

console.log("=== Citizen Eligibility Evaluations ===");
console.table([
    validateCitizenEligibility(25, true),   // Eligible for all
    validateCitizenEligibility(19, true),   // Vote only
    validateCitizenEligibility(16, true),   // Not eligible yet
    validateCitizenEligibility(30, false),  // Only age criteria met
    validateCitizenEligibility(15, false)   // Not eligible yet
]);
