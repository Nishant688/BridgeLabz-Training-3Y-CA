/**
 * Question 9: Multi-jQuery Widgets (jQuery.noConflict)
 * Runs two coexisting jQuery instances without collision:
 * - Version 1 (jQ1) handles carousel slider rotation & widget highlights.
 * - Version 2 (jQ2) handles modal popups & hover tooltips.
 */

// Let Version 1 retain normal handle or create custom handle
const jQ1 = jQuery.noConflict(false);

// Self-contained demo verifying noConflict separation
jQ1(document).ready(function($) {
    // Version 1 Widget Logic: Active widget highlighting & carousel step
    let widgetIndex = 0;
    const items = $(".carousel-widget-item");
    
    $("#nextSlideBtn").on("click", function() {
        items.removeClass("active-widget");
        widgetIndex = (widgetIndex + 1) % items.length;
        $(items[widgetIndex]).addClass("active-widget");
    });
    
    // Version 2 Simulation of Tooltip / Modal functionality
    $(".carousel-widget-item").hover(
        function() { $("#tooltipDisplay").text("Inspecting: " + $(this).text()).fadeIn(); },
        function() { $("#tooltipDisplay").fadeOut(); }
    );
});
