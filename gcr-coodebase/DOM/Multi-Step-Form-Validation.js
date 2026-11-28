/**
 * Question 3: Multi-Step Form with Next/Back & Validation
 * Step 1 (Name), Step 2 (Email), Step 3 (Password), with step validation and summary display.
 */

document.addEventListener("DOMContentLoaded", () => {
    let currentStep = 1;
    const formData = { name: "", email: "", password: "" };

    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const summary = document.getElementById("summary");

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const submitBtn = document.getElementById("submitBtn");
    const back2 = document.getElementById("back2");
    const back3 = document.getElementById("back3");

    function showStep(step) {
        step1.style.display = step === 1 ? "block" : "none";
        step2.style.display = step === 2 ? "block" : "none";
        step3.style.display = step === 3 ? "block" : "none";
        summary.style.display = step === 4 ? "block" : "none";
    }

    next1.addEventListener("click", () => {
        if (!nameInput.value.trim()) {
            alert("Please enter your name.");
            return;
        }
        formData.name = nameInput.value.trim();
        currentStep = 2;
        showStep(currentStep);
    });

    next2.addEventListener("click", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            return;
        }
        formData.email = emailInput.value.trim();
        currentStep = 3;
        showStep(currentStep);
    });

    back2.addEventListener("click", () => { currentStep = 1; showStep(currentStep); });
    back3.addEventListener("click", () => { currentStep = 2; showStep(currentStep); });

    submitBtn.addEventListener("click", () => {
        if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }
        formData.password = passwordInput.value;
        currentStep = 4;
        showStep(currentStep);

        document.getElementById("summaryName").textContent = formData.name;
        document.getElementById("summaryEmail").textContent = formData.email;
        document.getElementById("summaryPassword").textContent = "*".repeat(formData.password.length);
    });

    showStep(currentStep);
});
