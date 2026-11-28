/**
 * Question 8: Custom Dropdown Using Only JavaScript (No <select> Tag)
 * Capturing phase event listener closes the dropdown when clicking outside.
 */

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("dropdownBtn");
    const optionsList = document.getElementById("optionsList");
    const dropdownContainer = document.getElementById("customDropdown");

    // Toggle dropdown
    toggleBtn.addEventListener("click", () => {
        optionsList.classList.toggle("open");
    });

    // Selecting option
    optionsList.addEventListener("click", (e) => {
        if (e.target.classList.contains("dropdown-item")) {
            toggleBtn.textContent = e.target.textContent;
            optionsList.classList.remove("open");
        }
    });

    // Capturing phase listener on window: closes dropdown when clicking outside
    window.addEventListener("click", (e) => {
        if (!dropdownContainer.contains(e.target)) {
            optionsList.classList.remove("open");
        }
    }, true); // 'true' designates event capturing phase
});
