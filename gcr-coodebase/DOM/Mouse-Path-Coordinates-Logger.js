/**
 * Question 7: Mouse Path & Coordinates Logger
 * Tracks live clientX/clientY inside a 400x400 box, and drops a red dot on double-click.
 */

document.addEventListener("DOMContentLoaded", () => {
    const trackBox = document.getElementById("trackBox");
    const coordsDisplay = document.getElementById("coordsDisplay");

    trackBox.addEventListener("mousemove", (e) => {
        const rect = trackBox.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        coordsDisplay.textContent = `X: ${x}px, Y: ${y}px`;
    });

    trackBox.addEventListener("dblclick", (e) => {
        const rect = trackBox.getBoundingClientRect();
        const dot = document.createElement("div");
        dot.className = "red-dot";
        dot.style.left = (e.clientX - rect.left - 6) + "px";
        dot.style.top = (e.clientY - rect.top - 6) + "px";
        trackBox.appendChild(dot);
    });
});
