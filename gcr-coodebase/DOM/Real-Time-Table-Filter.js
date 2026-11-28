/**
 * Question 6: Real-Time Table Filter Using 'input' Event
 * Filters student table rows in real-time, case-insensitively, and displays "No results found" placeholder.
 */

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const tableBody = document.getElementById("studentTableBody");
    const noResultsRow = document.getElementById("noResultsRow");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const rows = tableBody.querySelectorAll("tr:not(#noResultsRow)");
        let visibleCount = 0;

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(query)) {
                row.style.display = "";
                visibleCount++;
            } else {
                row.style.display = "none";
            }
        });

        noResultsRow.style.display = visibleCount === 0 ? "" : "none";
    });
});
