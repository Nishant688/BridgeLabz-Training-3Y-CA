/**
 * Question 8: Movie Ticket Booking System
 * Demonstrates inheritance and prototype method chaining with MovieTicket and OnlineTicket.
 */

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to MovieTicket.prototype
MovieTicket.prototype.printTicket = function() {
    return `[Ticket] Movie: ${this.movieName} | Seat: ${this.seatNo} | Base: ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee = 50) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }

    printOnlineSummary() {
        // Accessing inherited prototype method printTicket()
        const baseInfo = this.printTicket();
        return `${baseInfo} | Fee: ₹${this.convenienceFee} | Total: ₹${this.getTotalAmount()}`;
    }
}

console.log("=== Movie Ticket Prototype Chain Demonstration ===");
const tkt = new OnlineTicket("Interstellar: IMAX Re-release", "G-14", 450, 60);

console.log("Calling inherited printTicket():", tkt.printTicket());
console.log("Online Summary with Fee      :", tkt.printOnlineSummary());
