/**
 * Question 5: Movie Ticket Booking
 * Validates booking inputs (Name, Email, Seats 1-10) and returns structured ticket objects.
 */

function validateAndBookTicket(name, email, seats) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const seatNumber = Number(seats);

    if (!nameRegex.test(name.trim())) {
        return { success: false, message: "Invalid Name: Alphabets only permitted." };
    }
    if (!emailRegex.test(email.trim())) {
        return { success: false, message: "Invalid Email format." };
    }
    if (isNaN(seatNumber) || seatNumber < 1 || seatNumber > 10) {
        return { success: false, message: "Invalid Seats: Please select between 1 and 10 seats." };
    }

    const ticketBooking = {
        bookingId: "TKT-" + Math.floor(100000 + Math.random() * 900000),
        name: name.trim(),
        email: email.trim(),
        seats: seatNumber,
        pricePerSeat: 250,
        totalAmount: seatNumber * 250,
        bookingTime: new Date().toISOString()
    };

    return { success: true, ticket: ticketBooking };
}

console.log("=== Movie Ticket Booking Scenarios ===");
console.log("Scenario 1 (Valid):", validateAndBookTicket("Aditi Rao", "aditi@cinema.com", 4));
console.log("Scenario 2 (Invalid Seats):", validateAndBookTicket("Kunal Shah", "kunal@cinema.com", 15));
console.log("Scenario 3 (Invalid Name):", validateAndBookTicket("User123", "user@cinema.com", 2));
