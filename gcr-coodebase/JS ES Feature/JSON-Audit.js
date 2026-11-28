"use strict";
/**
 * Question 9: JSON Audit
 * Audits raw JSON payloads, catches syntax errors, verifies mandatory keys, and converts data types.
 */

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Leo","age":16}'
];

const validRecords = [];
const errorLogs = [];

rawData.forEach((entry, idx) => {
    try {
        // Step 1: Parse JSON
        const parsed = JSON.parse(entry);

        // Step 2: Validate mandatory keys
        if (!("user" in parsed) || !("age" in parsed)) {
            throw new Error("Missing required keys ('user' and/or 'age')");
        }

        // Step 3: Type conversion
        const ageNum = Number(parsed.age);
        if (isNaN(ageNum)) {
            throw new Error(`Invalid age format: '${parsed.age}'`);
        }

        // Step 4: Bonus filter: check for age >= 18
        if (ageNum >= 18) {
            validRecords.push({ RecordIndex: idx, User: parsed.user, Age: ageNum, EligibleAdult: "YES" });
        } else {
            validRecords.push({ RecordIndex: idx, User: parsed.user, Age: ageNum, EligibleAdult: "NO (Under 18)" });
        }
    } catch (e) {
        errorLogs.push({
            RecordIndex: idx,
            RawEntry: entry,
            ErrorReason: e.message
        });
    }
});

console.log("=== Valid Parsed & Audited JSON Records ===");
console.table(validRecords);

console.log("\n=== JSON Audit Error Log ===");
console.table(errorLogs);
