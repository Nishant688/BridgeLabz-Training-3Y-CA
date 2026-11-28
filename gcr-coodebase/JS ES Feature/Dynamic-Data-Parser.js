"use strict";
/**
 * Question 1: Dynamic Data Parser
 * Converts mixed API data values into Number, Boolean, and String forms, separating valid numbers.
 */

const apiData = ["25", "true", "false", "NaN", "   ", "100px", "3.14", null, undefined];

const validNumeric = [];
const invalidNumeric = [];
const fullConversionReport = [];

for (let i = 0; i < apiData.length; i++) {
    const raw = apiData[i];
    
    // Explicit Conversions
    const asString = String(raw);
    const asBoolean = Boolean(raw);
    
    // Number conversion evaluation
    let asNumber;
    let isNumericValid = false;

    if (raw === null || raw === undefined || (typeof raw === "string" && raw.trim() === "")) {
        // Empty strings, null, undefined should not be counted as valid numbers
        asNumber = Number(raw);
        isNumericValid = false;
    } else {
        asNumber = Number(raw);
        isNumericValid = !isNaN(asNumber);
    }

    if (isNumericValid) {
        validNumeric.push({ index: i, original: raw, numericValue: asNumber });
    } else {
        invalidNumeric.push({ index: i, original: raw, reason: isNaN(asNumber) ? "Evaluated to NaN" : "Empty / Null value" });
    }

    fullConversionReport.push({
        Index: i,
        Original: String(raw),
        ToString: asString,
        ToBoolean: asBoolean,
        ToNumber: isNaN(asNumber) ? "NaN" : asNumber,
        ValidNumber: isNumericValid ? "YES" : "NO"
    });
}

console.log("=== Dynamic Data Parser Full Report ===");
console.table(fullConversionReport);

console.log("\n=== Valid Numeric Data Array ===");
console.table(validNumeric);

console.log("\n=== Invalid Data Logged Separately ===");
console.table(invalidNumeric);
