/**
 * Question 1: Dynamic Product List Manager
 * Uses event delegation on <ul> for inline editing and deletion, with auto-save on outside click.
 */

document.addEventListener("DOMContentLoaded", () => {
    const productInput = document.getElementById("productInput");
    const addBtn = document.getElementById("addBtn");
    const productList = document.getElementById("productList");

    // Add Product
    addBtn.addEventListener("click", () => {
        const val = productInput.value.trim();
        if (!val) return;

        const li = document.createElement("li");
        li.className = "product-item";
        li.innerHTML = `
            <span class="product-text">${val}</span>
            <div class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        productList.appendChild(li);
        productInput.value = "";
    });

    // Event Delegation on parent <ul>
    productList.addEventListener("click", (e) => {
        const target = e.target;
        const li = target.closest("li");
        if (!li) return;

        // Delete action
        if (target.classList.contains("delete-btn")) {
            li.remove();
        }

        // Edit action
        if (target.classList.contains("edit-btn")) {
            const span = li.querySelector(".product-text");
            if (!span || span.tagName === "INPUT") return;

            const currentText = span.textContent;
            const input = document.createElement("input");
            input.type = "text";
            input.className = "inline-edit-input";
            input.value = currentText;

            li.replaceChild(input, span);
            input.focus();

            // Auto-save function
            const saveEdit = () => {
                const newSpan = document.createElement("span");
                newSpan.className = "product-text";
                newSpan.textContent = input.value.trim() || currentText;
                if (input.parentNode === li) {
                    li.replaceChild(newSpan, input);
                }
            };

            input.addEventListener("blur", saveEdit);
            input.addEventListener("keydown", (ev) => {
                if (ev.key === "Enter") {
                    input.blur();
                }
            });
        }
    });
});
