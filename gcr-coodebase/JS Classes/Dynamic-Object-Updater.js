/**
 * Question 8: Dynamic Object Updater
 * Updates user object in real-time from form values and syncs DOM representation.
 */

let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

function updateUser(newName, newEmail, newAge) {
    user.name = newName;
    user.email = newEmail;
    user.age = Number(newAge);
    console.log("[State Updated] Current User Object:", user);
    return user;
}

console.log("Initial User:", user);
updateUser("Johnathon Doe", "john.doe@enterprise.com", 24);
console.log("Updated User:", user);
