/**
 * Question 1: Welcome Page Greeting
 * Uses jQuery for document ready, time-based greeting, text changes, toggle visibility, and click alerts.
 */

$(document).ready(function() {
    // 1. On page load: personalized greeting based on time of day
    const hour = new Date().getHours();
    let greetingText = "";
    if (hour < 12) {
        greetingText = "Good Morning, Welcome to our Platform!";
    } else if (hour >= 12 && hour <= 17) {
        greetingText = "Good Afternoon, Great to see you!";
    } else {
        greetingText = "Good Evening, Hope you had a productive day!";
    }
    $("#greetingMessage").text(greetingText);

    // 2. Change Greeting button: update text to motivational quote
    const quotes = [
        "Believe you can and you're halfway there.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "Simplicity is the soul of efficiency.",
        "Make it work, make it right, make it fast."
    ];
    $("#changeGreetingBtn").on("click", function() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        $("#greetingMessage").fadeOut(200, function() {
            $(this).text(randomQuote).fadeIn(200);
        });
    });

    // 3. Toggle visibility of welcome banner
    $("#toggleGreetingBtn").on("click", function() {
        $("#greetingBanner").slideToggle(300);
    });

    // 4. Alert on clicking greeting
    $("#greetingMessage").on("click", function() {
        alert("You clicked the greeting banner: " + $(this).text());
    });
});
