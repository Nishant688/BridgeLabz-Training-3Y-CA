/**
 * Question 2: Multi-Type Data Summary
 * Simulates a database summary of various data types using typeof, Array.isArray(), and console.table().
 */

// Declaring variables of different JavaScript primitive and complex data types
const userName = "Nishant Prajapati";       // string
const userAge = 22;                         // number
const isEnrolled = true;                    // boolean
const skills = ["JavaScript", "HTML", "CSS"]; // array
const profileMeta = { role: "Developer" };   // object
const pendingTicket = null;                 // null
let graduationDate;                         // undefined

// Helper function to reliably resolve precise data types
function resolveDataType(val) {
    if (val === null) return "null";
    if (Array.isArray(val)) return "array";
    return typeof val;
}

// Building structured summary entries for console.table
const dataEntries = [
    { Label: "userName", Value: userName, ResolvedType: resolveDataType(userName) },
    { Label: "userAge", Value: userAge, ResolvedType: resolveDataType(userAge) },
    { Label: "isEnrolled", Value: isEnrolled, ResolvedType: resolveDataType(isEnrolled) },
    { Label: "skills", Value: JSON.stringify(skills), ResolvedType: resolveDataType(skills) },
    { Label: "profileMeta", Value: JSON.stringify(profileMeta), ResolvedType: resolveDataType(profileMeta) },
    { Label: "pendingTicket", Value: String(pendingTicket), ResolvedType: resolveDataType(pendingTicket) },
    { Label: "graduationDate", Value: String(graduationDate), ResolvedType: resolveDataType(graduationDate) }
];

console.log("=== Multi-Type Data Summary Report ===");
console.table(dataEntries);
