/**
 * Question 7: Customer Feedback Processor
 * Analyzes review strings for word count and sentiment using includes(), split(), and conditionals.
 */

function processFeedback(feedback) {
    // Count words by splitting on whitespaces
    const words = feedback.trim().split(/\s+/);
    const wordCount = words.length;

    // Check if feedback includes negative indicators
    const lower = feedback.toLowerCase();
    const hasNegativeWords = lower.includes("bad") || lower.includes("poor") || lower.includes("terrible");

    let sentiment = "";
    if (!hasNegativeWords) {
        sentiment = "Positive Feedback";
    } else {
        sentiment = "Needs Improvement";
    }

    return {
        FeedbackExcerpt: feedback.length > 40 ? feedback.slice(0, 37) + "..." : feedback,
        WordCount: wordCount,
        SentimentClassification: sentiment
    };
}

console.log("=== Customer Feedback Processor ===");
console.table([
    processFeedback("Great product! Fast delivery and amazing sound quality!"),
    processFeedback("The battery life is poor and delivery was bad."),
    processFeedback("Decent build quality, highly satisfied with the finish.")
]);
