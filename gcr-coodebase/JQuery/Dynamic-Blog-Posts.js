/**
 * Question 8: Dynamic Blog Posts
 * Demonstrates DOM mutation methods: .append(), .prepend(), .last().remove(), .before(), .after().
 */

$(document).ready(function() {
    let postCount = 3;

    // 1. Add New Post (append at bottom)
    $("#appendPostBtn").on("click", function() {
        postCount++;
        $("#postContainer").append(`
            <article class="blog-card" id="post-${postCount}">
                <h3>Standard Post #${postCount}: Optimizing Web Performance</h3>
                <p>Exploring modern caching and asynchronous pipeline patterns.</p>
            </article>
        `);
    });

    // 2. Prepend Featured Post (at top)
    $("#prependPostBtn").on("click", function() {
        postCount++;
        $("#postContainer").prepend(`
            <article class="blog-card featured-post" id="post-${postCount}">
                <h3>⭐ FEATURED: Next-Gen FullStack Architecture #${postCount}</h3>
                <p>Groundbreaking release of distributed serverless primitives.</p>
            </article>
        `);
    });

    // 3. Remove Last Post
    $("#removeLastBtn").on("click", function() {
        $("#postContainer .blog-card").last().remove();
    });

    // 4. Add Tags before and after posts
    $("#addTagsBtn").on("click", function() {
        $(".blog-card").before('<div class="tag-banner" style="color:#6366f1;font-size:0.75rem;font-weight:bold;">▶ Tech Insights</div>');
    });

    // 5. Highlight posts with specific keywords
    $("#highlightKeywordBtn").on("click", function() {
        $(".blog-card:contains('Architecture'), .blog-card:contains('Performance')").css({
            "border": "2px solid #f59e0b",
            "background-color": "#fefce8"
        });
    });
});
