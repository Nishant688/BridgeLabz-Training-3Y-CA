/**
 * Question 1: Real-Time Live Search (jQuery AJAX)
 * Sends GET request to /products?q=value as user types, updates results, shows loader & "No products found".
 */

$(document).ready(function() {
    const API_ENDPOINT = "http://localhost:3001/products";
    let searchTimeout = null;

    // Local fallback mock database for instant offline verification
    const fallbackProducts = [
        { id: 1, name: "Mechanical Gaming Keyboard", price: 89.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150" },
        { id: 2, name: "Ergonomic Vertical Mouse", price: 45.50, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=150" },
        { id: 3, name: "UltraWide 4K IPS Monitor", price: 399.00, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150" },
        { id: 4, name: "Noise Cancelling Studio Headphones", price: 180.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" },
        { id: 5, name: "Multiport USB-C Docking Station", price: 65.00, image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=150" }
    ];

    function renderResults(products) {
        $("#resultsContainer").empty();
        if (!products || products.length === 0) {
            $("#resultsContainer").html('<div class="no-results">No products found</div>');
            return;
        }

        products.forEach(p => {
            const card = `
                <div class="product-item">
                    <img src="${p.image}" alt="${p.name}" class="product-thumb">
                    <div class="product-info">
                        <h4>${p.name}</h4>
                        <p class="product-price">$${p.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
            $("#resultsContainer").append(card);
        });
    }

    $("#productSearchInput").on("input", function() {
        const query = $(this).val().trim();
        clearTimeout(searchTimeout);

        // Show loading indicator
        $("#loadingIndicator").show();

        searchTimeout = setTimeout(function() {
            // Attempt AJAX request to json-server
            $.ajax({
                url: API_ENDPOINT + (query ? "?q=" + encodeURIComponent(query) : ""),
                method: "GET",
                timeout: 1500,
                success: function(data) {
                    $("#loadingIndicator").hide();
                    renderResults(data);
                },
                error: function() {
                    // Fallback to local filtering if JSON server is not running
                    $("#loadingIndicator").hide();
                    const filtered = fallbackProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
                    renderResults(filtered);
                }
            });
        }, 300);
    });

    // Initial load
    $("#productSearchInput").trigger("input");
});
