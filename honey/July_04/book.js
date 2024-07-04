class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    return this.books.map((book) => book.getInfo()).join("\n");
  }

  findBookByTitle(title) {
    const book = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    return book ? book.getInfo() : `Book titled "${title}" not found.`;
  }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

const myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log("List of all books in the library:");
console.log(myLibrary.listBooks());

console.log("\nSearching for '1984':");
console.log(myLibrary.findBookByTitle("1984"));

console.log("\nSearching for 'Moby Dick':");
console.log(myLibrary.findBookByTitle("Moby Dick"));
