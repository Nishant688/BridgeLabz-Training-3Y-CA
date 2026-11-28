/**
 * Question 4: Theme Switcher Using Attribute Manipulation
 * Switches between Light, Dark, and Blue themes using setAttribute('data-theme', themeName).
 */

document.addEventListener("DOMContentLoaded", () => {
    const lightBtn = document.getElementById("lightBtn");
    const darkBtn = document.getElementById("darkBtn");
    const blueBtn = document.getElementById("blueBtn");
    const currentThemeText = document.getElementById("currentTheme");

    function applyTheme(theme) {
        // Apply theme using setAttribute on <body>
        document.body.setAttribute("data-theme", theme);
        currentThemeText.textContent = theme.toUpperCase();
        console.log(`[Theme Changed] data-theme set to: ${theme}`);
    }

    lightBtn.addEventListener("click", () => applyTheme("light"));
    darkBtn.addEventListener("click", () => applyTheme("dark"));
    blueBtn.addEventListener("click", () => applyTheme("blue"));

    // Default setup
    applyTheme("light");
});
