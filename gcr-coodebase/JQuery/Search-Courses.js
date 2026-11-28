/**
 * Question 7: Search Courses
 * Real-time course filtering with keyup event, CSS highlighting, count reporting, and search clearing.
 */

$(document).ready(function() {
    function filterCourses() {
        const query = $("#courseSearch").val().toLowerCase().trim();
        let matchCount = 0;

        $(".course-item").each(function() {
            const courseTitle = $(this).find(".course-title").text();
            if (courseTitle.toLowerCase().includes(query)) {
                $(this).show();
                matchCount++;
                if (query.length > 0) {
                    $(this).css("background-color", "#fef9c3");
                } else {
                    $(this).css("background-color", "white");
                }
            } else {
                $(this).hide();
            }
        });

        $("#matchCount").text(matchCount);
    }

    // 1. Real-time filtering via keyup
    $("#courseSearch").on("keyup", filterCourses);

    // 5. Clear search button
    $("#clearSearchBtn").on("click", function() {
        $("#courseSearch").val("");
        filterCourses();
    });

    filterCourses();
});
