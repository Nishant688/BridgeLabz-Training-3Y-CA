/**
 * Question 3: Task Manager with Filters (jQuery AJAX & Query Params)
 * Loads tasks via GET /tasks, filters using query parameters, and toggles completion via PATCH.
 */

$(document).ready(function() {
    const TASKS_API = "http://localhost:3003/tasks";

    let localTasks = [
        { id: 1, title: "Resolve Critical Database Ingress Timeout", priority: "High", completed: false },
        { id: 2, title: "Update Swagger OpenAPI Documentation", priority: "Low", completed: true },
        { id: 3, title: "Implement Redis Cache for User Sessions", priority: "Medium", completed: false },
        { id: 4, title: "Conduct Security Audit on Payment Gateway", priority: "High", completed: true },
        { id: 5, title: "Refactor CSS Grid Layout for Tablet Views", priority: "Low", completed: false },
        { id: 6, title: "Upgrade Kubernetes Pod Autoscaler to v2", priority: "Medium", completed: false }
    ];

    function loadTasks(filterParam = "") {
        let url = TASKS_API;
        if (filterParam === "Completed") {
            url += "?completed=true";
        } else if (filterParam && filterParam !== "All") {
            url += "?priority=" + encodeURIComponent(filterParam);
        }

        $.ajax({
            url: url,
            method: "GET",
            timeout: 1500,
            success: function(data) {
                renderTaskList(data);
            },
            error: function() {
                // Fallback filtering
                let filtered = localTasks;
                if (filterParam === "Completed") filtered = localTasks.filter(t => t.completed);
                else if (filterParam && filterParam !== "All") filtered = localTasks.filter(t => t.priority === filterParam);
                renderTaskList(filtered);
            }
        });
    }

    function renderTaskList(tasks) {
        $("#taskListContainer").empty();
        if (!tasks || tasks.length === 0) {
            $("#taskListContainer").html('<div style="padding:20px; text-align:center; color:#64748b;">No matching tasks found.</div>');
            return;
        }

        tasks.forEach(t => {
            const badgeClass = t.priority === "High" ? "priority-high" : (t.priority === "Medium" ? "priority-med" : "priority-low");
            const item = `
                <div class="task-row ${t.completed ? 'task-done' : ''}">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <input type="checkbox" class="task-checkbox" data-id="${t.id}" ${t.completed ? 'checked' : ''}>
                        <span class="task-title">${t.title}</span>
                    </div>
                    <span class="priority-pill ${badgeClass}">${t.priority}</span>
                </div>
            `;
            $("#taskListContainer").append(item);
        });
    }

    // Filter dropdown change handler
    $("#filterDropdown").on("change", function() {
        const selected = $(this).val();
        loadTasks(selected);
    });

    // Checkbox toggle handler via event delegation
    $("#taskListContainer").on("change", ".task-checkbox", function() {
        const taskId = $(this).attr("data-id");
        const isCompleted = $(this).is(":checked");

        $.ajax({
            url: `${TASKS_API}/${taskId}`,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: isCompleted }),
            success: function() {
                loadTasks($("#filterDropdown").val());
            },
            error: function() {
                // Update local fallback
                const t = localTasks.find(item => item.id == taskId);
                if (t) t.completed = isCompleted;
                loadTasks($("#filterDropdown").val());
            }
        });
    });

    loadTasks("All");
});
