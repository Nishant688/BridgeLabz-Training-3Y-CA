/**
 * Question 2: Product Highlight
 * jQuery event handlers for click highlighting, hover detail reveals, favorite toggling, attribute selection, and stock checks.
 */

$(document).ready(function() {
    // 1. Click product -> highlight background
    $(".product-card").on("click", function(e) {
        if ($(e.target).hasClass("fav-btn")) return;
        $(".product-card").removeClass("active-highlight");
        $(this).addClass("active-highlight");
    });

    // 2. Hover over product -> show additional details
    $(".product-card").hover(
        function() {
            $(this).find(".extra-details").stop(true, true).slideDown(200);
        },
        function() {
            $(this).find(".extra-details").stop(true, true).slideUp(200);
        }
    );

    // 3. Favorite icon click -> toggle selected class
    $(".fav-btn").on("click", function(e) {
        e.stopPropagation();
        $(this).toggleClass("favorited");
        $(this).text($(this).hasClass("favorited") ? "★ Favorited" : "☆ Favorite");
    });

    // 4. Attribute selector: style products with discounts
    $('[data-discount="true"]').css({
        "border": "2px solid #16a34a",
        "background-color": "#f0fdf4"
    }).prepend('<span class="discount-badge" style="background:#16a34a;color:white;padding:2px 8px;border-radius:4px;font-size:0.75rem;float:right;">ON SALE</span>');

    // 5. Alert if product out of stock
    $(".product-card").on("click", function() {
        const stock = parseInt($(this).attr("data-stock"), 10);
        if (stock === 0) {
            alert("Notice: " + $(this).find("h3").text() + " is currently OUT OF STOCK!");
        }
    });
});
