/**
 * Question 4: Employee Inheritance & Runtime Polymorphism
 * Base class Employee overridden by Manager to demonstrate dynamic method dispatch.
 */

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} (${this.department}) is executing routine development tasks.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Overriding work() method: Polymorphism
    work() {
        return `Manager ${this.name} is orchestrating sprint roadmaps and mentoring a team of ${this.teamSize} engineers in ${this.department}.`;
    }
}

console.log("=== Employee Inheritance & Runtime Polymorphism ===");
const teamMembers = [
    new Employee("Nishant Prajapati", "Frontend Engineering"),
    new Manager("Sarah Connor", "Engineering Infrastructure", 12),
    new Employee("Aarav Sen", "Quality Assurance")
];

// Runtime polymorphism: identical call signature 'work()' produces context-specific behavior
teamMembers.forEach(member => console.log(member.work()));
