/**
 * Question 5: College Timetable Viewer (Fetch & Dynamic Rendering)
 * Fetches timetable filtered by day (/timetable?day=SelectedDay), rendering classes or "No classes today".
 */

const TIMETABLE_API = "http://localhost:3005/timetable";

const fallbackTimetable = [
    { id: 1, day: "Monday", subject: "Cloud Distributed Systems", faculty: "Dr. A. Turing", time: "09:00 - 10:30 AM" },
    { id: 2, day: "Monday", subject: "Compiler Optimization", faculty: "Prof. E. Dijkstra", time: "11:00 - 12:30 PM" },
    { id: 3, day: "Tuesday", subject: "Database Internals & Storage", faculty: "Dr. C. Date", time: "10:00 - 11:30 AM" },
    { id: 4, day: "Wednesday", subject: "Artificial Intelligence & Logic", faculty: "Prof. M. Minsky", time: "09:30 - 11:00 AM" },
    { id: 5, day: "Thursday", subject: "Computer Networks & Security", faculty: "Dr. V. Cerf", time: "02:00 - 03:30 PM" },
    { id: 6, day: "Friday", subject: "Quantum Computing Foundations", faculty: "Dr. R. Feynman", time: "11:00 - 12:30 PM" }
];

async function loadDaySchedule(day) {
    const list = document.getElementById("scheduleList");
    list.innerHTML = '<div style="padding:15px; color:#64748b;">Loading day schedule...</div>';

    try {
        const response = await fetch(`${TIMETABLE_API}?day=${day}`);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const classes = await response.json();
        renderSchedule(classes);
    } catch (e) {
        // Fallback filtering
        const filtered = fallbackTimetable.filter(item => item.day.toLowerCase() === day.toLowerCase());
        renderSchedule(filtered);
    }
}

function renderSchedule(classes) {
    const list = document.getElementById("scheduleList");
    list.innerHTML = "";

    if (!classes || classes.length === 0) {
        list.innerHTML = '<div class="no-class-msg">No classes today.</div>';
        return;
    }

    classes.forEach(c => {
        const item = document.createElement("div");
        item.className = "schedule-item";
        item.innerHTML = `
            <div>
                <h4 style="margin:0 0 4px 0; color:#1e293b;">${c.subject}</h4>
                <div style="font-size:0.85rem; color:#64748b;">Faculty: ${c.faculty}</div>
            </div>
            <div class="time-pill">${c.time}</div>
        `;
        list.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("daySelector");
    select.addEventListener("change", (e) => loadDaySchedule(e.target.value));
    loadDaySchedule(select.value);
});
