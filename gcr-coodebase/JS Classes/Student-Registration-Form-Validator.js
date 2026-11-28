/**
 * Question 2: Student Registration Form Validator
 * Validates registration fields using regular expressions.
 */

const validationRules = {
    name: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
};

function validateStudentInput(name, email, phone, password) {
    const errors = {};

    if (!validationRules.name.test(name.trim())) {
        errors.name = "Name must contain alphabets only.";
    }
    if (!validationRules.email.test(email.trim())) {
        errors.email = "Invalid email format (expected example@domain.com).";
    }
    if (!validationRules.phone.test(phone.trim())) {
        errors.phone = "Phone must contain exactly 10 digits.";
    }
    if (!validationRules.password.test(password)) {
        errors.password = "Password must be >= 8 chars and contain 1 uppercase, 1 number, and 1 special character.";
    }

    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
}

// Node.js Execution Tests
console.log("=== Student Form Validation Test 1 (Valid) ===");
console.log(validateStudentInput("Nishant Prajapati", "nishant@example.com", "9876543210", "Pass@1234"));

console.log("\n=== Student Form Validation Test 2 (Invalid) ===");
console.log(validateStudentInput("Nishant 123", "nishant-bad-email", "12345", "weakpass"));

if (typeof document !== "undefined") {
    // Browser DOM binding
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("studentForm");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const password = document.getElementById("password").value;
            const res = validateStudentInput(name, email, phone, password);

            ["name", "email", "phone", "password"].forEach(f => {
                const el = document.getElementById(f);
                const errEl = document.getElementById(f + "Error");
                if (res.errors[f]) {
                    el.style.border = "2px solid red";
                    errEl.textContent = res.errors[f];
                } else {
                    el.style.border = "2px solid green";
                    errEl.textContent = "";
                }
            });
        });
    });
}
