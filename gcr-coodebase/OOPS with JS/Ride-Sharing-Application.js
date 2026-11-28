/**
 * Question 5: Ride-Sharing Application
 * Class hierarchy (User -> Driver, Trip) with fare calculation and error handling.
 */

class User {
    constructor(name, rating = 5.0) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleDetails) {
        super(name, rating);
        this.vehicleDetails = vehicleDetails;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distanceKm, driver, rider) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distanceKm = distanceKm;
        this.driver = driver;
        this.rider = rider;
    }

    calculateFare() {
        if (this.distanceKm === undefined || this.distanceKm === null || typeof this.distanceKm !== "number") {
            throw new Error("Invalid distance: distance must be provided as a number.");
        }
        if (this.distanceKm <= 0) {
            throw new Error(`Invalid distance (${this.distanceKm} km): Distance must be greater than zero.`);
        }

        const baseFare = 50;
        const perKmRate = 14;
        const totalFare = baseFare + (this.distanceKm * perKmRate);
        return {
            TripRoute: `${this.fromLocation} -> ${this.toLocation}`,
            Distance: `${this.distanceKm} km`,
            Driver: this.driver.name,
            Rider: this.rider.name,
            TotalFare: `₹${totalFare}`
        };
    }
}

console.log("=== Ride-Sharing Trip Calculations ===");
const rider = new User("Rahul Verma", 4.9);
const driver = new Driver("Karamjit Singh", 4.8, "Swift Dzire (DL-01-AB-1234)");

// Scenario 1: Valid trip
try {
    const validTrip = new Trip("Cyber City", "Indira Gandhi Airport", 18.5, driver, rider);
    console.table([validTrip.calculateFare()]);
} catch (err) {
    console.error("Trip error:", err.message);
}

// Scenario 2: Negative distance error handling
try {
    const invalidTrip = new Trip("Connaught Place", "Noida Sector 62", -10, driver, rider);
    invalidTrip.calculateFare();
} catch (err) {
    console.warn("[Caught Trip Validation Error]", err.message);
}
