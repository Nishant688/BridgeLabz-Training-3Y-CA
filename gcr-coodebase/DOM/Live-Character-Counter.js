/**
 * Question 2: Live Character Counter with Warning Behavior
 * Displays remaining characters (max 100), yellow warning at 20, red at 0, preventing typing via preventDefault().
 */

document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("messageInput");
    const charCounter = document.getElementById("charCounter");
    const resetBtn = document.getElementById("resetBtn");
    const MAX_CHARS = 100;

    function updateCounter() {
        const currentLength = messageInput.value.length;
        const remaining = MAX_CHARS - currentLength;
        charCounter.textContent = `${remaining} characters remaining`;

        // Style warning transitions
        charCounter.classList.remove("warning-yellow", "danger-red");
        if (remaining <= 0) {
            charCounter.classList.add("danger-red");
        } else if (remaining <= 20) {
            charCounter.classList.add("warning-yellow");
        }
    }

    // Prevent further typing when limit reached (allowing Backspace/Delete/Arrow keys)
    messageInput.addEventListener("keydown", (e) => {
        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
        if (messageInput.value.length >= MAX_CHARS && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    });

    messageInput.addEventListener("input", updateCounter);

    resetBtn.addEventListener("click", () => {
        messageInput.value = "";
        updateCounter();
        messageInput.focus();
    });

    updateCounter();
});
