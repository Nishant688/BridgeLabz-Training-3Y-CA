/**
 * Question 2: String Manipulation Report
 * Formats e-commerce product titles using trim, split, map, join, replace, and length.
 */

function cleanProductTitle(rawTitle) {
    // 1. Trim extraneous outer whitespaces
    const trimmed = rawTitle.trim();

    // 2. Convert string to lowercase, split by words, and capitalize the first letter of each word
    const words = trimmed.toLowerCase().split(/\s+/);
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const titleCased = capitalizedWords.join(" ");

    // 3. Replace "pro" or "Pro" with "Pro Edition"
    const finalTitle = titleCased.replace(/\bPro\b/gi, "Pro Edition");

    return {
        Original: rawTitle,
        CleanedTitle: finalTitle,
        CharacterLength: finalTitle.length
    };
}

console.log("=== String Manipulation Report ===");
const sample = "   wireless headphones PRO   ";
const result = cleanProductTitle(sample);
console.log("Raw Input:       ", `"${result.Original}"`);
console.log("Cleaned Title:   ", `"${result.CleanedTitle}"`);
console.log("Cleaned Length:  ", result.CharacterLength);
