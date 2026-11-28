/**
 * Question 5: Team Members Directory
 * DOM traversal methods: .children(), .next(), .siblings(), .parent(), .find().
 */

$(document).ready(function() {
    // 1. Click manager -> highlight all direct reports
    $(".manager-card").on("click", function() {
        $(this).closest(".department-block").find(".report-card").toggleClass("highlight-reports");
    });

    // 2. Hover on employee -> show contact info using .next()
    $(".employee-name").hover(
        function() { $(this).next(".contact-info").stop(true, true).slideDown(150); },
        function() { $(this).next(".contact-info").stop(true, true).slideUp(150); }
    );

    // 3. Click department -> change background of all members using .children()
    $(".dept-header").on("click", function() {
        $(this).parent().children(".team-roster").toggleClass("dept-bg-active");
    });

    // 4. Select random employee -> highlight sibling employees
    $(".employee-item").on("click", function(e) {
        e.stopPropagation();
        $(this).siblings().removeClass("sibling-highlight");
        $(this).siblings().addClass("sibling-highlight");
        $(this).removeClass("sibling-highlight").addClass("self-selected");
    });

    // 5. Collapse/expand team using .parent() and .find()
    $(".toggle-team-btn").on("click", function() {
        $(this).parent().find(".team-roster").slideToggle(200);
    });
});
