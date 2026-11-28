/**
 * Question 3: Interactive FAQ
 * jQuery FAQ accordion: click toggle, hover color change, dblclick collapse all, focus/blur highlight.
 */

$(document).ready(function() {
    // 1. Click question -> toggle answer visibility
    $(".faq-question").on("click", function() {
        $(this).next(".faq-answer").slideToggle(250);
    });

    // 2. Hover -> change question color
    $(".faq-question").hover(
        function() { $(this).css("color", "#2563eb"); },
        function() { $(this).css("color", "#1e293b"); }
    );

    // 3. Double-click question -> collapse all answers
    $(".faq-question").on("dblclick", function() {
        $(".faq-answer").slideUp(250);
    });

    // 4. Focus on answer input -> highlight parent question
    $(".faq-input").on("focus", function() {
        $(this).closest(".faq-item").find(".faq-question").css("background-color", "#fef9c3");
    });

    // 5. Blur from input -> reset background color
    $(".faq-input").on("blur", function() {
        $(this).closest(".faq-item").find(".faq-question").css("background-color", "");
    });
});
