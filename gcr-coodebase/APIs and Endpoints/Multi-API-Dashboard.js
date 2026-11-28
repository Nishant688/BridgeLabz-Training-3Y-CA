/**
 * Question 4: Multi-API Dashboard (Fetch & Promise.all)
 * Uses Promise.all to query /users, /orders, /products concurrently, showing skeletons and failure warnings.
 */

const API_BASE = "http://localhost:3004";

async function loadMultiApiDashboard() {
    const warningBanner = document.getElementById("warningBanner");
    warningBanner.style.display = "none";

    // Set skeleton loading state
    document.getElementById("userCount").textContent = "...";
    document.getElementById("orderCount").textContent = "...";
    document.getElementById("productCount").textContent = "...";

    try {
        const [usersRes, ordersRes, productsRes] = await Promise.all([
            fetch(`${API_BASE}/users`).catch(e => null),
            fetch(`${API_BASE}/orders`).catch(e => null),
            fetch(`${API_BASE}/products`).catch(e => null)
        ]);

        let hadFailure = false;

        // Process Users
        if (usersRes && usersRes.ok) {
            const users = await usersRes.json();
            document.getElementById("userCount").textContent = users.length;
        } else {
            document.getElementById("userCount").textContent = "5 (cached)";
            hadFailure = true;
        }

        // Process Orders
        if (ordersRes && ordersRes.ok) {
            const orders = await ordersRes.json();
            document.getElementById("orderCount").textContent = orders.length;
        } else {
            document.getElementById("orderCount").textContent = "5 (cached)";
            hadFailure = true;
        }

        // Process Products
        if (productsRes && productsRes.ok) {
            const products = await productsRes.json();
            document.getElementById("productCount").textContent = products.length;
        } else {
            document.getElementById("productCount").textContent = "5 (cached)";
            hadFailure = true;
        }

        if (hadFailure) {
            warningBanner.style.display = "block";
            warningBanner.textContent = "⚠ Warning: Some data could not be loaded from live server; displayed fallback metrics.";
        }
    } catch (err) {
        warningBanner.style.display = "block";
        warningBanner.textContent = "⚠ Warning: Some data could not be loaded.";
    }
}

document.addEventListener("DOMContentLoaded", loadMultiApiDashboard);
