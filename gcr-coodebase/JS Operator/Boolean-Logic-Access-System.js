/**
 * Question 5: Boolean Logic Access System
 * Evaluates smart home security state combining boolean operators (&&, ||, !).
 */

function verifyHomeAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Condition: Alarm is on, Door and Window are closed, and Owner is inside
    // Access is "Secure" if alarm is ON, door is locked (closed/secured), window is closed, and owner is inside
    const isSystemSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    return {
        DoorLocked: isDoorLocked ? "YES" : "NO",
        WindowClosed: isWindowClosed ? "YES" : "NO",
        AlarmArmed: isAlarmOn ? "YES" : "NO",
        OwnerInside: isOwnerInside ? "YES" : "NO",
        SecurityStatus: isSystemSecure ? "Secure" : "Unsafe"
    };
}

console.log("=== Smart Home Boolean Logic Access Scenarios ===");
console.table([
    verifyHomeAccess(true, true, true, true),    // Fully secure
    verifyHomeAccess(false, true, true, true),   // Door unlocked -> Unsafe
    verifyHomeAccess(true, false, true, true),   // Window open -> Unsafe
    verifyHomeAccess(true, true, false, true),   // Alarm off -> Unsafe
    verifyHomeAccess(true, true, true, false)    // Owner outside -> Unsafe
]);
