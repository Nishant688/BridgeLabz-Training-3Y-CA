/**
 * Question 6: E-Commerce Dashboard: Product Card Fetcher
 * Fetches product data using async/await and formats product listings with graceful fallback error handling.
 */

async function fetchProducts() {
    const apiUrl = "https://fakestoreapi.com/products?limit=5";
    console.log("=== Fetching E-Commerce Products ===");

    try {
        // In Node.js environments without active network or if blocked, we handle fetch gracefully
        let products;
        if (typeof fetch !== "undefined") {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            products = await response.json();
        } else {
            throw new Error("Fetch API unavailable in current runtime");
        }

        console.log(`Successfully fetched ${products.length} products:\n`);
        products.slice(0, 3).forEach(p => {
            console.log(`Product: ${p.title}`);
            console.log(`Price:   $${p.price.toFixed(2)}`);
            console.log(`Image:   ${p.image}`);
            console.log("-----------------------------------------");
        });
    } catch (err) {
        console.warn("External API fetch notice:", err.message);
        console.log("Using Mock Fallback Dataset for consistent testing:");
        const mockProducts = [
            { title: "Fjallraven Backpack", price: 109.95, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
            { title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.30, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
            { title: "John Hardy Men's Legends Naga Gold & Silver Dragon Bracelet", price: 695.00, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" }
        ];

        mockProducts.forEach(p => {
            console.log(`Product: ${p.title}`);
            console.log(`Price:   $${p.price.toFixed(2)}`);
            console.log(`Image:   ${p.image}`);
            console.log("-----------------------------------------");
        });
    }
}

fetchProducts();
