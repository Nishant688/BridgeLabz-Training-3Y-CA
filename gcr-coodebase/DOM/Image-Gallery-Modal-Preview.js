/**
 * Question 5: Image Gallery with Modal Preview
 * Modal displays full preview; clicking outside closes modal; event.stopPropagation() prevents closing on modal click.
 */

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("galleryGrid");
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    // Click on image opens modal
    gallery.addEventListener("click", (e) => {
        const item = e.target.closest(".gallery-item");
        if (!item) return;

        const img = item.querySelector("img");
        modalImage.src = img.src;
        modalCaption.textContent = img.alt;
        modal.classList.add("active");
    });

    // Clicking outside modal content closes the modal
    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // stopPropagation prevents modal content clicks from bubbling up to modal container
    modalContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
