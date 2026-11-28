/**
 * Question 3: Library Management System
 * Manages Book objects, availability checks, and issue/return operations by ISBN.
 */

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`[Notice] '${this.title}' (ISBN: ${this.isbn}) is already issued to another reader.`);
            return false;
        }
        this.isIssued = true;
        console.log(`[Success] '${this.title}' has been successfully issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`[Notice] '${this.title}' was not checked out.`);
            return false;
        }
        this.isIssued = false;
        console.log(`[Success] '${this.title}' has been returned to the library.`);
        return true;
    }
}

// Initializing book repository
const libraryCatalog = [
    new Book("Clean Code", "Robert C. Martin", "978-0132350884", false),
    new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244", true),
    new Book("Design Patterns", "Erich Gamma", "978-0201633610", false),
    new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748", false)
];

// Display all available books
function displayAvailableBooks(catalog) {
    console.log("=== Available Books in Catalog ===");
    const available = catalog.filter(b => !b.isIssued);
    console.table(available.map(b => ({
        Title: b.title,
        Author: b.author,
        ISBN: b.isbn,
        Status: "Available"
    })));
}

// Issue a book by searching ISBN
function issueBookByISBN(catalog, targetISBN) {
    console.log(`\nSearching catalog for ISBN '${targetISBN}'...`);
    const book = catalog.find(b => b.isbn === targetISBN);
    if (!book) {
        console.log(`[Error] Book with ISBN '${targetISBN}' not found in catalog.`);
        return;
    }
    book.issueBook();
}

displayAvailableBooks(libraryCatalog);
issueBookByISBN(libraryCatalog, "978-0132350884"); // Issue Clean Code
issueBookByISBN(libraryCatalog, "978-1491904244"); // Already issued
displayAvailableBooks(libraryCatalog);
