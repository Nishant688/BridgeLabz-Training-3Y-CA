/**
 * Question 9: Form Submit Blocker with preventDefault() and Live Errors
 * Validates Name, Email (must contain @), and Password (min 6 chars), clearing errors on correction.
 */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("validationForm");
    const nameInput = document.getElementById("valName");
    const emailInput = document.getElementById("valEmail");
    const passInput = document.getElementById("valPass");

    const nameErr = document.getElementById("valNameErr");
    const emailErr = document.getElementById("valEmailErr");
    const passErr = document.getElementById("valPassErr");
    const successMsg = document.getElementById("successMessage");

    // Live error clearing on correction
    nameInput.addEventListener("input", () => { if (nameInput.value.trim()) nameErr.textContent = ""; });
    emailInput.addEventListener("input", () => { if (emailInput.value.includes("@")) emailErr.textContent = ""; });
    passInput.addEventListener("input", () => { if (passInput.value.length >= 6) passErr.textContent = ""; });

    form.addEventListener("submit", (e) => {
        // Prevent default submission
        e.preventDefault();
        let hasErrors = false;

        if (!nameInput.value.trim()) {
            nameErr.textContent = "Name is required.";
            hasErrors = true;
        }
        if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
            emailErr.textContent = "Valid email containing '@' is required.";
            hasErrors = true;
        }
        if (passInput.value.length < 6) {
            passErr.textContent = "Password must be at least 6 characters.";
            hasErrors = true;
        }

        if (!hasErrors) {
            successMsg.style.display = "block";
            successMsg.textContent = "Form Submitted Successfully!";
            form.reset();
        } else {
            successMsg.style.display = "none";
        }
    });
});
