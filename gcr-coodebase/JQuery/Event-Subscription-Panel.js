/**
 * Question 6: Event Subscription Panel
 * Event binding with .on(), unbinding with .off(), dynamic DOM generation and feedback alerts.
 */

$(document).ready(function() {
    let notificationsActive = true;

    function handleTopicClick() {
        if (!notificationsActive) {
            alert("Notifications are disabled. Click 'Subscribe' to re-enable.");
            return;
        }
        const topic = $(this).text();
        $("#feedbackMsg").stop(true, true).html(`✔ Subscribed to updates for: <strong>${topic}</strong>`).fadeIn().delay(1800).fadeOut();
    }

    // Attach initial events using .on()
    $("#topicList").on("click", ".topic-item", handleTopicClick);

    // 1. Subscribe button
    $("#subscribeBtn").on("click", function() {
        notificationsActive = true;
        $("#statusText").text("Active").css("color", "#16a34a");
        $("#topicList").on("click", ".topic-item", handleTopicClick);
        $("#feedbackMsg").html("All notification channels ENABLED.").fadeIn().delay(1500).fadeOut();
    });

    // 2. Unsubscribe button -> .off()
    $("#unsubscribeBtn").on("click", function() {
        notificationsActive = false;
        $("#statusText").text("Disabled").css("color", "#dc2626");
        $("#topicList").off("click", ".topic-item");
        $("#feedbackMsg").html("All notifications DISABLED.").fadeIn().delay(1500).fadeOut();
    });

    // 3. Dynamically add topic
    $("#addTopicBtn").on("click", function() {
        const newTopic = $("#newTopicInput").value = $("#newTopicInput").val().trim();
        if (!newTopic) return;
        $("#topicList").append(`<li class="topic-item">${newTopic}</li>`);
        $("#newTopicInput").val("");
    });
});
