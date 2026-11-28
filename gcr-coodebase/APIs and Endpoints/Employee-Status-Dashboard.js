/**
 * Question 2: Employee Status Dashboard (XMLHttpRequest & PATCH)
 * Fetches employees with XHR GET and updates active/inactive toggle switch via XHR PATCH.
 */

const API_EMPLOYEES = "http://localhost:3002/employees";

// Fallback in-memory dataset
let fallbackEmployees = [
    { id: 1, name: "Nishant Prajapati", status: "active" },
    { id: 2, name: "Aarav Sharma", status: "active" },
    { id: 3, name: "Meera Patel", status: "inactive" },
    { id: 4, name: "Vikram Sen", status: "active" },
    { id: 5, name: "Sneha Kapoor", status: "inactive" }
];

function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_EMPLOYEES, true);
    xhr.timeout = 1500;

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            renderEmployees(data);
        } else {
            renderEmployees(fallbackEmployees);
        }
    };

    xhr.onerror = function() {
        console.warn("XHR GET failed, falling back to local dataset.");
        renderEmployees(fallbackEmployees);
    };

    xhr.send();
}

function renderEmployees(employees) {
    const tableBody = document.getElementById("employeeTableBody");
    tableBody.innerHTML = "";

    employees.forEach(emp => {
        const tr = document.createElement("tr");
        const isActive = emp.status === "active";
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td><strong>${emp.name}</strong></td>
            <td><span class="status-badge ${isActive ? 'badge-active' : 'badge-inactive'}">${emp.status.toUpperCase()}</span></td>
            <td>
                <button class="toggle-btn ${isActive ? 'btn-deactivate' : 'btn-activate'}" onclick="toggleStatus(${emp.id}, '${emp.status}')">
                    ${isActive ? 'Deactivate' : 'Activate'}
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function toggleStatus(id, currentStatus) {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    const statusMsg = document.getElementById("statusMsg");

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `${API_EMPLOYEES}/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.timeout = 1500;

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            statusMsg.textContent = `Employee #${id} status successfully updated to ${newStatus.toUpperCase()}.`;
            statusMsg.className = "msg success";
            fetchEmployees();
        } else {
            revertAndAlert(id, "Server returned error: " + xhr.status);
        }
    };

    xhr.onerror = function() {
        // Fallback simulated update for local standalone testing
        const found = fallbackEmployees.find(e => e.id === id);
        if (found) found.status = newStatus;
        statusMsg.textContent = `[Local Simulation] Employee #${id} toggled to ${newStatus.toUpperCase()}.`;
        statusMsg.className = "msg success";
        renderEmployees(fallbackEmployees);
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

function revertAndAlert(id, errorMsg) {
    const statusMsg = document.getElementById("statusMsg");
    statusMsg.textContent = `Failed to toggle employee #${id}. Reverting UI. (${errorMsg})`;
    statusMsg.className = "msg error";
    fetchEmployees();
}

document.addEventListener("DOMContentLoaded", fetchEmployees);
