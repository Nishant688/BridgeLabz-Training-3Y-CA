/**
 * Question 7: Login Form Validation using RegExp
 * Validates username (min 5 chars) and password (min 8 chars with number, uppercase, lowercase, special char).
 */

function validateLoginForm(username, password) {
    const usernameRegex = /^[A-Za-z0-9_]{5,}$/;
    // Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    const errors = [];

    if (!usernameRegex.test(username)) {
        errors.push("Username must be at least 5 alphanumeric characters (underscores allowed).");
    }
    if (!passwordRegex.test(password)) {
        errors.push("Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.");
    }

    if (errors.length === 0) {
        return { success: true, message: "Login validation successful! Proceeding to authentication." };
    } else {
        return { success: false, errors };
    }
}

console.log("=== Login Form Validation Tests ===");
console.log("Test 1 (Valid):", validateLoginForm("nishant_99", "Secure@Pass2026"));
console.log("Test 2 (Invalid Username):", validateLoginForm("abc", "Secure@Pass2026"));
console.log("Test 3 (Weak Password):", validateLoginForm("valid_user", "weakpassword"));
