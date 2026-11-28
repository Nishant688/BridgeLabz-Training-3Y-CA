/**
 * Question 10: Registration Form Validation
 * jQuery form validation: Name non-empty, Email valid regex, Password >= 8 chars, dynamic red border via .css().
 */

$(document).ready(function() {
    const existingEmails = ["admin@company.com", "nishant@example.com", "support@portal.com"];

    $("#registrationForm").on("submit", function(e) {
        e.preventDefault();
        let isValid = true;

        const nameVal = $("#regName").val().trim();
        const emailVal = $("#regEmail").val().trim();
        const passVal = $("#regPass").val();

        // 1. Check Name
        if (!nameVal) {
            $("#regName").css("border", "2px solid #dc2626");
            $("#regNameErr").text("Name is required.");
            isValid = false;
        } else {
            $("#regName").css("border", "2px solid #16a34a");
            $("#regNameErr").text("");
        }

        // 2. Check Email format & uniqueness
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            $("#regEmail").css("border", "2px solid #dc2626");
            $("#regEmailErr").text("Invalid email format.");
            isValid = false;
        } else if (existingEmails.includes(emailVal.toLowerCase())) {
            $("#regEmail").css("border", "2px solid #dc2626");
            $("#regEmailErr").text("Email already registered! Choose another.");
            isValid = false;
        } else {
            $("#regEmail").css("border", "2px solid #16a34a");
            $("#regEmailErr").text("");
        }

        // 3. Check Password (minimum 8 characters)
        if (passVal.length < 8) {
            $("#regPass").css("border", "2px solid #dc2626");
            $("#regPassErr").text("Password must be at least 8 characters.");
            isValid = false;
        } else {
            $("#regPass").css("border", "2px solid #16a34a");
            $("#regPassErr").text("");
        }

        // 4. Success message if all valid
        if (isValid) {
            $("#regSuccess").slideDown().text("✔ Registration successfully validated!");
            $("#registrationForm")[0].reset();
        } else {
            $("#regSuccess").slideUp();
        }
    });
});
